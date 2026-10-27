export const site = {
  firstName: "Marcelo",
  lastName: "Lancry Kamycki",
  fullName: "Marcelo Omar Lancry Kamycki",
  affiliation: "Hospital de Clínicas José de San Martín (UBA) · CITEP-UBA",
  location: "Ciudad Evita, Buenos Aires, Argentina",
  email: "lankamar@gmail.com",
  orcid: "0009-0008-8196-6291",
  started: 1990,
  years: 36,
  credentials: 311,
  license: "73.519",
  links: {
    email: "mailto:lankamar@gmail.com",
    github: "https://github.com/lankamar",
    linkedin: "https://www.linkedin.com/in/lankamar",
    youtube: "https://www.youtube.com/channel/UCCAwJvdIwLrrf7Fx2QCl4yA",
    orcid: "https://orcid.org/0009-0008-8196-6291",
    spotify: "https://open.spotify.com/user/lankamar",
    telegram: "https://t.me/quintadeenfermeria",
    tiktok: "https://www.tiktok.com/@marceloomarlancrykamycki",
    instagram: "https://www.instagram.com/lankamar/",
    linkedinArticles: "https://www.linkedin.com/in/lankamar/recent-activity/articles/",
  },
};

export type NewsItem = { date: string; text: string; href?: string };

export const news: NewsItem[] = [
  {
    date: "2026",
    text: "Pre-print sobre alineamiento pragmático de modelos de lenguaje, disponible en ORCID.",
    href: site.links.orcid,
  },
  {
    date: "2026",
    text: "Diplomatura en Inteligencia Artificial y Prácticas de Enseñanza (CITEP-UBA) concluida y aprobada; esperando la certificación.",
  },
  {
    date: "2026",
    text: "Certificación del curso VibeCoding en la enseñanza (CITEP-UBA), con registro público.",
    href: "/credenciales/vibecoding-citep-2026/",
  },
  {
    date: "2026",
    text: "Nueva versión del portfolio, con verificación pública de credenciales.",
  },
  {
    date: "2026",
    text: "Máster Ejecutivo en Inteligencia Artificial (IIA): Trabajo Final de Máster entregado, en espera de calificación.",
  },
  {
    date: "2025",
    text: "Simulador de ECG y simulador de bombas de infusión publicados para práctica de enfermería.",
    href: "https://ecg-simulator2.vercel.app",
  },
];

export type Publication = {
  title: string;
  type: string;
  date: string;
  detail: string;
  href?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Pragmatic Alignment of Large Language Models through Intensity-Weighted Markers",
    type: "Pre-print",
    date: "marzo 2026",
    detail:
      "Zenodo · indexación pendiente · ORCID 0009-0008-8196-6291",
    href: site.links.orcid,
  },
  {
    title: "Simulador ECG: Codiseño Agéntico para la Educación en Salud",
    type: "Documento de investigación",
    date: "2025",
    detail: "Instituto de Inteligencia Artificial (IIA).",
  },
  {
    title: "Trabajo Final Integrador — EDET / CITEP-UBA",
    type: "Trabajo final de especialización",
    date: "2026",
    detail: "Rediseño pedagógico con IA en salud.",
  },
];

export type Project = {
  name: string;
  desc: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  group: string;
};

export const projects: Project[] = [
  {
    name: "ECG Simulator",
    desc: "Simulador de arritmias con doce derivaciones y ECG en tiempo real para formación de enfermería. Demo pública.",
    stack: ["TypeScript", "React", "IA"],
    href: "https://ecg-simulator2.vercel.app",
    linkLabel: "Ver demo",
    group: "Salud y educación",
  },
  {
    name: "SiBIC — Simulador de bombas de infusión",
    desc: "Entrenamiento en el uso de bombas de infusión continua para estudiantes de enfermería.",
    stack: ["Flutter", "Dart"],
    href: "https://github.com/lankamar/simulador-bic",
    linkLabel: "Ver repositorio",
    group: "Salud y educación",
  },
  {
    name: "Generador de Partes Diarios",
    desc: "Automatiza el informe diario de enfermería por turno, con plantillas y consolidación de datos. En uso en el servicio.",
    stack: ["Google Workspace", "Apps Script", "IA generativa"],
    group: "Gestión hospitalaria",
  },
  {
    name: "Shock Room Simulator",
    desc: "Monitor multiparamétrico para entrenamiento en shock room: escenarios de terapia intensiva con signos vitales en tiempo real.",
    stack: ["TypeScript"],
    href: "https://github.com/lankamar/shock-room-simulator",
    linkLabel: "Ver repositorio",
    group: "Salud y educación",
  },
  {
    name: "Lector Alonso",
    desc: "Extensión de Chrome más backend en FastAPI que lee en voz alta la selección, un documento completo o texto capturado por OCR. Sin nube ni claves de API.",
    stack: ["Python", "FastAPI", "Chrome MV3", "OCR"],
    href: "https://github.com/lankamar/lector-alonso",
    linkLabel: "Ver repositorio",
    group: "Herramientas",
  },
  {
    name: "Anonimizador clínico",
    desc: "Anonimización local de datos clínicos compatible con la Ley 25.326. Procesa sin enviar información a la nube.",
    stack: ["Python", "NLP"],
    href: "https://github.com/lankamar/anonimizador-clinico",
    linkLabel: "Ver repositorio",
    group: "Privacidad y datos",
  },
  {
    name: "Nurse Eval AI",
    desc: "Evaluación de desempeño de enfermería asistida por IA conversacional. Piloto en el Hospital de Clínicas (UBA).",
    stack: ["Python", "LLM"],
    href: "https://github.com/lankamar/nurse-eval-ai",
    linkLabel: "Ver repositorio",
    group: "Salud y educación",
  },
  {
    name: "Pragmatic LLM Alignment",
    desc: "Framework de agentes y material del pre-print sobre alineamiento pragmático mediante marcadores de retroalimentación.",
    stack: ["Python", "LLM"],
    href: "https://github.com/lankamar/pragmatic-llm-alignment",
    linkLabel: "Ver repositorio",
    group: "Investigación",
  },
  {
    name: "Aprende Google Cloud",
    desc: "Curso interactivo de doce capítulos con narración para aprender Google Cloud desde cero. Publicado en GitHub Pages.",
    stack: ["HTML", "Narración"],
    href: "https://github.com/lankamar/aprende-que-es-google-cloud",
    linkLabel: "Ver repositorio",
    group: "Educación",
  },
  {
    name: "Lankamar Link",
    desc: "Puente entre Telegram y la máquina local: salas persistentes por modelo, consultas a agentes, ejecución de comandos y respuestas en audio con voz neural.",
    stack: ["Python", "Telegram Bot API", "systemd", "Ollama"],
    linkLabel: "Demo a pedido",
    group: "Herramientas",
  },
];

export type Job = {
  role: string;
  place: string;
  from: string;
  to: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Jefe de Enfermería — Clínica Médica, 5ª Cátedra de Medicina Interna",
    place: "Hospital de Clínicas José de San Martín, UBA",
    from: "2015",
    to: "actualidad",
    bullets: [
      "Conducción de equipos clínicos y académicos en un hospital universitario de alta complejidad.",
      "Gestión de recursos humanos y materiales; coordinación de estudiantes de enfermería.",
      "Implementación de herramientas digitales propias para partes diarios, turnos y documentación.",
      "Análisis de datos asistido por IA para procesos operativos y cumplimiento normativo.",
    ],
  },
  {
    role: "Supervisor de Área — Dirección de Enfermería",
    place: "Hospital de Clínicas José de San Martín, UBA",
    from: "2005",
    to: "2015",
    bullets: [
      "Coordinación de múltiples servicios de enfermería.",
      "Planificación de turnos, gestión de personal y estandarización de circuitos asistenciales.",
    ],
  },
  {
    role: "Trayectoria asistencial",
    place: "Hospital de Clínicas José de San Martín, UBA",
    from: "1990",
    to: "2005",
    bullets: [
      "Unidad Coronaria y Cuidados Intensivos cardiovasculares (1992-1999).",
      "Encargado de Urgencias / Guardia (2004-2005).",
      "Enfermero volante del Departamento de Enfermería (2000-2003).",
    ],
  },
  {
    role: "Residente de Enfermería General Integral y Comunitaria",
    place: "CESAC N° 15 — Área Programática Hospital Argerich",
    from: "1999",
    to: "2002",
    bullets: ["Formación de posgrado en atención primaria y comunitaria."],
  },
  {
    role: "Enfermero de móvil sanitario",
    place: "Médicos del Mundo",
    from: "2004",
    to: "2005",
    bullets: ["Atención comunitaria en terreno."],
  },
];

export type Study = {
  title: string;
  place: string;
  status: string;
  year: string;
  detail?: string;
  credential?: string;
  credentialLabel?: string;
};

export const education: Study[] = [
  {
    title: "Especialización en Diseño de la Enseñanza con Tecnologías (EDET)",
    place: "CITEP — Secretaría de Asuntos Académicos, UBA",
    status: "concluida · esperando certificación",
    year: "2026",
    detail:
      "Siete seminarios y talleres aprobados (7 de 7), 384 horas, promedio 9,43. Solo resta la emisión del certificado por trámite administrativo de la UBA.",
    credential: "/credenciales/edet-uba-2026/",
    credentialLabel: "Ver constancia de materias aprobadas",
  },
  {
    title: "Diplomatura en Inteligencia Artificial y Prácticas de Enseñanza",
    place: "CITEP, UBA",
    status: "concluida · esperando certificación",
    year: "2026",
    detail:
      "Concluida y aprobada. Solo resta la emisión del certificado por trámite administrativo de la UBA.",
  },
  {
    title:
      "VibeCoding en la enseñanza. Artesanías didácticas en escenarios algoritmizados",
    place: "CITEP-UBA · Programa de Formación Docente",
    status: "acreditado",
    year: "2026",
    detail:
      "40 horas · Resolución REREC-2026-290-E-UBA-REC · Registro N° 594, Libro 1.",
    credential: "/credenciales/vibecoding-citep-2026/",
    credentialLabel: "Ver certificación",
  },
  {
    title: "Máster Ejecutivo en Inteligencia Artificial",
    place: "Instituto de Inteligencia Artificial (IIA), España",
    status: "en espera de calificación del TFM",
    year: "2025-2026",
    detail: "Trabajo Final de Máster entregado; solo resta la calificación.",
  },
  {
    title: "Licenciatura en Enfermería",
    place: "Universidad Nacional de Lanús (UNLa)",
    status: "graduado",
    year: "2013",
  },
  {
    title: "Especialista en Enfermería General Integral y Comunitaria",
    place: "Residencia — CESAC N° 15 / Hospital Argerich",
    status: "graduado",
    year: "2002",
  },
  {
    title: "Enfermería Profesional",
    place: "Escuela de Enfermería HIGA Pedro Fiorito, Avellaneda",
    status: "graduado",
    year: "1995",
  },
];

export const skills = {
  "Desarrollo": [
    "Python y FastAPI",
    "TypeScript y React",
    "Chrome Extensions (MV3)",
    "Git y GitHub",
    "Docker básico",
  ],
  "IA aplicada": [
    "Gemini API",
    "Prompt engineering",
    "RAG y recuperación documental",
    "Orquestación de agentes",
  ],
  "Datos y gestión": [
    "Google Workspace y Apps Script",
    "Excel avanzado",
    "Power BI (básico)",
    "SQL básico",
  ],
  "Salud y docencia": [
    "Conducción de equipos",
    "Mejora de procesos",
    "Simulación clínica",
    "Diseño de materiales",
  ],
};

export const teaching = [
  {
    title: "Coordinación de estudiantes de enfermería",
    place: "Hospital de Clínicas José de San Martín (UBA)",
    text: "Coordinación de estudiantes de grado en la 5ª Cátedra de Medicina Interna: organización de prácticas, acompañamiento en el servicio y evaluación de desempeño.",
  },
  {
    title: "Simulación clínica",
    place: "Herramientas propias",
    text: "Diseño y uso de simuladores para práctica asincrónica: ECG de doce derivaciones, bombas de infusión continua y escenarios de shock room.",
  },
  {
    title: "Formación continua",
    place: "311 credenciales",
    text: "Más de 300 certificaciones en salud, gestión y tecnología. La Especialización en Diseño de la Enseñanza con Tecnologías (EDET, CITEP-UBA) está concluida y aprobada; solo resta la emisión del certificado por trámite administrativo.",
  },
];

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  updated: string;
  url: string;
};

export const fallbackRepos: Repo[] = [
  {
    name: "lector-alonso",
    description:
      "Extensión de Chrome + backend TTS local: lee selección, documentos y OCR en español. Sin nube, sin claves de API.",
    language: "Python",
    stars: 0,
    updated: "",
    url: "https://github.com/lankamar/lector-alonso",
  },
  {
    name: "ecg-simulator",
    description:
      "Simulador de arritmias con 12 derivaciones y ECG en tiempo real para formación de enfermería.",
    language: "TypeScript",
    stars: 0,
    updated: "",
    url: "https://github.com/lankamar/ecg-simulator",
  },
  {
    name: "anonimizador-clinico",
    description:
      "Anonimizador local de datos clínicos compatible con la Ley 25.326.",
    language: "Python",
    stars: 0,
    updated: "",
    url: "https://github.com/lankamar/anonimizador-clinico",
  },
  {
    name: "portfolio-lankamar",
    description:
      "Portfolio profesional: enfermería, gestión hospitalaria e IA aplicada.",
    language: "TypeScript",
    stars: 0,
    updated: "",
    url: "https://github.com/lankamar/portfolio-lankamar",
  },
];
