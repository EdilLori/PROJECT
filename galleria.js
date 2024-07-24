document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');

    // Duplica le immagini per lo scorrimento infinito
    const clonedImages = Array.from(images).map(img => img.cloneNode(true));
    clonedImages.forEach(img => gallery.appendChild(img));

    let index = 0;
    const slideWidth = images[0].clientWidth + parseInt(getComputedStyle(images[0]).marginRight); // Larghezza immagine più margine
    const intervalTime = 3000; // Tempo in millisecondi per ogni slide

    function nextSlide() {
        index++;

        // Calcola la nuova trasformazione per lo scorrimento
        const transformValue = `translateX(-${index * slideWidth}px)`;

        // Applica la trasformazione con una transizione fluida
        gallery.style.transition = 'transform 1s ease';
        gallery.style.webkitTransform = transformValue; // Prefisso per WebKit
        gallery.style.MozTransform = transformValue;   // Prefisso per Firefox
        gallery.style.transform = transformValue;

        // Resetta l'indice e la trasformazione dopo aver mostrato le immagini duplicate
        if (index >= images.length) {
            setTimeout(() => {
                gallery.style.transition = 'none';
                gallery.style.webkitTransform = 'translateX(0)';
                gallery.style.MozTransform = 'translateX(0)';
                gallery.style.transform = 'translateX(0)';
                index = 0;
            }, 1000); // Dopo un secondo, ripristina la posizione senza transizione
        }
    }

    // Avvia lo scorrimento automatico delle immagini
    setInterval(nextSlide, intervalTime);
});