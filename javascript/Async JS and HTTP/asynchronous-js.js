// Asynchronous JavaScript
/* When a site is set up to respond to different user actions at the same time, 
it’s likely that this site is using asynchronous JavaScript code. */

/* Tasks like contacting the back-end to retrieve information, querying our database for user information, 
or making a request to an external server, like a 3rd party API, take varying amounts of time. 
Since we aren’t sure when we’ll get this information back, we can use asynchronous code to run these tasks in the background */

// Javascript has the event loop, a specific design that allows it to perform asynchronous tasks even while only using a single thread




// Asynchronous callbacks 
// This is a type of callback function that executes after a specific condition is met and runs concurrently to any other code currently running.
// The function passed as the second argument of .addEventListener() is an asynchronous callback 
easterEgg.addEventListener('click', () => {
    console.log('Up, Up, Down, Down, Left, Right, Left, Right, B, A');
});




// setTimeout()
// This is a built-in JavaScript function that allows us to run a function after a specified amount of time.
// The first argument is the function to run, and the second argument is the time in milliseconds to wait before running the function.
setTimeout(() => {
    console.log('This message is delayed by 2 seconds');
}, 2000);
// In web development, this means we can write code to wait for an event to trigger all while a user goes on interacting with our app



// setInterval()
// This is a built-in JavaScript function that allows us to run a function repeatedly at a specified interval.
// The first argument is the function to run, and the second argument is the time in milliseconds to wait between each function call.
// With setInterval(), we can programmatically create an alarm, a countdown timer, set the frequency of an animation, and so much more!
setInterval(() => {
    return 'This message is repeated every 2 seconds';
}, 2000);
// setInterval() will continue to run until we stop it with clearInterval()








