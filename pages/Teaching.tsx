import React, { useEffect, useState } from "react";
import { teaching } from "../data";

const COURSE_API_BASE = "https://teal-gnat-607186.hostingersite.com/cv-api/course";
const STORAGE_KEY = "lankamar_course_nlm_session_v1";

type VideoItem = {
  id: string;
  code: string;
  title: string;
  duration: string;
  desc: string;
  src: string;
};

type CourseModule = {
  id: string;
  title: string;
  subtitle: string;
  videos: VideoItem[];
};

type CourseSession = {
  student: { name: string; email: string };
  notebook_url: string;
  expires_at: number;
  modules: CourseModule[];
};

export default function Teaching() {
  const [tab, setTab] = useState<"login" | "request">("login");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginCode, setLoginCode] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Request form state
  const [reqName, setReqName] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [reqReason, setReqReason] = useState("");
  const [reqWebsite, setReqWebsite] = useState("");
  const [reqLoading, setReqLoading] = useState(false);
  const [reqError, setReqError] = useState("");
  const [reqSuccess, setReqSuccess] = useState(false);

  // Active classroom state
  const [session, setSession] = useState<CourseSession | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string>("practica");
  const [activeVideoId, setActiveVideoId] = useState<string>("v00");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CourseSession;
      if (parsed && parsed.expires_at && parsed.expires_at * 1000 > Date.now()) {
        setSession(parsed);
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore invalid storage
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    const emailTrim = loginEmail.trim().toLowerCase();
    const codeTrim = loginCode.trim().toUpperCase();
    if (!emailTrim || !codeTrim) {
      setLoginError("Completá tu correo electrónico autorizado y tu código personal.");
      return;
    }

    setLoginLoading(true);
    try {
      const resp = await fetch(`${COURSE_API_BASE}/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailTrim,
          code: codeTrim,
          course: "notebooklm",
        }),
      });
      const data = await resp.json().catch(() => null);
      if (!resp.ok || !data || !data.ok) {
        setLoginError(
          data?.message ||
            "El correo o el código personal no coinciden con una autorización activa."
        );
        return;
      }

      const newSession: CourseSession = {
        student: data.student,
        notebook_url: data.notebook_url,
        expires_at: data.expires_at,
        modules: data.modules,
      };
      setSession(newSession);
      setActiveModuleId("practica");
      setActiveVideoId("v00");
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newSession));
      } catch {
        // ignore storage quota errors
      }
    } catch {
      setLoginError("No se pudo conectar con el servidor del aula. Intentá nuevamente en unos segundos.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setReqError("");
    setReqSuccess(false);

    if (!reqName.trim() || !reqEmail.trim() || !reqReason.trim()) {
      setReqError("Por favor completá tu nombre, correo electrónico y el motivo de la solicitud.");
      return;
    }

    setReqLoading(true);
    try {
      const resp = await fetch(`${COURSE_API_BASE}/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: reqName.trim(),
          email: reqEmail.trim(),
          reason: reqReason.trim(),
          website: reqWebsite,
          course: "notebooklm",
        }),
      });

      if (resp.status === 429) {
        setReqError("Ya registraste solicitudes recientes. Aguardá unos minutos antes de reintentar.");
        return;
      }

      if (!resp.ok) {
        setReqError("Revisá que el correo sea válido e intentá nuevamente.");
        return;
      }

      setReqSuccess(true);
      setReqName("");
      setReqEmail("");
      setReqReason("");
    } catch {
      setReqError("No se pudo enviar la solicitud en este momento. Intentá nuevamente.");
    } finally {
      setReqLoading(false);
    }
  };

  const handleLogout = () => {
    setSession(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const allVideos: VideoItem[] = session
    ? session.modules.flatMap((m) => m.videos)
    : [];
  const currentVideo: VideoItem | undefined =
    allVideos.find((v) => v.id === activeVideoId) || allVideos[0];
  const currentIndex = currentVideo
    ? allVideos.findIndex((v) => v.id === currentVideo.id)
    : -1;
  const prevVideo = currentIndex > 0 ? allVideos[currentIndex - 1] : null;
  const nextVideo =
    currentIndex >= 0 && currentIndex < allVideos.length - 1
      ? allVideos[currentIndex + 1]
      : null;

  const selectVideo = (video: VideoItem, moduleId: string) => {
    setActiveModuleId(moduleId);
    setActiveVideoId(video.id);
  };

  return (
    <div className="container">
      <h1>Docencia</h1>
      <p className="affil">
        Formación de estudiantes y equipos, diseño de materiales y simulación
        clínica en el Hospital de Clínicas (UBA).
      </p>

      <section className="card aula-card" aria-labelledby="aula-privada-heading">
        <div className="cv-step-badge">
          Aula Privada · Curso 01 · 17 videos + Cuaderno oficial
        </div>
        <h2 id="aula-privada-heading" style={{ marginTop: "0.35rem" }}>
          Gemini Notebook / NotebookLM desde adentro
        </h2>
        <p>
          Curso audiovisual dividido en dos recorridos complementarios:{" "}
          <strong>Módulo 1 (6 clases prácticas paso a paso)</strong> sobre la
          interfaz real para crear tu primer cuaderno y cargar fuentes, y{" "}
          <strong>Módulo 2 (11 videos sobre la documentación oficial)</strong>{" "}
          donde el propio NotebookLM explica sus fundamentos (LLM vs. RAG),
          citas, mapas mentales, resúmenes de audio/video, tarjetas y privacidad.
        </p>

        {!session ? (
          <div className="aula-gate">
            <div className="aula-tabs" role="tablist" aria-label="Acceso al curso">
              <button
                type="button"
                role="tab"
                aria-selected={tab === "login"}
                className={`aula-tab ${tab === "login" ? "active" : ""}`}
                onClick={() => {
                  setTab("login");
                  setLoginError("");
                }}
              >
                <i className="fa-solid fa-key" aria-hidden="true" /> Ingresar con mi
                código
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "request"}
                className={`aula-tab ${tab === "request" ? "active" : ""}`}
                onClick={() => {
                  setTab("request");
                  setReqError("");
                }}
              >
                <i className="fa-solid fa-envelope-open-text" aria-hidden="true" />{" "}
                Solicitar acceso a Marcelo
              </button>
            </div>

            {tab === "login" ? (
              <form className="aula-form" onSubmit={handleLogin} noValidate>
                <p className="muted" style={{ marginTop: 0 }}>
                  Ingresá el correo electrónico autorizado y el código personal que
                  recibiste por mail. El código está vinculado exclusivamente a tu
                  correo y no puede compartirse.
                </p>
                <div className="aula-form-grid">
                  <div className="aula-field">
                    <label htmlFor="aula-login-email">Correo autorizado</label>
                    <input
                      id="aula-login-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="tu-correo@ejemplo.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="aula-field">
                    <label htmlFor="aula-login-code">Código personal</label>
                    <input
                      id="aula-login-code"
                      type="text"
                      required
                      autoComplete="off"
                      placeholder="NLM-XXXX-XXXX"
                      value={loginCode}
                      onChange={(e) => setLoginCode(e.target.value)}
                    />
                  </div>
                </div>
                {loginError && (
                  <div className="aula-alert aula-alert-error" role="alert">
                    {loginError}
                  </div>
                )}
                <div className="actions" style={{ marginTop: "1rem" }}>
                  <button className="btn" type="submit" disabled={loginLoading}>
                    <i className="fa-solid fa-circle-play" aria-hidden="true" />{" "}
                    {loginLoading ? "Verificando acceso..." : "Entrar al aula y ver videos"}
                  </button>
                </div>
              </form>
            ) : (
              <form className="aula-form" onSubmit={handleRequest} noValidate>
                <p className="muted" style={{ marginTop: 0 }}>
                  Pedí tu código personal de ingreso. Marcelo recibirá tu solicitud y,
                  una vez aprobada, te llegará automáticamente al correo tu código
                  intransferible.
                </p>
                <div className="aula-form-grid">
                  <div className="aula-field">
                    <label htmlFor="aula-req-name">Nombre y apellido</label>
                    <input
                      id="aula-req-name"
                      type="text"
                      required
                      maxLength={120}
                      placeholder="Tu nombre completo"
                      value={reqName}
                      onChange={(e) => setReqName(e.target.value)}
                    />
                  </div>
                  <div className="aula-field">
                    <label htmlFor="aula-req-email">Correo electrónico</label>
                    <input
                      id="aula-req-email"
                      type="email"
                      required
                      maxLength={254}
                      placeholder="tu-correo@ejemplo.com"
                      value={reqEmail}
                      onChange={(e) => setReqEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="aula-field" style={{ marginTop: "0.85rem" }}>
                  <label htmlFor="aula-req-reason">
                    Institución, cátedra o motivo de la solicitud
                  </label>
                  <textarea
                    id="aula-req-reason"
                    rows={3}
                    required
                    maxLength={500}
                    placeholder="Contanos brevemente dónde estudiás o trabajás y para qué querés realizar el curso."
                    value={reqReason}
                    onChange={(e) => setReqReason(e.target.value)}
                  />
                </div>
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="aula-req-website">Sitio web</label>
                  <input
                    id="aula-req-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={reqWebsite}
                    onChange={(e) => setReqWebsite(e.target.value)}
                  />
                </div>
                {reqError && (
                  <div className="aula-alert aula-alert-error" role="alert">
                    {reqError}
                  </div>
                )}
                {reqSuccess && (
                  <div className="aula-alert aula-alert-ok" role="status">
                    <strong>Solicitud enviada correctamente.</strong> Marcelo recibió
                    tu pedido en su correo. Cuando apruebe tu ingreso, recibirás un
                    correo con tu código personal para entrar en la pestaña «Ingresar
                    con mi código».
                  </div>
                )}
                <div className="actions" style={{ marginTop: "1rem" }}>
                  <button className="btn" type="submit" disabled={reqLoading}>
                    <i className="fa-solid fa-paper-plane" aria-hidden="true" />{" "}
                    {reqLoading ? "Enviando solicitud..." : "Solicitar acceso al curso"}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="aula-classroom">
            <div className="aula-userbar">
              <div>
                <strong>Acceso activo:</strong> {session.student.name} (
                <code>{session.student.email}</code>)
              </div>
              <div className="aula-userbar-actions">
                <a
                  className="btn btn-outline"
                  href={session.notebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-book-open" aria-hidden="true" /> Abrir
                  Cuaderno en NotebookLM
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleLogout}
                >
                  Salir
                </button>
              </div>
            </div>

            {currentVideo && (
              <div className="aula-player-box">
                <div className="aula-video-header">
                  <span className="badge">{currentVideo.code}</span>
                  <strong>{currentVideo.title}</strong>
                  <span className="muted" style={{ marginLeft: "auto" }}>
                    Duración: {currentVideo.duration}
                  </span>
                </div>
                <div className="aula-video-wrapper">
                  <video
                    key={currentVideo.src}
                    className="aula-video"
                    controls
                    preload="metadata"
                    controlsList="nodownload"
                    src={currentVideo.src}
                  >
                    Tu navegador no admite reproducción de video HTML5.
                  </video>
                </div>
                <p className="aula-video-desc">{currentVideo.desc}</p>
                <div className="aula-nav-buttons">
                  <button
                    type="button"
                    className="btn btn-outline"
                    disabled={!prevVideo}
                    onClick={() => {
                      if (!prevVideo) return;
                      const mod = session.modules.find((m) =>
                        m.videos.some((v) => v.id === prevVideo.id)
                      );
                      selectVideo(prevVideo, mod ? mod.id : activeModuleId);
                    }}
                  >
                    ← Video anterior
                  </button>
                  <span className="muted" style={{ fontSize: "0.9rem" }}>
                    Video {currentIndex + 1} de {allVideos.length}
                  </span>
                  <button
                    type="button"
                    className="btn"
                    disabled={!nextVideo}
                    onClick={() => {
                      if (!nextVideo) return;
                      const mod = session.modules.find((m) =>
                        m.videos.some((v) => v.id === nextVideo.id)
                      );
                      selectVideo(nextVideo, mod ? mod.id : activeModuleId);
                    }}
                  >
                    Siguiente video →
                  </button>
                </div>
              </div>
            )}

            <div className="aula-modules-tabs">
              {session.modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  className={`aula-tab ${activeModuleId === mod.id ? "active" : ""}`}
                  onClick={() => setActiveModuleId(mod.id)}
                >
                  {mod.id === "practica"
                    ? "Módulo 1: Práctica paso a paso (6 videos)"
                    : "Módulo 2: Documentación Oficial por NotebookLM (11 videos)"}
                </button>
              ))}
            </div>

            {session.modules
              .filter((m) => m.id === activeModuleId)
              .map((mod) => (
                <div key={mod.id} className="aula-module-panel">
                  <p className="muted" style={{ marginTop: "0.5rem" }}>
                    {mod.subtitle}
                  </p>
                  <div className="aula-playlist">
                    {mod.videos.map((v) => {
                      const isCurrent = currentVideo?.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          className={`aula-playlist-item ${isCurrent ? "active" : ""}`}
                          onClick={() => selectVideo(v, mod.id)}
                        >
                          <span className="aula-playlist-code">{v.code}</span>
                          <span className="aula-playlist-main">
                            <strong>{v.title}</strong>
                            <span>{v.desc}</span>
                          </span>
                          <span className="aula-playlist-dur">{v.duration}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>

      <h2>Experiencia docente y formación</h2>
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
