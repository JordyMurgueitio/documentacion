// Function finds the largest of 3 given numbers 

function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`The largest number is ${num1}`);
    } else if (num2 > num3) {
        console.log(`The largest number is ${num2}`);
    } else {
        console.log(`The largest number is ${num3}`);
    }
}

largestNumber (600, 50, 97);


// Function prints the result after evaluating arithmetic operations between two numbers

function evalNumber (num1, num2, op) {
    if (op == "add"){
        console.log(`The result of adding ${num1} and ${num2} is ${num1 + num2}`);
    } else if (op == "multiply") {
        console.log(`The result of multiplying ${num1} and ${num2} is ${num1 * num2}`);
    }
}

evalNumber(40, 40, "add");
evalNumber(10, 2, "multiply");


// Function calculates calories needed based on weight and being active or not

function countCalories(weight, active) {
    if (weight >= 60 && active == true) {
        console.log("You need 3000 calories");
    } else if (weight < 60 && active == true) {
        console.log("You need 2500 calories");
    } else {
        console.log("You need 2000 calories");
    }
}

countCalories(60, true);