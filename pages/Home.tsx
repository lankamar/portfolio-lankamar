import React from "react";
import { Link } from "react-router-dom";
import { news, publications, site } from "../data";
import Social from "../components/Social";

export default function Home() {
  return (
    <div className="container">
      <h1>
        Marcelo <b>Lancry Kamycki</b>
      </h1>
      <p className="affil">
        <b>Afiliaciones:</b> Hospital de Clínicas José de San Martín (UBA) ·
        CITEP-UBA
      </p>

      <div className="profile">
        <div>
          <p>
            Soy Licenciado en Enfermería y Jefe de Enfermería de Clínica Médica
            en el{" "}
            <a
              href="https://www.hospitaldeclinicas.uba.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hospital de Clínicas José de San Martín
            </a>{" "}
            (UBA), con <b>36 años de práctica clínica y gestión</b>.
          </p>
          <p>
            En los últimos años me formé en diseño de la enseñanza con
            tecnologías (EDET, CITEP-UBA) y empecé a construir software con
            agentes de IA. No me presento como programador tradicional: soy un{" "}
            <b>especialista de dominio que construye</b>. Especifico el problema
            y los criterios de aceptación antes de escribir código, prototipo con
            agentes, reviso cada salida y pruebo en uso real.
          </p>
          <p>
            Busco un rol junior en desarrollo o IA aplicada, en un equipo con
            code review y estándares. Aporto dominio sanitario, criterio para
            evaluar lo que devuelve un modelo y la costumbre de documentar.
          </p>

          <Social />

          <div className="actions">
            <Link className="btn" to="/proyectos">
              Ver proyectos
            </Link>
            <a
              className="btn btn-outline"
              href="/cv/cv-tech.pdf"
              download
            >
              <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />{" "}
              Descargar CV
            </a>
          </div>
        </div>

        <img
          className="profile-photo"
          src="/avatar.jpg"
          alt="Retrato de Marcelo Lancry Kamycki"
        />
      </div>

      <h2>Actualidad</h2>
      <ul className="news">
        {news.map((n, i) => (
          <li key={i}>
            <span className="date">{n.date}</span>
            <span>
              {n.href ? (
                <a href={n.href} target="_blank" rel="noopener noreferrer">
                  {n.text}
                </a>
              ) : (
                n.text
              )}
            </span>
          </li>
        ))}
      </ul>

      <h2>Publicaciones seleccionadas</h2>
      {publications.map((p) => (
        <div className="pub" key={p.title}>
          <div className="pub-head">
            <span className="badge">{p.type}</span>
            <span className="pub-title">{p.title}</span>
          </div>
          <div className="pub-meta">
            {p.date} · {p.detail}
            {p.href && (
              <>
                {" · "}
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  Ver registro
                </a>
              </>
            )}
          </div>
        </div>
      ))}
      <p style={{ marginTop: "1rem" }}>
        <Link to="/publicaciones">
          Ver publicaciones y divulgación <span aria-hidden="true">→</span>
        </Link>
      </p>

      <p className="muted" style={{ marginTop: "2.5rem", fontSize: "0.9rem" }}>
        {site.location} · Matrícula {site.license} · ORCID {site.orcid}
      </p>
    </div>
  );
}
