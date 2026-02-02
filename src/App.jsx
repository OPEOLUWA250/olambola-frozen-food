import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AdminProvider } from "./context/AdminContext";
import { Shop } from "./pages/Shop";
import { AdminLogin } from "./pages/AdminLogin";
import { MainAdmin } from "./pages/MainAdmin";
import { useAdmin } from "./context/AdminContext";
import "./index.css";

function ProtectedRoute({ children }) {
  const { admin, loading } = useAdmin();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-black font-thin">Loading...</p>
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin-login" />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <MainAdmin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AdminProvider>
        <AppRoutes />
      </AdminProvider>
    </Router>
  );
}

export default App;
