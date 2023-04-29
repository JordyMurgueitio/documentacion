// JAVASCRIPT AND THE DOM 



// 1. The document object / keyword
// Before you can access a specific element in the page, you must access the document structure itself. 

document.body;


// 2. .innerHTML property -  allows you to access and set the contents of an element.
// reassign the contents of the <body> element to the text 'The cat loves the dog':
document.body.innerHTML = "The cat loves the dog"; 
// .innerHTML property can also add any valid HTML elements.
document.body.innerHTML = "<h1>This is a heading</h1>";


// 3. Select and modify elements - 
// we can also use CSS selectors to access DOM elements with JavaScript! Selectors can include a tag name, a class, or an ID.

    // 3.1  .querySelector() - specify a CSS selector as a string and returns the first element that matches that selector
    // The following code would return the first paragraph in the document
    document.querySelector("p");

    // 3.2  .getElementById() - access an element directly by its id 
    // select the element with an ID of 'bio' and set its .innerHTML to the text 'The description'
    document.getElementById("bio").innerHTML = "The description";

    // 3.3  .getElementsByClassName() - returns an array of elements that match the given class
    // Set first element of .student class as 'Not yet registered'
    document.getElementsByClassName("student")[0].innerHTML = "not yet registered";

    // 3.4   .getElementsByTagName() - returns an array of elements that match the given tag
    // Set second <li> tag as "messi"
    document.getElementsByTagName("li")[1].innerHTML = "messi";




// 4. Style an element - .style property of a DOM element provides access to the inline style of that HTML tag
// .style property does not implement a hyphen such as background-color, but rather camel case notation, backgroundColor. 

//  selects the first element with a class of blue and assigns blue as the background-color
let blueElement = document.querySelector(".blue"); 
blueElement.style.backgroundColor = "blue";

// change the font family of the element with the heading class to 'Roboto'

document.querySelector(".heading").style.fontFamily = "Roboto";



// 5. Traversing the DOM
