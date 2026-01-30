// Assignment 3: Conditional & Nested Conditional Logic

// Introduction:
// Complex conditions are common in real apps.

// Objective:

// Use if-else & nested if
// Convert logic into ternary operator
// Tasks:

// Write nested conditional logic
// Convert nested if-else into ternary
// Identify readability problems
// Expected Outcome:
// Strong control over decision-making logic.

// 1. Nested if-else
let age = 25;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Need license");
    }
} else {
    console.log("Too young");
}

// 2. Convert to ternary
let result = (age >= 18) ? (hasLicense ? "Can drive" : "Need license") : "Too young";
console.log(result);

// 3. Readability issues
// Nested ternaries become hard to read:
let status = (age >= 18 && hasLicense) ? "Can drive" : 
             (age >= 18 && !hasLicense) ? "Need license" : 
             "Too young";
console.log(status);
