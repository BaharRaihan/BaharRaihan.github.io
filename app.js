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

  // Filter buttons made from the categories found in a list
  function filterable(filterEl, items, keyFn, draw) {
    const cats = [...new Set(items.map(keyFn).filter(Boolean))];
    let current = "All";
    const render = () => draw(current === "All" ? items : items.filter((x) => keyFn(x) === current));
    if (cats.length > 1) {
      filterEl.innerHTML = ["All", ...cats].map((c) => `<button type="button" class="${c === "All" ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
      filterEl.addEventListener("click", (e) => {
        const b = e.target.closest("button[data-c]");
        if (!b) return;
        current = b.dataset.c;
        filterEl.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
        render();
      });
    } else filterEl.hidden = true;
    render();
  }

  // ---- hero
  $("brandName").textContent = S.brand.appName;
  $("heroEyebrow").textContent = S.brand.subtitle;
  $("heroName").textContent = S.name;
  $("heroRoles").textContent = S.roles;
  $("heroHeadline").textContent = "“" + S.headline + "”";
  $("heroIntro").textContent = S.intro;
  const av = $("avatar");
  if (S.photo) av.style.backgroundImage = `url("${S.photo}")`; else av.textContent = [...S.name][0] || "?";
  const socials = (S.social || []).filter((s) => s.url);
  $("heroSocial").innerHTML = socials.map((s) => `<a class="${ICON.kind(s.label)}" href="${esc(link(s.url))}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${ICON.glyph(ICON.kind(s.label))}</a>`).join("");
  $("cvIco").innerHTML = ICON.glyph("download");

  // ---- media wall
  const media = real(S.media);
  if (media.length) {
    $("media").hidden = false;
    filterable($("mediaFilter"), media, (m) => m.type, (list) => {
      $("mediaBody").innerHTML = list.map((m) => `<article class="mcard"><div class="mtop"><span class="badge ${esc((m.type || "").toLowerCase())}">${esc(m.type)}</span><span class="mout">${esc(m.outlet)}${m.date ? " · " + esc(m.date) : ""}</span></div><h3>${esc(m.title)}</h3>${m.text ? `<p>${esc(m.text)}</p>` : ""}${m.url ? `<a href="${esc(link(m.url))}" target="_blank" rel="noopener">${m.type === "TV" ? "Watch" : "Read"} the story ↗</a>` : ""}${tag(m)}</article>`).join("");
    });
  } else $("heroMedia").hidden = true;

  // ---- story
  $("aboutBody").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("chapters").innerHTML = S.chapters.map((c, i) => {
    const rel = media.filter((m) => m.chapter === c.key);
    return `<article class="chapter c${i + 1} reveal" id="ch-${esc(c.key)}"><div class="cin"><div class="bignum" aria-hidden="true">${i + 1}</div><div class="ctag">Chapter ${i + 1} · ${esc(c.tag)}</div><h3>${esc(c.title)}</h3>${c.pull ? `<p class="pull">“${esc(c.pull)}”</p>` : ""}<div class="ctext">${c.text.map((p) => `<p>${esc(p)}</p>`).join("")}</div>${c.image ? `<figure class="cfig"><img src="${esc(c.image)}" alt="${esc(c.caption || c.title)}" loading="lazy">${c.caption ? `<figcaption>${esc(c.caption)}</figcaption>` : ""}</figure>` : demo ? `<figure class="cfig ph">Photo slot for this chapter (landscape, 1600 x 900). content.js → chapters → image</figure>` : ""}${rel.length ? `<div class="rel">In the news: ${rel.map((m) => m.url ? `<a href="${esc(link(m.url))}" target="_blank" rel="noopener">${esc(m.outlet)}</a>` : esc(m.outlet)).join(" · ")}</div>` : ""}</div></article>`;
  }).join("");

  // ---- ticker of outlets
  const outlets = [...new Set(media.map((m) => m.outlet))];
  if (outlets.length) {
    $("ticker").hidden = false;
    const row = outlets.concat(outlets).concat(outlets).map((o) => `<span>${esc(o)}</span>`).join("");
    $("tickerTrack").innerHTML = `<div class="set">As seen in ★ ${row}</div>`;
  }

  // ---- gentle reveal on scroll (off if the phone asks for less motion)
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));

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

  // ---- videos (click to load: nothing from YouTube loads until you press play)
  const vids = real(S.videos);
  if (vids.length) {
    $("videosSec").hidden = false;
    filterable($("videoFilter"), vids, (v) => v.category, (list) => {
      $("videosBody").innerHTML = list.map((v, i) => {
        if (!v.id) return `<div class="vid placeholder"><div class="thumb"><span>▶</span></div><b>${esc(v.title)}</b><p>${esc(v.text || "")}</p>${tag(v)}</div>`;
        return `<div class="vid${i === 0 ? " first" : ""}"><button class="thumb" data-v="${esc(v.id)}" aria-label="Play: ${esc(v.title)}" style="background-image:url('https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg')"><span>▶</span></button><b>${esc(v.title)}</b><p>${esc(v.text || "")}</p></div>`;
      }).join("");
    });
    $("videosBody").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-v]");
      if (!b) return;
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(b.dataset.v) + "?autoplay=1";
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.title = "Video";
      b.replaceWith(f);
    });
  }

  // ---- gallery
  const pics = real(S.gallery);
  if (pics.length) {
    $("gallerySec").hidden = false;
    const dlg = $("photoDlg");
    filterable($("galleryFilter"), pics, (p) => p.category, (list) => {
      $("galleryBody").innerHTML = list.map((p) => p.src
        ? `<button class="tile" data-s="${esc(p.src)}" data-cap="${esc(p.caption)}" aria-label="${esc(p.caption)}"><img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy"></button>`
        : `<div class="tile ph"><b>${esc(p.category || "")}</b><span>${esc(p.caption)}</span>${tag(p)}</div>`).join("");
    });
    $("galleryBody").addEventListener("click", (e) => {
      const t = e.target.closest("button.tile");
      if (!t) return;
      $("photoImg").src = t.dataset.s; $("photoImg").alt = t.dataset.cap; $("photoCap").textContent = t.dataset.cap;
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

  // ---- updates, contact
  const ups = real(S.updates);
  if (ups.length) {
    $("updatesSec").hidden = false;
    $("feed").innerHTML = ups.map((u) => `<article class="card"><small class="when">${esc(u.date)} <span class="pinico">${ICON.glyph("pin")}</span>${esc(u.place)}</small><p style="margin:4px 0 0">${esc(u.text)}</p>${u.image ? `<img src="${esc(u.image)}" alt="" loading="lazy">` : ""}</article>`).join("");
  }
  const arrow = `<i class="go">${ICON.glyph("arrow")}</i>`;
  $("contactBody").innerHTML =
    `<a class="clink big mail" href="mailto:${esc(S.email)}">${ICON.tile("mail")}<span class="ct"><b>Send me an email</b><small>${esc(S.email)}</small></span>${arrow}</a>` +
    (S.phone ? `<a class="clink big phone" href="tel:${esc(S.phone)}">${ICON.tile("phone")}<span class="ct"><b>Call me</b><small>${esc(S.phone)}</small></span>${arrow}</a>` : "") +
    (socials.length ? `<div class="cgrid">${socials.map((s) => { const k = ICON.kind(s.label); return `<a class="clink ${k}" href="${esc(link(s.url))}" target="_blank" rel="noopener">${ICON.tile(k)}<span class="ct"><b>${esc(s.label.replace(/\s*\(.*\)/, ""))}</b><small>${esc(ICON.hint[k] || "Open")}</small></span></a>`; }).join("")}</div>` : "");

  // ---- nav shows only sections that are visible
  const nav = [["media", "In the news"], ["story", "Story"], ["achSec", "Achievements"], ["videosSec", "Videos"], ["gallerySec", "Moments"], ["work", "Work"], ["contact", "Connect"]];
  $("navLinks").innerHTML = nav.filter(([id]) => !$(id).hidden).map(([id, t]) => `<a href="#${id}">${t}</a>`).join("") + `<a href="cv.html" class="cvlink">CV</a>`;

  // ---- demo only: show which content.js field feeds each section
  if (demo) {
    const where = { media: "media", story: "about + chapters (title, pull, text, image)", achSec: "achievements", videosSec: "videos", gallerySec: "gallery", quotesSec: "quotes", work: "work + works + experience", learn: "education + training + skills", updatesSec: "updates", contact: "email + social" };
    Object.entries(where).forEach(([id, f]) => {
      const h = document.querySelector("#" + id + " h2");
      if (h) h.insertAdjacentHTML("beforeend", `<span class="slot">content.js → ${f}</span>`);
    });
    const hs = [["heroName", "name"], ["heroHeadline", "headline"], ["heroIntro", "intro"], ["heroRoles", "roles"]];
    hs.forEach(([id, f]) => $(id).insertAdjacentHTML("afterend", `<span class="slot" style="display:block;width:max-content;margin:2px auto 0">content.js → ${f}</span>`));
  }

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
    const soc = (S.social || []).filter((s) => s.url).map((s) => `${esc(s.label)}: ${esc(s.url)}`).join(" · ");
    $("cv").innerHTML = `
      <h1>${esc(S.name)}</h1>
      <p class="sub">${esc(S.tagline)}</p>
      <p class="sub">${esc(S.location)} · ${esc(S.email)}${S.phone ? " · " + esc(S.phone) : ""}</p>
      ${soc ? `<p class="sub small">${soc}</p>` : ""}
      <h2>Profile</h2>${S.about.map((p) => `<p>${esc(p)}</p>`).join("")}
      <h2>Current Work</h2><div class="row"><b>${esc(w.title)}, ${esc(w.org)}</b><span>${esc(w.since)}</span></div><p>${esc(w.description)}</p>
      <h2>Experience</h2>${S.experience.map((x) => `<div class="row"><b>${esc(x.title)}, ${esc(x.org)}</b><span>${esc(x.period)}</span></div><p>${esc(x.text)}</p>`).join("")}
      <h2>Education</h2>${S.education.map((e) => `<div class="row"><span><b>${esc(e.title)}</b>${e.place ? " — " + esc(e.place) : ""}${e.note ? " (" + esc(e.note) + ")" : ""}</span><span>${esc(e.year)}</span></div>`).join("")}
      <h2>Training</h2><ul>${S.training.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <h2>Awards</h2><ul>${S.awards.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <h2>Advocacy and Community Work</h2>${S.advocacy.map((a) => `<p><b>${esc(a.title)}:</b> ${esc(a.text)}</p>`).join("")}
      <h2>In the Media</h2><ul>${(S.media || []).filter((m) => !m.sample).map((m) => `<li>${esc(m.outlet)} (${esc(m.type)}), ${esc(m.date)}: ${esc(m.title)}</li>`).join("")}</ul>
      <h2>Skills</h2><p>${S.skills.map(esc).join(" · ")}</p>
      <h2>Languages</h2><p>${S.languages.map(esc).join(" · ")}</p>
      <h2>Life Journey</h2>${S.journey.map((j) => `<p><b>${esc(j.year)} — ${esc(j.title)}:</b> ${esc(j.text)}</p>`).join("")}`;
  }
})();
