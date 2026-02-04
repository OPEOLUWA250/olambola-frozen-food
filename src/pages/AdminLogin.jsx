import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import { useAdmin } from "../context/AdminContext";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!supabase) throw new Error("Supabase not configured");

      const { data, error: fetchError } = await supabase
        .from("admins")
        .select("*")
        .eq("email", email)
        .single();

      if (fetchError) {
        setError("Invalid email or password");
        return;
      }

      // Simple password check (compare with base64 hash)
      const passwordHash = btoa(password);
      if (data.password_hash !== passwordHash) {
        setError("Invalid email or password");
        return;
      }

      // Login successful
      login({ id: data.id, email: data.email, role: data.role });
      navigate("/admin");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary to-secondary flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">🐟</h1>
          <h2 className="text-2xl font-thin text-black">Admin Login</h2>
          <p className="text-black mt-2 font-thin">Manage your products</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-thin text-black mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-thin text-black mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary text-black"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg font-thin">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-primary to-secondary hover:from-blue-800 hover:to-blue-600 text-black font-thin py-3 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-xs text-black mt-6 font-thin">
          For admin access only
        </p>
      </div>
    </div>
  );
};

