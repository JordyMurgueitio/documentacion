// HIGHER-ORDER FUNCTIONS -  functions that accept other functions as arguments and/or return functions as output
// JavaScript functions can have properties and methods.



// 1. Functions as data - 
// JavaScript functions behave like any other data type in the language
// we can assign functions to variables, and we can reassign them to new variables.
const announceThatIAmDoingImportantWork = () => {
    console.log("I am doing very important work!");
};
// we can re-assign the function to a variable with a suitably short name:
const busy = announceThatIAmDoingImportantWork;  // we assign without parentheses. We want to assign the value of the function itself, not the value it returns when invoked.
busy(); // busy is a variable that holds a reference to our original function. If we invoke busy(), it will also invoke the original function, announceThatIAmDoingImportantWork().
console.log(busy.name); // logs announceThatIAmDoingImportantWork




// 2. Functions as parameters 
// functions that get passed in as parameters are called callback functions. 
// Callback functions get invoked during the execution of the higher-order function
// With callback functions, we pass in the function itself by typing the function name without the parentheses

const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}
const anotherFunc = () => {
    return 'Im being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc); 




/* Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

We can work with functions the same way we work with any other type of data, including reassigning them to new variables

JavaScript functions are first-class objects, so they have properties and methodslike any other object.

Functions can be passed into other functions as parameters.

A higher-order function is a function that either accepts functions as parameters, returns a function, or both. */