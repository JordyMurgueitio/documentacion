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