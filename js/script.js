//quote array
var quotes = [
  {
  quote : 'Life is about making an impact, not making an income',
  source : 'Kevin Kruse',
  },
  {
  quote : 'Whatever the mind of man can conceive and believe, it can achieve',
  source : 'Napoleon Hill',
  },
  {
  quote : 'Strive not to be a success, but rather to be of value.',
  source : 'Albert Einstein',
  },
  {
  quote : 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
  source : 'Robert Frost',
  },
  {
  quote : 'I attribute my success to this: I never gave or took any excuse.',
  source : 'Florence Nightingale',
  },
  {
  quote : 'You miss 100% of the shots you don’t take.',
  source : 'Wayne Gretzky',
  },
  {
  quote : 'The most difficult thing is the decision to act, the rest is merely tenacity.',
  source : 'Amelia Earhart',
  },
  {
  quote : 'Definiteness of purpose is the starting point of all achievement.',
  source : 'W. Clement Stone',
  },
  {
  quote : 'Life is what happens to you while you’re busy making other plans.',
  source : 'John Lennon',
  },
  {
  quote : 'Life is 10% what happens to me and 90% of how I react to it.',
  source : 'Charles Swindoll',
  }
];

//function to randomly select a set of objects from the array
function getRandomQuote(array) {
  var rand = Math.floor(Math.random()*(quotes.length - 1));
  randomQuote = array[rand];
  return randomQuote;
}
//function to print the selected objects to the page
function printQuote() {
  getRandomQuote(quotes);
  document.getElementById("quote").innerHTML = randomQuote.quote;
  document.getElementById("source").innerHTML = randomQuote.source;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
