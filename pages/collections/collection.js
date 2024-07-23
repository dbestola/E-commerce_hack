const nairaSymbol = '\u20A6'
var Products = [
    {
        "id": 1,
        "image": "../../assets/images/iphone/11/apple-iphone-11-pro-max-6.5-4gb-ram-64gb-rom-gold.jpg",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 2,
        "image": "../../assets/images/iphone/11/iphone-11-6.1-4gb-ram-64gb-rom-3110mah-purple-apple.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 3,
        "image": "../../assets/images/iphone/11/iphone-11-pro-max-4gb-ram-256gb-romios-4g-lte-midnight-green.jpg",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 4,
        "image": "../../assets/images/iphone/11/iphone-11-pro-max-6.5-4gb-ram-256gb-rom-space-gray-apple.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 5,
        "image": "../../assets/images/iphone/13/apple-iphone-13-pro-max-6.7-256gb-rom-6gb-ram-4352ma-silver.jpg",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 6,
        "image": "../../assets/images/iphone/13/iphone-13-pro-max-6.7-super-retina-xdr-display-with-promotion-6gb-ram-512gb-rom-ios-15-5g-facetime-gold.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 7,
        "image": "../../assets/images/iphone/13/iphone-13-pro-max-6.7-super-retina-xdr-display-with-promotion-6gb-ram-512gb-rom-ios-15-5g-facetime-sierra-blue-apple.jpg",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 8,
        "image": "../../assets/images/iphone/13/apple-iphone-13-pro-max-6.7-256gb-rom-6gb-ram-4352ma-silver.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 9,
        "image": "../../assets/images/iphone/14/apple-iphone-14-pro-max-6.7-128gb-rom-6gb-ram-nano-sim-black.jpg",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 10,
        "image": "../../assets/images/iphone/14/apple-iphone-14-pro-max-6.7-128gb-rom-6gb-ram-nano-sim-silver.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 11,
        "image": "../../assets/images/iphone/14/iphone-14-pro-max-6.7-6gb-ram-128gb-rom-deep-purple.jpg",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 12,
        "image": "../../assets/images/iphone/14/iphone-14-pro-max-6.7-256gb-dual-nano-sim-gold-apple.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 13,
        "image": "../../assets/images/iphone/15/apple-iphone-15-pro-128gb-nano-sim-natural-titanium-.jpg",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 14,
        "image": "../../assets/images/iphone/15/apple-iphone-15-pro-max-256gb-nano-sim-blue-titanium.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 15,
        "image": "../../assets/images/iphone/15/apple-iphone-15-pro-max-512gb-nano-sim-blue-titanium.jpg",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 16,
        "image": "../../assets/images/iphone/15/apple-iphone-15-pro-max-512gb-nano-sim-natural-titanium.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 17,
        "image": "../../assets/images/mac/apple-13.6-macbook-air-m2-midnight-8gb-512gb.jpg",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 18,
        "image": "../../assets/images/mac/2024 OSX SONOMA- 2018 MACBOOK AIR 13 - 1.6GHz i5 - 16GB RAM - 256GB SSD - GRAY.webp",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 19,
        "image": "../../assets/images/mac/apple-macbook-air-13-inch-2022-m2-8gb-256gb-ssd-8-core-gpu-space-gray.jpg",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 20,
        "image": "../../assets/images/mac/apple-macbook-pro-16.2-32gb-1tb-10-cores-m1-max-silver.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 21,
        "image": "../../assets/images/ipad/apple-ipad-9th-gen-10.2-wi-fi-cellular-256gb-space-grey.jpg",
        "name": "Apple IPad Pro 12 512gb (grey)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 22,
        "image": "../../assets/images/ipad/Apple-IPad-Pro-12.9-M2-2022 Model-Wi-Fi-Only-128GB-Silver.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 23,
        "image": "../../assets/images/ipad/apple-ipad-pro-12.9-m22022-modelwi-ficellular-512gb-space-gray.jpg",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 24,
        "image":"../../assets/images/ipad/apple-ipad-9th-gen-10.2-wi-fi-cellular-256gb-space-grey.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 25,
        "image": "../../assets/images/accessories/adapter/apple-30w-usb-c-power-adapter.webp",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 26,
        "image": "../../assets/images/accessories/adapter/apple-magsafe-2-power-adapter-60w.webp",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 27,
        "image": "../../assets/images/accessories/adapter/apple-magsafe-power-adapter-85w.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 28,
        "image": "../../assets/images/accessories/adapter/apple-magsafe-2-power-adapter-60w.webp",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 29,
        "image": "../../assets/images/accessories/airpod/airpods-3rd-gen.webp",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 30,
        "image": "../../assets/images/accessories/airpod/airpods-max-grey.webp",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 31,
        "image": "../../assets/images/accessories/airpod/airpods-with-charging-case-gen-2.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 32,
        "image": "../../assets/images/accessories/adapter/apple-30w-usb-c-power-adapter.webp",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 33,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-c-cable-2-m.webp",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 34,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-cable-1m-zml.webp",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 35,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-cable-2-m.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 36,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-c-cable-2-m.webp",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 37,
        "image": "../../assets/images/accessories/protection/apple-iphone-15-pro-max-finewoven-case-with-magsafe-taupe.webp",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 38,
        "image": "../../assets/images/accessories/protection/iphone-13-13-pro-tempered-glass-full-coverage-screen.webp",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 39,
        "image": "../../assets/images/accessories/protection/iphone-14-clear-case-with-magsafe.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 40,
        "image": "../../assets/images/accessories/protection/iphone-15-pro-max-clear-case-with-magsafe.webp",
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
        <div class="product-details-2">
           <div class="container-img">
              <img src="${product.image}" alt="${product.name}">
           </div>
           <div class="product-name">
               <h2>${product.name}</h2>
             <div class='pricelist'>
               <h4 style='font-weight: 600;' class="current-price">Price:${nairaSymbol}${product.price}</h4>
               <h4 id="before-price">Before:<s>${nairaSymbol}${product.beforeprice}</s></h6>
               <h6 style='background-color: rgba(255, 192, 203, 0.582); width: fit-content; margin: 0;' id="discount-percent">Discount: ${product.discountprice}</h6>
             </div>
              <button id="add-to-cart">
                <div class="cart-icon">
                    <a href="#">
                        <img src="../../assets/icons/shopping-cart.svg" alt="">
                    </a>
                </div>
                Add to Cart
              </button>

              <div class="row">
                <div class="col-3">
                    <span><i class="fa-solid fa-star" style="color: #f5b400;"></i></span>
                    <span><i class="fa-solid fa-star" style="color: #f5b400;"></i></span>
                    <span><i class="fa-solid fa-star" style="color: #f5b400;"></i></span>
                    <span><i class="fa-solid fa-star" style="color: #f5b400;"></i></span>
                    <span><i class="fa-solid fa-star" style="color: #f5b400;"></i></span>
                </div>
                <span>(verified rating)</span>
            </div>

               <div class="horizontal-line"></div>
               <div class="horizontal-line2"></div>
               <div class="horizontal-line3"></div>
               <div class="horizontal-line4"></div>
           </div>
        
        </div>
            <h4 id="share-product">SHARE THIS PRODUCT</h4>

            <div id="social-media-share">
            <img id="twitter-share" src="../../assets/icons/kisspng-social-media-computer-icons-tulane-university-face-drawing-vector-twitter-5ab02d6b50a397.8866567515214954033303.PNG" alt="twitter" width="40px" height="40px">
            <img id="facebook-share" src="../../assets/icons/facebook-icon.png" alt="facebook" width="40px" height="40px">
            <img id="linkedin-share" src="../../assets/icons/kisspng-linkedin-logo-computer-icons-business-symbol-linkedin-icon-5ab1765660baa8.1191823015215796063962.PNG" alt="linkedin" width="40px" height="40px">
            </div>
            
            <p class='product-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat.</p>
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
  const searchButton = document.getElementById('search-button');
    const searchResults = document.createElement('div')
    searchResults.className = 'handleSearchResults'
  
  
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
                document.body.appendChild(searchResults)
            });
        } else {
            searchResults.innerHTML = '<p>No products found.</p>';
        }
    }
  
    // Event listener for the search button
    searchButton.addEventListener('click', function() {
      const query = searchInput.value;
      searchProducts(query);
  });
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Your existing code here...

    // Function to share on social media
    function shareOnSocialMedia(platform) {
        const url = window.location.href;
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
                break;
        }

        window.open(shareUrl, '_blank');
    }

    // Add event listeners to social media icons
    document.getElementById('facebook-share').addEventListener('click', function() {
        shareOnSocialMedia('facebook');
    });
    document.getElementById('twitter-share').addEventListener('click', function() {
        shareOnSocialMedia('twitter');
    });
    document.getElementById('linkedin-share').addEventListener('click', function() {
        shareOnSocialMedia('linkedin');
    });
});