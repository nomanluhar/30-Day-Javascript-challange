// Write a function to check number is even or odd.

function isNumberEvenOrOdd(input) {
  if (input % 2 === 0) {
    return input + " is even number";
  } else {
    return input + " is odd number";
  }
}

const result = isNumberEvenOrOdd(3);

console.log({ result });
