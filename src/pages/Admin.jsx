import { useState } from "react";
import { AdminNav } from "../components/admin/AdminNav";
import { ProductForm } from "../components/admin/ProductForm";
import { ProductList } from "../components/admin/ProductList";
import { useProducts } from "../hooks/useProducts";
import "../admin-styles.css";

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
            <div className="mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 animate-fade-in">
              <div className="flex flex-col xs:flex-row xs:items-end xs:gap-3 mb-3">
                <div className="flex items-center gap-2 mb-2 xs:mb-0">
                  <div className="h-1 w-6 xs:w-7 sm:w-8 md:w-10 lg:w-12 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"></div>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black flex items-center gap-2">
                    <i className="fas fa-box text-blue-600"></i>
                    Product Management
                  </h1>
                </div>
              </div>
              <p className="text-black text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-opacity-70 ml-8 xs:ml-9 sm:ml-10">
                Manage your frozen food inventory •{" "}
                <span className="text-black font-bold text-shadow">
                  {products.length}
                </span>{" "}
                products
              </p>
            </div>

            {/* Message Alert */}
            {message && (
              <div
                className={`mb-6 xs:mb-7 sm:mb-8 md:mb-10 p-4 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl md:rounded-2xl border-l-4 animate-slide-down glass shadow-lg ${
                  message.includes("✅")
                    ? "bg-linear-to-r from-green-50 to-emerald-50 border-green-500 text-green-700"
                    : "bg-linear-to-r from-red-50 to-rose-50 border-red-500 text-red-700"
                }`}
              >
                <p className="font-bold text-xs xs:text-sm sm:text-base">
                  {message}
                </p>
              </div>
            )}

            {/* Form Section */}
            {showForm && (
              <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20 bg-white rounded-xl xs:rounded-2xl md:rounded-3xl shadow-2xl md:shadow-3xl p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-200 glass animate-scale-in">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-4 xs:gap-5 sm:gap-6 mb-6 xs:mb-7 sm:mb-8 md:mb-10">
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black flex items-center gap-2">
                    <i className="fas fa-plus-circle text-blue-600"></i>
                    {editingProduct ? "Edit Product" : "Add New Product"}
                  </h2>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditingProduct(null);
                    }}
                    className="text-2xl xs:text-3xl md:text-4xl text-black hover:text-red-500 transition-colors duration-200 hover:scale-125 transform self-end xs:self-auto"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="bg-linear-to-br from-blue-50 via-purple-50 to-slate-50 rounded-lg xs:rounded-xl md:rounded-2xl p-5 xs:p-6 sm:p-8 md:p-10 border border-blue-200/50">
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
              <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20 flex justify-center animate-fade-in">
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setShowForm(true);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 xs:px-7 sm:px-9 md:px-12 py-3 xs:py-3.5 md:py-4.5 rounded-lg xs:rounded-xl md:rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg md:shadow-xl hover:shadow-2xl text-sm xs:text-base md:text-lg btn-sleek w-full xs:w-auto flex items-center justify-center gap-2"
                >
                  <i className="fas fa-plus"></i>
                  <span>Add New Product</span>
                </button>
              </div>
            )}

            {/* Products Section */}
            <div className="bg-white rounded-xl xs:rounded-2xl md:rounded-3xl shadow-2xl md:shadow-3xl p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-200 glass animate-fade-in">
              <div className="mb-7 xs:mb-8 sm:mb-10 md:mb-12">
                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-2">
                  <div className="h-1 w-6 xs:w-7 sm:w-8 md:w-10 bg-linear-to-r from-blue-600 to-blue-800 rounded-full shadow-lg"></div>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black flex items-center gap-2">
                    <i className="fas fa-boxes text-blue-600"></i>
                    All Products
                  </h2>
                </div>
                <p className="text-black text-opacity-60 font-semibold text-xs xs:text-sm sm:text-base md:text-lg ml-0 md:ml-1">
                  <span className="text-black font-bold">
                    {products.length}
                  </span>{" "}
                  item{products.length !== 1 ? "s" : ""} in inventory
                </p>
              </div>

              {loading ? (
                <div className="text-center py-14 xs:py-16 sm:py-20 md:py-24 lg:py-32">
                  <div className="inline-block mb-4">
                    <div className="spinner-sleek h-12 xs:h-14 sm:h-16 md:h-20 w-12 xs:w-14 sm:w-16 md:w-20"></div>
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
