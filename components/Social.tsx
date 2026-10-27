import React from "react";
import { site } from "../data";

type Props = {
  size?: number;
};

export default function Social({ size }: Props) {
  const links = [
    { href: site.links.email, icon: "fa-solid fa-envelope", label: "Correo" },
    { href: site.links.github, icon: "fa-brands fa-github", label: "GitHub" },
    { href: site.links.linkedin, icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
    { href: site.links.youtube, icon: "fa-brands fa-youtube", label: "YouTube" },
    { href: site.links.orcid, icon: "fa-brands fa-orcid", label: "ORCID" },
    { href: site.links.spotify, icon: "fa-brands fa-spotify", label: "Spotify" },
    { href: site.links.telegram, icon: "fa-brands fa-telegram", label: "Telegram" },
    { href: site.links.tiktok, icon: "fa-brands fa-tiktok", label: "TikTok" },
    { href: site.links.instagram, icon: "fa-brands fa-instagram", label: "Instagram" },
  ];

  return (
    <div className="social-row" style={size ? { fontSize: size } : undefined}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={l.label}
          title={l.label}
        >
          <i className={l.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
