/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );
  // This will help to understand how is the workbox performing. it should be placed at the top before any other import happens.
  workbox.setConfig({ debug: true });

  // This is one way to import the strategies to avoid reference error in the further cause.
  const { CacheFirst } = workbox.strategies;

  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");
    self.addEventListener("install", event => {
      self.skipWaiting();
    });

    self.addEventListener("push", event => {
      const title = "Get Started With Workbox";
      const options = {
        body: event.data.text()
      };
      event.waitUntil(self.registration.showNotification(title, options));
    });

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute("/index.html", {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      /* workbox.strategies.cacheFirst({ */
      new CacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
