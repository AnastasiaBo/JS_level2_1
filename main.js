'use strict'

const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 2000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 20
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 200
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 50
    },
];

const renderProduct = (title, price, img = 'img/air-pods.jpg') => {
    return `<div class="product-item">
<img src="${img}" alt="image" class="product-img">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item.title, item.price, item.img)).join(''));
};

renderPage(products);
