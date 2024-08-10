// Add a method to the book object that returns a string with the book's title and author

const bookObj = {
  title: "Chai code",
  author: "Hitesh",
  year: "2021",
  getTitleAndAuthor: function () {
    return "Title: " + this.title + " Author: " + this.author;
  },
};

console.log(bookObj.getTitleAndAuthor());

// Add a method to the book object that takes a parameter and updates the books year property.

bookObj.updateYear = function(newYear) {
    this.year = newYear
};

bookObj.updateYear(2024)
console.log(bookObj.year)

