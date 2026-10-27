import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Repositories from "./pages/Repositories";
import Contact from "./pages/Contact";
import CVPage from "./pages/CVPage";
import SimuladorECGPage from "./pages/SimuladorECGPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  if (location.pathname === "/simulador-ecg") {
    return <SimuladorECGPage />;
  }

  return (
    <>
      <Nav />
      <main>
        <div className="page" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/trayectoria" element={<Experience />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/publicaciones" element={<Publications />} />
            <Route path="/docencia" element={<Teaching />} />
            <Route path="/repositorios" element={<Repositories />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
