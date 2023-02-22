//CONDITIONAL STATEMENTS 



//if statement - executes code based on conditions

let discount = true;

if (discount) {     //evaluates if discount is true
    console.log("Time to buy");
}

// if else statement - run a block of code when the condition evaluates to false

let sale = true; 

if (sale) {
    console.log("time to buy something man");  //will be printed if sale is true
} else {
    console.log("lets wait for a sale man"); //will be printed if sale is false
}


// comparison operators - to compare values 

// less than: <  | Greater than > |  Less than or equal to: <= | Greater than or equal to: >=
// Is equal to: === |  Is not equal to: !==

let hungerLevel = 6; 

if (hungerLevel >= 7) {  //compares the value of hungerLevel with another one
    console.log("time to eat"); 
} else {
    console.log("we can wait");
}


// Logical operators


//and operator (&&) -- Both conditions must evaluate to true in order for code to execute
let day = "sunday";
let weather = "sunny";

if (day === "sunday" && weather === "sunny"){
    console.log("Go to the park");
} else {
    console.log("lets relax at home");
}

// or operator (||) -- Only one of the conditions must evaluate to true for code to execute 
let tired = false;
let late = false;

if (tired === true || late === true) {
    console.log("Go to sleep man");
} else {
    console.log("Go to work man");
}

//not operator (!) -- reverses or negates, the value of a boolean 
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true


// Truthy and Falsy assignment -- Checks if the var is defined and assigns a value if not

let userName = "";
let defaultName = userName || "Stranger";

console.log(`Hi ${defaultName}, have a good day`); 


// Ternary Operator  -- short syntax for if else, used for conditions that evaluate to true or false

let angry = true; 
angry ? console.log("relax")
: console.log("Good man");

let favoriteSport = "football";
favoriteSport === "football" ? console.log("What a sport")
: console.log("Not a good sport");

let dark = true; 
let scared = false;
dark && scared ? console.log("run")
: console.log("its ok");


// Else if statements - allow you to have multiple possible outcomes

let energyLevel = 10;

if (energyLevel <= 2) {
    console.log("rest");
} else if (energyLevel <= 6) {
    console.log("resist")
} else if (energyLevel <= 10 ) {
    console.log("Go do something")
} else {
    console.log("energy level unknown, who are you?")
}

// The switch keyword - alternative syntax to the else if statement 

let arrivedFrom = "Argentina";

switch (arrivedFrom) {     
    case "England" :
    console.log("Welcome");
    break; 

    case "Argentina" :
    console.log("Bienvenido");
    break;

    case "Germany" : 
    console.log("Willkommen");
    break;
    
    default :
    console.log("Unknown place")
}




