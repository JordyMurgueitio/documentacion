// ARRAY METHODS


// 1. concat() - 	Joins arrays and returns an array with the joined arrays
const arr1 = ['juan', ' erik', 'eli'];
const arr2 = ['pau', 'alih'];
const children = arr1.concat(arr2);
console.log(children); // logs [ 'juan', ' erik', 'eli', 'pau', 'alih' ]


// 2. copyWithin()	copies array elements to another position in the array, overwrites the existing values
// array.copyWithin(target, start, end)
// target: The index (position) to copy the elements to. | The start index (position) | The end index (position). 
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0, 1));  // logs [ 'Banana', 'Orange', 'Banana', 'Mango', 'Kiwi' ]


// 3. pop()	Removes the last element of an array, and returns that element
const notes = [2, 5, 6, 7, 8, 9];
let removed = notes.pop();
console.log(notes);  // logs [ 2, 5, 6, 7, 8 ]
console.log(removed);  // logs 9


// 4. The .push() Method - allows us to add items to the end of an array
// take a single argument or multiple arguments separated by commas

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook', 'buy shoes');
console.log(chores);


// 5. every()	Checks if every element in an array pass a test
// executes a function for each array element / returns true if the function returns true for all elements
//  returns false if the function returns false for one element
const ages = [10, 45, 6, 77, 45];
let everyoneAdult = ages.every(checkAge);  // checks if all elements in the array are > 18

function checkAge (age) { 
    return age > 18;
}
console.log(everyoneAdult);  // logs false


// 6. fill()	fills specified elements in an array with a value
// overwrites the original array - Start and end position can be specified. If not, all elements will be filled.
const teams = ["liga", "boca", "river", "chelsea", "city"];
let newteams = teams.fill("psg", 4, 5);
console.log(newteams);  // logs [ 'liga', 'boca', 'river', 'chelsea', 'psg' ]


// 7. filter()	Creates a new array with every element in an array that pass a test provided by a function
const amigos = ["kaka", "mama", "ala", "erin", "messi"];
const startM = amigos.filter(start_m);  // returns an array with all the elements that start with the leter m

function start_m (amigo) {
    return amigo.startsWith("m");
}
console.log(startM);  // logs [ 'mama', 'messi' ]




// 8. sort()	Sorts the elements of an array - returns the array with the items sorted
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




// 9. find()	Returns the value of the first element in an array that pass a test

const players = ["messi", "hugo", "sebastian"];

const longName = players.find(player => {
    return player.length > 6;
}); 
console.log(longName);   // logs sebastian



// 10. reverse()	Reverses the order of the elements in an array, overwrites the original array

let vowels = ["a", "e", "i", "o", "u"];
let reversedVowels = vowels.reverse(); 
console.log(reversedVowels);



// 11. shift()	Removes the first element of an array, and returns that element
// this method changes the lenght of the array

let signedUp = ["Juan", "Maira", "Elkin", "Soto"]; 
let removedUser = signedUp.shift(); 

console.log(signedUp); // logs [ 'Maira', 'Elkin', 'Soto' ]
console.log(removedUser);  // logs Juan



// 12. unshift()	Adds new elements to the beginning of an array. overwrites the original array
// returns the new length of the array. 

let bestCompanies = ["SAP", "Apple", "Microsoft"];

console.log(bestCompanies.unshift()); // logs 3
console.log(bestCompanies.unshift("Nike", "Amazon")); // logs 5
console.log(bestCompanies);  // logs [ 'Nike', 'Amazon', 'SAP', 'Apple', 'Microsoft' ]



// 13. slice()	Returns selected elements in an array, as a new array
//  array.slice(start, end) start and end represent the index of items in that array. (end is not inclusive)
// The original array will not be modified

const animalNames = ["lion", "tiger", "shark", "dog", "cat"];

console.log(animalNames.slice(0, 3));  // logs [ 'lion', 'tiger', 'shark' ]
console.log(animalNames.slice(3));  // logs [ 'dog', 'cat' ]

// Negative numbers select from the end of the array.
console.log(animalNames.slice(-2)); // logs [ 'dog', 'cat' ]
console.log(animalNames.slice(-3));  // logs [ 'shark', 'dog', 'cat' ]
console.log(animalNames.slice(-4, -2));  // logs [ 'tiger', 'shark']




// 13. findIndex()	Returns the index of the first element in an array that pass a test





// 14. forEach()	Calls a function for each array element


// 16. join()	Joins all elements of an array into a string


// 17. includes()	Check if an array contains the specified element


// 18. indexOf()	Search the array for an element and returns its position


// 19. isArray()	Checks whether an object is an array
// 20. lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// 21. map()	Creates a new array with the result of calling a function for each array element
// 22. reduce()	Reduce the values of an array to a single value (going left-to-right)
// 23. reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// 24. some()	Checks if any of the elements in an array pass a test






// 26. splice()	Adds/Removes elements from an array
// 27. toString()	Converts an array to a string, and returns the result 