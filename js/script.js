/******************************************
 A Random Quote Generator
******************************************/

/***
  An array of objects containing quotes, as well as further
  details about those quotes, such as the source, the year,
  as well as the publications they appeared in, whenever
  such information is applicable.
***/

const quotes = [
  {
    quote: "If the code and the comments do not match, possibly both are incorrect.",
    source: "Norm Schryer"
  },
  {
    quote: "It was a joke, okay? If we thought it would actually be used, we wouldn’t have written it!",
    source: "Mark Andreesen, speaking of the html tag blink"
  },
  {
    quote: "Perl: The only language that looks the same before and after RSA encryption.",
    source: "Keith Bostic"
  },
  {
    quote: "while ( noSuccess ) { tryAgain(); if (dead) { break; } }",
    source: "Anonymous",
    citation: "The Internet"
  },
  {
     quote: "The imitator dooms himself to hopeless mediocrity.",
     source: "Ralph Waldo Emerson",
     citation: "The Divinity College Address",
     year: 1838
  },
  {
    quote: "All you need in this life is ignorance and confidence, and then Success is sure.",
    source: "Mark Twain",
    citation: "Letter to Cordelia Welsh Foote",
    year: 1887
  }
];


/***
  getRandomQuote function:
   - generates a random number
   - uses the random number to `return` a random quote object from the
     `quotes` array.
***/

const getRandomQuote = array => {

  const randomNumber = Math.floor( Math.random() * array.length );

  return array[randomNumber];

};


/***
  printQuote function:
   - calls the `getRandomQuote` function and assigns it to a variable.
   - uses the properties of the quote object stored in the variable to
     create an HTML string.
   - uses conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - sets the `innerHTML` of the `quote-box` div to the HTML string.
***/

const printQuote = () => {

  let quote = getRandomQuote(quotes);

  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

  if ( quote.citation ) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if ( quote.year ) {
    html += `<span class="year">${quote.year}</span>  `;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;

};


/***
  Calls the printQuote function every 5 seconds, making
  quotes rotate without user input.
***/

window.setInterval(printQuote, 5000);


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
