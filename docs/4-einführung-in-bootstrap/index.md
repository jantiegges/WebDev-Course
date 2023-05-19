---
sidebar_position: 5
---

# 4. Einführung in Bootstrap

In dieser Lektion lernen wir Bootstrap kennen. Dafür werden wir eine Homepage einer imaginären App erstellen.

## 1. Was ist Bootstrap

Bootstrap wurde 2011 von Twitter entwickelt, ist aber kostenlos und Open Source. Das bedeutet, dass jeder Bootstrap verwenden kann und es verbessern kann.

Bootstrap ist eine sogenanntes CSS Framework. CSS Frameworks sind Sammlungen von vorgefertigten CSS Klassen, die wir in unsere Website einbinden können. In vorherigen Lektionen haben wir ja bereits unsere eigenen CSS Klassen erstellt und gestyled. Das können wir auch immer noch machen, aber of gibt es bereits vorgefertigte Klassen, die wir verwenden können.

Ihr findet die Dokumentation von Bootstrap hier: https://getbootstrap.com/docs/5.3/getting-started/introduction/. In der Dokumentation findet ihr alle vorgefertigten Klassen, die ihr verwenden könnt und auch viele Beispiele.

## 2. Components

Bootstrap bietet viele vorgefertigte Komponenten, die wir in unsere Website einbinden können.

:::info Komponenten & Bootstrap Klassen
Komponenten sind vorgefertigte Elemente, die wir in unsere Website einbinden können. Zum Beispiel Buttons, Cards, Navigationsleisten, Formulare, etc.
Wir können die Komponenten mit Bootstrap Klassen hinzufügen. Bootstrap Klassen haben immer das Format `class="class1 class2 class3"`. Die Klassen werden mit Leerzeichen getrennt.
:::

Wir wollen uns in der 1. Aufgabe das Prinzip einmal am Beispiel eines Buttons anschauen.

---

### [🤓 Aufgabe 1: Buttons in HTML vs Bootstrap](aufgabe-1-buttons-bootstrap.md)

---

## 3. Wie verwenden wir Bootstrap?

Wir können Bootstrap auf verschiedene Arten verwenden. Wir können Bootstrap herunterladen und lokal auf unserem Computer verwenden. Wir können Bootstrap auch über einen CDN (Content Delivery Network) verwenden. Wir können Bootstrap auch über ein Plugin in unserem Code Editor verwenden.

Wir haben bereits den Code der für die nächsten Lektionen benötigt wird vorgefertigt, sodass ihr euch nicht mit dem Setup von Bootstrap beschäftigen müsst. In der nächsten Aufgabe werden wir nun unser erstes Bootstrap Projekt erstellen.

---

### [🤓 Aufgabe 2: Bootstrap Setup](aufgabe-2-neues-bootstrap-projekt.md)

---

## 4. Anordung von Elementen

Bootstrap bietet uns eine Reihe von vorgefertigten Klassen, mit denen wir Elemente anordnen können. Diese Klassen sind sehr nützlich, da wir so nicht mehr mit CSS arbeiten müssen, um Elemente anzuordnen.

#### Das Grid-System

Das Grid-System in Bootstrap ist ein Layout-System, das dir hilft, deiner Website oder App eine Struktur zu geben und die verschiedenen Inhalte auf der Seite zu organisieren.

Stell dir das Grid-System wie ein Raster oder ein Gitter vor, das du über die gesamte Breite deiner Website legen kannst. Das Raster ist in Spalten unterteilt, und du kannst auswählen, wie breit jede Spalte sein soll.

Wenn du zum Beispiel eine Zeile mit 12 Spalten hast, könntest du entscheiden, dass eine Spalte die Hälfte der Breite der Zeile einnimmt (d.h. 6 Spalten breit ist). Oder du könntest entscheiden, dass eine Spalte ein Drittel der Breite der Zeile einnimmt (d.h. 4 Spalten breit ist).

Du kannst das Grid-System in Bootstrap verwenden, indem du die Klasse `row` auf eine Zeile anwendest und die Klasse `col-` auf eine Spalte anwendest. Die Klasse `col-` wird mit einer Zahl zwischen 1 und 12 ergänzt, um die Breite der Spalte anzugeben.

#### Beispiel

```html
<div class="row">
  <div class="col-6">Spalte 1</div>
  <div class="col-6">Spalte 2</div>
</div>
```

Bootstrap erleichtert es dir auch, deine Inhalte für verschiedene Bildschirmgrößen zu optimieren, indem du entscheidest, welche Spaltenbreiten auf verschiedenen Geräten angezeigt werden sollen. So kannst du sicherstellen, dass deine Website auf Desktop-Computern genauso gut aussieht wie auf Mobilgeräten.

Hierfür verwendest du die Klassen `col-sm-`, `col-md-`, `col-lg-` und `col-xl-`. Diese Klassen werden mit einer Zahl zwischen 1 und 12 ergänzt, um die Breite der Spalte anzugeben.

Die Klassen `col-sm-` und `col-md-` werden verwendet, um die Breite der Spalte auf kleinen und mittleren Bildschirmen anzugeben. Die Klasse `col-lg-` wird verwendet, um die Breite der Spalte auf großen Bildschirmen anzugeben. Die Klasse `col-xl-` wird verwendet, um die Breite der Spalte auf sehr großen Bildschirmen anzugeben.

#### Beispiel

```html
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">Spalte 1</div>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">Spalte 2</div>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">Spalte 3</div>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">Spalte 4</div>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">Spalte 5</div>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">Spalte 6</div>
</div>
```

Da dies am Anfang etwas verwirrend, gucken wir uns das an einem Beispiel an.

[**Link zum Codeply-Beispiel**](https://www.codeply.com/p/gGAW4KgOrL)

Nun haben wir uns lange genug mit der Theorie beschäftigt und wollen nun endlich mit dem Projekt anfangen.

---

### [🤓 Aufgabe 3: Überblick Section Setup](aufgabe-3-grid-system.md)

---

Nachdem wir die Struktur unserer Übersicht-Section erstellt haben, wollen wir diese nun mit etwas Inhalt füllen. Du solltest dir also zunächst Gedanken machen, was du in deiner App anbietest und wie du sie beschreiben kannst. Wenn du dir sicher bist, kannst du die nächste Aufgabe beginnen, in der wir die linke Seite der Section Übersicht designen wollen, also den Bereich ganz oben auf der Website.

In dieser Aufgabe werden wir die linke Seite der Überblick Section erstellen. Dabei fügen wir eine große Überschrift, eine kleine Überschrift und einen Button ein. Du kannst natürlich auch andere Elemente verwenden, dies ist jedoch ein guter Start.

---

### [🤓 Aufgabe 4: Überblick Links](aufgabe-4-ueberblick-links.md)

---

Nun wollen wir uns um die rechte Seite der Section Übersicht kümmern. In der nächsten Aufgabe werden wir ein Bild einfügen, das die App darstellt oder ein Feature beschreibt. Du kannst natürlich auch wieder hiervon abweichen und andere Elemente verwenden.

---

### [🤓 Aufgabe 5: Überblick Rechts](aufgabe-5-ueberblick-rechts.md)

---

## 5. Abschluss

In dieser Lektion haben wir einiges gelernt. Wir haben unsere erste Bootstrap-App erstellt und gelernt wie wir mit Bootstrap Elemente anordnen können. Dazu haben wir uns mit dem Grid-System von Bootstrap beschäftigt und gelernt wie wir es verwenden können, um unsere App auf verschiedene Bildschirmgrößen anzupassen.

In der nächsten Lektionen lernen wir weitere Bootstrap-Komponenten kennen und bauen unsere Website weiter aus. Außerdem beschäftigen wir uns mit Margin und Padding, womit wir Elemente präzise auf der Seite positionieren können.
