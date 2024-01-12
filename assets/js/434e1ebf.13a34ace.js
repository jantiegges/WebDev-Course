"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[6857],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Aufgabe 2: Show Result Funktion erstellen",l={unversionedId:"vertiefung-in-javascript/aufgabe-2-show-result-funktion",id:"vertiefung-in-javascript/aufgabe-2-show-result-funktion",title:"Aufgabe 2: Show Result Funktion erstellen",description:'Wir wollen nun das anzeigen unseres Ergebnisses in eine Funktion mit den Namen showResult auslagern. Die Funktion soll die Namen der beiden Personen und den Love Score als Parameter \xfcbergeben bekommen. Die Funktion soll dann einen Alert mit dem Text "name1 und name2 matchen zu loveScore%!" anzeigen.',source:"@site/docs/9-vertiefung-in-javascript/aufgabe-2-show-result-funktion.md",sourceDirName:"9-vertiefung-in-javascript",slug:"/vertiefung-in-javascript/aufgabe-2-show-result-funktion",permalink:"/WebDev-Course/docs/vertiefung-in-javascript/aufgabe-2-show-result-funktion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 1: Love Calculator Funktion erstellen",permalink:"/WebDev-Course/docs/vertiefung-in-javascript/aufgabe-1-love-calculator-funktion"},next:{title:"Aufgabe 3: Love Score berechnen",permalink:"/WebDev-Course/docs/vertiefung-in-javascript/aufgabe-3-love-score-berechnen"}},u={},s=[{value:"script.js",id:"scriptjs",level:4}],c={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aufgabe-2-show-result-funktion-erstellen"},"Aufgabe 2: Show Result Funktion erstellen"),(0,a.kt)("p",null,"Wir wollen nun das anzeigen unseres Ergebnisses in eine Funktion mit den Namen ",(0,a.kt)("inlineCode",{parentName:"p"},"showResult"),' auslagern. Die Funktion soll die Namen der beiden Personen und den Love Score als Parameter \xfcbergeben bekommen. Die Funktion soll dann einen Alert mit dem Text "',(0,a.kt)("inlineCode",{parentName:"p"},"name1")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"name2")," matchen zu ",(0,a.kt)("inlineCode",{parentName:"p"},"loveScore"),'%!" anzeigen.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Gehe in die Datei ",(0,a.kt)("inlineCode",{parentName:"li"},"script.js")," und erstelle eine Funktion mit dem Namen ",(0,a.kt)("inlineCode",{parentName:"li"},"showResult"),"."),(0,a.kt)("li",{parentName:"ol"},"Die Funktion soll die Namen der beiden Personen und den Love Score als Parameter \xfcbergeben bekommen."),(0,a.kt)("li",{parentName:"ol"},'Die Funktion soll einen Alert mit dem Text "',(0,a.kt)("inlineCode",{parentName:"li"},"name1")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"name2")," matchen zu ",(0,a.kt)("inlineCode",{parentName:"li"},"loveScore"),'%!" anzeigen.')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"L\xf6sung"),(0,a.kt)("h4",{id:"scriptjs"},"script.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// erstelle einen Event Listener f\xfcr den Button\nbutton.addEventListener("click", function () {\n  // speichere die Namen aus den Input Feldern\n  const name1 = document.querySelector("#name1-input").value;\n  const name2 = document.querySelector("#name2-input").value;\n\n  // rufe die Funktion berechneLoveScore auf\n  const loveScore = berechneLoveScore();\n\n  // rufe die Funktion showResult auf\n  showResult(name1, name2, loveScore);\n});\n\nfunction showResult(name1, name2, loveScore) {\n  alert(name1 + " und " + name2 + " matchen zu " + loveScore + "%!");\n}\n'))))}p.isMDXComponent=!0}}]);