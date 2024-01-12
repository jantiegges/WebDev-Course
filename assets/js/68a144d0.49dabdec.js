"use strict";(self.webpackChunkWebDev_Course=self.webpackChunkWebDev_Course||[]).push([[2263],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>h});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),u=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},o=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return r?t.createElement(h,l(l({ref:n},o),{},{components:r})):t.createElement(h,l({ref:n},o))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9762:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const a={sidebar_position:9},l="8. Einf\xfchrung in JavaScript",s={unversionedId:"einf\xfchrung-in-javascript/index",id:"einf\xfchrung-in-javascript/index",title:"8. Einf\xfchrung in JavaScript",description:"Nachdem wir nun gelernt haben wie wir mit HTML und CSS unsere Websiten gestalten k\xf6nnen, wollen wir nun lernen wie wir mit JavaScript unsere Website interaktiv gestalten k\xf6nnen.",source:"@site/docs/8-einf\xfchrung-in-javascript/index.md",sourceDirName:"8-einf\xfchrung-in-javascript",slug:"/einf\xfchrung-in-javascript/",permalink:"/WebDev-Course/docs/einf\xfchrung-in-javascript/",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 3: Website ver\xf6ffentlichen (mit Github Pages)",permalink:"/WebDev-Course/docs/abschluss-bootstrap/aufgabe-3-website-veroeffentlichen"},next:{title:"Aufgabe 1: Love Calculator Projekt erstellen",permalink:"/WebDev-Course/docs/einf\xfchrung-in-javascript/aufgabe-1-js-projekt-erstellen"}},d={},u=[{value:"1. Was ist JavaScript?",id:"1-was-ist-javascript",level:2},{value:"2. Unser JavaScript Projekt",id:"2-unser-javascript-projekt",level:2},{value:"\ud83e\udd13 Aufgabe 1: Projekt erstellen",id:"-aufgabe-1-projekt-erstellen",level:3},{value:"3. Alerts",id:"3-alerts",level:2},{value:"\ud83e\udd13 Aufgabe 2: Alert erstellen",id:"-aufgabe-2-alert-erstellen",level:3},{value:"4. Selektoren",id:"4-selektoren",level:2},{value:"Query Selektor",id:"query-selektor",level:3},{value:"Klassen-Selektor",id:"klassen-selektor",level:4},{value:"ID-Selektor",id:"id-selektor",level:4},{value:"\ud83e\udd13 Aufgabe 3: Selektor erstellen",id:"-aufgabe-3-selektor-erstellen",level:3},{value:"5. Event Listener",id:"5-event-listener",level:2},{value:"\ud83e\udd13 Aufgabe 4: Event Listener erstellen",id:"-aufgabe-4-event-listener-erstellen",level:3},{value:"6. Variablen",id:"6-variablen",level:2},{value:"Wof\xfcr brauchen wir Variablen?",id:"wof\xfcr-brauchen-wir-variablen",level:3},{value:"Variablen erstellen",id:"variablen-erstellen",level:3},{value:"Variablen verwenden",id:"variablen-verwenden",level:3},{value:"\ud83e\udd13 Aufgabe 5: Variablen erstellen",id:"-aufgabe-5-variablen-erstellen",level:3},{value:"7. Ausblick",id:"7-ausblick",level:2}],o={toc:u},c="wrapper";function p(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-einf\xfchrung-in-javascript"},"8. Einf\xfchrung in JavaScript"),(0,i.kt)("p",null,"Nachdem wir nun gelernt haben wie wir mit HTML und CSS unsere Websiten gestalten k\xf6nnen, wollen wir nun lernen wie wir mit JavaScript unsere Website interaktiv gestalten k\xf6nnen."),(0,i.kt)("p",null,"Tats\xe4chlich hat sich in unserem letzten Projekt schon ein bisschen Javascript eingeschlichen. Einige Bootstrap Komponenten wie z.B. das Carousel oder der Button ben\xf6tigen JavaScript um zu funktionieren. Wir haben also schon ein bisschen JavaScript geschrieben ohne es zu wissen."),(0,i.kt)("h2",{id:"1-was-ist-javascript"},"1. Was ist JavaScript?"),(0,i.kt)("p",null,"JavaScript ist eine Programmiersprache die es uns erm\xf6glicht unsere Website interaktiv zu gestalten. Wir k\xf6nnen damit auf Events wie z.B. Klicks reagieren und unsere Website dynamisch ver\xe4ndern."),(0,i.kt)("p",null,"JavaScript Dateien haben die Endung ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," und werden in der HTML Datei mit einem ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," Tag eingebunden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="script.js"><\/script>\n')),(0,i.kt)("p",null,'Dadurch "wei\xdf" unsere Website dass sie die Datei ',(0,i.kt)("inlineCode",{parentName:"p"},"script.js")," einbinden soll. In dieser Datei k\xf6nnen wir nun JavaScript Code schreiben."),(0,i.kt)("h2",{id:"2-unser-javascript-projekt"},"2. Unser JavaScript Projekt"),(0,i.kt)("p",null,"In den n\xe4chsten Lektionen werden wir mit Hilfe von JavaScript eine Love Calculator Website erstellen. Der User kann zwei Namen eingeben und wir berechnen dann wie gut die beiden zusammen passen."),(0,i.kt)("p",null,"Auf den Bildern unten k\xf6nnt ihr sehen wie die Website aussehen soll."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Love Calculator",src:r(4656).Z,width:"2996",height:"2024"}),"\n",(0,i.kt)("img",{alt:"Love Calculator Result",src:r(7656).Z,width:"2996",height:"1974"})),(0,i.kt)("p",null,"Der HTML und CSS Code f\xfcr die Website ist schon fertig. Wir m\xfcssen uns also nur noch um den JavaScript Code k\xfcmmern. Damit die Website aber auch euren pers\xf6nlichen Vorstellungen entspricht, k\xf6nnt ihr zun\xe4chst noch ein paar \xc4nderungen vornehmen"),(0,i.kt)("h3",{id:"-aufgabe-1-projekt-erstellen"},(0,i.kt)("a",{parentName:"h3",href:"aufgabe-1-js-projekt-erstellen"},"\ud83e\udd13 Aufgabe 1: Projekt erstellen")),(0,i.kt)("h2",{id:"3-alerts"},"3. Alerts"),(0,i.kt)("p",null,'Nun wollen wir uns mit den ersten JavaScript Befehlen besch\xe4ftigen. Wir wollen einen Alert erstellen, der uns eine Nachricht anzeigt. Ein Alert ist ein kleines Fenster das eine Nachricht anzeigt und den User dazu auffordert auf "OK" zu klicken.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'alert("Hello World!");\n')),(0,i.kt)("p",null,"Wenn wir diesen Code in unsere ",(0,i.kt)("inlineCode",{parentName:"p"},"script.js"),' Datei schreiben und die Website neu laden, dann sollte ein Alert mit dem Text "Hello World!" erscheinen.'),(0,i.kt)("admonition",{title:"JavaScript Syntax",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"JavaScript Befehle werden in der Regel mit einem Semikolon ",(0,i.kt)("inlineCode",{parentName:"p"},";")," abgeschlossen. Das ist aber nicht zwingend notwendig. Es ist aber wichtig, dass die Befehle in der richtigen Reihenfolge geschrieben werden, da sie in der Reihenfolge ausgef\xfchrt werden in der sie geschrieben wurden.")),(0,i.kt)("h3",{id:"-aufgabe-2-alert-erstellen"},(0,i.kt)("a",{parentName:"h3",href:"aufgabe-2-alert-erstellen"},"\ud83e\udd13 Aufgabe 2: Alert erstellen")),(0,i.kt)("h2",{id:"4-selektoren"},"4. Selektoren"),(0,i.kt)("p",null,"Nun haben wir bereits unseren ersten JavaScript Befehl geschrieben. Wir wollen aber noch mehr machen als nur einen Alert zu erstellen, da ein Alert mit einem fixen Text nicht besonders interaktiv ist."),(0,i.kt)("p",null,"Ein wichtiger Bestandteil von Javascript ist es, auf Inhalte unserer Website zuzugreifen und diese zu ver\xe4ndern. Daf\xfcr m\xfcssen wir zun\xe4chst wissen wie wir auf die Elemente unserer Website zugreifen k\xf6nnen. Hierf\xfcr gibt es sogenannte Selektoren."),(0,i.kt)("p",null,"Es gibt verschiedene Arten von Selektoren. Wir werden uns in diesem Kurs aber nur mit einer Form des Selektors besch\xe4ftigen. Diese Form ist der Query Selektor."),(0,i.kt)("h3",{id:"query-selektor"},"Query Selektor"),(0,i.kt)("p",null,"Mit dem Query Selektor k\xf6nnen wir auf ein Element zugreifen, indem wir einen CSS Selektor angeben. Wir kennen bereits zwei Selektoren, die wir in den letzten Lektionen verwendet haben. Das sind der Klassen-Selektor und der ID-Selektor."),(0,i.kt)("h4",{id:"klassen-selektor"},"Klassen-Selektor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".meine-\xfcberschrift {\n  color: red;\n}\n")),(0,i.kt)("h4",{id:"id-selektor"},"ID-Selektor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#meine-\xfcberschrift {\n  color: red;\n}\n")),(0,i.kt)("p",null,"Genau diese Selektoren k\xf6nnen wir auch in JavaScript verwenden. Vorher m\xfcssen wir aber noch unseren Query-Selektor schreiben. Hierzu nutzen wir den Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelector()"),". In die runden Klammern schreiben wir dann den CSS Selektor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'alert(document.querySelector(".\xfcberschrift").innerText);\n')),(0,i.kt)("p",null,"Mit diesem Befehl k\xf6nnen wir auf das Element mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"\xfcberschrift")," zugreifen. Wir k\xf6nnen nun auf die Eigenschaften des Elements zugreifen. In unserem Fall wollen wir auf den Text des Elements zugreifen. Diesen k\xf6nnen wir mit der Eigenschaft ",(0,i.kt)("inlineCode",{parentName:"p"},"innerText")," abrufen."),(0,i.kt)("admonition",{title:"JavaScript Objekte",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," gibt uns ein sogenanntes JavaScript Objekt zur\xfcck. Ein Objekt ist eine Sammlung von Eigenschaften und Methoden. Wir k\xf6nnen auf die Eigenschaften und Methoden eines Objekts zugreifen, indem wir den Namen des Objekts gefolgt von einem Punkt ",(0,i.kt)("inlineCode",{parentName:"p"},".")," schreiben und dann den Namen der Eigenschaft oder Methode. In unserem Fall ist die Eigenschaft die wir abrufen wollen der Text des Elements. Die Eigenschaft hei\xdft ",(0,i.kt)("inlineCode",{parentName:"p"},"innerText"),". Wir k\xf6nnen also auf den Text des Elements zugreifen indem wir ",(0,i.kt)("inlineCode",{parentName:"p"},'document.querySelector(".meine-\xfcberschrift").innerText')," schreiben.")),(0,i.kt)("h3",{id:"-aufgabe-3-selektor-erstellen"},(0,i.kt)("a",{parentName:"h3",href:"aufgabe-3-selektor-erstellen"},"\ud83e\udd13 Aufgabe 3: Selektor erstellen")),(0,i.kt)("h2",{id:"5-event-listener"},"5. Event Listener"),(0,i.kt)("p",null,"Nun k\xf6nnen wir auf die Elemente unserer Website zugreifen. Wir wollen aber auch auf Events wie z.B. Klicks reagieren. Hierf\xfcr gibt es sogenannte Event Listener. Mit einem Event Listener k\xf6nnen wir auf ein Event warten und dann wenn das Event eintritt etwas ausf\xfchren."),(0,i.kt)("admonition",{title:"Events",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Events sind Aktionen die der User auf unserer Website ausf\xfchrt. Das kann z.B. ein Klick auf einen Button sein oder das Scrollen auf der Website.")),(0,i.kt)("p",null,"Wir wollen nun einen Event Listener erstellen, der auf einen Klick auf den Button wartet und dann einen Alert erstellt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'document.querySelector(".button").addEventListener("click", function () {\n  alert("Button wurde geklickt!");\n});\n')),(0,i.kt)("p",null,"Ihr seht, dass wir hier wieder den Query Selektor verwenden um auf das Element mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," zuzugreifen. Anschlie\xdfend verwenden wir den Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener()"),". In die runden Klammern schreiben wir zun\xe4chst den Namen des Events auf den wir warten wollen. In unserem Fall ist das der Klick auf den Button. Anschlie\xdfend schreiben wir was ausgef\xfchrt werden soll, wenn das Event eintritt. Hierzu schreiben wir den Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"function () {}"),'. In die geschweiften Klammern schreiben wir dann den Code der ausgef\xfchrt werden soll. In unserem Fall erstellen wir einen Alert mit dem Text "Button wurde geklickt!".'),(0,i.kt)("h3",{id:"-aufgabe-4-event-listener-erstellen"},(0,i.kt)("a",{parentName:"h3",href:"aufgabe-4-event-listener-erstellen"},"\ud83e\udd13 Aufgabe 4: Event Listener erstellen")),(0,i.kt)("h2",{id:"6-variablen"},"6. Variablen"),(0,i.kt)("p",null,"Nun k\xf6nnen wir auf die Elemente unserer Website zugreifen und auf Events reagieren. Wir wollen aber noch mehr machen. Wir wollen z.B. den Text aus einem Input Feld auslesen und dann in einem Alert anzeigen. Hierf\xfcr m\xfcssen wir zun\xe4chst wissen was Variablen sind."),(0,i.kt)("admonition",{title:"Variablen",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Variablen sind ein zentrales Konzept in der Programmierung. Eine Variable ist ein Beh\xe4lter f\xfcr einen Wert. Wir k\xf6nnen einen Wert in einer Variable speichern und dann sp\xe4ter auf diesen Wert zugreifen."),(0,i.kt)("p",{parentName:"admonition"},"Stellt euch eine Variable wie eine Schublade vor. In der Schublade k\xf6nnen wir einen Wert speichern. Wir k\xf6nnen den Wert dann sp\xe4ter wieder aus der Schublade holen.")),(0,i.kt)("h3",{id:"wof\xfcr-brauchen-wir-variablen"},"Wof\xfcr brauchen wir Variablen?"),(0,i.kt)("p",null,"Wir brauchen Variablen um Werte zu speichern. Hierbei kann es sich um Texte, Zahlen oder auch andere Dinge handeln. Wir k\xf6nnen dann sp\xe4ter auf die Werte zugreifen und diese ver\xe4ndern."),(0,i.kt)("p",null,"Zum Beispiel haben wir ja auf unserer Website zwei Input Felder. In diesen Feldern k\xf6nnen wir Text eingeben (die Namen). Um auf den Text zugreifen zu k\xf6nnen, k\xf6nnen wir diesen in einer Variable speichern. Dann k\xf6nnen wir die Namen, welche in der Variable gespeichert sind, sp\xe4ter wieder verwenden um den Love Score zu berechnen."),(0,i.kt)("h3",{id:"variablen-erstellen"},"Variablen erstellen"),(0,i.kt)("p",null,"Um eine Variable zu erstellen m\xfcssen wir zun\xe4chst den Namen der Variable festlegen. Der Name der Variable darf nur aus Buchstaben, Zahlen, Unterstrichen ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," und Dollarzeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," bestehen. Der Name darf nicht mit einer Zahl beginnen. Der Name darf auch nicht mit einem Unterstrich ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," oder Dollarzeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," beginnen. Der Name darf auch keine Leerzeichen enthalten."),(0,i.kt)("p",null,"Wir lernen in diesem Kurs zwei Arten von Variablen kennen. Die ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," Variablen und die ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," Variablen. ",(0,i.kt)("inlineCode",{parentName:"p"},"Let")," Variablen k\xf6nnen ihren Wert \xe4ndern, das hei\xdft wir k\xf6nnen sp\xe4ter einen anderen Wert in die Variable speichern. ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," Variablen k\xf6nnen ihren Wert nicht \xe4ndern, das hei\xdft wir k\xf6nnen sp\xe4ter keinen anderen Wert in die Variable speichern."),(0,i.kt)("admonition",{title:"Variablen Typen",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"let")," Variablen k\xf6nnen ihren Wert \xe4ndern."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"const")," Variablen k\xf6nnen ihren Wert nicht \xe4ndern.")),(0,i.kt)("p",null,"Um eine Variable zu erstellen schreiben wir zun\xe4chst den Namen der Variable. Anschlie\xdfend schreiben wir ein Gleichheitszeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," und dann den Wert den wir in der Variable speichern wollen. Wir k\xf6nnen dann sp\xe4ter auf den Wert der Variable zugreifen indem wir den Namen der Variable schreiben."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const name = "Max";\nlet alter = 20;\n')),(0,i.kt)("p",null,"In diesem Beispiel erstellen wir zwei Variablen. Die erste Variable hat den Namen ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," und den Wert ",(0,i.kt)("inlineCode",{parentName:"p"},'"Max"'),". Hierf\xfcr haben wir eine ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),"-Variable verwendet, da sich der Name nicht \xe4ndern soll. Die zweite Variable hat den Namen ",(0,i.kt)("inlineCode",{parentName:"p"},"alter")," und den Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),". Hierf\xfcr haben wir eine ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"-Variable verwendet, da sich das Alter \xe4ndern kann."),(0,i.kt)("h3",{id:"variablen-verwenden"},"Variablen verwenden"),(0,i.kt)("p",null,"Um auf den Wert einer Variable zuzugreifen schreiben wir einfach den Namen der Variable. Wir k\xf6nnen den Wert der Variable auch ver\xe4ndern indem wir den Namen der Variable gefolgt von einem Gleichheitszeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," und dann den neuen Wert schreiben."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const name = "Max";\nlet alter = 20;\nalter = 21;\n')),(0,i.kt)("p",null,"In diesem Beispiel haben wir zun\xe4chst eine Variable mit dem Namen ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," und dem Wert ",(0,i.kt)("inlineCode",{parentName:"p"},'"Max"')," erstellt. Anschlie\xdfend haben wir eine Variable mit dem Namen ",(0,i.kt)("inlineCode",{parentName:"p"},"alter")," und dem Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," erstellt. Anschlie\xdfend haben wir den Wert der Variable ",(0,i.kt)("inlineCode",{parentName:"p"},"alter")," auf ",(0,i.kt)("inlineCode",{parentName:"p"},"21")," ge\xe4ndert."),(0,i.kt)("p",null,"In der letzten Aufgabe wollen wir nun alle Dinge die ihr in dieser Lektion gelernt habt zusammenbringen. Wir wollen die Namen aus den Input Feldern auslesen und in einer Variable speichern. Anschlie\xdfend wollen wir die Namen und den Love Score in einem Alert anzeigen."),(0,i.kt)("h3",{id:"-aufgabe-5-variablen-erstellen"},(0,i.kt)("a",{parentName:"h3",href:"aufgabe-5-variablen-erstellen"},"\ud83e\udd13 Aufgabe 5: Variablen erstellen")),(0,i.kt)("h2",{id:"7-ausblick"},"7. Ausblick"),(0,i.kt)("p",null,"Herzlichen Gl\xfcckwunsch, du hast nun die ersten Grundlagen von Javascript gelernt. Du kannst nun auf Elemente deiner Website zugreifen, auf Events reagieren und Variablen erstellen. In den n\xe4chsten Lektionen werden wir noch mehr \xfcber Javascript lernen und weiter an dem Love Calculator arbeiten."))}p.isMDXComponent=!0},4656:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/love_calculator-cb7e6951f33d0755e9810d1d0d069fc6.png"},7656:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/love_calculator_result-40d687c79005769d928580c2b04f3ecb.png"}}]);