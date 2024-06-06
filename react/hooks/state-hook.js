// 1. HOOKS  -  functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components
// determine what we want to show the users by declaring how our user interface should look based on the state



// 2. The State Hook 
// The State Hook is a named export from the React library, so we import with object destructuring like the following

import React, { useState } from 'react';

// When we call the useState() function, it returns an array with two values:
/*  The current state: The current value of this state.
    The state setter:  A function that we can use to update the value of this state. */

// To extract the two values from the array, we can assign them to local variables by using array destructuring
const [currentState, setCurrentState] = useState(); 

function Toggle() {
    const [toggle, setToggle] = useState();
    return (
        <div>
            <p>The toggle is {toggle}</p>
            <button onClick={() => setToggle("On")}>On</button>
            <button onClick={() => setToggle("Off")}>Off</button>
        </div>
    );
};



// 3. Initialize State - can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects

function ToggleLoading() {
    const [isLoading, setIsLoading] = useState();
    
        return (
        <div>
            <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
            <button onClick={() => setIsLoading(true)}>
            Turn Loading On
            </button>
            <button onClick={() => setIsLoading(false)}>
            Turn Loading Off
            </button>
        </div>
    );
};

// To initialize our state with any value we want, we simply pass the initial value as an argument to the useState() function call.

const [isLoading, setIsLoading] = useState(true);
// If we don’t pass an initial value when calling useState(), the current value of the state during the first render will be undefined
// If we don’t have the value needed during the first render, we can explicitly pass null instead of passively leaving the value as undefined

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

function ColorPicker() {
    const [color, setColor] = useState('Tomato');
    const divStyle = {backgroundColor: color};

    return (
        <div style={divStyle}>
        <p>Selected color: {color}</p>
        {colorNames.map((colorName)=>(
            <button onClick={() => setColor(colorName)} key={colorName}>
                {colorName}
            </button>
        ))}
        </div>
    );
}


