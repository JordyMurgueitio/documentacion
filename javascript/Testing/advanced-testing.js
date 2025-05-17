// CODE COVERAGE
// Code coverage is a measure of how much of your code is executed when you run your tests.
// It’s a good idea to aim for 100% code coverage, but it’s not always possible.


/* Some key criteria to use when measuring code coverage include:
- Function Coverage: Has each function been called?
- Statement Coverage: Has each statement been executed?
- Path Coverage: Has every edge in the control-flow graph been executed?
- Condition Coverage: Has each boolean sub-expression evaluated to be both true and false? */

function numSum(x, y) {
    if (x && y) {
        return (x + y);
    } else {
        return null;
    }
}
// The most basic test of this function would include calling the function at least once,
numSum(1, 2); // should return 3
// By executing the function only once and with the arguments above, we will execute some, but not all, of the lines of code in the function
// To achieve 100% coverage, we need to call our function with all the possible combinations of true and false.
numSum(1, 2); // should return 3
numSum(1, null); // should return null
numSum(null, 2); // should return null
numSum(null, null); // should return null



// The 100% code coverage myth
// Having 100% code coverage does not guarantee bug-free code – it simply validates the completeness of our tests  
// Code coverage is an insufficient metric to determine if our tests confirm the intended functionality of our program
/* We should consider the code coverage criteria as a set of guidelines to help you develop intuition for testing your code 
while remaining determined to write robust test suites that are specific in targeting the various use cases of our programs. */

// Test coverage 
/* Test coverage differs from code coverage in that test coverage measures the percentage of the required features/specs that are tested, 
as opposed to the percentage of lines executed.  */


/* Code coverage measures the percentage of lines of code that are executed in a test while test coverage 
measures the percentage of required features that are tested.
Though these metrics cannot guarantee bug-free code,
by incorporating these two metrics into your test analysis, 
you can increase your confidence that your test suites are robust and that your products can satisfy your end users. */








// MOCKING IN TESTING
// Mocking is the process of creating a fake version of an external service for testing purposes, particularly in unit tests and integration tests.
// Effectve in testing individual units of code without relying on the functionality of other services or units such as APIs or databases.


// Mocking in Unit Tests 
/*  Test a particular feature without needing to rely on other services or units. 
By removing dependencies, we are limiting the sources of potential bugs and unintended results */
// Let’s say we’re testing a feature for a blog website which renders profile data
/* In our blog application, the new feature has three steps:
1. profile data must first be fetched from a database
2. the data received must be parsed and formatted
3. the formatted data is rendered */
/* When unit testing how the data is displayed (step 3), 
we can skip the first two steps (fetching and formatting) by mocking the formatted data we need
We can even mock bad or unexpected inputs to test how our feature might display an error message */


// Mocking in Integration Tests
/* While it’s helpful to use mocks in unit tests, we should avoid using mocks in integration tests to better simulate interactions between internal services 
(though external services should remain mocked). */







// SPIES WITH SINON.JS
/* In testing, a spy is a function that observes and records information about another function’s calls including arguments, 
return value, the this value, and exceptions thrown (if any). 
The information that is observed by the spy can then be used in assertions for testing. */

// Sinon.js is a JavaScript library that includes standalone fakes, spies, and mocks that can be used in any unit testing framework

// How to Spy? 
// There are multiple ways to use a spy, they can be anonymous functions or they can wrap around existing methods in a program
// Our spy will be wrapped around a method and, as we use the method in our tests, will observe everything that happens involving that method
// The following example demonstrates some basics of using the sinon.spy() method
const robot = {
    greet(name){  // Unit being tested
        return 'Hello ' + name;
    }
};

test('greet should return hello codey', () => {
    sinon.spy(robot, 'greet'); // Initialize the spy
    robot.greet('codey'); // Call the method
    expect(robot.greet.called).to.be.true;
    expect(robot.greet.calledWith('codey')).to.be.true;
    expect(robot.greet.returned('Hello codey')).to.be.true;
    robot.greet.restore(); // Remove spy from wrapped method
});
/* In the example above, the sinon.spy() method is used to wrap the robot object’s .greet() method.
Doing so adds a number of useful properties and methods that allow us to monitor its behavior */
/* 
Using a few of these methods, we test if the .greet() method…
- has been called using the .called property
- is called with the correct argument using the .calledWith() method
- returns what we expect it to return using the .returned() property
- Finally, to ensure that the method returns to its original, un-spied-on state, we use the .restore() method. */

