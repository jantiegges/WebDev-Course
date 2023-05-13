# Aufgabe 4: Überblick Links

1. Füge eine große Überschrift (`h1`) mit der Klasse `grosser-titel` und dem Text `Die neue Super-Duper-App` ein.
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
