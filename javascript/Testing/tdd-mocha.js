// TDD is a programming technique whe you write test code before implementation code.
// Test code is written to define the desired behavior of your program


// The Red-Green-Refactor Cycle
// 1. Write a failing test (Red)
// 2. Write the minimum code to make the test pass (Green)
// 3. Refactor the code to improve its structure and readability (Refactor)
// 4. Repeat the process for the next feature or functionality



// RED 
// In TDD we react to the error messages by continually re-writing our implementation code so it behaves in the way that our test specifies.
/* Imagine you were trying to create a method named .initials, inside of an object named Phrase.
The desired behavior of .initials() is that it should return the first letter of each word in a phrase */
// The first step is to write a test that will fail.
const assert = require('assert');
describe('Phrase', () => {
    describe('.initials', () => {})
    isTypedArray('returns the first letter of each word in a phrase', () => {
        assert.strictEqual(Phrase.initials('Nelson Mandela'), 'NM');
    })
})
// If we ran this test we would get a reference error message in the terminal: ReferenceError: Phrase is not defined
// The ReferenceError tells us that the error is thrown because we don’t have a Phrase object
// This is the red phase of TDD. We have a failing test, and we know that we need to write some code to make it pass.



// GREEN
// The next step is to write the minimum code to make the test pass.
// We need to create a Phrase object and add the initials method to it.
const Phrase = {
    initials(phr) {
        return 'NM';
    }
}
// Now our test would pass and we would be in the green. But that doesn’t mean our method is working as intended 
// We will address that in the next step.



// Refactor
// Once your test is passing, you can refactor your code to improve its structure and readability.
// The goal of refactoring is to make the code cleaner and more maintainable without changing its behavior.
// A good place to start with refactoring is to restructure tests to reflect the four phases of a good test: setup, exercise, verification, teardown.
// Let’s consider the test for our Phrase.initials method. We could rewrite the test
describe('Phrase', () => {
    describe('.initials', () => {
        it('returns the first letter of each word in a phrase.', () => {
        // Setup
        const inputName = 'Nelson Mandela';
        const expectedInitials = 'NM';
        // Exercise
        const result = Phrase.initials(inputName);
        // Verification
        assert.strictEqual(result, expectedInitials);
        });
    });
});
// Now that we have refactored our test code, we can refactor our implementation code




// Getting into the red phase again
// The next step is to repeat this cycle to build a more complete implementation of the .initials method.
// write additional test cases that force you to write better implementation code
// Write another test that pushes us to implement a Phrase.initials() method that returns the first letter of each word for a different name.
describe('Phrase', () => {
    describe('.initials', () => {
        it('returns the first letter of each word in a phrase.', () => {
            // Setup
            const inputName = 'Nelson Mandela';
            const expectedInitials = 'NM';
            // Exercise
            const result = Phrase.initials(inputName);
            // Verification
            assert.strictEqual(result, expectedInitials);
            });
        it('returns the initials of a name', () => {
            const nameInput = 'Juan Manuel Santos';
            const expectedInitials = 'JMS';
            const result = Phrase.initials(nameInput);
            assert.strictEqual(result, expectedInitials);
        });
    });
});



// Getting into the green phase again
// It is time to program the actual behavior that we want our .initials method to execute.
// Our current implementation always returns ‘NM.’ so it raises an error when we run the test for ‘JMS’.
// To write a more complete implementation, that could get us back into the green, we could write something like this:
const PhraseImproved = {
    initials(inputName) {
        // Create an empty array for initials
        const initials = [];
        // Create an array of strings 
        const words = inputName.split(" ");
        // Iterate through the array of strings and push the first character of each to array
        words.forEach((word) => {
            initials.push(word.charAt(0));
        });
        // Return the initials as one string
        return initials.join("");
    }
};



// Refactor again 
/* You’re back in the green!
The next step is to refactor the code so that your tests are fast, complete, reliable, isolated, maintainable, and expressive. 
Also, you want to make sure your implementation code is descriptive and efficient. */



// Edge Cases
// Now that we have written and refactored a few tests, it’s time to consider edge cases.
// Edge cases are situations that occur outside of the normal operating parameters of your code.
// They are often the result of unexpected input or unusual circumstances.
// Example: we pass .initials() a number instead of a string.
// The test for throwing an error when a number is passed to Phrase.initials() would look like this:

it('throws an error when a number is passed', () => {
    const inputName = 12;
    assert.throws(() => {
        Phrase.initials(inputName);
    }, /only strings are allowed/);
});

// The complete implementation code would now be back in the green and look like this:
const PhraseImproved2 = {
    initials(inputName) {
        if (typeof inputName !== "string") {
        throw new Error("ERROR: only use string");
        };
        const initials = [];
        const words = inputName.split(" ");
        words.forEach((word) => {
            initials.push(word.charAt(0));
        });
        return initials.join("");
    }
};
