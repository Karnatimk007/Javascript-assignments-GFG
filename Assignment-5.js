// Assignment 5: Functions, Return & Execution Context

// Introduction:
// Functions decide how memory and execution flow works.

// Objective:

// Function declaration vs expression
// Anonymous & arrow functions
// Understand return & undefined
// Tasks:

// Rewrite same logic using different function types
// Analyze return values
// Observe GEC and call stack behavior
// Expected Outcome:
// Deep clarity on how JS executes functions internally.

// 1. Function declaration
function add(a, b) {
    return a + b;
}

// 2. Function expression
const sub = function (a, b) {
    return a - b;
};

// 3. Arrow function
const mul = (a, b) => a * b;

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));

// 4. Return & undefined
function test() {
    // no return → returns undefined
}
console.log(test()); // undefined
