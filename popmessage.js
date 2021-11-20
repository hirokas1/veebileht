var intervalID = setInterval(newQuote, 3000);

var quotes = [
    "Action is the real measure of intelligence.",
    "Baseball has the great advantage over cricket of being sooner ended.",
    "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.",
    "A good head and a good heart are always a formidable combination."
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

/*Sain insporatsiooni neilt lehtedelt: 
https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/
https://developer.mozilla.org/en-US/docs/Web/API/setInterval
*/

