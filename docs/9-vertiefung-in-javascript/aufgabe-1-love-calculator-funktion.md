# Aufgabe 1: Love Calculator Funktion erstellen

1. Gehe in die Datei `script.js` und erstelle eine Funktion mit dem Namen `berechneLoveScore`.
2. Erstelle eine Variable mit dem Namen `loveScore` und weise ihr den Wert `100` zu.
3. Gebe den Wert der Variable `loveScore` zurück.
4. Rufe die Funktion `berechneLoveScore` in dem Event Listener von der vorherigen Aufgabe auf. Speichere den Wert in einer Variable mit dem Namen `loveScore`.
5. Erstelle einen Alert der einen Text mit den Namen und dem Love Score anzeigt (z.B. "Max und Maria matchen zu 100%!")

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

  // erstelle einen Alert der einen Text mit den Namen und dem Love Score anzeigt
  alert(name1 + " und " + name2 + " matchen zu " + loveScore + "%!");
});

function berechneLoveScore() {
  // erstelle den Love Score
  const loveScore = 100;
  // gebe den Love Score zurück
  return loveScore;
}
```

</details>
