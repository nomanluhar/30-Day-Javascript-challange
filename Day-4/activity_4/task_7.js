// Print a pattern using nested loops

// *
// **
// ***
// ****
// *****

let row = 5;

let symbol = "*";

for (let i = 1; i <= row; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += symbol;
  }

  console.log(pattern);
}
