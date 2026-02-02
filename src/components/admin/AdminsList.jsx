import { useState, useEffect } from "react";
import { useAdminManagement } from "../../hooks/useAdminManagement";

export const AdminsList = () => {
  const {
    admins,
    loading,
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
    fetchAdmins();
  }, [fetchAdmins]);

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
    <div className="flex-1">
      {/* Header */}
      <div className="mb-6 xs:mb-7 sm:mb-8">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-thin text-black mb-1 xs:mb-2">
          Admin Management
        </h1>
        <p className="text-xs xs:text-sm sm:text-base text-black font-thin text-opacity-60">
          Manage admin users and their access
        </p>
      </div>

      {/* Message Alert */}
      {message && (
        <div
          className={`mb-4 xs:mb-5 sm:mb-6 p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl sm:rounded-2xl border-l-4 animate-slide-down ${
            message.includes("✅")
              ? "bg-green-50 border-green-500 text-green-700"
              : "bg-red-50 border-red-500 text-red-700"
          }`}
        >
          <p className="font-thin text-xs xs:text-sm sm:text-base">{message}</p>
        </div>
      )}

      {/* Add Admin Form */}
      {showAddForm && (
        <div className="mb-6 xs:mb-7 sm:mb-8 bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-xl p-4 xs:p-6 sm:p-8 border border-slate-200 animate-fade-in">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-thin text-black mb-4 xs:mb-5 sm:mb-6">
            Add New Admin
          </h2>
          <form
            onSubmit={handleAddAdmin}
            className="space-y-3 xs:space-y-4 sm:space-y-5"
          >
            <div>
              <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="admin@example.com"
                className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-black bg-white text-xs sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-xs xs:text-xs sm:text-sm font-thin text-black mb-2 xs:mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter password"
                className="w-full px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-3 border border-slate-300 rounded-lg xs:rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-black bg-white text-xs sm:text-base"
                required
              />
            </div>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 pt-2">
              <button
                type="submit"
                className="w-full xs:flex-1 bg-linear-to-r from-primary to-secondary text-black font-thin py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-lg sm:rounded-xl hover:shadow-lg transition-all text-xs xs:text-sm sm:text-base"
              >
                Add Admin
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setFormData({ email: "", password: "" });
                }}
                className="w-full xs:flex-1 bg-slate-200 text-black font-thin py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-lg sm:rounded-xl hover:bg-slate-300 transition-all text-xs xs:text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Admin Button */}
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="mb-6 xs:mb-7 sm:mb-8 w-full xs:w-auto bg-linear-to-r from-primary to-secondary hover:from-blue-800 hover:to-blue-600 text-black px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-lg sm:rounded-xl font-thin transition-all transform hover:scale-105 shadow-lg text-xs xs:text-sm sm:text-base"
        >
          + Add New Admin
        </button>
      )}

      {/* Admins List */}
      <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-xl p-4 xs:p-6 sm:p-8 border border-slate-200">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-thin text-black mb-4 xs:mb-5 sm:mb-6">
          Admins
        </h2>

        {loading ? (
          <div className="text-center py-8 xs:py-10 sm:py-12">
            <p className="text-xs xs:text-sm sm:text-base text-black font-thin text-opacity-60">
              Loading admins...
            </p>
          </div>
        ) : admins.length === 0 ? (
          <div className="text-center py-8 xs:py-10 sm:py-12">
            <p className="text-xs xs:text-sm sm:text-base text-black font-thin text-opacity-60">
              No admins yet
            </p>
          </div>
        ) : (
          <div className="space-y-3 xs:space-y-4 sm:space-y-4">
            {admins.map((admin, index) => (
              <div
                key={admin.id}
                className="border border-slate-200 rounded-lg xs:rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="mb-3 xs:mb-4 sm:mb-4">
                  <p className="text-black font-thin text-sm xs:text-base sm:text-lg break-all">
                    {admin.email}
                  </p>
                  <p className="text-black text-xs font-thin text-opacity-50">
                    Role: {admin.role}
                  </p>
                </div>

                {editingId === admin.id ? (
                  <div className="flex flex-col xs:flex-row gap-2 xs:gap-2 sm:gap-3">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New password"
                      className="flex-1 px-3 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 border border-slate-300 rounded-lg text-black font-thin text-xs sm:text-sm bg-white"
                    />
                    <button
                      onClick={() => handleUpdatePassword(admin.id)}
                      className="w-full xs:w-auto bg-blue-500 text-white px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg font-thin text-xs sm:text-sm hover:bg-blue-600 transition-all"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(null);
                        setNewPassword("");
                      }}
                      className="w-full xs:w-auto bg-slate-300 text-black px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg font-thin text-xs sm:text-sm hover:bg-slate-400 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col xs:flex-row gap-2 xs:gap-2 sm:gap-3">
                    <button
                      onClick={() => setEditingId(admin.id)}
                      className="w-full xs:flex-1 bg-blue-500 text-white px-3 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded-lg font-thin text-xs sm:text-sm hover:bg-blue-600 transition-all"
                    >
                      Change Password
                    </button>
                    <button
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="w-full xs:w-auto bg-red-500 text-white px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg font-thin text-xs sm:text-sm hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
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
