self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("geo-mp-cache").then(cache=>{
      return cache.addAll([
        "/",
        "/login.html",
        "/register.html",
        "/main.html",
        "/manifest.json",
        "/icon192.png",
        "/icon512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(resp=>resp || fetch(e.request))
  );
});
