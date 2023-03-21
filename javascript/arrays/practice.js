// 1. Array methods. Mutates an array and logs the mutated array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 
                    'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
                    '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();  // deletes last element
secretMessage.push('to', 'Program'); // adds 2 elements at the end
secretMessage[7] = 'right';  // replaces index 7 with new string
secretMessage.shift();  // deletes 1st element 
secretMessage.unshift('Programming');  // adds element at the beginning
secretMessage.splice(6, 5, 'know'); // replaces 5 elements starting at index 6 with element 'know'

console.log(secretMessage.join(' '));