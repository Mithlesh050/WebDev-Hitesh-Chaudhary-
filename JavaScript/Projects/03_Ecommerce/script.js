document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "product 1", price: 34.2 },
        { id: 2, name: "product 2", price: 44.2 },
        { id: 3, name: "product 3", price: 24.2 },
    ];

    const cart = [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");// from css
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
           <button data-id="${product.id}">Add to cart</button>
           ` ;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;
        if (cart.length>0) {
            emptyCartMsg.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((item, index) => {
                total += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(cartItem);
                totalPrice.textContent = `${total.toFixed(2)}`;
            });
        }
        else {
            emptyCartMsg.classList.remove("hidden");
            totalPrice.textContent = "$0.00";
        }
    }

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout Successfully");
        renderCart();
    });

});