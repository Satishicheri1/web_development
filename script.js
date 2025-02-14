const products = [{
        id: 1,
        name: "laptop",
        Image: "https://m.media-amazon.com/images/I/71AgpCmmoHL._AC_UY218_.jpg",
        price: 800
    },

    {
        id: 2,
        name: "HeadPhone",
        Image: "https://m.media-amazon.com/images/I/61u1VALn6JL._AC_UY218_.jpg",
        price: 500
    },
    {
        id: 3,
        name: "earphone",
        Image: "https://m.media-amazon.com/images/I/513ugd16C6L._AC_UY218_.jpg",
        price: 1050
    },

    {
        id: 4,
        name: "buds",
        Image: "https://images-eu.ssl-images-amazon.com/images/I/61UNThaGjYL._AC_UL232_SR232,232_.jpg",
        price: 1500
    },

    {
        id: 5,
        name: "laptop",
        Image: "https://m.media-amazon.com/images/I/71AgpCmmoHL._AC_UY218_.jpg",
        price: 800
    },

    {
        id: 6,
        name: "laptop",
        Image: "https://m.media-amazon.com/images/I/71AgpCmmoHL._AC_UY218_.jpg",
        price: 800
    },
    {
        id: 7,
        name: "laptop",
        Image: "https://m.media-amazon.com/images/I/71AgpCmmoHL._AC_UY218_.jpg",
        price: 800
    },
    {
        id: 8,
        name: "laptop",
        Image: "https://m.media-amazon.com/images/I/71AgpCmmoHL._AC_UY218_.jpg",
        price: 800
    },

]

function renderProducts(products, productList) {

    const container = document.getElementById(productList);
    container.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML = `
        <img src= "${product.Image}"/>
        <h3>${product.name}</h3>
        <h2>${product.price}</h2>
        <button onclick ="addToCart(${product.id})">Add to Cart</button>
        `
        container.appendChild(productDiv);
    })
}





function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let Cart = JSON.parse(localStorage.getItem("cart")) || [];
    Cart.push(product);
    localStorage.setItem("cart", JSON.stringify(Cart));
    alert(`${product.name} is added to cart`)
    renderCart();


}

function renderCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");

    container.innerHTML = "";
    if (cart.length == 0) {

        container.innerHTML = "<h1>your cart is empty</h1>"

    }
    cart.forEach(item => {

        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart-item");
        cartDiv.innerHTML = `
        <img src="${item.Image}"/>
        <h3>${item.name}</h3>
        <h2>${item.price}</h2>
        <button onclick="removeFromCart(${item.id})">remove</button>
        `
        container.appendChild(cartDiv);

    })
    renderSubTotal(cart);
}
//2if



function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("product is removed succesfully");
    renderCart();
}

function renderSubTotal(cart) {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const subtotalContainer = document.getElementById("subtotal");

    if (cart.length > 0) {
        subtotalContainer.innerHTML = `subtotal:Rs. ${subtotal}`
    } else {
        subtotalContainer.innerHTML = `no item in the cart`
    }
}
if (document.getElementById("productList")) renderProducts(products, "productList");
if (document.getElementById("cartItems")) renderCart();