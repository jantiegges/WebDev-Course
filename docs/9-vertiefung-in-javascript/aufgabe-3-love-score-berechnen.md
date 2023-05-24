# Aufgabe 3: Love Score berechnen

1. Gehe in die Datei `script.js` in die Funktion mit dem Namen `berechneLoveScore`.
2. Lösche den bisherigen Code aus der Funktion.
3. Erstelle eine Variable mit dem Namen `loveScore` und weise ihr einen zufälligen Wert zwischen 0 und 100 zu.

_Tipp: In Javascript kannst du zahlen multiplizieren mit `*` und zufällige Zahlen generieren mit `Math.random()`. Erinnere dich daran dass `Math.random()` eine zufällige Zahl zwischen 0 und 1 generiert._

4. Danach soll der Wert der Variable `loveScore` auf eine ganze Zahl gerundet werden, damit wir keine unnötigen Nachkommastellen haben. Hierfür kannst du den folgenden Code kopieren:

```js
loveScore = Math.floor(loveScore) + 1;
```

5. Gebe den Wert der Variable `loveScore` zurück.

<details>
<summary>Lösung</summary>

#### script.js

```js
function berechneLoveScore() {
  // erstelle den Love Score
  let loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  // gebe den Love Score zurück
  return loveScore;
}
```

</details>
