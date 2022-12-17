function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */function p(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}function r(f,g,h,d){var a=g&&g.prototype instanceof u?g:u,b=Object.create(a.prototype),c=new C(d||[]);return G(b,"_invoke",{value:z(f,h,c)}),b}function t(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function u(){}function v(){}function w(){}function x(a){["next","throw","return"].forEach(function(b){p(a,b,function(c){return this._invoke(b,c)})})}function y(g,h){function j(a,b,f,i){var c=t(g[a],g,b);if("throw"!==c.type){var d=c.arg,k=d.value;return k&&"object"==_typeof(k)&&F.call(k,"__await")?h.resolve(k.__await).then(function(a){j("next",a,f,i)},function(a){j("throw",a,f,i)}):h.resolve(k).then(function(a){d.value=a,f(d)},function(a){return j("throw",a,f,i)})}i(c.arg)}var a;G(this,"_invoke",{value:function value(b,c){function e(){return new h(function(e,d){j(b,c,e,d)})}return a=a?a.then(e,e):e()}})}function z(b,d,e){var c="suspendedStart";return function(a,f){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===a)throw f;return D()}for(e.method=a,e.arg=f;;){var g=e.delegate;if(g){var i=A(g,e);if(i){if(i===h)continue;return i}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===c)throw c="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);c="executing";var k=t(b,d,e);if("normal"===k.type){if(c=e.done?"completed":"suspendedYield",k.arg===h)continue;return{value:k.arg,done:e.done}}"throw"===k.type&&(c="completed",e.method="throw",e.arg=k.arg)}}}function A(e,f){var g=f.method,c=e.iterator[g];if(void 0===c)return f.delegate=null,"throw"===g&&e.iterator["return"]&&(f.method="return",f.arg=void 0,A(e,f),"throw"===f.method)||"return"!==g&&(f.method="throw",f.arg=new TypeError("The iterator does not provide a '"+g+"' method")),h;var a=t(c,e.iterator,f.arg);if("throw"===a.type)return f.method="throw",f.arg=a.arg,f.delegate=null,h;var b=a.arg;return b?b.done?(f[e.resultName]=b.value,f.next=e.nextLoc,"return"!==f.method&&(f.method="next",f.arg=void 0),f.delegate=null,h):b:(f.method="throw",f.arg=new TypeError("iterator result is not an object"),f.delegate=null,h)}function c(c){var a={tryLoc:c[0]};1 in c&&(a.catchLoc=c[1]),2 in c&&(a.finallyLoc=c[2],a.afterLoc=c[3]),this.tryEntries.push(a)}function B(c){var a=c.completion||{};a.type="normal",delete a.arg,c.completion=a}function C(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(c,this),this.reset(!0)}function a(g){if(g){var a=g[e];if(a)return a.call(g);if("function"==typeof g.next)return g;if(!isNaN(g.length)){var b=-1,f=function c(){for(;++b<g.length;)if(F.call(g,b))return c.value=g[b],c.done=!1,c;return c.value=void 0,c.done=!0,c};return f.next=f}}return{next:D}}function D(){return{value:void 0,done:!0}}_regeneratorRuntime=function(){return E};var E={},b=Object.prototype,F=b.hasOwnProperty,G=Object.defineProperty||function(a,b,c){a[b]=c.value},d="function"==typeof Symbol?Symbol:{},e=d.iterator||"@@iterator",f=d.asyncIterator||"@@asyncIterator",g=d.toStringTag||"@@toStringTag";try{p({},"")}catch(b){p=function(d,b,c){return d[b]=c}}E.wrap=r;var h={},i={};p(i,e,function(){return this});var j=Object.getPrototypeOf,k=j&&j(j(a([])));k&&k!==b&&F.call(k,e)&&(i=k);var l=w.prototype=u.prototype=Object.create(i);return v.prototype=w,G(l,"constructor",{value:w,configurable:!0}),G(w,"constructor",{value:v,configurable:!0}),v.displayName=p(w,g,"GeneratorFunction"),E.isGeneratorFunction=function(c){var a="function"==typeof c&&c.constructor;return!!a&&(a===v||"GeneratorFunction"===(a.displayName||a.name))},E.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,w):(b.__proto__=w,p(b,g,"GeneratorFunction")),b.prototype=Object.create(l),b},E.awrap=function(a){return{__await:a}},x(y.prototype),p(y.prototype,f,function(){return this}),E.AsyncIterator=y,E.async=function(d,e,f,b,a){void 0===a&&(a=Promise);var g=new y(r(d,e,f,b),a);return E.isGeneratorFunction(e)?g:g.next().then(function(a){return a.done?a.value:g.next()})},x(l),p(l,g,"Generator"),p(l,e,function(){return this}),p(l,"toString",function(){return"[object Generator]"}),E.keys=function(b){var e=Object(b),f=[];for(var a in e)f.push(a);return f.reverse(),function c(){for(;f.length;){var a=f.pop();if(a in e)return c.value=a,c.done=!1,c}return c.done=!0,c}},E.values=a,C.prototype={constructor:C,reset:function reset(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!a)for(var b in this)"t"===b.charAt(0)&&F.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function stop(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function dispatchException(a){function b(b,d){return h.type="throw",h.arg=a,g.next=b,d&&(g.method="next",g.arg=void 0),!!d}if(this.done)throw a;for(var g=this,c=this.tryEntries.length-1;0<=c;--c){var d=this.tryEntries[c],h=d.completion;if("root"===d.tryLoc)return b("end");if(d.tryLoc<=this.prev){var i=F.call(d,"catchLoc"),j=F.call(d,"finallyLoc");if(i&&j){if(this.prev<d.catchLoc)return b(d.catchLoc,!0);if(this.prev<d.finallyLoc)return b(d.finallyLoc)}else if(!i){if(!j)throw new Error("try statement without catch or finally");if(this.prev<d.finallyLoc)return b(d.finallyLoc)}else if(this.prev<d.catchLoc)return b(d.catchLoc,!0)}}},abrupt:function abrupt(a,b){for(var c,e=this.tryEntries.length-1;0<=e;--e)if(c=this.tryEntries[e],c.tryLoc<=this.prev&&F.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var f=c;break}f&&("break"===a||"continue"===a)&&f.tryLoc<=b&&b<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=a,g.arg=b,f?(this.method="next",this.next=f.finallyLoc,h):this.complete(g)},complete:function complete(c,a){if("throw"===c.type)throw c.arg;return"break"===c.type||"continue"===c.type?this.next=c.arg:"return"===c.type?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):"normal"===c.type&&a&&(this.next=a),h},finish:function finish(a){for(var b,d=this.tryEntries.length-1;0<=d;--d)if(b=this.tryEntries[d],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),B(b),h},catch:function _catch(a){for(var b,d=this.tryEntries.length-1;0<=d;--d)if(b=this.tryEntries[d],b.tryLoc===a){var e=b.completion;if("throw"===e.type){var f=e.arg;B(b)}return f}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(b,e,c){return this.delegate={iterator:a(b),resultName:e,nextLoc:c},"next"===this.method&&(this.arg=void 0),h}},E}function asyncGeneratorStep(g,h,i,j,a,b,c){try{var d=g[b](c),e=d.value}catch(b){return void i(b)}d.done?h(e):Promise.resolve(e).then(j,a)}function _asyncToGenerator(a){return function(){var b=this,f=arguments;return new Promise(function(g,h){function i(a){asyncGeneratorStep(d,g,h,i,c,"next",a)}function c(a){asyncGeneratorStep(d,g,h,i,c,"throw",a)}var d=a.apply(b,f);i(void 0)})}}function _createForOfIteratorHelper(a,d){var e="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=_unsupportedIterableToArray(a))||d&&a&&"number"==typeof a.length){e&&(a=e);var g=0,h=function(){};return{s:h,n:function(){return g>=a.length?{done:!0}:{done:!1,value:a[g++]}},e:function e(a){throw a},f:h}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,j=!0,l=!1;return{s:function s(){e=e.call(a)},n:function(){var a=e.next();return j=a.done,a},e:function e(a){l=!0,i=a},f:function b(){try{j||null==e["return"]||e["return"]()}finally{if(l)throw b}}}}function _slicedToArray(c,a){return _arrayWithHoles(c)||_iterableToArrayLimit(c,a)||_unsupportedIterableToArray(c,a)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(c,a){(null==a||a>c.length)&&(a=c.length);for(var d=0,e=Array(a);d<a;d++)e[d]=c[d];return e}function _iterableToArrayLimit(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var e,f,g,i,k=[],o=!0,p=!1;try{if(g=(c=c.call(a)).next,0===b){if(Object(c)!==c)return;o=!1}else for(;!(o=(e=g.call(c)).done)&&(k.push(e.value),k.length!==b);o=!0);}catch(a){p=!0,f=a}finally{try{if(!o&&null!=c["return"]&&(i=c["return"](),Object(i)!==i))return}finally{if(p)throw f}}return k}}function _arrayWithHoles(a){if(Array.isArray(a))return a}export var html=document.documentElement,body=document.body,head=document.head;export function select(a){return document.querySelector(a)}export function selectTout(a){return Array.from(document.querySelectorAll(a))}export function creer(b){for(var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=document.createElement(b),e=0,h=Object.entries(c);e<h.length;e++){var f=_slicedToArray(h[e],2),i=f[0],j=f[1];d.setAttribute(i,j)}return d}export function modifAttrib(c,d){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},f=["add","sup"];if(d===f[0])for(var a=0,i=Object.entries(e);a<i.length;a++){var g=_slicedToArray(i[a],2),j=g[0],l=g[1];c.setAttribute(j,l)}else if(d===f[1])for(var m=0,o=Object.entries(e);m<o.length;m++){var r=_slicedToArray(o[m],1),s=r[0];c.removeAttribute(s)}}export function modifClass(b,c,d){var e=["add","sup","tog"];c===e[0]?b.classList.add(d):c===e[1]?b.classList.remove(d):c===e[2]&&b.classList.toggle(d)}export function recupAttrib(d){var a,f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],e=[],g=_createForOfIteratorHelper(f);try{for(g.s();!(a=g.n()).done;){var h=a.value;e.push({nom:h,valeur:d.getAttribute(h)})}}catch(a){g.e(a)}finally{g.f()}return e}export function style(a){for(var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=0,g=Object.entries(b);c<g.length;c++){var e=_slicedToArray(g[c],2),h=e[0],i=e[1];a.style[h]=i}}export function aller(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;c.scroll(b.offsetLeft-d,b.offsetTop-e)}export function melange(d){for(var a,f=Math.floor,c="",g=0;g<d.length;g++)a=f(Math.random()*d.length),c+=d[a];return c}export function incipit(a){return a.match("\\w+")}export function hasard(c){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*c+a)}export function action(b,c,d){var e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};b.addEventListener(c,d,e)}export function requete(){return _requete.apply(this,arguments)}function _requete(){return _requete=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function a(c){var d;return _regeneratorRuntime().wrap(function b(a){for(;1;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c;case 3:return d=a.sent,a.abrupt("return",d.json());case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop();}},a,null,[[0,7]])})),_requete.apply(this,arguments)}