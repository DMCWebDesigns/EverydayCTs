const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const logo = document.getElementById('logo');

window.onscroll = function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

function redirectCases() {
    window.location.href = "cases.html";
}

function redirectHome() {
    window.location.href = "index.html";
}

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slides img");

    // Hide all slides and reset their transform property
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.transform = "translateX(100%)";
        slides[i].classList.remove('active');
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.opacity = "1";
    slides[slideIndex - 1].style.transform = "translateX(0)";
    slides[slideIndex - 1].classList.add('active');

    // Set the next slide to show after a timeout
    setTimeout(showSlides, 6000); // Change slide every 6 seconds
}

// Initial call to showSlides to start the slideshow
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});


dow.onload = function () {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        const indexBody2 = document.querySelector('.index_body2');
        if (isInViewport(indexBody2)) {
            indexBody2.style.transform = 'translateY(0px)';
            indexBody2.style.opacity = '1';
        }
    }
    window.addEventListener('scroll', handleScroll);
}




