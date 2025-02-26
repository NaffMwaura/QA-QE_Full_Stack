import { Book } from "./product.js";
import { addToCart } from "./cart.js";

const fetchData = async (): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3000/books");
    const bookData: Book[] = await response.json();
    sortBooks(bookData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();

const sortBooks = (data: Book[]): void => {
  const filterOption = document.getElementById("sort-year-or-pages") as HTMLSelectElement;
  const genreFilter = document.getElementById("genre") as HTMLSelectElement;
  const sortOrder = document.getElementById("sort-order") as HTMLSelectElement;

  const updateBooks = (): void => {
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

    document.querySelector(".data")!.innerHTML = filteredBooks
      .map(
        (book) =>
          `<p>📖 ${book.title} by ${book.author} - ${book.genre} (${book.pages} pages) - ${book.year}
          <img src="${book.image}">
          <button class="purchase-btn" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}">Purchase</button></p>`
      )
      .join("");
  };

  updateBooks();
  filterOption.addEventListener("change", updateBooks);
  genreFilter.addEventListener("change", updateBooks);
  sortOrder.addEventListener("change", updateBooks);
};

// Modal Handling
const modal = document.getElementById("myModal") as HTMLElement;
const btn = document.getElementById("myBtn") as HTMLElement;
const span = document.getElementsByClassName("close")[0] as HTMLElement;

btn.onclick = () => (modal.style.display = "block");
span.onclick = () => (modal.style.display = "none");

document.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  if (target && target.classList.contains("purchase-btn")) {
    const bookId = parseInt(target.getAttribute("data-id") || "0", 10);
    const bookTitle = target.getAttribute("data-title") || "";
    const bookPrice = parseFloat(target.getAttribute("data-price") || "0");
    addToCart(bookId, bookTitle, bookPrice);
  }
});
