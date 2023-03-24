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




// 3. Property Assignment - Objects are mutable. we can update them after we create them
// If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
// If there was no property with that name, a new property will be added to the object.
// although we can’t reassign an object declared with const, we can still mutate it,

const cell = {type: 'apple', 'origin country': "china"};
// const cell= {type: 'alien'};    TypeError: Assignment to constant variable.
cell.type = 'samsung'; // Changes the value of the type property
cell.color = 'blue'; // Creates a new key of 'speed' with a value of 'Mach 5'

//You can delete a property from an object with the delete operator.
delete cell["origin country"]; // Removes the origin country property

