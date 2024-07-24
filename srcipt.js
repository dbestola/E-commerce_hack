const nairaSymbol = '\u20A6'

var Products = [
    {
        "id": 23,
        "image": "assets/images/ipad/apple-ipad-pro-12.9-m22022-modelwi-ficellular-512gb-space-gray.jpg",
        "name": "Apple IPad Pro 12 512gb (grey)",
        "price": "2,169,100",
        "beforeprice": "2,299,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 14,
        "image": "assets/images/iphone/15/apple-iphone-15-pro-max-256gb-nano-sim-blue-titanium.jpg",
        "name": "Apple IPhone 15 Pro Max 256gb (nano-sim blue titanium)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 37,
        "image": "assets/images/accessories/protection/apple-iphone-15-pro-max-finewoven-case-with-magsafe-taupe.webp",
        "name": "Apple IPhone 15 Pro Max case (with magsafe)",
        "price": "130,500",
        "beforeprice": "145,000",
        "discountprice": "-10%",
        "quantity": 1
    },
    {
        "id": 20,
        "image": "assets/images/mac/apple-macbook-pro-16.2-32gb-1tb-10-cores-m1-max-silver.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "2,232,000",
        "beforeprice": "2,480,000",
        "discountprice": "-10%",
        "quantity": 1
    }
  ]
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const productContainer = document.getElementById('product-container');
  
      Products.forEach(product => {
          const imgDiv = document.createElement('div');
          imgDiv.classList.add('img')
          imgDiv.id = `img${product.id}`
  
          const anchor = document.createElement('a');
          anchor.href = `pages/collections/collections.html?id=${product.id}`;
  
          const imgElement = document.createElement('img');
          imgElement.src = product.image;
          imgElement.alt = product.name;
  
          const PDescription = document.createElement('h5')
          PDescription.innerText = product.name
  
          const CPrice = document.createElement('h6')
          CPrice.innerHTML = `Price:${nairaSymbol}${product.price}`
  
          const BPrice = document.createElement('h6')
          BPrice.innerHTML = `Before:<s>${nairaSymbol}${product.beforeprice}</s>`
  
          productContainer.appendChild(imgDiv);
          anchor.appendChild(imgElement);
          imgDiv.appendChild(anchor);
          imgDiv.appendChild(PDescription)
          imgDiv.appendChild(CPrice)
          imgDiv.appendChild(BPrice)
      });
  });
  