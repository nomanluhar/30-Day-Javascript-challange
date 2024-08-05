// Write a higher-order function that takes two functions and a value ,
// applies the first function to the value, and then
// applies the second function to the result

const applyFun = (firstFun, secondFun, value) => {
  var result1 = firstFun(value);
  var result2 = secondFun(result1);
  return result2;
};

function greet(name) {
  return "Hello, " + name;
}

function shout(message) {
  return message.toUpperCase();
}

console.log(applyFun(greet, shout, "John"));
