// Assignment 8: Higher Order Functions & Closures

//  Introduction:
// Advanced JS is impossible without these concepts.

// Objective:

// First-class & higher-order functions
// Closures
// Variable scope
// Tasks:

// Pass function as argument
// Return function from function
// Create closure example and explain memory behavior
// Expected Outcome:
// Ability to explain closures confidently in interviews.

// 1. Higher-order function
function apply(arr, fn) {
    let result = [];
    for (let item of arr) {
        result.push(fn(item));
    }
    return result;
}

let double = x => x * 2;
console.log(apply([1, 2, 3], double)); // [2, 4, 6]

// 2. Closure
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;//it returns the inner function along with the count variable
}

let counter = outer();
counter(); // 1
counter(); // 2
