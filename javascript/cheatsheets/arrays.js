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



// 4. The .length property 

