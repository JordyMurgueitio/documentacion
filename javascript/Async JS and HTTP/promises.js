// PROMISES 

// Promises are objects that represent the eventual outcome of an asynchronous operation
/* A Promise object can be in one of three states:
1. Pending: The initial state— the operation has not completed yet.
2. Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
For example, a request’s promise might resolve with a JSON object as its value.
3. Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind. 
*/
// We refer to a promise as settled if it is either fulfilled or rejected.
// All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.




// Constructing a Promise Object
// Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method
// The Promise constructor takes a single argument, which is a function called the executor.
// The executor function is executed immediately by the Promise constructor, and it is responsible for starting the asynchronous operation.
// The executor function takes two arguments, resolve and reject, which are both functions.
// These functions are not defined by us, but rather are provided by the Promise constructor.
// The resolve function is called when the asynchronous operation completes successfully, and the reject function is called when it fails.
const executorFunction = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
}
const myFirstPromise = new Promise(executorFunction);

const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change this to false to simulate a failure
        if (success) {
            resolve('Operation completed successfully!');
        } else {
            reject(new Error('Operation failed.'));
        }
    }, 2000);
});  // The promise is pending until the asynchronous operation completes. After 2 seconds, the promise will either be fulfilled or rejected based on the success variable.

// Example: 
const inventory = {
    sunglasses: 1403,
    pants: 1088,
    bags: 1344
};
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    };
};
const orderSunglasses = () => {
    return new Promise(myExecutor);
};
const orderPromise = orderSunglasses();
console.log(orderPromise);





// The setTimeout() Function
// Is a Node API that uses callback functions to schedule tasks to be performed after a delay
// Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation. 
// setTimeout() has two parameters: a callback function and a delay in milliseconds.
const delayedHello = () => {
    console.log('Hi! This is an asynchronous greeting!');
};
setTimeout(delayedHello, 2000);
/* After 2 seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run.
This means it might be more than two seconds before delayedHello() is actually executed. */
const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {resolve('I resolved!')}, 1000);
    });
};
const prom = returnPromiseFunction();




// Consuming a Promise
// Once a promise settles, we can use the .then() method to handle the result of the promise.
// The .then() method takes two arguments: a callback function to handle the fulfilled state and a callback function to handle the rejected state.
// We refer to these callbacks as handlers.
// One important feature of .then() is that it always returns a promise.
const promesa = new Promise((resolve, reject) => {
    resolve('Yay!');
});
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};
promesa.then(handleSuccess); // Prints: 'Yay!'

// We won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case
let promesa2 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
        resolve('Yay!');
    } else {
        reject('Ohhh noooo!');
    };
});
const handleSuccess1 = (resolvedValue) => {
    console.log(resolvedValue);
};
const handleFailure1 = (rejectionReason) => {
    console.log(rejectionReason);
};
promesa2.then(handleSuccess1, handleFailure1);




// Catch ()
// The .catch() function takes only one argument, onRejected.
// In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. 
promesa2
    .then(handleSuccess1)
    .catch(handleFailure1);



// Chaining Promises
/* Multiple operations which depend on each other to execute or that must be executed in a certain order. 
We might make one request to a database and use the data returned to us to make another request */
// The process of chaining promises together is called composition
firstPromiseFunction()
.then((firstResolveValue) => {
    return secondPromiseFunction(firstResolveValue);
})
.then((secondResolveValue) => {
    console.log(secondResolveValue);
}); /* Inside the success handler we return a new promise— the result of invoking a second function, 
secondPromiseFunction() with the first promise’s resolved value. */

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    });





// Promise.all()
// The Promise.all() method takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.
// If any of the promises in the array reject, the Promise.all() promise will reject with the reason of the first rejected promise.
// This is useful when you want to wait for multiple asynchronous operations to complete before proceeding.
let myPromises = Promise.all([returnsPromiseOne(), returnsPromiseTwo(), returnsPromiseThree()]);
myPromises
.then((arrayOfValues) => {
    console.log(arrayOfValues);  // will print the array of resolved values if each promise resolves successfully.
})
.catch((rejectionReason) => {
    console.log(rejectionReason);  // will print the first rejection message if any promise rejects.
});


//EXAMPLE
// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}
// This is a function that checks the availability of an item at a distributor
const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};
const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

let checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
let checkPants = checkAvailability('pants', 'Favorite Supply Co.');
let checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject)




/* 
- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
- Promises can be in one of three states: pending, resolved, or rejected.
- A promise is settled if it is either resolved or rejected.
- We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
- setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
- We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
- We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
- To use promise composition correctly, we have to remember to return promises constructed within a .then(). */