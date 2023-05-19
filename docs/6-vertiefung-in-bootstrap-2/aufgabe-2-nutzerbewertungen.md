# Aufgabe 2: Nutzerbewertungen

1. Füge in den Container mit der Klasse `carousel-item` eine Überschrift mit der Klasse `bewertung-text`hinzu. Wähle dafür die Klasse `h2` aus.
2. Schreibe in der Überschrift eine Bewertung des Nutzers in Anführungszeichen.
3. Wiederhole Schritt 1 und 2 für die anderen `carousel-item`-Elemente.
4. Ändere die Schriftgröße der Überschrift, sodass sie gut zur Größe des Bildes passt (z.B. 40px).
5. Bewirke nun noch, dass die Bewertung gut auf die Bildschirmgröße passt.

:::tip Tipp: Margin 
Dafür kannst du die Eigenschaft `margin` verwenden.
:::

<details>
<summary>Lösung</summary>

#### index.html

```html
<div class="carousel-item active">
  <!-- Hier spezifizieren wir den Text, das Bild und den Namen des Nutzers -->
  <h2 class="bewertung-text">
    "Die beste App der Welt! Sie ist einfach zu bedienen, hat alle Funktionen,
    die ich brauche und macht unfassbar Spaß."
  </h2>
</div>
```

#### styles.css

```css
.bewertung-text {
  font-size: 40px;
  margin: 0 10%;
}
```

</details>
