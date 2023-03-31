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



//  3. Team stats

const team = {
    _players: [{firstName: 'leo', lastName: 'messi', age: 34}, 
                {firstName: 'eden', lastName: 'hazard', age: 32}, 
                {firstName: 'niño', lastName: 'moi', age: 22} ], 
    
    _games: [{opponent: 'barca', teamPoints: 3, opponentPoints: 0}, 
            {opponent: 'arsenal', teamPoints: 0, opponentPoints: 0},
            {opponent: 'barca', teamPoints: 3, opponentPoints: 0}], 
    get players () {
        return this._players;
    }, 
    get games () {
        return this._games;
    }, 
    addPlayer (newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName, 
            age: newAge
        }
        this._players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints, 
            opponentPoints: newOpponentPoints
        }
        this._games.push(game);
    }
}

team.addGame('liga', 0, 3);
team.addPlayer('jordy', 'murgueitio', 24);
console.log(team._players);
console.log(team._games);