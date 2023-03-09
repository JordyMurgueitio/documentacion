// SCOPE -  defines where variables can be accessed or referenced. 
// While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.


// 1. Blocks and Scope - A block is the code found inside a set of curly braces {}
const city = "New York City";

function logCitySkyline () {
    let skyscraper = "Empire State Building";
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline()); // function is able to access both variables without any problems.



// 2. GLOBAL SCOPE - variables are declared outside of blocks. These variables are called global variables.
// they can be accessed by any code in the program, including code in blocks.

let satellite = "The Moon"; 
let galaxy = "The Milky Way";
let stars = "North Star";

function callMyNightSky () {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());



// 3. BLOCK SCOPE - Variables with block scope are known as local variables because they are only available to the code that is part of the same block.
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);  //prints "Moonlight"
}

logVisibleLightWaves ();  // prints "Moonlight"
// console.log(lightWaves); // throws reference error 



// 4. SCOPE POLLUTION - too many global variables that exist in the global namespace, or when we reuse variables across different scopes
let num = 50;

const logNum = () => {
    num = 100;    // The global variable num was reassigned to 100
    return num;   // Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.
};
console.log(logNum()); // Prints 100
console.log(num); // Prints 100



// 5. GOOD SCOPING - scoping variables as tightly as possible using block scope. allows us to define variables with precision, and not pollute the global namespace
const logUserName = () => {
    let user1 = "Erik"; 
    let user2 = "Juan";
    if (user2 === "Juan") {
        let user1 = "Julia"; 
        console.log(user1);  // prints Julia
    }
    console.log(user1);  // prints Erik
}
logUserName();



