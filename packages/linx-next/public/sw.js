if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>n(e,c),d={module:{uri:c},exports:i,require:r};s[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-Xdc_5gJKddz2G953z4CJc.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Xdc_5gJKddz2G953z4CJc/_buildManifest.js",revision:"17b590754734abf1492896f1d35331eb"},{url:"/_next/static/Xdc_5gJKddz2G953z4CJc/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Xdc_5gJKddz2G953z4CJc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/50-8d6f7c76d827b96e.js",revision:"8d6f7c76d827b96e"},{url:"/_next/static/chunks/711-151b61f23d43f12a.js",revision:"151b61f23d43f12a"},{url:"/_next/static/chunks/82-f1d8ffa1eb904ed9.js",revision:"f1d8ffa1eb904ed9"},{url:"/_next/static/chunks/884-5987d3c3a3f8a4ca.js",revision:"5987d3c3a3f8a4ca"},{url:"/_next/static/chunks/919-6b74dc240d0d8e14.js",revision:"6b74dc240d0d8e14"},{url:"/_next/static/chunks/998-63d1d75eeac69b82.js",revision:"63d1d75eeac69b82"},{url:"/_next/static/chunks/framework-d4c7fbe780b853ea.js",revision:"d4c7fbe780b853ea"},{url:"/_next/static/chunks/main-a28b8ca3b498e904.js",revision:"a28b8ca3b498e904"},{url:"/_next/static/chunks/pages/404-4080cfe22b7e2a95.js",revision:"4080cfe22b7e2a95"},{url:"/_next/static/chunks/pages/500-9b80f91c8f00a712.js",revision:"9b80f91c8f00a712"},{url:"/_next/static/chunks/pages/_app-471114b39390f1d7.js",revision:"471114b39390f1d7"},{url:"/_next/static/chunks/pages/_error-5f79c00932c7c9f1.js",revision:"5f79c00932c7c9f1"},{url:"/_next/static/chunks/pages/_offline-2e883af8b42052ba.js",revision:"2e883af8b42052ba"},{url:"/_next/static/chunks/pages/explore-2c9493a3fe8f3980.js",revision:"2c9493a3fe8f3980"},{url:"/_next/static/chunks/pages/index-c198f90c008be596.js",revision:"c198f90c008be596"},{url:"/_next/static/chunks/pages/new-a9ba290f0ddf7ff0.js",revision:"a9ba290f0ddf7ff0"},{url:"/_next/static/chunks/pages/settings/profile-7d3e3d3fd95b554f.js",revision:"7d3e3d3fd95b554f"},{url:"/_next/static/chunks/pages/signin-7ebc27c74e9b0e36.js",revision:"7ebc27c74e9b0e36"},{url:"/_next/static/chunks/pages/signup-61df1042c4de4760.js",revision:"61df1042c4de4760"},{url:"/_next/static/chunks/pages/stats-538d0f40ed7ffb2b.js",revision:"538d0f40ed7ffb2b"},{url:"/_next/static/chunks/pages/t/%5Btag%5D-2c5882bd72acd6d4.js",revision:"2c5882bd72acd6d4"},{url:"/_next/static/chunks/pages/t/all-890237d0fb18dc0a.js",revision:"890237d0fb18dc0a"},{url:"/_next/static/chunks/pages/u/%5Buser%5D-f53171922a53c622.js",revision:"f53171922a53c622"},{url:"/_next/static/chunks/pages/u/%5Buser%5D/%5Bgroup%5D-96563b9fc648eaa4.js",revision:"96563b9fc648eaa4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/e660eabdbe0a3478.css",revision:"e660eabdbe0a3478"},{url:"/_offline",revision:"Xdc_5gJKddz2G953z4CJc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));