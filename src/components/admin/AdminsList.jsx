import { useState, useEffect } from "react";
import { useAdminManagement } from "../../hooks/useAdminManagement";
import { useAdmin } from "../../context/AdminContext";

export const AdminsList = () => {
  const { isMainAdmin } = useAdmin();
  const {
    admins,
    loading,
    error,
    fetchAdmins,
    addAdmin,
    updateAdminPassword,
    deleteAdmin,
  } = useAdminManagement();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [editingId, setEditingId] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadAdmins = async () => {
      try {
        await fetchAdmins();
      } catch (err) {
        console.error("Error in loadAdmins:", err);
        setMessage("❌ Failed to load admins. Please try again.");
      }
    };
    loadAdmins();
  }, []);

  const showMsg = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await addAdmin(formData.email, formData.password);
      showMsg("✅ Admin added successfully!");
      setFormData({ email: "", password: "" });
      setShowAddForm(false);
    } catch (err) {
      showMsg("❌ " + (err.message || "Error adding admin"));
    }
  };

  const handleUpdatePassword = async (id) => {
    try {
      await updateAdminPassword(id, newPassword);
      showMsg("✅ Password updated successfully!");
      setEditingId(null);
      setNewPassword("");
    } catch (err) {
      showMsg("❌ " + (err.message || "Error updating password"));
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (!confirm("Delete this admin? This cannot be undone.")) return;

    try {
      await deleteAdmin(id);
      showMsg("✅ Admin deleted successfully!");
    } catch (err) {
      showMsg("❌ " + (err.message || "Error deleting admin"));
    }
  };

  return (
    <div className="flex-1 w-full">
      {/* Header */}
      <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 animate-fade-in">
        <div className="flex items-center gap-2 md:gap-3 mb-2">
          <div className="h-1 w-6 md:w-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-thin text-black flex items-center gap-2">
            <i className="fas fa-users text-slate-950"></i>
            Admin Management
          </h1>
        </div>
        <p className="text-xs xs:text-sm sm:text-base text-black font-thin text-opacity-60 ml-0 md:ml-1">
          Manage admin users and their access •{" "}
          <span className="text-black font-semibold">{admins.length}</span>{" "}
          admin{admins.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Message Alert - Removed from top, will show near edit area */}

      {/* Add Admin Form */}
      {showAddForm && (
        <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 bg-white rounded-lg xs:rounded-xl md:rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-8 border border-slate-200 glass animate-scale-in">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-thin text-black mb-4 xs:mb-5 sm:mb-6 flex items-center gap-2">
            <i className="fas fa-user-plus text-slate-950"></i>
            Add New Admin
          </h2>
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-slate-50 rounded-lg xs:rounded-xl md:rounded-2xl p-4 xs:p-6 sm:p-8 border border-purple-200/50">
            <form
              onSubmit={handleAddAdmin}
              className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div>
                <label className="block text-xs xs:text-xs sm:text-sm font-semibold text-black mb-2 xs:mb-2.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="admin@example.com"
                  className="w-full px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 border border-slate-300 rounded-lg xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black bg-slate-100 text-xs xs:text-sm sm:text-base form-input-sleek transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs xs:text-xs sm:text-sm font-semibold text-black mb-2 xs:mb-2.5">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter a strong password"
                  className="w-full px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 border border-slate-300 rounded-lg xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black bg-slate-100 text-xs xs:text-sm sm:text-base form-input-sleek transition-all"
                  required
                />
              </div>

              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 pt-4 xs:pt-5 sm:pt-6">
                <button
                  type="submit"
                  className="w-full xs:flex-1 bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 xs:py-3 sm:py-3.5 rounded-lg xs:rounded-lg sm:rounded-xl hover:shadow-lg transition-all transform hover:scale-105 text-xs xs:text-sm sm:text-base btn-sleek shadow-md"
                >
                  ✓ Add Admin
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setFormData({ email: "", password: "" });
                  }}
                  className="w-full xs:flex-1 bg-slate-400 hover:bg-slate-500 text-white font-semibold py-2.5 xs:py-3 sm:py-3.5 rounded-lg xs:rounded-lg sm:rounded-xl hover:shadow-md transition-all transform hover:scale-105 text-xs xs:text-sm sm:text-base"
                >
                  ✕ Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Admin Button - Only for Main Admin */}
      {!showAddForm && isMainAdmin && (
        <button
          onClick={() => setShowAddForm(true)}
          className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 w-full md:w-auto bg-slate-950 hover:bg-slate-900 text-white px-5 xs:px-6 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg xs:rounded-lg sm:rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base md:text-lg btn-sleek flex items-center gap-2 justify-center"
        >
          + Add New Admin
        </button>
      )}

      {/* Admins List */}
      <div className="bg-white rounded-lg xs:rounded-xl md:rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-10 border border-slate-200 glass animate-fade-in">
        <div className="mb-6 xs:mb-7 sm:mb-8">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-thin text-black mb-2">
            👥 Active Admins
          </h2>
          <p className="text-xs xs:text-sm text-black font-thin text-opacity-60">
            Total:{" "}
            <span className="font-semibold text-black">{admins.length}</span>
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 xs:py-14 sm:py-16 md:py-20">
            <div className="inline-block mb-4">
              <div className="spinner-sleek"></div>
            </div>
            <p className="text-xs xs:text-sm sm:text-base text-black font-thin text-opacity-60">
              Loading admins...
            </p>
          </div>
        ) : admins.length === 0 ? (
          <div className="text-center py-12 xs:py-14 sm:py-16 md:py-20">
            <div className="text-4xl xs:text-5xl mb-3 opacity-20">👤</div>
            <p className="text-xs xs:text-sm sm:text-base text-black font-thin text-opacity-60">
              No admins yet. Create one to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-3 xs:space-y-4 sm:space-y-5">
            {admins.map((admin, index) => (
              <div
                key={admin.id}
                className="border border-slate-200 rounded-lg xs:rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 bg-gradient-to-br from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 transition-all transform hover:scale-101 hover:shadow-md card-sleek animate-slide-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="mb-4 xs:mb-5 sm:mb-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <p className="text-black font-semibold text-sm xs:text-base sm:text-lg break-all">
                        {admin.email}
                      </p>
                      <div className="mt-2 inline-block">
                        <span className="badge-sleek bg-gradient-to-r from-blue-500 to-blue-600">
                          {admin.role === "main_admin"
                            ? "👑 Main Admin"
                            : "👤 Admin"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-black text-xs font-thin text-opacity-50 mt-3">
                    Created: {new Date(admin.created_at).toLocaleDateString()}
                  </p>
                </div>

                {editingId === admin.id ? (
                  <div>
                    {message && (
                      <div
                        className={`mb-3 xs:mb-4 p-3 xs:p-4 rounded-lg border-l-4 animate-slide-down glass ${
                          message.includes("✅")
                            ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 text-green-700 shadow-md"
                            : "bg-gradient-to-r from-red-50 to-rose-50 border-red-500 text-red-700 shadow-md"
                        }`}
                      >
                        <p className="font-semibold text-xs xs:text-sm">
                          {message}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 bg-white rounded-lg p-3 xs:p-4">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New password"
                        className="flex-1 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 border border-slate-300 rounded-lg text-black font-thin text-xs sm:text-sm bg-slate-100 form-input-sleek transition-all"
                      />
                      <button
                        onClick={() => handleUpdatePassword(admin.id)}
                        className="w-full md:w-auto bg-slate-950 hover:bg-slate-900 text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-md transition-all transform hover:scale-105 btn-sleek"
                      >
                        ✓ Update
                      </button>
                      <button
                        onClick={() => {
                          setEditingId(null);
                          setNewPassword("");
                        }}
                        className="w-full md:w-auto bg-slate-400 hover:bg-slate-500 text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-md transition-all"
                      >
                        ✕ Cancel
                      </button>
                    </div>{" "}
                  </div>
                ) : (
                  <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
                    {isMainAdmin && (
                      <>
                        <button
                          onClick={() => setEditingId(admin.id)}
                          className="w-full md:flex-1 bg-green-600 hover:bg-green-700 text-white px-4 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-md transition-all transform hover:scale-105 btn-sleek flex items-center justify-center gap-2"
                        >
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </button>
                        <button
                          onClick={() => handleDeleteAdmin(admin.id)}
                          className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-md transition-all transform hover:scale-105 btn-sleek flex items-center justify-center gap-2"
                        >
                          <i className="fas fa-trash"></i>
                          <span>Delete</span>
                        </button>
                      </>
                    )}
                    {!isMainAdmin && (
                      <div className="w-full text-center py-2 px-4 rounded-lg bg-slate-100 text-slate-600 font-medium text-xs sm:text-sm">
                        <i className="fas fa-lock-alt"></i> Only main admin can
                        manage admins
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
