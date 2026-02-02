import { useState } from "react";
import { supabase } from "../services/supabase";

export const useAdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAdmins = async () => {
    if (!supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("admins")
        .select("id, email, role, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAdmins(data || []);
    } catch (err) {
      console.error("Error fetching admins:", err);
    } finally {
      setLoading(false);
    }
  };

  const addAdmin = async (email, password) => {
    if (!supabase) throw new Error("Supabase not configured");

    try {
      // Create a simple hash for the password (in production, use bcrypt on server)
      const passwordHash = btoa(password);

      const newAdmin = {
        email,
        password_hash: passwordHash,
        role: "admin",
        created_at: new Date().toISOString(),
      };

      // Optimistic update
      setAdmins((prev) => [{ ...newAdmin, id: Date.now() }, ...prev]);

      const { error } = await supabase.from("admins").insert([newAdmin]);

      if (error) throw error;

      // Fetch fresh data to get the real ID
      await fetchAdmins();
    } catch (err) {
      // Rollback optimistic update
      await fetchAdmins();
      throw err;
    }
  };

  const updateAdminPassword = async (id, newPassword) => {
    if (!supabase) throw new Error("Supabase not configured");

    try {
      const passwordHash = btoa(newPassword);

      const { error } = await supabase
        .from("admins")
        .update({ password_hash: passwordHash })
        .eq("id", id);

      if (error) throw error;

      // Update local state
      setAdmins((prev) =>
        prev.map((admin) =>
          admin.id === id ? { ...admin, password_hash: passwordHash } : admin,
        ),
      );
    } catch (err) {
      console.error("Error updating password:", err);
      throw err;
    }
  };

  const deleteAdmin = async (id) => {
    if (!supabase) throw new Error("Supabase not configured");

    try {
      // Optimistic update
      setAdmins((prev) => prev.filter((admin) => admin.id !== id));

      const { error } = await supabase.from("admins").delete().eq("id", id);

      if (error) throw error;
    } catch (err) {
      // Rollback optimistic update
      await fetchAdmins();
      throw err;
    }
  };

  return {
    admins,
    loading,
    fetchAdmins,
    addAdmin,
    updateAdminPassword,
    deleteAdmin,
  };
};
