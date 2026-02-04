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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                  <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow text-primary">
                    <i className="fas fa-fish"></i>
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
      <section className="bg-slate-950 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-3 sm:mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-thin px-2 mb-4">
              Choose your favorite way to connect with us
            </p>
            <div className="h-1.5 w-16 sm:w-20 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Phone Card - White Background */}
            <a
              href="tel:07018318756"
              className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-7 text-center hover:shadow-lg transition-all duration-500 animate-scale-in transform hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: "0ms" }}
            >
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-primary group-hover:scale-110 transition-all duration-500">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-thin mb-2 sm:mb-3 text-black">
                  Call Us
                </h3>
                <p className="text-black font-thin text-sm sm:text-base md:text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  0701 831 8756
                </p>
                <p className="text-black/60 font-thin text-xs">
                  Available 24/7
                </p>
              </div>
            </a>

            {/* WhatsApp Card - Green Background */}
            <a
              href="https://wa.me/2348180129670"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 sm:p-7 md:p-8 text-center cursor-pointer hover:shadow-lg hover:shadow-green-500/40 transition-all duration-500 animate-scale-in transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1 sm:scale-105 lg:scale-100 border-2 border-green-400/50"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative">
                <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-all duration-500 animate-bounce">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-thin mb-2 sm:mb-3 text-white">
                  WhatsApp
                </h3>
                <p className="text-white/90 font-thin text-xs sm:text-sm mb-3">
                  Instant messaging
                </p>
                <div className="inline-block bg-white hover:bg-white/90 text-green-600 px-5 py-2 rounded-full font-thin text-xs sm:text-sm transition-all duration-300 hover:shadow-lg group-hover:scale-105 transform">
                  Chat Now <i className="fas fa-arrow-right ml-1"></i>
                </div>
              </div>
            </a>

            {/* Address Card - White Background */}
            <a
              href="https://maps.google.com/?q=70+Nosiru+Baruwa+Close,+Ipaja,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-7 text-center hover:shadow-lg transition-all duration-500 animate-scale-in transform hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-secondary group-hover:scale-110 transition-all duration-500">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-thin mb-2 sm:mb-3 text-black">
                  Visit Us
                </h3>
                <div className="bg-slate-100 rounded-lg p-3 group-hover:bg-secondary/10 transition-colors duration-300">
                  <p className="text-black/80 font-thin leading-relaxed text-xs sm:text-sm group-hover:text-secondary transition-colors duration-300">
                    70 Nosiru Baruwa Close
                    <br />
                    Ipaja, Lagos
                  </p>
                </div>
                <p className="text-black/60 font-thin text-xs mt-3">
                  Click to view on Google Maps
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-center py-6 sm:py-7 md:py-8 border-t-2 border-secondary/30 animate-fade-in">
        <p className="text-white/70 font-thin text-xs sm:text-sm md:text-base px-2">
          © 2026 Olambola Frozen Food. All rights reserved.
        </p>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/2348180129670"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-5 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 animate-pulse"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-5 bg-white hover:bg-slate-100 text-black rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group border border-slate-300 hover:border-black/30"
        title="Back to Top"
      >
        <i className="fas fa-arrow-up text-lg sm:text-xl text-black group-hover:animate-bounce"></i>
      </button>
    </>
  );
};
