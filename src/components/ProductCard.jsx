import { useState } from "react";

export const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAddToCart = (prod) => {
    setIsAdded(true);
    setShowAnimation(true);
    onAddToCart(prod);
    setTimeout(() => setIsAdded(false), 2000);
    setTimeout(() => setShowAnimation(false), 1500);
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-secondary h-full flex flex-col group transform hover:scale-105">
      {/* Image Section */}
      <div className="relative bg-linear-to-b from-slate-50 to-white aspect-square flex items-center justify-center overflow-hidden rounded-t-xl sm:rounded-t-2xl">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="text-5xl sm:text-6xl md:text-7xl bg-linear-to-br from-slate-50 to-blue-50 w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            📦
          </div>
        )}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-linear-to-r from-primary to-secondary text-white text-xs font-thin px-2.5 sm:px-3 py-1 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          {product.category}
        </div>
        {showAnimation && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 animate-pulse rounded-t-xl sm:rounded-t-2xl">
            <div className="text-5xl sm:text-6xl animate-bounce-slow">✅</div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
        <h3 className="font-thin text-sm sm:text-base md:text-lg mb-2 text-black line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>

        {/* Size & Weight Info */}
        {(product.kg || product.size) && (
          <div className="flex gap-1.5 sm:gap-2 mb-3 text-xs flex-wrap">
            {product.kg && (
              <span className="bg-linear-to-r from-blue-100 to-blue-50 text-black px-2 py-0.5 sm:py-1 rounded-full font-thin border border-blue-200 hover:border-blue-300 transition-colors duration-200 text-xs">
                ⚖️ {product.kg}kg
              </span>
            )}
            {product.size && (
              <span className="bg-linear-to-r from-slate-100 to-slate-50 text-black px-2 py-0.5 sm:py-1 rounded-full font-thin border border-slate-200 hover:border-slate-300 transition-colors duration-200 text-xs">
                📏 {product.size}
              </span>
            )}
          </div>
        )}

        <p className="text-xs sm:text-sm text-black/70 mb-3 sm:mb-4 line-clamp-2 grow font-thin leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-slate-100">
          <span className="text-lg sm:text-xl md:text-2xl font-thin text-primary group-hover:text-secondary transition-colors duration-300">
            ₦{product.price.toLocaleString()}
          </span>
          <button
            onClick={() => handleAddToCart(product)}
            className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-thin transition-all transform hover:scale-110 whitespace-nowrap shadow-md duration-300 text-xs sm:text-sm md:text-base ${
              isAdded
                ? "bg-green-500 text-white shadow-lg scale-100"
                : "bg-linear-to-r from-secondary to-primary text-black hover:shadow-xl hover:from-primary hover:to-secondary"
            }`}
          >
            {isAdded ? "✅ Added!" : "🛒 Add"}
          </button>
        </div>
      </div>
    </div>
  );
};
