//  JSX -is a syntax extension for JavaScript. It was written to be used with React. 


// 1. JSX ELEMENTS  - A basic unit of JSX is called a JSX element.

<h1>Hello world</h1>
// a JSX element can be saved in a variable, passed to a function, stored in an object or array…
const navBar = <nav>I am a nav bar</nav>



// 2. ATTRIBUTES IN JSX - JSX elements can have attributes, just like how HTML elements can.

const title = <h1 id="title">Into to React</h1>



// 3. NESTED JSX  - You can nest JSX elements inside of other JSX elements
// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses
// Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can!


const note = (
    <a href="#">
        <h1>
            Click me!
        </h1>
    </a>
);


// 4. JSX OUTER ELEMENTS  - a JSX expression must have exactly one outermost element.
// The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

const paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);



// 5. RENDERING JSX  -  React relies on 2 things to render: what content to render and where to place the content.

import React from 'react';
import { createRoot } from 'react-dom/client'; 

const container = document.getElementById('container'); // Uses the getElementById() method to get the Element object with the passed in id (container).
const root = createRoot(container); // use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root. “where to place the content”

root.render(<h1>Hello world</h1>); // uses the render() method of root to render the content passed in as an argument. Here we pass an <h1> element, which displays Hello world. “what content to render”




// 6. PASSING A VARIABLE TO RENDER() - The render() method’s argument doesn’t need to be JSX, but it should evaluate to a JSX expression
// The argument could also be a variable, so long as that variable evaluates to a JSX expression.

const toDoList = (
    <ol>
        <li>Learn React</li>
        <li>Become a Developer</li>
    </ol>
);

const container2 = document.getElementById('app');
const root2 = createRoot(container);
root2.render(toDoList);


// 7. THE VIRTUAL DOM - React root’s render() method only updates DOM elements that have changed.
// That means that if you render the exact same thing twice in a row, the second render will do nothing

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
root.render(hello, document.getElementById('app'));

// This won't do anything at all:
root.render(hello, document.getElementById('app'));