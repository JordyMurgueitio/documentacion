// ERROR HANDLING 

// Error handling is the process of programmatically anticipating and addressing errors. 
// In JavaScript, we handle errors using the keywords try and catch.




// 1. Runtime errors 
/* Examples of runtime errors
    ReferenceError: when a variable or function cannot be found.
    TypeError: when a value is not a valid type, see the example below: */



// 2. Constructing errors  - JavaScript errors are objects that have a name and message property
/*  if we need an error message that isn’t covered by the built-in errors, 
we can use the Error function to make our own error object with a message that is unique to our program! */

console.log(Error('Your password is too weak.')); // The Error function takes a string as argument which becomes the value of the error’s message property
// creating an error is not the same as throwing an error. A thrown error will cause the program to stop running



// 3. The throw keyword - an error must be thrown for it to halt the program.
// To throw an error in JavaScript, we use the throw keyword

throw Error('Something wrong happened'); // code after the throw statement will not execute



// 4. The try...catch keyword - anticipate and handle errors by writing code to allow our program to continue running.

try {
    throw Error('This error will get caught');
} catch (e) {
    console.log(e);
}





