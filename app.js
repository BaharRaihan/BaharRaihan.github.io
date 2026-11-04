(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const link = (u) => (/^https?:\/\//.test(u) ? u : "#");

  const isCV = document.body.dataset.page === "cv";
  document.title = isCV ? "CV — " + S.name : S.name + " — My Story";

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js");
  if (isCV) return renderCV();

  $("brandName").textContent = S.name;
  $("heroName").textContent = S.name;
  $("heroTagline").textContent = S.tagline;
  $("heroLoc").textContent = "📍 " + S.location;
  const av = $("avatar");
  if (S.photo) av.style.backgroundImage = `url("${S.photo}")`; else av.textContent = [...S.name][0] || "?";

  if (S.videoId) { $("videoSec").hidden = false; $("video").src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(S.videoId); }

  $("aboutBody").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("skills").innerHTML = S.skills.map((s) => `<span>${esc(s)}</span>`).join("");

  $("edu").innerHTML = S.education.map((e) => `<div class="card"><b>${esc(e.title)}</b>${esc(e.place)}${e.year ? ` · <small>${esc(e.year)}</small>` : ""}${e.note ? `<br><small>${esc(e.note)}</small>` : ""}</div>`).join("");
  $("timeline").innerHTML = S.journey.map((j) => `<li><span class="y">${esc(j.year)}</span> — <b style="display:inline">${esc(j.title)}</b><p style="margin:2px 0 0">${esc(j.text)}</p></li>`).join("");

  const w = S.work;
  $("workBody").innerHTML = `<b>${esc(w.title)}</b>${esc(w.org)}${w.since ? ` · <small>${esc(w.since)}</small>` : ""}<p>${esc(w.description)}</p>`;

  $("expBody").innerHTML = S.experience.map((x) => `<div class="card"><b>${esc(x.title)}</b>${esc(x.org)} · <small>${esc(x.period)}</small><p style="margin:6px 0 0">${esc(x.text)}</p></div>`).join("");
  $("advBody").innerHTML = S.advocacy.map((a) => `<div class="card"><b>${esc(a.title)}</b><p style="margin:4px 0 0">${esc(a.text)}</p></div>`).join("");
  $("awardsBody").innerHTML = S.awards.map((a) => `<li>${esc(a)}</li>`).join("");
  $("trainBody").innerHTML = S.training.map((a) => `<li>${esc(a)}</li>`).join("");

  if (S.press && S.press.length) {
    $("pressSec").hidden = false;
    $("press").innerHTML = S.press.map((p) => `<a class="card" style="text-decoration:none;color:inherit" href="${esc(link(p.url))}" target="_blank" rel="noopener"><small>${esc(p.source)} · ${esc(p.date)}</small><b>${esc(p.title)} ↗</b></a>`).join("");
  }

  $("feed").innerHTML = S.updates.map((u) => `<article class="card"><small>${esc(u.date)} · 📍 ${esc(u.place)}</small><p style="margin:4px 0 0">${esc(u.text)}</p>${u.image ? `<img src="${esc(u.image)}" alt="" loading="lazy">` : ""}</article>`).join("");

  $("contactBody").innerHTML =
    `<p>📧 <a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>${S.phone ? `<p>📞 ${esc(S.phone)}</p>` : ""}` +
    `<p>${S.social.map((s) => `<a href="${esc(link(s.url))}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join(" · ")}</p>`;

  $("copy").textContent = "© " + new Date().getFullYear() + " " + S.name;

  if (S.support && S.support.enabled) {
    const btn = $("supportLink"), dlg = $("supportDlg");
    btn.hidden = false;
    $("supportMsg").textContent = S.support.message;
    $("supportList").innerHTML = S.support.methods.map((m) => {
      const isUrl = /^https?:\/\//.test(m.value);
      const badge = `<span class="pay" style="background:${esc(m.color || "#0f766e")}">${esc(m.icon || m.name[0])}</span>`;
      const body = !m.value ? `<span class="soon">Details coming soon</span>`
        : isUrl ? `<a href="${esc(m.value)}" target="_blank" rel="noopener">${esc(m.value)}</a>`
        : `${esc(m.value)}<button data-c="${esc(m.value)}">Copy</button>`;
      return `<li>${badge}<div><b>${esc(m.name)}</b>${body}</div></li>`;
    }).join("");
    btn.onclick = () => dlg.showModal();
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
      const c = e.target.dataset && e.target.dataset.c;
      if (c && navigator.clipboard) navigator.clipboard.writeText(c).then(() => (e.target.textContent = "Copied ✓"));
    });
  }

  function renderCV() {
    const w = S.work;
    $("cv").innerHTML = `
      <h1>${esc(S.name)}</h1>
      <p class="sub">${esc(S.tagline)}</p>
      <p class="sub">📍 ${esc(S.location)} · 📧 ${esc(S.email)}${S.phone ? " · 📞 " + esc(S.phone) : ""}</p>
      <h2>Profile</h2>${S.about.map((p) => `<p>${esc(p)}</p>`).join("")}
      <h2>Current Work</h2><div class="row"><b>${esc(w.title)}, ${esc(w.org)}</b><span>${esc(w.since)}</span></div><p>${esc(w.description)}</p>
      <h2>Experience</h2>${S.experience.map((x) => `<div class="row"><b>${esc(x.title)}, ${esc(x.org)}</b><span>${esc(x.period)}</span></div><p>${esc(x.text)}</p>`).join("")}
      <h2>Education</h2>${S.education.map((e) => `<div class="row"><span><b>${esc(e.title)}</b>${e.place ? " — " + esc(e.place) : ""}${e.note ? " (" + esc(e.note) + ")" : ""}</span><span>${esc(e.year)}</span></div>`).join("")}
      <h2>Training</h2><ul>${S.training.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <h2>Awards</h2><ul>${S.awards.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <h2>Advocacy and Community Work</h2>${S.advocacy.map((a) => `<p><b>${esc(a.title)}:</b> ${esc(a.text)}</p>`).join("")}
      <h2>Skills</h2><p>${S.skills.map(esc).join(" · ")}</p>
      <h2>Languages</h2><p>${S.languages.map(esc).join(" · ")}</p>
      <h2>Life Journey</h2>${S.journey.map((j) => `<p><b>${esc(j.year)} — ${esc(j.title)}:</b> ${esc(j.text)}</p>`).join("")}`;
  }
})();
