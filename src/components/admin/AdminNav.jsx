import { useAuth } from "../../hooks/useAuth";
import "../../admin-styles.css";

export const AdminNav = () => {
  const { logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-white via-white to-slate-50 shadow-xl border-b border-slate-200/50 backdrop-blur-md glass">
      <div className="w-full px-2.5 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-3.5 sm:py-4 md:py-4.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-thin flex items-center gap-1.5 xs:gap-2 sm:gap-3 text-black hover:text-blue-600 transition-colors duration-300 group cursor-pointer">
            <i className="fas fa-fish text-2xl xs:text-2xl sm:text-3xl md:text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"></i>
            <span className="hidden xs:inline font-semibold text-black">
              Olambola Admin
            </span>
            <span className="xs:hidden text-xs font-semibold text-black">
              Admin
            </span>
          </div>
          <button
            onClick={logout}
            className="bg-black hover:bg-slate-800 text-white px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 md:py-3 rounded-lg sm:rounded-lg md:rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 text-xs xs:text-sm sm:text-base btn-sleek flex items-center gap-2"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span className="hidden xs:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
