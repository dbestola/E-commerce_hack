var desktopAddtoCart = document.getElementById('add-to-cart')
var mobileAddtoCart = document.getElementById('M_add-to-cart')
const naira = '\u20A6'

var Products = [
    {
        "id": 1,
        "image": "assets/images/ipad/apple-ipad-pro-12.9-m22022-modelwi-ficellular-512gb-space-gray.jpg",
        "name": "Apple IPad Pro 12 512gb (grey)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 2,
        "image": "assets/images/iphone/15/apple-iphone-15-pro-max-256gb-nano-sim-blue-titanium.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 3,
        "image": "assets/images/accessories/protection/apple-iphone-15-pro-max-finewoven-case-with-magsafe-taupe.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "400.00",
        "beforeprice": "330.70",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 4,
        "image": "assets/images/mac/apple-macbook-pro-16.2-32gb-1tb-10-cores-m1-max-silver.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "500.00",
        "beforeprice": "330.70",
        "discountprice": "10%",
        "quantity": 1
    }
];

// setting Global variables so that we can acces them from inside the functions
localStorage.setItem('products', JSON.stringify(Products) )

if(!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]")
}


let products = JSON.parse(localStorage.getItem("products"))
let cart = JSON.parse(localStorage.getItem("cart"))


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


    // Rest of your code to render product details

    if (product) {
        const productDetails = document.getElementById('product-details');

        

        productDetails.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" class="img2">
            <h1 class="current-price">Price: $${product.price}</p>
           
            <h4 id="before-price"> <s> $${product.beforeprice}</s></h4>
            <h4 id="discount-percent"> ${product.discountprice}  </h4>

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
             <div class="cart-icon" >    
            <a href="#">
                <img src="/assets/icons/shopping-cart.svg" alt="">
            </a>
            </div>

            Add to Cart</button>


            <div class="horizontal-line"></div>     
            <div class="horizontal-line2"></div>     
            <div class="horizontal-line3"></div>     
            <div class="horizontal-line4"></div>  
            
            
            <h4 id="share-product">SHARE THIS PRODUCT</h4>

    <img id="twitter-icon" src="/assets/icons/kisspng-social-media-computer-icons-tulane-university-face-drawing-vector-twitter-5ab02d6b50a397.8866567515214954033303.PNG" alt="twitter" width="40px" height="40px">
    <img id="linkedin-icon" src="/assets/icons/kisspng-linkedin-logo-computer-icons-business-symbol-linkedin-icon-5ab1765660baa8.1191823015215796063962.PNG" alt="linkedin"  width="40px" height="40px">
    <img id="facebook-icon" src="/assets/icons/kisspng-social-media-computer-icons-clip-art-social-icons-5ac4e895b64846.5816704315228540377466.PNG" alt="facebook"  width="40px" height="40px">

    
        `;

        document.getElementById('add-to-cart').addEventListener('click', () => {
            // Implement add to cart functionality here
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


// adding the product in the cart

function addItemToCart(productId) {

    let product = products.find(function (product) {  
        return product.id == productId;   
    });

    if (cart.length == 0) {
        cart.push(product);
    }
    else {
        let res = cart.find(element => element.id == productId)
        if (res === undefined){
            cart.push(product);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

  
}

desktopAddtoCart.addEventListener('click', addItemToCart)
mobileAddtoCart.addEventListener('click', addItemToCart)

// productId
// addItemToCart(12);
// addItemToCart(1);
// addItemToCart(2);

// removing a product from the cart

function removeItemFromCart(productId) {
     let temp = cart.filter(item => item.id != productId);
     localStorage.setItem("cart", JSON.stringify(temp));
}

// removeItemFromCart(12)

 function updateQuantity(productId, quantity) {
     for (let product of cart) {
        if (product.id == productId) {
            product.quantity = quantity;
        }
     }

     localStorage.setItem("cart", JSON.stringify(cart));
 }

//  updateQuantity (2, 8);
//  updateQuantity (1, 4);

function getTotal () {
    let temp = cart.map(function(item){
        return parseFloat(item.price);
    });

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    // console.log(sum);
}

getTotal ()