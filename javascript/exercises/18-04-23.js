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



// 6. Write a conditional statement that checks if a person is old enough to vote (18 years or older).

const canVote = person => {
    if (person.age >= 18) {
        return "You can vote";
    } else {
        return "you can not";
    }
}; 

const person1 = {
    name: "messi", 
    age: 20
};
const person2 = {
    name: "messi", 
    age: 2
};

console.log(canVote(person1));
console.log(canVote(person2));



// 7. Write a function that takes in an array of strings and returns a new array. 
// This new array should contain all the strings from the argument array but with capitalized letters. 'heya' will become 'HEYA!'

const shoutGreetings = array => {
    let newArray = array.map(element => {
        return element.toUpperCase() + "!";
    })
    return newArray;
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings)); // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


// 8. Write a function justCoolStuff() that takes in two arrays of strings, 
// and, using the built-in .filter() method, returns an array with the items that are present in both arrays


const justCoolStuff = (firstArray, secondArray) => {
    return firstArray.filter(item => {
        return secondArray.includes(item)
    });
}
const objetos2 = ["hola" ,"hdi", "ds"]
const objetos1 = ["hola" ,"hddi", "ddfs"]
console.log(justCoolStuff(objetos1, objetos2)); // logs ["hola"]