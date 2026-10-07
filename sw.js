// Offline support for to-do-txt. Bump CACHE with every release so installed copies pick up new files.
const CACHE = 'to-do-txt-4.10.0';

const APP_SHELL = [
    './',
    './index.html',
    './manifest.webmanifest',
    './assets/icon-192.png',
    './assets/icon-512.png',
    './assets/apple-touch-icon.png',
    './assets/dropbox.svg',
    './assets/google-drive.svg',
];

// Third-party scripts the page needs to render. Cached so the app still opens offline.
const CDN_ORIGINS = ['https://cdn.tailwindcss.com', 'https://unpkg.com'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

// The page asks for this when the user taps "Update"
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

function storeCopy(request, response) {
    if (response && (response.ok || response.type === 'opaque')) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy));
    }
}

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const isApp = url.origin === self.location.origin;
    const isCdn = CDN_ORIGINS.includes(url.origin);
    // Dropbox, Google APIs and Google sign-in always go to the network
    if (!isApp && !isCdn) return;

    if (request.mode === 'navigate') {
        // Pages: network first so updates arrive, cached copy when offline
        event.respondWith(
            fetch(request)
                .then((response) => { storeCopy(request, response); return response; })
                .catch(() => caches.match(request).then((hit) => hit || caches.match('./index.html')))
        );
        return;
    }

    // Scripts, styles, icons: cache first, then the network
    event.respondWith(
        caches.match(request).then((hit) => hit || fetch(request).then((response) => { storeCopy(request, response); return response; }))
    );
});
