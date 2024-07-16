document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Call renderCart on page load to display items in the cart
    renderCart();

    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = parseFloat(item.price) * item.quantity;
            total += itemTotal;

            const itemRow = document.createElement('tr');
            itemRow.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </td>
            `;

            cartItemsContainer.appendChild(itemRow);
        });

        cartTotalElement.textContent = total.toFixed(2);

        // Add event listeners for quantity changes and remove buttons
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (event) => {
                const productId = parseInt(event.target.getAttribute('data-id'));
                const newQuantity = parseInt(event.target.value);
                updateQuantity(productId, newQuantity);
            });
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.getAttribute('data-id'));
                removeItemFromCart(productId);
            });
        });
    }

    function addItemToCart(productId) {
        let product = products.find(product => product.id == productId);

        if (product) {
            let cartItem = cart.find(item => item.id == productId);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
            updateItemCount();
        }
    }

    function removeItemFromCart(productId) {
        cart = cart.filter(item => item.id != productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        updateItemCount();
    }

    function updateQuantity(productId, quantity) {
        for (let product of cart) {
            if (product.id == productId) {
                product.quantity = quantity;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        updateItemCount();
    }

    function getTotal() {
        let total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
        return total.toFixed(2);
    }

    // Function to update the item count in the circle
    function updateItemCount() {
        const itemCountCircle = document.getElementById('item-count-circle');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        itemCountCircle.textContent = itemCount;
    }

    // Call the function on page load to set the initial count
    updateItemCount();


    
       // Checkout functionality
       document.getElementById('clearcart-button').addEventListener('click', () => {
        checkout();
    });

    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Clear the cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();

        alert("Your Cart is Cleared Successfully!");
    }



    // // Checkout functionality
    // document.getElementById('checkout-button').addEventListener('click', () => {
    //     checkout();
    // });

    // function checkout() {
    //     if (cart.length === 0) {
    //         alert("Your cart is empty!");
    //         return;
    //     }

    //     const order = {
    //         items: cart,
    //         total: getTotal(),
    //         date: new Date().toISOString()
    //     };

    //     // Save the order to localStorage (for demonstration purposes)
    //     let orders = JSON.parse(localStorage.getItem('orders')) || [];
    //     orders.push(order);
    //     localStorage.setItem('orders', JSON.stringify(orders));

    //     // Clear the cart
    //     cart = [];
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     renderCart();

    //     alert("Thank you for your purchase!");
    // }
});







