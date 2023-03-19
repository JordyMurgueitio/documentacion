// LOOPS - repeats a set of instructions until a specified condition, called a stopping condition is reached



// 1. The For loop -  The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration

// initialization is let count = 5, so the loop will start counting at 5.
// stopping condition is count < 11, the loop will run as long as the iterator variable, count, is less than 4.
// iteration statement is count++. after each loop, the value of count will increase by 1

for (let count = 5; count < 11; count++) {
    console.log(count);  // logs 5 6 7 8 9 10
}



// 2. Looping in reverse 

// Set the iterator variable to the highest desired value in the initialization expression.
// Set the stopping condition for when the iterator variable is greater or equal than the desired amount.
// The iterator should decrease in intervals after each iteration.

for (let i = 3; i >= 0; i--) {
    console.log(i); // logs 3 2 1 0
}



// 3. Looping through Arrays  - use a for loop to perform the same operation on each element on an array
// To loop through each element in an array, a for loop should use the array’s .length property in its condition

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
}



// 4. Nested Loops - For each round of the outer for loop, the inner for loop will run completely.
// for each friend of bob, we loop over all the friends of tina
// 1sr friend of bob, loop over all friends of tina, and compare each friend of tina with 1st friend of bob, 
// 2nd friend of bob, loop over all friends of tina, and compare each friend of tina with 2nd friend of bob etc

const bobsFollowers = ['erik', 'juam', 'jordy', 'ronaldo'];
const tinasFollowers = ['erik', 'juam', 'ronaldo'];
const mutualFollowers = [];

for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(bobsFollowers[b]);
        }
    }
}
console.log(mutualFollowers);  // logs [ 'erik', 'juam', 'ronaldo' ]



// 5. The while loop - creates a loop that is executed as long as a condition evaluates to true. The loop will run until the condition evaluates to false.
// The condition is specified before the loop, and usually, some variable is incremented or altered
//  In situations when we want a loop to execute an undetermined number of times,

let counter = 1;
while (counter < 4) {   // logs 1 2 3
    console.log(counter);  
    counter++;
}
