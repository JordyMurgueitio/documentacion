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




// 6. Property value shorthand -  When the key name was the same as the parameter name we assigned to it. shortcuts for assigning properties to variables
// we don’t have to repeat ourselves for property assignments

const userMaker = (name, age) => {
    return {
        name, 
        age
    }
}
const testUser = userMaker("jordy", 24);  




// 7. Destructured Assignment - extract key-value pairs from objects and save them as variables
// we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object

const vampire = {
    name: 'dracula', 
    residence: 'transylvania', 
    preferences: {
        day: "stay inside", 
        night: "satisfy appetite"
    }
};
const {residence} = vampire;  // we declare a new variable residence that extracts the value of the residence property of vampire
console.log(residence);  // logs transylvania 
const {day} = vampire.preferences;   // destructured assignment to grab nested properties of an object
console.log(day);  // logs stay inside


const robot123 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
        }
};
// Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality
const {functionality} = robot123;  
functionality.beep();   





// 8. Built-in object methods 

// 8.1 Object.keys() - returns an array of a given object's own enumerable string-keyed property names
// Object.keys(obj)
const computer = {
    model: 'apple', 
    color: 'white'
}
const computerKeys = Object.keys(computer);
console.log(computerKeys); // logs ["model", "color"]

// 8.2 Object.entries() - return an array that contain more arrays that have both the key and value of the properties in an object
// Object.entries(obj)
const computerEntries = Object.entries(robot);
console.log(computerEntries);

// 8.3 Object.assign() - copies all enumerable own properties from one object to a target object. It returns the modified target object
// Object.assign(target, ...sources)
const newComputer = Object.assign({year: 2023, camera: true}, computer); 
console.log(newComputer);






// REVIEW
/* 
1. The object that a method belongs to is called the calling object.
2. The this keyword refers to the calling object and can be used to access properties of the calling object.
3. Methods do not automatically have access to other internal properties of the calling object.
4. The value of this depends on where the this is being accessed from.
5. We cannot use arrow functions as methods if we want to access other internal properties.
6. JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
7. The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
8. Setters and getter methods allow for more detailed ways of accessing and assigning properties.
9. Factory functions allow us to create object instances quickly and repeatedly.
10. There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
*/