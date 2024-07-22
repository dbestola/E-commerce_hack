const nairaSymbol = '\u20A6'

// mac product array
var macArray = [
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
        "image": "../../assets/images/mac/2022 MACBOOK PRO 13 - 3.5GHz i7 - 16GB RAM - 1TB SSD - GRAY.webp",
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const macContainer = document.getElementById('macbookSeries');

    macArray.forEach(mac => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `mimg${mac.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${mac.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = mac.image;
        imgElement.alt = mac.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = mac.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${mac.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${mac.beforeprice}</s>`

        macContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});
