import { products } from "./products";
let cart = [];
export const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product)
        return;
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    }
    else {
        //cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
};
export const removeFromCart = (productId) => {
    const itemIndex = cart.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        }
        else {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
};
export const deleteFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId);
    updateCartUI();
};
const updateCartUI = () => {
    const cartContainer = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const itemsInCart = document.getElementById("items-in-cart");
    cartContainer.innerHTML = cart
        .map((item) => `
        <div class="cart-item">
            <p>${item.title} - $${item.price} x ${item.quantity}</p>
            <button class="remove-btn" data-id="${item.id}">➖</button>
            <button class="delete-btn" data-id="${item.id}">❌</button>
        </div>`)
        .join("");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.innerText = total.toFixed(2);
    itemsInCart.innerText = cart.reduce((sum, item) => sum + item.quantity, 0).toString();
};
document.addEventListener("click", (event) => {
    const target = event.target;
    console.log("Clicked:", target);
    if (target.matches(".remove-btn")) {
        removeFromCart(parseInt(target.dataset.id || "0"));
    }
    if (target.matches(".delete-btn")) {
        deleteFromCart(parseInt(target.dataset.id || "0"));
    }
});
//# sourceMappingURL=cart.js.map