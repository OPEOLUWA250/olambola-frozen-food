import React from "react";

export const Cart = ({
  cart,
  total,
  onClose,
  onRemove,
  onQuantityChange,
  onCheckout,
}) => {
  const [checkoutData, setCheckoutData] = React.useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setCheckoutData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(checkoutData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center md:justify-end p-4 md:p-6 animate-fade-in">
      <div className="w-full md:w-96 h-[85vh] md:h-auto md:max-h-[90vh] bg-white rounded-t-3xl md:rounded-2xl overflow-y-auto shadow-2xl border-t-4 md:border-4 border-secondary">
        {/* Header */}
        <div className="sticky top-0 bg-linear-to-r from-primary to-secondary p-4 md:p-6 border-b border-primary/20 flex justify-between items-center rounded-t-3xl md:rounded-t-2xl">
          <h2 className="text-2xl md:text-3xl font-thin text-white flex items-center gap-2">
            <span className="text-3xl">🛒</span>
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-black hover:text-black/70 transition-colors duration-200 font-thin hover:scale-125"
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 md:p-10 text-center text-black text-lg font-thin">
            <div className="text-6xl mb-4">🛒</div>
            <p>Your cart is empty</p>
            <p className="text-black/60 text-sm mt-2">
              Add some products to get started!
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 md:gap-4 bg-linear-to-r from-slate-50 to-blue-50 p-3 md:p-4 rounded-xl items-center justify-between border border-slate-200 hover:border-secondary transition-colors duration-200 group"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-thin text-sm md:text-base text-black group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="text-xs md:text-sm text-black/70 font-thin">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 bg-white rounded-lg border border-slate-200 px-2 md:px-3 py-1 md:py-1.5">
                    <button
                      onClick={() =>
                        onQuantityChange(item.id, item.quantity - 1)
                      }
                      className="text-black font-thin hover:text-primary transition-colors duration-200 w-6 h-6 flex items-center justify-center"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        onQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-8 md:w-10 text-center border-0 outline-none bg-transparent font-thin text-black"
                    />
                    <button
                      onClick={() =>
                        onQuantityChange(item.id, item.quantity + 1)
                      }
                      className="text-black font-thin hover:text-primary transition-colors duration-200 w-6 h-6 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right min-w-max">
                    <p className="font-thin text-black text-sm md:text-base group-hover:text-primary transition-colors duration-200">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 font-thin hover:scale-125 transition-transform duration-200"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-linear-to-r from-slate-50 to-blue-50 p-4 md:p-6 text-right border-t-2 border-slate-200">
              <h3 className="text-2xl md:text-3xl font-thin text-primary">
                ₦{total.toLocaleString()}
              </h3>
              <p className="text-xs md:text-sm text-black/60 font-thin mt-1">
                Total Amount
              </p>
            </div>

            {/* Checkout Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 md:p-6 space-y-3 md:space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  value={checkoutData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 md:p-3.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white font-thin text-black placeholder:text-black/50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={checkoutData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 md:p-3.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white font-thin text-black placeholder:text-black/50"
                />
              </div>
              <div>
                <textarea
                  name="address"
                  placeholder="Delivery Address"
                  value={checkoutData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full p-3 md:p-3.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white font-thin text-black placeholder:text-black/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 hover:shadow-lg text-white py-3 md:py-4 rounded-lg font-thin transition-all duration-300 text-lg shadow-md border border-green-700 hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                CheckOut
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
