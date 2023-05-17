---
sidebar_position: 8
---

# 7. Abschluss Bootstrap

Dies ist die letzte Bootstrap-Lektion, in der wir unsere Website finalisieren werden. Anschließend zeigen wir euch noch eine Möglichkeit wie ihr eure Website online stellen könnt.

## 1. Navigationszeile

Die Navigationszeile ist ein wichtiger Bestandteil einer Website. Sie ermöglicht es dem Benutzer, sich auf der Website zu orientieren und zwischen den verschiedenen Seiten zu navigieren. Wir werden die Navigationszeile mit Bootstrap erstellen.

Zunächst einmal könnt ihr euch die [Bootstrap Dokumentation Navbar](https://getbootstrap.com/docs/5.0/components/navbar/) anschauen. Dort seht ihr die verschiedenen Möglichkeiten, die Bootstrap bietet, um eine Navigationszeile zu erstellen.

Wir gucken uns nun den Code für die Navigationszeile und die einzelnen Bestandteile etwas genauer an:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
```

Wir erstellen ein `nav` Element mit der Klasse `navbar`. Die Klasse `navbar-expand-lg` sorgt dafür, dass die Navigationszeile auf großen Bildschirmen immer sichtbar ist. Die Klasse `navbar-light` sorgt dafür, dass die Navigationszeile hell ist. Die Klasse `bg-light` sorgt dafür, dass die Navigationszeile einen hellen Hintergrund hat.

```html
<a class="navbar-brand" href="#">Navbar</a>
```

Innerhalb des `div` Elements erstellen wir ein `a` Element mit der Klasse `navbar-brand`. Dieses `a` Element sorgt dafür, dass der Name der Website in der Navigationszeile angezeigt wird. Der Name der Website wird mit dem `href` Attribut verlinkt. Wenn der Benutzer auf den Namen der Website klickt, wird er auf die Seite weitergeleitet, die im `href` definiert ist.

```html
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSections"
>
  <span class="navbar-toggler-icon"></span>
</button>
```

Anschließend definieren wir ein `button` Element mit der Klasse `navbar-toggler`. Dieses Element wird auf kleinen Bildschirmen angezeigt und ermöglicht es dem Benutzer, die Navigationszeile zu öffnen und zu schließen. Das `button` Element hat die Attribute `data-toggle` und `data-target`. Diese Attribute sorgen dafür, dass die Navigationszeile geöffnet und geschlossen wird, wenn der Benutzer auf das `button` Element klickt. Das `data-target` Attribut definiert die ID des Elements, das geöffnet und geschlossen werden soll. In unserem Fall ist das die ID `navbarSections`.

```html
<div class="collapse navbar-collapse" id="navbarSections">
  <div class="navbar-nav">
    <!-- Hier spezifizieren wir die einzelnen Navigationsbereiche -->
    <a class="nav-item nav-link" href="#überblick">Home</a>
    <a class="nav-item nav-link" href="#features">Features</a>
    <a class="nav-item nav-link" href="#bewertungen">Bewertungen</a>
    <a class="nav-item nav-link" href="#preise">Preise</a>
  </div>
</div>
```

Danach erstellen wir ein `div`-Element mit den Klassen `collapse` und `navbar-collapse`. Dieses Element enthält die einzelnen Navigationsbereiche. Die einzelnen Navigationsbereiche werden mit dem `div` Element mit der Klasse `navbar-nav` erstellt. Innerhalb dieses Elements erstellen wir die einzelnen Navigationsbereiche mit dem `a` Element und der Klasse `nav-item`. Die einzelnen Navigationsbereiche werden mit dem `href` Attribut verlinkt. Wenn der Benutzer auf einen Navigationsbereich klickt, wird er auf die Seite weitergeleitet, die im `href` definiert ist.

Nachdem wir nun gesehen haben wie die Navigationszeile aufgebaut ist, können wir sie in der Aufgabe 1 in unsere Website einfügen.

### [🤓 Aufgabe 1: Navigationszeile](aufgabe-1-navbar)

## 2. Footer Section

Am Ende der Website erstellen wir eine Footer Section. Diese Section enthält Informationen über die Website und den Ersteller der Website. Außerdem enthält sie Links zu den Social Media Profilen der Apps.

Für unseren Footer werden wir wieder Font Awesome Icons verwenden. Ihr könnt euch die [Font Awesome Icons](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free) anschauen und die Icons auswählen, die ihr verwenden möchtet.

### [🤓 Aufgabe 2: Footer](aufgabe-2-footer)

## 3. Website veröffentlichen

Als letztes zeigen wir euch noch eine Möglichkeit, wie ihr eure Website online stellen könnt. Dazu verwenden wir Github Pages. Github Pages ist ein Service von Github, mit dem ihr eure Website online stellen könnt. Ihr könnt euch die [Github Pages Dokumentation](https://pages.github.com/) anschauen, um mehr über Github Pages zu erfahren.

:::caution Disclaimer
Bevor du deine Website veröffentlichst, solltest du sicherstellen dass du die Rechte an allen Bildern und Texten auf deiner Website hast. Außerdem solltest du sicherstellen, dass du keine persönlichen Informationen auf deiner Website veröffentlichst.
Wir übernehmen keine Haftung für die Inhalte deiner Website.
:::

### [🤓 Aufgabe 3: Website veröffentlichen](aufgabe-3-website-veroeffentlichen)

## 4. Abschluss

Herzlichen Glückwunsch! Du hast es geschafft! Du hast deine erste Website erstellt und veröffentlicht. Wir hoffen, dass dir der Kurs gefallen hat und du viel gelernt hast. Wenn du Fragen oder Anregungen hast, kannst du uns gerne eine E-Mail schreiben. Wir freuen uns über dein Feedback.
