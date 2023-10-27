document.addEventListener("DOMContentLoaded", function() {
    const productPreviews = document.querySelectorAll(".product-preview");

    productPreviews.forEach(productPreview => {
        const addToCartButton = productPreview.querySelector(".add-to-cart");

        addToCartButton.addEventListener("click", function() {
            const productId = this.getAttribute("data-id");
            const productName = productPreview.querySelector("h3").textContent;
            const productPrice = parseFloat(productPreview.querySelector(".price").textContent.replace('$', ''));
            const productImage = productPreview.querySelector(".product-image").src;

            // Create a product object
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
            };

            // Retrieve the current cart or initialize an empty one
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);

            // Store the updated cart in local storage
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});
