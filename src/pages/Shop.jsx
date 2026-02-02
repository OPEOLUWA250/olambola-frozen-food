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

      <div className="min-h-screen bg-white">
        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-thin text-black mb-2">
              Our Products
            </h2>
            <p className="text-base md:text-lg font-thin text-black/70">
              Browse our premium frozen foods and add to cart
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block">
                <div className="text-5xl mb-4 animate-pulse">🐟</div>
                <p className="text-black font-thin text-lg">
                  Loading premium products...
                </p>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl">
              <p className="text-black font-thin text-xl">
                No products available yet
              </p>
              <p className="text-black/60 font-thin mt-2">
                Check back soon for fresh frozen foods!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-max">
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

      {/* Contact Footer */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-3 text-white">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-white/80 font-thin">
              Reach out to us through any of these channels
            </p>
            <div className="h-1 w-12 md:w-16 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Phone */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/20">
              <div className="text-5xl md:text-6xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-thin mb-3 text-white">
                Call Us
              </h3>
              <a
                href="tel:07018318756"
                className="text-white hover:text-white/80 transition-colors text-base md:text-lg font-thin break-all hover:underline"
              >
                0701 831 8756
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348180129670"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-green-400/30"
            >
              <div className="text-5xl md:text-6xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-thin mb-3 text-white">
                WhatsApp
              </h3>
              <p className="text-white text-base md:text-lg font-thin group-hover:underline">
                Chat Now
              </p>
            </a>

            {/* Address */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/20">
              <div className="text-5xl md:text-6xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-thin mb-3 text-white">
                Visit Us
              </h3>
              <p className="text-white text-base md:text-lg font-thin">
                70 Nosiru Baruwa Close
                <br />
                Ipaja, Lagos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-center py-8 border-t-2 border-secondary/30">
        <p className="text-white/70 font-thin text-sm md:text-base">
          © 2026 Olambola Frozen Food. All rights reserved.
        </p>
      </footer>
    </>
  );
};
