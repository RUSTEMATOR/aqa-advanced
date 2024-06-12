

export class Book{
    constructor(title, author, issueYear){
        this.title = title;
        this.author = author;
        this.issueYear = issueYear;
        
    }
    //task 3 /////////////////////////////////////////////////////////////
    get newTitle(){
        return this.title;
    }

    set newTitle(title){
        if (title.length <= 0){
            throw new Error("Title is too short")
        }
        this.title = title + " don't know what to do with it";
    }
    ///////////////////////////////////////////////////////////////////////


    //task 4 /////////////////////////////////////////////////////////////
    static printOldestBook(booksArray){
        let oldestBook = booksArray[0];

        for (let book of booksArray){
            if (oldestBook.issueYear > book.issueYear){
                oldestBook = book;
                console.log(`The oldest book is ${oldestBook.title} by ${oldestBook.author}`)
            }
        }
    }

        printInfo(){
            console.log(`Title: ${this.title} \nAuthor: ${this.author} \nIssue Year: ${this.issueYear}`);
        }    
    }

