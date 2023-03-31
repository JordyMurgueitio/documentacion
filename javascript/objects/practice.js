// 1. Menu for the day. 

const menu = {
    _meal: '', 
    _price: 0,
    set meal (mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price (priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    }, 
    get todaysSpecial () {
        if (this._meal && this._price) {
            return `Today's special is ${this._meal} for ${this._price}`;
        } else {
            return "Meal or price was not set correctly";
        }
    }
};

menu.meal = 'lasagna';
menu.price = 20;
console.log(menu.todaysSpecial);


// 2. factory function

const carFactory = (model, color, automatic) => {
    return {
        model, 
        color, 
        automatic
    }
}

let car1 = carFactory('ford', 'red', true);
console.log(car1); // logs new object
const {model} = car1;
console.log(model); // logs ford



