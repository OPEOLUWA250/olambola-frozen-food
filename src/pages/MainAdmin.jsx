import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminNav } from "../components/admin/AdminNav";
import { Admin } from "./Admin";
import { AdminsList } from "../components/admin/AdminsList";
import { useAdmin } from "../context/AdminContext";
import "../admin-styles.css";

export const MainAdmin = () => {
  const [currentTab, setCurrentTab] = useState("products");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { admin, isMainAdmin } = useAdmin();
  const navigate = useNavigate();

  if (!admin) {
    navigate("/admin-login");
    return null;
  }

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <AdminNav />
      <div className="flex min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300 ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`fixed md:relative left-0 top-0 h-screen md:h-auto w-64 bg-white border-r border-slate-200 shadow-lg glass transition-transform duration-300 z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-4 md:p-6 h-full overflow-y-auto">
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center md:hidden mb-6">
              <h3 className="text-lg font-thin text-black flex items-center gap-2">
                <i className="fas fa-bars text-blue-600"></i>
                Menu
              </h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-2xl text-black hover:text-red-500 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setCurrentTab("products");
                  closeSidebar();
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-3 ${
                  currentTab === "products"
                    ? "bg-slate-950 text-white shadow-lg scale-105"
                    : "text-black hover:bg-slate-100"
                }`}
              >
                <i className="fas fa-boxes"></i>
                Products
              </button>

              {isMainAdmin && (
                <button
                  onClick={() => {
                    setCurrentTab("admins");
                    closeSidebar();
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-3 ${
                    currentTab === "admins"
                      ? "bg-slate-950 text-white shadow-lg scale-105"
                      : "text-black hover:bg-slate-100"
                  }`}
                >
                  <i className="fas fa-users"></i>
                  Manage Admins
                </button>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs font-thin text-black/60 mb-3">
                Logged in as
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-thin text-black mb-1 break-all">
                  {admin.email}
                </p>
                <p className="text-xs font-semibold text-black">
                  {admin.role === "main_admin" ? "👑 Main Admin" : "👤 Admin"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden bg-white border-b border-slate-200 p-3 sticky top-14 z-30">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-2xl text-black hover:text-blue-600 transition-colors"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className="p-4 md:p-8 animate-fade-in min-h-screen">
            {currentTab === "products" && <Admin key="products" />}
            {currentTab === "admins" && isMainAdmin && (
              <AdminsList key="admins" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
