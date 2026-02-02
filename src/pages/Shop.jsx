import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";
import { Cart } from "../components/Cart";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

export const Shop = () => {
  const { products, loading } = useProducts();
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();
  const [showCart, setShowCart] = useState(false);

  const handleCheckout = (checkoutData) => {
    const cartSummary = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} = ₦${(item.price * item.quantity).toLocaleString()}`,
      )
      .join("\n");

    const message = `
Hello! I want to place an order:

${cartSummary}

Total: ₦${cartTotal.toLocaleString()}

Delivery Address: ${checkoutData.address}
Name: ${checkoutData.fullName}
Phone: ${checkoutData.phone}
    `.trim();

    const whatsappUrl = `https://wa.me/2348180129670?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    clearCart();
    setShowCart(false);
  };

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />

      {showCart && (
        <Cart
          cart={cart}
          total={cartTotal}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onQuantityChange={updateQuantity}
          onCheckout={handleCheckout}
        />
      )}

      <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white">
        {/* Products Section */}
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-black mb-2">
                    Our Products
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg font-thin text-black/70">
                    Browse our premium frozen foods and add to cart
                  </p>
                </div>
                <div className="h-1 w-12 bg-linear-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-16 md:py-20 lg:py-24">
                <div className="inline-block animate-fade-in">
                  <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">
                    🐟
                  </div>
                  <p className="text-black font-thin text-base sm:text-lg md:text-xl">
                    Loading premium products...
                  </p>
                </div>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16 md:py-20 lg:py-24 bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl md:rounded-3xl shadow-sm animate-fade-in">
                <p className="text-black font-thin text-lg sm:text-xl md:text-2xl">
                  No products available yet
                </p>
                <p className="text-black/60 font-thin mt-2 text-sm sm:text-base md:text-lg">
                  Check back soon for fresh frozen foods!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} onAddToCart={addToCart} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <section className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin mb-2 sm:mb-3 text-white">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-thin px-2">
              Reach out to us through any of these channels
            </p>
            <div className="h-1 w-8 sm:w-12 md:w-16 bg-secondary mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Phone */}
            <div
              className="bg-linear-to-br from-primary to-secondary rounded-2xl p-6 sm:p-7 md:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/20 animate-scale-in"
              style={{ animationDelay: "0ms" }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-thin mb-2 sm:mb-3 text-white">
                Call Us
              </h3>
              <a
                href="tel:07018318756"
                className="text-white hover:text-white/80 transition-colors text-sm sm:text-base md:text-lg font-thin break-all hover:underline"
              >
                0701 831 8756
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348180129670"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-br from-green-500 to-green-600 rounded-2xl p-6 sm:p-7 md:p-8 text-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-green-400/30 animate-scale-in"
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-thin mb-2 sm:mb-3 text-white">
                WhatsApp
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-thin group-hover:underline">
                Chat Now
              </p>
            </a>

            {/* Address */}
            <div
              className="bg-linear-to-br from-primary to-secondary rounded-2xl p-6 sm:p-7 md:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/20 animate-scale-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-thin mb-2 sm:mb-3 text-white">
                Visit Us
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-thin leading-relaxed">
                70 Nosiru Baruwa Close
                <br />
                Ipaja, Lagos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-center py-6 sm:py-7 md:py-8 border-t-2 border-secondary/30 animate-fade-in">
        <p className="text-white/70 font-thin text-xs sm:text-sm md:text-base px-2">
          © 2026 Olambola Frozen Food. All rights reserved.
        </p>
      </footer>
    </>
  );
};
