# Aufgabe 1: Margin und Padding

1. Füge in der CSS-Datei eine neue Regel mit dem Selektor `#überblick` ein.

:::tip Warum `#überblick` und nicht `.überblick`?
Der Selektor `#überblick` ist ein Selektor für die id `überblick`. Der Selektor `.überblick` ist ein Selektor für die Klasse `überblick`. Wir wollen hier die id `überblick` selektieren, da wir die id `überblick` in der HTML-Datei verwenden.

Ids sind eindeutig und sollten nur einmal verwendet werden.
:::

2. Gebe dem überblick-Element ein Padding von 10%.
3. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.überblick-links` ein.
4. Gebe dem überblick-links Element ein Padding nach oben von 10% (Hinweis: Padding nach oben kannst du mit dem Attribut `padding-top` konfigurieren).
5. Füge in der CSS-Datei eine neue Regel mit dem Selektor `.btn` ein.
6. Gebe dem Button ein Margin von 10% nach oben und unten.

<details>
<summary>Lösung</summary>

#### style.css

```css
/* Section 2: Überblick */

#überblick {
  padding: 10%;
}

.überblick-links {
  padding-top: 10%;
}

.btn {
  margin: 10% 0;
}
```

:::tip Warum die `0` nach `margin: 10%`?
Die `0` nach `margin: 10%` ist eine Kurzschreibweise für `margin: 10% 0 10% 0;`. Die `0` steht für `margin-right` und `margin-left`. Die `10%` steht für `margin-top` und `margin-bottom`.
:::

</details>
