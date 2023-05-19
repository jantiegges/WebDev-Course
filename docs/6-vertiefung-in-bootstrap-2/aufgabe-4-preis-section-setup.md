# Aufgabe 4: Preis Section Setup

1. Gehe in der HTML-Datei zu der Section mit der id `preise`.
2. Füge einen Container mit den Klassen `row` und `text-center` hinzu.
3. Füge drei Spalten mit der Klasse `col` hinzu.
4. Füge in jede Spalte ein `card`-Element mit der Klasse `rounded-3` hinzu.

:::tip Tipp: Abgerundete Ecken 
Die Klasse `rounded-3` gibt den Karten eine abgerundete Ecke.
:::

5. Füge in jedes `card`-Element ein `card-header`-Element hinzu.
6. Füge in jedes `card`-Element ein `card-body`-Element hinzu.

<details>
<summary>Lösung</summary>

#### index.html

```html
<div class="row text-center">
  <div class="col">
    <div class="card rounded-3">
      <div class="card-header">
        <!-- Hier spezifizieren wir den Titel des ersten Preisplans -->
      </div>
      <div class="card-body">
        <!-- Hier spezifizieren wir den ersten Preisplan -->
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card rounded-3">
      <div class="card-header">
        <!-- Hier spezifizieren wir den Titel des zweiten Preisplans -->
      </div>
      <div class="card-body">
        <!-- Hier spezifizieren wir den zweiten Preisplan -->
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card rounded-3">
      <div class="card-header">
        <!-- Hier spezifizieren wir den Titel des dritten Preisplans -->
      </div>
      <div class="card-body">
        <!-- Hier spezifizieren wir den dritten Preisplan -->
      </div>
    </div>
  </div>
</div>
```

</details>
