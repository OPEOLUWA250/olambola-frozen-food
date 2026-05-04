import { useState, useEffect } from "react";

export default function Carousel() {
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      id="image-carousel"
      className="w-screen h-[80vh] md:h-screen flex items-center justify-center bg-slate-50 py-8"
    >
      <div className="w-[90%] md:w-4/5 h-full relative overflow-visible">
        {/* Carousel Images */}
        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute -left-5 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-30 bg-[#1E40AF]/80 hover:bg-[#1E40AF] text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-base md:text-lg"></i>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute -right-5 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-30 bg-[#1E40AF]/80 hover:bg-[#1E40AF] text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-base md:text-lg"></i>
        </button>
      </div>
    </div>
  );
}
