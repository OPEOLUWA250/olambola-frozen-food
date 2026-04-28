import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const whatsappMessage = `Hello! I'm contacting you from the website:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/2349162964829?text=${encodedMessage}`, "_blank");

    // Reset form
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-3xl p-6 md:p-8 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-2">
        Send Us a Message
      </h2>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Whether you have a question about our products, need custom orders, or
        just want to say hello, we'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-[#1E40AF]/20 bg-white/80 focus:outline-none focus:border-[#1E40AF] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-[#1E40AF]/20 bg-white/80 focus:outline-none focus:border-[#1E40AF] transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-[#1E40AF]/20 bg-white/80 focus:outline-none focus:border-[#1E40AF] transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us how we can help..."
            rows="4"
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-[#1E40AF]/20 bg-white/80 focus:outline-none focus:border-[#1E40AF] transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-semibold px-6 py-3 md:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
        >
          Send Message
        </button>

        <p className="text-xs md:text-sm text-gray-600 text-center">
          We'll respond to your message as soon as possible.
        </p>
      </form>
    </div>
  );
}
