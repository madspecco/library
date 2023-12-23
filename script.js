// initial code for creating the array and adding some books to it
const myLibrary = [];

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.isRead = function()
    {
        return this.read ? "Read" : "Not Read";
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

// functionalities

// function to display all the books from the array into cards
function displayBooks() {
    const bookContainer = document.getElementById("book-container");

    // clear existing content
    bookContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        // define book element
        const book = myLibrary[i];

        // card element for each book
        const card = document.createElement("div");
        card.classList.add("book-card");

        // create a button with an event listener for toggling read status
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = book.isRead();
        toggleBtn.style.backgroundColor = book.read ? '#7752FE' : '#190482';
        toggleBtn.style.color = '#C2D9FF';
        toggleBtn.addEventListener("click", function () {
            myLibrary[i].read = !myLibrary[i].read;
            toggleBtn.style.backgroundColor = myLibrary[i].read ? '#7752FE' : '#190482';
            displayBooks();
        });

        // create remove button with an event listener
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener("click", function () {
            // remove the book from the array
            myLibrary.splice(i, 1);
            bookContainer.removeChild(card);
            displayBooks();
        });

        // append extra elements to card
        card.appendChild(removeBtn);
        card.appendChild(toggleBtn);

        // create elements for book info
        const titleElement = document.createElement("h3");
        titleElement.textContent = book.title;

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;

        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;

        const statusElement = document.createElement("p");
        statusElement.textContent = "Status: ";

        // append toggleBtn to the paragraph inside the card
        statusElement.appendChild(toggleBtn);

        // append elements to card
        card.appendChild(removeBtn);
        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pagesElement);
        card.appendChild(statusElement);        
        

        // append toggleBtn to the paragraph inside the card
        card.querySelector("p:last-child").appendChild(toggleBtn);
        
        // add card to the bookContainer
        bookContainer.appendChild(card);
    }
}

// utility functions for the dialog
function openModal() {
    document.getElementById("modal-content").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal-content").style.display = "none";

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