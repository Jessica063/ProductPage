document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to display cart contents
    function displayCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p class="cart-item-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="remove-from-cart" data-id="${product.id}">Remove from Cart</button>
            `;
            cartItems.appendChild(item);
            total += product.price;
        });

        cartTotal.textContent = "$" + total.toFixed(2);

        // Add click event listeners to "Remove from Cart" buttons
        const removeButtons = document.querySelectorAll(".remove-from-cart");
        removeButtons.forEach(button => {
            button.addEventListener("click", removeFromCart);
        });
    }

    // Remove item from the cart and update the display
    function removeFromCart() {
        const productId = this.getAttribute("data-id");
        cart = cart.filter(product => product.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    // Display the cart on page load
    displayCart();
});
