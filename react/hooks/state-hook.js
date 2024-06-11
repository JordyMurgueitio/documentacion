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



// 4. Use State Setter outside of JSX 
// example of managing the changing value of a string as a user types into a text input field
// our event handler is defined inside of the definition for our function component, but outside of our JSX
import React, { useState } from 'react';

export default function EmailTextInput() {
    const [email, setEmail] = useState('');
    const handleChange = (event) => {
        const updatedEmail = event.target.value;
        setEmail(updatedEmail);
    }
    return (
        <input value={email} onChange={handleChange} />
    );
}

// It’s common in React code to simplify like this:
const handleChange1 = (event) => setEmail(event.target.value);

// or, using object destructuring, this

const handleChange2 = ({target}) => setEmail(target.value);



// 5. Set from previous state - React state updates are asynchronous, scenarios where portions of your code will run before the state is finished updating
// it is best practice to update a state with a callback function, preventing accidental outdated values

import React, { useState } from 'react';
    
    export default function Counter() {
    const [count, setCount] = useState(0);
    // Because the next value of count depends on the previous value of count, we pass a callback function as the argument for setCount()
    const increment = () => setCount(prevCount => prevCount + 1);  
    
    return (
        <div>
        <p>Wow, you've clicked that button: {count} times</p>
        <button onClick={increment}>Click here!</button>
        </div>
    );
}

// Nav bar that allows users to go back and next
export default function QuizNavBar({ questions }) {
    const [questionIndex, setQuestionIndex] = useState(0);
    
        // define event handlers 
        const goBack = () => {
        setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1)
        }
        const goToNext = () => {
        setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)
        }
        // determine if on the first question or not 
        const onFirstQuestion = questionIndex === 0; 
        const onLastQuestion = questionIndex === questions.length - 1;
    
        return (
        <nav>
            <span>Question #{questionIndex + 1}</span>
            <div>
            <button onClick={goBack} disabled={onFirstQuestion}>
                Go Back
            </button>
            <button disabled={onLastQuestion} onClick={goToNext}>
                Next Question
            </button>
            </div>
        </nav>
    );
}






// 6. Arrays in State - JavaScript arrays are the best data model for managing and rendering JSX lists

import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
    const [selected, setSelected] = useState([]);

    const toggleTopping = ({target}) => {
        const clickedTopping = target.value;
        setSelected((prev) => {
        // check if clicked topping is already selected
        if (prev.includes(clickedTopping)) {
            // filter the clicked topping out of state
            return prev.filter(t => t !== clickedTopping);
        } else {
            // add the clicked topping to our state
            return [clickedTopping, ...prev];
        }
        });
    };

    return (
        <div>
        {options.map(option => (
            <button value={option} onClick={toggleTopping} key={option}>
            {selected.includes(option) ? 'Remove ' : 'Add '}
            {option}
            </button>
        ))}
        <p>Order a {selected.join(', ')} pizza</p>
        </div>
    );
}





