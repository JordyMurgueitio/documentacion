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


// 6. Function calculates what your weight would eqaute to on another planet

const calculateWeight = (earthWeight, planet) => {
    let weight = earthWeight;
    switch (planet) {
        case "Mercury": 
            weight *= 0.378;
        break; 
        case "Venus": 
            weight *= 0.907;
        break; 
        case "Mars": 
        weight *= 0.377;
        break; 
        case "Jupiter": 
        weight *= 2.36;
        break; 
        case "Saturn": 
        weight *= 0.916;
        break; 
        default :
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
    return weight;
}
console.log(calculateWeight(100, "Jupiter"));


// 7. Function evaluates if the passed data is truthy or Falsy
function truthyOrFalsy(data) {
    if (data) {
        return true;
    } else {
        return false;
    }
};


// 8. Function takes a number of shared dna and returns the relationship
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA >= 35 && percentSharedDNA < 100) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA >= 14 && percentSharedDNA < 35) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6 && percentSharedDNA < 14) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA >= 3 && percentSharedDNA < 6) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA >= 1 && percentSharedDNA < 3) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}
console.log(whatRelation(34)); // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3)); // Should print 'You are likely 2nd cousins.'


// 9. Function calculates the tip based on the quality of service and total of the bill

function tipCalculator(quality, total) {
    switch (quality) {
        case "bad":
            return total*0.05;
        break;
        case "ok":
            return total * 0.15;
        break;
        case "good":
            return total * 0.2;
        break;
        case "excellent":
            return total * 0.3;
        break;
        default :
            return total * 0.18;
    }
}
console.log(tipCalculator("good", 100));