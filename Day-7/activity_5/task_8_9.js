// Use of for.. in

const bookObj = {
  title: "chai code",
  author: "Hitesh",
  year: "2021",
};

for (const key in bookObj) {
  console.log(key + ": " + bookObj[key]);
}

// Use of Object.keys
const keyOfBookObject = Object.keys(bookObj);

console.log({ keyOfBookObject });

// Use of Object.values
const valueOfBookObject = Object.values(bookObj);

console.log({ valueOfBookObject });
