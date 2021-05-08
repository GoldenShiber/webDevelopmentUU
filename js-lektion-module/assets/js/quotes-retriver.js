import QUOTES from './quotes.js';

// Vid singleton variant
class QuotesRetriever {
    getRandomQuote() {
        // Math.floor((Math.random()*QUOTES.length))
        return QUOTES[Math.floor((Math.random()*QUOTES.length))];
    }

    getSpecificQuote(index) {
        return QUOTES[index];
    }
}

export default new QuotesRetriever();
