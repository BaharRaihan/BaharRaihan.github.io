// Clean self-drawn icons (no external files, so they work offline).
// icon("mail") returns a coloured tile; the colours are in style.css (.ico.facebook etc.).
(function () {
  const svg = (inner) => `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">${inner}</svg>`;
  const line = (w) => `fill="none" stroke="currentColor" stroke-width="${w || 2}" stroke-linecap="round" stroke-linejoin="round"`;
  const G = {
    mail: svg(`<rect x="3" y="5" width="18" height="14" rx="2.5" ${line()}/><path d="M4 7.5l8 6 8-6" ${line()}/>`),
    phone: svg(`<path d="M6 4h3l1.6 4-2 1.3a11 11 0 005.1 5.1l1.3-2 4 1.6v3a2 2 0 01-2.2 2A16 16 0 014 6.2 2 2 0 016 4z" ${line()}/>`),
    pin: svg(`<path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0113 0C18.5 15.4 12 21 12 21z" ${line()}/><circle cx="12" cy="10.5" r="2.3" ${line()}/>`),
    download: svg(`<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19.5h14" ${line()}/>`),
    arrow: svg(`<path d="M5 12h14m0 0l-5-5m5 5l-5 5" ${line()}/>`),
    facebook: svg(`<path d="M13.4 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.4c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5V13h2.7v8z" fill="currentColor"/>`),
    youtube: svg(`<path d="M21.2 8.2a2.6 2.6 0 00-1.8-1.8C17.8 6 12 6 12 6s-5.8 0-7.4.4A2.6 2.6 0 002.8 8.2C2.4 9.8 2.4 12 2.4 12s0 2.2.4 3.8a2.6 2.6 0 001.8 1.8C6.2 18 12 18 12 18s5.8 0 7.4-.4a2.6 2.6 0 001.8-1.8c.4-1.6.4-3.8.4-3.8s0-2.2-.4-3.8z" fill="currentColor"/><path d="M10.2 9.2v5.6l4.8-2.8z" fill="#ff0000"/>`),
    tiktok: svg(`<path d="M14.2 3.5v10.2a3.6 3.6 0 11-3.6-3.6" ${line(2.4)}/><path d="M14.2 3.5c.3 2.5 1.9 4.2 4.6 4.4" ${line(2.4)}/>`),
    linkedin: svg(`<rect x="4.5" y="9.5" width="3" height="10" fill="currentColor"/><circle cx="6" cy="5.8" r="1.9" fill="currentColor"/><path d="M10.5 9.5h2.9v1.4c.6-1 1.7-1.7 3.2-1.7 2.8 0 3.9 1.8 3.9 4.6v5.7h-3v-5c0-1.3-.3-2.3-1.7-2.3s-2.3 1-2.3 2.4v4.9h-3z" fill="currentColor"/>`),
    instagram: svg(`<rect x="3.5" y="3.5" width="17" height="17" rx="5" ${line()}/><circle cx="12" cy="12" r="3.9" ${line()}/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>`)
  };
  window.ICON = {
    glyph: (name) => G[name] || G.mail,
    tile: (name) => `<span class="ico ${name}">${G[name] || G.mail}</span>`,
    kind: (label) => ["facebook", "youtube", "tiktok", "linkedin", "instagram"].find((k) => String(label).toLowerCase().includes(k)) || "mail",
    hint: { facebook: "Follow on Facebook", youtube: "Watch on YouTube", tiktok: "Watch on TikTok", linkedin: "Connect on LinkedIn", instagram: "Follow on Instagram" }
  };
})();
