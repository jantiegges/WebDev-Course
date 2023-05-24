---
sidebar_position: 10
---

# 9. Vertiefung in JavaScript

In diesem Kapitel werden wir uns mit einigen fortgeschrittenen Themen in JavaScript beschäftigen. Wir werden uns mit Funktionen, Random Numbers und Manipulation von HTML & CSS beschäftigen.

## 1. Funktionen

Funktionen sind ein sehr wichtiges Konzept in der Programmierung. Sie helfen uns, unseren Code zu strukturieren und zu organisieren. Wir können Funktionen verwenden, um Code zu schreiben, der mehrmals ausgeführt werden soll. Wir können auch Funktionen verwenden, um unseren Code in kleinere Teile zu unterteilen, die einfacher zu verstehen sind.

:::tip Funktionen
Eine Funktion ist ein Codeblock, der eine bestimmte Aufgabe ausführt. Stell dir eine Funktion wie ein kleines Programm vor, das eine bestimmte Aufgabe ausführt. Jedes Mal, wenn du eine Funktion aufrufst, wird der Code in der Funktion ausgeführt.
:::

### Wofür brauchen wir Funktionen?

Funktionen helfen uns, unseren Code zu strukturieren und zu organisieren. Wir können Funktionen verwenden, um Code zu schreiben, der mehrmals ausgeführt werden soll. Wir können auch Funktionen verwenden, um unseren Code in kleinere Teile zu unterteilen, die einfacher zu verstehen sind.

### Funktionen erstellen

Um eine Funktion zu erstellen, müssen wir das `function` Schlüsselwort verwenden. Nach dem `function` Schlüsselwort müssen wir den Namen der Funktion schreiben. Der Name der Funktion kann frei gewählt werden. Nach dem Namen der Funktion müssen wir Klammern `()` schreiben. Nach den Klammern müssen wir geschweifte Klammern `{}` schreiben. In den geschweiften Klammern schreiben wir den Code, der ausgeführt werden soll, wenn die Funktion aufgerufen wird.

#### Beispiel

```js
function add() {
  const sum = 1 + 2;

  return sum;
}
```

Ihr könnt sehen wie am Ende der Funktion das `return` Schlüsselwort verwendet wird. Das `return` Schlüsselwort gibt den Wert zurück, der nach dem `return` Schlüsselwort steht. In diesem Fall geben wir die Summe zurück.

### Funktionen aufrufen

Um eine Funktion aufzurufen, müssen wir den Namen der Funktion schreiben und Klammern `()` dahinter schreiben. Falls die Funktion einen Wert zurückgibt, können wir den Wert in einer Variable speichern.

#### Beispiel

```js
function add() {
  const sum = 1 + 2;

  return sum;
}

const result = add();
```

### [🤓 Aufgabe 1: Love Calculator Funktion erstellen](aufgabe-1-love-calculator-funktion)

### Funktionen mit Parametern

Nun wissen wir, wie wir eine Funktion erstellen und aufrufen können. Damit wir die Funktionen noch besser nutzen können, können wir Parameter verwenden.

:::tip Parameter
Parameter sind Werte, die wir der Funktion übergeben können. Wenn wir eine Funktion aufrufen, können wir Werte an die Funktion übergeben. Stellen wir uns vor, wir haben eine Funktion `add`, die zwei Zahlen addiert. Wir können der Funktion zwei Zahlen übergeben, die addiert werden sollen. Die Funktion `add` hat zwei Parameter, die wir in den Klammern schreiben: `function add(a, b)`. Wenn wir die Funktion aufrufen, können wir zwei Zahlen übergeben: `add(1, 2)`. In der Funktion können wir die Zahlen `1` und `2` nun verwenden, um die Summe zu berechnen.
:::

#### Beispiel

```js
function add(a, b) {
  const sum = a + b;

  return sum;
}
```

Dadurch können wir Funktionen noch flexibler nutzen, da wir die Werte, die wir der Funktion übergeben, ändern können.

### [🤓 Aufgabe 2: Show Result Funktion](aufgabe-2-show-result-funktion)

## 2. Random Number

Bisher haben wir immer mit festen Werten gearbeitet. Wir haben zum Beispiel immer den Love Score `100` zurückgegeben. In der Realität wollen wir aber, dass der Love Score zufällig berechnet wird. Dafür können wir die JavaScript Funktion `Math.random()` verwenden.

:::tip Math.random()
Die Funktion `Math.random()` gibt eine zufällige Zahl zwischen `0` und `1` zurück. Die Zahl kann auch `0` sein, aber sie kann nicht `1` sein.
:::

### Beispiel

```js
const randomNumber = Math.random();
```

### [🤓 Aufgabe 3: Love Score berechnen](aufgabe-3-love-score-berechnen)

## 3. HTML & CSS Manipulation

Bisher haben wir das Ergebnis immer nur in einem `alert` angezeigt. In der Realität wollen wir aber, dass das Ergebnis in der HTML Seite angezeigt wird. Dafür müssen wir den HTML Code manipulieren. Dafür können wir etwas verwenden, was wir bereits in der letzten Lektion kennengelernt haben: Selektoren.

Zunächst können wir nämlich das HTML-Element auswählen, welches wir verändern wollen. Dafür können wir einen Selektor verwenden. Diesem Element können wir dann einfach einen neuen Wert zuweisen, so wie wir es bereits mit Variablen gemacht haben.

#### Beispiel

```js
document.querySelector(".result-text").innerHTML = "Euer Love Score ist 100%";
```

Neben dem HTML Code, können wir auch den CSS Code manipulieren. Dafür können wir die `style` Eigenschaft verwenden. Wir können der `style` Eigenschaft einen neuen Wert zuweisen, so wie wir es bereits mit Variablen gemacht haben.

#### Beispiel

```js
document.querySelector(".result-text").style.color = "red";
```

In der folgenden Aufgabe wollen wir nun das Ergebnis unserer Love Score Berechnung in der HTML Seite anzeigen.

### [🤓 Aufgabe 4: Love Score Result Seite](aufgabe-4-love-score-result)

## 4. Abschluss

In diesem Kapitel haben wir unsere Love Calculator funktioneller gestaltet. Wir berechnen nun einen zu zufälligen Love Score und zeigen das Ergebnis in der HTML Seite an. In der nächsten Lektion werden wir uns mit if-else Statements beschäftigen, um noch präzisere Love Scores zu berechnen.
