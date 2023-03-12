// 1. Function finds the largest of 3 given numbers 

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


// 2. Function prints the result after evaluating arithmetic operations between two numbers

function evalNumber (num1, num2, op) {
    if (op == "add"){
        console.log(`The result of adding ${num1} and ${num2} is ${num1 + num2}`);
    } else if (op == "multiply") {
        console.log(`The result of multiplying ${num1} and ${num2} is ${num1 * num2}`);
    }
}

evalNumber(40, 40, "add");
evalNumber(10, 2, "multiply");


// 3. Function calculates calories needed based on weight and being active or not

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


// 4. Function takes the age of a person and returns which phase of life they are in 

const lifePhase = age => {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <=12) {
        return 'child'; 
    } else if (age >= 13 && age <=19) {
        return 'teen'; 
    } else if (age >= 20 && age <=64) {
        return 'adult'; 
    } else if (age >= 65 && age <=140) {
        return 'senior citizen'; 
    } else {
        return 'This is not a valid age';
    }
}
console.log(lifePhase(0));
console.log(lifePhase(6));
console.log(lifePhase(19));
console.log(lifePhase(29));
console.log(lifePhase(140));
console.log(lifePhase(-15));
console.log(lifePhase(240));


// 5. Function calculates average grade and returns a letter grade that the average corresponds to

function finalGrade(grade1, grade2, grade3) {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return 'You have entered an invalid grade.';
    }
    let average = (grade1 + grade2 + grade3)/3;
    if (average >= 0 && average <= 59) {
        return 'F';
    } else if (average >= 60 && average <= 69) {
        return 'D';
    } else if (average >= 70 && average <= 79) {
        return 'C';
    } else if (average >= 80 && average <= 89) {
        return 'B';
    } else if (average >= 90 && average <= 100) {
        return 'A';
    } 
}

console.log(finalGrade(100, 100, 100));
console.log(finalGrade(200, 50, 100));
