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


// ES6 Import Syntax 