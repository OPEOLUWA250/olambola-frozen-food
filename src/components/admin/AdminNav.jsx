import { useAuth } from "../../hooks/useAuth";

export const AdminNav = () => {
  const { logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-white via-white to-slate-50 shadow-lg border-b border-slate-100/50 backdrop-blur-sm">
      <div className="w-full px-2.5 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-thin flex items-center gap-1.5 xs:gap-2 sm:gap-3 text-black hover:text-primary transition-colors duration-300 group">
            <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
              🐟
            </span>
            <span className="hidden xs:inline">Olambola Admin</span>
            <span className="xs:hidden text-xs font-thin">Admin</span>
          </div>
          <button
            onClick={logout}
            className="bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 md:py-2.5 rounded-lg sm:rounded-lg font-thin transition-all shadow-md hover:shadow-lg transform hover:scale-105 text-xs xs:text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
