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


const someBook = new Book('The Best Book', "Yours Truly", 69, true);
console.log(someBook.info());
