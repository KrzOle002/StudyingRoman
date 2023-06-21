/* eslint-disable no-restricted-globals */
// Install a service worker
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

// Cache and return requests

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match("/info");
      })
    );
  }
});

// Update a service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
