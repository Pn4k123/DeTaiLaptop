document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.product-list-carousel');
    const items = document.querySelectorAll('.product-list-carousel a .product-item-carousel');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    const visible = 4;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 12; // 32px gap
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - visible;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - visible) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});