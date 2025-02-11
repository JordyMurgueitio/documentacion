//PROPERTIES - data types have properties
/* Number, Biglnt, String, Boolean, Null, Undefined, Symbol, Object */

console.log("hello".length); //length propertie - prints 5



// Arithmetic Operators 
// built-in arithmetic operators, that allow us to perform mathematical calculations on numbers
// % Remainder operator:  returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0


//METHODS - actions we can perform

console.log("hello".toUpperCase()); //prints HELLO
console.log("mija".startsWith("m")); //prints true



// BUILT-IN OBJECTS - objects have methods and properties

console.log("hola"); //console object - log method - prints hola

Math.random(); //Math object with random method 
console.log(Math.random()); //prints random number between 0 and 1

Math.floor(Math.random() * 50); //floor method rounds down the nearest whole number
console.log(Math.floor(Math.random() * 50)); //prints whole random number between 0 and 50

Number.isInteger(2030); //Number object with isInteger method
console.log(Number.isInteger(120)); //prints true



// VARIABLES - variables label and store data in memory.
// Variable names cannot start with numbers.
// Variable names are case sensitive
// Variable names cannot be the same as keywords.

//var - can be reassigned - can be undefinded
var myName = ""; 
myName = "Juan"
console.log(myName);  // Prints Juan

//let - can be reassigned - can be undefinded
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

//const - can't be reassigned - must have a value
const age = 50;
console.log(age);



// MATHEMATICAL ASSIGNMENT OPERATORS: +=, -=, *=, /=, ++, -- 
// Calculate new values and assign them to a variable.
let a = 8;
a += 2; // Can be written as a = a + 2
console.log(a); // Output: 10

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

//INCREMENT AND DECREMENT OPERATORS
let tios = 5; 
tios++; 
console.log(tios); //Prints 6 

let abuelos = 4; 
abuelos--; 
console.log(abuelos); //prints 3



//String concatenation with variables 
// The + operator can be used to combine two string values even if those values are being stored in variables
let favoriteAnimal = "lion";
console.log("My favorite animal: " + favoriteAnimal); //prints My favorite animal: lion


//String interpolation - We use template literals (``) 
// Inside the template literal, you’ll see a placeholder, ${}. 
let user = "jordy";
let myCity = "Quito";
console.log(`My name is ${user} and I live in ${myCity}`); // Logs: My name is Jordy and I live in Quito


//typeof operator - check data type of a variable's value
// checks the value to its right and returns a string of the data type.
let newVariable = 'Playing around with typeof';
const unknown3 = true;

console.log(typeof newVariable); //prints string
newVariable = 1;
console.log(typeof newVariable); //prints number  
console.log(typeof unknown3); // Output: boolean


//KELVIN-WEATHER PROJECT - transform from kelvin to fahrenheit

const kelvin = 293; //kelvin temperature for today 
let celsius = kelvin - 273; //transfrom kelvin to celsius 
let fahrenheit = Math.floor(celsius * (9/5) + 32); //transform celsius to fahrenheit 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);



//DOG YEARS PROJECT - calculate my age in dog years 

let myAge = 24; //saving my age
let earlyYears = 2; 
earlyYears *= 10.5; //first 2 years count as 10.5 dog years each. 

let laterYears = myAge - 2;  
laterYears *= 4; //Each year following equates to 4 dog years

let myAgeInDogYears = earlyYears + laterYears;

console.log(`My name is Jordy. I'm ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);






