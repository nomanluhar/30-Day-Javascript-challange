// Write a higher-order function that takes a function and a number, and calls that many times.

function mainFunction(input) {
  return function returnFunction() {
    console.log("Main function input is " + input)
  };
}

const result = mainFunction(222);

result();
result();
result();
result();