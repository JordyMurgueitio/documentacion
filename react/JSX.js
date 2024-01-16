//  JSX -is a syntax extension for JavaScript. It was written to be used with React. 


// 1. JSX ELEMENTS  - A basic unit of JSX is called a JSX element.

<h1>Hello world</h1>
// a JSX element can be saved in a variable, passed to a function, stored in an object or array…
const navBar = <nav>I am a nav bar</nav>



// 2. Attributes in JSX - JSX elements can have attributes, just like how HTML elements can.

const title = <h1 id="title">Into to React</h1>



// 3. Nested JSX  - You can nest JSX elements inside of other JSX elements
// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses
// Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can!


const note = (
    <a href="#">
        <h1>
            Click me!
        </h1>
    </a>
);

