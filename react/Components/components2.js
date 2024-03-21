// 1. Multiline JSX in a Component 
// The key thing to notice is the parentheses in the return statement
import React from 'react';

function QuoteMaker() {
    return (
        <blockquote>
            <p>
            The world is full of objects, more or less interesting; I do not wish to add any more.
            </p>
            <cite>
            <a target="_blank"
                href="https://en.wikipedia.org/wiki/Douglas_Huebler">
                Douglas Huebler
            </a>
            </cite>
        </blockquote>
    );
};
// export default QuoteMaker;



// 2. Use a Variable Attribute in a Component - 
// You can, and often will, inject JavaScript into JSX inside the return statement

import React from 'react';

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width:  '200px'
};

function RedPanda(){
    return (
        <div>
            <h1>Cute Red Panda</h1>
            <img 
            src={redPanda.src}  // Note all the curly brace JavaScript injections inside the return statement. 
            alt={redPanda.alt}
            width={redPanda.width} />
        </div>
        );
}

// export default RedPanda;



// 3. Putting Logic in a Function Component 
// You can also put simple calculations that need to happen before returning your JSX element

function RandomNumber() {
    //First, some logic that must happen before returning
    const n = Math.floor(Math.random() * 10 + 1);
    //Next, a return statement using that logic: 
    return <h1>{n}</h1>
}



// 4. Use a conditional in a Function component 
// the if statement is located inside of the function component, but before the return statement

import React from 'react';

function TodaysPlan() {
    let task;
    let apocalypse = false;
    if (!apocalypse) {
        task = 'learn React.js'
    } else {
        task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
}
// export default TodaysPlan;

const fiftyFifty = Math.random() < 0.5;

function TonightsPlan(){
    if (fiftyFifty === true) {
        return <h1>Tonight I'm going out WOOO</h1>;
    } else {
        return <h1>Tonight I'm going to bed WOOO</h1>;
    }
}
// export default TonightsPlan;




// 5. Event listener and Event Handlers in a Component 
// Your function components can include event handlers
// Event handler functions are defined inside the function component
// by convention, start with the word “handle” followed by the type of event it is handling.
function MyComponent(){
    function handleHover() {
        alert('Stop it.  Stop hovering.');
    }
    return <div onHover={handleHover}></div>;
}

function SubmitButton() {
    function handleClick() {
        alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
}