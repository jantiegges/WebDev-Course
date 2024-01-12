"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[8930],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,b=d["".concat(s,".").concat(p)]||d[p]||f[p]||l;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={},i="Aufgabe 6: Klassen stylen",o={unversionedId:"vertiefung-html-und-css/aufgabe-6-klassen-stylen",id:"vertiefung-html-und-css/aufgabe-6-klassen-stylen",title:"Aufgabe 6: Klassen stylen",description:"In dieser Lektion wollen wir die neu kennengelernten CSS-Selektoren anwenden. Dazu wollen wir die beiden Klassen verwenden, die wir in der letzten Aufgabe hinzugef\xfcgt haben.",source:"@site/docs/3-vertiefung-html-und-css/aufgabe-6-klassen-stylen.md",sourceDirName:"3-vertiefung-html-und-css",slug:"/vertiefung-html-und-css/aufgabe-6-klassen-stylen",permalink:"/WebDev-Course/docs/vertiefung-html-und-css/aufgabe-6-klassen-stylen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 5: Klassen hinzuf\xfcgen",permalink:"/WebDev-Course/docs/vertiefung-html-und-css/aufgabe-5-klassen-hinzuf\xfcgen"},next:{title:"Aufgabe 7: CSS Anordnung",permalink:"/WebDev-Course/docs/vertiefung-html-und-css/aufgabe-7-css-anordnung"}},s={},u=[],c={toc:u},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aufgabe-6-klassen-stylen"},"Aufgabe 6: Klassen stylen"),(0,a.kt)("p",null,"In dieser Lektion wollen wir die neu kennengelernten CSS-Selektoren anwenden. Dazu wollen wir die beiden Klassen verwenden, die wir in der letzten Aufgabe hinzugef\xfcgt haben."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\xd6ffne die Datei ",(0,a.kt)("inlineCode",{parentName:"li"},"style.css"),"."),(0,a.kt)("li",{parentName:"ol"},"F\xfcge einen neuen CSS-Selektor hinzu, der die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"hobbies-text")," ausw\xe4hlt."),(0,a.kt)("li",{parentName:"ol"},"\xc4ndere die Hintergrundfarbe der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"hobbies-text")," (z.B. zu ",(0,a.kt)("inlineCode",{parentName:"li"},"grey"),")."),(0,a.kt)("li",{parentName:"ol"},"F\xfcge einen neuen CSS-Selektor hinzu, der die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"hobbies-bild")," ausw\xe4hlt."),(0,a.kt)("li",{parentName:"ol"},"\xc4ndere die Hintergrundfarbe der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"hobbies-bild")," (z.B. zu ",(0,a.kt)("inlineCode",{parentName:"li"},"lightblue"),").")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"L\xf6sung"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".hobbies-text {\n  background-color: grey;\n}\n\n.hobbies-bild {\n  background-color: lightblue;\n}\n"))))}f.isMDXComponent=!0}}]);