// Create a nested object representing a library with properties name and book

const bookObj = {
  title: "Chai code",
  author: "Hitesh",
  year: "2021",
  library: {
    name: "NameBook",
    book: ["JS", "Node", "Express", "React", "Next"],
  },
};

console.log(bookObj);

// Access and log the name of the library and the title of all the books.

console.log("Name of the library", bookObj.library.name);

console.log("Name of the books", bookObj.library.book);
