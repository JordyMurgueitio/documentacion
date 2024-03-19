// ADVANCED JSX 


// 1. class vs className 
// In HTML, it’s common to use class as an attribute name: 

<h1 class="likeThis"></h1>; 

// In JSX, you have to use className instead:
<h1 className="big">Hola</h1>;



// 2. Self-closing Tags 
// In HTML, you have the option to include a slash when using a self closing tag. 
// In JSX, you have to include the slash otherwise you will raise an error:

<br />; 



// 3. Javascript inside a JSX expression 
// Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript!
// By wrapping your code in curly braces, you treat it like ordinary JavaScript and not like JSX

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<h1>{2 + 3}</h1>); // this will render 5, if we didn't include {}, it would render 2 + 3



// 4. Variables in JSX 
// When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file
//  you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block

const name = "Mario";
const greeting = <p>Hello, {name}!</p>;
root.render(greeting); // will render Hello, Mario!




// 5. Variable Attributes in JSX 
// In JSX, it's common to use variables to set attributes 

const sideLength = "200px";
const panda = (
    <img 
        src="images/panda.jpg" 
        alt="panda" 
        height={sideLength} 
        width={sideLength} 
    />
);

// Object properties are also often used to set attributes:
const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3"
}; 
const pandaPic = (
    <img 
        src={pics.panda} 
        alt="Lazy Panda" />
);
const owlPic = (
    <img 
        src={pics.owl} 
        alt="Unimpressed Owl" />
);



// 6. Event Listeners in JSX  - JSX elements can have event listeners, just like html elements can
// in HTML, event listener names are written in all lowercase, onclick. In JSX, event listener names are written in camelCase, onClick

function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
}

const kitty = (
    <img 
        src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
        alt="kitty"
        onClick={makeDoggy} />
);




// 7. JSX Conditionals - you can not inject an if statement into a JSX expression.
/* (    THIS DOESN'T WORK 
    <h1>
    {
        if (purchase.complete) {
            'Thank you for placing an order!'
        }
    }
    </h1>
) */

// One option is to write an if statement and not inject it into JSX.
let message;
if (user.age >= drinkingAge) {
    message = (
    <h1>
        Hey, check out this alcoholic beverage!
    </h1>
    );
    } else {
    message = (
    <h1>
        Hey, check out these earrings I got at Claire's!
    </h1>
    );
}
root.render(message);

// 8. JSX Conditionals. The ternary operator. - x ? y : z
// If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z

const headline = (
    <h1>
    {
        age >= drinkingAge ? "Buy alcohol" 
        : "Buy water"
    }
    </h1>
)



// 9. JSX Conditionals -- &&
// && works best for conditionals that will sometimes do an action but other times do nothing at all
// If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered. 
// If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered
const tasty = (
    <ul>
        <li>Applesauce</li>
        { !baby && <li>Pizza</li> }
        { age > 15 && <li>Brussels Sprouts</li> }
        { age > 20 && <li>Oysters</li> }
        { age > 25 && <li>Grappa</li> }
    </ul>
);



// 10. .map in JSX - If you want to create a list of JSX elements, then using .map() is often the most efficient way.

const people = ['Rowe', 'Prevost', 'Gare'];
const peopleList = people.map(person =>
    // expression goes here:
    <li>{person}</li>);

root.render(<ul>{peopleList}</ul>);












