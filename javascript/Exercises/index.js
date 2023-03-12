const getCalories = (weight, height) => weight * height;

console.log(getCalories(20,2));

let number1 = 230;
let number2 = 330;

number1 > number2 ? console.log(`the bigger is ${number1}`)
: console.log(`the bigger is ${number2}`);


const canIVote = number => {
    if (number >= 18) {
        return true;
    } else if (number < 18) {
        return false;
    }
}
console.log(canIVote(17));

