# Aufgabe 4: Event Listener erstellen

1. Gehe in die Datei `script.js` und erstelle einen Event Listener für den Button mit der id `calculate`.
2. Wenn der Button geklickt wird, soll ein Alert mit einem Text erscheinen (z.B. "Button wurde geklickt!").

<details>
<summary>Lösung</summary>

#### script.js

```js
document.querySelector("#calculate").addEventListener("click", () => {
  alert("Button wurde geklickt!");
});
```

</details>
