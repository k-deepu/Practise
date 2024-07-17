let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function setSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    slideIndex = ((n - 1 + slides.length) % slides.length) + 1;

    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex - 1) ? "block" : "none";
    });

    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(" active", "");
        if (i === slideIndex - 1) {
            dot.className += " active";
        }
    });
}
