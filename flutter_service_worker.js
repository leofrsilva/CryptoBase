'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "99da0d7a3c2037a7afb32aa393ed4aef",
".git/config": "6070ce81c5f40cc80baf9669cf888828",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "de3621fd846694ba4ff1564bf2c3d749",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8e135f8ca41139e45a2c6f304f7a7853",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b195ae6cca1ae64f433fe5c00f480357",
".git/logs/refs/heads/dev": "6ccf5b6b5f93418e6b94ecb63187f993",
".git/logs/refs/heads/main": "2c83de87fe04c9bda4908c8223449a53",
".git/logs/refs/remotes/origin/dev": "fb4d234bcb0c6e4b1023558051e5d783",
".git/logs/refs/remotes/origin/HEAD": "26830cfafbb038dba038852b1d8cc6a3",
".git/logs/refs/remotes/origin/main": "f1ee47862ca17f274d2334131ea4277d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/65f5824809ea81f2aba048ff6dd8be81c7eb11": "f001fb8c36345b9d5c7331d95c9e5991",
".git/objects/0e/afc674121ed6c46f09507c308e39d062d4291f": "73f12c8baaf1848ada0631f5a03ac162",
".git/objects/10/7417e07e4c7aea82005d33519d03fec6c79cbb": "c74f184b75196c4bc759f8ef13015ed6",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/4a8e50419b4c06628ac800bfca1c668338e8e2": "98f4bde1172be672f8c43746a04a8266",
".git/objects/14/d6c280c72e29a613eef8d5a4de75152a07409a": "acf639511a0313141148ba48c1ffd3a1",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/eb61949234eb02e6f87d8bdd7bcc7e0ce2f1a7": "a3c1bdb648865159722b818987f0536c",
".git/objects/21/c2a76615828e512b8efc88b0a665dee21fc586": "a93eef661be5f378ed954aecb5ebd215",
".git/objects/25/2f156e4e4065d70cbeb0cd0c528bd4445a765e": "d9259842d1712ac62438a98b75466a84",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/7637350d63885bcfb092029218fa571144537e": "b1dc248797f225543a8d424b5f81b7d3",
".git/objects/31/132512c964da0351976970a68ed9cff60f330e": "676bfc406ee05ced1ca39b15bf7b663e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/c99d930b9618820463aea5b8904ec4ee562dcd": "736afa76dfb921ae9ea2fbfff2b616c5",
".git/objects/3a/db954c70c36d3c32974aa236a4d28e35484dcd": "8e1083a1f5aac340222b18d5226622c4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/23e2852511795781a18f95cd27d742dc839c67": "6e8e07b048354ba54f6553338771cb9c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/877c97acb714278a667d087378c95f56db8dde": "c00b36e3c503b0fbd6183b28f4f83145",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/a6078fe756a50303a7e086c08415d48b38362e": "2b85138613ec1aa0e75613cb23f4b831",
".git/objects/52/163ec386f137bd5337d0f89de214203c5bca8d": "4216f84d101634e995ebb4e3f9f04bcf",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5a/1e3e61e62085c2376590dad398c0306abe172e": "edc67094bdfb9abd5bbf0c0a1b5289f2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/70dcaed4eb75ef171c5981981a0d1307168de0": "7969f43a88791fb64c86c54e152f1c9d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/2177f5bd69bb3585e0582190396f82cfdbcc1b": "7a13c38daf805fd26843e82c51007e4d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/149300a1290cf142dcd66f35381348a8d16b79": "b619fea7cb9afbf86f392c9c55750303",
".git/objects/88/521723d4a2c31ad069e9c5f7aefd2fdad59719": "0af0dad69d0c26db74c4ff1740827542",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/20e050e93922d4f5ad4beba9dfa335a15fb745": "7327c20082057d47c78f471688955e1b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/ec4b935aa739c4b7b010cb11681819802b19c6": "95522b653a132dd5832ead0d34097096",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/5a6d424cce55b939cb05056e67960e39f34f09": "19d7958995d65687be4539f5f44a5bc1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5f72658b7ee29a5ebcbd7516cf9ca087e37556": "8b6259e216bccf5ca43fea5edb58cd58",
".git/objects/a1/6cbf10bf764374bdda776c7afba06a95579f99": "792e9de1fd2e72d328dfe50e1fcd27b5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/89de3eb97a2aa36da24114c9e7e1e4361dd2f3": "f51b6c6c1e8bd4ee91bd3316876c077a",
".git/objects/af/f0ae4410f63d66e5681198c1c354aad720387b": "8a71a1beaebcd86489b059a708e0fd86",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/89cba8ab70f5dd87dca597070b815d327b7aef": "87031d5148cabf188d338d5f1df021a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9cdc607835608200f4589f1b7f223436d9f11a": "d5d3436344ec01fbd67b0471ec79f9cd",
".git/objects/bc/0a11cd06d1f81e2c47d725d56318bfa9a07cf7": "9ab9ccd81ae593726fdde4e4203f9597",
".git/objects/c0/3c5e74ae5a8ad8bb76218454bd92354bbbaea8": "302bbf1aeae82cb9f782621f1357b929",
".git/objects/c1/f07de12cf07ad6b904e28113d5d466b68ce7a3": "89672834c7c2caf1ffa688022c3bc481",
".git/objects/ca/7a6a11a69354ec4149527b05749c8404f09d45": "01a319fc2949bae41140509e9db50be8",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/9e4631313b4233685696dc8601075cac04ad07": "f5b4dd596e6dbd7bf438853d568233aa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/1b869bd1690333f763f0d93e50867c35cf5207": "9b00f6f986ec3bc2ba21ad8ae23a5fe1",
".git/objects/dc/b22aac5869d0525b0a7f4f68a76f80c75b6be8": "bc8225ce91b22f5e21dd495ed47a71f8",
".git/objects/dc/ef64af7f095e991ac1b67fdda0ddb3738ebed6": "430c1faf27afa4c2401a84fcadaae7db",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/f7b37a1278116a29d2985470db16561d4775ac": "803c0e114f1152809eefaea008224b63",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/a4b22ae2cdb6df9b45d9b9c7b7d845c11ef7cd": "3abe9e4ed9fd1b5ace35ead291fe6c87",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/74cbb610cf9171677ef96ccab90aa6f567f99d": "c0d6ecdf2e070ede2e0655bf5a6b60e0",
".git/objects/f1/97b1e7a8b3fd9c4643774e41c10f0a42cc7ec8": "bc6af84d4247fe5184f64c84b5f65950",
".git/objects/f8/b7a1c2b5ef5dad9884ba479e3d145eb0566630": "15ebd0e68df06833a919aabbc63e89c1",
".git/objects/ff/c90fea9d33eec5bb8723a7bb40eb0bf1342a57": "b554f82e8569c579987d86058898ca9e",
".git/ORIG_HEAD": "c14f27a20fbed50520e48ec6b0239b0a",
".git/refs/heads/dev": "0cc9d51ba058073185d66f47399effb8",
".git/refs/heads/main": "0cc9d51ba058073185d66f47399effb8",
".git/refs/remotes/origin/dev": "0cc9d51ba058073185d66f47399effb8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0cc9d51ba058073185d66f47399effb8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "898b2a32792092eb1695d3fb201eba58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "79fd1b5f4b9ed5c1eb55814813698372",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2243bc06efc8b220de3142cbd415ea65",
"/": "2243bc06efc8b220de3142cbd415ea65",
"main.dart.js": "deca7b458ce2da093d36eff3c7301578",
"manifest.json": "e42a418fe9f3949320ba96602d854613",
"version.json": "e6293b01a692db98e21c0298cbf1a816"
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
