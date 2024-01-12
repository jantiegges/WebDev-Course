"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[6149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>b,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||l;return t?r.createElement(m,s(s({ref:n},b),{},{components:t})):r.createElement(m,s({ref:n},b))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const l={},s="Aufgabe 3: Hobbies-Seite erstellen",a={unversionedId:"vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",id:"vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",title:"Aufgabe 3: Hobbies-Seite erstellen",description:"In Aufgabe 1 haben wir ja bereits unsere Hobbies zu unserer Website hinzugef\xfcgt. Allerdings befinden sich die Hobbies noch auf der Startseite. In dieser Aufgabe wollen wir eine eigene Seite f\xfcr unsere Hobbies erstellen.",source:"@site/docs/3-vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen.md",sourceDirName:"3-vertiefung-html-und-css",slug:"/vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",permalink:"/WebDev-Course/docs/vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 2: Link zur Lieblingssehensw\xfcrdigkeit",permalink:"/WebDev-Course/docs/vertiefung-html-und-css/aufgabe-2-link-zur-lieblingssehensw\xfcrdigkeit"},next:{title:"Aufgabe 4: Divs Unterteilung",permalink:"/WebDev-Course/docs/vertiefung-html-und-css/aufgabe-4-divs-unterteilung"}},o={},u=[],b={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-3-hobbies-seite-erstellen"},"Aufgabe 3: Hobbies-Seite erstellen"),(0,i.kt)("p",null,"In Aufgabe 1 haben wir ja bereits unsere Hobbies zu unserer Website hinzugef\xfcgt. Allerdings befinden sich die Hobbies noch auf der Startseite. In dieser Aufgabe wollen wir eine eigene Seite f\xfcr unsere Hobbies erstellen."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstelle eine neue Datei mit dem Namen ",(0,i.kt)("inlineCode",{parentName:"li"},"hobbies.html")," im Ordner deines Projektes."),(0,i.kt)("li",{parentName:"ol"},"Kopiere den Inhalt von index.html in die neue Datei."),(0,i.kt)("li",{parentName:"ol"},'\xc4ndere den Titel der Website in "Meine Hobbies".'),(0,i.kt)("li",{parentName:"ol"},"L\xf6sche alles au\xdfer den Absatz mit den Hobbies und dem Bild.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Meine Hobbies</title>\n  </head>\n  <body>\n    <p>Meine Hobbies sind:\n    <ul>\n        <li>Programmieren</li>\n        <li>Fu\xdfball</li>\n        <li>Zeichnen</li>\n    </ul>\n    </p>\n    <img src="https://cms.sachsen.schule/fileadmin/_migrated/pics/Informatik.gif"/>\n  </body>\n</html>\n'))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'L\xf6sche den Absatz mit dem Text "Meine Hobbies sind:" auf der Seite ',(0,i.kt)("inlineCode",{parentName:"li"},"index.html"),"."),(0,i.kt)("li",{parentName:"ol"},'Erstelle einen neuen Absatz auf der Startseite mit dem Text "Meine Hobbies findest du hier". F\xfcge einen Link zu der Hobbies-Seite ein. (Tipp: Vergiss nicht einen Text f\xfcr den Link anzugeben.)')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>Meine Hobbies findest du <a href="hobbies.html">hier</a>.</p>\n'))))}d.isMDXComponent=!0}}]);