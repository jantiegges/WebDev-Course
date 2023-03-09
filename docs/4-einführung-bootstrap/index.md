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

:::tip Komponenten & Bootstrap Klassen
Komponenten sind vorgefertigte Elemente, die wir in unsere Website einbinden können. Zum Beispiel Buttons, Cards, Navigationsleisten, Formulare, etc.
Wir können die Komponenten mit Bootstrap Klassen hinzufügen. Bootstrap Klassen haben immer das Format `class="class1 class2 class3"`. Die Klassen werden mit Leerzeichen getrennt.
:::

Wir wollen uns in der 1. Aufgabe das Prinzip einmal am Beispiel eines Buttons anschauen.

### Aufgabe 1: Buttons in HTML vs Bootstrap

<details>
<summary>Aufgabe</summary>

1. Öffne die Website https://codeply.com/
2. Klicke in der linken Seite auf 'Bootstrap 5'
3. Lösche den vorhanden Code.
4. Füge den folgenden Code ein um einen Button zu erstellen:

```html
<button>Klick mich!</button>
```

5. Klicke auf 'Run' um die Website zu starten.

Du siehst, dass der Button nicht gestyled ist. Das liegt daran, dass wir noch keine CSS Datei eingebunden haben. Wir können aber auch einfach die vorgefertigten Bootstrap Klassen verwenden.

6. Gehe auf die Bootstrap Dokumentation und suche nach 'Buttons'. Dort findest du die vorgefertigten Bootstrap Klassen für Buttons. Suche dir eine Klasse aus und füge sie dem Button hinzu:

<details>
<summary>Beispiel</summary>

```html
<button class="btn btn-dark">Klick mich!</button>
```

</details>

7. Klicke auf 'Run' um die Website zu starten.

Du siehst, dass der Button jetzt gestyled ist. Das liegt daran, dass wir die vorgefertigten Bootstrap Klassen verwendet haben.

</details>

## 3. Wie verwenden wir Bootstrap?

Wir können Bootstrap auf verschiedene Arten verwenden. Wir können Bootstrap herunterladen und lokal auf unserem Computer verwenden. Wir können Bootstrap auch über einen CDN (Content Delivery Network) verwenden. Wir können Bootstrap auch über ein Plugin in unserem Code Editor verwenden.

Wir haben bereits den Code der für die nächsten Lektionen benötigt wird vorgefertigt, sodass ihr euch nicht mit dem Setup von Bootstrap beschäftigen müsst.

### Aufgabe 2: Neues Projekt mit Bootstrap

<details>
<summary>Aufgabe</summary>

1. Erstelle einen neuen Ordner für dein Projekt.
2. Erstelle eine neue Datei `index.html` und eine neue Datei `style.css` im Ordner.
3. Öffne die Datei `index.html` und füge den folgenden Code ein:

<details>
<summary>HTML Code</summary>

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Starcode Bootstrap App Seite</title>

    <!-- CSS Stylesheets -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />

    <!-- Bootstrap Scripts -->
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>

    <!-- Font Awesome -->
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
    ></script>
  </head>

  <body>
    <!-- ======================================= -->
    <!-- ===== Section 1: Navigationszeile ===== -->
    <!-- ======================================= -->
    <!-- Die Navigationszeile ist dafür da, dass man schnell zu bestimmten Sections auf unserer Website navigieren kann-->
    <section class="section-style-1" id="navbar">
      <div class="container-fluid">
        <!-- Dein Code -->
      </div>
    </section>

    <!-- ================================ -->
    <!-- ===== Section 2: Überblick ===== -->
    <!-- ================================ -->
    <!-- Hier wird der Nutzer auf unsere App aufmerksam gemacht -->
    <section class="section-style-2" id="überblick">
      <div class="container-fluid">
        <!-- Dein Code -->
      </div>
    </section>

    <!-- =============================== -->
    <!-- ===== Section 3: Features ===== -->
    <!-- =============================== -->
    <!-- Hier werden die Features unserer App aufgelistet -->
    <section class="section-style-1" id="features">
      <div class="container-fluid text-center">
        <!-- Dein Code -->
      </div>
    </section>

    <!-- ========================================= -->
    <!-- ===== Section 4: Nutzer-Bewertungen ===== -->
    <!-- ========================================= -->
    <!-- Hier werden die Nutzer-Bewertungen angezeigt -->
    <section class="section-style-2" id="bewertungen">
      <!-- Dein Code -->
    </section>

    <!-- ============================= -->
    <!-- ===== Section 5: Preise ===== -->
    <!-- ============================= -->
    <!-- Hier werden die verschiedenen Preispläne unserer App aufgelistet -->
    <section class="section-style-1" id="preise">
      <!-- Dein Code -->
    </section>

    <!-- ============================= -->
    <!-- ===== Section 6: Footer ===== -->
    <!-- ============================= -->
    <!-- Hier werden die Social-Media-Icons und der Copyright-Text angezeigt -->
    <section class="section-style-2" id="footer">
      <div class="container-fluid text-center">
        <!-- Dein Code -->
      </div>
    </section>
  </body>
</html>
```

</details>

4. Öffne die Datei `style.css` und füge den folgenden Code ein:

<details>
<summary>CSS Code</summary>

```css
/* ============================= */
/* ===== Allgemeine Styles ===== */
/* ============================= */

/* Dein Code */

/* ======================================= */
/* ===== Section 1: Navigationszeile ===== */
/* ======================================= */

/* Dein Code */

/* ================================ */
/* ===== Section 2: Überblick ===== */
/* ================================ */

/* Dein Code */

/* =============================== */
/* ===== Section 3: Features ===== */
/* =============================== */

/* Dein Code */

/* ================================== */
/* ===== Section 4: Bewertungen ===== */
/* ================================== */

/* Dein Code */

/* ============================= */
/* ===== Section 5: Preise ===== */
/* ============================= */

/* Dein Code */

/* ============================= */
/* ===== Section 6: Footer ===== */
/* ============================= */

/* Dein Code */
```

</details>

</details>

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

Die Klassen `col-sm-` und `col-md-` werden verwendet, um die Breite der Spalte auf kleinen und mittleren Bildschirmen anzugeben. Die Klasse `col-lg-` wird verwendet, um die Breite der Spalte auf großen Bildschirmen anzugeben. Die Klasse `col-xl-` wird verwendet, um die Breite der Spalte auf großen Bildschirmen anzugeben.

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

### Aufgabe 3: App Titel & Beschreibung und Bild

<details>
<summary>Aufgabe</summary>

Wir wollen nun die Section mit der id `überblick` anpassen. Wir wollen, dass hier ein Text links und ein Bild rechts angezeigt wird. Dafür verwenden wir die Bootstrap-Klasse `row`.

1. Füge ein neues div mit der Klasse `row` ein.
2. Innerhalb dieses divs füge zwei divs mit der Klasse `col-lg-6` ein. Das erste div soll zudem die Klasse `überblick-links` haben und das zweite div soll die Klasse `überblick-rechts` haben.

Außerdem wollen wir die Section mit einer bestimmten Farbe versehen. Dazu haben wir ihr bereits die Klasse section-style-2 gegeben. Diese Klasse wollen wir nun mit CSS anpassen.

1. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.section-style-2` ein.
2. Konfiguriere die Hintergrundfarbe (z.B. auf `#E7AB9A`) und die Textfarbe (z.B. auf `white`) der Section.

<details>
<summary>Lösung</summary>

#### index.html

```html
<section class="section-style-2" id="überblick">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 überblick-links"></div>
      <div class="col-lg-6 überblick-rechts"></div>
    </div>
  </div>
</section>
```

#### style.css

```css
.section-style-2 {
  background-color: #e7ab9a;
  color: white;
}
```

</details>

Nun wollen wir den überblick-links Bereich mit dem Titel und der Beschreibung unserer App füllen.

1. Füge einen große Überschrift (`h1`) mit der Klasse `grosser-titel` und dem Text `Die neue Super-Duper-App` ein.
2. Füge eine kleine Überschrift (`h3`) mit der Klasse `kleiner-titel` und dem Text `Dies ist eine lange Beschreibung meiner App und warum sie so toll ist` ein.
3. Füge einen Button mit der Klasse `btn btn-dark btn-lg` und dem Text `Probier es aus` ein.

Damit unsere Schriften auch wirklich so aussehen wie wir es uns vorstellen, wollen wir diese noch etwas anpassen.

1. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.grosser-titel` ein.
2. Konfiguriere die Schriftgröße (z.B. auf `60px`) und setze das Attribut `font-weight` auf `bold`.
3. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.kleiner-titel` ein.
4. Konfiguriere die Schriftgröße (z.B. auf `30px`).

<details>
<summary>Lösung</summary>

#### index.html

```html
<section class="section-style-2" id="überblick">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 überblick-links">
        <h1 class="grosser-titel">Die neue Super-Duper-App</h1>
        <h3 class="kleiner-titel">
          Dies ist eine lange Beschreibung meiner App und warum sie so toll ist
        </h3>
        <button type="button" class="btn btn-dark btn-lg">
          Probier es aus!
        </button>
      </div>
      <div class="col-lg-6 überblick-rechts"></div>
    </div>
  </div>
</section>
```

#### style.css

```css
.grosser-titel {
  font-size: 60px;
  font-weight: bold;
}

.kleiner-titel {
  font-size: 30px;
}
```

</details>

Nun wollen wir den überblick-rechts Bereich mit dem Bild unserer App füllen.

1. Erstelle einen Ordner names `images` im Projektordner.
2. Füge ein Bild in den Ordner `images` ein.
3. Füge das Bild in den überblick-rechts Bereich ein. (Hinweis: Du kannst das Bild mit dem Tag `img` einfügen. Die Quelle des Bildes kannst du mit dem Attribut `src` angeben.)
4. Gebe dem Bild die Klasse `app-bild`.

Das Bild ist nun zwar da, aber es etwas zu groß. Wir wollen es nun auf die richtige Größe bringen. Außerdem wollen wir die Ecken des Bildes abrunden.

1. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.app-bild` ein.
2. Konfiguriere die Breite (z.B. auf `80%`).
3. Runde die Ecken des Bildes ab. Dies kannst du mit dem Attribut `border-radius` tun. Den Wert kannst du frei wählen. (z.B. auf `5%`)

<details>
<summary>Endlösung</summary>

#### index.html

```html
<section class="section-style-2" id="überblick">
    <div class="container-fluid">
        <!-- Wir wollen, dass der Text links und das Bild rechts angezeigt wird. Dafür verwenden wir die Bootstrap-Klasse "row" -->
        <div class="row">
            <div class="col-lg-6 überblick-links">
                <!-- Hier spezifizieren wir den Titel und die Beschreibung unserer App -->
                <h1 class="grosser-titel">Die neue Super-Duper-App</h1>
                <h3 class="kleiner-titel">
                    Dies ist eine lange Beschreibung meiner App und warum sie so toll ist
                </h3>
                <!-- Hier spezifizieren wir den Button, der den Nutzer zu unserer App weiterleitet -->
                <button type="button" class="btn btn-dark btn-lg">
                    Probier es aus!
                </button>
            </div>
            <!-- Hier spezifizieren wir ein Bild welches zu unserer App passt -->
            <div class="col-lg-6 überblick-rechts">
                <img class="app-bild" src="images/title_pic.png" />
            </div>
        </div>
</section>
```

#### styles.css

```css
/* ============================= */
/* ===== Allgemeine Styles ===== */
/* ============================= */
.grosser-titel {
  font-size: 60px;
  font-weight: bold;
}

.kleiner-titel {
  font-size: 30px;
}

.section-style-2 {
  background-color: #e7ab9a;
  color: white;
}

/* ================================ */
/* ===== Section 2: Überblick ===== */
/* ================================ */
.app-bild {
  width: 80%;
  border-radius: 5%;
}
```

</details>

</details>

### Margin und Padding

Mit Hilfe des Grid-Systems haben wir es jetzt schon geschafft unsere App auf verschiedene Bildschirmgrößen anzupassen. Nun wollen wir noch die Abstände zwischen den Elementen anpassen. Hierfür verwenden wir die CSS Eigenschaften `margin` und `padding`.

:::tip Margin & Padding

**Padding** ist der Abstand zwischen dem Inhalt eines Elements (wie Text oder ein Bild) und dem Rand des Elements.

**Margin** hingegen ist der Abstand zwischen dem Rand eines Elements und dem nächsten Element.

Um es dir leichter zu merken: Padding ist der Abstand innerhalb eines Elements, während Margin der Abstand zwischen den Elementen ist.

:::

#### Beispiel

Wenn du zum Beispiel ein Bild auf deiner Website hast, kannst du das Padding ändern, um den Abstand zwischen dem Bild und dem Text, der das Bild umgibt, zu vergrößern oder zu verkleinern. Das Padding wirkt sich auf den Inhalt des Elements aus.

Das Margin hingegen wirkt sich auf den Abstand zwischen den Elementen aus. Wenn du zwei Bilder auf deiner Website hast, kannst du das Margin zwischen ihnen ändern, um den Abstand zu vergrößern oder zu verkleinern.

In CSS fügst du Padding und Margin mit den Eigenschaften `padding` und `margin` hinzu. Du kannst die Eigenschaften mit einem Wert von 0 bis 100% verwenden. Der Wert gibt den Abstand in Prozent des Elementes an.

Der erste Wert gibt dabei den Abstand für links und rechts an, der zweite Wert gibt den Abstand für oben und unten an.

#### Beispiel

```css
/* Padding */
padding: 10% 5%;
/* Margin */
margin: 10% 5%;
```

### Aufgabe 4: Margin und Padding

<details>
<summary>Aufgabe</summary>

Nun wollen wir die Abstände zwischen den Elementen anpassen. Hierfür verwenden wir die CSS Eigenschaften `margin` und `padding`.

1. Füge in der CSS-Datei eine neue Regel mit dem Selektor `#überblick` ein.
2. Gebe dem überblick-Element ein Padding von 10%.
3. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.überblick-links` ein.
4. Gebe dem überblick-links Element ein Padding nach oben von 10% (Hinweis: Padding nach oben kannst du mit dem Attribut `padding-top` konfigurieren).
5. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.btn` ein.
6. Gebe dem Button ein Margin von 10% nach oben und unten.

<details>
<summary>Endlösung</summary>

#### style.css

```css
/* Section 2: Überblick */

#überblick {
  padding: 10%;
}

.überblick-links {
  padding-top: 10%;
}

.btn {
  margin: 10% 0;
}
```

</details>

</details>

### CSS Funktionen

In CSS kannst du auch Funktionen verwenden. Diese Funktionen sind sehr nützlich, um bestimmte Eigenschaften zu berechnen. Eine der häufigsten Funktionen ist `rotate()`. Mit dieser Funktion kannst du ein Element drehen, z.B. ein Bild.

Dabei kannst du den Winkel in Grad angeben, um das Element zu drehen. Der positive Winkel dreht das Element im Uhrzeigersinn, während der negative Winkel das Element gegen den Uhrzeigersinn dreht.

#### Beispiel

```css
transform: rotate(15deg);
```

### Aufgabe 5: Bild drehen

<details>
<summary>Aufgabe</summary>

1. Gehe in der CSS-Datei zu der Regel mit dem Selektor `.app-bild`.
2. Füge der Regel die Eigenschaft `transform` hinzu.
3. Verwende die Funktion `rotate()` um das Bild um 15 Grad zu drehen.

<details>
<summary>Endlösung</summary>

#### style.css

```css
.app-bild {
  width: 80%;
  border-radius: 5%;
  transform: rotate(15deg);
}
```

</details>

</details>

## 5. Abschluss

In dieser Lektion haben wir einiges gelernt. Wir haben uns mit dem Grid-System von Bootstrap beschäftigt und gelernt wie wir es verwenden können, um unsere App auf verschiedene Bildschirmgrößen anzupassen. Außerdem haben wir uns mit den Eigenschaften `margin` und `padding` beschäftigt und gelernt wie wir diese verwenden können, um die Abstände zwischen den Elementen zu verändern.

In der nächsten Lektionen lernen wir weitere Bootstrap-Komponenten kennen und bauen unsere Website weiter aus.
