"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),b=i,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||l;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=b;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const l={},a="Aufgabe 5: \xdcberblick Rechts",s={unversionedId:"einf\xfchrung-in-bootstrap/aufgabe-5-ueberblick-rechts",id:"einf\xfchrung-in-bootstrap/aufgabe-5-ueberblick-rechts",title:"Aufgabe 5: \xdcberblick Rechts",description:"1. Erstelle einen Ordner names images im Projektordner.",source:"@site/docs/4-einf\xfchrung-in-bootstrap/aufgabe-5-ueberblick-rechts.md",sourceDirName:"4-einf\xfchrung-in-bootstrap",slug:"/einf\xfchrung-in-bootstrap/aufgabe-5-ueberblick-rechts",permalink:"/WebDev-Course/docs/einf\xfchrung-in-bootstrap/aufgabe-5-ueberblick-rechts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 4: \xdcberblick Links",permalink:"/WebDev-Course/docs/einf\xfchrung-in-bootstrap/aufgabe-4-ueberblick-links"},next:{title:"5. Vertiefung in Bootstrap 1",permalink:"/WebDev-Course/docs/vertiefung-in-bootstrap-1/"}},o={},c=[{value:"index.html",id:"indexhtml",level:4},{value:"styles.css",id:"stylescss",level:4}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-5-\xfcberblick-rechts"},"Aufgabe 5: \xdcberblick Rechts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstelle einen Ordner names ",(0,i.kt)("inlineCode",{parentName:"li"},"images")," im Projektordner."),(0,i.kt)("li",{parentName:"ol"},"F\xfcge ein Bild in den Ordner ",(0,i.kt)("inlineCode",{parentName:"li"},"images")," ein."),(0,i.kt)("li",{parentName:"ol"},"F\xfcge das Bild in den \xfcberblick-rechts Bereich ein. (Hinweis: Du kannst das Bild mit dem Tag ",(0,i.kt)("inlineCode",{parentName:"li"},"img")," einf\xfcgen. Die Quelle des Bildes kannst du mit dem Attribut ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," angeben.)"),(0,i.kt)("li",{parentName:"ol"},"Gebe dem Bild die Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"app-bild"),".")),(0,i.kt)("p",null,"Das Bild ist nun zwar da, aber es etwas zu gro\xdf. Wir wollen es nun auf die richtige Gr\xf6\xdfe bringen. Au\xdferdem wollen wir die Ecken des Bildes abrunden."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"F\xfcge in der CSS-Datei eine neue Regel mit dem Selektor ",(0,i.kt)("inlineCode",{parentName:"li"},".app-bild")," ein."),(0,i.kt)("li",{parentName:"ol"},"Konfiguriere die Breite (z.B. auf ",(0,i.kt)("inlineCode",{parentName:"li"},"80%"),")."),(0,i.kt)("li",{parentName:"ol"},"Runde die Ecken des Bildes ab. Dies kannst du mit dem Attribut ",(0,i.kt)("inlineCode",{parentName:"li"},"border-radius")," tun. Den Wert kannst du frei w\xe4hlen. (z.B. auf ",(0,i.kt)("inlineCode",{parentName:"li"},"5%"),")")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Endl\xf6sung"),(0,i.kt)("h4",{id:"indexhtml"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section class="section-style-2" id="\xfcberblick">\n    <div class="container-fluid">\n        \x3c!-- Wir wollen, dass der Text links und das Bild rechts angezeigt wird. Daf\xfcr verwenden wir die Bootstrap-Klasse "row" --\x3e\n        <div class="row">\n            <div class="col-lg-6 \xfcberblick-links">\n                \x3c!-- Hier spezifizieren wir den Titel und die Beschreibung unserer App --\x3e\n                <h1 class="grosser-titel">Die neue Super-Duper-App</h1>\n                <h3 class="kleiner-titel">\n                    Dies ist eine lange Beschreibung meiner App und warum sie so toll ist\n                </h3>\n                \x3c!-- Hier spezifizieren wir den Button, der den Nutzer zu unserer App weiterleitet --\x3e\n                <button type="button" class="btn btn-dark btn-lg">\n                    Probier es aus!\n                </button>\n            </div>\n            \x3c!-- Hier spezifizieren wir ein Bild welches zu unserer App passt --\x3e\n            <div class="col-lg-6 \xfcberblick-rechts">\n                <img class="app-bild" src="images/title_pic.png" />\n            </div>\n        </div>\n</section>\n')),(0,i.kt)("h4",{id:"stylescss"},"styles.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/* ============================= */\n/* ===== Allgemeine Styles ===== */\n/* ============================= */\n.grosser-titel {\n  font-size: 60px;\n  font-weight: bold;\n}\n\n.kleiner-titel {\n  font-size: 30px;\n}\n\n.section-style-2 {\n  background-color: #e7ab9a;\n  color: white;\n}\n\n/* ================================ */\n/* ===== Section 2: \xdcberblick ===== */\n/* ================================ */\n.app-bild {\n  width: 80%;\n  border-radius: 5%;\n}\n"))))}p.isMDXComponent=!0}}]);