// FUNCTIONS  - reusable block of code that groups together a sequence of statements to perform a specific task.


// 1. FUNCTION DECLARATION - binds a function to a name, or an identifier
function greet() {
    console.log("Hola amigo");
}


// 2. CALLING A FUNCTION - The code inside a function body runs, or executes, only when the function is called.
function sayThanks () {
    console.log("Thanks for comming ");
}

sayThanks();
sayThanks();


// 3. PARAMETERS AND ARGUMENTS - allow functions to accept input(s) and perform a task using the input(s).  
function sayGracias(name) {
    console.log(`thanks for buying, ${name}`);
}

sayGracias("Erik");


// 4. DEFAULT PARAMETERS - allow parameters to have a predetermined value in case there is no argument passed into the function when called.
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


// 5. RETURN - allows functions to produce an output. We can then save the output to a variable for later use
function monitorCount(rows, columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);


// 6. HELPER FUNCTION - functions being called within another function
function multiplyByNineFifths(number) {
    return number * (9/5);
}

function fahrenheit (celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
fahrenheit(26);


// 7. FUNCTION EXPRESSIONS - the function name is usually omitted. often stored in a variable in order to refer to it. 
//To invoke a function expression, write the name of the variable in which the function is stored
const plantNeedsWater = function (day) {
    if (day == "Wednesday") {
        return true;
    } else {
        return false;
    }
};
console.log(plantNeedsWater("Wednesday"));


// 8. ARROW FUNCTIONS  - shorter way to write functions by using the special “fat arrow” () => notation.
// remove the need to type out the keyword function. you first include the parameters inside the ( ) and then add an arrow =>
const rectArea = (width, height) => { 
    let area = width * height; 
    return area;
}
console.log(rectArea(10, 10));


// 9. CONCISE BODY ARROW FUNCTIONS - several ways to refactor arrow function syntax. most condensed form of the function is concise body

    // 9.1. 
    const hello = () => {};  //function takes zero or multiple parameters, parentheses are required.
    const welcome = parameter => {}; //Functions that take only a single parameter do not need that parameter to be enclosed in parentheses
    const sayHi = (name1, name2) => {};  // 2 or more parameters, parentheses are required

    // 9.2.
    // function body composed of a single-line block does not need curly braces the return keyword can be removed. This is referred to as implicit return.
    /* const otherSum = numero => {
        let sum = numero + numero;
        return sum;
    }; */
    const otherSum = numero => numero + numero;  

