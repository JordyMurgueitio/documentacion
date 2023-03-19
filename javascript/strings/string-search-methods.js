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


// 3. String search()
//String match()
//String matchAll()
//String includes()
//String startsWith()
//String endsWith()