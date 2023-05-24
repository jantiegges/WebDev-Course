# Aufgabe 1: Love Calculator Projekt erstellen

## 1. Projekt erstellen

1. Erstelle einen neuen Ordner mit dem Namen `love-calculator`
2. Erstelle eine `index.html` Datei
3. Kopiere den folgenden Inhalt in die `index.html` Datei:

<details>
<summary>index.html</summary>

```html
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Love Calculator</title>

    <!-- CSS Stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css" />

    <!-- Font Awesome -->
    <script defer src="https://use.fontawesome.com/releases/v6.4.0/js/all.js"></script>
</head>

<body>
    <!-- ======================================= -->
    <!-- ========== Section 1: Title =========== -->
    <!-- ======================================= -->
    <section id="title">
        <div class="container-fluid text-center">
            <h1 class="title-text">Love Calculator</h1>
            <h5 class="subtitle-text">Gib 2 Namen ein und finde heraus wie sie matchen</h3>
        </div>
    </section>

    <!-- ======================================= -->
    <!-- ======== Section 2: Input Box ========= -->
    <!-- ======================================= -->
    <section id="input">
        <div class="container-fluid">
            <div class="card input-box">
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="name1-input" class="form-label text-name">Name 1</label>
                            <input type="text" class="form-control" id="name1-input">
                        </div>
                        <div class="mb-3">
                            <label for="name2-input" class="form-label text-name">Name 2</label>
                            <input type="text" class="form-control" id="name2-input">
                        </div>
                        <button type="submit" id="calculate" class="btn btn-danger">Berechne den Love-Score</button>
                    </form>
                </div>
            </div>

        </div>
    </section>

    <!-- ======================================= -->
    <!-- ========= Section 3: Result =========== -->
    <!-- ======================================= -->
    <section id="result">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-lg-4 text-end">
                    <h1 class="result-name" id="name1"></h1>
                </div>
                <div class="col-lg-4">
                    <div class="heart fa-10x">
                        <span class="fa-layers fa-fw">
                            <i class="fas fa-heart fa-beat result-icon" style="color: red;"></i>
                            <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-12.5"
                                style="font-weight:600"></span>
                        </span>
                    </div>
                    <p class="result-text"></p>
                    <img class="result-img" src="" />
                    <button type="submit" id="restart" class="btn btn-danger">Neue Berechnung</button>
                </div>
                <div class="col-lg-4 text-start">
                    <h1 class="result-name" id="name2"></h1>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>

</html>
```

</details>

4. Erstelle eine `styles.css` Datei
5. Kopiere den folgenden Inhalt in die `styles.css` Datei:

<details>
<summary>styles.css</summary>

```css
body {
  background-color: lightcoral;
}

/* ============================= */
/* ===== Section 1: Title ====== */
/* ============================= */
#title {
  font-family: "Dancing Script", cursive;
  padding: 5%;
}

.title-text {
  font-size: 60px;
  font-weight: bold;
  color: lightpink;
}

.subtitle-text {
  font-size: 30px;
  color: white;
}

/* ============================= */
/* === Section 2: Input Box ==== */
/* ============================= */
.input-box {
  width: 32%;
  margin: 0 auto;
  padding: 3%;
  background-color: lightpink;
}

.form-label {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}

#calculate {
  margin: 15% auto 0 auto;
  width: 80%;
  display: block;
  font-size: 16px;
  font-weight: bold;
}

/* ============================= */
/* === Section 3: Result Box === */
/* ============================= */
#result {
  display: none;
}

.result-text {
  font-family: "Dancing Script", cursive;
  color: white;
  font-size: 24px;
}

.result-img {
  margin: 0 auto;
  display: block;
}

.result-name {
  font-family: "Dancing Script", cursive;
  color: white;
  font-size: 48px;
  color: darkred;
}

#restart {
  margin: 5% auto;
  font-size: 16px;
  font-weight: bold;
}

.text-name {
  color: darkred;
}
```

</details>

6. Erstelle eine `script.js` Datei

## 2. Projekt anpassen

1. Öffne die `index.html` Datei in einem Browser und gucke dir die Seite an
2. Wenn du magst kannst du nun einige Dinge verändern, die dir nicht gefallen. Hier ein paar Ideen:

#### Eigene Hintergrundfarbe

Hierfür musst du in der `styles.css` Datei die `background-color` Eigenschaft des `body` Elements ändern. Außerdem kannst du noch die `background-color` Eigenschaft des `input-box` Elements ändern.

#### Eigene Schriftart

Hierfür musst du in der `styles.css` Datei die `font-family` Eigenschaft des `#title` Elements ändern.

#### Eigener Text

Hierfür musst du in der `index.html` Datei die Texte in den `h1` und `h5` Elementen ändern.
