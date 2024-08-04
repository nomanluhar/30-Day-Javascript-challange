//Write a program to print 1 to 10 but stop at 7 with break;

let n = 10;

let breakNum = 7;

for (let i = 1; i <= n; i++) {
  if (i === breakNum) {
    break;
  }
  console.log(i);
}
