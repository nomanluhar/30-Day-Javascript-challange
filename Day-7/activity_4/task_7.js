// Add a method to the book object that uses the this keyword to return a string with the book's title and year.

const bookObj = {
  title: "Chai code",
  author: "Hitesh",
  year: "2021",
  library: {
    name: "NameBook",
    book: ["JS", "Node", "Express", "React", "Next"],
  },
  getTitleAndAuthor: function () {
    return "Title: " + this.title + " Author: " + this.author;
  },
};

console.log(bookObj.getTitleAndAuthor());
