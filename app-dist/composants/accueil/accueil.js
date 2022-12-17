function _createForOfIteratorHelper(a,d){var e="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=_unsupportedIterableToArray(a))||d&&a&&"number"==typeof a.length){e&&(a=e);var g=0,h=function(){};return{s:h,n:function(){return g>=a.length?{done:!0}:{done:!1,value:a[g++]}},e:function e(a){throw a},f:h}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,j=!0,l=!1;return{s:function s(){e=e.call(a)},n:function(){var a=e.next();return j=a.done,a},e:function e(a){l=!0,i=a},f:function b(){try{j||null==e["return"]||e["return"]()}finally{if(l)throw b}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(c,a){(null==a||a>c.length)&&(a=c.length);for(var d=0,e=Array(a);d<a;d++)e[d]=c[d];return e}import{action,aller,creer,hasard,modifClass,recupAttrib,select,selectTout}from"../../app-src/js/reset.js";export default function accueil(){function d(){var b,g=select("#nav-site"),e=selectTout("#nav-site button"),c=_createForOfIteratorHelper(e);try{var d=function c(){var d=b.value;action(d,"click",function(){var c=recupAttrib(d,["data-nav"]),a=select("#".concat(c[0].valeur));aller(a,window,0,g.offsetHeight)})};for(c.s();!(b=c.n()).done;)d()}catch(a){c.e(a)}finally{c.f()}}function e(){l.textContent=C,m.value=""}function h(){m.disabled=!0,setTimeout(function(){location.assign("")},1e3)}function i(){var a=y>K?"\uD83D\uDE0A":"\uD83D\uDE10";E.textContent=M,v.textContent="".concat(a," : ").concat(y),w.textContent="\uD83E\uDD16 : ".concat(K)}function j(d){for(var a,f=[select("#shi-bot"),select("#shi-joueur"),select("#shi-score")],c=0,g=f;c<g.length;c++)a=g[c],d.matches?modifClass(a,"add","colonne"):modifClass(a,"sup","colonne")}function k(){Q.textContent=G,P.textContent="Joueur X : ".concat(T),S.textContent="Joueur O : ".concat(U)}function q(d){for(var a,f=[select("#morp-score")],c=0,g=f;c<g.length;c++)a=g[c],d.matches?modifClass(a,"add","colonne"):modifClass(a,"sup","colonne")}function b(){setTimeout(function(){W=!0,G="\u270C\uFE0F",$.map(function(a){return a=""}),ga.map(function(a){return a.textContent=""}),k()},1e3)}var r=matchMedia("(min-width:40rem)");d(),r.addEventListener("change",function(){d(),j(r),q(r)});var a,s=selectTout(".reset"),f=_createForOfIteratorHelper(s);try{for(f.s();!(a=f.n()).done;){var t=a.value;action(t,"click",function(){location.assign("")})}}catch(a){f.e(a)}finally{f.f()}var u=select("#copyright"),A=new Date;u.textContent="Tout droit r\xE9serv\xE9 \xA9 ".concat(A.getFullYear());var B=select("#dev-jeu"),l=select("#dev-info"),m=select("#dev-choix"),n=hasard(101),o=10,C="Vous devez deviner un nombre entre 0 et 100, Vous avez droit \xE0 ".concat(o," tentatives.");e(),action(B,"submit",function(c){c.preventDefault();var a=parseInt(null===m||void 0===m?void 0:m.value);return isNaN(a)||0>a||100<a?(C="Vous devez choisir un nombre entre 0 et 100 \uD83D\uDC40",void e()):void(a===n?(C="Bravo \uD83D\uDE0A ! Vous avez trouv\xE9 ".concat(n,"."),h()):a!==n&&1===o?(C="Dommage \uD83D\uDE22 ! Il fallait trouver ".concat(n,"."),h()):a<n?(o--,C="".concat(a," est trop petit. Il vous reste ").concat(o," tentatives \u270A")):a>n&&(o--,C="".concat(a," est trop grand. Il vous reste ").concat(o," tentatives \u270A")),e(),m.focus())});var F=select("#shi-bot-choix"),E=select("#shi-info p"),I=select("#shi-joueur-choix"),J=select("#shi-choix"),v=select("#shi-score-joueur"),w=select("#shi-score-bot"),x=["\u270A","\u270B","\u270C\uFE0F"],y=0,K=0,M="\uD83C\uDF40";j(r),i(),action(J,"click",function(b){var c=b.target;if(c.dataset.choix){var e=parseInt(c.dataset.choix),d=hasard(3);I.textContent=x[e],F.textContent=x[d],0===e&&2===d||1===e&&0===d||2===e&&1===d?(M="Gagn\xE9 !",y++):2===e&&0===d||0===e&&1===d||1===e&&2===d?(M="Perdu !",K++):M="\xC9galit\xE9."}i()});for(var N,O=select("#morp-grille"),Q=select("#morp-info"),P=select("#morp-scoreX"),S=select("#morp-scoreO"),G="\u270C\uFE0F",T=0,U=0,V=!1,W=!0,X="",$=["","","","","","","","",""],fa=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],Y=0;Y<$.length;Y++)N=creer("div",{class:"morp-case flex",id:"morp-case-".concat(Y)}),O.append(N);var ga=selectTout(".morp-case");q(r),k(),action(O,"click",function(h){var c=h.target;if(c.classList.contains("morp-case")){var d=select("#".concat(c.id));if(""!==d.textContent||!W)return;V=!V,X=!0==V?"X":"O",d.textContent=X;for(var e=0;e<$.length;e++)$[e]=ga[e].textContent}var j,l=_createForOfIteratorHelper(fa);try{for(l.s();!(j=l.n()).done;){var g=j.value;$[g[0]]&&$[g[0]]===$[g[1]]&&$[g[0]]===$[g[2]]&&(W=!1,"X"===X?T++:U++,G="Joueur ".concat(X," \xE0 gagn\xE9 !"),b())}}catch(a){l.e(a)}finally{l.f()}!$.includes("")&&W&&(G="\uD83E\uDD71",b()),k()})}