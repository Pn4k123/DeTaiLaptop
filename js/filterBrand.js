document.addEventListener('DOMContentLoaded', function () {
    // Lấy checkbox thương hiệu và giá
    const brandCheckboxes = document.querySelectorAll('.sidebar-section:nth-child(1) .sidebar-list input[type="checkbox"]');
    const priceCheckboxes = document.querySelectorAll('.sidebar-section:nth-child(2) .sidebar-list input[type="checkbox"]');
    const products = document.querySelectorAll('.store-product-item');

    // Lắng nghe sự kiện thay đổi
    brandCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
    priceCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));

    function filterProducts() {
        // Lấy thương hiệu được chọn
        const selectedBrands = Array.from(brandCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.parentElement.textContent.trim().toLowerCase());

        // Lấy giá được chọn
        const selectedPrices = Array.from(priceCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.parentElement.textContent.trim());

        products.forEach(product => {
            const name = product.querySelector('h3').textContent.toLowerCase();
            const priceText = product.querySelector('p').textContent.replace(/[^\d]/g, '');
            const price = parseInt(priceText, 10);

            // Kiểm tra thương hiệu
            let brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => name.includes(brand));

            // Kiểm tra giá
            let priceMatch = true;
            if (selectedPrices.length > 0) {
                priceMatch = false;
                selectedPrices.forEach(range => {
                    if (range.includes('Dưới')) {
                        if (price < 20000000) priceMatch = true;
                    } else if (range.includes('20,000,000đ - 30,000,000đ')) {
                        if (price >= 20000000 && price <= 30000000) priceMatch = true;
                    } else if (range.includes('Trên')) {
                        if (price > 30000000) priceMatch = true;
                    }
                });
            }

            // Hiển thị hoặc ẩn sản phẩm
            if (brandMatch && priceMatch) {
                product.parentElement.style.display = '';
            } else {
                product.parentElement.style.display = 'none';
            }
        });
    }
});