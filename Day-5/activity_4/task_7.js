//Write a function that takes two parameters and returns their product with default value to it.

const multiply = (input1, input2 = 20) => {
  return "Multiplication of number is " + input1 * input2;
};

const result1 = multiply(10);

const result2 = multiply(15, 3);

console.log(result1);

console.log(result2);
