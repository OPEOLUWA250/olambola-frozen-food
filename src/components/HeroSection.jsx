export default function HeroSection() {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center pt-134 md:pt-40 px-4">
      <div className="max-w-4xl mx-auto text-center mt-32 md:mt-24">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Premium Fish & Seafood
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-700 mb-12 leading-relaxed">
          Fresh from the waters, delivered to your table. Olambola Foods brings
          you the finest selection of wild-caught and sustainably sourced fish
          and seafood products.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
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
              document
                .querySelector("#image-carousel")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-white hover:bg-gray-100 text-[#1E40AF] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#1E40AF]"
          >
            Explore Products
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <i className="fas fa-droplet text-4xl text-[#1E40AF]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100% Fresh</h3>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <i className="fas fa-leaf text-4xl text-[#1E40AF]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Sustainable</h3>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/40 backdrop-blur-md border-2 border-[#1E40AF]/30 rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <i className="fas fa-star text-4xl text-[#1E40AF]"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Quality</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
