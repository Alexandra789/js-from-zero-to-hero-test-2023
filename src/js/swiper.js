const previousSwiperBtns = document.querySelectorAll('.slider__previous-btn');
const nextSwiperBtns = document.querySelectorAll('.slider__next-btn');

previousSwiperBtns.forEach(previousBtn => {
    previousBtn.addEventListener('click', () => {
        previousSlide();
    })
})

nextSwiperBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', () => {
        nextSlide();
    })
})

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slider__item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}