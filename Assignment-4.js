// Assignment 4: Loops, Nested Loops & Iteration

// Introduction:
// Iteration is the backbone of JS logic.

// Objective:

// Master for, while
// Understand nested loops
// Iterate over strings & arrays
// Tasks:

// Iterate string character by character
// Create nested loop scenarios
// Compare for vs while
// Expected Outcome:
// Confidence in loop execution order and performance thinking.

// 1. Iterate string
let str = "hello";
for (let i of str) {
    console.log(i);
}

// 2. Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(`${i}-${j}`);
    }
}

// 3. for vs while
// for: when you know iterations
// while: when condition is dynamic
let count = 0;
while (count < 3) {
    console.log("while:", count);
    count++;
}
