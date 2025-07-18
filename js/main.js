
'use strict';
// Product data
const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
        price: 199.99,
        image: "./assets/images/headphones-5596990_1920.jpg"
    },
    {
        id: 2,
        title: "Smart Watch",
        description: "Fitness tracker with heart rate monitor, GPS, and waterproof design.",
        price: 159.99,
        image: "./assets/images/apple-2561475_1920.jpg"
    },
    {
        id: 3,
        title: "Bluetooth Speaker",
        description: "Portable waterproof speaker with 20-hour playtime and deep bass.",
        price: 89.99,
       image: "./assets/images/bluetooth-headset-5365165_1920.jpg"
    },
    {
        id: 4,
        title: "4K Action Camera",
        description: "Ultra HD action camera with waterproof case and image stabilization.",
        price: 249.99,
        image: "./assets/images/headphones-5596990_1920.jpg"
    },
    {
        id: 5,
        title: "Wireless Keyboard",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 59.99,
        image: "./assets/images/keyboard-933568_1920.jpg"
    },
    {
        id: 6,
        title: "External SSD",
        description: "1TB portable SSD with ultra-fast transfer speeds and rugged design.",
        price: 129.99,
        image: "./assets/images/data-storage-319844_1920.jpg"
    },
    {
        id: 7,
        title: "Kitchen",
        description: "1TB portable SSD with ultra-fast transfer speeds and rugged design.",
        price: 309.99,
        image: "./assets/images/21B-NkA9p-L._SY150.jpg"
    },
    {
        id: 8,
        title: "Home",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 1509.99,
        image: "./assets/images/21W7-lndINL._SY150.jpg"
    },
    {
        id: 9,
        title: "Soap",
        description: "Fitness tracker with heart rate monitor, GPS, and waterproof design.",
        price: 19.99,
        image: "./assets/images/51CfZ8zGq9L._AC_SY400.jpg"
    },
    {
        id: 10,
        title: "Kids",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 109.99,
        image: "./assets/images/61jccG4IyuL._AC_SY400.jpg"
    },
    {
        id: 11,
        title: "Toy",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 29.99,
        image: "./assets/images/81XkUCfu0mL._AC_SY400.jpg"
    },
    {
        id: 12,
        title: "Picture Book",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 150.99,
        image: "./assets/images/91dxlQQXeEL._AC_SY400.jpg"
    },
    {
        id: 13,
        title: "Reading Book",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 340.99,
        image: "./assets/images/91I1KDnK1kL._AC_SY400.jpg"
    },
    {
        id: 14,
        title: "Decoration",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 75.99,
        image: "./assets/images/Fuji_BTF_Quad_Cards_1x_Home_decor._SY116_CB558654384.jpg"
    },
    {
        id: 15,
        title: "Electronics",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 55.99,
        image: "./assets/images/Fuji_BTF_Quad_Cards_1x_laptop._SY116_CB558654384.jpg"
    },
    {
        id: 16,
        title: "Disk Card",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 25.99,
        image: "./assets/images/Fuji_BTF_Quad_Cards_2x_Hard_Drives._SY232_CB558654384.jpg"
    },
    {
        id: 17,
        title: "Gifts",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 450.99,
        image: "./assets/images/sfddddeeeeeeeeeeetggggggggggggg.jpg"
    },
    {
        id: 6,
        title: "Home",
        description: "Slim wireless keyboard with quiet touch keys and long battery life.",
        price: 102.99,
        image: "./assets/images/21W7-lndINL._SY150.jpg"
    },
    

];

// display products
let addProducts = ()=>{
    const cardSection = document.querySelector('.card-section');
    cardSection.innerHTML = '';
    products.forEach(item=>{
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${item.image}">
        <div class="description">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <span>$ ${item.price}</span><br>
            <button id="addtocard">Add to Cart</button>
        </div>
        `;
        cardSection.appendChild(card);
    });
}
// call function
addProducts();



//initialize variables
let cartIcon = document.getElementById('cartIcon');
let closeIcon = document.getElementById('closeIcon');
let AddToCarBtn = document.querySelectorAll('#addtocard');
let header = document.getElementById('header');
const itemLength = document.querySelector('.item-length');
const cartMenu = document.querySelector('.cart-items-container');
const cartitem = document.querySelector('.cart-item');
const totalText = document.querySelector('.total span');
const body = document.querySelector('body');

// shopping cart
const cartItems = [];

itemLength.textContent = cartItems.length

//check if there is no items 
if(cartItems.length === 0){
    cartitem.innerHTML = `<p class="text">Your cart is empty</p>`;
    totalText.innerHTML = `Total: $ 0.00`
}

// sticky header
window.addEventListener('scroll',()=>{
    if(pageYOffset >= 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

// open cart JS 
cartIcon.addEventListener('click',()=>{
    cartMenu.classList.add('active');
    body.style.overflow = 'hidden';
});

// close cart JS
closeIcon.addEventListener('click',()=>{
    cartMenu.classList.remove('active');
    body.style.overflowX = 'hidden';
    body.style.overflowY = 'scroll';
});


let total = 0;


// add item to cart
let shoppingItem = ()=>{
    cartitem.innerHTML = ``;
    cartItems.forEach(item=>{
        total += item.price;
        totalText.textContent =`$` + total.toFixed(2);
        let box = document.createElement('div');
        box.innerHTML = `
            <img src="${item.image}" alt="">
            <div>
                <h1>${item.title}</h1>
                <span>$${item.price}</span>
            </div>
        `
        cartitem.appendChild(box);
    });
};

// adding event
AddToCarBtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        cartItems.push({...products[index]},);
        shoppingItem();
    });
});






