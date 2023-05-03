//  DOM Events 


// 1.  .addEventListener() method -  A DOM element listens for a specific event and execute a block of code when the event is detected. 

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





