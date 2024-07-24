const nairaSymbol = '\u20A6'

// iphone11 product array
var iphone11Array = [
    {
        "id": 1,
        "image": "../../assets/images/iphone/11/apple-iphone-11-pro-max-6.5-4gb-ram-64gb-rom-gold.jpg",
        "name": "Apple iphone 11 Pro Max 64gb (gold)",
        "price": "360,000",
        "beforeprice": "400,000",
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const iphone11Container = document.getElementById('iphone11');

    iphone11Array.forEach(iphone => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${iphone.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${iphone.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = iphone.image;
        imgElement.alt = iphone.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = iphone.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${iphone.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${iphone.beforeprice}</s>`

        iphone11Container.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});


// iphone13 product Array
var iphone13Array = [
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const iphone13Container = document.getElementById('iphone13');

    iphone13Array.forEach(iphone => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${iphone.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${iphone.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = iphone.image;
        imgElement.alt = iphone.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = iphone.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${iphone.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${iphone.beforeprice}</s>`

        iphone13Container.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});


// iphone14 product array
var iphone14Array = [
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const iphone14Container = document.getElementById('iphone14');

    iphone14Array.forEach(iphone => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${iphone.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${iphone.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = iphone.image;
        imgElement.alt = iphone.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = iphone.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${iphone.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${iphone.beforeprice}</s>`

        iphone14Container.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});


// iphone15 product array
var iphone15Array = [
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const iphone15Container = document.getElementById('iphone15');

    iphone15Array.forEach(iphone => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${iphone.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${iphone.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = iphone.image;
        imgElement.alt = iphone.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = iphone.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${iphone.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${iphone.beforeprice}</s>`

        iphone15Container.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});
