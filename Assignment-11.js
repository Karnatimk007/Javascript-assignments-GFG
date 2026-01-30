// Assignment 11: JavaScript Execution Context & Hoisting Deep Dive
// Covered Topics
// var, let, const
// Hoisting & TDZ
// Scope & Scope Chain
// GEC & Call Stack
// Problem Statement:
// Analyze hoisting, shadowing, and execution context.
//----------------------------
// Q1.
// var a = 10;
// function test() {
//   console.log(a);
//   if (true) {
//     var a = 20;
//   }
//   console.log(a);
// }
// ​
// test();

// Output: undefined, 20
// Explanation: Due to hoisting, the 'var a' inside test() is moved to the top of the function scope but initialized as undefined.

//----------------------------
// Q2.
// let x = 5;
// function outer() {
//   console.log(x);
//   let x = 10;
// }
// outer();

// Output: ReferenceError: Cannot access 'x' before initialization
// Explanation: 'let' variables are hoisted but remain in the Temporal Dead Zone (TDZ) until their definition is reached.
// //----------------------------
// // Q3.
function foo() {
  console.log(a);
}
let a = 30;
foo();
// Output: 30
// Explanation: foo() is called after 'a' is initialized in the global scope.
// //----------------------------
// // Q4.
var aa = 1;
function fn() {
  console.log(aa);
  aa = 2;
}
fn();
console.log(aa);

// Output: 1, 2
// Explanation: fn() logs the global 'aa' (1) and then updates the global 'aa' to 2.
// //-------------------------
// // Q5.
function aaa() {
  console.log("A");
}
var aaa;
aaa();
// Output: A
// Explanation: Function declarations are hoisted above variable declarations. The 'var aaa' is ignored as 'aaa' is already defined as a function.




