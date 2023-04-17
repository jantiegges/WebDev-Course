# Aufgabe 3: Überblick Section Setup

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
