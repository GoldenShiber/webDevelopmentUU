import QuotesRetriever from './quotes-retriver.js';

const BUTTON = document.querySelector('button');
const TEXT = document.querySelector('.text');
const AUTHOR = document.querySelector('.author');

BUTTON.addEventListener('click', buttonClicked);

function buttonClicked(evt) {
    let quote = QuotesRetriever.getRandomQuote(evt);
    TEXT.innerHTML = quote.quote;
    AUTHOR.innerHTML = quote.quotee;

    console.log(quote.sayWholeQuote());
}

