// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.
Each quote object in the quotes array should have the following properties:
A quote property which contains a string: the text of the quote that will be displayed on the page.
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
*/

let quotes = [{
    quote: "I believe great people do things before they are ready.",
    source: 'Amy Poehler',
    citation: 'Yes Please',
    year: 2014 // optional but should be a number
  },
  {
    quote: "When you can’t find someone to follow, you have to find a way to lead by example.",
    source: 'Roxane Gay',
    citation: 'Bad Feminist',
    year: 2014 // optional but should be a number
  },
  {
    quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    source: 'Jane Goodall',
  },
  {
    quote: "To all the little girls who are watching, never doubt that you are valuable and powerful and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.",
    source: 'Hillary Clinton',
    citation: 'Concession Speech',
    year: 2016 // optional but should be a number
  },
  {
    quote: "We forget all too soon the things we thought we could never forget.",
    source: 'Joan Didion',
  },
  {
    quote: "You can't be that kid standing at the top of the water slide, overthingking it. You have to go down the chute.",
    source: 'Tina Fey',
    citation: 'Bossypants',
    year: 2011 // optional but should be a number
  }
];

/*
Create a function named getRandomQuote which:
selects a random quote object from the quotes array
returns the randomly selected quote object
*/

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length)
  let selectQuote = quotes[randomIndex]
  return selectQuote
}
getRandomQuote()

/*
Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string containing the different properties of the quote object using the following HTML template:
===================
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
===================
printQuote doesn't add a for a missing citation or a if the year property is missing
printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
*/

function printQuote() {
  // let quote = getRandomQuote();
  let quote = {
    quote: 'I believe great people do things before they are ready.',
    source: 'Amy Poehler',
    citation: 'Yes Please',
    year: 2014
  }

  let html = '';
  html += '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  // if there is a citation --- add it
  if (quote.hasOwnProperty('citation')) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  // if there is a year --- add it
  if (quote.hasOwnProperty('year')) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  html += '</p>'
  let display = document.getElementById('quote-box').innerHTML

  display = html
}
