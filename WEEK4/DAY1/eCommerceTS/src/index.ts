// Define Book and CartItem interfaces
interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    publisher: string;
    description: string;
    image: string;
    price: number;
  }
  
  interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }
  
  let cart: CartItem[] = [];
  
  const API_BASE_URL = window.location.hostname.includes("localhost")
    ? "http://localhost:3000"
    : "http://172.16.112.219:3000";
  
  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3000/books`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const bookData: Book[] = await response.json();
      sortBooks(bookData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  // Add book to cart
  const addToCart = (bookId: number, bookTitle: string, bookPrice: number): void => {
    const bookInCart = cart.find((book) => book.id === bookId);
    if (bookInCart) {
      bookInCart.quantity += 1;
    } else {
      cart.push({ id: bookId, title: bookTitle, price: bookPrice, quantity: 1 });
    }
    updateCart();
  };
  
  // Remove book from cart
  const removeFromCart = (bookId: number): void => {
    const bookInCart = cart.find((book) => book.id === bookId);
    if (bookInCart) {
      if (bookInCart.quantity > 1) {
        bookInCart.quantity -= 1;
      } else {
        cart = cart.filter((book) => book.id !== bookId);
      }
    }
    updateCart();
  };
  
  // Delete book from cart
  const deleteFromCart = (bookId: number): void => {
    cart = cart.filter((book) => book.id !== bookId);
    updateCart();
  };
  
  // Update cart UI
  const updateCart = (): void => {
    const cartButton = document.getElementById("items-in-cart") as HTMLElement;
    const cartItemsDiv = document.getElementById("cart-items") as HTMLElement;
    const totalPriceElement = document.getElementById("total-price") as HTMLElement;
  
    const totalItems = cart.reduce((total, book) => total + book.quantity, 0);
    cartButton.innerText = totalItems.toString();
  
    if (totalItems === 0) {
      cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartItemsDiv.innerHTML = cart
        .map(
          (book) =>
            `<div>
              <p>${book.title} - $${book.price} : <span id="quantity-${book.id}">${book.quantity}</span></p>
              <button onclick="addToCart(${book.id}, '${book.title}', ${book.price})">Add</button>
              <button onclick="removeFromCart(${book.id})">Remove</button>
              <button onclick="deleteFromCart(${book.id})">Delete</button>
            </div>`
        )
        .join("");
    }
  
    const totalPrice = cart.reduce((total, book) => total + book.price * book.quantity, 0);
    totalPriceElement.innerText = totalPrice.toFixed(2);
  };
  
  // Sorting books
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
  
      filteredBooks.sort((book1, book2) => {
        let comparison = selectedSort === "Pages" ? book1.pages - book2.pages : book1.year - book2.year;
        return selectedOrder === "Descending" ? -comparison : comparison;
      });
  
      const dataDiv = document.querySelector(".data") as HTMLElement | null;
      if (dataDiv) {
        dataDiv.innerHTML = filteredBooks
          .map(
            (book) =>
              `<p>📖 ${book.title} by ${book.author} - ${book.genre} (${book.pages} pages) - ${book.year}
              <img src="${book.image}">
              <button class="purchase-btn" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}">Purchase</button></p>`
          )
          .join("");
      }
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
  