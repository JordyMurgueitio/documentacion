//  DOM Events 
// Events on the web are user interactions and browser manipulations that you can program to trigger functionality
// Events are triggered by user interactions with the browser, such as clicking a button, moving the mouse, or pressing a key.



// Registering Event handlers
// Event Handlers: Functions that modify and update DOM elements after an event fires

// .addEventListener() method -  
// we can have a DOM element listen for a specific event and execute a block of code when the event is detected. 
// The DOM element that listens for an event is called the event target
// The .addEventListener() method takes two arguments: an event name in string format and an event handler function.
let eventTarget = document.getElementById("target-element"); 
eventTarget.addEventListener("click", function() {
    this.style.backgroundColor = "black"; 
    this.style.color = "white";
}); 
// Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function
function chnageFont () {
    eventTarget.style.fontFamily = "Roboto"; 
}
eventTarget.addEventListener("click", chnageFont); 

// .onevent property - 
// Event Handlers can also be registered by setting an .onevent property on a DOM element (event target)
// for registering a specific event whe append an element with .on followed by the lowercased event type name
function eventHandlerFunction () {
    eventTarget.style.borderRadius = "15px";
}
eventTarget.onclick = eventHandlerFunction; 
// the .onevent property and the .addEventListener() method will both register event listeners
/* With .onevent, it allows for one event handler function to be attached to the event target. 
However, with the .addEventListener() method , we can add multiple event handler functions */




// Removing event handlers 

// .removeEventListener() method -
// Used to reverse the .addEventListener() method
/* Takes two arguments:
    1. The event type as a string
    2. the name of the event handler you want to remove  */
eventTarget.removeEventListener("click", eventHandlerFunction);
// If .addEventListener() was provided an anonymous function, then that event listener cannot be removed
// Make sure the eventHandlerFunction in the removeEventListener() method is the same function of the corresponding addEventListener() method 
function showFortune(){
    button.innerHTML = "Come back tomorrow!";
    button.style.cursor = "default";
    button.removeEventListener("click", showFortune);
}
button.addEventListener('click', showFortune);




// Event Object properties -  
// JavaScript stores events as Event objects with their related data and functionalities as properties and methods
// The event object is passed as an argument to the event handler function when the event is triggered  
function eventHandlerFunction(event){
    console.log(event.timeStamp);
}
eventTarget.addEventListener('click', eventHandlerFunction); /* we log the time it took for the event to be triggered 
since the document was loaded by accessing the .timeStamp property of the event object */

/* There are pre-determined properties associated with event objects. 
You can call these properties to see information about the event */
/* 
.target property reference the element that the event is registered to.
.type property to access the name of the event.
.timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered. */
let share = document.getElementById('share-button');
let text = document.getElementById('text');
function sharePhoto (event) {
    event.target.style.display = "none";
    text.innerHTML = event.timeStamp; 
}; 
share.addEventListener("click", sharePhoto);




// Event types 

// Mouse Events 
/* 
click event - fired when the user clicks on an element
wheel event - fired when the user scrolls the mouse wheel
mousedown event - fired when the user presses a mouse button down. doesn’t need the mouse button to be released to fire
mouseup event - fired when the user releases the mouse button
mouseover event - fired when the mouse enters the content of an element. 
mouseout event - fired when the mouse leaves an element */
let button10 = document.getElementById("button10");
let otherButton = document.getElementById("other-button");

function changeBackground () {
    button10.style.backgroundColor = "blue"; 
}; 
function increaseWidth () {
    button10.style.width = "500px";
};
function showItem () {
    otherButton.style.display = "block";
}

button10.addEventListener("mouseup", changeBackground); 
button10.addEventListener("mousedown", showItem);
button10.addEventListener("mouseover", increaseWidth); 
button10.addEventListener("mouseout", changeBackground);


// Keyboard events 
/* 
keydown event - fired when the user presses a key down
keyup event - fired when the user releases a key
keypress event - fired when the user presses a key down and releases it */
let ball = document.getElementById('float-circle');
function up () {
    ball.style.bottom = "250px";
}; 
function down () {
    ball.style.bottom = "50px";
};

document.addEventListener ("keydown", up);
document.addEventListener ("keyup", down);
/* Keyboard events have unique properties assigned to their event objects 
like the .key property that stores the values of the key pressed by the user
You can program the event handler function to react to a specific key */




















