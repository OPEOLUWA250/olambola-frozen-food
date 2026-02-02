import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminNav } from "../components/admin/AdminNav";
import { Admin } from "./Admin";
import { AdminsList } from "../components/admin/AdminsList";
import { useAdmin } from "../context/AdminContext";

export const MainAdmin = () => {
  const [currentTab, setCurrentTab] = useState("products");
  const { admin, isMainAdmin } = useAdmin();
  const navigate = useNavigate();

  if (!admin) {
    navigate("/admin-login");
    return null;
  }

  return (
    <>
      <AdminNav />
      <div className="flex min-h-screen bg-slate-50">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-slate-200 shadow-lg">
          <div className="p-6">
            <h3 className="text-lg font-thin text-black mb-6">Menu</h3>

            <div className="space-y-2">
              <button
                onClick={() => setCurrentTab("products")}
                className={`w-full text-left px-4 py-3 rounded-lg font-thin transition-all ${
                  currentTab === "products"
                    ? "bg-slate-200 text-black shadow-md"
                    : "text-black hover:bg-slate-100"
                }`}
              >
                📦 Products
              </button>

              {isMainAdmin && (
                <button
                  onClick={() => setCurrentTab("admins")}
                  className={`w-full text-left px-4 py-3 rounded-lg font-thin transition-all ${
                    currentTab === "admins"
                      ? "bg-slate-200 text-black shadow-md"
                      : "text-black hover:bg-slate-100"
                  }`}
                >
                  👥 Manage Admins
                </button>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs font-thin text-black text-opacity-60 mb-3">
                Logged in as
              </p>
              <p className="text-sm font-thin text-black mb-1">{admin.email}</p>
              <p className="text-xs font-thin text-black text-opacity-50 mb-4">
                {admin.role === "main_admin" ? "👑 Main Admin" : "👤 Admin"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {currentTab === "products" && <Admin />}
          {currentTab === "admins" && isMainAdmin && <AdminsList />}
        </div>
      </div>
    </>
  );
};
