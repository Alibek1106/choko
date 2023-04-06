const products = [
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
    {
        chokoName: "Bovetti dark chocolate",
        chokoPic: "images/items/example.png",
        chokoDescr: "Органический батончик темного шоколада fair trade St Domingue 73% какао",
        chokoPrice: "625"
    },
]

const productWrapper = document.querySelector('.products')

for (let i = 0; i < products.length; i++){
    let product = products[i];
    const productHtml = `
    <div class="product">
        <img class="prod-pic" src="${product.chokoPic}">
        <h4>${product.chokoName}</h4>
        <p>${product.chokoDescr}</p>
        <span class="poppins">${product.chokoPrice}c</span>
        <img class="prod-fav" src="images/icons/favorite.svg">
        <img class="prod-bus" src="images/icons/basket.svg">
    </div>
    `;

    productWrapper.innerHTML += productHtml;
}