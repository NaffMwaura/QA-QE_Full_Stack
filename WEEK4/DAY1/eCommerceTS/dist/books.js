var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("http://localhost:3000/books");
        const books = yield response.json();
        const displayBooks = books.map((book) => {
            return `
                <div class="book">
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p> price: ${book.price}</p>
                </div>
            `;
        }).join(""); // Convert array to string
        const bookListElement = document.getElementById("product-list");
        if (bookListElement) {
            bookListElement.innerHTML = displayBooks;
        }
        else {
            console.error("Element with ID 'book-list' not found.");
        }
    }
    catch (error) {
        console.error("Error fetching books:", error);
    }
});
// Call the function to load books
fetchData();
//# sourceMappingURL=books.js.map