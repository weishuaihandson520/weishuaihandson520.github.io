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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "revision": "b153a597d673363279db59ee2e5bd81b"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.bd626a2b.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.ef5fe093.js",
    "revision": "7d5adaaf2e449ab6248b4c69383d1507"
  },
  {
    "url": "assets/js/15.ed07ff7c.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.68897b52.js",
    "revision": "8cc19f9a14f828d49869213ddb29acb1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5aa1088e47ac8b20539297997bb2fa74"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3283610cf9abe10574d772f994c99145"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1914b4743f5d9a922e274cc84a49923d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3c04bc9cc1b3cbce3cf241069b64d8b3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a29b3622d37c0e477e67aeffb8302e61"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "fde8ea375efd247093fc963189d92e41"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c59f8c9eb178949d066a33a048c37ec9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ece68ed65bb8a0e231465a956fe532ee"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5f85acbc90c4c479755d205eb5de8a46"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7480a194f1e85be340c4e8b73100b79a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ee0f83aff863ae50cc6a0f8324218153"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a6a33cdd2cb1004f0eb6dfb61b7c435a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ee6b0ba50396cba3344935e7534c5007"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0c1ac8ce7e97d6e7c9ed55f834bb668a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8dc0dbae98be8edb372d9d27a50389c9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6bdbfa6a3f57e790d9ef623872c0f028"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "781deb566aea352ff51cb4baae1d889c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "62c1615c25f6012966a5571507bb5dfa"
  },
  {
    "url": "timeline/index.html",
    "revision": "f68accaa2347afb5ed9f5f7be956b271"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a98a927f79509c26938d4283c03a39f9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5ec011c2adcf3697c089995e78f1f498"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c1003e3e6707dc189547c7b13fdbda39"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7a3d422c5bd63d8647c1293a050d7c93"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e5d9151bee17b5e1fd45dc9ac14de60e"
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
