'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "79f6f78af13fb2fab68f055bddc0f7e4",
"flutter_bootstrap.js": "a4331540e0cdc6d74b9cffecbc61e71b",
"icons/Icon-192.png": "e22880caeda4817ee47b4ac105fedc8b",
"icons/Icon-512.png": "f941e25e98e2c8a8600d790815d4effd",
"icons/Icon-maskable-512.png": "f941e25e98e2c8a8600d790815d4effd",
"icons/apple-touch-icon.png": "0c852fc33523a5b67e2a5e2b5605bd92",
"icons/Icon-maskable-192.png": "e22880caeda4817ee47b4ac105fedc8b",
"index.html": "90f9315308ebde790452e054f1b0e589",
"/": "90f9315308ebde790452e054f1b0e589",
"main.dart.js": "12bbabc8f01b59c072e5f2d4f48ca17a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"version.json": "1ba74e8f1021fb8f63b21ae6d52067f3",
"manifest.json": "b4780c526ffd9213e234a3d91cf12b40",
"assets/AssetManifest.bin.json": "16555ccaa4af2d2e1aaa852efc51c98c",
"assets/AssetManifest.bin": "a97265df032331b0a59c0aa7c533a35e",
"assets/NOTICES": "950d5071688558a1188695c93e95eeb2",
"assets/AssetManifest.json": "a8f7906f9cf84a8a65cdfe442e2c4c3d",
"assets/fonts/MaterialIcons-Regular.otf": "7d7db28ec3e116f052ee8f6382a219b9",
"assets/FontManifest.json": "5e27d8b57287e12b895d21f275d7de5a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/himnario.json": "5ced8b7f54d7f83007f789087d2d1d60",
"assets/assets/audio/san_mateo_26_43.opus": "a9c2ff36b7e717f8bed91d9328d68e53",
"assets/assets/audio/proverbios_20_11.opus": "cd0654c5c82c5af0aaa82f1d011a2109",
"assets/assets/audio/1_corintios_15_3_4.opus": "def9fe0d22bc6acf05334bc7cb24347d",
"assets/assets/audio/eclesiastes_11_8.opus": "4a4c3c5ce95f2b6f24c7d718a3736b43",
"assets/assets/audio/san_mateo_13_25.opus": "aaad0d9a2e7530da95733585a93000de",
"assets/assets/audio/filipenses_1_10.opus": "9509ffb598fe323ad74103a0e2e25443",
"assets/assets/audio/romanos_8_17.opus": "c674aa4951ed5906210643f1fec23710",
"assets/assets/audio/esdras_7_10.opus": "37eadedc1df382089e3b0cf5eee53d87",
"assets/assets/audio/1_pedro_2_20.opus": "cf07a0ed843510d6cf6a5f280372a7ab",
"assets/assets/audio/2_timoteo_2_15.opus": "d486f3dc3a6f30e58a7d545be5d7922e",
"assets/assets/audio/2_timoteo_2_2.opus": "e3ad555464aeb4e2a43bd75dc5338eaa",
"assets/assets/audio/romanos_12_15.opus": "9b0d11cefa1c197b2e35eac0654fdd07",
"assets/assets/audio/1_tesalonicenses_5_23.opus": "d1d6fb47def62e0a9588ae3dd566bfac",
"assets/assets/audio/tito_2_1.opus": "3cd2ac53f67fe54fbfcb0fcd0c326202",
"assets/assets/audio/1_corintios_3_14.opus": "cb819363de08f9bfe2d0495cdf39b545",
"assets/assets/audio/1_cronicas_28_20.opus": "b23e092b0ac54d72e051a144bb498d73",
"assets/assets/audio/1_timoteo_3_16.opus": "6d65ff76b9c2cf68baf3c8870725044d",
"assets/assets/audio/josue_1_8.opus": "afc24a129c772e39957be71a4ee0196e",
"assets/assets/audio/colosenses_3_20.opus": "7a9591ed392d63b6e0229341dfd869dd",
"assets/assets/audio/1_timoteo_4_12.opus": "6f5fb8b5ddad9c62038bb65a2249d2d7",
"assets/assets/audio/salmos_119_9.opus": "c3522cf09fca80d49e604c4f48075d8e",
"assets/assets/audio/efesios_2_20_21.opus": "b77e99b2e3e1ede19b7ebe92c0ff7cd0",
"assets/assets/audio/1_corintios_16_13.opus": "5a5700b93548d04c4f8740b2aa222dc0",
"assets/assets/audio/colosenses_3_2.opus": "d59d55db6567128b111782dd05e0cc3d",
"assets/assets/audio/1_timoteo_4_7.opus": "6de11a8db9411e57fa7c8f8492cb713a",
"assets/assets/audio/2_timoteo_4_2.opus": "369989ff13207915cbcc388ce1ee24c4",
"assets/assets/audio/2_timoteo_3_12.opus": "ba0ed33a2ba7ad102d733004e688784b",
"assets/assets/audio/filipenses_3_14.opus": "c5e2b135e2e5a3cc9f8f444285ec6170",
"assets/assets/audio/1_corintios_15_58.opus": "68b740ca9ea006cade01499e4dc3e91d",
"assets/assets/audio/efesios_6_1.opus": "aa5fb088b7f456b788a86a6935b73660",
"assets/assets/audio/1_corintios_13_13.opus": "1e66c181394583038a64450e0c7f9749",
"assets/assets/audio/1_corintios_10_11.opus": "00f9bcca5cf09944e3ba133482745409",
"assets/assets/audio/2_timoteo_4_5.opus": "575c47688a9d9d240eb3b8ccf6dad476",
"assets/assets/audio/colosenses_2_6.opus": "82aed12e0b60a78f9eb295b0a4ea0054",
"assets/assets/audio/proverbios_1_7.opus": "4ddcdd0d95ef9fe46fbff5c1cd7bc75d",
"assets/assets/audio/filipenses_4_4.opus": "bc8754ded50e68540661484664322a46",
"assets/assets/audio/marcos_13_33.opus": "18de28db691be1899c442b5a21de5634",
"assets/assets/audio/1_tesalonicenses_5_6.opus": "3e90288fac390098eb46085edf624f6f",
"assets/assets/audio/proverbios_10_5.opus": "4c8cad1cad5c6db0f169bfa8ccb32aa9",
"assets/assets/audio/salmos_112_7.opus": "5034905e6b93fa3c33686bb2b954b175",
"assets/assets/audio/proverbios_4_18.opus": "0cfccd9e8b901fb1bdb754576b9bb966",
"assets/assets/audio/galatas_6_2.opus": "5b2abcada05a04742a8da045d86613b2",
"assets/assets/audio/deuteronomio_6_5.opus": "8d1b30884ac32914b8c25b91dbbd42f8",
"assets/assets/audio/efesios_5_14.opus": "4fbd85822a2d79ef4d9c2924860f0ab8",
"assets/assets/audio/efesios_2_8_9.opus": "9d7c22ab6b326d661eca472c263ec88b",
"assets/assets/audio/filipenses_1_27.opus": "58c074584945daa117241467bd7b70a3",
"assets/assets/audio/hebreos_4_12.opus": "3e32139e18f04a41c653ef55d3e5304a",
"assets/assets/audio/romanos_3_23.opus": "ba48b73311a42b84d937e477ac6e5e44",
"assets/assets/audio/salmos_37_4.opus": "dcb675df6fc1e82eeb9e7d527a3e4bb8",
"assets/assets/audio/nehemias_4_18.opus": "3193db0c8a4c570b5d96e1a1025c0727",
"assets/assets/audio/hebreos_11_33.opus": "04ac6aae9884de67a4cc881b713cfec8",
"assets/assets/audio/2_corintios_4_3_4.opus": "9fbf8594610a86b20c34e2a58e05d57b",
"assets/assets/audio/1_cronicas_16_10.opus": "6909a69d51dc2f9a0fa9861a7f4106ca",
"assets/assets/audio/salmos_126_6.opus": "1cf8d20637e6177e1b65929dbf8bd7e7",
"assets/assets/audio/efesios_4_12.opus": "f6a044cbd11d0a8cb8c666e80f8d4415",
"assets/assets/audio/2_corintios_10_4_5.opus": "b1798146b5b4813a8b0130ea638cb110",
"assets/assets/audio/2_corintios_5_21.opus": "d780cfe056f490d2821d81fdf4edbcf9",
"assets/assets/audio/romanos_8_38_39.opus": "9e5b6e2c10ccd07d09a14dbb675e57c1",
"assets/assets/audio/romanos_5_8.opus": "25989db745e8dc56d646a66354623156",
"assets/assets/audio/2_corintios_9_7.opus": "b803197d5ed8f8d951ffde833629463f",
"assets/assets/audio/colosenses_3_16.opus": "b61d1a8d74c617a750f7043ac3388251",
"assets/assets/audio/nahum_2_1.opus": "60c3bced20dad9edd2a3c5602424c44b",
"assets/assets/audio/san_lucas_2_10_11.opus": "a935bc827130e850931a5d6546012f8a",
"assets/assets/audio/san_lucas_21_34.opus": "a9b8606f89e2f2d0bd43fdecbea1c97e",
"assets/assets/audio/josue_1_9.opus": "703df31ed72e2131b932ac2af7b9e88a",
"assets/assets/audio/efesios_4_3.opus": "a4dcf3f31ef889faab01ae7cc501a756",
"assets/assets/audio/colosenses_3_23_24.opus": "3a0396d3ba51b33b79aa901c5b14b3eb",
"assets/assets/audio/juan_6_63.opus": "4cc1715eecea2dfd61f9dd5ad2f0670b",
"assets/assets/audio/filipenses_3_10.opus": "d4833d84b6818c8a535dcae801cac83e",
"assets/assets/audio/galatas_2_20.opus": "39d1a84c9fc69c9d030e4e0cb9353d64",
"assets/assets/audio/salmos_119_111.opus": "38991b9468a3130533869a8e55caef94",
"assets/assets/audio/filipenses_4_1.opus": "4bdc49c4e73d46ebd5f1d3d69309e8ae",
"assets/assets/audio/2_timoteo_2_1.opus": "486755b459fcbf1495ec7364ffe12214",
"assets/assets/audio/salmos_138_2.opus": "badab783c36c70fd3b41b3fb2dbe4a71",
"assets/assets/audio/romanos_10_9.opus": "90d33bd8148a86a39d48837e8d627169",
"assets/assets/audio/2_corintios_13_14.opus": "048feb8b10172ea92624e4f7b90891e2",
"assets/assets/audio/romanos_13_11.opus": "a7dd16992fb1b40fd7866f38a16e9c7b",
"assets/assets/audio/salmos_27_1.opus": "d62927b3fef17b1e1fe6db35b45a07ef",
"assets/assets/audio/juan_5_39.opus": "6ef733a4818450031f9043efa8cd3ff8",
"assets/assets/audio/2_timoteo_1_7.opus": "de46ee4476f2cec4fe8cb8c74d25b159",
"assets/assets/audio/indice.json": "dcb93d55280439ad3bdb689d3f870af3",
"assets/assets/audio/san_mateo_24_43.opus": "b560300f6b0cde0fdec7ec65da5161a7",
"assets/assets/audio/2_timoteo_3_16_17.opus": "7a8d245f3723bea03882f8aec12f2d42",
"assets/assets/audio/galatas_5_16.opus": "5917b0f46e1123ef1466ff20b08e819e",
"assets/assets/audio/1_corintios_2_5.opus": "e3c3172ef5481bb93da8a92dc029717d",
"assets/assets/audio/salmos_133_1.opus": "8971cfd7fa19b1bfa817ff4043ec5b9e",
"assets/assets/audio/genesis_1_1.opus": "d074c2e8c864a62724628ab725d1527c",
"assets/assets/audio/filipenses_4_6.opus": "4f3b7668b0d924ad562826fbcb2e4e15",
"assets/assets/audio/1_corintios_3_10.opus": "a5f9b6824014e8b8178c2c161418cfb4",
"assets/assets/audio/efesios_6_10.opus": "8e27e69cb06d04b0442646bbedc8076b",
"assets/assets/audio/2_timoteo_3_14_15.opus": "c74b7e972818c8a0b0c8739419154c73",
"assets/assets/audio/romanos_6_23.opus": "208727cecdcab4c2e88924584e85e1d9",
"assets/assets/audio/2_corintios_5_10.opus": "8fe9078827e8cef6a40e57403d954feb",
"assets/assets/audio/salmos_37_5.opus": "e865a4f8f00dceb32afd2b017261aac5",
"assets/assets/audio/1_corintios_12_13.opus": "98ddf43ea7649cfe6e443e7505e9a8c7",
"assets/assets/audio/1_corintios_15_34.opus": "9c66595e16b30a79aff30f94137b9b62",
"assets/assets/audio/2_corintios_7_1.opus": "75c13791897e4bcf3a5db35de3da8227",
"assets/assets/audio/san_lucas_14_28.opus": "2ce7f66355ca968ca198683098de19a6",
"assets/assets/audio/proverbios_27_17.opus": "4cacb097ed1eafbb88dce893674f1e21",
"assets/assets/audio/2_cronicas_15_7.opus": "ba9c0e25dd6319cd86b1969d7b481fb8",
"assets/assets/audio/juan_11_11.opus": "ba5b0d47670db05d8279a39ed140d1c9",
"assets/assets/audio/1_corintios_14_40.opus": "0115ce9cf36c3aa6deab41a98d08982a",
"assets/assets/audio/romanos_10_9_10.opus": "681afeae8177707207012fe906c70d01",
"assets/assets/audio/2_tesalonicenses_2_15.opus": "5e1450d5bc4c3ac5daa88c598b48a340",
"assets/assets/audio/1_timoteo_2_5.opus": "e079887ea83474751ecf3ea0588cf954",
"assets/assets/audio/efesios_6_13.opus": "04ba95582b43421a003a1211526146c8",
"assets/assets/audio/jeremias_15_16.opus": "6b781647d94643733435899bf7bf116f",
"assets/assets/audio/salmos_40_1.opus": "a20d288d7c3c210e5ca2559815efe52f",
"assets/assets/audio/habacuc_3_18.opus": "bcefbfc174856f7ac60532c2180ec531",
"assets/assets/audio/hechos_20_24.opus": "0cd38fb9df4b2cf2193376b9ae472d7d",
"assets/assets/audio/2_corintios_4_18.opus": "cca357fa21938696f0ca53668fd6352a",
"assets/assets/audio/romanos_1_16.opus": "ff0285cfa664b42d30805adf7fdf1681",
"assets/assets/audio/1_timoteo_4_14.opus": "9aa6e79139c440365923640816218e49",
"assets/assets/audio/filipenses_1_21.opus": "b3733cc2dc25aa47fbd88f41f97dd66b",
"assets/assets/audio/san_mateo_24_42.opus": "3bcd9444077e903c645a0e2bfc5a472e",
"assets/assets/audio/2_corintios_5_18.opus": "ca0a47ae30dc8abc14b743eba21ca53c",
"assets/assets/audio/galatas_2_21.opus": "90272a114d3c8b4a71cf1c3eeb80b974",
"assets/assets/fonts/AppMono-Regular.ttf": "e2750e298b4e29bcf20717d4e23e2e97",
"assets/assets/fonts/AppMono-Bold.ttf": "ecd2e74360033c5df18b453ce1308ceb",
"assets/assets/memorizacion.json": "74210ad875cb48c2554fa83f1f8ff5a8",
"assets/assets/biblia_vp1602.json": "85958e9aaacf55268ca1f1cfb427b1af"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
