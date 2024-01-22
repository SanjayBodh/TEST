const CACHE_NAME = 'my-cache';

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/',
                'index.html',
                'styles.css',
                'app.js',
                'manifest.json',
                'images/icon.png' // Make sure to include the correct path to your icon
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});