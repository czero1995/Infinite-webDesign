webpackJsonp([1],{"7HVS":function(t,e){},KskE:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),i=r("Ug5s"),a=r("NYxO"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c="",u={data:function(){return{mainarea:!1,slidename:"slide-back"}},components:{Footers:i.a},computed:s({},Object(a.mapGetters)(["this.$store.state.login"])),mounted:function(){},methods:s({signOut:function(){var t=this;this.$modelBox.onModelBox({title:"提示",content:"确定退出登陆",cancelBtn:!0}).then(function(){var e=function(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}(o.a.mark(function e(r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$toastBox.showToastBox({toast:"退出登陆"}),t.setLogin(!1);case 2:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(){t.$toastBox.showToastBox({toast:"取消退出"})})}},Object(a.mapMutations)({setLogin:"SET_LOGIN"})),activated:function(){this.mainarea=!0,this.slidename="/index"==c||"/"==c||"/hot"==c?"slide-go":"slide-back"},deactivated:function(){this.mainarea=!1},beforeRouteEnter:function(t,e,r){c=e.path,r()}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page member"},[n("transition",{attrs:{name:t.slidename}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mainarea,expression:"mainarea"}],staticClass:"container"},[n("div",{staticClass:"member_bgfilter"}),t._v(" "),t.$store.state.login?n("div",{staticClass:"member_userinfo"},[n("div",{staticClass:"member_userinfo--avatar"},[n("img",{attrs:{src:r("2Rdd")}})]),t._v(" "),n("div",{staticClass:"member_userinfo--username"},[t._v("\n            "+t._s(t.$store.state.userinfo.nickname)+"\n        ")])]):t._e(),t._v(" "),t.$store.state.login?t._e():n("div",{staticClass:"member_userinfo"},[n("router-link",{staticClass:"member_userinfo--username",attrs:{tag:"div",to:"./login"}},[t._v("\n            请登录!\n        ")])],1),t._v(" "),n("div",{staticClass:"member_item"},[n("router-link",{staticClass:"member_item--collect flex_between",attrs:{tag:"div",to:"./collect"}},[n("span",[t._v("我的收藏")]),t._v(" "),n("span",{staticClass:"iconfont member_icon"},[t._v("")])]),t._v(" "),n("router-link",{staticClass:"member_item--protocol flex_between",attrs:{tag:"div",to:"./agreement"}},[n("span",[t._v("用户协议")]),t._v(" "),n("span",{staticClass:"iconfont member_icon"},[t._v("")])]),t._v(" "),n("router-link",{staticClass:"member_item--about flex_between",attrs:{tag:"div",to:"./about"}},[n("span",[t._v("关于我们")]),t._v(" "),n("span",{staticClass:"iconfont member_icon"},[t._v("")])]),t._v(" "),t.$store.state.login?n("div",{staticClass:"member_item--about flex_between",on:{click:t.signOut}},[n("span",[t._v("退出登录")])]):t._e()],1)])]),t._v(" "),n("footers",{ref:"footer",attrs:{urlRouter:t.$route.path}})],1)},staticRenderFns:[]},f=r("VU/8")(u,l,!1,function(t){r("7HVS")},"data-v-0ed16328",null);e.default=f.exports},SldL:function(t,e){!function(e){"use strict";function r(t,e,r,i){var a=e&&e.prototype instanceof o?e:o,s=Object.create(a.prototype),c=new h(i||[]);return s._invoke=function(t,e,r){var o=E;return function(i,a){if(o===j)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return p()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=u(s,r);if(c){if(c===C)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===E)throw o=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=j;var l=n(t,e,r);if("normal"===l.type){if(o=r.done?k:O,l.arg===C)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=k,r.method="throw",r.arg=l.arg)}}}(t,r,c),s}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,i,a){var s=n(t[r],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&y.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}var r;this._invoke=function(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}}function u(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,u(t,e),"throw"===e.method))return C;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,C;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,C):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,C)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function v(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:p}}function p(){return{value:m,done:!0}}var m,d=Object.prototype,y=d.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},_=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",b=g.toStringTag||"@@toStringTag",x="object"==typeof t,L=e.regeneratorRuntime;if(L)x&&(t.exports=L);else{(L=e.regeneratorRuntime=x?t.exports:{}).wrap=r;var E="suspendedStart",O="suspendedYield",j="executing",k="completed",C={},R={};R[_]=function(){return this};var N=Object.getPrototypeOf,P=N&&N(N(v([])));P&&P!==d&&y.call(P,_)&&(R=P);var F=a.prototype=o.prototype=Object.create(R);i.prototype=F.constructor=a,a.constructor=i,a[b]=i.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(F),t},L.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[w]=function(){return this},L.AsyncIterator=c,L.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(F),F[b]="Generator",F[_]=function(){return this},F.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=v,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),s=y.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,C):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),C},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),f(r),C}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;f(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:v(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),C}}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}});