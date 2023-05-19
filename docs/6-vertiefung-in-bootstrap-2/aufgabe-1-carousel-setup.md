# Aufgabe 1: Bewertungen Carousel Setup

1. Gehe in der Datei `index.html` zu der Section mit der ID `bewertungen`.

```html
<!-- ========================================= -->
<!-- ===== Section 4: Nutzer-Bewertungen ===== -->
<!-- ========================================= -->
<!-- Hier werden die Nutzer-Bewertungen angezeigt -->
<section class="section-style-2" id="bewertungen">
  <!-- Dein Code -->
</section>
```

2. Gehe auf die Bootstrap-Dokumentation und suche nach dem Carousel-Element. [Hier](https://getbootstrap.com/docs/5.0/components/carousel/) findest du die Dokumentation. Suche dir ein Beispiel aus und kopiere den Code dorthin wo du den Kommentar `Dein Code` siehst.
3. Ändere die id des Carousels in `bewertungen-carousel` und füge diese id auch in den Pfeilen ein.

:::tip Tipp: Carousel Pfeile
Wir verlinken das Carousel mit den Pfeilen, indem wir die id des Carousels in den href-Attributen der Pfeile einfügen.
:::

4. Füge die Klasse `text-center` zu dem Carousel hinzu.
5. Lösche alles was innerhalb der `div`-Elemente mit der Klasse `carousel-items` steht.
6. Füge der Bewertungen-Section ein Padding hinzu (z.B. 5%)

<details>
<summary>Lösung</summary>

#### index.html

```html
<section class="section-style-2" id="bewertungen">
  <!-- In dieser Section werden die Nutzer-Bewertungen angezeigt. Dafür nutzen wir die Bootstrap-Klasse "carousel" -->
  <div class="carousel slide text-center" id="bewertungen-carousel">
    <div class="carousel-inner">
      <!-- Hier spezifizieren wir die einzelnen Bewertungen. Dafür verwenden wir die Bootstrap-Klasse "carousel-item" -->
      <div class="carousel-item active">
        <!-- Bewertung 1 -->
      </div>
      <div class="carousel-item">
        <!-- Bewertung 2 -->
      </div>
    </div>
    <!-- Hier spezifizieren wir die Pfeile, mit denen der Nutzer zwischen den einzelnen Bewertungen wechseln kann -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#bewertungen-carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#bewertungen-carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>
```

#### style.css

```css
/* ================================== */
/* ===== Section 4: Bewertungen ===== */
/* ================================== */
#bewertungen {
  padding: 5%;
}
```

</details>
