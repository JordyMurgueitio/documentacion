// COMPONENTS 
// code that is responsible for one job, which often involves rendering HTML and re-rendering it whenever some data changes


// 1. Import React 

// This creates an object named React, which contains methods necessary to use the React library. 
// This object contains properties that are needed to make React work, such as React.createElement()

import React from "react";


// 2. Import ReactDom 
// creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.createRoot()
import ReactDOM from "react-dom/client";


// 3. Function component  - we can use JavaScript functions to define a new React component
// After we define our functional component, we can use it to create as many instances of that component as we want.

import React from 'react';

function MyComponent() {  // Function component names must start with capitalization and are conventionally created with PascalCase
    // capitalization indicates that it is a React component rather than an HTML tag
    return <h1>Hello, I'm a functional React Component!</h1>;
}


// 4. Importing and exporting React Components 
// We can keep our component pieces separated, organized, and reusable by putting them into separate files and exporting them to where we need them
export default MyComponent;
import MyComponent from './App';



// 5. Using and rendering a component - Now that we have a defined function component, we can start using it
// We can use it with an HTML-like syntax that resembles a self-closing tag:
<MyComponent />

// If you need to nest other components in between, you may also use an opening and corresponding closing tag structure
/*  
<MyComponent>
    <OtherComponent />
</MyComponent>  */

// First, we call the createRoot method to create a React root container for displaying content
ReactDOM.createRoot(document.getElementById('app'));
/*  1. document.getElementById('app') returns a DOM element from index.html.
    2. .createRoot() receives the DOM element as the first argument and creates a root for it.
    3. .createRoot() returns a reference to the root container on which you can call methods like .render(). */

// After the root is created, all that’s left to do is call the .render() method on the returned root and display the React component
ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />); // React will display <MyComponent /> in the root and make it appear on the screen

