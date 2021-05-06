// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { checkNumber } from "../func.js";

const test = QUnit.test;

test('return true for correct answer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkNumber(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('return false for correct answer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkNumber(1, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});