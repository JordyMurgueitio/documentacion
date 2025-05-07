// ERROR HANDLING 

// Error handling is the process of programmatically anticipating and addressing errors. 
// In JavaScript, we handle errors using the keywords try and catch.




// 1. Runtime errors 
// When we execute code and a line of code throws an error, that error is referred to as a runtime error. 
// In JavaScript, there are built-in error objects that have a name and message property which tell us what went wrong.
/* Examples of runtime errors
1. ReferenceError: when a variable or function cannot be found.
2. TypeError: when a value is not a valid type, example: */
const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world'; 
// TypeError: Assignment to constant variable.
console.log('This will not print because the code above throws an error');



// 2. Constructing errors  - 
// JavaScript errors are objects that have a name and message property
/*  if we need an error message that isn’t covered by the built-in errors, 
we can use the Error function to make our own error object with a message that is unique to our program! */
console.log(Error('Your password is too weak.')); // The Error function takes a string as argument which becomes the value of the error’s message property
// creating an error is not the same as throwing an error. A thrown error will cause the program to stop running
// You might also see errors created with the new keyword.
console.log(new Error('Your password is too weak.')); // The new keyword creates a new instance of the Error object



// 3. The throw keyword - 
// Creating an error doesn’t cause our program to stop. An error must be thrown for it to halt the program.
// To throw an error in JavaScript, we use the throw keyword
throw Error('Something wrong happened'); // code after the throw statement will not execute



// 4. The try...catch statement - 
// anticipate and handle errors by writing code to allow our program to continue running.

/* in a try...catch statement, we evaluate code in the try block 
and if the code throws an error, the code inside the catch block will handle the error for us. */
try {
    throw Error('This error will get caught');
} catch (e) {
    console.log(e);
}

// can also use a try...catch statement to handle built-in errors that are thrown by the JavaScript engine
const someVar = 'Cannot be reassigned';
try {
    someVar = 'Still going to try';
} catch(e) {
    console.log(e); // Prints: TypeError: Assignment to constant variable.
}








