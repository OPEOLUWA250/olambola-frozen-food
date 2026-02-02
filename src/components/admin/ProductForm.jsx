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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload Section */}
      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-slate-50">
        <label className="block text-sm font-thin text-black mb-3">
          📷 Product Image
        </label>
        {imagePreview ? (
          <div className="relative mb-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-48 mx-auto rounded-xl shadow-md"
            />
            <button
              type="button"
              onClick={() => {
                setImagePreview(null);
                setImageFile(null);
              }}
              className="mt-3 text-xs bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <p className="text-black text-sm mb-3 font-thin">No image selected</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded-lg cursor-pointer text-black"
        />
        <p className="text-xs text-black mt-2 font-thin">
          JPG, PNG or GIF (max 5MB)
        </p>
      </div>

      <div>
        <label className="block text-sm font-thin text-black mb-2">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
          placeholder="e.g., Premium Chicken"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-thin text-black mb-2">
            Price (₦)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
            placeholder="3500"
          />
        </div>

        <div>
          <label className="block text-sm font-thin text-black mb-2">
            Weight (kg)
          </label>
          <input
            type="text"
            name="kg"
            value={formData.kg}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
            placeholder="e.g., 1.5"
          />
        </div>

        <div>
          <label className="block text-sm font-thin text-black mb-2">
            Size
          </label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
            placeholder="e.g., Large, Medium"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-thin text-black mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-thin text-black mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white resize-none"
          placeholder="Describe the product..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-blue-800 hover:to-blue-600 text-black font-thin py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
