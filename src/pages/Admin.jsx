import { useState } from "react";
import { AdminNav } from "../components/admin/AdminNav";
import { ProductForm } from "../components/admin/ProductForm";
import { ProductList } from "../components/admin/ProductList";
import { useProducts } from "../hooks/useProducts";

export const Admin = () => {
  const { products, loading, addProduct, updateProduct, deleteProduct } =
    useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAddProduct = async (formData, imageFile) => {
    setIsProcessing(true);
    try {
      await addProduct(formData, imageFile);
      showMessage("✅ Product added successfully!");
      setShowForm(false);
    } catch (err) {
      showMessage("❌ " + (err.message || "Error adding product"), "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUpdateProduct = async (formData, imageFile) => {
    setIsProcessing(true);
    try {
      await updateProduct(editingProduct.id, formData, imageFile);
      showMessage("✅ Product updated successfully!");
      setEditingProduct(null);
      setShowForm(false);
    } catch (err) {
      showMessage("❌ " + (err.message || "Error updating product"), "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("Delete this product? This cannot be undone.")) return;

    setIsProcessing(true);
    try {
      await deleteProduct(id);
      showMessage("✅ Product deleted successfully!");
    } catch (err) {
      showMessage("❌ " + (err.message || "Error deleting product"), "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormSubmit = editingProduct
    ? handleUpdateProduct
    : handleAddProduct;

  return (
    <>
      <AdminNav />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <h1 className="text-3xl font-thin text-black">
                Product Management
              </h1>
            </div>
            <p className="text-black text-sm font-thin text-opacity-70">
              Manage your frozen food inventory •{" "}
              <span className="text-primary font-semibold">
                {products.length}
              </span>{" "}
              products
            </p>
          </div>

          {/* Message Alert */}
          {message && (
            <div
              className={`mb-8 p-4 rounded-xl border-l-4 ${
                message.includes("✅")
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-red-50 border-red-500 text-red-700"
              }`}
            >
              <p className="font-semibold">{message}</p>
            </div>
          )}

          {/* Form Section */}
          {showForm && (
            <div className="mb-16 bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-thin text-black">
                  {editingProduct ? "✏️ Edit Product" : "➕ Add New Product"}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingProduct(null);
                  }}
                  className="text-3xl text-black hover:text-primary transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
                <ProductForm
                  onSubmit={handleFormSubmit}
                  initialData={editingProduct}
                  isLoading={isProcessing}
                />
              </div>
            </div>
          )}

          {/* Add Product Button */}
          {!showForm && (
            <div className="mb-16 flex justify-center">
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setShowForm(true);
                }}
                className="bg-gradient-to-r from-primary to-secondary hover:from-blue-800 hover:to-blue-600 text-black px-10 py-4 rounded-2xl font-thin transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                + Add New Product
              </button>
            </div>
          )}

          {/* Products Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <h2 className="text-3xl font-thin text-black">
                  📦 All Products
                </h2>
              </div>
              <p className="text-black text-opacity-60 font-thin ml-0">
                {products.length} item{products.length !== 1 ? "s" : ""} in
                inventory
              </p>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block mb-4">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-primary"></div>
                </div>
                <p className="text-black text-lg font-thin text-opacity-60">
                  Loading products...
                </p>
              </div>
            ) : (
              <ProductList
                products={products}
                onEdit={handleEditClick}
                onDelete={handleDeleteProduct}
                isLoading={isProcessing}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
