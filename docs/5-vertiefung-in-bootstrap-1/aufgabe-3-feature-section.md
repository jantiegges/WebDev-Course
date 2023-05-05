# Aufgabe 3: Layout der Feature Section

1. Gehe in den Code-Abschnitt der Feature Section.

```html
<section class="section-style-1" id="features">
  <div class="container-fluid text-center">
    <!-- Dein Code -->
  </div>
</section>
```

2. Füge die Bootstrap-Klasse `row` dem `div`-Element hinzu.

Wir wollen nun unsere 3 Feature-Blöcke einfügen. Erinnere dich zurück an das Grid-System von Bootstrap. Welche Klasse müssen wir verwenden, damit die 3 Blöcke nebeneinander angezeigt werden?

3. Innerhalb des `div`-Elements füge drei weitere `div`-Elemente mit der Klasse `feature-box` sowie der Klasse für die Spaltenbreite ein.

_Tipp: Die Klasse für die Spaltenbreite hatte 3 Parts. Der erste Part für die Column-Definition, der zweite Part für die Bildschirmbreite (z.B. lg) und der dritte Part für die Anzahl der Spalten (z.B. 4)._

4. Diese Section hat die Klasse `section-style-1`. Diese Klasse haben wir noch nicht mit CSS konfiguriert. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.section-style-1` ein.
5. Konfiguriere die Hintergrundfarbe (z.B. auf `#E7AB9A`) und die Textfarbe (z.B. auf `white`) der Section.

<details>
<summary>Lösung</summary>

#### index.html

```html
<section class="section-style-1" id="features">
  <div class="container-fluid text-center">
    <!-- Wir wollen, dass die Features nebeneinander angezeigt werden. Dafür verwenden wir wieder die Bootstrap-Klasse "row" -->
    <div class="row">
      <div class="feature-box col-lg-4">
        <!-- Hier ist Feature 1 -->
      </div>

      <div class="feature-box col-lg-4">
        <!-- Hier ist Feature 2 -->
      </div>

      <div class="feature-box col-lg-4">
        <!-- Hier ist Feature 3 -->
      </div>
    </div>
  </div>
</section>
```

#### styles.css

```css
.section-style-1 {
  background-color: #ede9d5;
  color: black;
}
```

</details>
