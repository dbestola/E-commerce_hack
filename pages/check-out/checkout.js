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
                <p> Quantity: ${item.quantity} </p>
                <hr/>
                 <p> Unit Price ₦ ${item.price}</p>
                <hr/>
               <p> Set Price: ${nairasymbol} ${itemTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                
            `;

            cartItemsContainer.appendChild(itemRow);
        });

       const totalAmount = cartTotalElement.innerHTML = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       localStorage.setItem('totalAmount', totalAmount);
        
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
          const customerCountry = document.getElementById('country').value;
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
            makePayment();
        } else if (selectedPaymentMethod === 'delivery') {
            // Handle pay on delivery option
            handlePayOnDelivery(customerName, customerEmail, customerAddress, customerCountry, customerState, customerCity, customerPhone, customerAlternatePhone);
        }

        
    });



});

const paystackPublicKey = 'pk_test_75c72b15bb57b4cc03f594976fab92cb685fcc6f';

function generateTransactionReference() {
    const timestamp = new Date().getTime(); // Current timestamp in milliseconds
    const randomNumber = Math.floor(Math.random() * 1000000); // Random number between 0 and 999999
    return `TX-${timestamp}-${randomNumber}`;
}

 const customerEmail = localStorage.getItem('userEmail');
 const storedAmount = localStorage.getItem('totalAmount').replace(/,/g, ''); 
 const customerAmount = parseInt(storedAmount, 10) * 100; // Amount in kobo (10000 kobo = 100 NGN)
 const customerName = localStorage.getItem('customerName');
 const customerPhone = localStorage.getItem('customerPhone');
 const customerReference = generateTransactionReference(); 


function makePayment() {
    const handler = PaystackPop.setup({
        key: paystackPublicKey,
        email: customerEmail,
        amount: customerAmount,
        currency: 'NGN',
        ref: customerReference,
        metadata: {
            custom_fields: [
                {
                    display_name: "Customer Name",
                    variable_name: "customer_name",
                    value: customerName
                },
                {
                    display_name: "Phone Number",
                    variable_name: "customer_phone",
                    value: customerPhone
                }
            ]
        },
        callback: function(response) {
            // This function is called when the payment is successful
            alert('Payment successful! Transaction reference: ' + response.reference);
            
            // You can redirect the user to a confirmation page or do something else here
            console.log(response);
        },
        onClose: function() {
            // This function is called when the user closes the payment modal without completing the payment
            alert('Payment process was not completed.');
        }
    });
    
    // Open the Paystack payment modal
    handler.openIframe();

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

// fuction that create orders and save orders to local storage
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


