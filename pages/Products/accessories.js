const nairaSymbol = '\u20A6'

// accessories array
var adapters = [
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const adapterContainer = document.getElementById('adapter');

    adapters.forEach(adapter => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${adapter.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${adapter.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = adapter.image;
        imgElement.alt = adapter.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = adapter.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${adapter.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${adapter.beforeprice}</s>`

        adapterContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});



var Airpods = [
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const airpodContainer = document.getElementById('airpod');

    Airpods.forEach(airpod => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${airpod.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${airpod.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = airpod.image;
        imgElement.alt = airpod.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = airpod.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${airpod.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${airpod.beforeprice}</s>`

        airpodContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});



var cables = [
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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cableContainer = document.getElementById('cable');

    cables.forEach(cable => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${cable.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${cable.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = cable.image;
        imgElement.alt = cable.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = cable.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${cable.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${cable.beforeprice}</s>`

        cableContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});



var protections = [
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

document.addEventListener('DOMContentLoaded', () => {
    const protectionContainer = document.getElementById('protection');

    protections.forEach(protection => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${protection.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${protection.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = protection.image;
        imgElement.alt = protection.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = protection.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${protection.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${protection.beforeprice}</s>`

        protectionContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});
