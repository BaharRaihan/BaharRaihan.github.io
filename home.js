(function () {
  const S = window.SITE;
  document.documentElement.classList.add("js");
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const link = (u) => (/^https?:\/\//.test(u) ? u : "#");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Sample (placeholder) items show only on your own computer or with ?demo=1
  const demo = ["localhost", "127.0.0.1"].includes(location.hostname) || /[?&]demo=1/.test(location.search);
  const real = (l) => (l || []).filter((x) => demo || !x.sample);
  document.title = S.name + " | " + S.brand.appName;
  if ("serviceWorker" in navigator && location.protocol.startsWith("http") && !demo) navigator.serviceWorker.register("sw.js");
  if (demo) $("demoBar").hidden = false;

  const media = real(S.media).slice().sort((a, b) => String(b.iso || "").localeCompare(String(a.iso || "")));
  const papers = media.filter((m) => m.type === "Newspaper");
  const screens = media.filter((m) => m.type !== "Newspaper");
  const pal = ["#c1121f", "#0b3c8c", "#006a4e", "#b45309", "#7c3aed", "#0e7490"];
  const names = [...new Set(media.map((m) => m.outlet))];
  const color = (n) => ((S.outlets || {})[n] || {}).color || pal[names.indexOf(n) % pal.length];
  const mins = (s) => Math.floor(+s / 60) + ":" + String(+s % 60).padStart(2, "0");
  const thumb = (id, title, dur) => `<button class="thumb" data-v="${esc(id)}" aria-label="Play: ${esc(title)}" style="background-image:url('https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg')"><span class="pb">▶</span>${dur ? `<em>${mins(dur)}</em>` : ""}</button>`;
  const poster = (m) => `<article class="poster" style="--c:${esc(color(m.outlet))}"><div class="top"><b>${esc(m.outlet)}</b><span>${esc(m.date || "")}</span></div><div class="b"><h4>${esc(m.title)}</h4>${m.video ? thumb(m.video, m.title, m.dur) : ""}${m.url ? `<a class="o" href="${esc(link(m.url))}" target="_blank" rel="noopener">${m.video ? "Open on YouTube ↗" : "Read the story →"}</a>` : ""}</div></article>`;
  const row = (id, secId, t, sub, html, auto) => `<section class="s" id="${secId}"><div class="hd"><div><h2>${t}</h2><p>${sub}</p></div><div class="arrows"><button data-prev aria-label="Previous">←</button><button data-next aria-label="Next">→</button></div></div><div class="inner slider rv" id="${id}" data-auto="${auto || 0}"><div class="track">${html}</div><div class="dots"></div></div></section>`;

  const hasTV = screens.some((m) => m.type === "TV"), hasOnline = screens.some((m) => m.type !== "TV");
  const tvTitle = hasTV && hasOnline ? "On TV and in video news" : hasTV ? "On TV" : "In video news";
  const outlets = [...new Set(media.map((m) => m.outlet))];
  const mq = outlets.concat(outlets).map((o) => `<span>${esc(o)}</span>`).join("");
  const cols = ["#10a37f", "#f42a41", "#3b82f6", "#ffc83d"];
  const quotes = real(S.quotes), others = real(S.others), ach = real(S.achievements), vids = real(S.videos).filter((v) => v.id);
  const pics = real(S.gallery).filter((p) => p.src);
  const socials = (S.social || []).filter((s) => s.url);
  const tvCount = new Set(screens.filter((m) => m.type === "TV").map((m) => m.outlet)).size;
  const heroes = (S.heroImages && S.heroImages.length ? S.heroImages : [S.photo]).filter(Boolean).map((h) => (typeof h === "string" ? { src: h } : h));
  const [first, ...rest] = S.name.split(" ");
  const nameTop = S.name.split(" ").slice(0, 2).join(" "), nameEnd = S.name.split(" ").slice(2).join(" ");
  const w = S.work;
  const plain = (x) => `<div class="card">${x.year ? `<span class="yr">${esc(x.year)}</span>` : ""}<b>${esc(x.title)}</b><p>${esc(x.text)}</p>${x.link ? `<a href="${esc(link(x.link))}" target="_blank" rel="noopener">Learn more ↗</a>` : ""}</div>`;

  $("top").innerHTML = `
<section class="hero">
  <div class="photo" id="heroPhoto">${heroes.map((h, i) => `<div class="slide" style="background-image:url('${esc(h.src)}');${h.pos ? `background-position:${esc(h.pos)}` : ""}"></div>`).join("")}</div>
  <div class="in">
    <div class="tag in-up" style="animation-delay:.1s">${esc(S.brand.subtitle)}</div>
    <h1 class="in-up" style="animation-delay:.25s">${esc(nameTop || first)}${nameEnd ? `<span>${esc(nameEnd)}</span>` : ""}</h1>
    <p class="roles in-up" style="animation-delay:.4s">${esc(S.roles)}</p>
    <p class="lead in-up" style="animation-delay:.5s"><em>“${esc(S.headline)}”</em></p>
    <div class="cta in-up" style="animation-delay:.75s">${papers.length || screens.length ? `<a class="btn" href="#${papers.length ? "news" : "tv"}">▶ Watch the reports</a>` : ""}<a class="btn line" href="#story">My story</a></div>
  </div>
  ${heroes.length > 1 ? `<div class="hdots" id="hdots"></div>` : ""}
  ${outlets.length ? `<div class="mq"><div class="t">${mq}${mq}</div></div>` : ""}
</section>
${papers.length ? row("pp", "news", "In the newspapers", "Newspaper features and articles", papers.map(poster).join("")) : ""}
${screens.length ? row("tt", "tv", tvTitle, "Television channels and online video reports", screens.map(poster).join("")) : ""}
<section class="s story" id="story">
  <div class="intro rv"><div class="tag" style="justify-content:center">The story</div><p style="margin-top:18px">${S.about.map(esc).join(" ")}</p></div>
  <div class="timeline" id="tl"><div class="fill" id="fill"></div>
    ${S.chapters.map((c, i) => {
      const rel = media.filter((m) => m.chapter === c.key), seen = new Set();
      const uniq = rel.filter((m) => !seen.has(m.outlet) && seen.add(m.outlet)).slice(0, 5);
      return `<article class="step ${i % 2 ? "rr" : "rl"}" style="--c:${cols[i % 4]}"><div class="n">${String(i + 1).padStart(2, "0")}</div><small>${esc(c.tag)}</small><h3>${esc(c.title)}</h3>${c.pull ? `<p class="pull">“${esc(c.pull)}”</p>` : ""}${c.text.map((p) => `<p>${esc(p)}</p>`).join("")}${c.image ? `<figure><img src="${esc(c.image)}" alt="${esc(c.caption || c.title)}" loading="lazy">${c.caption ? `<figcaption>${esc(c.caption)}</figcaption>` : ""}</figure>` : ""}${uniq.length ? `<div class="rel">In the news: ${uniq.map((m) => m.url ? `<a href="${esc(link(m.url))}" target="_blank" rel="noopener">${esc(m.outlet)}</a>` : esc(m.outlet)).join(" · ")}</div>` : ""}</article>`;
    }).join("")}
  </div>
</section>
${quotes.length ? `<section class="s q" id="quotes"><div class="inner"><div class="tag c">Words of strength</div><div class="fader" id="qf">${quotes.map((q) => `<div class="item"><blockquote>“${esc(q.text)}”</blockquote><cite>${q.url ? `<a href="${esc(link(q.url))}" target="_blank" rel="noopener">` : ""}${esc(q.source || S.name)}${q.date ? ", " + esc(q.date) : ""}${q.url ? "</a>" : ""}</cite></div>`).join("")}</div><div class="arrows" style="justify-content:center;margin-top:26px"><button id="qp" aria-label="Previous">←</button><button id="qn" aria-label="Next">→</button></div><div class="dots" id="qd" style="margin-top:20px"></div></div></section>` : ""}
${others.length ? `<section class="s" id="colleagues"><div class="tag c">What colleagues say</div><div class="others">${others.map((x, i) => `<figure class="rv" style="transition-delay:${i * 0.1}s"><blockquote>“${esc(x.text)}”</blockquote><cite>${esc(x.source || "")}</cite></figure>`).join("")}</div></section>` : ""}
<section class="s" id="proof"><div class="counters rv"><div><b data-count="${media.length}">0</b><span>Media reports</span></div><div><b data-count="${tvCount}">0</b><span>TV channels</span></div><div><b data-count="${(S.awards || []).length}">0</b><span>Awards and honours</span></div><div><b data-count="${new Date().getFullYear() - 2004}">0</b><span>Years since 2004</span></div></div>
  ${ach.length ? `<div class="achs">${ach.map((a, i) => `<div class="ach rv" style="transition-delay:${i * 0.08}s"><i>${esc(a.year || "")}</i><h4>${esc(a.title)}</h4><p>${esc(a.text)}</p></div>`).join("")}</div>` : ""}</section>
${vids.length ? row("vv", "videos", "Videos", "Watch and listen", vids.map((v) => `<article class="poster" style="--c:#3b82f6"><div class="top"><b>${esc(v.category || "Video")}</b></div><div class="b">${thumb(v.id, v.title)}<h4>${esc(v.title)}</h4>${v.text ? `<p class="t">${esc(v.text)}</p>` : ""}</div></article>`).join("")) : ""}
${pics.length ? row("gg", "moments", "Moments", "Photos from the journey", pics.map((p) => `<figure class="shot" data-src="${esc(p.src)}" data-cap="${esc(p.caption || "")}"><img loading="lazy" src="${esc(p.thumb || p.src)}" alt="${esc(p.caption || "")}"></figure>`).join(""), 4200) : ""}
<section class="s" id="work"><div class="hd"><div><h2>Work and service</h2></div></div>
  <div class="cards"><div class="card"><b>${esc(w.title)}</b>${esc(w.org)}${w.since ? ` · <small>${esc(w.since)}</small>` : ""}<p>${esc(w.description)}</p></div></div>
  <div class="cards">${real(S.works).map(plain).join("")}</div>
  <h3 class="sub">Experience</h3><div class="cards">${S.experience.map((x) => `<div class="card"><b>${esc(x.title)}</b>${esc(x.org)} · <small>${esc(x.period)}</small><p>${esc(x.text)}</p></div>`).join("")}</div>
</section>
<section class="s" id="learn"><div class="hd"><div><h2>Education and training</h2></div></div>
  <div class="cards">${S.education.map((e) => `<div class="card"><b>${esc(e.title)}</b>${esc(e.place)}${e.year ? ` · <small>${esc(e.year)}</small>` : ""}${e.note ? `<br><small>${esc(e.note)}</small>` : ""}</div>`).join("")}</div>
  <ul class="plain">${S.training.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
  <div class="chips">${S.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
</section>
<section class="s cn" id="connect"><h2 class="rv">Let's build what is possible.</h2><div class="links rv"><a href="mailto:${esc(S.email)}">${ICON.glyph("mail")}${esc(S.email)}</a>${socials.map((s) => `<a href="${esc(link(s.url))}" target="_blank" rel="noopener">${ICON.glyph(ICON.kind(s.label))}${esc(s.label.replace(/\s*\(.*\)/, ""))}</a>`).join("")}<a href="cv.html" style="background:var(--red);border-color:var(--red)">${ICON.glyph("download")}Professional CV</a></div><p class="fine">${esc(S.disclaimer)}</p></section>`;

  // ---- nav
  const navItems = [["news", "Newspapers"], ["tv", "TV"], ["story", "Story"], ["quotes", "Quotes"], ["proof", "Achievements"], ["videos", "Videos"], ["moments", "Moments"], ["work", "Work"], ["connect", "Connect"]];
  $("menu").innerHTML = navItems.filter(([id]) => $(id)).map(([id, t]) => `<a href="#${id}">${t}</a>`).join("");
  const navEl = $("nav"), burger = $("burger");
  burger.onclick = () => { const o = navEl.classList.toggle("open"); burger.setAttribute("aria-expanded", o); burger.textContent = o ? "✕" : "☰"; };
  $("menu").onclick = () => { navEl.classList.remove("open"); burger.textContent = "☰"; };

  // ---- hero: pictures fade one after another
  const slides = [...document.querySelectorAll("#heroPhoto .slide")], hd = $("hdots");
  let hi = 0, ht;
  const showHero = (n) => {
    hi = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.classList.toggle("on", k === hi); });
    if (hd) [...hd.children].forEach((d, k) => d.classList.toggle("on", k === hi));
  };
  const restartHero = () => { clearInterval(ht); if (slides.length > 1 && !reduce) ht = setInterval(() => { if (!document.hidden) showHero(hi + 1); }, 6500); };
  if (hd) { hd.innerHTML = slides.map((_, k) => `<button aria-label="Picture ${k + 1}"></button>`).join(""); hd.onclick = (e) => { const k = [...hd.children].indexOf(e.target.closest("button")); if (k >= 0) { showHero(k); restartHero(); } }; }
  showHero(0); restartHero();

  // ---- reveal, counters
  const reveal = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } }), { threshold: 0.05 });
  document.querySelectorAll(".rv,.rl,.rr").forEach((e) => reveal.observe(e));
  const cnt = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.count, t0 = performance.now();
    cnt.unobserve(el);
    if (reduce) { el.textContent = to; return; }
    const tick = (t) => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach((e) => cnt.observe(e));

  // ---- sliding rows
  document.querySelectorAll(".slider").forEach((root) => {
    const track = root.querySelector(".track"), kids = () => [...track.children];
    const step = () => { const k = kids()[0]; return k ? k.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 16) : track.clientWidth; };
    const go = (d) => {
      const max = track.scrollWidth - track.clientWidth - 4;
      if (d > 0 && track.scrollLeft >= max) track.scrollTo({ left: 0, behavior: "smooth" });
      else if (d < 0 && track.scrollLeft <= 4) track.scrollTo({ left: max, behavior: "smooth" });
      else track.scrollBy({ left: d * step(), behavior: "smooth" });
    };
    const arrows = root.parentElement.querySelector(".arrows");
    arrows.querySelector("[data-prev]").onclick = () => go(-1);
    arrows.querySelector("[data-next]").onclick = () => go(1);
    const dots = root.querySelector(".dots");
    dots.innerHTML = kids().map((_, i) => `<button type="button" aria-label="Slide ${i + 1}"></button>`).join("");
    dots.onclick = (e) => { const i = [...dots.children].indexOf(e.target.closest("button")); if (i >= 0) track.scrollTo({ left: i * step(), behavior: "smooth" }); };
    const upd = () => { const i = Math.round(track.scrollLeft / step()); [...dots.children].forEach((d, k) => d.classList.toggle("on", k === i)); };
    track.addEventListener("scroll", () => requestAnimationFrame(upd)); upd();
    const ms = +root.dataset.auto;
    if (ms && !reduce) {
      let paused = false;
      ["mouseenter", "focusin", "pointerdown", "touchstart"].forEach((ev) => root.addEventListener(ev, () => (paused = true)));
      ["mouseleave", "focusout"].forEach((ev) => root.addEventListener(ev, () => (paused = false)));
      setInterval(() => { if (!paused && !document.hidden) go(1); }, ms);
    }
  });

  // ---- quotes cross-fade
  if (quotes.length) {
    const items = [...document.querySelectorAll("#qf .item")], qd = $("qd");
    let qi = 0, qt;
    qd.innerHTML = items.map((_, k) => `<button aria-label="Quote ${k + 1}"></button>`).join("");
    const showQ = (n) => { qi = (n + items.length) % items.length; items.forEach((el, k) => el.classList.toggle("on", k === qi)); [...qd.children].forEach((d, k) => d.classList.toggle("on", k === qi)); };
    const restartQ = () => { clearInterval(qt); if (!reduce) qt = setInterval(() => showQ(qi + 1), 7000); };
    qd.onclick = (e) => { const k = [...qd.children].indexOf(e.target.closest("button")); if (k >= 0) { showQ(k); restartQ(); } };
    $("qp").onclick = () => { showQ(qi - 1); restartQ(); };
    $("qn").onclick = () => { showQ(qi + 1); restartQ(); };
    showQ(0); restartQ();
  }

  // ---- click-to-play videos (nothing loads from YouTube until pressed)
  document.body.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-v]");
    if (!b) return;
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(b.dataset.v) + "?autoplay=1";
    f.allow = "autoplay; encrypted-media; picture-in-picture"; f.allowFullscreen = true; f.title = "Video"; f.className = "frame";
    b.replaceWith(f);
  });

  // ---- photo lightbox
  if (pics.length) {
    const dlg = document.createElement("dialog");
    dlg.className = "lb";
    dlg.innerHTML = `<form method="dialog"><button class="x" aria-label="Close">✕</button></form><img alt=""><p></p>`;
    document.body.appendChild(dlg);
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    $("gg").addEventListener("click", (e) => { const f = e.target.closest("figure"); if (!f) return; dlg.querySelector("img").src = f.dataset.src; dlg.querySelector("img").alt = f.dataset.cap; dlg.querySelector("p").textContent = f.dataset.cap; dlg.showModal(); });
  }

  // ---- progress bar, sticky nav, timeline fill
  const pbar = $("pbar"), tl = $("tl"), fill = $("fill");
  const onScroll = () => {
    const h = document.documentElement;
    pbar.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";
    navEl.classList.toggle("solid", h.scrollTop > 40);
    const r = tl.getBoundingClientRect();
    fill.style.height = Math.max(0, Math.min(r.height, innerHeight * 0.6 - r.top)) + "px";
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // ---- footer + support (quiet)
  $("copy").textContent = "© " + new Date().getFullYear() + " " + S.name;
  if (S.support && S.support.enabled) {
    const btn = $("supportLink"), dlg = $("supportDlg");
    btn.hidden = false;
    $("supportMsg").textContent = S.support.message;
    $("supportList").innerHTML = S.support.methods.map((m) => {
      const isUrl = /^https?:\/\//.test(m.value);
      const badge = `<span class="pay" style="background:${esc(m.color || "#0f766e")}">${esc(m.icon || m.name[0])}</span>`;
      const body = !m.value ? `<span style="color:var(--mut)">Details coming soon</span>` : isUrl ? `<a href="${esc(m.value)}" target="_blank" rel="noopener">${esc(m.value)}</a>` : `${esc(m.value)}<button data-c="${esc(m.value)}">Copy</button>`;
      return `<li>${badge}<div><b>${esc(m.name)}</b>${body}</div></li>`;
    }).join("");
    btn.onclick = () => dlg.showModal();
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
      const c = e.target.dataset && e.target.dataset.c;
      if (c && navigator.clipboard) navigator.clipboard.writeText(c).then(() => (e.target.textContent = "Copied ✓"));
    });
  }
})();
