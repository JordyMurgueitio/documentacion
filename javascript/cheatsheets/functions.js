// FUNCTIONS 


// 1. Function declarations - binds a function to a name, or an identifier
function greet() {
    console.log("Hola amigo");
}


// 2. Calling a function - The code inside a function body runs, or executes, only when the function is called.
function sayThanks () {
    console.log("Thanks for comming ");
}

sayThanks();
sayThanks();


// 3. Parameters and arguments - allow functions to accept input(s) and perform a task using the input(s).  
function sayGracias(name) {
    console.log(`thanks for buying, ${name}`);
}

sayGracias("Erik");


// 4. default parameters - allow parameters to have a predetermined value in case there is no argument passed into the function when called.
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


// 5. return - allows functions to produce an output. We can then save the output to a variable for later use
function monitorCount(rows, columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);


// 6. Helper Function - functions being called within another function
function multiplyByNineFifths(number) {
    return number * (9/5);
}

function fahrenheit (celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
fahrenheit(26);


// 7. Function expressions - the function name is usually omitted. - often stored in a variable in order to refer to it.

