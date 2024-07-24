document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    function showNextSlide() {
        slider.classList.add('blur');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 500); // Adjust this value if you want a different blur duration

        setTimeout(() => {
            slider.classList.remove('blur');
        }, 1000); // Adjust this value if you want a different blur duration
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});