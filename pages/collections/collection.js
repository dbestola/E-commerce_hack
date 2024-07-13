
var Products = [
    {
        "id": 1,
        "image": "/assets/images/ipad/apple-ipad-pro-12.9-m22022-modelwi-ficellular-512gb-space-gray.jpg",
        "name": "Apple IPad Pro 12 512gb (grey)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 2,
        "image": "/assets/images/iphone/15/apple-iphone-15-pro-max-256gb-nano-sim-blue-titanium.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 3,
        "image": "/assets/images/accessories/protection/apple-iphone-15-pro-max-finewoven-case-with-magsafe-taupe.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 4,
        "image": "/assets/images/mac/apple-macbook-pro-16.2-32gb-1tb-10-cores-m1-max-silver.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    }
];

// Setting Global variables so that we can access them from inside the functions
localStorage.setItem('products', JSON.stringify(Products));

if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
}

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    Products.forEach(product => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img')
        imgDiv.id = `img${product.id}`

        const anchor = document.createElement('a');
        anchor.href = `/pages/collections/collections.html?id=${product.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = product.image;
        imgElement.alt = product.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = product.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${naira}${product.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${naira}${product.beforeprice}</s>`

        productContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});

// Function to render product details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    // Ensure productId is obtained correctly
    console.log('Product ID:', productId);

    // Find the product by id
    const product = Products.find(p => p.id === productId);

    // Check if product is found
    console.log('Found Product:', product);

    if (product) {
        const productDetails = document.getElementById('product-details');

        productDetails.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" class="img2">
            <h1 class="current-price">Price: $${product.price}</h1>
            <h4 id="before-price"><s>$${product.beforeprice}</s></h4>
            <h4 id="discount-percent">${product.discountprice}</h4>
            <div class="row">
                <div class="col-3">
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span>(verified rating)</span>
                </div>
            </div>
            <button id="add-to-cart">
                <div class="cart-icon">
                    <a href="#">
                        <img src="/assets/icons/shopping-cart.svg" alt="">
                    </a>
                </div>
                Add to Cart
            </button>
            <div class="horizontal-line"></div>
            <div class="horizontal-line2"></div>
            <div class="horizontal-line3"></div>
            <div class="horizontal-line4"></div>
            <h4 id="share-product">SHARE THIS PRODUCT</h4>
            <img id="twitter-icon" src="/assets/icons/kisspng-social-media-computer-icons-tulane-university-face-drawing-vector-twitter-5ab02d6b50a397.8866567515214954033303.PNG" alt="twitter" width="40px" height="40px">
            <img id="linkedin-icon" src="/assets/icons/kisspng-linkedin-logo-computer-icons-business-symbol-linkedin-icon-5ab1765660baa8.1191823015215796063962.PNG" alt="linkedin" width="40px" height="40px">
            <img id="facebook-icon" src="/assets/icons/kisspng-social-media-computer-icons-clip-art-social-icons-5ac4e895b64846.5816704315228540377466.PNG" alt="facebook" width="40px" height="40px">
        `;







        document.getElementById('add-to-cart').addEventListener('click', () => {
            // Implement add to cart functionality here
            addItemToCart(productId);
           
            alert(`${product.name} added to cart!`);
           
        });
    } else {
        const notFoundHTML = '<p>Product not found.</p>';
        if (window.innerWidth > 799) {
            document.getElementById('product-details').innerHTML = notFoundHTML;
        } else {
            document.getElementById('mobile-product-details').innerHTML = notFoundHTML;
        }
    }
});

// Function to add item to cart
function addItemToCart(productId) {
    let product = products.find(function (product) {
        return product.id == productId;
    });

    if (product) {
        let cartItem = cart.find(item => item.id == productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateItemCount();  // Update item count after adding to cart
    }
}


// Function to update the item count in the circle
function updateItemCount() {
    const itemCountCircle = document.getElementById('item-count-circle');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    itemCountCircle.textContent = itemCount;
}

// Call the function on page load to set the initial count
document.addEventListener('DOMContentLoaded', updateItemCount);



document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        searchProducts(query);
    });

    function searchProducts(query) {
        // Clear previous results
        searchResults.innerHTML = '';

        // Filter products based on the query
        const filteredProducts = Products.filter(product => product.name.toLowerCase().includes(query));

        // Display the filtered products
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('search-result-item');
                productDiv.innerHTML = `
                    <a href="/pages/collections/collections.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <span>${product.name}</span>
                    </a>
                `;
                searchResults.appendChild(productDiv);
            });
        } else {
            searchResults.innerHTML = '<p>No products found.</p>';
        }
    }
});
