self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  // 네트워크 호출을 그대로 바이패스하여 캐싱 충돌을 선제 방지
  e.respondWith(fetch(e.request));
});
