// Assignment 2: Data Types, Comparison & Logical Operators

// Introduction:
// JavaScript type conversion causes many bugs — this assignment targets that.

// Objective:

// Understand primitive vs non-primitive
// Learn == vs ===
// Master logical operators
// Tasks:

// Compare different data types using == and ===
// Use &&, ||, ! in conditions
// Create edge cases with null, undefined, NaN
// Expected Outcome:
// Ability to predict comparison results without guessing

// 1. Primitive vs Non-Primitive
console.log(typeof 10); // primitive
console.log(typeof "hello"); // primitive
console.log(typeof true); // primitive
console.log(typeof null); // object (bug!)
console.log(typeof undefined); // undefined
console.log(typeof {}); // object (non-primitive)
console.log(typeof []); // object (non-primitive)

// 2. == vs ===
console.log(1 == "1"); // true (type coercion)
console.log(1 === "1"); // false (strict)
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 3. Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// 4. Edge Cases
console.log(NaN == NaN); // false (special case!)
console.log(null == 0); // false
console.log(undefined == 0); // false
console.log([] == 0); // false
console.log([] == false); // true
