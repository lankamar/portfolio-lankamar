import React from "react";
import { education, experience, skills } from "../data";

export default function Experience() {
  return (
    <div className="container">
      <h1>Trayectoria</h1>
      <p className="affil">
        <b>36 años</b> en el Hospital de Clínicas José de San Martín (UBA):
        asistencia, conducción de equipos y gestión de servicios.
      </p>

      <h2>Experiencia</h2>
      <div className="timeline">
        {experience.map((job) => (
          <article className="entry" key={job.role}>
            <div className="entry-head">
              <span className="entry-title">{job.role}</span>
              <span className="entry-when">
                {job.from} — {job.to}
              </span>
            </div>
            <div className="entry-sub">{job.place}</div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2>Formación</h2>
      <div>
        {education.map((e) => (
          <article className="entry" key={e.title}>
            <div className="entry-head">
              <span className="entry-title">{e.title}</span>
              <span className="entry-when">
                {e.year} · {e.status}
              </span>
            </div>
            <div className="entry-sub">{e.place}</div>
            {e.detail && <p className="entry-detail">{e.detail}</p>}
            {e.credential && (
              <p className="entry-detail">
                <a href={e.credential}>
                  {e.credentialLabel || "Ver certificación"}{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </p>
            )}
          </article>
        ))}
      </div>

      <h2>Competencias</h2>
      <div className="grid-2">
        {Object.entries(skills).map(([group, list]) => (
          <div className="card" key={group}>
            <h3>{group}</h3>
            <div className="chips">
              {list.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>Idiomas</h2>
      <p>
        Español nativo · Inglés instrumental (documentación técnica, asistido por
        herramientas).
      </p>
    </div>
  );
}
