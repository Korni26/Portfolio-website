const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUPCLOSE = document.querySelector(".popupButton");
const POPUPIMG = document.querySelector(".popupImg");
const ARROWLEFT = document.querySelector(".popArrow--left");
const ARROWRIGHT = document.querySelector(".popArrow--right");

let currentImgIndex;

THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUPIMG.src = e.target.src;
        currentImgIndex = index;
    });
});


POPUPCLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});

ARROWRIGHT.addEventListener("click", () => {
    if(currentImgIndex === THUMBNAILS.length - 1){
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUPIMG.src = THUMBNAILS[currentImgIndex].src;
});

ARROWLEFT.addEventListener("click", () => {
    if(currentImgIndex === 0){
        currentImgIndex = THUMBNAILS.length - 1;
    } else {
        currentImgIndex = currentImgIndex - 1;
    }
    POPUPIMG.src = THUMBNAILS[currentImgIndex].src;
});

