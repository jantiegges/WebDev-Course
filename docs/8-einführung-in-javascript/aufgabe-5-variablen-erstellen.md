# Aufgabe 5: Variablen erstellen

1. Lösche den bisherigen Code in der Datei `script.js`.
2. Erstelle eine Variable für den Button und speichere das Element in der Variable. Der Button hat die ID `calculate`.
3. Erstelle einen Event Listener für den Button, welche bei einem `click` Event ausgeführt wird.
4. In dem Event Listener sollen zunächst die Namen aus den Input Feldern gespeichert werden. Die Input Felder haben die IDs `name1-input` und `name2-input`.

_**Tipp:** Um den Wert eines Input Feldes zu bekommen, kannst du die `value` Eigenschaft verwenden. Wenn du ein Input Feld mit der ID `name1-input` hast, kannst du den Wert des Input Feldes mit `document.querySelector("#name1-input").value` bekommen._

5. Erstelle einen Alert der einen Text mit den Namen und dem Love Score anzeigt. Der Text soll folgendermaßen aussehen: `name1 und name2 matchen zu 100%!`.

:::tip Sätze aneinander hängen
Um zwei Sätze aneinander zu hängen, kannst du den `+` Operator verwenden. Wenn du zwei Variablen `name1` und `name2` hast, kannst du diese mit dem `+` Operator aneinander hängen: `name1 + name2`. Wenn du einen Text an eine Variable anhängen möchtest, musst du den Text in Anführungszeichen setzen: `name1 + " und " + name2`.

#### Beispiel

```js
const name1 = "Max";
const name2 = "Moritz";

const text = name1 + " und " + name2 + " matchen zu 100%!";
```

:::

<details>
<summary>Lösung</summary>

#### script.js

```js
// sichere den Button in einer Variable
const button = document.querySelector("#calculate");

// erstelle einen Event Listener für den Button
button.addEventListener("click", function (event) {
  // speichere die Namen aus den Input Feldern
  const name1 = document.querySelector("#name1-input").value;
  const name2 = document.querySelector("#name2-input").value;

  // erstelle einen Alert der einen Text mit den Namen und dem Love Score anzeigt
  alert(name1 + " und " + name2 + " matchen zu 100%!");
});
```

</details>
