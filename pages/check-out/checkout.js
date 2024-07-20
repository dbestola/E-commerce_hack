const nairasymbol = '\u20A6'

document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Call renderCart on page load to display items in the cart
    renderCartsummary();

    function renderCartsummary() {
        const cartItemsContainer = document.getElementById('shoppingcart-items');
        const cartTotalElement = document.getElementById('cart-total');
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotalRaw = (item.price).replace(/,/g, ''); // remove commas to aid summation
            const itemTotal = parseInt(itemTotalRaw, 10) * item.quantity;
            total += itemTotal;

            const itemRow = document.createElement('div');
            itemRow.className = 'handleDivStyling';
            itemRow.innerHTML = `
                <p> <img src='${item.image}' width='40px'> ${item.name}</p>
                <hr/>
                <p> Price ₦ ${item.price}</p>
                <hr/>
                <p> Quantity: ${item.quantity} </p>
                <hr/>
               <p> Sub Total: ${nairasymbol} ${itemTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                
            `;

            cartItemsContainer.appendChild(itemRow);
        });

        cartTotalElement.innerHTML = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
    }

    // Function to update the item count in the checkout Summary
    function updateItemCount() {
        const CartitemCount = document.getElementById('cart-numberofitems');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        CartitemCount.textContent = itemCount;
    }
     updateItemCount();


    // Checkout functionality
    document.getElementById('form').addEventListener('submit', function(event) {

        const sellerInfo = document.getElementById('seller-info');

        event.preventDefault(); // Prevent the form from submitting normally

         // Check if user is logged in
         const userEmail = localStorage.getItem('userEmail');
         if (!userEmail) {
             alert('Please log in to proceed with the checkout.');
             window.location.href = '/member_area/mLogin.html'; // Redirect to login page
             return;
         }

          // Process the customer details
          const customerName = document.getElementById('name').value.trim();
          const customerAddress = document.getElementById('address').value.trim();
          const customerCountry = document.getElementById('country').value.trim();
          const customerState = document.getElementById('state').value.trim();
          const customerCity = document.getElementById('city').value.trim();
          const customerPhone = document.getElementById('phone').value.trim();
          const customerAlternatePhone = document.getElementById('altPhone').value.trim();

          // Check if all required form fields are filled
          if (!customerName || !customerAddress || !customerCountry || !customerState || !customerCity || !customerPhone || !customerAlternatePhone) {
              alert('Please fill out all required fields.');
              return;
          }
        
        // Retrieve the selected payment method from localStorage
        const selectedPaymentMethod = localStorage.getItem('paymentMethod');

        // Store customer details in localStorage
        localStorage.setItem('customerName', customerName);
        localStorage.setItem('customerAddress', customerAddress);
        localStorage.setItem('customerCountry', customerCountry);
        localStorage.setItem('customerState', customerState);
        localStorage.setItem('customerCity', customerCity);
        localStorage.setItem('customerPhone', customerPhone);
        localStorage.setItem('customerAlternatePhone', customerAlternatePhone);

        // Retrieve customer Email from localStorage
        const customerEmail = localStorage.getItem('userEmail')

        // Depending on the selected payment method, route accordingly
        if (selectedPaymentMethod === 'card') {
            // Redirect to Flutterwave payment platform
            makePayment(totalAmount );
        } else if (selectedPaymentMethod === 'delivery') {
            // Handle pay on delivery option
            handlePayOnDelivery(customerName, customerEmail, customerAddress, customerCountry, customerState, customerCity, customerPhone, customerAlternatePhone);
        }

        
    });



});


function makePayment(amount, customerName,phone_number, email) {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
        tx_ref: "txref-DI0NzMx13",
        amount: amount,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        meta: {
            source: "docs-inline-test",
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "test@mailinator.com",
            phone_number: "08100000000",
            name: "Ayomide Jimi-Oni",
        },
        customizations: {
            title: "Flutterwave Developers",
            description: "Test Payment",
            logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
        },
        callback: function (data) {
            console.log("payment callback:", data);
        },
        onclose: function () {
            console.log("Payment cancelled!");
        }
    });
}

 // Function to handle Pay on Delivery option
 function handlePayOnDelivery(name, email, address, country, state, city, phone, alternatePhone) {
    const orderDetails = {
        orderId: Date.now(), // Unique order ID
        customerName: name,
        customerEmail: email,
        customerAddress: address,
        customerCountry: country,
        customerState: state,
        customerCity: city,
        customerPhone: phone,
        customerAlternatePhone: alternatePhone,
        paymentMethod: 'Pay on Delivery',
        cart: getCartItems() // Get items from the cart
    };
    saveOrderLocally(orderDetails);
    localStorage.setItem('currentOrderId', orderDetails.orderId); // Save current order ID

    // clearCart();

    window.location.href = 'confirmation.html'; // Redirect to confirmation page
}

function saveOrderLocally(orderDetails) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// function clearCart() {
//     localStorage.removeItem('cart')
// }


