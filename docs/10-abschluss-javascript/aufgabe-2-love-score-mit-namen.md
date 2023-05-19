# Aufgabe 2: Love Score mit Namen

1. Gehe in die Datei `script.js` in die Funktion `berechneLoveScore`.
2. Erstelle eine if-else-Verzweigung, die den Love Score für die Namen "Mädhchen" und "Programmieren" auf 100 setzt.
3. Erstelle noch weitere if-else-Verzweigungen, die dir in den Sinn kommen.
4. Für alle anderen Paare (`else`-Fall) soll ein zufälliger Love Score berechnet werden.

<details>
<summary>Lösung</summary>

#### script.js

```js
function berechneLoveScore(name1, name2) {
  let loveScore;

  // berechne den love score
  if (
    (name1 === "Klara" && name2 === "Jan") ||
    (name1 === "Jan" && name2 === "Klara")
  ) {
    loveScore = 100;
  } else if (
    (name1 === "Mädchen" && name2 === "Programmieren") ||
    (name1 === "Programmieren" && name2 === "Mädchen")
  ) {
    loveScore = 100;
  } else if (
    (name1 === "Brad" && name2 === "Angelina") ||
    (name1 === "Angelina" && name2 === "Brad")
  ) {
    loveScore = 0;
  } else {
    // für alle anderen Paare berechne einen zufälligen Love Score
    loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
  }

  return loveScore;
}
```

</details>
