// Use array desctructing to extract the first and second elements from an array.

const arr = ["firstEle", "secondEle"];

const [firstElement, secondElement] = arr;

console.log({ firstElement });

console.log({ secondElement });

//Use object desctructing to extract the title and author from a book object.

const bookObj = {
  title: "chai code",
  author: "Hitesh",
  year: "2021",
};

const { title, author, year } = bookObj;

console.log({ title }, { author }, { year });
