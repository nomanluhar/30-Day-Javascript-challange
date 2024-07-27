const number1 = 21;

const number2 = 23;

const number3 = 22;

if (number1 < number2) {
  if (number2 < number3) {
    console.log("Largest value is: " + number3);
  } else {
    console.log("Largest value is: " + number2);
  }
} else {
  if (number1 < number3) {
    console.log("Largest value is: " + number3);
  } else {
    console.log("Largest value is: " + number1);
  }
}
