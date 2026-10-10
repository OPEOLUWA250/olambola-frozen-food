import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { whatsappLink } from "../config/site";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 md:right-6 md:bottom-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        className={`flex size-11 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:bg-brand-50 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      <a
        href={whatsappLink("Hello Olambola, I'd like to make an enquiry.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg shadow-green-900/20 transition-transform duration-300 hover:scale-105"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}
