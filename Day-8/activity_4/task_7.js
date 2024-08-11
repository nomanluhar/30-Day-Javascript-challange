// Write a function that takes two params with one default value of 1.

function multiply(num1, num2 = 1) {
  return num1 * num2;
}

const result = multiply(20);

console.log(result);

const result1 = multiply(20, 20);


console.log(result1)