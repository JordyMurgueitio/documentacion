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

<SloganDisplay message="We're great!" />

// If you want to pass information that isn’t a string, then wrap that information in curly braces. 
// values that aren’t strings are wrapped in curly braces:
//<Greeting myInfo={["Astronaut", "Narek", "43"]} />
<Mensaje name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />

function App() {
    return <PropsDisplayer myProp="Hello" />;
}



// 4. Render a Component's props  - Props allow us to customize the component by passing it information.
// To make sure that a function component can use the props object, define your function component with props as the parameter:

function Product(props) {
    return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <h3>{props.rating}</h3>
    </div>       
    );
}

function App() {
    return <Product name="Iphone 15" price = {399} rating = "4.5/5.0" />;
}