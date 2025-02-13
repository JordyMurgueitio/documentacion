//CONDITIONAL STATEMENTS 
// checks a specific condition(s) and performs a task based on the condition(s).



//IF STATEMENT - executes code based on conditions
let discount = true;

if (discount) {     //evaluates if discount is true
    console.log("Time to buy something");
}


// IF ELSE STATEMENT - run a block of code when the condition evaluates to false
let sale = true; 

if (sale) {
    console.log("time to buy something man");  //will be printed if sale is true
} else {
    console.log("lets wait for a sale man"); //will be printed if sale is false
}


// COMPARISON OPERATORS - to compare values 
// less than: <  | Greater than > |  Less than or equal to: <= | Greater than or equal to: >=
// Is equal to: === |  Is not equal to: !==
let hungerLevel = 6; 

if (hungerLevel >= 7) {  //compares the value of hungerLevel with another one
    console.log("time to eat"); 
} else {
    console.log("we can wait");
}


// LOGICAL OPERATORS 
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



// TRUTHY AND FALSY  -- check if a variable exists, see if the variable has been assigned a value.
/*  Falsy values
0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number */
let favoritePhrase = '';  
if (favoritePhrase) {   // else statement will run
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.'); 
}

let numberOfApples = 0;
if (numberOfApples){  // Prints 'No apples left!'
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}



// TRUTHY AND FALSY ASSIGNMENT 
// checks if the variable is defined and assigns a default value if it is not
let username = '';
let defaultName;
if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}
console.log(defaultName); // Prints: Stranger

// short-hand for the code above. 
// JavaScript assigns the truthy value to a variable if you use the || operator 
let username2 = '';
let defaultName2 = username2 || 'Stranger';
console.log(defaultName2); // Prints: Stranger




// TERNARY OPERATOR  -- short syntax for the if else statement 
// Used for conditions that evaluate to true or false
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



// ELSE IF STATEMENTS - allows you to have multiple possible outcomes
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



// THE SWITCH KEYWORD - alternative syntax to the else if statement 
let arrivedFrom = "Argentina";

switch (arrivedFrom) {      // ( ... ),  contains the value that each case will compare
    case "England" :        // The case keyword checks if the expression matches the specified value
        console.log("Welcome");
        break;            // break keyword orders to exit the block and not execute any more code or check any other cases
    case "Argentina" :
        console.log("Bienvenido");
        break;
    case "Germany" : 
        console.log("Willkommen");
        break;
    default :               // if none of the cases are true, then the code in the default statement will run
        console.log("Unknown place"); 
        break;
}



const lifePhase = age => {
    switch(true) {
        case (age >= 0 && age < 4):
            return 'baby';
            break;
        case (age >= 4 && age < 13):
            return 'child';
            break;
        case (age >= 13 && age < 20):
            return 'teen';
            break;
        case (age >= 20 && age < 65):
            return 'adult';
            break;
        case (age >= 65 && age <= 140):
            return 'senior citizen';
            break;
        default:
            return 'This is not a valid age';
            break;
    };
};
