import React, { useEffect, useState } from "react";
import { fallbackRepos, Repo } from "../data";

const API =
  "https://api.github.com/users/lankamar/repos?per_page=100&sort=pushed";

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
};

function formatDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return "";
  }
}

export default function Repositories() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(API)
      .then((r) => {
        if (!r.ok) throw new Error("http");
        return r.json();
      })
      .then((data: any[]) => {
        if (!alive) return;
        const list: Repo[] = data
          .filter((r) => !r.fork)
          .map((r) => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            forks: r.forks_count,
            updated: r.pushed_at,
            url: r.html_url,
          }));
        setRepos(list.length ? list : fallbackRepos);
      })
      .catch(() => {
        if (!alive) return;
        setError(true);
        setRepos(fallbackRepos);
      });
    return () => {
      alive = false;
    };
  }, []);

  const list = (repos || []).slice(0, 10);

  return (
    <div className="container">
      <h1>Repositorios</h1>
      <p className="page-sub">
        Una selección de mis repositorios de GitHub.
      </p>
      <hr />

      <h2>Mis repositorios</h2>

      {repos === null && <p className="muted">Cargando repositorios…</p>}
      {error && (
        <p className="muted" style={{ fontSize: "0.85rem" }}>
          No se pudo consultar GitHub en este momento; se muestra una selección.
        </p>
      )}

      {list.length > 0 && (
        <div className="repo-grid">
          {list.map((r) => (
            <a
              className="repo-card"
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="repo-name">
                <i className="fa-solid fa-book" aria-hidden="true" />
                {r.name}
              </span>
              <span className="repo-desc">
                {r.description || "Sin descripción."}
              </span>
              <span className="repo-meta">
                {r.language && (
                  <span className="repo-lang">
                    <span
                      className="lang-dot"
                      style={{
                        background:
                          LANG_COLORS[r.language] || "var(--muted)",
                      }}
                    />
                    {r.language}
                  </span>
                )}
                <span>
                  <i className="fa-regular fa-star" aria-hidden="true" />
                  {r.stars}
                </span>
                <span>
                  <i className="fa-solid fa-code-fork" aria-hidden="true" />
                  {r.forks ?? 0}
                </span>
                <span className="repo-updated">{formatDate(r.updated)}</span>
              </span>
            </a>
          ))}
        </div>
      )}

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

      <p className="muted" style={{ fontSize: "0.8rem", marginTop: "1.2rem" }}>
        Datos en vivo desde la API de GitHub.
      </p>
    </div>
  );
}
