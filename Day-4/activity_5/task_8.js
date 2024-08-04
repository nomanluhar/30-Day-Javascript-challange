//Write a program to print 1 to 10 but skip 5 with continue

let n = 10;

let skipnumber = 5;

for (let i = 1; i <= n; i++) {
  if (i === skipnumber) {
    continue;
  }
  console.log(i);
}
