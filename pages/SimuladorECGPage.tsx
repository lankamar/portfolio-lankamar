import React from "react";

export default function SimuladorECGPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: "#111",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          background: "#1c1c1d",
          color: "#e8e8e8",
          fontFamily: "Roboto, sans-serif",
          fontSize: "14px",
        }}
      >
        <a href="/" style={{ color: "#e8e8e8", textDecoration: "none" }}>
          ← Volver al sitio
        </a>
        <span style={{ opacity: 0.7 }}>ECG Simulator</span>
      </header>
      <iframe
        src="https://ecg-simulator2.vercel.app/"
        style={{ flex: 1, width: "100%", border: 0 }}
        title="Simulador ECG - Arritmias cardíacas"
        allow="fullscreen"
        loading="eager"
      />
    </div>
  );
}
