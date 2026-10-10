import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { WhatsAppButton } from "./ui";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Products", to: "/#products", hash: true },
  { label: "About Us", to: "/about" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

const desktopLinkClass = ({ isActive }) =>
  `relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
    isActive ? "text-brand-700" : "text-slate-700 hover:text-brand-700"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors ${
    isActive ? "bg-brand-50 text-brand-700" : "text-slate-800 hover:bg-slate-50"
  }`;

function NavItem({ item, className, onClick }) {
  // Hash links (e.g. /#products) shouldn't show as the active page.
  if (item.hash) {
    return (
      <Link
        to={item.to}
        onClick={onClick}
        className={className({ isActive: false })}
      >
        {item.label}
      </Link>
    );
  }
  return (
    <NavLink
      to={item.to}
      end={item.end}
      onClick={onClick}
      className={className}
    >
      {item.label}
    </NavLink>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Hide the bar when scrolling down, show it when scrolling up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`border-b bg-white/95 backdrop-blur-md transition-shadow ${
            scrolled || menuOpen
              ? "border-slate-200 shadow-sm"
              : "border-transparent"
          }`}
        >
          <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 md:h-20 md:px-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="shrink-0"
              aria-label="Olambola International — home"
            >
              <img
                src="/brand/logo.png"
                alt="Olambola International"
                width="640"
                height="150"
                className="h-9 w-auto md:h-11"
              />
            </Link>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavItem item={item} className={desktopLinkClass} />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <WhatsAppButton message="Hello Olambola, I'd like to place an order.">
                Order Now
              </WhatsAppButton>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center rounded-xl text-xl text-brand-700 hover:bg-brand-50 lg:hidden"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg lg:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavItem
                    item={item}
                    className={mobileLinkClass}
                    onClick={closeMenu}
                  />
                </li>
              ))}
            </ul>
            <WhatsAppButton
              message="Hello Olambola, I'd like to place an order."
              size="lg"
              className="mt-4 w-full"
            >
              Order on WhatsApp
            </WhatsAppButton>
          </nav>
        )}
      </header>
    </>
  );
}
