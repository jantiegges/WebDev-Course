"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[3934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Aufgabe 3: Layout der Feature Section",l={unversionedId:"vertiefung-in-bootstrap-1/aufgabe-3-feature-section",id:"vertiefung-in-bootstrap-1/aufgabe-3-feature-section",title:"Aufgabe 3: Layout der Feature Section",description:"1. Gehe in den Code-Abschnitt der Feature Section.",source:"@site/docs/5-vertiefung-in-bootstrap-1/aufgabe-3-feature-section.md",sourceDirName:"5-vertiefung-in-bootstrap-1",slug:"/vertiefung-in-bootstrap-1/aufgabe-3-feature-section",permalink:"/WebDev-Course/docs/vertiefung-in-bootstrap-1/aufgabe-3-feature-section",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 2: Bild drehen",permalink:"/WebDev-Course/docs/vertiefung-in-bootstrap-1/aufgabe-2-bild-drehen"},next:{title:"Aufgabe 4: Feature Beschreibungen",permalink:"/WebDev-Course/docs/vertiefung-in-bootstrap-1/aufgabe-4-feature-beschreibung"}},s={},c=[{value:"index.html",id:"indexhtml",level:4},{value:"styles.css",id:"stylescss",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-3-layout-der-feature-section"},"Aufgabe 3: Layout der Feature Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Gehe in den Code-Abschnitt der Feature Section.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section class="section-style-1" id="features">\n  <div class="container-fluid text-center">\n    \x3c!-- Dein Code --\x3e\n  </div>\n</section>\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"F\xfcge die Bootstrap-Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"row")," dem ",(0,i.kt)("inlineCode",{parentName:"li"},"div"),"-Element hinzu.")),(0,i.kt)("p",null,"Wir wollen nun unsere 3 Feature-Bl\xf6cke einf\xfcgen. Erinnere dich zur\xfcck an das Grid-System von Bootstrap. Welche Klasse m\xfcssen wir verwenden, damit die 3 Bl\xf6cke nebeneinander angezeigt werden?"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Innerhalb des ",(0,i.kt)("inlineCode",{parentName:"li"},"div"),"-Elements f\xfcge drei weitere ",(0,i.kt)("inlineCode",{parentName:"li"},"div"),"-Elemente mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"feature-box")," sowie der Klasse f\xfcr die Spaltenbreite ein.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Tipp: Die Klasse f\xfcr die Spaltenbreite hatte 3 Parts. Der erste Part f\xfcr die Column-Definition, der zweite Part f\xfcr die Bildschirmbreite (z.B. lg) und der dritte Part f\xfcr die Anzahl der Spalten (z.B. 4).")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Diese Section hat die Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"section-style-1"),". Diese Klasse haben wir noch nicht mit CSS konfiguriert. F\xfcge in der CSS-Datei eine neue Regel mit dem Selektor ",(0,i.kt)("inlineCode",{parentName:"li"},".section-style-1")," ein."),(0,i.kt)("li",{parentName:"ol"},"Konfiguriere die Hintergrundfarbe (z.B. auf ",(0,i.kt)("inlineCode",{parentName:"li"},"#E7AB9A"),") und die Textfarbe (z.B. auf ",(0,i.kt)("inlineCode",{parentName:"li"},"white"),") der Section.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung"),(0,i.kt)("h4",{id:"indexhtml"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section class="section-style-1" id="features">\n  <div class="container-fluid text-center">\n    \x3c!-- Wir wollen, dass die Features nebeneinander angezeigt werden. Daf\xfcr verwenden wir wieder die Bootstrap-Klasse "row" --\x3e\n    <div class="row">\n      <div class="feature-box col-lg-4">\n        \x3c!-- Hier ist Feature 1 --\x3e\n      </div>\n\n      <div class="feature-box col-lg-4">\n        \x3c!-- Hier ist Feature 2 --\x3e\n      </div>\n\n      <div class="feature-box col-lg-4">\n        \x3c!-- Hier ist Feature 3 --\x3e\n      </div>\n    </div>\n  </div>\n</section>\n')),(0,i.kt)("h4",{id:"stylescss"},"styles.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".section-style-1 {\n  background-color: #ede9d5;\n  color: black;\n}\n"))))}p.isMDXComponent=!0}}]);