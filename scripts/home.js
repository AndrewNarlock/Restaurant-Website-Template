//Carousel
const leftButton = document.querySelector('.carousel-left');
const leftButtonSmall = document.querySelector('.carousel-left-small');
const rightButton = document.querySelector('.carousel-right');
const rightButtonSmall = document.querySelector('.carousel-right-small');
const imageContainer = document.querySelector('.image-container');

window.addEventListener('load', () => {
    loadImages(carouselImages);
    return imageOne = document.querySelector('.image-1');
});

const loadImages = function (images) {
    let track = 1;
    for (let i = 0; i < images.length; i++) {
        let newImage = document.createElement('img');
        newImage.src = images[i].imagePath;
        newImage.classList.add('carousel-image');
        newImage.classList.add(`image-${track}`);
        imageContainer.appendChild(newImage);
        track++;
    };
};

let tracker = 0;
let counter = 1;

rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

leftButton.addEventListener('click', () => {
    moveImagesRight();
});

rightButtonSmall.addEventListener('click', () => {
    moveImagesLeft();
});

leftButtonSmall.addEventListener('click', () => {
    moveImagesRight();
});

const moveImagesLeft = function () {
    if (counter < carouselImages.length) {
        tracker = tracker - 100;
        imageOne.style.marginLeft = `${tracker}%`;
        counter++;
    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        tracker = tracker + 100;
        imageOne.style.marginLeft = `${tracker}%`;
        counter--;
    }
}

