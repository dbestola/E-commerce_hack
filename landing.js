// navbar logic
document.addEventListener("DOMContentLoaded", function() {
    var icon1 = document.getElementById("toggle1");
    var icon2 = document.getElementById("toggle2");
    const arrowDowns = document.querySelectorAll(".arrow-down i");
    

    icon1.addEventListener("click", function() {
      icon1.style.display = "none";
      document.querySelector('.carousel').style.display = 'none'
      document.querySelector('.mini-catalogue').style.display = 'none';

      document.querySelector('.nav-links2').style.display = 'block'
      icon2.style.display = "block";
    });
  
    icon2.addEventListener("click", function() {
      icon2.style.display = "none"
      document.querySelector('.nav-links2').style.display = 'none';

      icon1.style.display = "block"
      document.querySelector('.carousel').style.display = 'block'
      document.querySelector('.mini-catalogue').style.display = 'block';
    });

    arrowDowns.forEach(arrowDown => {
      arrowDown.addEventListener('click', function() {
        arrowDown.classList.toggle('fa-angle-down');
        arrowDown.classList.toggle('fa-angle-up');
        
        const content2a = document.getElementById('dropdown-content2a');
        const content2b = document.getElementById('dropdown-content2b');

        if(arrowDown.classList.contains('fa-angle-down')) {
          content2a.style.display = 'none'
          content2b.style.display = 'none'
        }else if (arrowDown.classList.contains('dropA') & arrowDown.classList.contains('fa-angle-up')) {
          content2a.style.display = 'block';
          content2b.style.display = 'none';
        }else if(arrowDown.classList.contains('dropB') &  arrowDown.classList.contains('fa-angle-up')) {
          content2a.style.display = 'none';
          content2b.style.display = 'block';
        } 
      });
    });
})


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

