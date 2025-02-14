// 1. Loops to compare 2 arrays

let user1 = [5, 7, 2, 10, 9];
let user2 = [5, 3, 6, 10, 6];

for (let i = 0; i < user1.length; i++) {
    for (let j = 0; j < user2.length; j++) {
        if (user1[i] === user2[j]) { 
            console.log(user1[i]);
        }
    }
}


// 2. function returns an array with common values between 2 given arrays

function compare (array1, array2) {
    let inCommon = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                inCommon.push(array1[i]);
            }
        }
    }
    console.log(inCommon);
};

compare([2, 5, 6, 7], [4, 7, 8, 2]);


// 3.  // for...of loop to iterate through an array

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];
for (const pokemon of pokemonList) {
    if (pokemon === 'Yoshi') {
    continue;
    }
    console.log(`You caught a ${pokemon}!`);
}