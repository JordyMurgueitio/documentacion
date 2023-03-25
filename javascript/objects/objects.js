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



// 4. Methods -  actions that can be performed on objects
// Methods are stored in properties as function definitions
const alienShip = {
    retreat: function () {
        console.log('Hello, we have decided to leave your planet')
    },
    // new method syntax introduced in ES6 we can omit the colon and the function keyword
    invade () { 
        console.log('Hello! We have come to dominate your planet')
    },
    color: 'black'
};

alienShip.invade();  // logs invade message 
alienShip.retreat();  // logs retreat message 



// 5. Nested Objects - objects are often nested— an object might have another object as a property

const hotel = {
    contact: {
        name: 'Grand Hotel', 
        city: 'Barcelona', 
        phone: 0994784394, 
    },
    crew: {
        manager: {
            name: 'juan erik',
            joined: 2010, 
            'located in': "brasil",
            encourageTeam () {
                console.log("let's do it team");
            }
        },
        assistant: {
            name: 'Messi', 
            joined: 2020, 
            clean () {
                console.log('I guess its time to clean')
            }
        }
    },
    activities: [{name: "trecking", hours: 2}, {name: "camping", hours: 24}, {name: "city tour", hours: 3}],
    open () {
        console.log("The hotel is open");
    }, 
    close () {
        console.log("The hotel is closed");
    }
}

console.log(hotel.contact.city); // logs barcelona
console.log(hotel.crew.manager['located in']); // logs brasil
console.log(hotel.activities[1]);  // logs { name: 'camping', hours: 24 }
console.log(hotel.activities[1].name);  // logs camping
hotel.crew.assistant.clean();  // logs i guess its time to clean
hotel.close(); // closes the hotel




// 6. Pass by reference - functions which change object properties mutate the object permanently (even when the object is assigned to a const variable)

const spaceStation = {
    homePlanet : 'Earth',
    color : 'silver'
};

let paintIt = object => {
    object.color = 'glorious gold'
};
paintIt(spaceStation);

console.log(spaceStation.color) // Returns 'glorious gold'



// 7. Looping through an object - for...in will execute a given block of code for each property in an object.


let flight = {
    crew: {
        captain: { 
            name: 'Lily', 
            degree: 'Computer Engineering', 
            cheerTeam() { console.log('You got this!') } 
        },
        'chief officer': { 
            name: 'Dan', 
            degree: 'Aerospace Engineering', 
            agree() { console.log('I agree, captain!') } 
        },
        medic: { 
            name: 'Clementine', 
            degree: 'Physics', 
            announce() { console.log(`Jets on!`) } 
        },
        translator: {
            name: 'Shauna', 
            degree: 'Conservation Science', 
            powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// will iterate through each element of the flight.crew object. In each iteration, the variable crewMember is set to one of flight.crew‘s keys, enabling us to log a list of crew members’ role and name.
for (let crewMember in flight.crew) {   
    console.log(` ${crewMember}: ${flight.crew[crewMember].name} `);
}

