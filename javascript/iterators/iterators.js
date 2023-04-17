// ITERATORS  - built-in array methods which make looping easier



// 1. .forEach() method - will execute the same code for each element of an array.
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