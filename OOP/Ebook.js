import { Book } from "./Book.js";

export class Ebook extends Book {
  constructor(title, author, issueYear, fileExtension) {
    super(title, author, issueYear);
    this.fileExtension = fileExtension;
  }

  static makingEbook(book, fileExtension) {
    return new Ebook(book.title, book.author, book.issueYear, fileExtension);
  }
  printInfo() {
    console.log(this.title, this.author, this.issueYear, this.fileExtension);
  }
}
