/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

const quotes = [
  {
    quote: "If the code and the comments do not match, possibly both are incorrect.",
    source: "Norm Schryer"
  },
  {
    quote: "It was a joke, okay?  If we thought it would actually be used, we wouldn’t have written it!",
    source: "Mark Andreesen, speaking of the HTML tag BLINK"
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
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

const getRandomQuote = array => {

  var randomNumber = Math.floor( Math.random() * array.length );

  return array[randomNumber];

};




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

const printQuote = () => {

  let quote = getRandomQuote();

  let html = `
    <p class="quote"> ${ quote.quote } </p>
    <p class="source">
      ${ quote.source }
      ${
        () => {
          if ( quote.citation ) {
          return `<span class="citation">, ${ quote.citation },</span>`
          }
        }
       }
       ${
         () => {
           if ( quote.year ) {
           return `<span class="year">, ${ quote.year },</span>`
           }
         }
        }
    </p>
  `;

};


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
