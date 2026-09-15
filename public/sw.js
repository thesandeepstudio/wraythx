const CACHE = "wraythx-v1";
const OFFLINE_URLS = ["./", "./work", "./about", "./services"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(OFFLINE_URLS))
      .catch(() => undefined),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(
      (hit) =>
        hit ||
        fetch(event.request)
          .then((response) => {
            const copy = response.clone();
            caches
              .open(CACHE)
              .then((cache) => cache.put(event.request, copy));
            return response;
          })
          .catch(() => caches.match("./")),
    ),
  );
});
