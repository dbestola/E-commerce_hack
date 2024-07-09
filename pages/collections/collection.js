var desktopAddtoCart = document.getElementById('add-to-cart')
var mobileAddtoCart = document.getElementById('M_add-to-cart')


// var Products = [
//     {
//         "id" : 1,
//         "image" : "assets/images/Nigeria_iPhone_15_Plus_Web_Banner_400x.webp",
//         "name": "Product 1",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 2,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 3,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 4,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 5,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 6,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 7,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 8,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 9,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 10,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 11,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 12,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 13,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 14,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 15,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 16,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 17,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 18,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 19,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
//     {
//         "id" : 20,
//         "image" : "",
//         "name": "",
//         "price": "284.50",
//         "quantity": 1
//     },
// ]



var Products = [
    {
        "id": 1,
        "image": "/assets/images/Nigeria_iPhone_15_Plus_Web_Banner_400x.webp ",
        "name": "Apple IPhone 15 Plus",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id": 2,
        "image": "/assets/images/Nigeria_iPhone_15_Pro_Max_Web_Banner_400x.webp",
        "name": "Apple IPhone 15 Pro Max 256gb",
        "price": "300.00",
        "quantity": 1
    },
    {
        "id": 3,
        "image": "/assets/images/Nigeria_Apple_Watch_Ultra2_Banner_400x.webp",
        "name": "Apple IWatch Ultra 2",
        "price": "400.00",
        "quantity": 1
    },
    {
        "id": 4,
        "image": "/assets/images/Nigeria_iPhone_15_Pro_Max_Web_Banner_400x.webp",
        "name": "Apple IPhone 15 Pro Max 512gb",
        "price": "500.00",
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
        imgDiv.id = 'img';
        imgDiv.classList.add(`img${product.id}`);

        const anchor = document.createElement('a');
        anchor.href = `/pages/collections/collections.html?id=${product.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = product.image;
        imgElement.alt = product.name;

        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        productContainer.appendChild(imgDiv);
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
        const mobileProductDetails = document.getElementById('mobile-product-details');

        

        productDetails.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" class="img2">
            <h1 class="current-price">Price: $${product.price}</p>
           
            <h4 id="before-price"> <s>₦ 3,300,000</s></h4>
            <h4 id="discount-percent"> -42% </h4>

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


        if (window.innerWidth > 799) {
            productDetails.innerHTML = productHTML;
        } else {
            mobileProductDetails.innerHTML = productHTML;
        }

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
