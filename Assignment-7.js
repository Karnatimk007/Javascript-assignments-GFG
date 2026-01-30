// Assignment 7: Objects, This & Function Borrowing

// Introduction:
// Objects + functions = confusion
// Let’s remove that confusion.

// Objective:

// Object properties & methods
// this keyword
// call, apply, bind
// Tasks:

// Create object methods
// Borrow methods using call/apply
// Permanently bind this
// Expected Outcome:
// Clear understanding of context binding.

// 1. Object methods
let user = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
user.greet();

// 2. Borrow methods
let user2 = {
    name: "Jane",
    age: 25
};

user.greet.call(user2); // borrow

// 3. Bind this
let greetUser2 = user.greet.bind(user2);
greetUser2();

