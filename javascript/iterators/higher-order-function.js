// HIGHER-ORDER FUNCTIONS -  functions that accept other functions as arguments and/or return functions as output
// JavaScript functions can have properties and methods.



// 1. Functions as data - JavaScript functions behave like any other data type in the language
const announceThatIAmDoingImportantWork = () => {
    console.log("I am doing very important work!");
};
// we can re-assign the function to a variable with a suitably short name:
const busy = announceThatIAmDoingImportantWork;  // we assign without parentheses. We want to assign the value of the function itself, not the value it returns when invoked.
busy();



// 2. Functions as parameters 
// functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA = checkB) {
        return func(val);
    } else {
        return `inconsistent results`
    }
}
console.log(checkConsistentOutput(addTwo, 2));




