import React from "react";
import { Link } from "react-router-dom";
import { site } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          © 2026 {site.fullName} · <Link to="/cv">CV</Link> ·{" "}
          <a href={site.links.orcid} target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
        </p>
        <p>Última actualización: octubre 2026</p>
      </div>
    </footer>
  );
}
