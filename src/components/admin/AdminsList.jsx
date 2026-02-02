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
  }, []);

  const showMsg = (text, type = "success") => {
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
      <div className="mb-8">
        <h1 className="text-4xl font-thin text-black mb-2">Admin Management</h1>
        <p className="text-black font-thin text-opacity-60">
          Manage admin users and their access
        </p>
      </div>

      {/* Message Alert */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-xl border-l-4 ${
            message.includes("✅")
              ? "bg-green-50 border-green-500 text-green-700"
              : "bg-red-50 border-red-500 text-red-700"
          }`}
        >
          <p className="font-thin">{message}</p>
        </div>
      )}

      {/* Add Admin Form */}
      {showAddForm && (
        <div className="mb-8 bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-thin text-black mb-6">Add New Admin</h2>
          <form onSubmit={handleAddAdmin} className="space-y-4">
            <div>
              <label className="block text-sm font-thin text-black mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="admin@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-thin text-black mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-black"
                required
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-black font-thin py-3 rounded-xl hover:shadow-lg transition-all"
              >
                Add Admin
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setFormData({ email: "", password: "" });
                }}
                className="flex-1 bg-slate-200 text-black font-thin py-3 rounded-xl hover:bg-slate-300 transition-all"
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
          className="mb-8 bg-gradient-to-r from-primary to-secondary hover:from-blue-800 hover:to-blue-600 text-black px-6 py-3 rounded-xl font-thin transition-all transform hover:scale-105 shadow-lg"
        >
          + Add New Admin
        </button>
      )}

      {/* Admins List */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-2xl font-thin text-black mb-6">Admins</h2>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-black font-thin text-opacity-60">
              Loading admins...
            </p>
          </div>
        ) : admins.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-black font-thin text-opacity-60">
              No admins yet
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {admins.map((admin) => (
              <div
                key={admin.id}
                className="border border-slate-200 rounded-xl p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-black font-thin text-lg">
                      {admin.email}
                    </p>
                    <p className="text-black text-xs font-thin text-opacity-50">
                      Role: {admin.role}
                    </p>
                  </div>
                </div>

                {editingId === admin.id ? (
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New password"
                      className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-black font-thin text-sm"
                    />
                    <button
                      onClick={() => handleUpdatePassword(admin.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg font-thin text-sm hover:bg-blue-600 transition-all"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(null);
                        setNewPassword("");
                      }}
                      className="bg-slate-300 text-black px-4 py-2 rounded-lg font-thin text-sm hover:bg-slate-400 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingId(admin.id)}
                      className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg font-thin text-sm hover:bg-blue-600 transition-all"
                    >
                      Change Password
                    </button>
                    <button
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg font-thin text-sm hover:bg-red-600 transition-all"
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
