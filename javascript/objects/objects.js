// OBJECTS - containers storing related data and functionality



// 1. Object literals -  use curly braces, {}, to designate an object literal:
// // This data is organized into key-value pairs. 
// A key’s value can be of any data type including functions or other objects.

const spaceShip = { // The spaceship object has two properties Fuel Type and color
    'fuel type': 'diesel',  //'Fuel Type' has quotation marks because it contains a space character.
    color: 'silver'
}
console.log(spaceShip);



// 2. Accessing Properties - write the object’s name, followed by the dot operator and then the property name (key)
const car = {
    color: 'red', 
    model: 'ford',
    year: 2020
}
let carColor = car.color;
console.log(carColor);  // logs red

// 2.1 - second way to access a key’s value is by using bracket notation, [ ]
// we pass in the property name (key) as a string.
// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them.
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
};
console.log(spaceship['Active Duty']);  // logs true

// you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'