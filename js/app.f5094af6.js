(function(t){function e(e){for(var n,s,u=e[0],o=e[1],c=e[2],l=0,f=[];l<u.length;l++)s=u[l],a[s]&&f.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var u=i[s];0!==a[u]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a={app:0},r=[];function u(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-bf1f3e84":"f4b53940"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i={"chunk-bf1f3e84":1};s[t]?e.push(s[t]):0!==s[t]&&i[t]&&e.push(s[t]=new Promise(function(e,i){for(var n="css/"+({}[t]||t)+"."+{"chunk-bf1f3e84":"5de7b183"}[t]+".css",a=o.p+n,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var c=r[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===n||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,delete s[t],d.parentNode.removeChild(d),i(r)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){s[t]=0}));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,i){n=a[t]=[e,i]});e.push(n[2]=r);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=u(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var i=a[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,i[1](r)}a[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/gthd/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00d2":function(t,e,i){},"21bb":function(t,e,i){"use strict";var n=i("bcc9"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"uk-navbar-container uk-margin uk-light",attrs:{id:"navbar"}},[i("div",{staticClass:"uk-container"},[i("div",{staticClass:"uk-navbar"},[t._m(0),t._m(1),t.user?i("div",{staticClass:"uk-navbar-center uk-visible@s"},[i("ul",{staticClass:"uk-navbar-nav"},t._l(t.filters,function(e,n){return i("li",{key:n,class:{"uk-active":e.key===t.filter},on:{click:function(i){t.changeFilter(e.key)}}},[i("a",{attrs:{href:"#"}},[t._v(t._s(e.value))])])}),0)]):t._e(),t.user?i("div",{staticClass:"uk-navbar-right uk-visible@s"},[i("div",{staticClass:"uk-navbar-item"},[i("ul",{staticClass:"uk-grid-small uk-grid",attrs:{"uk-grid":""}},[i("li",{staticClass:"uk-first-column"},[i("a",{staticClass:"uk-icon-button uk-icon",attrs:{href:"#","uk-icon":"icon: sign-out"},on:{click:function(e){t.signOut()}}})])])])]):t._e()])])]),i("div",{attrs:{id:"content"}},[i("transition",{attrs:{name:"test"}},[i("router-view")],1)],1),i("div",{attrs:{id:"tile"}}),i("div",{staticClass:"uk-hidden@s",attrs:{id:"side-menu","uk-offcanvas":"overlay: true"}},[i("div",{staticClass:"uk-offcanvas-bar uk-light uk-background-secondary uk-padding-large"},[i("button",{staticClass:"uk-offcanvas-close",attrs:{type:"button","uk-close":""}}),i("div",{staticClass:"uk-flex uk-flex-left uk-flex-column uk-flex-between uk-height-1-1 uk-padding-large"},[i("ul",{staticClass:"uk-nav-primary uk-nav-parent-icon",attrs:{"uk-nav":""}},t._l(t.filters,function(e,n){return i("li",{key:n,class:{"uk-active":e.key===t.filter},on:{click:function(i){t.changeFilter(e.key)}}},[i("a",{attrs:{href:"#"}},[t._v(t._s(e.value))])])}),0),i("button",{staticClass:"uk-button uk-button-default",on:{click:function(e){t.signOut()}}},[t._v("Logout\n          ")])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-navbar-left"},[i("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"#"}},[t._v("Things.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-navbar-right uk-hidden@s"},[i("div",{staticClass:"uk-navbar-item"},[i("ul",{staticClass:"uk-grid-small uk-grid",attrs:{"uk-grid":""}},[i("li",{staticClass:"uk-first-column"},[i("a",{staticClass:"uk-icon-button uk-icon",attrs:{"uk-toggle":"target: #side-menu",href:"#","uk-icon":"icon: menu"}})])])])])}],r=(i("a481"),i("cebc")),u=i("2f62"),o={name:"app",data:function(){return{filters:[{key:"all",value:"All"},{key:"active",value:"Active"},{key:"completed",value:"Completed"}]}},computed:Object(r["a"])({},Object(u["b"])({user:"user",filter:"filter"})),methods:{changeFilter:function(t){this.$store.dispatch("changeFilter",t),this.closeMenu()},signOut:function(){var t=this;this.$store.dispatch("signOut").then(function(e){t.closeMenu(),t.$router.replace("/auth"),UIkit.notification(e,{pos:"top-right",status:"success"})})},closeMenu:function(){UIkit.offcanvas("#side-menu").hide()}},beforeMount:function(){this.user||this.$router.replace("/auth")},watch:{$route:function(t,e){var i=document.getElementById("tile");i.classList.remove("active"),i.classList.add("active"),setTimeout(function(){i.classList.remove("active")},800)}}},c=o,l=(i("5c0b"),i("2877")),f=Object(l["a"])(c,s,a,!1,null,null,null),d=f.exports,h=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home uk-flex uk-flex-column"},[i("div",{staticClass:"uk-section uk-section-default uk-text-left"},[i("div",{staticClass:"uk-container uk-flex uk-flex-between uk-flex-middle"},[i("h1",{staticClass:"uk-h1 uk-margin-remove"},[t._v(t._s(t._f("capitalize")(t.filter))+" things.")]),i("div",{staticClass:"actions"},[i("button",{staticClass:"uk-icon-button uk-button-primary uk-icon smaller-font",attrs:{"uk-icon":"icon: plus"},on:{click:function(e){t.startEditing()}}})])])]),i("div",{staticClass:"uk-section uk-section-muted uk-flex-1"},[i("div",{staticClass:"uk-container"},[i("div",{staticClass:"uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-small uk-grid-match",attrs:{"uk-grid":"","uk-scrollspy":"cls: uk-animation-slide-bottom-small; target: > div > .uk-card; delay: 100; repeat: true"}},t._l(t.things,function(e,n){return i("div",{key:n},[i("div",{staticClass:"uk-card uk-card-default uk-card-body uk-text-left uk-inline-clip uk-transition-toggle"},[i("h3",{staticClass:"uk-card-title"},[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.description))]),e.completed?i("div",{staticClass:"uk-overlay-default uk-position-cover"},[i("div",{staticClass:"uk-position-center"},[t._m(0,!0),i("div",{staticClass:"uk-transition-slide-bottom-small uk-margin"},[i("div",{staticClass:"uk-h4"},[i("ul",{staticClass:"uk-iconnav uk-flex uk-flex-center"},[i("li",{staticClass:"uk-margin-right"},[i("a",{attrs:{href:"#","uk-icon":"icon: trash"},on:{click:function(i){t.removeThing(e.id)}}})]),i("li",[i("a",{attrs:{href:"#","uk-icon":"icon: forward"},on:{click:function(i){t.toggleCompleted(e)}}})])])])])])]):i("div",{staticClass:"uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary"},[i("div",{staticClass:"uk-h4 uk-margin-remove"},[i("ul",{staticClass:"uk-iconnav uk-flex uk-flex-right"},[i("li",{staticClass:"uk-margin-right"},[i("a",{attrs:{href:"#","uk-icon":"icon: trash"},on:{click:function(i){t.removeThing(e.id)}}})]),i("li",{staticClass:"uk-margin-right"},[i("a",{attrs:{href:"#","uk-icon":"icon: file-edit"},on:{click:function(i){t.startEditing(e)}}})]),i("li",[i("a",{attrs:{href:"#","uk-icon":"icon: check"},on:{click:function(i){t.toggleCompleted(e)}}})])])])])])])}),0)])]),i("div",{attrs:{id:"offcanvas-flip","uk-offcanvas":"flip: true; overlay: true; bg-close: false;"}},[i("div",{staticClass:"uk-offcanvas-bar"},[i("button",{staticClass:"uk-offcanvas-close",attrs:{type:"button","uk-close":""},on:{click:function(e){t.cancelEditing()}}}),i("h3",[t._v(t._s(t.editor.heading))]),i("div",{staticClass:"uk-form-stacked uk-margin-medium-top"},[i("div",{staticClass:"uk-margin"},[i("label",{staticClass:"uk-form-label",attrs:{for:"form-horizontal-text"}},[t._v("Title")]),i("div",{staticClass:"uk-form-controls"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.thing.title,expression:"thing.title"}],staticClass:"uk-input",attrs:{id:"form-horizontal-text",type:"text",placeholder:"Thing title"},domProps:{value:t.thing.title},on:{input:function(e){e.target.composing||t.$set(t.thing,"title",e.target.value)}}})])]),i("div",{staticClass:"uk-margin"},[i("label",{staticClass:"uk-form-label",attrs:{for:"form-horizontal-text"}},[t._v("Description")]),i("div",{staticClass:"uk-form-controls"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.thing.description,expression:"thing.description"}],staticClass:"uk-textarea",attrs:{id:"form-horizontal-text",placeholder:"Thing description",rows:"4"},domProps:{value:t.thing.description},on:{input:function(e){e.target.composing||t.$set(t.thing,"description",e.target.value)}}})])]),i("div",{staticClass:"uk-margin-medium-top uk-flex uk-flex-right"},[i("button",{staticClass:"uk-button uk-button-default uk-margin-medium-right uk-width-1-1",on:{click:function(e){t.cancelEditing()}}},[t._v("Cancel")]),i("button",{staticClass:"uk-button uk-button-primary uk-width-1-1",attrs:{disabled:t.saveDisabled},on:{click:function(e){t.saveEditing()}}},[t._v("Submit")])])])])])])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-transition-slide-top-small"},[i("h4",{staticClass:"uk-margin-remove"},[t._v("This thing is completed")])])}],v=i("a4bb"),p=i.n(v),k=(i("ac6a"),i("5176")),b=i.n(k),C={name:"home",data:function(){return{mode:"new",editor:{heading:"Add new thing"},thing:{title:"Vel orci porta non pulvinar.",description:"Pretium fusce id velit ut tortor pretium. Mattis nunc sed blandit libero volutpat. "}}},computed:Object(r["a"])({},Object(u["b"])({filter:"filter",things:"things",user:"user"}),{saveDisabled:function(){return!this.thing.title||!this.thing.description}}),filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},created:function(){this.user&&this.refreshThings()},watch:{mode:{deep:!0,handler:function(t){this.editor.heading="new"===t?"Add new thing":"Edit thing"}}},methods:{refreshThings:function(){this.$store.dispatch("getThings").then(function(t){})},saveEditing:function(){var t=this,e="new"===this.mode?"createThing":"updateThing",i=b()({},this.thing);this.$store.dispatch(e,i).then(function(e){UIkit.notification(e,{pos:"top-right",status:"success"}),t.closeOffcanvas(),t.resetThing()})},startEditing:function(t){t?(this.mode="edit",this.thing=b()({},t)):this.mode="new",this.showOffcanvas()},cancelEditing:function(){this.resetThing(),this.closeOffcanvas()},toggleCompleted:function(t){t.completed=!t.completed,this.$store.dispatch("updateThing",t).then(function(t){UIkit.notification(t,{pos:"top-right",status:"success"})})},removeThing:function(t){this.$store.dispatch("removeThing",t).then(function(t){UIkit.notification(t,{pos:"top-right",status:"success"})})},resetThing:function(){var t=this;p()(this.thing).forEach(function(e){t.thing[e]=""})},showOffcanvas:function(){UIkit.offcanvas("#offcanvas-flip").show()},closeOffcanvas:function(){UIkit.offcanvas("#offcanvas-flip").hide()}}},y=C,T=(i("21bb"),Object(l["a"])(y,m,g,!1,null,null,null)),_=T.exports;n["a"].use(h["a"]);var w=new h["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:_},{path:"/auth",name:"auth",component:function(){return i.e("chunk-bf1f3e84").then(i.bind(null,"2fef"))}}]}),E=(i("20d6"),i("7f7f"),i("6b54"),i("7514"),i("795b")),x=i.n(E),S=i("0e44"),I=i("f499"),O=i.n(I),N=i("3452"),U=i.n(N),A={get:function(t){return JSON.parse(localStorage.getItem(t)||"[]")},set:function(t,e){localStorage.setItem(t,O()(e))}},G={encrypt:function(t){return U.a.enc.Base64.stringify(U.a.HmacSHA256(t,"p8l45ibg0o"))}},P={custom:function(){return"q"+Math.random().toString(36).slice(2,12)}};n["a"].use(u["a"]);var j=new u["a"].Store({plugins:[Object(S["a"])({paths:["user"]})],state:{user:null,users:[],things:[{id:P.custom(),title:"Fringilla urna porttitor rhoncus dolor.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",completed:!1},{id:P.custom(),title:"Lorem donec massa sapien faucibus et molestie ac.",description:"Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.",completed:!1},{id:P.custom(),title:"Elementum curabitur vitae nunc sed.",description:"Luctus accumsan tortor posuere ac ut consequat semper viverra nam.",completed:!0}],filter:"all"},actions:{signinUser:function(t,e){return new x.a(function(i,n){t.dispatch("getUsers").then(function(){var s=t.state.users.find(function(t){return t.username===e.username});if(s){var a=G.encrypt(e.password);s.hash===a?t.commit("SIGNIN",s):n("Wrong credentials"),i(s)}else n("Couldn't find your account, sorry")})})},signupUser:function(t,e){return new x.a(function(i,n){t.dispatch("getUsers").then(function(){var s=t.state.users.find(function(t){return t.username===e.username});if(s)n("Account with same username already exist");else{var a={id:Math.random().toString(36).slice(2,12)};a.name=e.name,a.username=e.username,a.hash=G.encrypt(e.password),t.commit("SIGNUP",a),i("Signup successful")}})})},signOut:function(t){return new x.a(function(e){t.commit("SIGNOUT"),e("See you later.")})},getUsers:function(t){var e=A.get("USERS");t.commit("USERS_UPDATED",e)},getThings:function(t){var e=A.get("THINGS");return new x.a(function(i){t.commit("THINGS_UPDATED",e),i("Things list updated.")})},createThing:function(t,e){var i=b()({},e);return i.id=P.custom(),i.completed=!1,i.user_id=t.state.user.id,new x.a(function(e){t.commit("CREATE_THING",i),e("New thing added to your list.")})},updateThing:function(t,e){return new x.a(function(i){t.commit("UPDATE_THING",e),i("Thing edits saved.")})},removeThing:function(t,e){return new x.a(function(i){t.commit("REMOVE_THING",e),i("Thing removed from your list.")})},changeFilter:function(t,e){var i=["all","active","completed"];i.indexOf(e)<0||t.commit("CHANGE_FILTER",e)}},mutations:{SIGNIN:function(t,e){t.user=e},SIGNUP:function(t,e){t.users.push(e),t.user=e,A.set("USERS",t.users)},SIGNOUT:function(t){t.user=null},USERS_UPDATED:function(t,e){t.users=e},CHANGE_FILTER:function(t,e){t.filter=e},THINGS_UPDATED:function(t,e){t.things=e},CREATE_THING:function(t,e){t.things.unshift(e),A.set("THINGS",t.things)},UPDATE_THING:function(t,e){var i=t.things.findIndex(function(t){return t.id===e.id});t.things.splice(i,1,e),A.set("THINGS",t.things)},REMOVE_THING:function(t,e){var i=t.things.findIndex(function(t){return t.id===e});t.things.splice(i,1),A.set("THINGS",t.things)}},getters:{user:function(t){return t.user},filter:function(t){return t.filter},things:function(t){return t.things.filter(function(e){return!!t.user&&e.user_id===t.user.id}).filter(function(e){return"active"===t.filter?!e.completed:"completed"!==t.filter||e.completed})}}}),$=i("8323"),H=i.n($),D=i("263c"),M=i.n(D);i("00d2");H.a.use(M.a),window.UIkit=H.a,n["a"].config.productionTip=!1,new n["a"]({router:w,store:j,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),s=i.n(n);s.a},"5e27":function(t,e,i){},bcc9:function(t,e,i){}});
//# sourceMappingURL=app.f5094af6.js.map