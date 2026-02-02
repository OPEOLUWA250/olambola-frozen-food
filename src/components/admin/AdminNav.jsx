import { useAuth } from "../../hooks/useAuth";

export const AdminNav = () => {
  const { logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-thin flex items-center gap-3 text-black">
          <span className="text-3xl">🐟</span>
          <span>Olambola Admin</span>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-thin transition-all shadow-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
