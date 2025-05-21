// JSON AND JAVASCRIPT 
// JSON’s syntax looks similar to a JavaScript object with minor differences.



// JSON Object vs JavaScript Object
// Each JSON name-value pair and all string values must be enclosed in double-quotes while this is optional in JavaScript.
// JSON Object
let objectJson =
{
    "student": {
        "name": "Rumaisa Mahoney",
        "age": 30,
        "languages": [ "JavaScript", "HTML", "CSS" ]
    }
}
// JavaScript Object
let objectJs = 
{
    student: {
        name: "Rumaisa Mahoney",
        age: 30,
        languages: [ "JavaScript", "HTML", "CSS" ]
    }
}



// Reading a JSON string 
// Often the JSON data that we receive from a web request comes in the form of a string.
// We will need to convert the string to a format that we can use in order to access its parts.
/* In JavaScript, we have a built-in JSON class with a method called .parse() that takes a JSON string 
as a parameter and returns a JavaScript object. */
const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
const jsObject = JSON.parse(jsonData);
console.log(jsObject); // prints: { book: { name: 'JSON Primer', price: 29.99, inStock: true, rating: null } }

const jsonData2 = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';
const jsObject2 = JSON.parse(jsonData2);
console.log(jsObject2.parent.children);




// Writing a JSON string
// Before we can send off our data across the web, we need to convert them to a JSON string
// We can convert a JavaScript object to a JSON string using the JSON.stringify() method of the built-in JSON class.
const jsObject3 = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonData3 = JSON.stringify(jsObject);
console.log(jsonData);
// prints: { "book": "JSON Primer", "price": 29.99, "inStock": true, "rating": null }

const jsonData4 = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';
const jsObject4 = JSON.parse(jsonData4);
jsObject4.parent.age = 35;
const jsObjectToJson = JSON.stringify(jsObject4);
console.log(jsObjectToJson);
// prints: {"parent":{"name":"Sally","age":35,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}

