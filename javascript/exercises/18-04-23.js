// 1. Write a function that takes two numbers as parameters and returns their sum.

function add (num1, num2) {
    return num1 + num2;
}
console.log(add(10, 10)); 



// 2, Write a function that takes an array of numbers as a parameter and returns the largest number in the array.

const findBigger = array => {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest
}; 

console.log(findBigger([8, 200, 3, 5]));



// 3. Write a function that takes a string as a parameter and returns the string in reverse order

const reverse = string => {
    let reversed = ""; 
    for (let i = string.length-1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

console.log(reverse("hola"));


/* 4. Write a function that takes a number as a parameter and returns "Fizz" if the number is divisible by 3, 
"Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, the function should return the original number. */

const checkNumber = number => {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number
    }
}

console.log(checkNumber(30));


// 5. Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

const reverseArray = array => {
    let reversed = []; 
    for (let i = array.length-1; i >= 0; i--) {
        reversed.push(array[i]);
    }; 
    return reversed;
}

console.log(reverseArray(["jordy", "juan", "kevin"]));