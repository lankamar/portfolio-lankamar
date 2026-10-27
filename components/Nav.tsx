import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const items = [
  { to: "/", label: "Sobre mí" },
  { to: "/trayectoria", label: "Trayectoria" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/publicaciones", label: "Publicaciones" },
  { to: "/docencia", label: "Docencia" },
  { to: "/repositorios", label: "Repositorios" },
  { to: "/contacto", label: "Contacto" },
  { to: "/cv", label: "CV" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          Marcelo <b>Lancry Kamycki</b>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
          }
          title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
        >
          <i className="fa-solid fa-moon" />
          <i className="fa-solid fa-sun" />
        </button>

        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>
      </div>
    </header>
  );
}
