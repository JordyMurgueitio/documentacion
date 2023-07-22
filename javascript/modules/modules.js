// MODULES 

//  Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
// A modular program is one whose components can be separated, used individually, and recombined to create a complex system.


// 1. ES6 Export Syntax  - the functions you wish to reuse can be exported using the named export syntax below:
// export { resourceToExportA, resourceToExportB, ...}

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style.display = 'block';   
    } else {
        domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor }; // The two functions are exported using the ES6 export statement.

// In addition to the syntax above, individual values may be exported as named exports by placing the export keyword in front of the variable’s declaration.

export const changeColor = () => {
    document.body.style.backgroundColor = "blue";
};




// 2. ES6 Import Syntax - The ES6 syntax for importing named resources from modules is similar to the export syntax:

// import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
});

// When we use modules, we have to include type="module" to the script tag in the html document. 
// <script type="module" src="./secret-messages.js"> </script>




// 3. Renaming imports to Avoid Naming Collisions
// resources you wish to import share a name with some other value that already exists in your program (or from another imported module).
// ES6 includes syntax for renaming imported resources by adding in the keyword as. 

import {greet as greetEspanol} from 'greeterEspanol.js';
import {greet as greetFrench} from 'greeterFrench.js';
// Now, both of the imported functions can be called within main.js using their new identifiers, greetEspanol() and greetFrench().




// 4. Default Exports and Imports 
// Every module also has the option to export a single value to represent the entire module called the default export

const resources = { 
    valueA, 
    valueB 
}
export { resources as default }; // the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value

// You may also see this shorthand syntax
/* const resources = {
    valueA,
    valueB
}}
export default resources;   */



// 5. Importing default values 
// The syntax for importing default exports looks like this:

import { default as importedResources } from 'module.js';
// import importedResources from 'module.js'; Or the shorthand 

//  if the default export is an object, the values inside cannot be extracted until after the object is imported, like so
import resources from 'module.js'
const { valueA, valueB } = resources;

/* import domFunctions from '../modules/dom-functions.js';
const { toggleHiddenElement, changeToFunkyColor } = domFunctions; */


