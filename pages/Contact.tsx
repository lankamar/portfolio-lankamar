import React from "react";
import { site } from "../data";

export default function Contact() {
  return (
    <div className="container">
      <h1>Contacto</h1>
      <p className="affil">
        Para consultas sobre formación, simulación clínica o IA aplicada a salud.
        Respondo personalmente.
      </p>

      <div className="actions" style={{ marginTop: 0 }}>
        <a className="btn" href={site.links.email}>
          <i className="fa-solid fa-envelope" aria-hidden="true" /> Escribir un
          correo
        </a>
        <a
          className="btn btn-outline"
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true" /> LinkedIn
        </a>
      </div>

      <ul className="contact-list">
        <li>
          <i className="fa-solid fa-envelope" aria-hidden="true" />
          <a href={site.links.email}>{site.email}</a>
        </li>
        <li>
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
          {site.location}
        </li>
        <li>
          <i className="fa-brands fa-github" aria-hidden="true" />
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            github.com/lankamar
          </a>
        </li>
        <li>
          <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/lankamar
          </a>
        </li>
        <li>
          <i className="fa-brands fa-orcid" aria-hidden="true" />
          <a href={site.links.orcid} target="_blank" rel="noopener noreferrer">
            orcid.org/{site.orcid}
          </a>
        </li>
        <li>
          <i className="fa-brands fa-youtube" aria-hidden="true" />
          <a href={site.links.youtube} target="_blank" rel="noopener noreferrer">
            Canal de YouTube
          </a>
        </li>
        <li>
          <i className="fa-brands fa-telegram" aria-hidden="true" />
          <a href={site.links.telegram} target="_blank" rel="noopener noreferrer">
            t.me/quintadeenfermeria
          </a>
        </li>
        <li>
          <i className="fa-brands fa-spotify" aria-hidden="true" />
          <a href={site.links.spotify} target="_blank" rel="noopener noreferrer">
            Podcast LANKAMAR
          </a>
        </li>
        <li>
          <i className="fa-brands fa-instagram" aria-hidden="true" />
          <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">
            @lankamar
          </a>
        </li>
        <li>
          <i className="fa-brands fa-tiktok" aria-hidden="true" />
          <a href={site.links.tiktok} target="_blank" rel="noopener noreferrer">
            @marceloomarlancrykamycki
          </a>
        </li>
      </ul>

      <p className="muted" style={{ fontSize: "0.9rem", marginTop: "1.5rem" }}>
        Matrícula profesional {site.license} · Buenos Aires, Argentina
      </p>
    </div>
  );
}
