let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Keranjang belanja Anda kosong.</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
            total += item.price;
        });
        cartDiv.innerHTML += `<p>Total: $${total}</p>`;
    }
}

function checkout() {
    // Implement your payment logic here
    // For a simple example, you can clear the cart
    cart = [];
    updateCart();
    alert('Pembayaran sukses!');
}

updateCart();
