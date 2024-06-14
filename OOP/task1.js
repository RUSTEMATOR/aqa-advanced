import { Book } from "./Book.js";
import { Ebook } from "./Ebook.js";

const harryPotter = new Book("Harry Potter", "J.K.Rowling", 1997, 200);
harryPotter.printInfo();

const sherlokHolmes = new Book(
  "Sherlok Holmes",
  "Arthur Conan Doyle",
  1998,
  100,
);
sherlokHolmes.printInfo();

const charlieAndTheChocolateFactory = new Book(
  "Charlie and the Chocolate Factory",
  "Roald Dahl",
  1971,
  52352000,
);
charlieAndTheChocolateFactory.printInfo();

console.log(`\n EBooks:`);

const stalker = new Ebook("Stalker", "Vladimir Nabokov", 1998, ".txt");
stalker.printInfo();

const harryPotterEbook = new Ebook("Harry Potter", "J.K.Rowling", 1997, ".pdf");
harryPotter.printInfo();

const horror = new Ebook("Horror", "Vladimir Nabokov", 1423);
horror.printInfo();

//task 3
console.log("");
console.log("task 3 here:");
console.log("");

const abc = new Book();
abc.newTitle = "New Title";
console.log(abc.newTitle);
console.log("");
//task 3 verification
// const abc2 = new Book();
// abc2.newTitle = "";
// console.log(abc2.newTitle)

let booksArray = [harryPotter, sherlokHolmes, charlieAndTheChocolateFactory];
Book.printOldestBook(booksArray);
console.log("");

let EbooksArray = [stalker, harryPotterEbook, horror];
Book.printOldestBook(EbooksArray);

console.log("");

console.log(Ebook.makingEbook(harryPotter, ".pdf"));
