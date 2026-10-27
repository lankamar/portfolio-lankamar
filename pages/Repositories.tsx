import React, { useEffect, useState } from "react";
import { fallbackRepos, Repo } from "../data";

const API = "https://api.github.com/users/lankamar/repos?per_page=100&sort=updated";

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

  const list = repos || [];

  return (
    <div className="container">
      <h1>Repositorios</h1>
      <p className="affil">
        Código público en{" "}
        <a
          href="https://github.com/lankamar"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/lankamar
        </a>
        . Herramientas de salud, educación y automatización.
      </p>

      {repos === null && <p className="muted">Cargando repositorios…</p>}
      {error && (
        <p className="muted" style={{ fontSize: "0.9rem" }}>
          No se pudo consultar GitHub en este momento; se muestra una selección.
        </p>
      )}

      {list.map((r) => (
        <article className="entry" key={r.name}>
          <div className="entry-head">
            <a
              className="entry-title"
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {r.name}
            </a>
            <span className="entry-when">
              {formatDate(r.updated)}
              {r.stars > 0 ? ` · ★ ${r.stars}` : ""}
            </span>
          </div>
          {r.description && <p>{r.description}</p>}
          {r.language && (
            <div className="repo-meta">
              <span>
                <span className="dot" />
                {r.language}
              </span>
            </div>
          )}
        </article>
      ))}

      <div className="actions" style={{ marginTop: "1.5rem" }}>
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
