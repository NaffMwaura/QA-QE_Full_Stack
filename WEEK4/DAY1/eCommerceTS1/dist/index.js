import { products } from "./products";
import { addToCart } from "./cart";
const productList = document.querySelector(".data");
products.forEach((product) => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="150">
        <h2>${product.title}</h2>
        <p>Author: ${product.author}</p>
        <p>Price: $${product.price}</p>
        <button class="purchase-btn" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(item);
});
document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".purchase-btn")) {
        const button = target;
        const productId = parseInt(button.dataset.id || "0");
        addToCart(productId);
    }
});
//# sourceMappingURL=index.js.map