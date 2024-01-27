// DESTRUCTURING - is a JavaScript feature that makes it easier to extract data from arrays and objects
// Destructuring is a way to unpack values from arrays and objects and assign them to variables or parameters.



// 1. Destructuring Arrays

/* If we wanted to access these cars individually and assign them to variables 
We can use destructuring to shorten our code and make it more concise:*/
let cars = ['ferrari', 'tesla', 'cadillac'];
let [car1, car2, car3] = cars; 

console.log(car1, car2, car3);  // Prints: ferrari tesla cadillac



// 2. Destructuring Objects 

let destinations = {
    x: "LA", 
    y: "NYC", 
    z: "MIA"
}; 

let {x, y, z} = destinations;
console.log(x, y, z); // Prints LA NYC MIA



// 3. Destructuring Function Parameters 
//  Instead of accepting a complete object as an argument, a function can use destructuring to capture specific properties as named parameters.


let truck = {
    model: '1977 Mustang convertible',
    maker: 'Ford',
    city: 'Detroit',
    year: '1977',
    convertible: true
};

const printCarInfo = ({model, maker, city}) => {
    console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};

printCarInfo(truck);   // Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.



// JAVSCRIPT REFRESHER UDEMY REACT COURSE 


const [name, age] = ["juan", 19]; 
console.log(name); // will print juan

const {año, modelo} = {
    año: 2017, 
    modelo: "Mazda"
};

console.log(año); // will print 2017
