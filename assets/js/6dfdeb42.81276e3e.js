"use strict";(self.webpackChunkstarcode_web_development_course_website=self.webpackChunkstarcode_web_development_course_website||[]).push([[3916],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={},l="Aufgabe 1: Love Calculator Projekt erstellen",s={unversionedId:"einf\xfchrung-in-javascript/aufgabe-1-js-projekt-erstellen",id:"einf\xfchrung-in-javascript/aufgabe-1-js-projekt-erstellen",title:"Aufgabe 1: Love Calculator Projekt erstellen",description:"1. Projekt erstellen",source:"@site/docs/8-einf\xfchrung-in-javascript/aufgabe-1-js-projekt-erstellen.md",sourceDirName:"8-einf\xfchrung-in-javascript",slug:"/einf\xfchrung-in-javascript/aufgabe-1-js-projekt-erstellen",permalink:"/starcode_web_development_course_website/docs/einf\xfchrung-in-javascript/aufgabe-1-js-projekt-erstellen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"8. Einf\xfchrung in JavaScript",permalink:"/starcode_web_development_course_website/docs/einf\xfchrung-in-javascript/"},next:{title:"Aufgabe 2: Alert erstellen",permalink:"/starcode_web_development_course_website/docs/einf\xfchrung-in-javascript/aufgabe-2-alert-erstellen"}},o={},c=[{value:"1. Projekt erstellen",id:"1-projekt-erstellen",level:2},{value:"2. Projekt anpassen",id:"2-projekt-anpassen",level:2},{value:"Eigene Hintergrundfarbe",id:"eigene-hintergrundfarbe",level:4},{value:"Eigene Schriftart",id:"eigene-schriftart",level:4},{value:"Eigener Text",id:"eigener-text",level:4}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-1-love-calculator-projekt-erstellen"},"Aufgabe 1: Love Calculator Projekt erstellen"),(0,i.kt)("h2",{id:"1-projekt-erstellen"},"1. Projekt erstellen"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstelle einen neuen Ordner mit dem Namen ",(0,i.kt)("inlineCode",{parentName:"li"},"love-calculator")),(0,i.kt)("li",{parentName:"ol"},"Erstelle eine ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," Datei"),(0,i.kt)("li",{parentName:"ol"},"Kopiere den folgenden Inhalt in die ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," Datei:")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="de">\n\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <title>Love Calculator</title>\n\n    \x3c!-- CSS Stylesheets --\x3e\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"\n        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">\n    <link rel="stylesheet" href="styles.css" />\n\n    \x3c!-- Font Awesome --\x3e\n    <script defer src="https://use.fontawesome.com/releases/v6.4.0/js/all.js"><\/script>\n</head>\n\n<body>\n    \x3c!-- ======================================= --\x3e\n    \x3c!-- ========== Section 1: Title =========== --\x3e\n    \x3c!-- ======================================= --\x3e\n    <section id="title">\n        <div class="container-fluid text-center">\n            <h1 class="title-text">Love Calculator</h1>\n            <h5 class="subtitle-text">Gib 2 Namen ein und finde heraus wie sie matchen</h3>\n        </div>\n    </section>\n\n    \x3c!-- ======================================= --\x3e\n    \x3c!-- ======== Section 2: Input Box ========= --\x3e\n    \x3c!-- ======================================= --\x3e\n    <section id="input">\n        <div class="container-fluid">\n            <div class="card input-box">\n                <div class="card-body">\n                    <form>\n                        <div class="mb-3">\n                            <label for="name1-input" class="form-label text-name">Name 1</label>\n                            <input type="text" class="form-control" id="name1-input">\n                        </div>\n                        <div class="mb-3">\n                            <label for="name2-input" class="form-label text-name">Name 2</label>\n                            <input type="text" class="form-control" id="name2-input">\n                        </div>\n                        <button type="submit" id="calculate" class="btn btn-danger">Berechne den Love-Score</button>\n                    </form>\n                </div>\n            </div>\n\n        </div>\n    </section>\n\n    \x3c!-- ======================================= --\x3e\n    \x3c!-- ========= Section 3: Result =========== --\x3e\n    \x3c!-- ======================================= --\x3e\n    <section id="result">\n        <div class="container-fluid text-center">\n            <div class="row">\n                <div class="col-lg-4 text-end">\n                    <h1 class="result-name" id="name1"></h1>\n                </div>\n                <div class="col-lg-4">\n                    <div class="heart fa-10x">\n                        <span class="fa-layers fa-fw">\n                            <i class="fas fa-heart fa-beat result-icon" style="color: red;"></i>\n                            <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-12.5"\n                                style="font-weight:600"></span>\n                        </span>\n                    </div>\n                    <p class="result-text"></p>\n                    <img class="result-img" src="" />\n                    <button type="submit" id="restart" class="btn btn-danger">Neue Berechnung</button>\n                </div>\n                <div class="col-lg-4 text-start">\n                    <h1 class="result-name" id="name2"></h1>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <script src="script.js"><\/script>\n</body>\n\n</html>\n'))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Erstelle eine ",(0,i.kt)("inlineCode",{parentName:"li"},"styles.css")," Datei"),(0,i.kt)("li",{parentName:"ol"},"Kopiere den folgenden Inhalt in die ",(0,i.kt)("inlineCode",{parentName:"li"},"styles.css")," Datei:")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"styles.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'body {\n  background-color: lightcoral;\n}\n\n/* ============================= */\n/* ===== Section 1: Title ====== */\n/* ============================= */\n#title {\n  font-family: "Dancing Script", cursive;\n  padding: 5%;\n}\n\n.title-text {\n  font-size: 60px;\n  font-weight: bold;\n  color: lightpink;\n}\n\n.subtitle-text {\n  font-size: 30px;\n  color: white;\n}\n\n/* ============================= */\n/* === Section 2: Input Box ==== */\n/* ============================= */\n.input-box {\n  width: 32%;\n  margin: 0 auto;\n  padding: 3%;\n  background-color: lightpink;\n}\n\n.form-label {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n}\n\n#calculate {\n  margin: 15% auto 0 auto;\n  width: 80%;\n  display: block;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n/* ============================= */\n/* === Section 3: Result Box === */\n/* ============================= */\n#result {\n  display: none;\n}\n\n.result-text {\n  font-family: "Dancing Script", cursive;\n  color: white;\n  font-size: 24px;\n}\n\n.result-img {\n  margin: 0 auto;\n  display: block;\n}\n\n.result-name {\n  font-family: "Dancing Script", cursive;\n  color: white;\n  font-size: 48px;\n  color: darkred;\n}\n\n#restart {\n  margin: 5% auto;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.text-name {\n  color: darkred;\n}\n'))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Erstelle eine ",(0,i.kt)("inlineCode",{parentName:"li"},"script.js")," Datei")),(0,i.kt)("h2",{id:"2-projekt-anpassen"},"2. Projekt anpassen"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\xd6ffne die ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," Datei in einem Browser und gucke dir die Seite an"),(0,i.kt)("li",{parentName:"ol"},"Wenn du magst kannst du nun einige Dinge ver\xe4ndern, die dir nicht gefallen. Hier ein paar Ideen:")),(0,i.kt)("h4",{id:"eigene-hintergrundfarbe"},"Eigene Hintergrundfarbe"),(0,i.kt)("p",null,"Hierf\xfcr musst du in der ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css")," Datei die ",(0,i.kt)("inlineCode",{parentName:"p"},"background-color")," Eigenschaft des ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," Elements \xe4ndern. Au\xdferdem kannst du noch die ",(0,i.kt)("inlineCode",{parentName:"p"},"background-color")," Eigenschaft des ",(0,i.kt)("inlineCode",{parentName:"p"},"input-box")," Elements \xe4ndern."),(0,i.kt)("h4",{id:"eigene-schriftart"},"Eigene Schriftart"),(0,i.kt)("p",null,"Hierf\xfcr musst du in der ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css")," Datei die ",(0,i.kt)("inlineCode",{parentName:"p"},"font-family")," Eigenschaft des ",(0,i.kt)("inlineCode",{parentName:"p"},"#title")," Elements \xe4ndern."),(0,i.kt)("h4",{id:"eigener-text"},"Eigener Text"),(0,i.kt)("p",null,"Hierf\xfcr musst du in der ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," Datei die Texte in den ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"h5")," Elementen \xe4ndern."))}u.isMDXComponent=!0}}]);