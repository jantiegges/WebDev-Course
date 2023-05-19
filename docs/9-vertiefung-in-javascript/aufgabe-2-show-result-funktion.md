# Aufgabe 2: Show Result Funktion erstellen

Wir wollen nun das anzeigen unseres Ergebnisses in eine Funktion mit den Namen `showResult` auslagern. Die Funktion soll die Namen der beiden Personen und den Love Score als Parameter übergeben bekommen. Die Funktion soll dann einen Alert mit dem Text "`name1` und `name2` matchen zu `loveScore`%!" anzeigen.

1. Gehe in die Datei `script.js` und erstelle eine Funktion mit dem Namen `showResult`.
2. Die Funktion soll die Namen der beiden Personen und den Love Score als Parameter übergeben bekommen.
3. Die Funktion soll einen Alert mit dem Text "`name1` und `name2` matchen zu `loveScore`%!" anzeigen.

<details>
<summary>Lösung</summary>

#### script.js

```js
// erstelle einen Event Listener für den Button
button.addEventListener("click", function () {
  // speichere die Namen aus den Input Feldern
  const name1 = document.querySelector("#name1-input").value;
  const name2 = document.querySelector("#name2-input").value;

  // rufe die Funktion berechneLoveScore auf
  const loveScore = berechneLoveScore();

  // rufe die Funktion showResult auf
  showResult(name1, name2, loveScore);
});

function showResult(name1, name2, loveScore) {
  alert(name1 + " und " + name2 + " matchen zu " + loveScore + "%!");
}
```

</details>
