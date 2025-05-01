// CLASSES


// 1. Introduction to classes - 
// Classes are a tool that developers use to quickly produce similar objects.
//  By convention, we capitalize and PascalCase class names ejm: class NewPerson
class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }
    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }   
    incrementBehavior() {
        this._behavior ++;
    }
} 
const tobi = new Dog("tobi");
console.log(tobi);


// 2. Constructor - 
// JavaScript calls the constructor() method every time it creates a new instance of a class
// Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class
class Surgeon {
    constructor (name, department) {
        this.name= name;
        this.department= department;
    }
};
const surgeonRomero = new Surgeon("Fran Romero", "Medico general");



// 3. Instance - 
// Object that contains the property names and methods of a class, but with unique property values.
// We use the new keyword to create an instance of our class.
class OtherDog {
    constructor (name, color) {
        this.name = name; 
        this.color = color;
    }
};
const max = new OtherDog("max", "white");
const firulais = new OtherDog("firulais", "black");




// 4. Methods - 
// Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
// Between each of our methods, we did not include commas as we would with an object
class Person {
    constructor (name, age) {
        this._name = name; 
        this._age = age;
    }
    get name () {
        return this._name;
    }
    get age () {
        return this._age;
    }
    birthday () {
        this._age ++ ;
    }
}
const erika = new Person("erika", 20);
console.log(erika.age)  // to call a getter, we don't use parentheses
erika.birthday();  //  For methods, you must also include opening and closing parentheses.
console.log(erika.age);  // logs 21




// 5. Inheritance I - 
// When multiple classes share properties or methods, they become candidates for inheritance
// You can create a parent class (superclass) with properties and methods that multiple child classes (subclasses) share.
// The child classes inherit the properties and methods from their parent class
class HospitalEmployee {  // PARENT CLASS
    constructor (name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name () {
        return this._name;   
    }
    get remainingVacationDays (){
        return this._remainingVacationDays;
    }
    takeVacationDays (daysOff) {
        this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
};

// Inheritance II  - 
// Now that we have these shared properties and methods in the parent HospitalEmployee class, we can extend them to the subclass Nurse
// The extends keyword makes the methods of the HospitalEmployee class available inside the Nurse class
class Nurse extends HospitalEmployee {       
    constructor (name, certifications) {
        // the super keyword calls the constructor of the parent class. super(name) passes the name argument of the Nurse class to the constructor of the HospitalEmployee class.
        //  must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error.
        super(name);   
        this._certifications = certifications;
    };
}; 
// We create a new instance of the Nurse class. 
const nurseMaria= new Nurse("Maria", ['Trauma', 'Pediatrics']);
console.log(nurseMaria);  // logs Nurse { _name: 'Maria', _remainingVacationDays: 20, _certifications: [ 'Trauma', 'Pediatrics' ] }


// Inheritance III - 
// When we call extends in a class declaration, all of the parent methods are available to the child class.
// As a result, the Nurse class has access to the HospitalEmployee getters and the .takeVacationDays() method.
nurseMaria.takeVacationDays(5);
console.log(nurseMaria.remainingVacationDays);  // logs 15


// Inheritance IV - 
// In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.
class Doctor extends HospitalEmployee {
    constructor (name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications () {
        return this._certifications;
    }
    addCertification (newCertification) {
        this._certifications.push(newCertification);
    }
}; 
const doctorJuan = new Doctor ("Juan", ["ingles", "html"]);
console.log(doctorJuan)
doctorJuan.addCertification("genetics");
console.log(doctorJuan.certifications); // logs [ 'ingles', 'html', 'genetics' ]




// 6. Static Methods- 
// a class to have methods that aren’t available in individual instances, but that you can call directly from the class.
class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }
    
    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random()*5);
        return names[randomNumber];
    }
} 
// we can only access .generateName() by appending it to the Animal class.
console.log(Animal.generateName());




// REVIEW
/* Classes are templates for objects.
JavaScript calls a constructor method when we create a new instance of a class.
Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
We use the extends keyword to create a subclass.
The super keyword calls the constructor() of a parent class.
Static methods are called on the class, but not on instances of the class. */



class Media {
    constructor (title) {
        this._title = title; 
        this._isCheckedOut = false; 
        this._ratings = [];
    }
    set isCheckedOut (newValue) {
        this._isCheckedOut = newValue;
    }
    get title () {
        return this._title;
    }
    get isCheckedOut () {
        return this._isCheckedOut;
    }
    get ratings () {
        return this._ratings;
    }
    getAverageRating() {
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        return ratingsSum / lengthOfArray;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating (value) {
        this._ratings.push(value);
    }
};

class Book extends Media {
    constructor (author, title, pages) {
        super(title); 
        this._author = author; 
        this._pages = pages;
    }
    get author () {
        return this._author; 
    }
    get pages () {
        return this._pages;
    }
};

class Movie extends Media {
    constructor (director, title, runTime) {
        super(title); 
        this._director = director; 
        this._runTime = runTime;
    }
    get director () {
        return this._director; 
    }
    get runTime () {
        return this._runTime;
    }
};

const historyOfEverything = new Book("Bill Bryson", 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
console.log(speed.getAverageRating());
