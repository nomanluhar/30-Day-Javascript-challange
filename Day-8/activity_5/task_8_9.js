// Use enhanced object literals to create an object with methods and properties

const name = "John Doe";
const age = 30;

const person = {
  // Shorthand property names
  name,
  age,

  // Computed property name
  ["isAdult"]: age >= 18,

  // Method definition shorthand
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },

  // Method using other properties
  birthday() {
    this.age += 1;
    console.log(`Happy Birthday! You are now ${this.age} years old.`);
  },
};

// Using the object
person.greet(); // Output: Hello, my name is John Doe.
console.log(person.isAdult); // Output: true
person.birthday(); // Output: Happy Birthday! You are now 31 years old.



// Create an object with computed property names based on variables and log the object to the console

// Variables for property names
const key1 = "firstName";
const key2 = "lastName";
const key3 = "age";

// Creating the object with computed property names
const person1 = {
  [key1]: "John",
  [key2]: "Doe",
  [key3]: 30
};

// Logging the object to the console
console.log(person1);
