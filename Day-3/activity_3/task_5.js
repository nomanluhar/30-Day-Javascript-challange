const marks = 100;

switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("Grade A for marks: " + marks);
    break;
  case marks >= 80 && marks < 90:
    console.log("Grade B for marks: " + marks);
    break;
  case marks >= 70 && marks < 80:
    console.log("Grade C for marks: " + marks);
    break;
  case marks >= 60 && marks < 70:
    console.log("Grade D for marks: " + marks);
    break;
  case marks >= 0 && marks < 60:
    console.log("Grade F for marks: " + marks);
    break;
  default:
    console.log("Invalid marks");
}
