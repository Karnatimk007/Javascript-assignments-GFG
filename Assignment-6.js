// Assignment 6: Array Methods & Reference Behavior

// Introduction:
// Arrays behave differently when copied or mutated.

// Objective:

// Use array methods
// Understand copy by reference
// Practice destructuring & spread
// Tasks:

// Use push, pop, slice, concat
// Demonstrate reference issue
// Fix using spread operator
// Expected Outcome:
// Ability to avoid accidental mutations

// 1. Array methods
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
arr.pop();
console.log(arr); // [1, 2, 3]

// 2. Reference issue
let arr1 = [1, 2];
let arr2 = arr1; // same reference!
arr2.push(3);
console.log(arr1); // [1, 2, 3] (mutated!)

// 3. Fix using spread
let arr3 = [1, 2];
let arr4 = [...arr3]; // copy
arr4.push(3);
console.log(arr3); // [1, 2]
console.log(arr4); // [1, 2, 3]

//4.slice
let arr5 = [1, 2, 3];
let arr6 = arr5.slice();
console.log(arr5); // [1, 2, 3]
console.log(arr6); // [1, 2, 3]

//5.concat
let arr7 = [1, 2, 3];
let arr8 = [4, 5, 6];
let arr9 = arr7.concat(arr8);
console.log(arr7,arr8,arr9)
