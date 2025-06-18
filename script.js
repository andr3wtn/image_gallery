const images = document.querySelectorAll(".image-container img");
const overlay = document.querySelector(".overlay");
let current_index = 0;

// click image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        console.log("Image clicked:", index);
        current_index = index;
        store_large_img(current_index);
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

// close button
document.querySelector("#closeBtn").addEventListener("click", close);
function close() {
    overlay.style.display = "none";
    document.body.style.overflow = "";
}

// previous button
document.querySelector("#prevBtn").addEventListener("click", prev);
function prev() {
    store_large_img(current_index - 1);
}

// next button
document.querySelector("#nextBtn").addEventListener("click", next);
function next() {
    store_large_img(current_index + 1);
}

// show image
function store_large_img(index) {
    current_index = (index + images.length) % images.length;
    document.querySelector(".overlay img").src = images[current_index].src;
}


document.addEventListener("keydown", (e) => {
    if (overlay.style.display == "none") return;
    if (e.key == "ArrowLeft") prev();
    if (e.key == "ArrowRight") next();
});