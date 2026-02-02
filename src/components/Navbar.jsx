export const Navbar = ({ cartCount, onCartClick, isAdmin }) => {
  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-white via-white to-slate-50 shadow-md border-b border-slate-100/50 backdrop-blur-sm">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg sm:text-xl md:text-2xl font-thin flex items-center gap-2 md:gap-3 text-black hover:text-primary transition-colors duration-300 cursor-pointer group">
            <span className="text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
              🐟
            </span>
            <span className="hidden sm:inline">Olambola Frozen Foods</span>
            <span className="sm:hidden text-sm">Olambola</span>
          </div>
          {!isAdmin && (
            <button
              onClick={onCartClick}
              className="bg-linear-to-r from-secondary to-primary hover:shadow-lg text-black px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-thin transition-all duration-300 hover:scale-110 shadow-md border border-primary/20 hover:border-primary/50 flex items-center gap-2 text-sm md:text-base"
            >
              <span className="text-lg md:text-xl">🛒</span>
              <span className="font-normal">{cartCount}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
