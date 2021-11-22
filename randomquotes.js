var intervalID = setInterval(newQuote, 3000);

/*loob intervalli, mille jooksul tsitaate muudetakse*/

var quotes = [
    "Kui poleks riski, poleks ka edu.",
    "Sa pead kasutama seda, mis sul on, et saada seda, mida sa tahad.",
    "Aeg ja harjutamine annavad kokku saavutused.",
    "Edu tähendab tõusta ainult korra rohkem, kui sa kukkunud oled.",
    "Sul on elus ainult need piirangud, mille sa oled ise paika pannud.",
    "Kiirusta aeglaselt.",
    "Pane ennast proovile. See on ainus tee, mis aitab sul edasi areneda.",
    "Kes kannatlik, võib kõike saavutada.",
    "Tervis on rikkusest kallim.",
    "Puhka ühest tööst teist tehes.",
    "Kui töö pakub naudingut, on elu lausa lust. Kui töö on kohustus, on elu orjapõli.",
    "Kes on võimeline kannatama, on võimeline saavutama kõike, mida ta tahab.",
    "Kõik, mis tuleb kätte kergelt, ilma tööta, on üsna kaheldava väärtusega.",
    "Töö viljakuse tunnetamine on üks parimatest naudingutest."
]
var creators = [
    "Vikenti Veressajev",
    "James Brown",
    "Andre Agassi",
    "Oliver Goldsmith",
    "Les Brown",
    "Augustus",
    "Morgan Freeman",
    "Francois Rabelais",
    "John Ray",
    "Ernest Renan",
    "Maksim Gorki",
    "Benjamin Franklin",
    "Leonid Leonov",
    "Luc de Vauvenargues"
]

/*kaks järjendit, kus ühes on tsitaat ja teises järjendis, samal kohal, on tsitaadi autor*/

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
    document.getElementById('creator').innerHTML = creators[randomNumber];
}

/*funktsioon, kus valitakse suvaline number ja seejärel kirjutatakse HTML failis õigetele kohtadele suvaline tsitaat koos selle loojaga*/

/*Sain koodi kirjutamiseks abi neilt lehtedelt:
https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/
(artikli autor: Sophanarith Sok)
https://developer.mozilla.org/en-US/docs/Web/API/setInterval
(artikli autor: tundmatu)

Tsitaadid leidsin lehelt https://tsitaadid.ee/
*/

