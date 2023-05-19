# Aufgabe 5: Font Awesome Icons

1. Gehe auf [fontawesome.com](https://fontawesome.com/). Klicke oben in der Navigation auf [Icons](https://fontawesome.com/icons). Dort findest du eine Liste mit allen verfügbaren Icons. Suche dir ein Icon aus und kopiere den HTML Code.
2. Füge das Icon in den oberen Bereich der Feature Box ein. Du kannst den HTML Code einfach in die HTML Datei kopieren.
3. Erreiche dass das Icon ausgefüllt ist und justiere die Größe mit der Klasse `fa-4x` (4x steht für 4 mal so groß wie die Standardgröße).
4. Wiederhole die Schritte für die anderen beiden Feature Boxen.
5. Gebe den Icons eine Farbe.
6. Erezuge einen Abstand zwischen den Icons und dem Text.

:::tip Tipp: Icons 
Um die Icons mit CSS zu stylen, kannst du ihnen eine Klasse geben. Zum Beispiel `icon`.
:::

<details>
<summary>Lösung</summary>

#### index.html

```html (eine Feature Box)
<div class="feature-box col-lg-4">
  <!-- Hier spezifizieren wir die Icons, die zu den Features passen -->
  <i class="icon fas fa-trophy fa-4x"></i>
</div>
```

#### styles.css

```css
.icon {
  color: #df7857;
  margin-bottom: 10%;
}
```

</details>
