document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "assets/images/gallery/gallery1.webp",
        "assets/images/gallery/gallery2.webp",
        "assets/images/gallery/gallery1.webp",
        "assets/images/gallery/gallery2.webp", "assets/images/gallery/gallery1.webp",
        "assets/images/gallery/gallery2.webp",
    ];

    let slideIndex = 0;

    const mainImage = document.getElementById("mainImage");
    const previewImage = document.getElementById("previewImage");
    const thumbnailsContainer = document.getElementById("thumbnails");

    function showSlide(index) {
        slideIndex = (index + images.length) % images.length;
        mainImage.src = images[slideIndex];
        previewImage.src = images[(slideIndex + 1) % images.length];

        document.querySelectorAll(".thumbnails img").forEach((thumb, i) => {
            thumb.classList.toggle("active-thumb", i === slideIndex);
        });
    }

    window.plusSlides = function (n) {
        showSlide(slideIndex + n);
    };

    images.forEach((src, i) => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.onclick = () => showSlide(i);
        thumbnailsContainer.appendChild(thumb);
    });

    showSlide(0);
});