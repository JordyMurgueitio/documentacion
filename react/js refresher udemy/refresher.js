// 1. DESTRUCTURING 

// saves the values of the array in variables that can be used later
const [name, age] = ["juan", 19]; 
console.log(name); // will print juan

// // saves the values of the object in variables that can be used later
const {año, modelo} = {
    año: 2017, 
    modelo: "Mazda"
};

console.log(año); // will print 2017




// 2. SPREAD OPERATOR  - pulls out values of an array and adds them as comma separated values in a new array

const hobbies = ["sports", "movies"]; 
const newHobbies = ["sleeping", "coding"]; 

const allHobbies = [...hobbies, ...newHobbies];
console.log(allHobbies); // will print ["sports", "movies", "sleeping", "coding"] 


// can also be used in objects, will pull out the key value pairs from the object A and add them as key value pairs in object B

const user = {
    name: "juani", 
    age: 19
}; 
const extenderUser = {
    isAdmin: true, 
    ...user
};

console.log(extenderUser); // will print {isAdmin: true, name: "juani", age: 19}




// 3. Reference vs primitive values   

// For objects and arrays, the memory address is stored in the variabel 
// The object/array can be edited without changing that address 
// The value can be edited without reassigning the variable 

const metodos = ["sports", "cooking"]; 
metodos.push("sleeping"); 













