import React from "react";

const variants = [
  {
    title: "CV — Tecnología e IA aplicada",
    desc: "Para roles junior de desarrollo, IA aplicada o soporte técnico.",
    file: "/documentos/cv-tech.pdf",
  },
  {
    title: "CV — Salud y gestión",
    desc: "Para jefaturas, coordinación y gestión hospitalaria.",
    file: "/documentos/cv-salud.pdf",
  },
  {
    title: "CV — Académico",
    desc: "Para docencia, investigación y formación.",
    file: "/documentos/cv-academico.pdf",
  },
];

export default function CVPage() {
  return (
    <div className="container">
      <h1>CV</h1>
      <p className="affil">
        Tres versiones del mismo recorrido, según el destinatario. Todos los
        datos salen de una fuente única y verificable.
      </p>

      {variants.map((v) => (
        <div className="cv-card" key={v.file}>
          <div>
            <h3 style={{ marginBottom: 2 }}>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
          <a className="btn" href={v.file} download>
            <i className="fa-solid fa-file-pdf" aria-hidden="true" /> Descargar
          </a>
        </div>
      ))}

      <h2>Verificación</h2>
      <p>
        Las credenciales de formación continua se pueden verificar en páginas
        públicas:{" "}
        <a href="/credenciales/">credenciales</a>.
      </p>
      <p className="muted" style={{ fontSize: "0.9rem" }}>
        Última actualización: octubre 2026.
      </p>
    </div>
  );
}
