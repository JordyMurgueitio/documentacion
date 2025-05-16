// MOCHA 
// Mocha is a JavaScript test framework for Node.js and browsers.
// Before writing any tests you’ll need to use Node.js and npm to set up a JavaScript project and install Mocha.
/* 
Node allows you to run JavaScript in the terminal 
npm is a Node tool that allows you to download packages from the web, and manage them in a JavaScript project
Mocha is one of those packages and is used to test other JavaScript code 
*/



// The following command creates a file package.json that can be used to manage packages for the project
// npm init 

// The following command installs Mocha and saves it as a dependency in the package.json file
// npm install mocha -D
/*  package.json
{
    "name": "learn-mocha-learn-mocha-install-mocha-ii",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "mocha": "^4.0.1"
    }
} 
*/




// To run Mocha, we can add a script to package.json
// In the scripts object, set the value of the test property to mocha
/* 
"scripts": {
    "test": "mocha"
} 
*/
// After saving the file, we can run the test command in the terminal
// npm test -- run the full test suite 





// describe and it 
// In Mocha we group tests using the describe function and define tests using the it function
// Both the describe and it functions accept two parameters: a descriptive string and a callback function
describe('Math', () => {
    describe('.max', () => {
        it('returns the argument with the highest value', () => {
        // Your test goes here
        });
        it('returns -Infinity when no arguments are provided', () => {
        // Your test goes here
        });
    });
});




// assert 
// To write the tests themselves, we can use the assert.ok method provided by Node.js
// The assert.ok method takes a single argument and throws an error if the argument is falsy
// In programming, a test compares an expected outcome to an actual outcome
const a = 1 + 2;
if (a !== 3) {
    throw 'Test failed! a is not 3'
}
// As a Node module, assert can be imported at the top of your files with
const assert = require('assert');
// You call assert functions like this
assert.ok(a === 3, 'a is not 3');

describe('+', () => {
    it('returns the sum of its arguments', () => {
        assert.ok(3 + 4 === 7);
    });
});



// Setup, Exercise and Verify
// The setup, exercise, and verify pattern is a common way to write tests
// 1. Setup: Prepare the test by creating any variables or objects you need
// 2. Exercise: Call the function you want to test
// 3. Verify: Check that the result is what you expect. 
describe('.pop', () => {
    it('returns the last element in the array', () => {
        // Setup
        const knightString = 'knight';
        const jediPath = ['padawan', knightString];
        // Exercise
        const popped = jediPath.pop();
        // Verify
        assert.ok(popped === knightString);
    });
});




// Teardown 
// Teardown is the process of cleaning up after a test
// The teardown phase makes our tests isolated by resetting the environment before the next test runs.
// Changes to the environment caused by one test do not affect the other tests.
// We want to ensure that the environment returns to its state before the tests were executed.
const assert = require('assert');
const fs = require('fs');
let path, str;

describe('appendFileSync', () => {
    it('creates a new file with a string of text', () => {
    // Setup
    path = './message.txt';
    str = 'Hello Node.js';
    // Exercise: write to file
    fs.appendFileSync(path, str);
    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
    // Teardown: restore file
    fs.unlinkSync(path); 
    });

    it('creates a new file with a string of text', () => {
    // Setup
    path = './message.txt';
    str = '';
    // Exercise: write to file
    fs.appendFileSync(path, str);
    // Verify: compare file conten ts to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
    // Teardown: restore file
    fs.unlinkSync(path);
    });
});




// Hooks
/* 
While execution and verification are unique to each test, 
setup and teardown are often similar or even identical for multiple tests within a test suite
*/
// Hooks are functions that run before and after each test in a test suite, they ebale us to reduce repetition 
/* 
1. beforeEach(callback) - callback is run before each test
2. afterEach(callback) - callback is run after each test
3. before(callback) - callback is run before the first test
4. after(callback) - callback is run after the last test 
*/
describe('messing around with hooks', () => {
    let testValue; // Variable used by both tests
    beforeEach(() => {
        testValue = 5;
    });
    it('should add', () => {      // testValue = 5 
    testValue = testValue + 5;
    assert.equal(testValue, 10);
    });
    it('should multiply', () => {     // testValue = 5 
    testValue = testValue * 5;
    assert.equal(testValue, 25);
    });
});

/* 
The before... hooks naturally happen before tests and are useful for separating out the setup steps of your tests. 
Meanwhile, the after... hooks are executed after tests and are useful for separating out the teardown steps of your tests 
*/



/* Characteristics of a good test: 
fast, complete, reliable, isolated, maintainable, and expressive. 
If you are meeting these six criteria, you are creating high quality test frameworks! */