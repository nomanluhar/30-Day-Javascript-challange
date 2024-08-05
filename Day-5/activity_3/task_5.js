// Write  an arrow function to calculate the sum of the two number;

const sumOfNumber = (input1, input2) => {
  const response = input1 + input2;

  return "Sum of " + input1 + " and " + input2 + " is " + response;
};

const result = sumOfNumber(25, 35);

console.log({ result });
