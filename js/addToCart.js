document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();

    // Lấy tất cả nút thêm vào giỏ hàng (có thể có nhiều sản phẩm)
    document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            // Lấy productId từ thuộc tính data-product-id
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