const cacheName = 'app-v1';
const assets = [
  'index.html',
  'JS/deine-datei.js', // Passe hier den Namen deiner JS-Datei an
  'Icons/app-icon.png'
];

// Installation: Dateien in den Cache legen
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

// Abruf: Immer erst aus dem Cache versuchen, dann aus dem Netz
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});