import React from "react";
import { projects } from "../data";

export default function Projects() {
  const groups = Array.from(new Set(projects.map((p) => p.group)));

  return (
    <div className="container">
      <h1>Proyectos</h1>
      <p className="affil">
        Herramientas construidas para problemas concretos de salud, educación y
        gestión. Publicadas, en uso o con repositorio abierto.
      </p>

      {groups.map((group) => (
        <section key={group}>
          <h2>{group}</h2>
          {projects
            .filter((p) => p.group === group)
            .map((p) => (
              <article className="entry" key={p.name}>
                <div className="entry-head">
                  <span className="entry-title">{p.name}</span>
                  {p.href ? (
                    <a
                      className="entry-when"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.linkLabel || "Ver más"} <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <span className="entry-when">{p.linkLabel || "En uso"}</span>
                  )}
                </div>
                <div className="entry-body">
                  <div>
                    <p>{p.desc}</p>
                    <div className="chips">
                      {p.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.image && (
                    <img
                      className="project-thumb"
                      src={p.image}
                      alt={`Captura de ${p.name}`}
                      loading="lazy"
                    />
                  )}
                </div>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}
