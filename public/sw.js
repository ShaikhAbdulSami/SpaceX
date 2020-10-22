var CACHE_NAME = "watch";
var urlsToCache = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "static/js/0.chunk.js",
  "/manifest.json",
  "SpaceX_logo-192.png",
  "https://spacexdata.herokuapp.com/graphql",
  "https://fonts.gstatic.com/s/robotomono/v12/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2",
  "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap",
  "/"
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('activate', function(event) {

  var cacheAllowlist = [
    "/static/js/bundle.js",
    "/static/js/main.chunk.js",
    "static/js/0.chunk.js",
    "/manifest.json",
    "SpaceX_logo-192.png",
    "https://spacexdata.herokuapp.com/graphql",
    "https://fonts.gstatic.com/s/robotomono/v12/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2",
    "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap",
    "/"
  ];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(CACHE_NAME) {
          if (cacheAllowlist.indexOf(CACHE_NAME) === -1) {
            return caches.delete(CACHE_NAME);
          }
        })
      );
    })
  );
});