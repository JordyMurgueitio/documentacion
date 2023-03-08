// SCOPE -  defines where variables can be accessed or referenced. 
// While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.


// 1. Blocks and Scope - A block is the code found inside a set of curly braces {}
const city = "New York City";

function logCitySkyline () {
    let skyscraper = "Empire State Building";
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline()); // function is able to access both variables without any problems.

