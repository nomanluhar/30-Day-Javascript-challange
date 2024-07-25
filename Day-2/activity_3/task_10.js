//Write a program to compare two numbers using == and === and log the result to the console.

const operand1 = "1";

const operand2 = 1;

const result1 = operand1 == operand2;

const result2 = operand1 === operand2;

console.log("Comparision of the value by == is: " + result1);
console.log("Comparision of the value by === is: " + result2);

// When we use === for comparison, JavaScript also checks the type of the variables. 
// If the types of the variables do not match, the comparison will return false.

// When we use == for comparison, JavaScript performs type coercion, converting the values 
// to a common type before making the comparison. If the resulting values are the same, 
// the comparison will return true.
