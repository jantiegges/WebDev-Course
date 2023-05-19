# Aufgabe 4: Feature Beschreibungen

1. Füge in dem HTML-Element mit der Klasse `feature-box` eine Überschrift mit der Klasse `kleiner-titel` und einen Paragraphen für die Beschreibung hinzu. In der Überschrift soll der Titel des Features stehen und in dem Paragraphen sollst du die Beschreibung des Features schreiben.

:::tip Tipp: Kleine Überschrift
Da wir nur eine kleine Überschrift benötigen, kannst du zum Beispiel die `h3`-Überschrift verwenden.
:::

2. Wiederhole Schritt 1 für die anderen beiden `feature-box`-Elemente.
3. Füg den drei `feature-box`-Elementen ein Padding von 5% hinzu.

<details>
<summary>Lösung</summary>

#### index.html (eine Feature Box)

```html
<div class="feature-box col-lg-4">
  <!-- Hier spezifizieren wir die Überschriften und die Beschreibungen der Features -->
  <h3 class="kleiner-titel">Die beste App aller Zeiten</h3>
  <p>
    Die beste App aller Zeiten. Die beste App aller Zeiten. Die beste App aller
    Zeiten.
  </p>
</div>
```

#### styles.css

```css
.feature-box {
  padding: 5%;
}
```

</details>
