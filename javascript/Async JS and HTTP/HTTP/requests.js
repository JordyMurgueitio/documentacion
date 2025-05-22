// Requests with ES6

// With a GET request, we’re retrieving, or getting, information from some source (usually a website). 
// For a POST request, we’re posting information to a source that will process the information and send it back.



// GET requests using Fetch
/* The fetch() function:
1. Creates a request object that contains relevant information that an API needs.
2. Sends that request object to the API endpoint provided.
3. Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back. */
fetch('https://api-to-call.com/endpoint')
    .then((response) => {
        if (response.ok) {
            return response.json(); // Parse the JSON data from the response
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then((data) => {
        console.log(data); // Handle the data received from the API
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });


// Making a GET request and handling the response
// We set up the GET request by providing the endpoint and the object containing all the necessary information
// We handle the response by checking if the request was successful and then parsing the JSON data
// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
// Asynchronous function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${wordQuery}`;
    fetch(endpoint)
    .then( response => {
        if (response.ok) {
            return response.json();
        };
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    })
    .then(jsonResponse => {
    renderRawResponse(jsonResponse);
    })
};
/* we called the fetch() function to make a GET request to the Datamuse API endpoint. Then, you chained a 
.then() method and passed two callback functions as arguments — one to handle the promise if it resolves, 
and one to handle network errors if the promise is rejected. */
/* After we chain another .then() method, 
which will allow us to take the information that was returned with the promise and manipulate the webpage! */





// POST requests using Fetch
// fetch() takes two arguments: an endpoint and an object that contains information needed for the POST request.
fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})
.then((response) => {
    if (response.ok) {
        return response.json(); // converts the response to JSON
    } 
    throw new Error('Network response was not ok');  // Handle HTTP errors
    }, networkError => {  // Handle network errors
        console.log(networkError.message); 
    })
.then(jsonResponse => {
        console.log(jsonResponse); // Handle success. We can use the response however we want.
    });


// Making a POST request and handling the response
// We set up the POST request by providing the endpoint and the object containing all the necessary information
// We handle the response by checking if the request was successful and then parsing the JSON data
// Information to reach API
const apiKey = '<Your API Key>';
const url2 = 'https://api.rebrandly.com/v1/links';
// Some page elements
const inputField2 = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField2 = document.querySelector('#responseField');
// Asynchronous functions
const shortenUrl = () => {
    const urlToShorten = inputField2.value;
    const data = JSON.stringify({destination: urlToShorten});
	fetch(url, {       // we set up the post request
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'apikey': apiKey },
    body: data})
    .then(response => {    // the first .then() method handles the promise. The 1st argument is a function that handles the promise if it resolves, and the second argument handles network errors if the promise is rejected.
        if(response.ok) {
        return response.json(); 
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    })
    .then(jsonResponse => {     // the second .then() method handles the response. It takes the JSON data returned from the API and passes it to the renderResponse function.
        renderResponse(jsonResponse);
    })
}





// async GET requests
/* The structure for this request will be slightly different. 
We will use the new keywords async and await, as well as the try and catch statements. */
const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint');  // sends the request
        if (response.ok) {     // handles the promise if successful
            const jsonResponse = await response.json();
            // code to execute with jsonResponse
        }
        throw new Error('Network response was not ok');       // handles HTTP errors
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error); // handles unexpected errors
    }
};


// Making an async GET request and handling the response
// Information to reach API
const url3 = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';
// Selecting page elements
const inputField3 = document.querySelector('#input');
const submit3 = document.querySelector('#submit');
const responseField3 = document.querySelector('#responseField');
// Asynchronous function
const getSuggestions2 = async() => {
    const wordQuery = inputField3.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try {   // we set up the GET request
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if (response.ok) {
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
        }
    } catch (error) {  // handles errors
        console.log(error);
    }
};




// async POST requests
// We still have the same structure of using try and catch as the async GET request
// but we now have to include the method and body properties in the request object.
const postExample = async () => {
    const url = 'https://api-to-call.com/endpoint';
    const data = JSON.stringify({key1: 'value1', key2: 'value2'});
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            // code to execute with jsonResponse
            renderResponse(jsonResponse);
        };
        throw new Error('Request failed');  // handles HTTP errors
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};




