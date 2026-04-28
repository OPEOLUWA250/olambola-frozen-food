export default function Navbar({ onNavigate }) {
  const navItems = [
    { label: "Home", action: "home" },
    { label: "About Us", action: "about" },
    { label: "Partner With Us", action: "partner" },
    { label: "Contact Us", action: "contact" },
  ];

  return (
    <nav>
      <div className="relative flex items-center justify-center gap-12 px-12 py-5 rounded-3xl backdrop-blur-xl bg-white/20 border-2 border-[#1E40AF]/30 shadow-2xl hover:bg-white/25 transition-all duration-300">
        {/* Navigation Links */}
        <ul className="flex gap-8 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onNavigate && onNavigate(item.action)}
                className="text-gray-900 font-medium hover:text-[#1E40AF] transition-colors duration-300 whitespace-nowrap bg-none border-none cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
