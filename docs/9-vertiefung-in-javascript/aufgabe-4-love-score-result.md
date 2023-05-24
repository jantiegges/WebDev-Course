# Aufgabe 4: Love Score Result Page

Wir wollen nun eine Seite erstellen, die das Ergebnis des Love Scores anzeigt. Dazu müssen wir die Funktion `showResult` anpassen.

1. Gehe in die Datei `script.js` in die Funktion `showResult` und lösche den Alert.
2. Ändere den Text auf der result Seite. Das Text-Element hat die Klasse `result-text` und du kannst die Eigenschaft `innerHTML` verwenden um den Text zu ändern.
3. Ändere das Bild auf der result Seite. Das Bild-Element hat die Klasse `result-img` und du kannst die Eigenschaft `src` verwenden einen Link zu einem Bild oder Gif zu setzen.
4. Schreibe die Namen auf die result Seite. Die Namen sollen in den Elementen mit den IDs `name1` und `name2` angezeigt werden. Du kannst die Eigenschaft `innerHTML` verwenden um den Text zu ändern.
5. Schreibe den Love Score in das Herz. Das Herz-Element hat die Klasse `fa-layers-text` und du kannst die Eigenschaft `innerHTML` verwenden um den Text zu ändern.
6. Verstecke die input box. Das input-Element hat die ID `input` und du kannst die Eigenschaft `style.display` auf `none` setzen um das Element zu verstecken.
7. Zeige die result Seite. Das result-Element hat die ID `result` und du kannst die Eigenschaft `style.display` auf `block` setzen um das Element anzuzeigen.

Bevor du deinen Code testest, musst du noch etwas code einfügen, damit alles richtig funktioniert.

Du musst den Event Listener so verändern, dass die Seite nicht neu geladen wird, wenn du auf den Button klickst. Dazu musst du `event.preventDefault()` aufrufen. `event` ist das erste Argument der Funktion, die du dem Event Listener übergibst.

```js
button.addEventListener("click", function (event) {
  event.preventDefault();
  // dein restlicher Code
});
```

Außerdem kannst du den folgenden Code hinzufügen, damit der Button für eine neue Berechnung funktioniert. Füge den Code einfach an das Ende der `script.js` Datei ein.

```js
// Event Listener für den Restart Button
document.querySelector("#restart").addEventListener("click", function (event) {
  // input Felder leeren
  document.querySelector("#name1-input").value = "";
  document.querySelector("#name2-input").value = "";
  // Input Felder anzeigen
  input.style.display = "block";
  // Restult Seite verstecken
  result.style.display = "none";
  // Herz Icon zurücksetzen
  document
    .querySelector(".result-icon")
    .classList.remove("fa-heart-crack", "fa-shake");
  document.querySelector(".result-icon").classList.add("fa-heart", "fa-beat");
});
```

<details>
<summary>Lösung</summary>

#### script.js

```js
// sichere die Input Box in einer Variable
const input = document.querySelector("#input");
// sichere die Result Seite in einer Variable
const result = document.querySelector("#result");

function showResult(name1, name2, loveScore) {
  // ändere den Text auf der result Seite
  document.querySelector(".result-text").innerHTML =
    "Ihr seid ein Perfect Match";

  // ändere das Bild auf der result Seite
  document.querySelector(".result-img").src =
    "https://www.icegif.com/wp-content/uploads/2022/08/icegif-879.gif";

  // schreibe die namen auf die result Seite
  document.querySelector("#name1").innerHTML = name1;
  document.querySelector("#name2").innerHTML = name2;

  // schreibe den love score in das Herz
  document.querySelector(".fa-layers-text").innerHTML = loveScore + "%";

  // verstecke die input box
  input.style.display = "none";
  // zeige die result Seite
  result.style.display = "block";
}
```

</details>
