// STRING METHODS


// 1. charAt()	Returns the character at a specified index (position) in a string
let texto = "hello world";
console.log(texto.charAt(0));  // logs h

let texto1 = "hola pedro";
console.log(texto1.charAt(texto1.length - 1)); // logs o


// 2. concat()	Returns two or more joined strings
let word = "sea";
let word1 = "food";
console.log(word.concat(word1)); // logs seafood

let text = "Hello";
let text1 = "world!";
let text2 = "Have a nice day!";
console.log(text.concat(" ", text1, " ", text2));  // logs Hello world have a nice day



// 3. .length	Returns the length of a string
let name = "Zlatan";
console.log(name.length); // logs 6



// 4. localeCompare()	Compares two strings in the current locale
// returns sort order -1, 1, or 0 (for before, after, or equal).
// The current locale is based on the language settings of the browser.
let string = "ab";
let string2 = "cd";
console.log(string.localeCompare(string2)); // logs -1

let user = "cd";
let user2 = "ad";
console.log(user.localeCompare(user2));  // logs 1

let combo = "ab";
let combo2 = "ab";
console.log(combo.localeCompare(combo2));  // logs 0



// 5. prototype	Allows you to add properties and methods to an object




/*

repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces
trimEnd()	Returns a string with removed whitespaces from the end
trimStart()	Returns a string with removed whitespaces from the start
valueOf()	Returns the primitive value of a string or a string object */ 