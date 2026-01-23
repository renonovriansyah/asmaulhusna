const CACHE_NAME = 'asmaul-husna-v4'; // Naikkan versi
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Pasang Service Worker dan simpan aset
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Mengunduh Aset...');
      return cache.addAll(assets);
    }).catch(err => console.log('Gagal caching:', err))
  );
  self.skipWaiting();
});

// Bersihkan cache lama
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Respon permintaan (Offline Mode)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Jika ada di cache, pakai cache. Jika tidak, ambil dari jaringan.
      return response || fetch(e.request).catch(() => {
        // Jika internet mati dan file tidak ada di cache (misal font eksternal)
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});