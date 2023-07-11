// CLASSES


// 1. Introduction to classes - Classes are a tool that developers use to quickly produce similar objects.
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



// 2. Constructor - JavaScript calls the constructor() method every time it creates a new instance of a class

class Surgeon {
    constructor (name, department) {
        this.name= name;
        this.department= department;
    }
};



// 3. Instance - An instance is an object that contains the property names and methods of a class, but with unique property values.
class OtherDog {
    constructor (name, color) {
        this.name = name; 
        this.color = color;
    }
}
//  we use the new keyword to create an instance of our OtherDog class.
const max = new OtherDog("max", "white");
const firulais = new OtherDog("firulais", "black");
//  we use the new keyword to create an instance of our Surgeon class from example 2.
const surgeonRomero = new Surgeon("Fran Romero", "Medico general");



// 4. Methods - Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

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
// we add getter methods for name and age. 
// We also prepended our property names with underscores (_name and _age), which indicate these properties should not be accessed directly. 
// Added a birthday method, we called on a Person instance, it adds the age of that instance by 1.
// Between each of our methods, we did not include commas as we would with an object

// 4.1. Method Call
const erika = new Person("erika", 20);

console.log(erika.age)  // to call a getter, we don't use parentheses
console.log(erika);
erika.birthday();  //  For methods, you must also include opening and closing parentheses.
console.log(erika);




// 5. Inheritance I - When multiple classes share properties or methods, they become candidates for inheritance
// You can create a parent class (superclass) with properties and methods that multiple child classes (subclasses) share.
// The child classes inherit the properties and methods from their parent class

class HospitalEmployee {  // PARENT CLASS
    constructor (name) {
        this._name = name;
        this._remainingVacationDays = 20;
    };
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

// Inheritance II  - Now that we have these shared properties and methods in the parent HospitalEmployee class, we can extend them to the subclass Nurse
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
const nurseOlynyk = new Nurse("Olynyk", ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk); 


// Inheritance III - When we call extends in a class declaration, all of the parent methods are available to the child class.
// As a result, the Nurse class has access to the HospitalEmployee getters and the .takeVacationDays() method.

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);  // logs 15

// Inheritance IV - In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

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





// EXTRA: SOY HENRY PROTOTIPOS 

// Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.
// El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia.

// Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo. 
// Gracias a estos prototipos podremos acceder al constructor de cualquier objeto para modificarlo

Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
        if (this[ i ] > 3) {
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[ i ]);
        }
    }
    return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);


class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};

LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);