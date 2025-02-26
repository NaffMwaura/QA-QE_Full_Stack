
// Import the book data (from books.json)
import bookData from './books.json'; // Use .json extension

// Callback function to flag special books (Not used in current display logic, but kept for reference)
function flagSpecialBooks(book) {
    if (book.genre === "Dystopian") {
        return ` ${book.title} - Caution: Dystopian Future!`;
    }
    if (book.pages > 500) {
        return ` ${book.title} - Long Read (${book.pages} pages)`;
    }
    return ` ${book.title} by ${book.author} - ${book.genre} (${book.pages} pages)`;
}

// Format book data using .map() (Not used in current display logic, but kept for reference)
async function formatBookSummaries() {
    const formattedBooks = bookData.books.map(flagSpecialBooks); // Access books property
    console.log("Formatted Books:", formattedBooks);
}

formatBookSummaries();

// Filter and Sort books combined
async function fetchAndDisplayBooks() {
    const genreFilter = document.getElementById("genre").value;
    const sortBy = document.getElementById("sort-year-or-pages").value;
    const sortOrder = document.getElementById("sort-order").value;

    let books = bookData.books; // Access books property

    // Filter by genre
    if (genreFilter !== "All") { // Allow for an "All" option if desired
        books = books.filter(book => book.genre === genreFilter);
    }

    // Sort books
    books.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (sortOrder === "asc") {
            return aValue - bValue;
        } else {
            return bValue - aValue;
        }
    });

    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear previous results

    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("books");
        bookElement.innerHTML = `
            <img src="${books.image}" alt="${book.title}" width="100">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p>${book.description}</p>`;
        bookList.appendChild(bookElement);
    });

    let classicBooksShown = new Set();

    books.forEach(book => {
        if (book.year < 1900 && !classicBooksShown.has(book.id)) {
            setTimeout(() => {
                alert(`📢 This book is a classic: ${book.title}!`);
                classicBooksShown.add(book.id);
            }, 500);
        }
    });
}


// Attach event listeners to the select elements AFTER the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("genre").addEventListener("change", fetchAndDisplayBooks);
    document.getElementById("sort-year-or-pages").addEventListener("change", fetchAndDisplayBooks);
    document.getElementById("sort-order").addEventListener("change", fetchAndDisplayBooks);

    fetchAndDisplayBooks(); // Call initially to display books
});