# Aufgabe 1: Navigationszeile

1. Gehe auf die Bootstrap-Seite für die [Navigationszeile](https://getbootstrap.com/docs/5.0/components/navbar/).
2. Suche dir ein Beispiel aus und kopiere den Code in die Section Navigationszeile.
3. Ändere den Titel der Navigationszeile in `Super-Duper-App`.

:::tip Tipp: Titel Navigationszeile 
Der Titel der Navigationszeile wird in einem `a`-Element mit der Klasse `navbar-brand` definiert.
:::

4. Ändere die Links der Navigationszeile in `Home`, `Features`, `Bewertungen` und `Preise`.

:::tip Tipp: Link Navigationszeile 
Die Links der Navigationszeile werden in `a`-Elementen mit der Klasse `nav-item` definiert.
:::

5. Ändere die `href`-Attribute der Links in `#überblick`, `#features`, `#bewertungen` und `#preise`.
6. Füge der Navigationszeile ein Padding hinzu (z.B. 10%).
7. Erreiche, dass die Links der Navigationszeile auf der rechten Seite angezeigt werden.

:::tip Tipp: Link Navigationszeile 
Die Links der Navigationszeile werden in einem `div`-Element mit der Klasse `navbar-nav` definiert.
:::

<details>
<summary>Lösung</summary>

#### index.html

```html
<nav class="navbar navbar-expand-lg">
  <!-- Hier spezifizieren wir den Titel der Navigationszeile -->
  <a class="navbar-brand" href="#">Super-Duper-App</a>

  <!-- Hier spezifizieren wir den Button, der die Navigationszeile ein- und ausblendet -->
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSections"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSections">
    <div class="navbar-nav">
      <!-- Hier spezifizieren wir die einzelnen Navigationsbereiche -->
      <a class="nav-item nav-link" href="#überblick">Home</a>
      <a class="nav-item nav-link" href="#features">Features</a>
      <a class="nav-item nav-link" href="#bewertungen">Bewertungen</a>
      <a class="nav-item nav-link" href="#preise">Preise</a>
    </div>
  </div>
</nav>
```

#### style.css

```css
#navbar {
  padding: 0 10%;
}

.navbar-nav {
  margin-left: auto;
}
```

</details>
