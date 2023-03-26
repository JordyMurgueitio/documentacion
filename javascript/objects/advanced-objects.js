// 1. this keyword  - inside the scope of our methods, we don’t automatically have access to other properties of the object
// The this keyword references the calling object which provides access to the calling object’s properties.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo () {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
};

console.log(robot.provideInfo());

// 1.1 arrow functions and the this keyword - Arrow functions inherently bind an already defined this value to the function itself that is NOT the calling object.
//  the value of this is the global object, which doesn’t have a dietType property and therefore returns undefined
//  avoid using arrow functions when using this in a method

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType);
    }
};   

goat.diet(); // Prints undefined




// 2. Privacy - the idea that only certain properties should be mutable or able to change in value
// common convention is to place an underscore _ before the name of a property to mean that the property should not be altered
// you can cause unwanted side-effects when mutating objects and their properties
const bankAccount = {
    _amount: 1000
} 



// 3. Getters -  methods that get and return the internal properties of an object. But they can do more than that
// can perform an action on the data when getting a property
// can return different values using conditionals
// properties cannot share the same name as the getter/setter function. One workaround is to add an underscore before the property name

const mobile = {
    _model: 'Samsung', 
    _energyLevel: 100, 
    get energyLevel () {
        if (typeof this._energyLevel === 'number') {    // typeof will return a string that contains the name of the data type.
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};

console.log(mobile.energyLevel)  //  getter methods do not need to be called with a set of parentheses.




// 4. Setters - reassign values of existing properties within an object.

const person = {
    _age: 89, 
    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
        } else {
            console.log("You have to enter a number");
        }
    }
}

person.age = 15;   // Setter methods do not need to be called with a set of parentheses
console.log(person._age);
person.age = "cuarenta";



// 5. Factory functions - is a function that returns an object and can be reused to make multiple object instances
// can also have parameters allowing us to customize the object that gets returned

const carFactory = (model, year, manual) => {
    return {
        model: model, 
        year: year, 
        manual: manual, 
        start () {
            console.log("car is starting");
        }
    }
};

const car1 = carFactory("ford", 2020, true); 
const car2 = carFactory("nissan", 2023, false);
console.log(car1);
car1.start();




// 6. Property value shorthand - 


