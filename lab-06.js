//Sydnee Warren
//Lab 06

//Book Class
class Book {
  constructor(titleOfBook, authorOfBook, pubDateOfBook, isbnOfBook) {
    this.title = titleOfBook;
    this.author = authorOfBook;
    this.pubDate = pubDateOfBook;
    this.isbn = isbnOfBook;
  }
}

//Library Class
class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
    //underscore represents something that one shouldn't touch (yes you can change it but you shouldn't)
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }
  deleteBook(isbn) {
    let indexOfBookRemoved = null;

    for (let index = 0; index < this._books.length; index++) {
      const book = this._books[index];
      if (book.isbn == isbn) {
        indexOfBookRemoved = index;
        break;
      }
    }

    this._books.splice(indexOfBookRemoved, 1);
  }
  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`
      );
    }
  }
}

// Create a book
const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  "10/16/2018",
  "0123456789"
);
let myBook = new Book(
  "AP Calc Crash Course",
  "Banu et al.",
  "01/01/2013",
  "9876543210"
);
const readyPlayerOne = new Book(
  "Ready Player One",
  "Ernest Cline",
  "2011",
  "5678901234"
);
const glassHotel = new Book(
  "The Glass Hoetl",
  "Emily St. John Mandel",
  "2020",
  "5432109876"
);

let uoLibrary = new Library("Knight Library");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(readyPlayerOne);
uoLibrary.addBook(glassHotel);
uoLibrary.listBooks();
console.log("Deleting Books")
uoLibrary.deleteBook("0123456789");
uoLibrary.listBooks();
