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

  const showMessage = (text) => {
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

      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="w-full px-3 xs:px-3.5 sm:px-4 md:px-6 lg:px-8 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in">
              <div className="flex flex-col xs:flex-row xs:items-end xs:gap-3 mb-3">
                <div className="flex items-center gap-2 mb-2 xs:mb-0">
                  <div className="h-0.5 w-5 xs:w-6 sm:w-7 md:w-8 bg-linear-to-r from-primary to-secondary rounded-full"></div>
                  <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-black">
                    Product Management
                  </h1>
                </div>
              </div>
              <p className="text-black text-xs xs:text-xs sm:text-sm md:text-base font-thin text-opacity-70 px-0 xs:px-0">
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
                className={`mb-5 xs:mb-6 sm:mb-7 md:mb-8 p-3 xs:p-3.5 sm:p-4 md:p-5 rounded-lg xs:rounded-xl border-l-4 animate-slide-down ${
                  message.includes("✅")
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-red-50 border-red-500 text-red-700"
                }`}
              >
                <p className="font-semibold text-xs xs:text-sm sm:text-base">
                  {message}
                </p>
              </div>
            )}

            {/* Form Section */}
            {showForm && (
              <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 bg-white rounded-xl xs:rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-200 animate-scale-in">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3 xs:gap-4 mb-5 xs:mb-6 sm:mb-7 md:mb-8">
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-black">
                    {editingProduct ? "✏️ Edit Product" : "➕ Add New Product"}
                  </h2>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditingProduct(null);
                    }}
                    className="text-xl xs:text-2xl md:text-3xl text-black hover:text-primary transition-colors duration-200 self-end xs:self-auto"
                  >
                    ✕
                  </button>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-slate-50 rounded-lg xs:rounded-xl md:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8">
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
              <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 flex justify-center animate-fade-in">
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setShowForm(true);
                  }}
                  className="bg-linear-to-r from-primary to-secondary hover:from-blue-800 hover:to-blue-600 text-black px-5 xs:px-6 sm:px-8 md:px-10 py-2.5 xs:py-3 md:py-4 rounded-lg xs:rounded-xl md:rounded-2xl font-thin transition-all transform hover:scale-105 shadow-lg md:shadow-xl text-sm xs:text-base md:text-lg w-full xs:w-auto"
                >
                  + Add New Product
                </button>
              </div>
            )}

            {/* Products Section */}
            <div className="bg-white rounded-xl xs:rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-200 animate-fade-in">
              <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 mb-2">
                  <div className="h-1 w-6 xs:w-7 sm:w-8 md:w-10 lg:w-12 bg-linear-to-r from-primary to-secondary rounded-full"></div>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-thin text-black">
                    📦 All Products
                  </h2>
                </div>
                <p className="text-black text-opacity-60 font-thin text-xs xs:text-xs sm:text-sm md:text-base ml-0">
                  {products.length} item{products.length !== 1 ? "s" : ""} in
                  inventory
                </p>
              </div>

              {loading ? (
                <div className="text-center py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
                  <div className="inline-block mb-4">
                    <div className="animate-spin rounded-full h-10 xs:h-12 sm:h-14 md:h-16 w-10 xs:w-12 sm:w-14 md:w-16 border-4 border-blue-100 border-t-primary"></div>
                  </div>
                  <p className="text-black text-sm xs:text-base md:text-lg font-thin text-opacity-60">
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
      </div>
    </>
  );
};
