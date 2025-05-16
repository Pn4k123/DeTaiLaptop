document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();

    document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};

            let productId = btn.getAttribute('data-product-id');
            cart[productId] = (cart[productId] || 0) + 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            alert('Đã thêm vào giỏ hàng!');
        });
    });

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        let count = Object.values(cart).reduce((a, b) => a + b, 0);
        document.querySelectorAll('.cart-count').forEach(function (el) {
            el.textContent = count;
        });
    }
});