let cart = [];
export const addToCart = (bookId, bookTitle, bookPrice) => {
    const bookInCart = cart.find((book) => book.id === bookId);
    if (bookInCart) {
        bookInCart.quantity += 1;
    }
    else {
        cart.push({ id: bookId, title: bookTitle, price: bookPrice, quantity: 1 });
    }
    updateCart();
};
export const removeFromCart = (bookId) => {
    const bookInCart = cart.find((book) => book.id === bookId);
    if (bookInCart && bookInCart.quantity > 1) {
        bookInCart.quantity -= 1;
    }
    else if (bookInCart) {
        cart = cart.filter((book) => book.id !== bookId);
    }
    updateCart();
};
export const deleteFromCart = (bookId) => {
    cart = cart.filter((book) => book.id !== bookId);
    updateCart();
};
export const updateCart = () => {
    const cartButton = document.getElementById("items-in-cart");
    const cartItemsDiv = document.getElementById("cart-items");
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
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
};
