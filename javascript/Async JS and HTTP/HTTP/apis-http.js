// HTTP
// HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. 
// TCP manages the channels between your browser and the server and HTTP manages the requests and responses that are sent over those channels.


/* When you type an address such as www.codecademy.com into your browser, 
you are commanding it to open a TCP channel to the server that responds to that URL */
/* 
In this situation, your computer, which is making the request, is called the client. 
The URL you are requesting is the address that belongs to the server. 
Once the TCP connection is established, the client sends a HTTP GET request to the server to retrieve the webpage it should display. 
After the server has sent the response, it closes the TCP connection. 
*/
// The GET request contains the following text:
GET / HTTP/1.1
Host: www.codecademy.com
// If the server is able to locate the path requested, the server might respond with the header:
/* HTTP/1.1 200 OK
Content-Type: text/html */

// HTTPS
// HTTPS stands for Hypertext Transfer Protocol Secure.
// It is a secure version of HTTP that uses SSL (Secure Sockets Layer) or TLS (Transport Layer Security) to encrypt the data sent between the client and server.
// This ensures that the data cannot be intercepted or tampered with by third parties.
// HTTPS is used for secure transactions, such as online banking, shopping, and any other sensitive data exchange.





// WEB APIs
// (API) is a software tool that makes it easier to interact with another application to use some of that application’s functionality.

// Types of APIs
// 1. Web APIs: These are APIs that are accessed over the internet using HTTP requests. They are typically used to interact with web services and retrieve data from remote servers.
// 2. Third-party APIs: These are APIs that are provided by third-party services, such as social media platforms, payment gateways, and cloud storage providers. They allow developers to integrate their applications with these services and access their functionality.

// Making API Requests
// Each API has a specific structure and protocol that we have to follow in order to gain access to its functionality.
// Some specifications relate to making a request for data. These specifications could include more parameters for specific information or the inclusion of an API key. 

// Response Data
// After we make a successful API request, the API sends back data. 
// Many APIs format their data using JavaScript Object Notation (JSON) 
/* 
{ 
    "temperature" : { 
        "celcius" : 25,
    },
    "city": "chicago", 
} 
*/




// JSON 
// JSON stands for JavaScript Object Notation.
// Standard format for storing and exchanging data. 
let JSON = 
{
    "student": {
        "name": "Rumaisa Mahoney",
        "age": 30,
        "fullTime": true,
        "languages": [ "JavaScript", "HTML", "CSS" ],
        "GPA": 3.9,
        "favoriteSubject": null
    }
}

/* JSON Data Types
1. String: A sequence of characters enclosed in double quotes.
2. Number: A numeric value, which can be an integer or a floating-point number.
3. Boolean: A true or false value.
4. Array: An ordered list of values enclosed in square brackets.
5. Object: A collection of key-value pairs enclosed in curly braces.
6. Null: A special value that represents the absence of a value or an empty value.
7. Undefined: A special value that represents a variable that has been declared but has not been assigned a value. */
// Types that are not represented in JSON such as dates can be stored as a string and converted to a language-specific data structure
