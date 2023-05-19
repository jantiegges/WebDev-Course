# Aufgabe 7: CSS Anordnung

Um unsere Website noch etwas ansprechender zu gestalten, wollen wir nun die Liste der Hobbies und das Bild nebeneinander anordnen. Hier können wir wieder die Klassen verwenden, die wir in der letzten Aufgabe erstellt haben.

1. Öffne die Datei `style.css`.
2. Gehe in den CSS-Selektor, der die Klasse `hobbies-bild` auswählt.
3. Ändere die Breite der Klasse `hobbies-bild`, sodass das Element die Hälfte der Breite des Bildschirms einnimmt. (_Tipp: Mit Prozentangaben können wir die Breite relativ zur Breite des Bildschirms angeben._)
4. Veränder die Position des Elements, sodass es auf der **linken** Seite des Bildschirms angezeigt wird.

<details>
  <summary>Lösung</summary>

```css
.hobbies-bild {
  width: 50%;
  float: left;
}
```

</details>

5. Gehe in den CSS-Selektor, der die Klasse `hobbies-text` auswählt.
6. Ändere die Breite der Klasse `hobbies-text`, sodass das Element die Hälfte der Breite des Bildschirms einnimmt.
7. Veränder die Position des Elements, sodass es auf der **rechten** Seite des Bildschirms angezeigt wird.

<details>
  <summary>Lösung</summary>

```css
.hobbies-text {
  width: 50%;
  float: right;
}
```

</details>

Als letztes wollen wir noch erreichen, dass das Bild mittig in dem Container angezeigt wird. Dazu können wir ein CSS-Attribut verwenden, welches wir bereits in der letzten Lektion kennengelernt haben.

8. Gehe in den CSS-Selektor, der die Klasse `hobbies-bild` auswählt.
9. Ändere die Position des Elements, sodass es mittig in dem Container angezeigt wird.

:::tip Tipp: Mittiger Text
Erinner dich daran, wie wir in der letzten Lektion den Text mittig angezeigt haben.
:::

<details>
  <summary>Lösung</summary>

```css
.hobbies-bild {
  width: 50%;
  float: left;
  text-align: center;
}
```

</details>
