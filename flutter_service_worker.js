'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "caf15b4d12c8ecabaee1c391d2ecc7bd",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/bg1.jpg": "f1d6c0b5d58f977888c2c636470f4146",
"assets/assets/images/bg2.jpg": "a18e68905233475a80c48a116071463d",
"assets/assets/images/bg3.jpg": "0ed5fa33d3f4ec48ab0aa3d58de3537f",
"assets/assets/images/bg4.jpg": "bcbb524acec1b0a9b056216213af87d0",
"assets/assets/images/bg5.jpg": "4c81b3e1c3e59a5a07c333df159d6271",
"assets/assets/images/bg6.jpg": "e5f1e0d076d38cf3c2b356f891f2b09f",
"assets/assets/images/bg7.jpg": "8b43c77b3885bb54bc9cabdffa83e6ff",
"assets/assets/images/bg8.jpg": "de3e579f107007fb4b173fed0c3804b0",
"assets/assets/images/logo.png": "1c0e915fee34072aab40de19f1c2ade0",
"assets/assets/images/person1.png": "ceb01c5cba70f1b04ff7420a19a63e17",
"assets/assets/images/person10.png": "64d031e1fa300eed9b0f490eaccfa388",
"assets/assets/images/person2.png": "695a3f8a450cde4170a5963bd068888f",
"assets/assets/images/person3.png": "c4fbc75b57fd1368aaf65c86fbeda960",
"assets/assets/images/person4.png": "a95acbd16d7b64a14addca6b3e5ebd3b",
"assets/assets/images/person5.png": "297e2ac6f73760292f1345b1d4d25c44",
"assets/assets/images/person6.png": "fcebee9ff76af817f4c0c8ae0fc72647",
"assets/assets/images/person7.png": "d79748c3af94afaf1aa96b558132c3f4",
"assets/assets/images/person8.png": "da24d9e3195c283a4fa72114c55b83a8",
"assets/assets/images/person9.png": "f350b085a31d940442db87a02832e013",
"assets/assets/images/profile-female.png": "5bb4b0352b80dce7cb565c21edeb9fb6",
"assets/assets/images/profile-male.png": "61445f553d33027a8abcdf1b8efee711",
"assets/assets/images/profile.png": "2dfcfd53242fa0d40fcf7ed9281ce601",
"assets/assets/images/profilesq.png": "b983436bbd2631b72052737029f01493",
"assets/assets/images/profile_pic.png": "a62a9aa411952df49df6d866da69c36e",
"assets/assets/images/wallpaper.png": "7c7d179c72cafe1592c9c890847f9ed6",
"assets/FontManifest.json": "ff06a204d3156da39cd83146965708e8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bd59729b41104bbe0ff490e93dc4a71b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"cors.json": "72a0a758a5a9fee3897ea1d62a003055",
"favicon%20copy.png": "ae46d194f4e00976618328f980a17b05",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "13ce657b55b0148ba5e5ad6670c952e3",
"icons/Icon-512.png": "7a838ef0dce0d80937a5e4f81b5bd734",
"icons/Icon-maskable-192.png": "13ce657b55b0148ba5e5ad6670c952e3",
"icons/Icon-maskable-512.png": "7a838ef0dce0d80937a5e4f81b5bd734",
"index.html": "4f0f441d3997655d0110e9a0844a8f1b",
"/": "4f0f441d3997655d0110e9a0844a8f1b",
"main.dart.js": "fce3b164a904506b6a990acea941e3db",
"manifest.json": "2f161b26591862b4ed82eb2c20cafba9",
"version.json": "38e403a16aac45e31db01dca33790ee8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
