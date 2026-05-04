import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const images = [
    "/hero-images/hero-1.jpeg",
    "/hero-images/hero-2.jpeg",
    "/hero-images/hero-3.jpeg",
    "/hero-images/hero-4.jpeg",
    "/hero-images/hero-5.jpeg",
    "/hero-images/hero-6.jpeg",
    "/hero-images/hero-7.jpeg",
    "/hero-images/hero-8.jpeg",
    "/hero-images/hero-9.jpeg",
    "/hero-images/hero-10.jpeg",
    "/hero-images/hero-11.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-slate-50 to-gray-50"
      id="image-carousel"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600">
            Explore our premium selection of fresh seafood
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + images.length) % images.length;
              const isNext = index === (currentIndex + 1) % images.length;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isActive
                      ? "md:col-span-2 md:row-span-2"
                      : isPrev || isNext
                        ? "md:col-span-1"
                        : "hidden md:block"
                  }`}
                >
                  <div
                    className={`group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "h-96 md:h-full shadow-2xl"
                        : isPrev || isNext
                          ? "h-64 opacity-70 hover:opacity-90"
                          : "h-64 opacity-0"
                    }`}
                  >
                    {/* Image */}
                    <img
                      src={image}
                      alt={`Collection ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge */}
                    {isActive && (
                      <div className="absolute top-4 right-4 bg-[#1E40AF] text-white px-4 py-2 rounded-full font-semibold text-sm">
                        Featured
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots - Bottom Center */}
          <div className="flex justify-center gap-2 mt-12">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#1E40AF] w-8"
                    : "bg-[#1E40AF]/40 hover:bg-[#1E40AF]/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
