// Node.js provides a library called assert with methods that help you write more expressive verification code.

// You can use the methods in this library in place of conditional statements
const assert = require('assert');

describe('+', () => {
    it('returns the sum of its arguments', () => {
    assert.ok(3 + 4 === 7);
    });
});



// assert.ok 
/* 
If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. 
The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console */
assert.ok(6 - 1 === 5);

describe('-', () => {
    it('returns the difference of two values', () => {
        const bigNum = 100; 
        const smallNum = 10;
        const expected = 90;
        const result = bigNum - smallNum;
        assert.ok(result === expected, 'result is not equal to expected');
    });
});




// assert.equal
// assert.equal() is used to compare two values for equality
// assert.equal() uses the == operator, which performs a type conversion before comparing the two values
// In the example below, the two methods achieve the same outcome.
const landAnimals = ['giraffe', 'squirrel'];
const waterAnimals = ['shark', 'stingray'];
landAnimals.push('frog');
waterAnimals.push('frog');

assert.ok(landAnimals[2] == waterAnimals[2]);
assert.equal(landAnimals[2], waterAnimals[2]);




// assert.strictEqual
// assert.strictEqual() is used to compare two values for strict equality
// assert.strictEqual() uses the === operator to compare two values. Returns false if the values are not strictly equal
//  the assert documentation recommends always using assert.strictEqual() instead of assert.equal()
describe('-', () => {
    it('returns the difference of two values', () => {
        const bigNum = 100;
        const smallNum = 4;
        const expected = '96';
        const result =  bigNum - smallNum;
        assert.strictEqual(result, expected); // result is not equal to expected. Will throw an error
    });
});




// assert.deepStrictEqual 
// assert.deepStrictEqual() is used to compare two objects for deep equality
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b);
assert.strictEqual(a, b); 
// Both assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript
// This method compares the values of each object using strict (===) equality.
assert.deepStrictEqual(a, b); // No error is thrown because the values of each object are equal

describe('+', () => {
    it('returns the sum of two values', () => {
        // Setup
        let expected = {a: 3, b: 4, result: 7};
        let sum = {a: 3, b: 4};
        // Exercise
        sum.result = sum.a + sum.b;
        // Verify
        assert.deepStrictEqual(sum, expected); // No error is thrown 
    });
});

// Arrays are also objects in JavaScript
// assert.deepStrictEqual() can be used to compare two arrays for deep equality
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];    
const array3 = [1, 2, '3'];

assert.deepStrictEqual(array1, array2); // No error
assert.deepStrictEqual(array1, array3); // Error: 1, 2, 3 !== 1, 2, '3'



// assert.notStrictEqual
// assert.notStrictEqual() is used to compare two values for strict inequality
// assert.notStrictEqual() uses the !== operator to compare two values
// assert.notStrictEqual() returns true if the two values are not strictly equal
// assert.notStrictEqual() returns false if the two values are strictly equal
assert.notStrictEqual(1, 2); // OK
assert.notStrictEqual(1, 1); // Error: 1 === 1
assert.notStrictEqual('1', 1); // OK




// assert.throws
// assert.throws() is used to test that a function throws an error
// assert.throws() takes two arguments: a function and an optional error type
// The function is called and if it throws an error, the test passes
// If the function does not throw an error, the test fails






// Example

// Define a rooster
Rooster = {};
// Return a morning rooster call
Rooster.announceDawn = () => {
    return 'moo!';
};   
// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
    if (hour < 0 || hour > 23) {
        throw new RangeError;
    } else {
        return hour.toString();
    };
};
// Export the Rooster object
module.exports = Rooster; 



// Test suite
const assert = require('assert');
const Rooster = require('../index');

describe('rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
        const expected = 'moo!';
        const result = Rooster.announceDawn();
        assert.strictEqual(result, expected);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
        const expected = '1';
        const result = Rooster.timeAtDawn(1);
        assert.strictEqual(result, expected);
        });
        it('throws an error if passed a number less than 0', () => {
        assert.throws(() => {
            Rooster.timeAtDawn(-1);
        }, RangeError);
        });
        it('throws an error if passed a number greater than 23', () => {
        assert.throws(() => {
            Rooster.timeAtDawn(24);
        }, RangeError);
        });
    });
});
