import React from "react";

const variants = [
  {
    title: "CV — Tecnología e IA aplicada",
    desc: "Para roles junior de desarrollo, IA aplicada o soporte técnico.",
    href: "/solicitar-cv/?version=tech",
  },
  {
    title: "CV — Salud y gestión",
    desc: "Para jefaturas, coordinación y gestión hospitalaria.",
    href: "/solicitar-cv/?version=salud",
  },
  {
    title: "CV — Académico",
    desc: "Para docencia, investigación y formación.",
    href: "/solicitar-cv/?version=academico",
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

      <div className="card cv-flow-card" style={{ marginBottom: "1.5rem" }}>
        <h2>Descarga con verificación de correo</h2>
        <p>
          Para descargar cualquiera de las tres versiones, debés registrar tu
          correo electrónico y verificarlo mediante el enlace que recibirás en tu
          casilla. El enlace es de un solo uso y vence a los 30 minutos.
        </p>
        <div className="cv-steps-grid" aria-label="Pasos para obtener el CV">
          <div className="cv-step-item">
            <span className="cv-step-num">Paso 1</span>
            <strong>Elegí la versión</strong>
            <span>Seleccioná el perfil de CV y completá tu correo en el formulario.</span>
          </div>
          <div className="cv-step-item">
            <span className="cv-step-num">Paso 2</span>
            <strong>Revisá tu correo</strong>
            <span>Recibirás un enlace personal válido durante 30 minutos.</span>
          </div>
          <div className="cv-step-item">
            <span className="cv-step-num">Paso 3</span>
            <strong>Confirmá y descargá</strong>
            <span>Confirmá la acción para iniciar la descarga única del archivo PDF.</span>
          </div>
        </div>
        <p className="muted" style={{ fontSize: "0.9rem" }}>
          No usamos tu correo para publicidad ni suscripciones. Podés consultar el{" "}
          <a href="/privacidad-cv/">aviso de privacidad de solicitudes de CV</a>.
        </p>
      </div>

      {variants.map((v) => (
        <div className="cv-card" key={v.href}>
          <div>
            <h3 style={{ marginBottom: 2 }}>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
          <a className="btn" href={v.href}>
            <i className="fa-solid fa-file-pdf" aria-hidden="true" /> Solicitar
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
