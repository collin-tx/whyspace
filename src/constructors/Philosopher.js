export default class Philosopher {
    constructor(name, image, quote, ideas, dates){
        this.name = name;
        this.image = image;
        this.quote = quote;
        this.ideas = ideas;
        this.dates = dates;
    }
    super(name, image, quote, ideas, dates){
        this.proliferate = function() {
            console.log(this.quote);
        }
    }
}