(function(){"use strict";var e={441:function(e,t,n){var r=n(144),a=n(998),o=n(6072),i=n(6190),s=n(4324),u=n(3059),c=n(3687),l=function(){var e=this,t=e._self._c;return t(a.Z,[t(o.Z,{attrs:{app:"",color:"green",dark:""}},[t("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[t("div",{staticClass:"d-flex align-center"},[t(s.Z,{staticClass:"ma-3",attrs:{"x-large":""}},[e._v("mdi-badge-account-horizontal")]),t("h1",{staticClass:"ma-3 white--text"},[e._v("Employee Tracker")])],1)]),t(c.Z),t(i.Z,{staticClass:"mx-2",attrs:{to:"/tracker",text:""}},[t("span",{staticClass:"mx-2"},[e._v("Employees")])]),t(i.Z,{staticClass:"mx-2",attrs:{to:"/about-contact",text:""}},[t("span",{staticClass:"mx-2"},[e._v("About/Contact")])])],1),t(u.Z,[t("router-view",{key:e.$route.fullPath})],1)],1)},d=[],f={name:"App",data:()=>({})},p=f,m=n(1001),h=(0,m.Z)(p,l,d,!1,null,null,null),v=h.exports,g=n(1705);r.ZP.use(g.Z);var b=new g.Z({}),y=n(8345),w=n(9582),k=n(266),C=n(2118),Z=n(5125),_=n(1713),x=n(7808),A=function(){var e=this,t=e._self._c;return t(C.Z,[t(_.Z,{staticClass:"my-5"},[t(k.Z,{staticClass:"ma-5",attrs:{cols:"12"}},[t("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Login ")]),t(_.Z,{staticClass:"ma-5"},[t(w.Z,{attrs:{elevation:"2",width:"90%"}},[t(Z.Z,{ref:"form",staticClass:"ma-5 pa-5",on:{submit:function(t){return t.preventDefault(),e.search.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(x.Z,{attrs:{counter:10,rules:e.rules.username,label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t(x.Z,{attrs:{"append-icon":e.visible?"mdi-eye":"mdi-eye-off",rules:e.rules.password,type:e.visible?"text":"password",label:"Password",hint:"At least 3 characters",counter:"",required:""},on:{"click:append":function(t){e.visible=!e.visible}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(i.Z,{staticClass:"mt-3 mr-4",attrs:{disabled:!e.valid,type:"submit",color:"success"}},[e._v(" Submit ")])],1)],1)],1)],1)],1)],1)},O=[],S=(n(7658),{name:"HomeView",data:()=>({valid:!1,visible:!1,username:"",password:"",rules:{username:[e=>!!e||"You must enter your username",e=>!(e.trim().length<3||e.trim().length>10)||"You must enter your username"],password:[e=>!!e||"You must enter a valid password",e=>!(e.trim().length<3)||"You must enter a valid password"]}}),methods:{search(){this.$refs.form.validate(),this.valid&&L.push({name:"tracker"})}}}),P=S,E=(0,m.Z)(P,A,O,!1,null,null,null),j=E.exports;r.ZP.use(y.Z);const T=[{path:"/",name:"home",component:j},{path:"/tracker",name:"tracker",meta:{requiresAuth:!0},component:()=>Promise.all([n.e(499),n.e(942)]).then(n.bind(n,9942))},{path:"/about-contact",name:"about-contact",component:()=>Promise.all([n.e(499),n.e(856)]).then(n.bind(n,7856))},{path:"/:catchAll(.*)",name:"404",component:j}],N=new y.Z({mode:"history",base:"/",routes:T});N.beforeEach((async(e,t,n)=>{let r=N.app||{isAuthenticated:!1};r.isAuthenticated?n():e.matched.some((e=>e.meta.requiresAuth))?r.authenticate(e.path).then((()=>{console.log("authenticating a protected url: ",e.path),n()})):n()}));var L=N,q=n(4671),U=n.n(q),F=new(U().UserManager)({authority:"https://localhost:5001",client_id:"js",redirect_uri:"https://localhost:8080/callback",response_type:"id_token token",scope:"openid profile trackerApi",post_logout_redirect_uri:"https://localhost:8080",userStore:new(U().WebStorageStateStore)({store:window.localStorage})});U().Log.logger=console,U().Log.level=U().Log.INFO;var $=F;r.ZP.config.productionTip=!1;const B={isAuthenticated:!1,user:"",mgr:$},I={async authenticate(e){const t=await this.$root.getUser();t?(this.isAuthenticated=!0,this.user=t):await this.$root.signIn(e)},async getUser(){try{let e=await this.mgr.getUser();return e}catch(e){console.log(e)}},signIn(e){e?this.mgr.signinRedirect({state:e}):this.mgr.signinRedirect()}};new r.ZP({vuetify:b,router:L,data:B,methods:I,render:e=>e(v)}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{499:"2c9c4c9e",856:"dc3fb32d",942:"6721993c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{856:"dd344aa9",942:"cb29df4b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="employee-tracker:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode&&o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,null,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={856:1,942:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkemployee_tracker"]=self["webpackChunkemployee_tracker"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(441)}));r=n.O(r)})();
//# sourceMappingURL=app.5452db9a.js.map