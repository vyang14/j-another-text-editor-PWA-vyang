/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var n={256:(n,r,t)=>{"use strict";function e(n,r,t,e,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?r(s):Promise.resolve(s).then(e,o)}function o(n){return function(){var r=this,t=arguments;return new Promise((function(o,a){var i=n.apply(r,t);function c(n){e(i,o,a,c,s,"next",n)}function s(n){e(i,o,a,c,s,"throw",n)}c(void 0)}))}}t.d(r,{z:()=>L,d:()=>S});var a=t(687),i=t.n(a);let c,s;const u=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap;let h={get(n,r,t){if(n instanceof IDBTransaction){if("done"===r)return l.get(n);if("objectStoreNames"===r)return n.objectStoreNames||f.get(n);if("store"===r)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return g(n[r])},set:(n,r,t)=>(n[r]=t,!0),has:(n,r)=>n instanceof IDBTransaction&&("done"===r||"store"===r)||r in n};function v(n){return"function"==typeof n?(r=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...n){return r.apply(m(this),n),g(u.get(this))}:function(...n){return g(r.apply(m(this),n))}:function(n,...t){const e=r.call(m(this),n,...t);return f.set(e,n.sort?n.sort():[n]),g(e)}:(n instanceof IDBTransaction&&function(n){if(l.has(n))return;const r=new Promise(((r,t)=>{const e=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{r(),e()},a=()=>{t(n.error||new DOMException("AbortError","AbortError")),e()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));l.set(n,r)}(n),t=n,(c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((n=>t instanceof n))?new Proxy(n,h):n);var r,t}function g(n){if(n instanceof IDBRequest)return function(n){const r=new Promise(((r,t)=>{const e=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{r(g(n.result)),e()},a=()=>{t(n.error),e()};n.addEventListener("success",o),n.addEventListener("error",a)}));return r.then((r=>{r instanceof IDBCursor&&u.set(r,n)})).catch((()=>{})),p.set(r,n),r}(n);if(d.has(n))return d.get(n);const r=v(n);return r!==n&&(d.set(n,r),p.set(r,n)),r}const m=n=>p.get(n);function y(n,r,{blocked:t,upgrade:e,blocking:o,terminated:a}={}){const i=indexedDB.open(n,r),c=g(i);return e&&i.addEventListener("upgradeneeded",(n=>{e(g(i.result),n.oldVersion,n.newVersion,g(i.transaction))})),t&&i.addEventListener("blocked",(()=>t())),c.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const b=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],x=new Map;function _(n,r){if(!(n instanceof IDBDatabase)||r in n||"string"!=typeof r)return;if(x.get(r))return x.get(r);const t=r.replace(/FromIndex$/,""),e=r!==t,o=w.includes(t);if(!(t in(e?IDBIndex:IDBObjectStore).prototype)||!o&&!b.includes(t))return;const a=async function(n,...r){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;return e&&(i=i.index(r.shift())),(await Promise.all([i[t](...r),o&&a.done]))[0]};return x.set(r,a),a}var k;k=h,h={...k,get:(n,r,t)=>_(n,r)||k.get(n,r,t),has:(n,r)=>!!_(n,r)||k.has(n,r)};var E=function(){var n=o(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",y("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=o(i().mark((function n(r,t){var e,o,a,c,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.error("putDb not implemented"),n.next=3,y("jate",1);case 3:return e=n.sent,o=e.transaction("jate","readwrite"),a=o.objectStore("jate"),c=a.add({id:r,jate:t}),n.next=9,c;case 9:s=n.sent,console.log("Data has been saved to the database",s);case 11:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),L=function(){var n=o(i().mark((function n(){var r,t,e,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.error("getDb not implemented"),n.next=3,y("jate",1);case 3:return n.sent,r=contact.Db.transaction("jate","readonly"),t=r.objectStore("jate"),e=t.getAll(),n.next=9,e;case 9:return o=n.sent,console.log("result.value",o),n.abrupt("return",o);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();E()},477:(n,r,t)=>{"use strict";t.d(r,{Z:()=>c});var e=t(144),o=t(671),a=t(256),i=t(426),c=(0,e.Z)((function n(){var r=this;(0,o.Z)(this,n);var t=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(0,a.z)().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),r.editor.setValue(n||t||i.F)})),this.editor.on("change",(function(){localStorage.setItem("content",r.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),(0,a.d)(localStorage.getItem("content"))}))}))},426:(n,r,t)=>{"use strict";t.d(r,{F:()=>e});var e="\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n"},402:(n,r,t)=>{"use strict";t.d(r,{Z:()=>c});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* app shell CSS */\r\n:root {\r\n  --primary: #31a9e1;\r\n  --gray: #ececec;\r\n  --whitesmoke: #f5f5f5;\r\n  --dark: #222;\r\n  --monoaki: #272822;\r\n  --navbar-height: 50px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--monoaki);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n}\r\n\r\n#navbar {\r\n  height: var(--navbar-height);\r\n  background-color: var(--primary);\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: 550;\r\n  letter-spacing: 0.9px;\r\n}\r\n\r\n.navbar-brand img {\r\n  padding-top: 10px;\r\n}\r\n\r\n.loading-spinner {\r\n  animation-duration: 0.75s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: rotate-forever;\r\n  animation-timing-function: linear;\r\n  height: 30px;\r\n  width: 30px;\r\n  border: 3px solid var(--primary);\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n\r\n.loading-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--navbar-height));\r\n}\r\n\r\n@keyframes rotate-forever {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.app-update {\r\n  display: none;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.app-update.show {\r\n  display: block;\r\n}\r\n\r\n.nav-btn {\r\n  margin: 25px;\r\n}\r\n\r\n.btn {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  color: #1a1a1a;\r\n  background-color: #aeaeae;\r\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #cecece;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-squared {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn.btn-sm {\r\n  font-size: 0.85rem;\r\n  padding: 0.3rem 0.9rem;\r\n}\r\n\r\n.btn.btn-lg {\r\n  font-size: 1.25rem;\r\n  padding: 0.8rem 1.4rem;\r\n}\r\n\r\n.btn.btn-block {\r\n  width: 100%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: #2d3e50;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-primary:hover {\r\n  background-color: #57779a;\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: #e64c66;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-danger:hover {\r\n  background-color: #ee8294;\r\n}\r\n\r\n.btn.btn-info {\r\n  background-color: #1bbc9b;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-info:hover {\r\n  background-color: #31e1bd;\r\n}\r\n\r\n.btn.btn-light {\r\n  background-color: #d9e9e8;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-light:hover {\r\n  background-color: #84b8b4;\r\n}\r\n\r\n.btn.btn-dark {\r\n  background-color: #1a1a1a;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-dark:hover {\r\n  background-color: #5f5f5f;\r\n}\r\n\r\n.btn.btn-white {\r\n  background-color: #ffffff;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-white:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.btn.btn-black {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-black:hover {\r\n  background-color: #666666;\r\n}\r\n\r\n.btn.btn-link {\r\n  background-color: #1b89bc;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  background-color: #31a9e1;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-brand {\r\n    display: none;\r\n  }\r\n\r\n  #navbar {\r\n    justify-content: center;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n",""]);const c=i},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);e&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=e.base?s[0]+e.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=t(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(p);else{var h=o(p,e);e.byIndex=c,r.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);r[c].references--}for(var s=e(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{"use strict";var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{"use strict";n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},61:(n,r,t)=>{var e=t(698).default;function o(){"use strict";n.exports=o=function(){return r},n.exports.__esModule=!0,n.exports.default=n.exports;var r={},t=Object.prototype,a=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(n,r,t){return Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{l({},"")}catch(n){l=function(n,r,t){return n[r]=t}}function f(n,r,t,e){var o=r&&r.prototype instanceof h?r:h,a=Object.create(o.prototype),i=new L(e||[]);return a._invoke=function(n,r,t){var e="suspendedStart";return function(o,a){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw a;return{value:void 0,done:!0}}for(t.method=o,t.arg=a;;){var i=t.delegate;if(i){var c=k(i,t);if(c){if(c===p)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===e)throw e="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e="executing";var s=d(n,r,t);if("normal"===s.type){if(e=t.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e="completed",t.method="throw",t.arg=s.arg)}}}(n,t,i),a}function d(n,r,t){try{return{type:"normal",arg:n.call(r,t)}}catch(n){return{type:"throw",arg:n}}}r.wrap=f;var p={};function h(){}function v(){}function g(){}var m={};l(m,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==t&&a.call(b,c)&&(m=b);var w=g.prototype=h.prototype=Object.create(m);function x(n){["next","throw","return"].forEach((function(r){l(n,r,(function(n){return this._invoke(r,n)}))}))}function _(n,r){function t(o,i,c,s){var u=d(n[o],n,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(n){t("next",n,c,s)}),(function(n){t("throw",n,c,s)})):r.resolve(f).then((function(n){l.value=n,c(l)}),(function(n){return t("throw",n,c,s)}))}s(u.arg)}var o;this._invoke=function(n,e){function a(){return new r((function(r,o){t(n,e,r,o)}))}return o=o?o.then(a,a):a()}}function k(n,r){var t=n.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=void 0,k(n,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var e=d(t,n.iterator,r.arg);if("throw"===e.type)return r.method="throw",r.arg=e.arg,r.delegate=null,p;var o=e.arg;return o?o.done?(r[n.resultName]=o.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function S(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(E,this),this.reset(!0)}function j(n){if(n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var t=-1,e=function r(){for(;++t<n.length;)if(a.call(n,t))return r.value=n[t],r.done=!1,r;return r.value=void 0,r.done=!0,r};return e.next=e}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=g,l(w,"constructor",g),l(g,"constructor",v),v.displayName=l(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,l(n,u,"GeneratorFunction")),n.prototype=Object.create(w),n},r.awrap=function(n){return{__await:n}},x(_.prototype),l(_.prototype,s,(function(){return this})),r.AsyncIterator=_,r.async=function(n,t,e,o,a){void 0===a&&(a=Promise);var i=new _(f(n,t,e,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},x(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=j,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!n)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(n,r){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc<=this.prev&&a.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=n,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),p},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),S(t),p}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;S(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,t){return this.delegate={iterator:j(n),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},r}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},698:n=>{function r(t){return n.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.__esModule=!0,n.exports.default=n.exports,r(t)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},687:(n,r,t)=>{var e=t(61)();n.exports=e;try{regeneratorRuntime=e}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},671:(n,r,t)=>{"use strict";function e(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}t.d(r,{Z:()=>e})},144:(n,r,t)=>{"use strict";function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function o(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}t.d(r,{Z:()=>o})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{"use strict";try{self["workbox:window:6.5.3"]&&_()}catch(n){}function n(n,r){return new Promise((function(t){var e=new MessageChannel;e.port1.onmessage=function(n){t(n.data)},n.postMessage(r,[e.port2])}))}function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function e(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(r,t){n.resolve=r,n.reject=t}))};function a(n,r){var t=location.href;return new URL(n,t).href===new URL(r,t).href}var i=function(n,r){this.type=n,Object.assign(this,r)};function c(n,r,t){return t?r?r(n):n:(n&&n.then||(n=Promise.resolve(n)),r?n.then(r):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,r){if(!r)return n&&n.then?n.then(s):Promise.resolve()}var f=function(r){var t,e;function s(n,t){var e,s;return void 0===t&&(t={}),(e=r.call(this)||this).nn={},e.tn=0,e.rn=new o,e.en=new o,e.on=new o,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,r=n.installing;e.tn>0||!a(r.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=r,n.removeEventListener("updatefound",e.cn)):(e.hn=r,e.an.add(r),e.rn.resolve(r)),++e.tn,r.addEventListener("statechange",e.ln)},e.ln=function(n){var r=e.fn,t=n.target,o=t.state,a=t===e.vn,c={sw:t,isExternal:a,originalEvent:n};!a&&e.mn&&(c.isUpdate=!0),e.dispatchEvent(new i(o,c)),"installed"===o?e.wn=self.setTimeout((function(){"installed"===o&&r.waiting===t&&e.dispatchEvent(new i("waiting",c))}),200):"activating"===o&&(clearTimeout(e.wn),a||e.en.resolve(t))},e.dn=function(n){var r=e.hn,t=r!==navigator.serviceWorker.controller;e.dispatchEvent(new i("controlling",{isExternal:t,originalEvent:n,sw:r,isUpdate:e.mn})),t||e.on.resolve(r)},e.gn=(s=function(n){var r=n.data,t=n.ports,o=n.source;return c(e.getSW(),(function(){e.an.has(o)&&e.dispatchEvent(new i("message",{data:r,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=t,navigator.serviceWorker.addEventListener("message",e.gn),e}e=r,(t=s).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var f,d=s.prototype;return d.register=function(n){var r=(void 0===n?{}:n).immediate,t=void 0!==r&&r;try{var e=this;return function(n,r){var t=n();return t&&t.then?t.then(r):r()}((function(){if(!t&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),c(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var r=e.fn.waiting;return r&&a(r.scriptURL,e.sn.toString())&&(e.hn=r,Promise.resolve().then((function(){e.dispatchEvent(new i("waiting",{sw:r,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(r){try{return c(this.getSW(),(function(t){return n(t,r)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&a(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,r){try{var t=n()}catch(n){return r(n)}return t&&t.then?t.then(void 0,r):t}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(r){return n.un=performance.now(),r}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(s.prototype,f),s}(function(){function n(){this.Pn=new Map}var r=n.prototype;return r.addEventListener=function(n,r){this.Sn(n).add(r)},r.removeEventListener=function(n,r){this.Sn(n).delete(r)},r.dispatchEvent=function(n){n.target=this;for(var r,t=e(this.Sn(n.type));!(r=t()).done;)(0,r.value)(n)},r.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}()),d=t(477),p=(t(256),t(379)),h=t.n(p),v=t(795),g=t.n(v),m=t(569),y=t.n(m),b=t(565),w=t.n(b),x=t(216),k=t.n(x),E=t(589),S=t.n(E),L=t(402),j={};j.styleTagTransform=S(),j.setAttributes=w(),j.insert=y().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=k(),h()(L.Z,j),L.Z&&L.Z.locals&&L.Z.locals;var I,P=document.querySelector("#main");P.innerHTML="",void 0===new d.Z&&((I=document.createElement("div")).classList.add("spinner"),I.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',P.appendChild(I)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();