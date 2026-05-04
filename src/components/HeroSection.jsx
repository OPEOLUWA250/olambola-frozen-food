export default function HeroSection() {
  return (
    <section className="w-full min-h-[52vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center pt-30 md:pt-40 px-4">
      <div className="max-w-4xl mx-auto text-center mt-12 md:mt-8">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Premium Fish & Seafood
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Fresh from the waters, delivered to your table. Olambola Foods brings
          you the finest selection of wild-caught and sustainably sourced fish
          and seafood products.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          {/* Get in Touch Button */}
          <a
            href="https://wa.me/2349162964829"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in Touch
          </a>

          {/* Explore Products Button */}
          <button
            onClick={() => {
              const carousel = document.getElementById("image-carousel");
              if (!carousel) return;
              const y =
                carousel.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className="inline-block bg-white hover:bg-gray-100 text-[#1E40AF] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#1E40AF]"
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}
