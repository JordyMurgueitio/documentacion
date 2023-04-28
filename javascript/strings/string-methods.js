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
// returns sort order -1: before, 1: after, or 0: equal
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



// 5. repeat()	Returns a new string with a number of copies of a string
// string.repeat(count)

let mija = 'futbol papa'; 
console.log(mija.repeat(2)); // logs futbol papafutbol papa



// 6. replace()	Searches a string for a value, and returns a string where the values are replaced
// string.replace(searchValue, newValue)
let weKnow = 'messi is the best';
console.log(weKnow.replace('best', 'goat'));

let tip = 'visit barcelona, barcelona is beautiful';
console.log(tip.replace(/barcelona/g, 'madrid'));



// 7. slice()	Extracts a part of a string and returns a new string
// string.slice(start, end)
let salute = 'hola mundo';
console.log(salute.slice(0, 4));  // logs hola
console.log(salute.slice(5));  // logs mundo
console.log(salute.slice(-1)); // logs o



// 8. toLowerCase()	Returns a string converted to lowercase letters
let HAHAHA = "HAHAHAHA";
console.log(HAHAHA.toLowerCase()); // logs hahahaha


// 9. toUpperCase()	Returns a string converted to uppercase letters
let what = "you did what?"
console.log(what.toUpperCase());



// 10. toString()	Returns a string or a string object as a string

let myCity = "Quito"; 
let myCity2 = myCity.toString(); 
console.log(myCity2);


// 11. trim()  removes whitespace from both sides of a string.

let hello = "       Hello Wordl    ";
console.log(hello.trim());   


