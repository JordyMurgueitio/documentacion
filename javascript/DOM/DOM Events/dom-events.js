//  DOM Events 


// 1.  Adding event handlers

    //  1.1  .addEventListener() method -  A DOM element listens for a specific event and execute a block of code when the event is detected. 
    //  with the .addEventListener() method , we can add multiple event handler functions
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


    // 1.2  Event Handlers can also be registered by setting an .onevent property on a DOM element (event target)
    // With .onevent, it allows for one event handler function to be attached to the event target. 
function eventHandlerFunction () {
    eventTarget.style.borderRadius = "15px";
}
eventTarget.onclick = eventHandlerFunction; 




// 2. Removing event handlers - The .removeEventListener() method is used to reverse the .addEventListener() method
/* .removeEventListener() also takes two arguments:
    1. The event type as a string
    2. the name of the event handler you want to remove
*/

eventTarget.removeEventListener("click", eventHandlerFunction);
// If .addEventListener() was provided an anonymous function, then that event listener cannot be removed

let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."];
let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
    let randomFortune = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomFortune];
}
function showFortune(){
    fortune.innerHTML = fortuneSelector();
    button.innerHTML = "Come back tomorrow!";
    button.style.cursor = "default";
    button.removeEventListener("click", showFortune);
}

button.addEventListener('click', showFortune);




// 3. Event Object properties -  pre-determined properties associated with event objects. 
// call these properties to see information about the event

    // 3.1  .target property to reference the element that the event is registered to the event .target is a DOM element and you can access
    // 3.2  .type property to access the name of the event.
    // 3.3 .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
function sharePhoto (event) {
    event.target.style.display = "none";
    text.innerHTML = event.timeStamp; 
}; 

share.addEventListener("click", sharePhoto);




// 4. Event types 

    // 4.1 Mouse Events - click, wheel, mousedown, mouseup, mouseover, mouseout

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


    // 4.2  Keyword events - keydown, keyup, keypress
    // have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user
    // program the event handler function to react to a specific key, or react to any interaction with the keyboard

    let ball = document.getElementById('float-circle');

    function up () {
        ball.style.bottom = "250px";
    }; 

    function down () {
        ball.style.bottom = "50px";
    }

    document.addEventListener ("keydown", up);
    document.addEventListener ("keyup", down);






















