// Assignment 9: Asynchronous JS & Promises

// Introduction:
// JS is single-threaded but async — magic happens here.

// Objective:

// Callbacks & callback hell
// Promises & chaining
// Promise APIs
// Tasks:
// Convert callback hell to promises
// Use Promise.all, race, any
// Understand execution order
// Expected Outcome:
// Clear async flow understanding without confusion.

// 1. Callback hell
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);

// 2. Promises
function step1() {//this is a promise
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1");
            resolve();
        }, 1000);
    });
}

function step2() {//this is a promise
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2");
            resolve();
        }, 1000);
    });
}

function step3() { //this is a promise
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 3");
            resolve();
        }, 1000);
    });
}

step1().then(step2).then(step3);//this is promise chaining

// 3. Promise APIs
let p1 = Promise.resolve(10);//this is a promise
let p2 = Promise.resolve(20);//this is a promise
let p3 = Promise.resolve(30);//this is a promise

Promise.all([p1, p2, p3]).then(values => console.log(values)); // [10, 20, 30]
Promise.race([p1, p2, p3]).then(value => console.log(value)); // 10