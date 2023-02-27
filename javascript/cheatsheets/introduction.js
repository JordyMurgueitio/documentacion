//PROPERTIES - data types have properties

console.log("hello".length); //length propertie - prints 5

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



// VARIABLES - store information 


//var - can be reassigned - can be undefinded
var myName = ""; 
myName = "Juan"
console.log(myName);

//let - can be reassigned - can be undefinded
let meal = "pizza"; 
meal = "burger"
console.log(meal);

//const - can't be reassigned - must have a value
const age = 50;
console.log(age);

//Mathematical assignment operators 
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

//Increment and decrement operators 
let tios = 5; 
tios++; 
console.log(tios); //Prints 6 

let abuelos = 4; 
abuelos--; 
console.log(abuelos); //prints 3

//String concatenation with variables 

let favoriteAnimal = "lion";
console.log("My favorite animal: " + favoriteAnimal); //prints My favorite animal: lion

//String interpolation - We use template literals (``) 

let user = "jordy";
let myCity = "Quito";
console.log(`My name is ${user} and I live in ${myCity}`);

//typeof operator - check data type of a variable's value

let newVariable = 'Playing around with typeof';

console.log(typeof newVariable); //prints string
newVariable = 1;
console.log(typeof newVariable); //prints number 



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






