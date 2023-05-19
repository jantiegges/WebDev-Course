# Aufgabe 1: Love Score Reaktionen

1. Gehe in die Datei `script.js` in die Funktion `showResult`.
2. Erstelle eine `if`-`else if`-`else`-Abfrage, die je nach Love Score eine andere Reaktion anzeigt. Zum Beispiel könnte bei einem Love Score über 90, über 70, über 40 und unter 40 jeweils ein anderer Text und ein anderes Gif angezeigt werden.
3. Zusätzlich, füge zu deiner untersten `else`-Bedingung code hinzu, der die Klasse `fa-heart-crack` und `fa-shake` zu dem Element mit der Klasse `result-icon` hinzufügt. Dadurch wird das Herz rot und es wackelt.

_**Tipp: Du kannst die Klasse `fa-heart-crack` und `fa-shake` mit der Methode `classList.add()` hinzufügen. Zusätzlich musst du noch die Methode `classList.remove()` verwenden, um die Klasse `fa-heart` und `fa-beat` zu entfernen.**_

<details>
<summary>Lösung</summary>

#### script.js

```js
function showResult(name1, name2, loveScore) {
  if (loveScore > 90) {
    document.querySelector(".result-text").innerHTML =
      "Ihr seid ein Perfect Match";
    document.querySelector(".result-img").src =
      "https://www.icegif.com/wp-content/uploads/2022/08/icegif-879.gif";
  } else if (loveScore > 70) {
    document.querySelector(".result-text").innerHTML =
      "Ihr seid ein gutes Match";
    document.querySelector(".result-img").src =
      "https://media1.giphy.com/media/XvZ8PJ4DSqzSM/giphy.gif";
  } else if (loveScore > 40) {
    document.querySelector(".result-text").innerHTML = "Könnte klappen";
    document.querySelector(".result-img").src =
      "https://thumbs.gfycat.com/TintedFondAfricanporcupine-max-1mb.gif";
  } else {
    document
      .querySelector(".result-icon")
      .classList.add("fa-heart-crack", "fa-shake");
    document
      .querySelector(".result-icon")
      .classList.remove("fa-heart", "fa-beat");
    document.querySelector(".result-text").innerHTML = "Das wird nix";
    document.querySelector(".result-img").src =
      "https://media.tenor.com/MKXawzVS31kAAAAC/break-up.gif";
  }
  // restlicher code
}
```

</details>
