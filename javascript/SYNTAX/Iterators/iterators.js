// ITERATORS  - built-in array methods which make looping easier
//  Iterators are methods called on arrays to manipulate elements and return values.
// All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.


// 1. the .forEach() method - 
// will execute the same code for each element of an array.
// .forEach() takes an argument of callback function
// loops through the array and executes the callback function for each element. 
// During each execution, the current element is passed as an argument to the callback function.
const groceries = ["apple", "sugar", "milk"];
groceries.forEach(groceryItem => console.log(groceryItem));


const fruits = ["apple", "banana", "melon", "orange"];
fruits.forEach(fruit => {
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




// 2. the .map() method -  
// it takes an argument of a callback function and returns a new array
// executes the same code on every element in an array and returns a new array with the updated elements
// .map will iterate through each element in the array and pass the element into the callback function.
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
    return number * 10;
});

console.log(numbers); // logs [1, 2, 3, 4, 5]
console.log(bigNumbers);  // logs [10, 20, 30, 40, 50]




// 3. the .filter() method - 
// returns an array of elements after filtering out certain elements from the original array.
// The callback function for the .filter() method should return true or false
// The elements that cause the callback function to return true are added to the new array
const notes = [10, 10, 7, 3, 5, 6, 9];
const approved = notes.filter(note => {
    return note >= 7;
})
console.log(notes);  // logs [10, 10, 7, 3, 5, 6, 9];
console.log(approved); // logs [10, 10, 7, 9];


const names = ['martinez', 'gonzales', 'ruiz', 'pita', 'ronaldo', 'messi'];
const shortNames = names.filter(name => {
    return name.length <= 5; 
});
console.log(shortNames); // logs [ 'ruiz', 'pita', 'messi' ]




// 4. the .findIndex() method - 
// find the location of an element in an array
// will return the index of the first element that evaluates to true in the callback function.
// If there isn’t a single element in the array that satisfies the condition in the callback, it will return -1.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {  // looks for the index of the first element that starts with "s"
    return animal[0] === "s";
})
console.log(foundAnimal);  // logs 3 because `seal` is the first element that starts with "s" in the array


const randomNumbers = [2, 6, 7, 30, 0];
const biggerThan10 = randomNumbers.findIndex(numero => {
    return numero > 10;
})
console.log(biggerThan10);  // logs 3 becayse 30 is the first number bigger than 10 in the array




// 5. The .reduce() method -  
// returns a single value after iterating through the elements of an array, thereby reducing the array
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


//The .reduce() method can also take an optional second parameter to set an initial value for accumulator
// the first argument is the callback function!
const otherNumbers = [1, 3, 5, 7];

const suma = otherNumbers.reduce((accumulator, currentValue) => {
    console.log(`The value of accumulator: ${accumulator}`);
    console.log(`The value of currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 10);  // 10 is the second parameter that sets the initial value for accumulator
console.log(suma);  // returns 26 because 10 + 1 + 3 + 5 + 7 = 26




// 6. the .some() method - 
// tests whether at least one element in the array passes the test implemented by the provided function
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




// 7. the .every() method -  tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

