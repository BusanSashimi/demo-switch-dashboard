// eslint-disable-next-line no-undef,no-restricted-globals
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
// eslint-disable-next-line no-restricted-globals
self.addEventListener("message", (msg) => {
  if (msg.data.action =='skipWaiting') {
    self.skipWaiting();
  }
})
