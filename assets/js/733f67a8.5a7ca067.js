"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[1073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,d=p["".concat(l,".").concat(b)]||p[b]||f[b]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},o="Aufgabe 3: Website ver\xf6ffentlichen (mit Github Pages)",s={unversionedId:"abschluss-bootstrap/aufgabe-3-website-veroeffentlichen",id:"abschluss-bootstrap/aufgabe-3-website-veroeffentlichen",title:"Aufgabe 3: Website ver\xf6ffentlichen (mit Github Pages)",description:"1. Initalisiere Github Pages",source:"@site/docs/7-abschluss-bootstrap/aufgabe-3-website-veroeffentlichen.md",sourceDirName:"7-abschluss-bootstrap",slug:"/abschluss-bootstrap/aufgabe-3-website-veroeffentlichen",permalink:"/WebDev-Course/docs/abschluss-bootstrap/aufgabe-3-website-veroeffentlichen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 2: Footer",permalink:"/WebDev-Course/docs/abschluss-bootstrap/aufgabe-2-footer"},next:{title:"8. Einf\xfchrung in JavaScript",permalink:"/WebDev-Course/docs/einf\xfchrung-in-javascript/"}},l={},u=[{value:"1. Initalisiere Github Pages",id:"1-initalisiere-github-pages",level:2},{value:"2. Ver\xf6ffentliche deine Website",id:"2-ver\xf6ffentliche-deine-website",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-3-website-ver\xf6ffentlichen-mit-github-pages"},"Aufgabe 3: Website ver\xf6ffentlichen (mit Github Pages)"),(0,i.kt)("h2",{id:"1-initalisiere-github-pages"},"1. Initalisiere Github Pages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstelle einen Github Account"),(0,i.kt)("li",{parentName:"ol"},"Erstelle ein Repository mit dem Namen github_username.github.io")),(0,i.kt)("admonition",{title:"Repositories",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Ein Repository ist ein Speicherort f\xfcr Code. Es ist wie ein Ordner f\xfcr ein Projekt. In einem Repository k\xf6nnen mehrere Dateien gespeichert werden. Ein Repository kann auch mehrere Ordner enthalten.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Initialisiere das Repository mit einer README.md Datei indem du auf ",(0,i.kt)("inlineCode",{parentName:"li"},"Initialize this repository with a README")," klickst.")),(0,i.kt)("admonition",{title:"README.md",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Eine README.md Datei ist eine Datei, die Informationen \xfcber das Projekt enth\xe4lt. Sie wird normalerweise verwendet, um Informationen \xfcber das Projekt zu teilen, wie z.B. die Beschreibung des Projekts, die Installationsschritte, die Verwendung des Projekts, die Autoren des Projekts, die Lizenz des Projekts, etc.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Erstelle das Repository.")),(0,i.kt)("h2",{id:"2-ver\xf6ffentliche-deine-website"},"2. Ver\xf6ffentliche deine Website"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstelle ein neues Repository mit dem Namen deiner Website."),(0,i.kt)("li",{parentName:"ol"},"Klicke auf Upload Files."),(0,i.kt)("li",{parentName:"ol"},"Upload den Inhalt deines Projekts."),(0,i.kt)("li",{parentName:"ol"},"Gehe in die Einstellungen des Repositories"),(0,i.kt)("li",{parentName:"ol"},"Scroll nach unten zu Github Pages"),(0,i.kt)("li",{parentName:"ol"},"W\xe4hle den Branch ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," aus"),(0,i.kt)("li",{parentName:"ol"},"Klicke auf Save"),(0,i.kt)("li",{parentName:"ol"},"Gehe auf die URL, die dir angezeigt wird. Dort solltest du deine Website sehen.")))}f.isMDXComponent=!0}}]);