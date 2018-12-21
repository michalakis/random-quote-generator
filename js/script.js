/******************************************
 A Random Quote Generator
******************************************/


/***
 Global variables are declared here.
***/

let usedQuotes = [];
let intervalId;


/***
  An array of objects containing quotes, as well as further
  details about those quotes, such as the source, the year,
  as well as the publications they appeared in, whenever
  such information is applicable.
***/

let quotes = [
  {
    quote: "If the code and the comments do not match, possibly both are incorrect.",
    source: "Norm Schryer",
    category: "Computer Science"
  },
  {
    quote: "It was a joke, okay? If we thought it would actually be used, we wouldn’t have written it!",
    source: "Mark Andreesen, speaking of the html tag blink",
    category: "Computer Science"
  },
  {
    quote: "Perl: The only language that looks the same before and after RSA encryption.",
    source: "Keith Bostic",
    category: "Computer Science"
  },
  {
    quote: "Beware of monotony; it’s the mother of all the deadly sins.",
    source: "Edith Wharton",
    category: "Philosophy"
  },
  {
     quote: "The imitator dooms himself to hopeless mediocrity.",
     source: "Ralph Waldo Emerson",
     citation: "The Divinity College Address",
     year: 1838,
     category: "Philosophy"
  },
  {
    quote: "The way we talk to our children becomes their inner voice.",
    source: "Peggy O’Mara",
    category: "Communication"
  },
  {
    quote: "All you need in this life is ignorance and confidence, and then Success is sure.",
    source: "Mark Twain",
    citation: "Letter to Cordelia Welsh Foote",
    year: 1887,
    category: "Philosophy"
  },
  {
    quote: "Done is better than perfect.",
    source: "Sheryl Sandberg",
    citation: "Lean In: Women, Work, and the Will to Lead",
    year: 2013,
    category: "Inspiration"
  }
];


/***
  A function which generates a random rgb function when called,
  the value is less than 255 so as to avoid a white background.
***/

const randomRgbValue = () => {

  return Math.floor( Math.random() * 200 );

};


/***
  getRandomQuote function:
   - generates a random number
   - uses the random number to `return` a random quote object from the
     `quotes` array.
***/

const getRandomQuote = array => {

  // make sure that array is not empty
  if ( array.length > 0 ) {

    let quote = [];

    let randomNumber = Math.floor( Math.random() * array.length );

    // remove item from array and store it in usedQuotes
    quote = array.splice(randomNumber, 1);
    usedQuotes.push(quote[0]);

    return quote[0];

  } else {

    // if array is empty, put all quotes back in and call function again
    quotes = usedQuotes;
    usedQuotes = [];

    return getRandomQuote(quotes);

  }


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

  // Clear interval and reset it, for when load quote button is clicked
  printQuoteClearInterval();
  printQuoteSetInterval();

  let quote = getRandomQuote(quotes);

  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

  if ( quote.citation ) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if ( quote.year ) {
    html += `<span class="year">${quote.year}</span>`;
  }

  html += `<span class="category">${quote.category}</span>`

  html += `</p>`;

  document.querySelector('#quote-box').innerHTML = html;

  // Change the background color
  const rgbValue = randomRgbValue();
  const rgbValues = `rgb( ${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()} )`;

  document.querySelector('body').style.backgroundColor = rgbValues;
  document.querySelector('#loadQuote').style.backgroundColor = rgbValues;


};


/***
  A function calling the printQuote function once every
  5 seconds.
***/

let printQuoteSetInterval = () => {

  intervalId = window.setInterval(printQuote, 5000);

};

/***
  A function ending the interval set above.
***/

let printQuoteClearInterval = () => {

  clearInterval(intervalId);

};


/***
 When the page loads, set the interval for the
 printQuote function to be excecuted automatically.
***/

window.onload = printQuoteSetInterval;


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
