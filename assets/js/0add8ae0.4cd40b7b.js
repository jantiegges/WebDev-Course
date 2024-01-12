"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[3015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),b=i,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={},l="Aufgabe 3: \xdcberblick Section Setup",o={unversionedId:"einf\xfchrung-in-bootstrap/aufgabe-3-grid-system",id:"einf\xfchrung-in-bootstrap/aufgabe-3-grid-system",title:"Aufgabe 3: \xdcberblick Section Setup",description:"Wir wollen nun die Section mit der id \xfcberblick anpassen. Wir wollen, dass hier ein Text links und ein Bild rechts angezeigt wird. Daf\xfcr verwenden wir die Bootstrap-Klasse row.",source:"@site/docs/4-einf\xfchrung-in-bootstrap/aufgabe-3-grid-system.md",sourceDirName:"4-einf\xfchrung-in-bootstrap",slug:"/einf\xfchrung-in-bootstrap/aufgabe-3-grid-system",permalink:"/WebDev-Course/docs/einf\xfchrung-in-bootstrap/aufgabe-3-grid-system",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 2: Neues Projekt mit Bootstrap",permalink:"/WebDev-Course/docs/einf\xfchrung-in-bootstrap/aufgabe-2-neues-bootstrap-projekt"},next:{title:"Aufgabe 4: \xdcberblick Links",permalink:"/WebDev-Course/docs/einf\xfchrung-in-bootstrap/aufgabe-4-ueberblick-links"}},s={},c=[{value:"index.html",id:"indexhtml",level:4},{value:"style.css",id:"stylecss",level:4}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-3-\xfcberblick-section-setup"},"Aufgabe 3: \xdcberblick Section Setup"),(0,i.kt)("p",null,"Wir wollen nun die Section mit der id ",(0,i.kt)("inlineCode",{parentName:"p"},"\xfcberblick")," anpassen. Wir wollen, dass hier ein Text links und ein Bild rechts angezeigt wird. Daf\xfcr verwenden wir die Bootstrap-Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"row"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"F\xfcge ein neues div mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"row")," ein."),(0,i.kt)("li",{parentName:"ol"},"Innerhalb dieses divs f\xfcge zwei divs mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"col-lg-6")," ein. Das erste div soll zudem die Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"\xfcberblick-links")," haben und das zweite div soll die Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"\xfcberblick-rechts")," haben.")),(0,i.kt)("p",null,"Au\xdferdem wollen wir die Section mit einer bestimmten Farbe versehen. Dazu haben wir ihr bereits die Klasse section-style-2 gegeben. Diese Klasse wollen wir nun mit CSS anpassen."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"F\xfcge in der CSS-Datei eine neue Regel mit dem Selektor ",(0,i.kt)("inlineCode",{parentName:"li"},".section-style-2")," ein."),(0,i.kt)("li",{parentName:"ol"},"Konfiguriere die Hintergrundfarbe (z.B. auf ",(0,i.kt)("inlineCode",{parentName:"li"},"#E7AB9A"),") und die Textfarbe (z.B. auf ",(0,i.kt)("inlineCode",{parentName:"li"},"white"),") der Section.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung"),(0,i.kt)("h4",{id:"indexhtml"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section class="section-style-2" id="\xfcberblick">\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-lg-6 \xfcberblick-links"></div>\n      <div class="col-lg-6 \xfcberblick-rechts"></div>\n    </div>\n  </div>\n</section>\n')),(0,i.kt)("h4",{id:"stylecss"},"style.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".section-style-2 {\n  background-color: #e7ab9a;\n  color: white;\n}\n"))))}p.isMDXComponent=!0}}]);