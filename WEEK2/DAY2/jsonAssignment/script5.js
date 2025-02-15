fetch("http://localhost:3000/products")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const productList = document.getElementById("product-list");
        productList.innerHTML = ""; // Clear previous data before appending new ones

        data.forEach(product => {
            const listItem = document.createElement("li");

            // Create elements for better styling
            const title = document.createElement("p");
            title.className = "product-title";
            title.textContent = product.name;

            const price = document.createElement("p");
            price.className = "product-price";
            price.textContent = `Price: $${product.price.toFixed(2)}`;

            const stock = document.createElement("p");
            stock.className = "stock";
            stock.textContent = `Stock: ${product.stock}`;

            listItem.appendChild(title);
            listItem.appendChild(price);
            listItem.appendChild(stock);

            productList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
