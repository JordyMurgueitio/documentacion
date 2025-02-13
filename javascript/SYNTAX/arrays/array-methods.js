// ARRAY METHODS
/* push(), 
pop(),
shift(), 
unshift(), 
forEach(), filter()
map(),  join()
every(), find()
includes(), */


// 1. The .push() Method - allows us to add items to the end of an array
// take a single argument or multiple arguments separated by commas

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook', 'buy shoes');
console.log(chores);



// 2. pop()	Removes the last element of an array, and returns that element
const notes = [2, 5, 6, 7, 8, 9];
let removed = notes.pop();
console.log(notes);  // logs [ 2, 5, 6, 7, 8 ]
console.log(removed);  // logs 9



// 3. shift()	Removes the first element of an array, and returns that element
// this method changes the lenght of the array
let signedUp = ["Juan", "Maira", "Elkin", "Soto"]; 
let removedUser = signedUp.shift(); 

console.log(signedUp); // logs [ 'Maira', 'Elkin', 'Soto' ]
console.log(removedUser);  // logs Juan



// 4. unshift()	Adds new elements to the beginning of an array. overwrites the original array
// Returns the new length of the array. 
let bestCompanies = ["SAP", "Apple", "Microsoft"];

console.log(bestCompanies.unshift()); // logs 3
console.log(bestCompanies.unshift("Nike", "Amazon")); // logs 5
console.log(bestCompanies);  // logs [ 'Nike', 'Amazon', 'SAP', 'Apple', 'Microsoft' ]



// 5. .forEach() method - will execute the same code for each element of an array.
// loops through the array and executes the callback function for each element. 
// During each execution, the current element is passed as an argument to the callback function.
const groceries = ["apple", "sugar", "milk"];
groceries.forEach(groceryItem => console.log(groceryItem));


const frutas = ["apple", "banana", "melon", "orange"];
frutas.forEach(fruit => {
    if (fruit[0] === "a") {
        console.log(`I want to eat an ${fruit}`)
    } else {
        console.log(`I want to eat a ${fruit}`)
    }
})

// We can also define a function beforehand to be used as the callback function.
const sports = ["football", "tennis", "basket"]; 
const printSport = element => {
    console.log(`My favorite sport is ${element}`);
}
sports.forEach(printSport);



// 6. map()	Creates a new array with the result of calling a function for each array element
const agentes = [1, 2, 3, 4, 5]; 

const bigAgents= agentes.map(agente => {
    return agente * 10;
});

console.log(agentes); // logs [1, 2, 3, 4, 5]
console.log(bigAgents);  // logs [10, 20, 30, 40, 50]



// 7. every()	Checks if every element in an array pass a test
// executes a function for each array element / returns true if the function returns true for all elements
//  returns false if the function returns false for one element
const ages = [10, 45, 6, 77, 45];
let everyoneAdult = ages.every(checkAge);  // checks if all elements in the array are > 18

function checkAge (age) { 
    return age > 18;
}
console.log(everyoneAdult);  // logs false



// 8. includes()	Check if an array contains the specified element
// returns true if an array contains a specified value
// returns false if the value is not found.
const precios = [10, 20, 30, 2, 3, 45];

console.log(precios.includes(20)); // logs true
console.log(precios.includes(13));  // logs false 

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // output: true



// 9. join()	Joins all elements of an array into a string
const frases = ["hello", "world", "my", "name"]

let fraseString = frases.join(" ");
let fraseString2 = frases.join(",")
console.log(fraseString);  // logs hello world my name
console.log(fraseString2); // logs hello,world,my,name



// 10. filter()	Creates a new array with every element in an array that pass a test provided by a function
const amigos = ["kaka", "mama", "ala", "erin", "messi"];
const startM = amigos.filter(start_m);  // returns an array with all the elements that start with the leter m

function start_m (amigo) {
    return amigo.startsWith("m");
}
console.log(startM);  // logs [ 'mama', 'messi' ]



// 11. sort()	Sorts the elements of an array - returns the array with the items sorted
//  sorts the elements as strings in alphabetical and ascending order
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Expected output: Array ["Dec", "Feb", "Jan", "March"] ABCDEFGHIJKLMNOPQRSTUVWXYZ

// Sort numbers in ascending order:
const points = [10, 40, 300, 2, 44];
points.sort((a,b) => {
    return a - b;
});
console.log(points);  // logs [ 2, 10, 40, 44, 300 ]
// Sort numbers in descending order:
points.sort((a,b) => {
    return b - a;
});
console.log(points); // logs [ 300, 44, 40, 10, 2 ]
// Find the lowest value 
const edades = [10, 54, 3, 56, 5, 90];
edades.sort((a, b) => {
    return a - b;
}); 
let lowest = edades[0]; // 3
let edadesHighest = edades[edades.length - 1]; // 90
// Find the highest value:
const puntos = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
let highest = points[0];



// 12. The .reduce() method -  returns a single value after iterating through the elements of an array, thereby reducing the array
//the return value of the callback function becomes the accumulator value for the next iteration, 
// currentValue takes on the value of the current element in the looping process.

/* Iteration	accumulator	currentValue	return value
First	        1	         3	              4 
Second	        4	         5	              9
Third	        9	         7	              16              */

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log(`The value of accumulator: ${accumulator}`);
    console.log(`The value of currentValue: ${currentValue}`);
    return accumulator + currentValue;
});
console.log(newSum);  // returns 16



// 13. the .some() method - tests whether at least one element in the array passes the test implemented by the provided function
// returns true if, in the array, it finds an element for which the provided function returns true, otherwise false
// It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = element => element % 2 === 0;
console.log(array.some(even)); // Expected output: true


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
    return word.length < 6;  // logs true
}));




// 14. concat() - 	Joins arrays and returns an array with the joined arrays
const arr1 = ['juan', ' erik', 'eli'];
const arr2 = ['pau', 'alih'];
const children = arr1.concat(arr2);
console.log(children); // logs [ 'juan', ' erik', 'eli', 'pau', 'alih' ]




// 15. copyWithin()	copies array elements to another position in the array, overwrites the existing values
// array.copyWithin(target, start, end)
// target: The index (position) to copy the elements to. | The start index (position) | The end index (position). 
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0, 1));  // logs [ 'Banana', 'Orange', 'Banana', 'Mango', 'Kiwi' ]




// 16. fill()	fills specified elements in an array with a value
// overwrites the original array - Start and end position can be specified. If not, all elements will be filled.
const teams = ["liga", "boca", "river", "chelsea", "city"];
let newteams = teams.fill("psg", 4, 5);
console.log(newteams);  // logs [ 'liga', 'boca', 'river', 'chelsea', 'psg' ]



// 17. find()	Returns the value of the first element in an array that pass a test

const players = ["messi", "hugo", "sebastian"];

const longName = players.find(player => {
    return player.length > 6;
}); 
console.log(longName);   // logs sebastian



// 18. reverse()	Reverses the order of the elements in an array, overwrites the original array

let vowels = ["a", "e", "i", "o", "u"];
let reversedVowels = vowels.reverse(); 
console.log(reversedVowels);




// 19. slice()	Returns selected elements in an array, as a new array
//  array.slice(start, end) start and end represent the index of items in that array. (end is not inclusive)
// The original array will not be modified

const animalNames = ["lion", "tiger", "shark", "dog", "cat"];

console.log(animalNames.slice(0, 3));  // logs [ 'lion', 'tiger', 'shark' ]
console.log(animalNames.slice(3));  // logs [ 'dog', 'cat' ]

// Negative numbers select from the end of the array.
console.log(animalNames.slice(-2)); // logs [ 'dog', 'cat' ]
console.log(animalNames.slice(-3));  // logs [ 'shark', 'dog', 'cat' ]
console.log(animalNames.slice(-4, -2));  // logs [ 'tiger', 'shark']




// 20. findIndex()	executes a function for each array element.
//  returns the index (position) of the first element that passes a test. returns -1 if no match is found.

const saldos = [10, 3, 2, 1, 20]; 
const findBig = (age) => {
    return age >= 18;
}
console.log(saldos.findIndex(findBig)); // logs 4 


const alumnos = [{nombre: "Juan", id: 1}, {nombre: "Maria", id: 2}, {nombre: "Messi", id: 3}]
let index = alumnos.findIndex(alumno => {
    return alumno.id === 3
})
console.log(index); // logs 2





// 21. indexOf()  returns the first index (position) of a specified value
// returns -1 if the value is not found

const ids = [123, 122, 566, 343, 222];

console.log(ids.indexOf(122)); // logs 1
console.log(ids.indexOf(20));  // logs -1


// 22. lastIndexOf()	Search the array for an element, starting at the end, and returns its position

const numbers = [10, 20, 30, 40, 30, 10];

const lastIndex = numbers.lastIndexOf(10); 
const lastIndex2 = numbers.lastIndexOf(30); 
console.log(lastIndex); // Output: 5
console.log(lastIndex2); // Output: 4




// 23. isArray()	Checks whether an object is an array

const arra1 = [1, 2, 3];
const arra2 = 'Hello';
const arra3 = { name: 'John', age: 30 };

console.log(Array.isArray(arra1)); // Output: true
console.log(Array.isArray(arra2)); // Output: false
console.log(Array.isArray(arra3)); // Output: false




// 24. splice()	Adds/Removes elements from an array
// overwrites the original array

const equipos = ["liga", "chelsea", "city", "barca"];
equipos.splice(1, 0, "real");
console.log(equipos);  //  logs [ 'liga', 'real', 'chelsea', 'city', 'barca' ]


const countries = ["colombia", "ecuador", "usa"];
countries.splice(0, 2, "argentina", "brazil");
console.log(countries);  // logs [ 'argentina', 'brazil', 'usa' ]


const digits = [20, 2, 45, 56, 1, 10]; 
const removedElement = digits.splice(4, 1); 
console.log(digits);  // logs [ 20, 2, 45, 56, 10 ]
console.log(removedElement); // logs [1]





// 25. toString()	returns a string with array values separated by commas.

const meses = [1, 2, 3, 4, 5];

const stringRepresentation = meses.toString();
console.log(stringRepresentation); // Output: "1,2,3,4,5"


const cities = ["miami", "quito", "rio"];
console.log(cities.toString());