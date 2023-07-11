let QuotesGenerator = [
  {
    quoter: "David Goggins",
    quote:
      "you can't let what peole thinsk about you affect how you feel about yourself, f##k people",
  },
  {
    quoter: "Warren Buffet",
    quote:
      "be greedy when others are fearfull be fearful when others are greedy",
  },
  {
    quoter: "James clear",
    quote: "when you make a habit hard to do, youbreak addiction easily",
  },
  {
    quoter: "Akin Alabi",
    quote:
      "To seel to nigerians you have to make huge promises and deliver on them",
  },
  {
    quoter: "Gary Halbert",
    quote:
      "The best things you need in businesses is not more more its a market of hungry customers",
  },
  {
    quoter: "Grant Cordone",
    quote:
      "You have to be obssesed or you stay average, an dlive an average live",
  },
  {
    quoter: "Dave Ramsey",
    quote:
      "Bprrpwing frinds money is the fastest way to break such relationship",
  },
  {
    quoter: "Gary Vee",
    quote:
      "Every bodu can make money but not everybody can be rich, very few people desire 1% life",
  },
  {
    quoter: "Yusuf Aiyegbajeje",
    quote: "when you have no option you do things like your life depends on it",
  },
];
let QuotesGen;
let quotesAuthor;
let quotesText;
function addQuote() {
  let Quoter = document.getElementById("Equoter");
  let Quote = document.getElementById("Equote");

  QuotesGenerator.push({ quoter: Quoter.value, quote: Quote.value });
  console.log(QuotesGenerator);
  QuotesGen = QuotesGenerator;

  quotesAuthor = QuotesGen.map((i) => {
    return i.quoter;
  });
  quotesText = QuotesGen.map((i) => {
    return i.quote;
  });

  document.getElementById("Equoter").value = "";
  document.getElementById("Equote").value = "";

  return quotesAuthor, quotesText;
}

addQuote();

function removeBlank() {
  if (
    document.getElementById("Quoter").innerText == "" &&
    document.getElementById("quoteText").innerText == ""
  ) {
    document.getElementById("Quoter").innerText =
      quotesAuthor[QuotesGenerator.length - 2];
    document.getElementById("quoteText").innerText =
      quotesText[QuotesGenerator.length - 2];
  }
}

let total;
let a = 0;
function nextQuote() {
  // for random quote =
  //  let i = Math.trunc(Math.random() * 6 + 1);

  // to move the quote to the next quote on the line not random
  a++;
  if (a == QuotesGen.length) {
    a = 0;
  }

  document.getElementById("Quoter").innerText = quotesAuthor[a];
  document.getElementById("quoteText").innerText = quotesText[a];
  removeBlank();
  console.log(a);

  //to reverse quote to the quoet before
}
function prevQuote() {
  // for random quote =
  //  let i = Math.trunc(Math.random() * 6 + 1);

  if (a == 0) {
    a = QuotesGen.length;
  }
  a--;
  // to move the quote to the next quote on the line not random
  document.getElementById("Quoter").innerText = quotesAuthor[a];
  document.getElementById("quoteText").innerText = quotesText[a];
  removeBlank();
  console.log(a);
}
