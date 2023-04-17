# Aufgabe 5: Überblick Rechts

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
