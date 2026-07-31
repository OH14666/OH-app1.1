// 每次更新代码时，修改此版本号，已安装的 PWA 会自动检测并刷新
const CACHE_VERSION = 'v2.3.0';
const CACHE_NAME = `creation-center-${CACHE_VERSION}`;

// 需要预缓存的核心静态资源
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-72x72.png',
  './icon-96x96.png',
  './icon-128x128.png',
  './icon-144x144.png',
  './icon-152x152.png',
  './icon-192x192.png',
  './icon-384x384.png',
  './icon-512x512.png',
  './apple-touch-icon.png',
  './favicon-32x32.png',
  './avatar.png',
  './girl_sweet.jpg',
  './girl_mature.jpg',
  './girl_energetic.jpg',
  './girl_artistic.jpg',
  './boy_sunny.jpg',
  './boy_cool.jpg',
  './boy_scholar.jpg',
  './boy_athletic.jpg'
];

// 安装阶段：缓存核心资源并立即接管
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.error('[SW] Pre-cache failed:', err))
  );
});

// 激活阶段：清理旧缓存并控制所有客户端
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// 拦截请求：优先缓存，回退网络
self.addEventListener('fetch', event => {
  const { request } = event;

  // 仅处理 GET 请求
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        // 返回缓存的同时，后台尝试更新缓存
        fetch(request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.ok) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(request, networkResponse.clone());
              });
            }
          })
          .catch(() => {});
        return cached;
      }

      return fetch(request)
        .then(networkResponse => {
          if (!networkResponse || !networkResponse.ok) {
            return networkResponse;
          }
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // 离线且未缓存时，返回离线提示
          if (request.destination === 'document') {
            return new Response(
              '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>离线中</title></head>' +
              '<body style="display:flex;justify-content:center;align-items:center;height:100vh;' +
              'margin:0;font-family:sans-serif;background:#FFF5F7;color:#5D3A4A;">' +
              '<div style="text-align:center;"><h1>暂时离线</h1><p>请检查网络后重试。</p></div></body></html>',
              { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
            );
          }
        });
    })
  );
});

// 接收页面消息，立即跳过等待
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
