import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PartnerWithUs from "./pages/PartnerWithUs";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col overflow-x-hidden">
      <Header onNavigate={setCurrentPage} />

      <FloatingActions />

      <main className="flex-1">
        {currentPage === "home" && <Home onNavigate={setCurrentPage} />}

        {currentPage === "about" && <About />}

        {currentPage === "contact" && <Contact />}

        {currentPage === "partner" && <PartnerWithUs onNavigate={setCurrentPage} />}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
