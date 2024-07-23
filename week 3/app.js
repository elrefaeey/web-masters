document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    const cartItems = [];
    const cartButton = document.querySelector('.fa-shopping-cart');
    const popup = document.querySelector('#cart-popup');
    const closeButton = document.querySelector('.close');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('£', ''));
            const productImage = productElement.querySelector('img').src;

            cartItems.push({ name: productName, price: productPrice, image: productImage });
            cartCount++;
            updateCart();
        });
    });

    cartButton.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    function updateCart() {
        cartCountElement.innerText = cartCount;
        cartItemsElement.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"/>
                <span>${item.name} - £${item.price.toFixed(2)}</span>
            `;
            cartItemsElement.appendChild(listItem);
            total += item.price;
        });

        cartTotalElement.innerText = `£${total.toFixed(2)}`;
    }
});

