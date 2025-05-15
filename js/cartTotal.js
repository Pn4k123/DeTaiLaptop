const products = {
    product1: {
        name: "Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78L4",
        price: 38990000,
        image: "../image/Sản phẩm nổi bật/predator_helios_neo_16_phn16-72_bd4a25eebfaf4ae1b538772dbba0b34e_1024x1024.webp"
    },
    product2: {
        name: "Laptop gaming Acer Nitro V ANV15 51 53DM",
        price: 19490000,
        image: "../image/Sản phẩm nổi bật/nitro-v_755588bd95514b6386940d73d3951e2d_1024x1024_eb2e1844722a4c75a43a97b6ae10ac66_medium.webp"
    },
    product3: {
        name: "Laptop gaming HP VICTUS 16-r0376TX AY8Z2PA",
        price: 19990000,
        image: "../image/Sản phẩm nổi bật/ictus_16_80w_micasilver_nt_hdcam_nonfpr_nonodd_victusamd_coreset_front_5be4570401b74248974f3281e277d7c3_medium.webp"
    },
    product4: {
        name: "Laptop gaming Lenovo LOQ 15IRX9 83DV012LVN",
        price: 19999000,
        image: "../image/Sản phẩm nổi bật/loq_15irx9_ct1_01_e2e64ca5dbd941cf95933becae145edf_medium.webp"
    },
    product5: {
        name: "Laptop gaming MSI Katana 15 B13VFK 676VN",
        price: 27990000,
        image: "../image/Sản phẩm nổi bật/676vn_21da8c4630014f808b321b3d32118291_69f68ad8d3be44b385bb3da80ec4a9ee_grande.webp"
    },
    product6: {
        name: "Laptop gaming MSI Katana 15 B13VEK 252VN",
        price: 23290000,
        image: "../image/Sản phẩm nổi bật/1205vn_da651643e91047bfa9729c53f93ffc6e_large_39f1561f3448481c94add35d7fda7dc4_medium.webp"
    },
    product7: {
        name: "Laptop gaming MSI Sword 16 HX B14VEKG 856VN",
        price: 31490000,
        image: "../image/Sản phẩm nổi bật/ava_ecb79fdbde454bfd87bf7ccd8675e972_medium.webp"
    },
    product8: {
        name: "Laptop gaming ASUS ROG Strix G16 G614JU N3480W",
        price: 30990000,
        image: "../image/Sản phẩm nổi bật/ava_d8ad4b73594441d7aefb8bc55a3c3ed0_grande.webp"
    },
    product9: {
        name: "Laptop Dell Inspiron 15 3520 i5U165W11BLU-FP",
        price: 15290000,
        image: "../image/Sản phẩm nổi bật/ava_bb5d57d896da4c98b70ea4353e8867d3_grande.webp"
    },
};

document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartItemDiv = document.querySelector('.cart-item');
    let total = 0;
    cartItemDiv.innerHTML = '';

    if (Object.keys(cart).length === 0) {
        cartItemDiv.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
    } else {
        Object.keys(cart).forEach(function (id) {
            if (products[id]) {
                let quantity = cart[id];
                let price = products[id].price * quantity;
                total += price;
                cartItemDiv.innerHTML += `
                    <div class="cart-product">
                        <img src="${products[id].image}" alt="${products[id].name}">
                        <div class="cart-info">
                            <h4>${products[id].name}</h4>
                            <p>Giá: ${products[id].price.toLocaleString()}₫</p>
                            <p>Số lượng: ${quantity}</p>
                            <p>Thành tiền: ${(products[id].price * quantity).toLocaleString()}₫</p>
                              <button class="del-product" data-id="${id}">XÓA SẢN PHẨM</button>
                        </div>
                    </div>
                `;
            }

        });
    }

    // Hiển thị tổng tiền
    document.querySelector('.total-cart').insertAdjacentHTML('afterbegin',
        `<div class="cart-total">Tổng cộng:<strong>${total.toLocaleString()}₫</strong></div>`
    );

    // Xử lý nút xóa từng sản phẩm
    cartItemDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('del-product')) {
            const id = e.target.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            delete cart[id];
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
        }
    });


    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        let count = Object.values(cart).reduce((a, b) => a + b, 0);
        document.querySelectorAll('.cart-count').forEach(function (el) {
            el.textContent = count;
        });
    }
});