(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const link = (u) => (/^https?:\/\//.test(u) ? u : "#");

  // Sample (placeholder) items show only on your own computer or with ?demo=1
  const demo = ["localhost", "127.0.0.1"].includes(location.hostname) || /[?&]demo=1/.test(location.search);
  const real = (list) => (list || []).filter((x) => demo || !x.sample);
  const tag = (x) => (x.sample ? `<span class="sample">Sample</span>` : "");

  const isCV = document.body.dataset.page === "cv";
  document.title = isCV ? "CV | " + S.name : S.name + " | " + S.brand.appName;

  if ("serviceWorker" in navigator && location.protocol.startsWith("http") && !demo) navigator.serviceWorker.register("sw.js");
  if (isCV) return renderCV();

  if (demo) $("demoBar").hidden = false;

  // ---- hero
  $("brandName").textContent = S.brand.appName;
  $("heroEyebrow").textContent = S.brand.subtitle;
  $("heroName").textContent = S.name;
  $("heroRoles").textContent = S.roles;
  $("heroHeadline").textContent = "“" + S.headline + "”";
  $("heroIntro").textContent = S.intro;
  const av = $("avatar");
  if (S.photo) av.style.backgroundImage = `url("${S.photo}")`; else av.textContent = [...S.name][0] || "?";

  // ---- story
  $("aboutBody").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("timeline").innerHTML = S.journey.map((j) => `<li><span class="y">${esc(j.year)}</span><b>${esc(j.title)}</b><p>${esc(j.text)}</p></li>`).join("");

  // ---- quotes (+ quote of the day)
  const quotes = real(S.quotes);
  if (quotes.length) {
    const day = Math.floor(Date.now() / 86400000);
    const q = quotes[day % quotes.length];
    $("qotd").hidden = false;
    $("qotdText").textContent = "“" + q.text + "”";
    $("qotdSrc").textContent = "— " + (q.source || S.name);
    $("quotesSec").hidden = false;
    $("quotesBody").innerHTML = quotes.map((x) => `<figure class="q"><blockquote>“${esc(x.text)}”</blockquote><cite>— ${esc(x.source || S.name)}${x.date ? ", " + esc(x.date) : ""}</cite>${tag(x)}</figure>`).join("");
  }

  // ---- achievements
  const ach = real(S.achievements);
  if (ach.length) {
    $("achSec").hidden = false;
    $("achBody").innerHTML = ach.map((a) => `<div class="card ach">${a.year ? `<span class="year">${esc(a.year)}</span>` : ""}<b>${esc(a.title)}</b><p>${esc(a.text)}</p>${tag(a)}</div>`).join("");
  }

  // ---- videos (click to load, so nothing from YouTube loads until you press play)
  const vids = real(S.videos);
  if (vids.length) {
    $("videosSec").hidden = false;
    $("videosBody").innerHTML = vids.map((v, i) => {
      if (!v.id) return `<div class="vid placeholder"><div class="thumb"><span>▶</span></div><b>${esc(v.title)}</b><p>${esc(v.text || "")}</p>${tag(v)}</div>`;
      return `<div class="vid${i === 0 ? " first" : ""}"><button class="thumb" data-v="${esc(v.id)}" aria-label="Play: ${esc(v.title)}" style="background-image:url('https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg')"><span>▶</span></button><b>${esc(v.title)}</b><p>${esc(v.text || "")}</p></div>`;
    }).join("");
    $("videosBody").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-v]");
      if (!b) return;
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(b.dataset.v) + "?autoplay=1";
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.title = "Video";
      b.replaceWith(f);
      f.parentElement.classList.add("playing");
    });
  }

  // ---- gallery
  const pics = real(S.gallery);
  if (pics.length) {
    $("gallerySec").hidden = false;
    $("galleryBody").innerHTML = pics.map((p, i) => p.src
      ? `<button class="tile" data-i="${i}" aria-label="${esc(p.caption)}"><img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy"></button>`
      : `<div class="tile ph"><span>${esc(p.caption)}</span>${tag(p)}</div>`).join("");
    const dlg = $("photoDlg");
    $("galleryBody").addEventListener("click", (e) => {
      const t = e.target.closest("button.tile");
      if (!t) return;
      const p = pics[+t.dataset.i];
      $("photoImg").src = p.src; $("photoImg").alt = p.caption; $("photoCap").textContent = p.caption;
      dlg.showModal();
    });
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  }

  // ---- work, experience, education
  const w = S.work;
  $("workBody").innerHTML = `<b>${esc(w.title)}</b>${esc(w.org)}${w.since ? ` · <small>${esc(w.since)}</small>` : ""}<p>${esc(w.description)}</p>`;
  $("worksBody").innerHTML = real(S.works).map((x) => `<div class="card">${x.year ? `<span class="year">${esc(x.year)}</span>` : ""}<b>${esc(x.title)}</b><p>${esc(x.text)}</p>${x.link ? `<a href="${esc(link(x.link))}" target="_blank" rel="noopener">Learn more ↗</a>` : ""}${tag(x)}</div>`).join("");
  $("expBody").innerHTML = S.experience.map((x) => `<div class="card"><b>${esc(x.title)}</b>${esc(x.org)} · <small>${esc(x.period)}</small><p>${esc(x.text)}</p></div>`).join("");
  $("edu").innerHTML = S.education.map((e) => `<div class="card"><b>${esc(e.title)}</b>${esc(e.place)}${e.year ? ` · <small>${esc(e.year)}</small>` : ""}${e.note ? `<br><small>${esc(e.note)}</small>` : ""}</div>`).join("");
  $("trainBody").innerHTML = S.training.map((a) => `<li>${esc(a)}</li>`).join("");
  $("skills").innerHTML = S.skills.map((s) => `<span>${esc(s)}</span>`).join("");

  // ---- news, updates, contact
  if (S.press && S.press.length) {
    $("pressSec").hidden = false;
    $("press").innerHTML = S.press.map((p) => `<a class="card" style="text-decoration:none;color:inherit" href="${esc(link(p.url))}" target="_blank" rel="noopener"><small>${esc(p.source)} · ${esc(p.date)}</small><b>${esc(p.title)} ↗</b></a>`).join("");
  }
  const ups = real(S.updates);
  if (ups.length) {
    $("updatesSec").hidden = false;
    $("feed").innerHTML = ups.map((u) => `<article class="card"><small>${esc(u.date)} · 📍 ${esc(u.place)}</small><p style="margin:4px 0 0">${esc(u.text)}</p>${u.image ? `<img src="${esc(u.image)}" alt="" loading="lazy">` : ""}</article>`).join("");
  }
  $("contactBody").innerHTML =
    `<p>📧 <a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>${S.phone ? `<p>📞 ${esc(S.phone)}</p>` : ""}` +
    `<p>${S.social.map((s) => `<a href="${esc(link(s.url))}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join(" · ")}</p>`;

  // ---- nav shows only sections that are visible
  const nav = [["story", "Story"], ["achSec", "Achievements"], ["quotesSec", "Quotes"], ["videosSec", "Videos"], ["gallerySec", "Moments"], ["work", "Work"], ["contact", "Connect"]];
  $("navLinks").innerHTML = nav.filter(([id]) => !$(id).hidden).map(([id, t]) => `<a href="#${id}">${t}</a>`).join("") + `<a href="cv.html">CV</a>`;

  // ---- footer
  $("disclaimer").textContent = S.disclaimer;
  $("copy").textContent = "© " + new Date().getFullYear() + " " + S.name;

  // ---- support (quiet)
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
