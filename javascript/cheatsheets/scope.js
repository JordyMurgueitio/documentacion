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