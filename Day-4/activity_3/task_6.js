// Write a program to print factorial of a number using do..while loop;

let n = 5;

let result = 1;

do {
  result *= n;

  n--;
} while (n > 0);

console.log({result})