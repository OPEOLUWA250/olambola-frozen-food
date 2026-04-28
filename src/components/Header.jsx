import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Header({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavigate = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        // Scrolling down and past initial scroll
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-4 py-6 w-full bg-gradient-to-b from-white/30 to-transparent z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Mobile Header Container with Border */}
      <div className="md:hidden bg-gradient-to-r from-[#1E40AF]/90 to-[#1E40AF]/80 backdrop-blur-md rounded-2xl px-4 py-4 flex items-center justify-between shadow-lg">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavigate("home")}
            className="text-2xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            OlambolaFoods
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1.5 justify-center items-center p-2 rounded-full hover:bg-white/10 transition-all duration-300 relative z-50"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Desktop Header Container */}
      <div className="hidden md:flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0 pl-8">
          <button
            onClick={() => handleNavigate("home")}
            className="text-4xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            OlambolaFoods
          </button>
        </div>

        {/* Desktop Navbar - Centered (hidden on mobile) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Navbar onNavigate={handleNavigate} />
        </div>

        {/* Desktop Order Now Button - Right (hidden on mobile) */}
        <a
          href="https://wa.me/2349162964829"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Menu Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="md:hidden fixed left-0 right-0 top-0 mt-24 z-50 bg-gradient-to-b from-[#1E40AF]/95 via-[#1E40AF]/90 to-[#1E40AF]/85 pt-8 px-6 pb-8 max-h-[calc(100vh-96px)] overflow-y-auto">
            <nav className="flex flex-col gap-6">
              {/* Mobile Nav Items Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <ul className="flex flex-col gap-0">
                  <li>
                    <button
                      onClick={() => handleNavigate("home")}
                      className="text-[#1E40AF] font-bold text-base md:text-lg hover:opacity-70 transition-opacity flex items-center gap-4 w-full p-4 rounded-lg hover:bg-blue-50"
                    >
                      <i className="fas fa-home text-lg"></i>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate("about")}
                      className="text-[#1E40AF] font-bold text-base md:text-lg hover:opacity-70 transition-opacity flex items-center gap-4 w-full p-4 rounded-lg hover:bg-blue-50"
                    >
                      <i className="fas fa-info-circle text-lg"></i>
                      <span>About Us</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate("contact")}
                      className="text-[#1E40AF] font-bold text-base md:text-lg hover:opacity-70 transition-opacity flex items-center gap-4 w-full p-4 rounded-lg hover:bg-blue-50"
                    >
                      <i className="fas fa-envelope text-lg"></i>
                      <span>Contact Us</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Mobile Order Now Button */}
              <a
                href="https://wa.me/2349162964829"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white hover:bg-gray-50 text-[#1E40AF] font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl text-center w-full text-base flex items-center justify-center gap-3"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                <span>Order Now</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
