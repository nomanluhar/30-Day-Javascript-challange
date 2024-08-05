// Write a function to take person name and age and retuen greeting message.

const greet = (name, age = 27) => {
  return "Hello, " + name + "! You are " + age + " years old.";
};

const greetMsg1 = greet("Alie", "33");


console.log(greetMsg1);

const greetMsg2 = greet('Jon');

console.log(greetMsg2)