// Assignment 10: Prototype, Classes & OOP Concepts

// Introduction:
// JavaScript is prototype-based, not class-based internally.

// Objective:

// Prototype chain
// Classes & inheritance
// Static & private properties
// Tasks:

// Add method via prototype
// Create class with inheritance
// Use static & private fields
// Expected Outcome:
// Strong foundation of JS OOP internals.

// 1. Prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

let p = new Person("John");
p.greet();

// 2. Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

let d = new Dog("Buddy");
d.speak();

// 3. Static & Private
class Counter {
    static count = 0; // static
    #privateCount = 0; // private

    increment() {
        this.count++;
        this.#privateCount++;
    }
}
