const myLibrary = [];

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = function()
    {
        return this.read ? "read." : "not read yet.";
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

function displayBooks() {
    const bookContainer = document.getElementById("bookContainer");

    // clear existing content
    bookContainer.innerHTML = "";

    for (const book of myLibrary) {
        // card element for each book
        const card = document.createElement("div");
        card.classList.add("book-card");

        // populate card with info
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.isRead()}</p>
        `;

        // add card to the bookContainer
        bookContainer.appendChild(card);
    }
}


// function that adds a book based on user input
function addBookPrompt() {
    const title = prompt("Enter title:");
    const author = prompt("Enter author:");
    const pages = parseInt(prompt("Enter pages:"));
    const read = confirm("Did you read this?");

    if(title && author && !isNaN(pages)) {
        addBookToLibrary(title, author, pages, read);
        displayBooks();
    }
    else {
        alert("Invalid input.");
    }
}

// display books when the page loads
window.addEventListener("load", displayBooks);


// event listener for the add button
document.getElementById("addBook").addEventListener("click", function() {
    addBookPrompt();
});
