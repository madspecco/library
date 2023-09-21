const myLibrary = [];

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = function()
    {
        if(read)
        {
            return "read.";
        }
        return "is not read yet."
    }

    this.info = function() 
    {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}`
    }
}


function addBookToLibrary(title, author, pages, read)
{
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("Invisible Cities", "Italo Calvino", 229, true);
addBookToLibrary("Crime and Punishment", "F.Dostoyevsky", 504, false);


for (const book of myLibrary)
{
    console.log(book.info())
}
