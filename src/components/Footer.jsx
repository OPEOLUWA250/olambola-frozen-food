export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-gradient-to-t from-[#1E40AF] to-[#1E40AF]/90 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">OlambolaFoods</h3>
            <p className="text-white/80">
              Premium quality frozen foods delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate("home")}
                  className="hover:text-white transition-colors bg-none border-none cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate("about")}
                  className="hover:text-white transition-colors bg-none border-none cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="hover:text-white transition-colors bg-none border-none cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@olambola"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/olambola"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://wa.me/2349162964829"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-white/80">
            <p>
              &copy; {new Date().getFullYear()} OlambolaFoods. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
