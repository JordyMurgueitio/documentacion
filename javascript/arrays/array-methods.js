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


// 4. push()	Adds new elements to the end of an array, and returns the new length


// 5. entries()	Returns a key/value pair Array Iteration Object


// 6. every()	Checks if every element in an array pass a test


// 7. fill()	Fill the elements in an array with a static value


// 8. filter()	Creates a new array with every element in an array that pass a test


// 9. find()	Returns the value of the first element in an array that pass a test


// 10. reverse()	Reverses the order of the elements in an array


// 11. shift()	Removes the first element of an array, and returns that element


// 12. unshift()	Adds new elements to the beginning of an array, and returns the new length


// 13. slice()	Selects a part of an array, and returns the new array


// 14. findIndex()	Returns the index of the first element in an array that pass a test


// 15. forEach()	Calls a function for each array element


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