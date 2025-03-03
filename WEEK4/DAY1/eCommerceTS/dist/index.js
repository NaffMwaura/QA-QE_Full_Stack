"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let cart = [];
const API_BASE_URL = window.location.hostname.includes("localhost")
    ? "http://localhost:3000"
    : "http://172.16.112.219:3000";
// Fetch book data from API
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${API_BASE_URL}/books`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const bookData = yield response.json();
        sortBooks(bookData);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
});
// Add book to cart
const addToCart = (bookId, bookTitle, bookPrice) => {
    const bookInCart = cart.find((book) => book.id === bookId);
    if (bookInCart) {
        bookInCart.quantity += 1;
    }
    else {
        cart.push({ id: bookId, title: bookTitle, price: bookPrice, quantity: 1 });
    }
    updateCart();
};
// Remove book from cart
const removeFromCart = (bookId) => {
    const bookInCart = cart.find((book) => book.id === bookId);
    if (bookInCart) {
        if (bookInCart.quantity > 1) {
            bookInCart.quantity -= 1;
        }
        else {
            cart = cart.filter((book) => book.id !== bookId);
        }
    }
    updateCart();
};
// Delete book from cart
const deleteFromCart = (bookId) => {
    cart = cart.filter((book) => book.id !== bookId);
    updateCart();
};
// Update cart UI
const updateCart = () => {
    const cartButton = document.getElementById("items-in-cart");
    const cartItemsDiv = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const totalItems = cart.reduce((total, book) => total + book.quantity, 0);
    cartButton.innerText = totalItems.toString();
    if (totalItems === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    }
    else {
        cartItemsDiv.innerHTML = cart
            .map((book) => `<div>
              <p>${book.title} - $${book.price} : <span id="quantity-${book.id}">${book.quantity}</span></p>
              <button onclick="addToCart(${book.id}, '${book.title}', ${book.price})">Add</button>
              <button onclick="removeFromCart(${book.id})">Remove</button>
              <button onclick="deleteFromCart(${book.id})">Delete</button>
            </div>`)
            .join("");
    }
    const totalPrice = cart.reduce((total, book) => total + book.price * book.quantity, 0);
    totalPriceElement.innerText = totalPrice.toFixed(2);
};
// Sorting books
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
        filteredBooks.sort((book1, book2) => {
            let comparison = selectedSort === "Pages" ? book1.pages - book2.pages : book1.year - book2.year;
            return selectedOrder === "Descending" ? -comparison : comparison;
        });
        const dataDiv = document.querySelector(".data");
        if (dataDiv) {
            dataDiv.innerHTML = filteredBooks
                .map((book) => `<p>📖 ${book.title} by ${book.author} - ${book.genre} (${book.pages} pages) - ${book.year}
              <img src="${book.image}">
              <button class="purchase-btn" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}">Purchase</button></p>`)
                .join("");
        }
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
// Add cart modal to the page
const cartModalHTML = `
    <div id="cart-items">
      <!-- Cart items will be displayed here -->
    </div>
    <div>
      <p>Total: $<span id="total-price">0.00</span></p>
    </div>
  `;
if (!document.getElementById("cart-modal")) {
    const modalDiv = document.createElement("div");
    modalDiv.setAttribute("id", "cart-modal");
    modalDiv.innerHTML = cartModalHTML;
    document.body.appendChild(modalDiv);
}
// Load Data on Page Load
window.onload = () => fetchData();
//# sourceMappingURL=index.js.map