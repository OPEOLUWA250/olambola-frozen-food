import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    fetchProducts();

    // Subscribe to real-time updates
    const channel = supabase
      .channel("products_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setProducts((prev) => [...prev, payload.new]);
          } else if (payload.eventType === "UPDATE") {
            setProducts((prev) =>
              prev.map((p) => (p.id === payload.new.id ? payload.new : p)),
            );
          } else if (payload.eventType === "DELETE") {
            setProducts((prev) => prev.filter((p) => p.id !== payload.old.id));
          }
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const fetchProducts = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product, imageFile) => {
    if (!supabase) throw new Error("Supabase not configured");

    let imageUrl = product.image_url;

    // Upload image if provided
    if (imageFile) {
      try {
        // Sanitize file name
        const sanitizedName = imageFile.name
          .replace(/[^a-zA-Z0-9._-]/g, "_")
          .toLowerCase();
        const fileName = `public/${Date.now()}_${sanitizedName}`;

        // Upload with upsert to avoid conflicts
        const { data, error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(fileName, imageFile, { upsert: true });

        if (uploadError) {
          console.error("Upload error details:", uploadError);
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName);

        imageUrl = urlData.publicUrl;
        console.log("Image uploaded successfully:", imageUrl);
      } catch (err) {
        console.error("Image upload error:", err);
        throw err;
      }
    }

    const newProduct = {
      ...product,
      image_url: imageUrl,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Optimistic update: add product to UI immediately
    setProducts((prev) => [newProduct, ...prev]);

    try {
      const { data, error } = await supabase
        .from("products")
        .insert([newProduct]);
      if (error) throw error;
    } catch (err) {
      // If insertion fails, remove the optimistic product
      setProducts((prev) =>
        prev.filter((p) => p.created_at !== newProduct.created_at),
      );
      throw err;
    }
  };

  const updateProduct = async (id, product, imageFile) => {
    if (!supabase) throw new Error("Supabase not configured");

    let imageUrl = product.image_url;

    // Upload image if provided
    if (imageFile) {
      try {
        // Sanitize file name
        const sanitizedName = imageFile.name
          .replace(/[^a-zA-Z0-9._-]/g, "_")
          .toLowerCase();
        const fileName = `public/${Date.now()}_${sanitizedName}`;

        // Upload with upsert to avoid conflicts
        const { data, error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(fileName, imageFile, { upsert: true });

        if (uploadError) {
          console.error("Upload error details:", uploadError);
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName);

        imageUrl = urlData.publicUrl;
        console.log("Image uploaded successfully:", imageUrl);
      } catch (err) {
        console.error("Image upload error:", err);
        throw err;
      }
    }

    const { error } = await supabase
      .from("products")
      .update({
        ...product,
        image_url: imageUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) throw error;
  };

  const deleteProduct = async (id) => {
    if (!supabase) throw new Error("Supabase not configured");

    // Optimistic update: remove from UI immediately
    setProducts((prev) => prev.filter((p) => p.id !== id));

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    } catch (err) {
      // If deletion fails, refetch products to restore state
      fetchProducts();
      throw err;
    }
  };

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};

