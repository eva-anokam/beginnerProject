//select DOM elements
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");

//create quote array
const quotes = [
  eachQuote = {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    person: "-Nelson Mandela ",
  },
  eachQuote = {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "-Walt Disney ",
  },
  eachQuote = {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    person: "-Steve Jobs ",
  },
  eachQuote = {
    quote:
      "If life were predictable it would cease to be life, and be without flavor. ",
    person: "-Eleanor Roosevelt",
  },
  eachQuote = {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    person: "-Oprah Winfrey ",
  },
  eachQuote = {
    quote:
      " If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    person: "-James Cameron ",
  },
  eachQuote = {
    quote: "Life is what happens when you're busy making other plans.",
    person: " -John Lennon",
  },
];

//create quote generator function
function generateNewQuote() {
  //create quote variables
  let newQuote = "";
  let newPerson = "";
  let index = Math.floor(Math.random() * quotes.length);
  newQuote = quotes[index].quote;
  newPerson = quotes[index].person;
  return [newQuote, newPerson];
}

button.addEventListener("click", () => {
    let mainQuote = generateNewQuote();
    h1.textContent = mainQuote[0];
    h2.textContent = mainQuote[1];
});