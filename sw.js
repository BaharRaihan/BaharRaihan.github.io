const CACHE = "mystory-v8";
const FILES = ["index.html", "cv.html", "style.css", "app.js", "content.js", "icon.svg", "icon-192.png", "icon-512.png", "privacy.html", "photo.jpg", "icons.js", "og-image.png", "manifest.webmanifest"];

self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
// নেটওয়ার্ক আগে (নতুন আপডেট দেখাতে), না পেলে ক্যাশ
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request)));
});
