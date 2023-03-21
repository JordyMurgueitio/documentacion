// STRING SEARCH METHODS 



// 1. indexOf() - Returns the index (position) of the first occurrence of a value in a string
let text = 'hello world';
console.log(text.indexOf('world')); // logs 6
console.log(text.indexOf('l', 5));   // Find the first occurrence of "l", starting at position 5: logs 9


// 2. lastIndexOf() - Returns the index (position) of the last occurrence of a value in a string
// searches the string from the end to the beginning.
let mensaje = "hola amigos, el planeta es un planeta peligroso";
console.log(mensaje.lastIndexOf('planeta'));  // logs 30
console.log(mensaje.indexOf('planeta'))  // logs 16

let mensaje2 = "Hello planet earth, you are a great planet.";
let result = mensaje2.lastIndexOf("planet", 20);  // position 20 from the end to the beginning
console.log(result);  // logs 6


// 3. search() - searches a string for a string (or a regular expression) and returns the position of the match
// cannot take a start position argument
let texto = "Please locate where 'locate' occurs!";
let where = texto.search("locate");
let where2 = texto.search(/locate/);
console.log(where, where2);


// 4. match() - Searches a string for a value, or a regular expression, and returns the matches
// returns an array of matches.
let quote = "The rain in SPAIN stays mainly in the plain";

console.log(quote.match("ain"));


// 5. matchAll()  - returns an iterator containing the results of matching a string against a string (or a regular expression).
let msg = "I love cats. Cats are very easy to love. Cats are very popular.";
let iterator = msg.matchAll("Cats");
console.log(iterator);


// 6. includes() - returns true if a string contains a specified string.
//string.includes(searchvalue, start) 
let ejemplo = "Hello world, welcome to the universe.";

let findWord = ejemplo.includes("world"); 
let findWord2 = ejemplo.includes("world", 8); 
console.log(findWord);  // logs true 
console.log(findWord2);  // logs false


// 7. startsWith() -  returns true if a string starts with a specified string
// string.startsWith(searchValue, start)
let chat = "Hello world, welcome to the universe.";
console.log(chat.startsWith("Hello")); // logs true 


// 8. endsWith() - returns true if a string ends with a specified string.
// string.endsWith(searchvalue, length)
let chat2 = "Hello world";
console.log(chat2.endsWith("world"));  // logs true

let chat3 = "Hello world, welcome to the universe.";
console.log(chat3.endsWith("world", 11));  // logs true