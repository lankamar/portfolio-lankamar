import React from "react";
import { publications, site } from "../data";

export default function Publications() {
  return (
    <div className="container">
      <h1>Publicaciones</h1>
      <p className="affil">
        Trabajos académicos y documentos de investigación. La producción de
        divulgación se publica en redes y se reúne más abajo.
      </p>

      <h2>Trabajos</h2>
      {publications.map((p) => (
        <article className="pub" key={p.title}>
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
                  Ver registro en ORCID
                </a>
              </>
            )}
          </div>
        </article>
      ))}

      <h2>Divulgación</h2>
      <p>
        Escribo sobre enfermería, gestión hospitalaria y tecnología aplicada. Los
        artículos completos y las notas de actualización están en LinkedIn; los
        materiales audiovisuales, en YouTube y Spotify.
      </p>

      <div className="grid-2">
        <div className="card">
          <h3>Artículos en LinkedIn</h3>
          <p>
            Notas sobre el compromiso con el cuidado, la gestión y la formación
            continua.
          </p>
          <div className="actions">
            <a
              className="btn btn-outline"
              href={site.links.linkedinArticles}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer artículos
            </a>
          </div>
        </div>

        <div className="card">
          <h3>YouTube</h3>
          <p>Tutoriales y divulgación sobre enfermería y herramientas digitales.</p>
          <div className="actions">
            <a
              className="btn btn-outline"
              href={site.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver canal
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Spotify</h3>
          <p>Podcast LANKAMAR: conversaciones sobre salud, formación y tecnología.</p>
          <div className="actions">
            <a
              className="btn btn-outline"
              href={site.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escuchar
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Telegram</h3>
          <p>Canal Quinta de Enfermería: materiales y novedades del servicio.</p>
          <div className="actions">
            <a
              className="btn btn-outline"
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir canal
            </a>
          </div>
        </div>
      </div>

      <h2>Identificadores</h2>
      <p>
        ORCID:{" "}
        <a href={site.links.orcid} target="_blank" rel="noopener noreferrer">
          {site.orcid}
        </a>
      </p>
      <p className="muted" style={{ fontSize: "0.9rem" }}>
        El perfil de Google Scholar está en preparación. Mientras tanto, la
        producción se registra en ORCID y se difunde en las redes.
      </p>
    </div>
  );
}
