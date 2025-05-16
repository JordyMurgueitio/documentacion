// FILE: index.js
const Calculate = {
    factorial(number){
        if(number === 0) {
        return 1;
        };
        let result = 1;
        for(let i = number -1; i >= 1; i--) {
        result *= i;
        }
        return result
    }
};

module.exports = Calculate;



// File: index.test.js

var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('returns 120 for 5!', () => {
        // set up
        const inputNumber = 5;
        const expectedResult = 120;
        // exercise
        const result = Calculate.factorial(inputNumber);
        // verify
        assert.equal(result, expectedResult);
        });

        it('returns 6 for 3!', () => {
        // set up 
        const inputNumber = 3;
        const expectedResult = 6;
        // exercise 
        const result = Calculate.factorial(inputNumber);
        // verify
        assert.equal(result, expectedResult);
        });

        it('returns 1 for 0!', () => {
        const inputNumber = 0;
        const expectedResult = 1;
        // exercise 
        const result = Calculate.factorial(inputNumber);
        // verify
        assert.equal(result, expectedResult);
        });
    });
});
