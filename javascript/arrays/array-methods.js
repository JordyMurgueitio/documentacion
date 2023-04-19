// ARRAY METHODS


// 1. concat() - 	Joins arrays and returns an array with the joined arrays
const arr1 = ['juan', ' erik', 'eli'];
const arr2 = ['pau', 'alih'];
const children = arr1.concat(arr2);
console.log(children); // logs [ 'juan', ' erik', 'eli', 'pau', 'alih' ]


// 2. copyWithin()	copies array elements to another position in the array, overwrites the existing values
// array.copyWithin(target, start, end)
// target: The index (position) to copy the elements to. | The start index (position) | The end index (position). 
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0, 1));  // logs [ 'Banana', 'Orange', 'Banana', 'Mango', 'Kiwi' ]


// 3. pop()	Removes the last element of an array, and returns that element
const notes = [2, 5, 6, 7, 8, 9];
let removed = notes.pop();
console.log(notes);  // logs [ 2, 5, 6, 7, 8 ]
console.log(removed);  // logs 9


// 4. The .push() Method - allows us to add items to the end of an array
// take a single argument or multiple arguments separated by commas

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook', 'buy shoes');
console.log(chores);


// 5. every()	Checks if every element in an array pass a test
// executes a function for each array element / returns true if the function returns true for all elements
//  returns false if the function returns false for one element
const ages = [10, 45, 6, 77, 45];
let everyoneAdult = ages.every(checkAge);  // checks if all elements in the array are > 18

function checkAge (age) { 
    return age > 18;
}
console.log(everyoneAdult);  // logs false


// 6. fill()	fills specified elements in an array with a value
// overwrites the original array - Start and end position can be specified. If not, all elements will be filled.
const teams = ["liga", "boca", "river", "chelsea", "city"];
let newteams = teams.fill("psg", 4, 5);
console.log(newteams);  // logs [ 'liga', 'boca', 'river', 'chelsea', 'psg' ]


// 7. filter()	Creates a new array with every element in an array that pass a test provided by a function
const amigos = ["kaka", "mama", "ala", "erin", "messi"];
const startM = amigos.filter(start_m);  // returns an array with all the elements that start with the leter m

function start_m (amigo) {
    return amigo.startsWith("m");
}
console.log(startM);  // logs [ 'mama', 'messi' ]


// 8. find()	Returns the value of the first element in an array that pass a test


// 9. reverse()	Reverses the order of the elements in an array


// 10. shift()	Removes the first element of an array, and returns that element


// 11. unshift()	Adds new elements to the beginning of an array, and returns the new length


// 12. slice()	Selects a part of an array, and returns the new array


// 13. findIndex()	Returns the index of the first element in an array that pass a test


// 14. forEach()	Calls a function for each array element


// 16. join()	Joins all elements of an array into a string


// 17. includes()	Check if an array contains the specified element


// 18. indexOf()	Search the array for an element and returns its position


// 19. isArray()	Checks whether an object is an array
// 20. lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// 21. map()	Creates a new array with the result of calling a function for each array element
// 22. reduce()	Reduce the values of an array to a single value (going left-to-right)
// 23. reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// 24. some()	Checks if any of the elements in an array pass a test
// 25. sort()	Sorts the elements of an array
// 26. splice()	Adds/Removes elements from an array
// 27. toString()	Converts an array to a string, and returns the result 