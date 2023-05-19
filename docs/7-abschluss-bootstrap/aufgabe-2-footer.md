# Aufgabe 2: Footer

1. Gehe in die Section Footer und entferne den Kommentar `Dein Code`.
2. Füge die Icons für Facebook, Twitter, Instagram und E-Mail hinzu.
3. Füge darunter das Copyrigth hinzu.

:::tip Tipp: Copyright Symbol 
In die Copyright-Zeile fügst du als erstes das Symbol `©` hinzu und schreibst danach `Copyright`, das Jahr und danach dein Unternehmen oder Namen.
:::

4. Füge den Icons die Klasse `social-icon` hinzu. 5. Füge dem Footer ein Padding hinzu (z.B. 5% 10%). 6. Füge den Social Icons etwas Margin hinzu, sodass sie nicht direkt aneinander kleben.

<details>
<summary>Lösung</summary>

#### index.html

```html
<i class="social-icon fab fa-facebook-f"></i>
<i class="social-icon fab fa-twitter"></i>
<i class="social-icon fab fa-instagram"></i>
<i class="social-icon fas fa-envelope"></i>
<p>© Copyright 2023 Starcode</p>
```

#### style.css

```css
#footer {
  padding: 5% 10%;
}

.social-icon {
  margin: 20px 10px;
}
```

</details>
