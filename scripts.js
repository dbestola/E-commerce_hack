var Products = [
    {
        "id" : 1,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 2,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 3,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 4,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 5,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 6,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 7,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 8,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 9,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 10,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 11,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 12,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 13,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 14,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 15,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 16,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 17,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 18,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 19,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
    {
        "id" : 20,
        "image" : "",
        "name": "",
        "price": "284.50",
        "quantity": 1
    },
]

localStorage.setItem('products', JSON.stringify(Products) )

if(!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]")
}

// setting Global variables so that we can acces them from inside the functions

let products = JSON.parse(localStorage.getItem("products"))
let cart = JSON.parse(localStorage.getItem("cart"))


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
