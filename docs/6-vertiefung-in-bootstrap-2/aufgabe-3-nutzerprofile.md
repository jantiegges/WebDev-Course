# Aufgabe 3: Nutzerprofile

1. Lade ein Bild eines Nutzers herunter und speichere es in einem Ordner namens `images`.
2. Füge das Bild in ein carousel-item ein und gebe dem Bild die Klasse `bewertung-bild`.
3. Ändere die Größe des Bildes, sodass es gut zur Größe des Bildes passt (z.B. 10%).
4. Runde die Ecken des Bildes ab, sodass es wie ein Profilbild aussieht.

:::tip Tipp: Border Radius
Dafür kannst du die Eigenschaft `border-radius` verwenden.
:::

5. Füge den Namen und den Ort des Nutzers in ein `p`-Element ein.
6. Erreiche dass das Bild etwas Abstand zum Text hat.

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
  <img class="bewertung-bild" src="images/profile1.jpg" />
  <p>Maria, Berlin</p>
</div>
```

#### styles.css

```css
.bewertung-bild {
  width: 10%;
  border-radius: 100%;
  margin: 2%;
}
```

</details>
