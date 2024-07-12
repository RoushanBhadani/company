let slideIndex = 0;
const slides = document.querySelectorAll(".card-container");
const totalSlides = slides.length;

function moveSlider(direction) {
    slideIndex += direction;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".card-slider").style.transform = `translateX(${
        -slideIndex * slideWidth
    }px)`;
}
