import { useState } from "react";

export const ProductForm = ({
  onSubmit,
  initialData = null,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      price: "",
      category: "POULTRY",
      description: "",
      kg: "",
      size: "",
      image_url: "",
    },
  );
  const [imagePreview, setImagePreview] = useState(
    initialData?.image_url || null,
  );
  const [imageFile, setImageFile] = useState(null);

  const categories = ["POULTRY", "RED MEAT", "SEAFOOD", "VEGETABLES"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image file (JPG, PNG, GIF, or WebP)");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image file must be less than 5MB");
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, imageFile);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 xs:space-y-5 sm:space-y-6"
    >
      {/* Image Upload Section */}
      <div className="border-2 border-dashed border-slate-300 rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 text-center bg-slate-50 hover:bg-slate-100 transition-colors duration-200">
        <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-3">
          📷 Product Image
        </label>
        {imagePreview ? (
          <div className="relative mb-2 xs:mb-3 sm:mb-4 animate-scale-in">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-32 xs:max-h-36 sm:max-h-48 mx-auto rounded-lg sm:rounded-xl shadow-md"
            />
            <button
              type="button"
              onClick={() => {
                setImagePreview(null);
                setImageFile(null);
              }}
              className="mt-2 xs:mt-2.5 sm:mt-3 text-xs bg-red-500 hover:bg-red-600 text-white px-3 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <p className="text-black text-xs xs:text-xs sm:text-sm mb-2 xs:mb-3 font-thin">
            No image selected
          </p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-2 xs:px-2.5 sm:px-3 py-2 border border-slate-300 rounded-lg sm:rounded-xl cursor-pointer text-xs sm:text-sm text-black bg-white file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-thin file:bg-primary file:text-white hover:file:bg-blue-700 transition-all"
        />
        <p className="text-xs text-black mt-2 xs:mt-2.5 font-thin">
          JPG, PNG, GIF or WebP (max 5MB)
        </p>
      </div>

      <div className="animate-fade-in">
        <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white text-xs sm:text-base"
          placeholder="e.g., Premium Chicken"
        />
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-3 sm:gap-4">
        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
            Price (₦)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white text-xs sm:text-base"
            placeholder="3500"
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
          <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
            Weight (kg)
          </label>
          <input
            type="text"
            name="kg"
            value={formData.kg}
            onChange={handleChange}
            className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white text-xs sm:text-base"
            placeholder="e.g., 1.5"
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
            Size
          </label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white text-xs sm:text-base"
            placeholder="e.g., Large, Medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 xs:gap-3 sm:gap-4">
        <div className="animate-fade-in" style={{ animationDelay: "250ms" }}>
          <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white text-xs sm:text-base"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
        <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white resize-none text-xs sm:text-base"
          placeholder="Describe the product..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-slate-950 hover:bg-slate-900 text-white font-thin py-2.5 xs:py-3 sm:py-3 md:py-4 rounded-lg xs:rounded-xl transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-xs xs:text-sm sm:text-base md:text-lg"
      >
        {isLoading
          ? "Saving..."
          : initialData
            ? "Update Product"
            : "Add Product"}
      </button>
    </form>
  );
};
