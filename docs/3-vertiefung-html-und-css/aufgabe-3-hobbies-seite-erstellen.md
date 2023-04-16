# Aufgabe 3: Hobbies-Seite erstellen

In Aufgabe 1 haben wir ja bereits unsere Hobbies zu unserer Website hinzugefügt. Allerdings befinden sich die Hobbies noch auf der Startseite. In dieser Aufgabe wollen wir eine eigene Seite für unsere Hobbies erstellen.

1. Erstelle eine neue Datei mit dem Namen `hobbies.html` im Ordner deines Projektes.
2. Kopiere den Inhalt von index.html in die neue Datei.
3. Ändere den Titel der Website in "Meine Hobbies".
4. Lösche alles außer den Absatz mit den Hobbies und dem Bild.

<details>
  <summary>Lösung</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meine Hobbies</title>
  </head>
  <body>
    <p>Meine Hobbies sind:
    <ul>
        <li>Programmieren</li>
        <li>Fußball</li>
        <li>Zeichnen</li>
    </ul>
    </p>
    <img src="https://cms.sachsen.schule/fileadmin/_migrated/pics/Informatik.gif"/>
  </body>
</html>
```

</details>

5. Lösche den Absatz mit dem Text "Meine Hobbies sind:" auf der Seite `index.html`.
6. Erstelle einen neuen Absatz auf der Startseite mit dem Text "Meine Hobbies findest du hier". Füge einen Link zu der Hobbies-Seite ein. (Tipp: Vergiss nicht einen Text für den Link anzugeben.)

<details>
  <summary>Lösung</summary>

```html
<p>Meine Hobbies findest du <a href="hobbies.html">hier</a>.</p>
```

</details>
