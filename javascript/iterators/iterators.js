// ITERATORS  - built-in array methods which make looping easier



// 1. the .forEach() method - will execute the same code for each element of an array.
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




// 2. the .map() method - it takes an argument of a callback function and returns a new array
// .map will iterate through each element in the array and pass the element into the callback function.

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
    return number * 10;
});

console.log(numbers); // logs [1, 2, 3, 4, 5]
console.log(bigNumbers);  // logs [10, 20, 30, 40, 50]




// 3. the .filter() method - returns an array of elements after filtering out certain elements from the original array.
// The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
// The elements that cause the callback function to return true are added to the new array.


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