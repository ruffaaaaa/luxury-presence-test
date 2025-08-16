document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

const images = [
    "assets/images/realty1.png",
    "assets/images/realty2.png",
    "assets/images/realty3.png",
    "assets/images/realty4.png"
];

const scrollContent = document.getElementById("scroll-content");

function addImages(arr) {
    arr.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "House";
        scrollContent.appendChild(img);
    });
}

addImages(images);
addImages(images);
addImages(images);



