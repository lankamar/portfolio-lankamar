import React from "react";
import { teaching } from "../data";

export default function Teaching() {
  return (
    <div className="container">
      <h1>Docencia</h1>
      <p className="affil">
        Formación de estudiantes y equipos, diseño de materiales y simulación
        clínica en el Hospital de Clínicas (UBA).
      </p>

      {teaching.map((t) => (
        <article className="entry" key={t.title}>
          <div className="entry-head">
            <span className="entry-title">{t.title}</span>
            <span className="entry-when">{t.place}</span>
          </div>
          <p>{t.text}</p>
        </article>
      ))}

      <h2>Línea de trabajo</h2>
      <p>
        La docencia en salud tiene un problema práctico: el estudiante necesita
        repetir sin riesgo sobre el paciente. Mi línea es construir simuladores
        de bajo costo que permitan esa práctica asincrónica, con criterio clínico
        explícito y evaluación posterior.
      </p>
    </div>
  );
}
