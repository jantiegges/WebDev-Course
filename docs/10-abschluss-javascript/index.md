---
sidebar_position: 11
---

# 10. Abschluss JavaScript

In den letzten Lektionen sind wir bereits so weit mit unserer Love Calculator Website gekommen, dass sie an sich schon funktioniert. Allerdings geben wir immer einen zufälligen Love Score zurück und zeigen trotzdem immer den selben Text und das selbe Bild als Ergebnis an. In dieser Lektion wollen wir das ändern und lernen dabei noch ein paar neue Dinge.

## 1. If Else Statements

If Else Statements sind eine Möglichkeit, um in JavaScript Entscheidungen zu treffen. Wir können mit If Else Statements zum Beispiel prüfen, ob eine Bedingung erfüllt ist. Wenn die Bedingung erfüllt ist, können wir eine Aktion ausführen. Wenn die Bedingung nicht erfüllt ist, können wir eine andere Aktion ausführen.

#### Beispiel

```js
const loveScore = Math.random() * 100;

if (loveScore > 80) {
  // Aktion 1
} else {
  // Aktion 2
}
```

In diesem Beispiel berechnen wir einen zufälligen Love Score. Wenn der Love Score größer als `80` ist, führen wir Aktion 1 aus. Wenn der Love Score kleiner oder gleich `80` ist, führen wir Aktion 2 aus.

Ihr seht, dass die Syntax wiefolgt ist:

```js
if (bedingung) {
  // Aktion 1
} else {
  // Aktion 2
}
```

Die Bedingung ist dabei ein Ausdruck, der entweder `wahr` oder `falsch` ist. Wenn die Bedingung `wahr` ist, wird Aktion 1 ausgeführt. Wenn die Bedingung `falsch` ist, wird Aktion 2 ausgeführt.

:::tip Bedingungsoperatoren
Es gibt verschiedene Operatoren, die wir verwenden können, um eine Bedingung zu prüfen. Die wichtigsten sind:

**`>`** größer als

**`<`** kleiner als

**`>=`** größer oder gleich

**`<=`** kleiner oder gleich

**`===`** gleich

**`!==`** nicht gleich
:::

In der folgenden Aufgabe wollen wir ein If Else Statement verwenden, um auf verschiedene Love Scores zu reagieren.

### [🤓 Aufgabe 1: Love Score Reaktionen](aufgabe-1-love-score-reaktionen)

## 2. Logische Operatoren

Logische Operatoren sind Operatoren, die wir verwenden können, um mehrere Bedingungen zu prüfen. Wir können zum Beispiel prüfen, ob eine Bedingung **und** eine andere Bedingung erfüllt ist. Oder wir können prüfen, ob eine Bedingung **oder** eine andere Bedingung erfüllt ist.

Für diese logischen Operatoren gibt es in JavaScript die folgenden Schlüsselwörter:

**`&&`** und
**`||`** oder

#### Beispiel

```js
const loveScore = Math.random() * 100;

if (loveScore > 80 || loveScore < 20) {
  // Aktion 1
} else {
  // Aktion 2
}
```

In diesem Beispiel prüfen wir, ob der Love Score größer als `80` **oder** kleiner als `20` ist. Wenn das der Fall ist, führen wir Aktion 1 aus. Wenn das nicht der Fall ist, führen wir Aktion 2 aus.

Wir wollen die logischen Operatoren nun verwenden um auf bestimmte Kombinationen von Namen zu reagieren.

### [🤓 Aufgabe 2: Love Score mit Namen](aufgabe-2-love-score-mit-namen)

## 3. Abschluss

Herzlichen Glückwunsch! Du hast den JavaScript Teil des Kurses abgeschlossen. Du hast nun alle Grundlagen gelernt, die du brauchst, um deine eigenen Webseiten zu programmieren. Wir hoffen, dass dir der Kurs gefallen hat und du viel gelernt hast. Du kannst uns gerne Feedback geben, damit wir den Kurs noch besser machen können.

Viel Spaß dir nun dabei, deine eigenen Programmierprojekte anzufangen. Weitere Kurse findest du auf unserer Webseite [Starcode Kursangebot](https://www.starcode.de/courses). Wir hoffen dass wir dich ein bisschen für die Informatik begeistern konnten und du dir vielleicht überlegst in Zukunft Informatik zu studieren.

Wir wünschen dir viel Spaß und Erfolg dabei!
