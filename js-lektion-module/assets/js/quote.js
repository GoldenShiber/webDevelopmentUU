export class Quote {
    constructor(quote, quotee){
        this.quote = quote;
        this.quotee = quotee;
    }

    sayWholeQuote(){
        return this.quote + ' : ' + this.quotee;
    }
}