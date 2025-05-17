// CONCURRENCY MODEL AND EVENT LOOP 

// If you have a for loop that takes a while to process, it’ll have to finish executing before the rest of your code runs.
// We can run non-blocking code in JavaScript, which is where the Event Loop comes in.
// Input/output (I/O) is handled with events and callbacks so code execution can continue.

console.log("I'm learning about");
for (let idx=0; idx < 999999999; idx++) {}
console.log("the Event Loop");  // The second console.log() statement is delayed by the for loop's execution

// Now let’s take a look at the non-blocking example.
console.log("I'm learning about");
setTimeout(() => {
    console.log("Event Loop");
}, 2000);
console.log("the");
// the result of the above code is: 
// I'm learning about
// the
// Event Loop




// Concurrency 
// Concurrency is the ability of a program to execute multiple tasks at the same time.
// Since JavaScript is single-threaded, we’ll never have that flavor of “true” concurrency. However, we can emulate concurrency using the event loop



// The Event Loop
/* The event loop is made up of these parts:
1. Memory Heap: block of memory where we store objects in an unordered manner.
2. Call Stack: tracks what function is currently being run in your code.
3. Event Queue:  list of messages corresponding to functions that are waiting to be processed
4. Event Loop
5. Node or Web APIs */

console.log("This is the first line of code in app.js.");
function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);
console.log("This is the last line of code in app.js.");

/* 1. console.log("This is the first line of code in app.js."); is added to the stack, executes, then pops off of the stack.
2. setTimeout() is added to the stack.
3. setTimeout()’s callback is passed to be executed by a web API. The timer will run for 3 seconds. After 3 seconds elapse, the callback function, usingsetTimeout() is pushed to the Event Queue.
4. The Event Loop, meanwhile, will check periodically if the stack is cleared to handle any messages in the Event Queue.
5. console.log("This is the last line of code in app.js."); is added to the stack, executes, then pops off of the stack.
6. The stack is now empty, so the event loop pushes usingsetTimeout onto the stack.
7. console.log("I'm going to be queued in the Event Loop."); is added to the stack, executes, gets popped
8. usingsetTimeout pops off of the stack. */



