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



// 6. Do... Whiile Statements - run at least once and then loop based on a specific condition after its initial run.
// says to do a task once and then keep doing it until a specified condition is no longer met. 

let cupsOfSugarNeeded = 9;
let cupsAdded = 0;
do { // add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0
    cupsAdded ++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);



// 7. The break Keyword- stop a loop from continuing to execute even though the original stopping condition for our loop hasn’t been met
// add test conditions besides the stopping condition, and exit the loop when they’re met

for (let i = 0; i < 99; i++) { // will print Banana 99 times but will stop when i > 2
    if (i > 2 ) {
        break;
    }
    console.log('Banana.');   
}

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){   // will print each element of the array but will stop when it is === 'Notorious B.I.G.'
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
    }
}



// 8. The for...of loop -   The loop will iterate over each element in the iterable object and terminate itself when it reaches the last item 
// can't loop in reverse
// opt for a standard for loop if you need to access the indices or need finer control to determine what elements you want to loop over.
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];  // logs I enjoy singing. I enjoy eating. I enjoy quidditch. I enjoy writing.
for (const hobby of hobbies) {
    console.log(`I enjoy ${hobby}.`);
}

// 8.1 Iterating throug an array
const fruits = ['oranges', 'apples', 'grapes'];  
for (const fruit of fruits) {  // logs oranges apples grapes
    console.log(fruit);
}

// 8.2 Iterating through a string 
const userName = "ronaldo";
for (const character of userName) {
    console.log(character);
}

// 8.3 Break statement
// Will iterate through the array until it encounters Basan, then it will exit.
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
for (const bird of strangeBirds) {
    if (bird === 'Basan'){ 
    break; 
    }
    console.log(bird);
}

// 8.4 continue statement -  skip one iteration of the loop
// Will iterate through the array and print out every value except the suspected imposter:
const boys = ['erik', 'juan', 'lisa', 'mateo'];
for (const boy of boys) {
    if (boy === 'lisa') {
        continue;
    }
    console.log(boy);
}








