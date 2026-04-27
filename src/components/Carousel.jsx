import { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    "/kisumeo-hero.jpg",
    "/kisumeo-front-hero.jpeg",
    "/kisumeo-gen.jpg",
    "/hero-img.png",
    "/Franchise.png",
    "/kisumeo-gen-mobile.jpg",
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
    <div className="w-full h-screen md:h-screen relative overflow-hidden md:overflow-visible">
      <div className="relative w-full h-full">
        {/* Carousel Images */}
        <div className="relative w-full h-full">
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
          className="absolute left-2 md:-left-20 top-1/2 -translate-y-1/2 z-20 bg-[#1E40AF]/80 hover:bg-[#1E40AF] text-white p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-2 md:-right-20 top-1/2 -translate-y-1/2 z-20 bg-[#1E40AF]/80 hover:bg-[#1E40AF] text-white p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-lg"></i>
        </button>
      </div>
    </div>
  );
}
