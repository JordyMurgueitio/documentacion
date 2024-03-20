import { animals } from './animals';
import React from "react"; 
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

function displayFact(e) {
    const animal = e.target.alt; 
    const index = Math.floor(Math.random() * animals[animal].facts.length);
    const funFact = animals[animal].facts[index];
    document.getElementById("fact").innerHTML = funFact;
};

const title = "";

const background = (
    <img 
    className = "background"
    alt = "ocean"
    src = '/images/ocean.jpg'
    />
);

const images = [];
for (const animal in animals) {
    images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" onClick={displayFact} />)
}

const animalFacts = (
    <div> 
        <h1>
            {
            title === "" ? "Click an animal for a fun fact" 
            : title
            }
        </h1>
        {background}
        <p id="fact"></p>
        <div className="animals">{images}</div>
    </div>
);

root.render(animalFacts);
