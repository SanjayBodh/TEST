// service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/',
                'index.html',
                // Add other resources you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    // Clean up old caches if needed
});

self.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt
    event.preventDefault();
});

self.addEventListener('appinstalled', (event) => {
    // Track installation
    console.log('App was installed');
});

// Intercept navigation events
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match('offline.html');
        })
    );
});

self.addEventListener('popstate', (event) => {
    // Prevent going back
    history.pushState(null, null, location.href);
});

self.addEventListener('swipe', (event) => {
    // Prevent swiping gestures
    event.preventDefault();
});
