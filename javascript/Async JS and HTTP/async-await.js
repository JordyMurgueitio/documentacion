// ASYNC AWAIT 
//  ES8 provides a new syntax for handling our asynchronous action, async...await




// The async keyword 
// Is used to write functions that handle asynchronous actions
// We wrap our asynchronous logic inside a function prepended with the async keyword. 
async function getInfo() {};
// The async keyword will always return a promise.
/* An async function will return in one of three ways:
1. If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
2. If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
3. If a promise is returned from the function, it will simply return that promise 
*/
function withConstructor(num){
    return new Promise((resolve, reject) => {
        if (num === 0){
        resolve('zero');
        } else {
        resolve('not zero');
        }
    });
}
withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

async function withAsync(num){
    if (num === 0){
        return 'zero';
        } else {
        return 'not zero';
        }
}
withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});




// The await operator
// It can only be used inside an async function.
// It returns the resolved value of the promise or throws an error if the promise is rejected.
// It pauses the execution of the async function until the promise is resolved or rejected.
async function asyncFuncExample(){
    let resolvedValue = await myPromise();  // myPromise() is a function that returns a promise
    console.log(resolvedValue);
}
asyncFuncExample(); // Prints: I am resolved now! 


const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
        console.log('Should I make chicken...?');
        resolve('beans'); 
        }, 1000); 
    }); 
};
async function announceDinner() {
    let resolved = await brainstormDinner();
    console.log(`I'm going to make ${resolved} for dinner.`);
}
announceDinner(); // Prints: I'm going to make beans for dinner.




// async functions 
// If we forget the await keyword, the function will still run but it will not wait for the promise to resolve.
let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Yay, I resolved!')
        }, 1000);
    });
}

async function noAwait() {
    let value = myPromise();
    console.log(value);
}
async function yesAwait() {
    let value = await myPromise();
    console.log(value);
}
noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!





// HANDLING DEPENDENT PROMISES
// When we have a series of asynchronous actions which depend on one another
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
        })
    .then((secondValue) => {
        console.log(secondValue);
        });
}
// We cam use async/await to achieve the same result as above
async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
}
// Example of dependent promises
const shopForBeans = () => {
    return new Promise((resolve, reject) => {
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
        let randomIndex = Math.floor(Math.random() * 5);
        let beanType = beanTypes[randomIndex];
        console.log(`I bought ${beanType} beans because they were on sale.`);
    resolve(beanType);
    }, 1000)
})
}
let soakTheBeans = (beanType) => {
    return new Promise((resolve, reject) => {
        console.log('Time to soak the beans.');
        setTimeout(()=>{
        console.log(`... The ${beanType} beans are softened.`);
        resolve(true);
        }, 1000);
    });
}
let cookTheBeans = (isSoftened) => {
    return new Promise((resolve, reject) => {
        console.log('Time to cook the beans.');
        setTimeout(()=>{
        if (isSoftened) {
            console.log('... The beans are cooked!');
            resolve('Dinner is served!');
        }
        }, 1000);
    });
}

async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}
makeBeans(); 




// HANDLING ERRORS
// With async...await, we use try...catch statements for error handling.
async function usingTryCatch() {
    try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
    } catch (err) {
    // Catches any errors in the try block
    console.log(err);
    }
}
usingTryCatch(); 
// since async functions return promises we can still use native promise’s .catch() with an async function
async function usingPromiseCatch() {
    let resolveValue = await asyncFunction('thing that will fail');
}
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})




// HANDLING INDEPENDENT PROMISES
// When async function contains multiple promises which are not dependent on the results of one another
// Both promises are constructed without await. We then await each of their resolutions to print them to the console
async function concurrent() {
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
}
// With our concurrent() function both promises’ asynchronous operations can be run simultaneously
/* Note: if we have multiple truly independent promises that we would like to execute fully in parallel, 
we must use individual .then() functions */
let cookRice = () => {
    return new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve('rice');
    }, 1000);
    });
}
let bakeChicken = () => {
    return new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve('chicken');
    }, 1000);
    });
}
async function serveDinner() {
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    console.log(`Dinner is served. We're having ${await starchPromise} with ${await proteinPromise}`)
}
serveDinner(); // Prints: Dinner is served. We're having rice with chicken





// Await Promise.all()
// When we have multiple independent promises and we want to wait for all of them to resolve before continuing
// We can pass an array of promises as the argument to Promise.all(), and it will return a single promise.
// This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.
// If any of the promises in the array are rejected, the entire Promise.all() will be rejected.
/* Promise.all() is a good choice if multiple asynchronous tasks are all required, 
but none must wait for any other before executing */
async function asyncPromAll() {
    const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
    for (let i = 0; i < resultArray.length; i++){
        console.log(resultArray[i]); 
    }
}

async function serveDinnerAgain () {
    const foodArray = await Promise.all([cookRice(), bakeChicken()]);
    console.log(`Dinner is served. We're having ${foodArray[0]} with ${foodArray[1]}`);
}
serveDinnerAgain(); // Prints: Dinner is served. We're having rice with chicken

