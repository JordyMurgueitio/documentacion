// ARRAYS  

//JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans).
// we can have an array that holds all the same data types or an array that holds different data types.

const example = [1, "hola", true];
const hobbies = ["code", "dj", "football"];
const grades = [10, 7, 5, 8, 8];



// 1. Accessing Elements - Each element in an array has a numbered position known as its index
// Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1

const cities = ["New York", "Amsterdam", "Barcelona"];
let bestCity = cities[1];
console.log(bestCity);  // prints amsterdam
console.log(cities[0]); // prints new york



// 2. Update Elements  - Once you have access to an element in an array, you can update its value.

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);  // prints ['bread', 'avocados', 'milk']



// 3. Arrays with let and const  - we can change the contents of a const array, but cannot reassign a new array or a different value.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);  // re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword

utensils[3] = "Spoon";
console.log(utensils);  // We can change the element of a const array but we can't change the array



// 4. The .length property - returns the number of items in the array.

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);  // prints 3


// 5. The .push() Method - allows us to add items to the end of an array
// take a single argument or multiple arguments separated by commas

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook', 'buy shoes');
console.log(chores);


// 6. The .pop() Method - removes the last item of an array
//  returns the value of the last element

const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();

console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2


// 7. The .shift() Method - Removes and returns the first element of the array. All subsequent elements will shift down one place.
const shoppingList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const removed_item = shoppingList.shift();

console.log(shoppingList);  // prints array without 'orange juice'
console.log(removed_item);  // prints orange juice


// 8. The .unshift() Method - Adds one or more elements to beginning of array and returns new length.

const weekDays = ['wednesday', 'thursday', 'friday'];

weekDays.unshift('monday', 'tuesday');
console.log(weekDays);


// 9. The .slice() Method - returns a shallow copy of all or part of an array without modifying the original.
// 9.1  two arguments (start, end) index start and index end (not included) of the array
const names = ['jordy', 'mateo', 'nico', 'juan', 'fer'];
const fistHalf = names.slice(0, 3);  
console.log(fistHalf);  // prints ['jordy', 'mateo', 'nico']

// 9.2 One argument (start) - the returned array contains all elements from the start position to the end of the array.
const numbers = [1, 2, 3, 4, 5, 6];
const secondHalf = numbers.slice(2); 
console.log(secondHalf);  // prints [3, 4, 5, 6]

// 9.3  Zero arguments () - If start and end values are not provided, the slicing of array will be of the whole array.
const shortWeek = ['monday', 'tuesday', 'wednesday'];
const anotherWeek = shortWeek.slice();
console.log(anotherWeek);  // prints ['monday', 'tuesday', 'wednesday']



// 10. The .splice() Method -  changes the contents of an array by removing or replacing existing elements and/or adding new elements
// splice(indexToStart, numberOfIndices, item1, item2, itemN)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1 and replaces 0 elements
console.log(months);  // Expected output:  ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);  // Expected output:  ["Jan", "Feb", "March", "April", "May"]



// 11. The .indexOf() Method - returns the index of the element in the array
// Returns -1 if the element is not found.
const colors = ["red", "blue", "black"];
const indexBlue = colors.indexOf("blue");
console.log(indexBlue); // logs 1



// 12. Arrays and functions
// you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(array){
    array[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);  // logs ['arrays', 'can', 'be', 'MUTATED'];

function removeElement (newArr) {
    newArr.pop();
}
removeElement (conc6ept);
console.log(concept); // logs ['arrays', 'can', 'be']


// 13. Nested arrays - an array contains another array
//  to access the elements within the nested array we can chain, or add on, more bracket notation with index values

const numberClusters = [[1,2], [3,4], [5,6]];

console.log(numberClusters[1]);  // logs [3,4]
console.log(numberClusters[2][1]); // logs 6

