import React from "react";
import { featuredRepos } from "../data";

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export default function Repositories() {
  return (
    <div className="container">
      <h1>Repositorios</h1>
      <p className="page-sub">
        Una selección de mis repositorios, ordenada por relevancia clínica y
        educativa.
      </p>
      <hr />

      <h2>Mis repositorios</h2>

      <div className="repo-grid">
        {featuredRepos.map((r) => (
          <article className="repo-card" key={r.name}>
            <a
              className="repo-name"
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-book" aria-hidden="true" />
              {r.name}
            </a>
            <span className="repo-desc">{r.desc}</span>
            <span className="repo-meta">
              <span className="repo-lang">
                <span
                  className="lang-dot"
                  style={{
                    background: LANG_COLORS[r.language || ""] || "var(--muted)",
                  }}
                />
                {r.language}
              </span>
              {r.demo && (
                <a
                  className="repo-demo"
                  href={r.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                  Demo
                </a>
              )}
            </span>
          </article>
        ))}
      </div>

      <div className="actions" style={{ marginTop: "1.6rem" }}>
        <a
          className="btn btn-outline"
          href="https://github.com/lankamar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos en GitHub
        </a>
      </div>
    </div>
  );
}
