const rose_images = document.querySelectorAll("#rose img");
const tulip_images = document.querySelectorAll("#tulip img");
const daisy_images = document.querySelectorAll("#daisy img");

const overlay = document.querySelector(".overlay");
let current_index = 0;
let current_section_images = [];

// open overlay
function addListener(images){
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            current_section_images = images;
            current_index = index;
            store_large_img(current_index);
            overlay.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });
}

addListener(rose_images);
addListener(tulip_images);
addListener(daisy_images);


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
    current_index = (index + current_section_images.length) % current_section_images.length;
    document.querySelector(".overlay img").src = current_section_images[current_index].src;
}


document.addEventListener("keydown", (e) => {
    if (overlay.style.display == "none") return;
    if (e.key == "ArrowLeft") prev();
    if (e.key == "ArrowRight") next();
});