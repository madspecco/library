// initial code for creating the array and adding some books to it
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


// functionalities

// function to display all the books from the array into cards
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

// utility functions for the dialog
function openModal() {
    document.getElementById("addBookDialog").style.display = "block";
}

function closeModal() {
    document.getElementById("addBookDialog").style.display = "none";
}

// function to add book from dialog
function addBookFromModal() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;

    if (title && author && !isNaN(pages)) {
        addBookToLibrary(title, author, pages, read);
        displayBooks();
        closeModal();
    } else {
        alert("Invalid input. Please enter valid information.");
    }
}


// display books when the page loads
window.addEventListener("load", displayBooks);


// event listener for the add button
document.getElementById("addBook").addEventListener("click", function() {
    openModal();
});
