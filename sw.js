const CACHE_NAME = 'asmaul-husna-v3'; // Versi dinaikkan ke v2 karena ada aset baru (ikon)
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png', // Menambahkan ikon ke cache
  './icon-512.png'  // Menambahkan ikon ke cache
];

// Tahap Instalasi: Menyimpan aset ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// Tahap Aktivasi: Menghapus cache lama agar aplikasi selalu segar
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
});

// Strategi Fetch: Ambil dari cache dulu, jika tidak ada baru ambil dari internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});