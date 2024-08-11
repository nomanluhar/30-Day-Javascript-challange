//  Use the spread operator to create a new array that includes all element of an existing array plus additional elements.

const arr = ["10", "20", "30"];

const newArr = [...arr, "40", "50"];

console.log({ newArr });

// Use the rest operator in a function to accept an arbitary number of arguments

function sum(...args) {
  return args.reduce((total, current) => {
    return total + current;
  }, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log({ result });

const result1 = sum(10, 20, 40);
console.log({ result1 });
