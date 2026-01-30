// Introduction:
// This assignment focuses on how JavaScript variables behave in memory.

// Objective:

// Understand var, let, const
// Learn hoisting and TDZ
// Understand scope & scope chain
// Tasks:

// Write code to show hoisting with var
// Write code that throws TDZ error with let
// Compare global, function, and block scope
// Predict outputs before running
// Expected Outcome:
// Clear understanding of why var behaves differently and how scope chain works internally.

// 1. Hoisting with var
console.log(a); // undefined
var a = 10;

// 2. TDZ error with let
console.log(b); // ReferenceError
let b = 20;

// 3. Scope comparison
var x = 100; // global
function outer() {
    var y = 200; // function
    if (true) {
        var z = 300; // still function scope
        let w = 400; // block scope
        console.log(z, w);
    }
    console.log(z);
    // console.log(w); // ReferenceError
}
outer();

// 4. Scope chain
function printX() {
    console.log(x);
}
printX();