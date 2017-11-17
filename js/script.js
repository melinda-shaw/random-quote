// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);

// Create an array of objects. Must have quote and source keys.
let quotes = [{
    quote: "I believe great people do things before they are ready.",
    source: 'Amy Poehler',
    citation: 'Yes Please',
    year: 2014,
    tags: 'empowerment'
  },
  {
    quote: "You can't be that kid standing at the top of the water slide, overthingking it. You have to go down the chute.",
    source: 'Tina Fey',
    citation: 'Bossypants',
    year: 2011,
    tags: 'humor, empowerment'
  },
  {
    quote: "To all the little girls who are watching, never doubt that you are valuable and powerful and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.",
    source: 'Hillary Clinton',
    citation: 'Concession Speech',
    year: 2016,
    tags: 'empowerment, feminism, politics'
  },
  {
    quote: "We forget all too soon the things we thought we could never forget.",
    source: 'Joan Didion',
    tags: 'life'
  },
  {
    quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    source: 'Jane Goodall',
    tags: 'empowerment'
  },
  {
    quote: "When you can’t find someone to follow, you have to find a way to lead by example.",
    source: 'Roxane Gay',
    citation: 'Bad Feminist',
    year: 2014,
    tags: 'empowerment'
  }
];

// Create a function that selects a random quote object from the quotes array.
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length)
  let selectedQuote = quotes[randomIndex]
  // returns the randomly selected quote object
  return selectedQuote
}

// Create a function that calls getRandomQuote and stores as variable.
function printQuote() {
  let quote = getRandomQuote();
  // build html string
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
  // displays the final HTML string to the page.
  return document.getElementById('quote-box').innerHTML = html
}
