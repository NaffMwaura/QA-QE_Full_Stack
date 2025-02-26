var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addToCart } from "./cart";
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("http://localhost:3000/books");
        const bookData = yield response.json();
        sortBooks(bookData);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
});
fetchData();
const sortBooks = (data) => {
    const filterOption = document.getElementById("sort-year-or-pages");
    const genreFilter = document.getElementById("genre");
    const sortOrder = document.getElementById("sort-order");
    const updateBooks = () => {
        const selectedSort = filterOption.value;
        const selectedGenre = genreFilter.value;
        const selectedOrder = sortOrder.value;
        let filteredBooks = [...data];
        if (selectedGenre !== "All" && selectedGenre) {
            filteredBooks = filteredBooks.filter((book) => book.genre === selectedGenre);
        }
        filteredBooks = filteredBooks.sort((book1, book2) => {
            let comparison = selectedSort === "Pages" ? book1.pages - book2.pages : book1.year - book2.year;
            return selectedOrder === "Descending" ? -comparison : comparison;
        });
        document.querySelector(".data").innerHTML = filteredBooks
            .map((book) => `<p>📖 ${book.title} by ${book.author} - ${book.genre} (${book.pages} pages) - ${book.year}
          <img src="${book.image}">
          <button class="purchase-btn" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}">Purchase</button></p>`)
            .join("");
    };
    updateBooks();
    filterOption.addEventListener("change", updateBooks);
    genreFilter.addEventListener("change", updateBooks);
    sortOrder.addEventListener("change", updateBooks);
};
// Modal Handling
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = () => (modal.style.display = "block");
span.onclick = () => (modal.style.display = "none");
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("purchase-btn")) {
        const bookId = parseInt(target.getAttribute("data-id") || "0", 10);
        const bookTitle = target.getAttribute("data-title") || "";
        const bookPrice = parseFloat(target.getAttribute("data-price") || "0");
        addToCart(bookId, bookTitle, bookPrice);
    }
});
