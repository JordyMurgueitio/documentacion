<!-- REST -->

- REST stands for Representational State Transfer.
- Provides standards between computer systems on the web, making it easier for systems to communicate with each other
- REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server
- Database <-> Web server <-> Restful API <-> Your application

<!-- Separation of Client and Server -->

- In the REST architectural style, the implementation of the client and the implementation of the server can be done independently
- The code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.

<!-- Statelessness -->

- Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa.
- This constraint of statelessness is enforced through the use of resources. Resources describe any object, document

<!-- Making Requests -->

- A request generally consists of:
- 1. an HTTP verb, which defines what kind of operation to perform
- 2. a header, which allows the client to pass along information about the request
- 3. a path to a resource
- 4. an optional message body containing data

- HTTP Verbs
- 1. GET - retrieve a specific resource (by id) or a collection of resources
- 2. POST - create a new resource
- 3. PUT - update a specific resource (by id)
- 4. DELETE - remove a specific resource by id

- Headers and Accept parameters
- In the header of the request, the client sends the type of content that it is able to receive from the server
- 1. text/html
- 2. text/css
- 3. image/png, image/jpeg
- 4. audio/wav, audio/mpeg
- 5. application/json, application/pdf, application/xml

- Paths
- Requests must contain a path to a resource that the operation should be performed on
- A path like <!-- fashionboutique.com/customers/223/orders/12 --> is clear in what it points to

<!-- Sending Responses -->

- Content Types
- When the server is sending a data payload to the client, the server must include a content-type in the header of the response. The content-type that the server sends back in the response should be one of the options that the client specified in the accept field of the request.
  HTTP/1.1 200 (OK)
  Content-Type: text/html

- Response Codes
- Responses from the server contain status codes to alert the client to information about the success of the operation.
- 1. 200 (OK) - standard response for successful HTTP requests.
- 2. 201 (CREATED) - HTTP request that successfully created a new item.
- 3. 400 (BAD REQUEST) - The request failed because of bad request syntax, excessive size, or another client error.
- 4. 403 (FORBIDDEN) - The client does not have permission to access this resource.
- 5. 404 (NOT FOUND) - The resource could not be found at this time
- 6. 500 (INTERNAL SERVER ERROR) - Unexpected failure if there is no more specific information available.
