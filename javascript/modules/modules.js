// MODULES 

//  Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
// A modular program is one whose components can be separated, used individually, and recombined to create a complex system.


// 1. ES6 Export Syntax  - 
// the functions you wish to reuse can be exported using the named export syntax below:
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




// 2. ES6 Import Syntax - 
// The ES6 syntax for importing named resources from modules is similar to the export syntax:
// import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
import { toggleHiddenElement, changeToFunkyColor } from './dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
});

// When we use modules, we have to include type="module" to the script tag in the html document. 
// <script type="module" src="./secret-messages.js"> </script>
// In the html file, the only thing that changes is the addition of the attribute type='module' to the <script> element.
<body>
<button id="secret-button"> Press me... if you dare </button>
<p id="secret-p" style="display: none"> Modules are fancy! </p>
<script type="module" src="./secret-messages.js"> </script>
</body>




// 3. Renaming imports to Avoid Naming Collisions
// resources you wish to import share a name with some other value that already exists in your program (or from another imported module).
// ES6 includes syntax for renaming imported resources by adding in the keyword as. 
import { exportedResource as newlyNamedResource } from '/path/to/module'
import {greet as greetEspanol} from 'greeterEspanol.js';
import {greet as greetFrench} from 'greeterFrench.js';
// Now, both of the imported functions can be called within main.js using their new identifiers, greetEspanol() and greetFrench().




// 4. Default Exports and Imports 
// Every module also has the option to export a single value to represent the entire module called the default export
// Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.
const resources = { 
    valueA, 
    valueB 
}
export { resources as default }; // the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value
// You may also see this shorthand syntax
/* const otherResources = {
    valueA,
    valueB
}
export default otherResources;    */




// 5. Importing default values 
// The syntax for importing default exports looks like this:
import { default as importedResources } from 'module.js';
// import importedResources from 'module.js'; Shorthand 
//  if the default export is an object, the values inside cannot be extracted until after the object is imported, like so
import resources from 'module.js'
const { valueA, valueB } = resources;




// EXAMPLE 
/*  -- dom-functions.js 
const toggleElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none';
    }
};
const changeFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};
const functions = { 
    toggleElement, 
    changeFunkyColor
};
export default functions;  // The functions are exported as a default export, which means they can be imported without using curly braces.


// This default exports object can now be used within another file like so:
import domFunctions from '../modules/dom-functions.js';
const { toggleElement, changeFunkyColor } = domFunctions;

const button = document.getElementById('secret-button');
const paragraph = document.getElementById('secret-p');
button.addEventListener('click', () => {
    toggleElement(paragraph);
    changeFunkyColor(button);
});
*/ 