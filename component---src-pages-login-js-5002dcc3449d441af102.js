(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(t,e,r){"use strict";r.r(e);r(26),r(5),r(15);var n=r(260),a=r.n(n),o=(r(258),r(2)),i=r.n(o),c=r(256),u=r(252);function l(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function i(t){l(o,n,a,i,c,"next",t)}function c(t){l(o,n,a,i,c,"throw",t)}i(void 0)})}}var h=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={login:!0,email:"",password:"",name:""},e._confirm=s(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)})),e._saveUserData=function(t){},e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this,e=this.state,r=e.login,n=e.email,a=e.password,o=e.name;return i.a.createElement(c.a,null,i.a.createElement("h4",{className:"mv3"},r?"Login":"Sign Up"),i.a.createElement("div",{className:"flex flex-column"},!r&&i.a.createElement("input",{value:o,onChange:function(e){return t.setState({name:e.target.value})},type:"text",placeholder:"Your name"}),i.a.createElement("input",{value:n,onChange:function(e){return t.setState({email:e.target.value})},type:"text",placeholder:"Your email address"}),i.a.createElement("input",{value:a,onChange:function(e){return t.setState({password:e.target.value})},type:"password",placeholder:"Choose a safe password"})),i.a.createElement("div",{className:"flex mt3"},i.a.createElement(u.a,{to:"/home"},"Login"),i.a.createElement("div",{className:"pointer button",onClick:function(){return t.setState({login:!r})}},r?"need to create an account?":"already have an account?")))},n}(o.Component);e.default=h},251:function(t,e,r){var n;t.exports=(n=r(254))&&n.default||n},252:function(t,e,r){"use strict";var n=r(2),a=r.n(n),o=r(102),i=r.n(o);r.d(e,"a",function(){return i.a});r(251),r(32).default.enqueue,a.a.createContext({})},253:function(t){t.exports={data:{site:{siteMetadata:{title:"Apollo HackerNews"}}}}},254:function(t,e,r){"use strict";r.r(e);r(34);var n=r(2),a=r.n(n),o=r(130);e.default=function(t){var e=t.location,r=t.pageResources;return r?a.a.createElement(o.a,Object.assign({location:e,pageResources:r},r.json)):null}},256:function(t,e,r){"use strict";var n=r(253),a=r(2),o=r.n(a),i=r(252),c=r(255),u=c.a.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1yg5ab7-0"})(["background:orange;margin-bottom:1.45rem;"]),l=c.a.div.withConfig({displayName:"Header__Div",componentId:"sc-1yg5ab7-1"})(["margin:0 auto;max-width:960;padding:1.45rem 1.0875rem;"]),s=c.a.h1.withConfig({displayName:"Header__H1",componentId:"sc-1yg5ab7-2"})(["margin:0;"]),h=c.a.h4.withConfig({displayName:"Header__H4",componentId:"sc-1yg5ab7-3"})(["margin:0;"]),f=Object(c.a)(i.a).withConfig({displayName:"Header__StyledLink",componentId:"sc-1yg5ab7-4"})(["color:white;text-decoration:none;"]),p=function(t){var e=t.siteTitle;return o.a.createElement(u,null,o.a.createElement(l,null,o.a.createElement(s,{style:{margin:0}},o.a.createElement(f,{to:"/"},e)),o.a.createElement(f,{to:"/CreateLink/"},o.a.createElement(h,null,"NEW POST ",o.a.createElement("span",null," ✏️"))),o.a.createElement(f,{to:"/search/"},o.a.createElement(h,null,"Search ",o.a.createElement("span",null," 🔎")))))};p.defaultProps={siteTitle:""};var m=p;r(257),e.a=function(t){var e=t.children,r=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{siteTitle:r.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,e),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},258:function(t,e,r){r(7),r(8),r(42),r(45),r(26),r(5),r(103),r(15),r(16),r(38),r(37),r(27);var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n=s;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function d(){}function y(){}function v(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==r&&n.call(E,o)&&(g=E);var x=v.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,a){function o(){return new Promise(function(e,o){!function e(r,a,o,i){var c=l(t[r],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){u.value=t,o(u)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,a,e,o)})}return e=e?e.then(o,o):o()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a){var o=new L(u(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},b(x),x[c]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},260:function(t,e,r){t.exports=r(258)}}]);
//# sourceMappingURL=component---src-pages-login-js-5002dcc3449d441af102.js.map