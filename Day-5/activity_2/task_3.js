// Write a function expression to find maximum of the two numbers

function findMaximum(input1, input2) {
  if (input1 > input2) {
    return input1 + " is bigger than " + input2;
  } else {
    return input2 + " is bigger than " + input1;
  }
}

const result = findMaximum(10, 20);

console.log({ result });
