# Aufgabe 5: Preispläne Content

1. Füge in den `card-header`-Elemente einen Titel mit der Klasse `kleiner-titel` hinzu.

_Hinweis: Wir reusen die Klasse `kleiner-titel` aus einer vorherigen Aufgabe._

2. Füge in den `card-body`-Elemente eine große Überschrift mit dem Preis hinzu.
3. Füge in den `card-body`-Elemente eine ungeordnete Liste mit den Features des Preisplans hinzu. Geben den Listenelementen die Klasse `list-unstyled` mit.

_Hinweis: Die Klasse `list-unstyled` entfernt die Standard-Liste-Styling._

<details>
<summary>Lösung</summary>

#### index.html (eine Card)

```html
<div class="card rounded-3">
  <div class="card-header">
    <h3 class="kleiner-titel">Free</h3>
  </div>
  <div class="card-body">
    <h1>0€</h1>
    <ul class="list-unstyled">
      <li>Limitierte Features</li>
      <li>Werbung</li>
      <li>Kein Support</li>
    </ul>
  </div>
</div>
```

</details>
