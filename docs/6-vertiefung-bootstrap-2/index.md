---
sidebar_position: 7
---

# 6. Vertiefung in Bootstrap 2

In dieser Lektion lernen wir zwei weitere Bootstrap Komponenten kennen: Carousel und Cards. Dies sind zwei wichtige und häufig verwendete Komponenten, die wir in vielen Webseiten finden.

## 1. Carousel

Ein Carousel ist eine Art Bildergalerie, die wir auf vielen Websites finden. Wir können durch die Bilder navigieren und die Bilder werden automatisch gewechselt. Gucke dir zuerst die Komponente in der Dokumentation von Bootstrap an: [Carousel](https://getbootstrap.com/docs/5.0/components/carousel/).

Das Carousel besteht aus einem Container, der die Klasse `carousel` hat. Innerhalb des Containers befinden sich die einzelnen Slides. Jeder Slide hat die Klasse `carousel-item`. Die Klasse `active` wird auf den ersten Slide gesetzt, damit dieser beim Laden der Website angezeigt wird.

```html
<div
  id="carouselExampleControls"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <!-- Hier kommt der Inhalt des ersten Slides -->
    </div>
    <div class="carousel-item">
      <!-- Hier kommt der Inhalt des zweiten Slides -->
    </div>
    <div class="carousel-item">
      <!-- Hier kommt der Inhalt des dritten Slides -->
    </div>
  </div>
</div>
```

Damit der User zwischen den Slides hin und her navigieren kann, müssen wir die Pfeile hinzufügen. Die Pfeile haben die Klasse `carousel-control-prev` bzw. `carousel-control-next`. Die Pfeile haben auch ein Attribut `href`, das auf den Container des Carousels verweist. Das Attribut `data-slide` gibt an, ob der User zum nächsten oder zum vorherigen Slide navigieren soll.

```html
<button
  class="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button
  class="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
```

Es gibt verschiedene Wege diese Navigation zu implementieren. Wir können die Pfeile als Buttons hinzufügen, oder wir können die Pfeile als Links hinzufügen. Wir können auch die Pfeile als Icons hinzufügen, oder wir können die Pfeile als Text hinzufügen. Wir können die Pfeile auch als Bilder hinzufügen. Es gibt viele Möglichkeiten.

Wir wollen ein Carousel benutzen um Nutzerbewertungen auf unserer Website anzuzeigen. Zunächst einmal legen wir in der ersten Aufgabe dafür die Struktur des Carousels an.

---

### [🤓 Aufgabe 1: Carousel Setup](aufgabe-1-carousel-setup)

---

Nun wollen wir die einzelnen Nutzerbewertungen hinzufügen. Jede Nutzerbewertung soll ein Zitat enthalten, welches für unsere App wirbt.

---

### [🤓 Aufgabe 2: Nutzerbewertungen](aufgabe-2-nutzerbewertungen)

---

Damit die einzelnen Bewertungen mehr Kredibilität bekommen, wollen wir das Profil der Nutzer hinzufügen, die die Bewertungen abgegeben haben. Dazu wollen wir die Nutzerbilder und die Namen der Nutzer hinzufügen.

---

### [🤓 Aufgabe 3: Nutzerprofile](aufgabe-3-nutzerprofile)

---

Nun haben wir ein Carousel mit Nutzerbewertungen, die unser Produkt bewerben. Füge gerne noch weitere Bewertungen hinzu, um das Carousel zu vervollständigen.

## 2. Cards

Cards sind eine weitere Bootstrap Komponente, die wir häufig auf Websites finden. Cards sind eine Art Container, die wir benutzen können um Inhalte zu gruppieren. Gucke dir zuerst die Komponente in der Dokumentation von Bootstrap an: [Cards](https://getbootstrap.com/docs/5.0/components/card/).

Cards haben eine Klasse `card`. Innerhalb der Card können wir verschiedene Elemente hinzufügen. Wir können einen Header hinzufügen, indem wir einen Container mit der Klasse `card-header` hinzufügen. Wir können einen Body hinzufügen, indem wir einen Container mit der Klasse `card-body` hinzufügen. Wir können einen Footer hinzufügen, indem wir einen Container mit der Klasse `card-footer` hinzufügen.

```html
<div class="card">
  <div class="card-header">
    <!-- Hier kommt der Header der Card -->
  </div>
  <div class="card-body">
    <!-- Hier kommt der Body der Card -->
  </div>
  <div class="card-footer">
    <!-- Hier kommt der Footer der Card -->
  </div>
</div>
```

Der card-header enthält den Titel der Card. Der card-body enthält den Inhalt der Card. Der card-footer enthält normalerweise die Aktionen, die der User auf der Card ausführen kann. Wir können jedoch auch davon abweichen.

Wir wollen eine Card benutzen um die verschiedenen Preispläne unserer App anzuzeigen. Zunächst einmal legen wir in der nächsten Aufgabe dafür die Struktur der Card-Section an.

---

### [🤓 Aufgabe 4: Preis Section Setup](aufgabe-4-preis-section-setup)

---

Nun wollen wir die einzelnen Preispläne hinzufügen. Jeder Preisplan soll einen Titel, einen Preis und eine Liste mit Features enthalten.

---

### [🤓 Aufgabe 5: Preispläne Content](aufgabe-5-preis-content)

---

Nun wollen wir die Buttons hinzufügen, die den User zum Registrieren für den Preisplan aufrufen. Dafür können wir die Klasse `btn` verwenden, die wir bereits kennen. Es gibt aber noch weitere `btn`-Klassen die wir für das Styling der Buttons verwenden können. Gucke dir die verschiedenen `btn`-Klassen in der Dokumentation von Bootstrap an: [Buttons](https://getbootstrap.com/docs/5.0/components/buttons/).

---

### [🤓 Aufgabe 6: Registrierungs Button](aufgabe-6-register-button)

---

Nun haben wir eine Section mit den verschiedenen Preisplänen unserer App. Füge gerne noch weitere Preispläne hinzu, um die Section zu vervollständigen.

## 3. Abschluss

Wir haben in dieser Lektion die Bootstrap-Komponenten Carousel und Cards kennengelernt, mit denen wir neue Sections hinzufügen konnten. In der nächsten Lektion werden wir unsere Website finalisieren und veröffentlichen.
