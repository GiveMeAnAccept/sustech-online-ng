/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "890aec5090512d5633ee2f1b22d6e38b"
  },
  {
    "url": "about.html",
    "revision": "288c1c0ad752165e2ed8c45a604d32e8"
  },
  {
    "url": "assets/css/0.styles.6f91daff.css",
    "revision": "fb29accb06a33b6d7cc0a2013717484e"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.d007a398.png",
    "revision": "d007a398c9483d2e223ecef841927ba8"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/qr-code.9c784d6e.jpg",
    "revision": "9c784d6e62e54647252c3e081e3c22e9"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.b7a28bad.js",
    "revision": "2db18308ae025d89ab8f7688c0f8f407"
  },
  {
    "url": "assets/js/11.a1906944.js",
    "revision": "d1522ce7d4b7af2e87d0956bf8c90a44"
  },
  {
    "url": "assets/js/12.6002078d.js",
    "revision": "d907d596f2b93139e9c912fedd2da34d"
  },
  {
    "url": "assets/js/13.45ee6e02.js",
    "revision": "67359b0149ff208548c57ef368ce3e02"
  },
  {
    "url": "assets/js/14.ba1cb1eb.js",
    "revision": "0fe40638681aab7c26c5e7465290d441"
  },
  {
    "url": "assets/js/15.f79dd370.js",
    "revision": "a0d8d84ff82f17da12b2adf7e6206fae"
  },
  {
    "url": "assets/js/16.ab26c189.js",
    "revision": "fa4ee24bc76f9565e1e7484346c8f31c"
  },
  {
    "url": "assets/js/17.b2390609.js",
    "revision": "81470bab013d7a588593d6e600e6a663"
  },
  {
    "url": "assets/js/18.1e56b464.js",
    "revision": "1ae8b815f48394eaa2557907a216dc04"
  },
  {
    "url": "assets/js/19.d60d9208.js",
    "revision": "e0c96cb0105d957e513811b9251291f7"
  },
  {
    "url": "assets/js/2.0e5c8eae.js",
    "revision": "b729ff1a158dbb521713c531fd15b99e"
  },
  {
    "url": "assets/js/20.adbe916d.js",
    "revision": "6ed660e8ef605ba2e78fa9dc98ad44e9"
  },
  {
    "url": "assets/js/21.e16a939a.js",
    "revision": "22f396c18e483a037489f7bb1c5df62f"
  },
  {
    "url": "assets/js/22.668ba7fe.js",
    "revision": "460f92ffd42533d7f829d7c5b555e5be"
  },
  {
    "url": "assets/js/23.c2ee478c.js",
    "revision": "71136fc87399c5b4735d1d110250113d"
  },
  {
    "url": "assets/js/24.064ce8c9.js",
    "revision": "6107fc837eb1083b06cc8ca4653ba292"
  },
  {
    "url": "assets/js/25.a2afe964.js",
    "revision": "c7dce636321b8679b71ac96a60efb912"
  },
  {
    "url": "assets/js/26.91bac23d.js",
    "revision": "51c5b4fbba6bc26076fbe7834c659670"
  },
  {
    "url": "assets/js/27.30cadaa2.js",
    "revision": "1d2a692915f631b83bd97e9701119d76"
  },
  {
    "url": "assets/js/28.fbfcae7f.js",
    "revision": "381840092c38ea8fb68cfa161da04850"
  },
  {
    "url": "assets/js/29.d2820ed9.js",
    "revision": "d0b370e781c9420e06543c305330f133"
  },
  {
    "url": "assets/js/3.053fb91d.js",
    "revision": "d94677422020896bdf4f031ce4a1ee7d"
  },
  {
    "url": "assets/js/30.f8ff3ccc.js",
    "revision": "85b36bd5c586bce0962872b193aaddb9"
  },
  {
    "url": "assets/js/31.c421d055.js",
    "revision": "98b922e53f361947c9dcc80fc76a530f"
  },
  {
    "url": "assets/js/32.542f7808.js",
    "revision": "2fc17734a0453e97bc966c1eaf294633"
  },
  {
    "url": "assets/js/33.70361e05.js",
    "revision": "de35da077dadd72f59841509cc0088f1"
  },
  {
    "url": "assets/js/34.5986730c.js",
    "revision": "1d29814fb3f3aea3f1a477bf4632ac64"
  },
  {
    "url": "assets/js/35.53db860c.js",
    "revision": "d0f111f3f8ed8f6bccabd10bff156d5c"
  },
  {
    "url": "assets/js/36.43a5149d.js",
    "revision": "af471037f09df0e77a1ce752de9de830"
  },
  {
    "url": "assets/js/37.6c0c9383.js",
    "revision": "e0c043b95c28f2bc93932b8b3583e090"
  },
  {
    "url": "assets/js/38.62615efd.js",
    "revision": "7067c13d5f055f5424d93adccea1c8c8"
  },
  {
    "url": "assets/js/39.ed258c84.js",
    "revision": "6b8ce04410691d016c91367051c44fcc"
  },
  {
    "url": "assets/js/4.7edf9fac.js",
    "revision": "941adb16c95bc8377cee2145c80db682"
  },
  {
    "url": "assets/js/40.722f8a5c.js",
    "revision": "d179f8f3cb553676a148e2466955ca4a"
  },
  {
    "url": "assets/js/41.308c72d4.js",
    "revision": "a5f1fd5ddaf97484cb30ea7818b27edc"
  },
  {
    "url": "assets/js/42.e69dc7fc.js",
    "revision": "c947c35d1ab542427836678bac191c21"
  },
  {
    "url": "assets/js/43.268633c5.js",
    "revision": "d52a64b22f27f0aa2743af0f6458141a"
  },
  {
    "url": "assets/js/44.389ce393.js",
    "revision": "d0a3f9f7f3ce6cd92516821ccf98b118"
  },
  {
    "url": "assets/js/45.a0183355.js",
    "revision": "986292183f87b1fca84a4475bc890a50"
  },
  {
    "url": "assets/js/46.fed18535.js",
    "revision": "16b07483d488e57423a85e4a07a846c9"
  },
  {
    "url": "assets/js/47.af5db3e4.js",
    "revision": "cf49f8242ca72bf27cdebd5499d75a60"
  },
  {
    "url": "assets/js/48.9e7aa987.js",
    "revision": "9814158a2d5fe3e6b3dd48d9a9a0d345"
  },
  {
    "url": "assets/js/49.aeaecdd1.js",
    "revision": "36a90dcc736dd9b19b966ea7ebbad1b2"
  },
  {
    "url": "assets/js/5.92873339.js",
    "revision": "e1888aba12b9512a606bc96f8ee88b73"
  },
  {
    "url": "assets/js/50.8e83d809.js",
    "revision": "0a8d7b09b656d65414e113752d6dbe45"
  },
  {
    "url": "assets/js/51.4d91b14a.js",
    "revision": "7b47562068eb8014f4042cd278e6d132"
  },
  {
    "url": "assets/js/52.c1fed034.js",
    "revision": "3079386a8741d302d09feac2166e12d2"
  },
  {
    "url": "assets/js/53.d6565b20.js",
    "revision": "369c35e62233c88023421ef238e656d0"
  },
  {
    "url": "assets/js/54.30a96324.js",
    "revision": "ebe2c5c4f5baccf62f1c2ba690adabad"
  },
  {
    "url": "assets/js/55.c83e3eaf.js",
    "revision": "dbd36f516b9147fff84eb25dd7dd4b92"
  },
  {
    "url": "assets/js/56.a160c604.js",
    "revision": "d7d5fd1f418ba4000dcba28bfb796a3e"
  },
  {
    "url": "assets/js/57.01e0651a.js",
    "revision": "33b3e88f54e877b5c1440be58d0a50cc"
  },
  {
    "url": "assets/js/6.0c6482ec.js",
    "revision": "01eb6679d7ecf4a0d87e1b572667a13e"
  },
  {
    "url": "assets/js/7.fb9ea8cf.js",
    "revision": "927cc6da4a0ec1300f165085c998885e"
  },
  {
    "url": "assets/js/8.113a06ee.js",
    "revision": "2bffa0ef2e6668688f6c7650d6d48b81"
  },
  {
    "url": "assets/js/9.ee7f8d2b.js",
    "revision": "6ccfb937e10072a29d009980344f5b63"
  },
  {
    "url": "assets/js/app.a2a22603.js",
    "revision": "8fcbc296c28e3a7fb37da5ac19e891f4"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "e172b9f8febed4e5c240a10a0a25242b"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "34535593f5c2112e4c1110f08d1ff97f"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "a66beaca7b4e393157d510be4ac5ec6a"
  },
  {
    "url": "calendar/2021-2022.html",
    "revision": "06ef013a2405dc3e844bb32621270e9c"
  },
  {
    "url": "calendar/index.html",
    "revision": "d05280fe1629f4a0a41604f20d1aae23"
  },
  {
    "url": "catering/index.html",
    "revision": "2c0ab717a0e4750301b070742f94db9e"
  },
  {
    "url": "contact/index.html",
    "revision": "206d32798743c336b58b94533c0086ec"
  },
  {
    "url": "emergency/index.html",
    "revision": "bf9bc0a83bba6f2f83396ba60ed0d3dc"
  },
  {
    "url": "facility/index.html",
    "revision": "ac585c03267210da711dc2091b6b94c3"
  },
  {
    "url": "facility/panolens.html",
    "revision": "2765607baad35a1e64651b01b29fae3b"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "45234da5fd0114f3fa31b8f018519c3c"
  },
  {
    "url": "index.html",
    "revision": "e54accff5daaf70693fb9995e49c57b6"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "33050d82cda30a605b47bd61ed6d7cc0"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "15a67a14001e1575eac71a278aa0b675"
  },
  {
    "url": "life/index.html",
    "revision": "d058beb41bc5be9f4e5517ee7ac777c9"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "1be100acdfe7051118b3ef465da28d26"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "5e1654c7a455c8b32b60ffb127eafb83"
  },
  {
    "url": "news/index.html",
    "revision": "ce95693b4b280ac833124674145fe0d4"
  },
  {
    "url": "organizations/index.html",
    "revision": "1e850ac0a8287cf50d34e1a30ab21555"
  },
  {
    "url": "organizations/registered-organization-2019.html",
    "revision": "09b6bc30b1a1503dad5481b251ff2d6a"
  },
  {
    "url": "organizations/registered-organization-2020.html",
    "revision": "8b14a7d4b190df4fd1ecc7d8ba8a4b66"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "e5ef93b53b92aafacc0a01f36923b8a3"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "3e7bedfd0a549c0a3e14a6e0ac18e633"
  },
  {
    "url": "service/email/index.html",
    "revision": "825c99658bae7a2409e8071dbf6fe8f6"
  },
  {
    "url": "service/index.html",
    "revision": "e9ff94d3434cc6f73aa335ed1b0a619a"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "a5702003be7971ab1e516fff107e60fb"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "28a3997a02fcfbabb9c0eea326bbd1d8"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "a6921e3ad05c1c0714d3d8a27a691b37"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "fe24de6d782fbc10a45aec3aaf325124"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "f6712fd0d3ad41d010e53bb2da2806b3"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "1ccb641ff6c051d7936be4354283d91c"
  },
  {
    "url": "service/network/index.html",
    "revision": "be9652f53fc55f9eb5f81212ee0716ac"
  },
  {
    "url": "service/network/remote-desktop/index.html",
    "revision": "0442ba86b8c9e11a9f4fc46a1005b9f5"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "19c92a18c42837017b90566d3234c516"
  },
  {
    "url": "service/sid/index.html",
    "revision": "39e34c860f2794db6414c56b64865760"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "2bc72b795d041cafa67d308a2d612efd"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "60429ae5c3f9d4c5d452709ef3d3fe20"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "d30425e02ff039ba7b867ba78b2f783b"
  },
  {
    "url": "site-help/index.html",
    "revision": "744f281c72d4ea18ce7c1b3b3ceb884b"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "cc57d16f2477b7f34b669304f698215f"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "737c7f28c5a6064c57711a6e19f8d38a"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "ff61eaa5501f89d9e5756044b49a0609"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "122ec6d2aee0aa542b9bcaf1c0b8cfda"
  },
  {
    "url": "study/index.html",
    "revision": "f4d6e48a11bd152033ae39c56ee216c7"
  },
  {
    "url": "surroundings/index.html",
    "revision": "2caaf902330ead3e0e2139a23320299b"
  },
  {
    "url": "transport/holiday.html",
    "revision": "0bb91499806661b780b3200f5ae4df3c"
  },
  {
    "url": "transport/index.html",
    "revision": "1e472b92dfa4a458e567596a0a9982c5"
  },
  {
    "url": "transport/workday.html",
    "revision": "1629408968ba9f58ef71d487ab4f7249"
  },
  {
    "url": "wx_helper.js",
    "revision": "09d67f229a32659f1acf7d55a767e962"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
