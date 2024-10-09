// COMPONENTS INTERACTING 


// 1. RETURNING ANOTHER COMPONENT  - components can interact with each other by passing information or even returning other components
function PurchaseButton() {
    return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

function ItemBox() {   // ItemBox returns an instance of PurchaseButton
    return (
    <div>
        <h1>50% Sale</h1>
        <h2>Item: Small Shirt</h2>
        <PurchaseButton />
    </div>
    );
}


// 2. PROPS - Information that gets passed from one component to another
// Access a Component's props - Every component has something called props.
// A component’s props is an object. It holds information about that component
// To access a component’s props object, you can reference the props object and the dot notation for its properties

props.name



// 3. Pass props to a Component  - we pass props by giving the component an attribute:

// <SloganDisplay message="We're great!" />

// If you want to pass information that isn’t a string, then wrap that information in curly braces. 
// values that aren’t strings are wrapped in curly braces:
//<Greeting myInfo={["Astronaut", "Narek", "43"]} />

// <Mensaje name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />




// 4. Render a Component's props  - Props allow us to customize the component by passing it information.
// To make sure that a function component can use the props object, define your function component with props as the parameter:

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.rating}</h3>
        </div>
    )
}

function App() {   // In this example, App is the parent and Product is the child
    return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}



// 5. Pass props from Component to Component  - The most common use of props is to pass information to a component from a different component
// Props in React travel in a one-way direction, from the top to bottom, parent to child.
// Props passed down are immutable, meaning they cannot be changed.

function Player(props) {
    return (
        <>
            <h1>{props.songName}</h1>
            <h2>{props.artist}</h2>
        </>
    );
}

function App2 () {
    return <Player songName='deep' artist='tiesto' />   // App2 is the parent of Player and passes the props to the child
}


// 6. Render different UI based on props - You can also use props to make decisions.
// we use the props passed in to make a decision rather than rendering the value to the screen.

function LoginMsg(props) {
    if (props.password === "complicated-password") {
        return <h2>Sign in Successful</h2>; 
    } else {
        return <h2>Sign in failed</h2>
    }
}


function Greeting(props) {
    if (props.signedIn == false) {
        return <h1>Please login.</h1>;
    } else {
        return (
        <>
            <h1>Welcome back, {props.name}!</h1>
            <article>
                Latest Movie: A Computer Bug's Life
            </article>
        </>
        )
    }
}
function App() {
    return (
        <div>
            <h1>
            MovieFlix
            </h1>
            <Greeting name="Alison" signedIn={true} />
        </div>
    );
}




// 7. Event Handler in a function Component - pass functions as props. It is especially common to pass event handler functions
// we have to define an event handler before we can pass one
// We define an event handler as a method on the function component!

function Example() {
    function handleEvent() {
        alert(`I am an event handler.
        If you see this message,
        then I have been called.`);
    }
    return (
        <h1 onClick={handleEvent}>
            Hello world
        </h1>
    );
}


function Talker() {
    function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
        speech += 'blah ';
        }
        alert(speech);
    }
    return <Button talk={talk} />;
}

// Receive an event handler as a prop 

function Button(props) {
    return (
        <button onClick={props.talk}>
            Click me!
        </button>
    );
}





// 8. NAME CONVENTIONS
    // 8.1 The first name that you have to choose is the name of the event handler itself
        // If you are listening for a “click” event, then you name your event handler handleClick. 
        //If you are listening for a “hover” event, then you name your event handler handleHover

    // 8.2 The second name that you have to choose is the name of the prop that you will use to pass the event handler. 
        // Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick

function myClass(){
    function handleHover() {
        alert('I am an event handler.');
        alert('I will listen for a "hover" event.');
        }
    return <Child onHover={handleHover} />;
}



// 9. props.children -Every component’s props object has a property named children
// props.children will return everything in between a component’s opening and closing JSX tags


// 10. Giving Default values to props 
// The first method is adding a defaultProps static property to the component:

function Example(props) {
    return <h1>{props.text}</h1>
}
Example.defaultProps = {
    text: 'This is default text',
};

// You can also specify the default value directly in the function definition:
function Example({text='This is default text'}) {
    return <h1>{text}</h1>
}

// you can also set the default value in the function body
function Example(props) {
    const {text = 'This is default text'} = props;
    return <h1>{text}</h1>
}
