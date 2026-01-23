const CACHE_NAME = 'asmaul-husna-v5'; // Naikkan versi setiap kali ada perubahan file
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Daftarkan URL Google Fonts agar font tetap cantik saat offline
  'https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Inter:wght@400;600&display=swap'
];

// 1. Tahap Install: Simpan aset ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Mengunduh Aset untuk Mode Offline...');
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

// 2. Tahap Aktivasi: Bersihkan cache lama & ambil kendali
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Service Worker: Menghapus Cache Usang...', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  // Memungkinkan Service Worker baru segera mengontrol halaman
  return self.clients.claim();
});

// 3. Tahap Fetch: Strategi Cache-First (Utamakan Offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // Jika file ada di cache, gunakan itu
      if (cachedResponse) {
        return cachedResponse;
      }

      // Jika tidak ada di cache, coba ambil dari jaringan
      return fetch(e.request).then((networkResponse) => {
        // Opsional: Simpan secara otomatis file baru yang diakses (seperti file font dari gstatic)
        if (e.request.url.includes('fonts.gstatic.com')) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // Jika offline total dan file tidak ada di cache (fallback)
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});