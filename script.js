let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    updateCartDisplay();
    alert(`${name} has been added to your cart!`);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(div);
    });
    document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout!');
    // Implement checkout functionality here
});
