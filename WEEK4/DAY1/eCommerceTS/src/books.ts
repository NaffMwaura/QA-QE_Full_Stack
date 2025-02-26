type  Book ={
    id: number;
    title: string;
    author: string;
    price:number
}

export const fetchData = async (): Promise<void> => {
    try {
        const response: Response = await fetch("http://localhost:3000/books");
        const books: Book[] = await response.json();

        const displayBooks: string = books.map((book: Book) => {
            return `
                <div class="book">
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p> price: ${book.price}</p>
                </div>
            `;
        }).join(""); // Convert array to string

        const bookListElement: HTMLElement | null = document.getElementById("product-list")
        if (bookListElement) {
            bookListElement.innerHTML = displayBooks;
        } else {
            console.error("Element with ID 'book-list' not found.");
        }
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

// Call the function to load books
fetchData();
