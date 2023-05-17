---
sidebar_position: 3
---

# 2. Einführung in HTML und CSS

In dieser Lektion lernen wir die Grundlagen von HTML und CSS kennen. Wir werden eine einfache Website erstellen, die wir dann mit CSS gestalten werden. Zunächst werdem wir jedoch lernen wie wir ein neues Projekt erstellen.

## 1. Neues Projekt erstellen

Um ein neues Projekt zu erstellen, müssen wir zuerst in unserem Dateimanager einen neuen Ordner erstellen. Es ist wichtig, dass alle Dateien des Projektes in einem Ordner gespeichert werden. Der Name des Ordners sollte dem Namen des Projektes entsprechen.

Zum Programmieren verwenden wir einen Code-Editor. Ein Code-Editor ist ein Programm, mit dem wir Textdateien bearbeiten können. Wir können den Code-Editor verwenden, um unsere HTML- und CSS-Dateien zu erstellen und zu bearbeiten. Der Vorteil eines Code-Editors ist, dass er uns hilft, Fehler in unserem Code zu finden, Autovervollständigung bietet und uns hilft, unseren Code zu formatieren.

Ein Beispiel für einen Code-Editor ist [Visual Studio Code](https://code.visualstudio.com/).

---

### [🤓 Aufgabe 1: Ein neues Projekt erstellen](./aufgabe-1-projekt-erstellen)

---

## 2. HTML

HTML steht für HyperText Markup Language. Es ist eine Programmiersprache, die verwendet wird, um Webseiten zu erstellen. HTML ist eine sogenannte Markup-Sprache, das bedeutet, dass sie Texte mit Tags markiert, die die Struktur der Website beschreiben.

### HTML-Datei

Die Grundlage jeder Website ist eine HTML-Datei. Eine HTML-Datei ist eine Textdatei, die mit dem HTML-Code geschrieben wird. HTML-Dateien haben die Endung `.html`. Alle HTML-Dateien müssen mit dem Tag `<html>` beginnen und mit dem Tag `</html>` enden. Der Inhalt der HTML-Datei wird zwischen den beiden Tags geschrieben. Außerdem haben sie eine Kopf- und einen Körperbereich. Der Kopfbereich wird mit dem Tag `<head>` gekennzeichnet und der Körperbereich mit dem Tag `<body>`.

:::info Kopf- und Körperbereich
Der Kopfbereich `<head> </head>` enthält Informationen über die Website, die nicht angezeigt werden.

Der Körperbereich `<body> </body>` enthält den Inhalt der Website, der angezeigt wird.
:::

---

### [🤓 Aufgabe 2: Eine HTML-Datei erstellen](./aufgabe-2-html-datei-erstellen)

---

### HTML-Elemente

HTML-Elemente sind die Grundbausteine einer HTML-Datei. Sie werden mit Tags gekennzeichnet, die mit einem `<` und einem `>` beginnen und enden. Ein HTML-Element besteht aus einem Start-Tag und einem End-Tag. Das Start-Tag beginnt mit einem `<` und dem Namen des Elements, z.B. `<p>`. Das End-Tag beginnt mit einem `</` und dem Namen des Elements, z.B. `</p>`. Der Inhalt des Elements wird zwischen den beiden Tags geschrieben.

Du hast bereits ein HTML-Element gesehen, wenn du die Aufgabe 2 gelöst hast. Nun wollen wir zwei weitere HTML-Elemente kennenlernen.

#### Heading-Elemente

Heading-Elemente werden verwendet, um Überschriften zu erstellen. Es gibt sechs verschiedene Heading-Elemente, die mit den Tags `<h1>` bis `<h6>` gekennzeichnet werden. Je kleiner die Zahl, desto größer ist die Überschrift. Ein Beispiel für ein Heading-Element ist:

```html
<h1>Überschrift 1</h1>
```

> <h1>Überschrift 1</h1>

#### Absatz-Element

Absatz-Elemente werden verwendet, um Absätze zu erstellen. Sie werden mit dem Tag `<p>` gekennzeichnet. Ein Beispiel für ein Absatz-Element ist:

```html
<p>Dies ist ein Absatz.</p>
```

> <p>Dies ist ein Absatz.</p>

---

### [🤓 Aufgabe 3: HTML-Elemente](./aufgabe-3-html-elemente)

---

Um die HTML-Elemente zu sehen, die wir in dieser Lektion erstellt haben, kannst du die Datei `index.html` in deinem Browser öffnen. Dazu musst du die Datei in deinem Code-Editor öffnen und mit der rechten Maustaste auf die Datei klicken. Hier wähle `Öffnen mit` aus und wähle den Browser aus, mit dem du die Datei öffnen möchtest. Ein Beispiel für einen Browser ist [Google Chrome](https://www.google.com/chrome/). Wenn du etwas an der Website änderst, musst du die Datei speichern und den Browser aktualisieren, damit die Änderungen angezeigt werden.

## 3. CSS

CSS steht für Cascading Style Sheets. Es ist eine Programmiersprache, die verwendet wird, um die Darstellung von Webseiten zu gestalten. CSS ist eine sogenannte Style-Sprache, das bedeutet, dass sie Texte mit Regeln markiert, die die Darstellung der Website beschreiben.

### CSS-Datei

CSS-Dateien haben die Endung `.css`. CSS-Dateien werden in HTML-Dateien eingebunden. Das geschieht mit dem Tag `<link>`, der in den Kopfbereich der HTML-Datei geschrieben wird. Das Attribut `rel` muss den Wert `stylesheet` haben. Das Attribut `href` muss den Pfad zur CSS-Datei enthalten. Ein Beispiel für einen Link zu einer CSS-Datei ist:

```html
<link rel="stylesheet" href="style.css" />
```

---

### [🤓 Aufgabe 4: Eine CSS-Datei erstellen und verlinken](./aufgabe-4-css-datei-erstellen)

---

### CSS-Regeln

Nun wollen wir lernen, wie wir mit CSS-Regeln die Darstellung von HTML-Elementen gestalten können. CSS-Regeln werden verwendet, um die Darstellung von HTML-Elementen zu gestalten. Sie bestehen aus einem Selektor und einem Deklarationsblock. Der Selektor beschreibt das HTML-Element, das gestaltet werden soll (z.B. ein Heading Element). Der Deklarationsblock enthält die Eigenschaften und Werte, die das HTML-Element gestalten sollen.

Nun wollen wir zwei verschiedene CSS-Regeln kennenlernen.

#### Textfarbe

Mit der CSS-Eigenschaft `color` können wir die Textfarbe eines HTML-Elements ändern. Der Wert der Eigenschaft muss eine Farbe sein. Eine Farbe kann entweder als Farbname (z.B. `red`) oder als Farbcode (z.B. `#ff0000`) angegeben werden. Ein Beispiel für eine CSS-Regel, die die Textfarbe eines Heading-Elements ändert, ist:

```css
h1 {
  color: red;
}
```

#### Hintergrundfarbe

Mit der CSS-Eigenschaft `background-color` können wir die Hintergrundfarbe eines HTML-Elements ändern. Der Wert der Eigenschaft muss eine Farbe sein. Eine Farbe kann entweder als Farbname (z.B. `red`) oder als Farbcode (z.B. `#ff0000`) angegeben werden. Ein Beispiel für eine CSS-Regel, die die Hintergrundfarbe eines Absatz-Elements ändert, ist:

```css
p {
  background-color: red;
}
```

---

### [🤓 Aufgabe 5: Farben mit CSS](./aufgabe-5-farben-mit-css)

---

Nun wollen wir drei weitere CSS-Regeln kennenlernen, die wir für das Gestalten von Text verwenden können.

#### Schriftart

Mit der CSS-Eigenschaft `font-family` können wir die Schriftart eines HTML-Elements ändern. Der Wert der Eigenschaft muss eine Schriftart sein. Ein Beispiel für eine Schriftart ist `Arial`.

```css
h1 {
  font-family: "Arial";
}
```

#### Schriftgröße

Mit der CSS-Eigenschaft `font-size` können wir die Schriftgröße eines HTML-Elements ändern. Der Wert der Eigenschaft muss eine Schriftgröße sein. Eine Schriftgröße kann entweder als absoluter Wert (z.B. `12px`) oder als relativer Wert (z.B. `1.2em`) angegeben werden. Ein Beispiel für eine CSS-Regel, die die Schriftgröße eines Absatz-Elements ändert, ist:

```css
p {
  font-size: 12px;
}
```

#### Schriftposition

Mit der CSS-Eigenschaft `text-align` können wir die Schriftposition eines HTML-Elements ändern. Der Wert der Eigenschaft muss eine Schriftposition sein. Eine Schriftposition kann entweder `left`, `center` oder `right` sein. Ein Beispiel für eine CSS-Regel, die die Schriftposition eines Absatz-Elements ändert, ist:

```css
p {
  text-align: center;
}
```

---

### [🤓 Aufgabe 6: Text mit CSS](./aufgabe-6-text-mit-css)

---

## 4. Abschluss

Nun hast du bereits einiges über HTML und CSS gelernt und kannst deine ersten Webseiten erstellen. Probier gerne aus, was du gelernt hast und erstelle deine eigene Website. Viel Spaß!

In der nächsten Lektion vertiefen wir unser Wissen über HTML und CSS und lernen und du lernst kennen wie wir unsere Website noch schöner gestalten können.

Die fertigen Dateien für die Aufgaben findest du [hier](https://github.com/jantiegges/starcode_web_development_course/tree/main/2-einführung-in-html-und-css).

---

## Links

[Visual Studio Code](https://code.visualstudio.com/)
