let currentSlide = 0;
const slideInterval = 5000; // 5 seconds per slide
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, slideInterval);

// Show the first slide initially
showSlide(currentSlide);