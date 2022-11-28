let apiQuotes = [];

//Show New Quote

function newQuote() {
  // Pick a random quote from the API Quotes Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes From API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const resp = await fetch(apiUrl);
    apiQuotes = await resp.json();
    newQuote();
  } catch (err) {
    alert(err);
    // Catch Error Here
  }
}

// On Load
getQuotes();
