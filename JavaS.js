const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav_link');
const navHover = document.querySelectorAll('.nav_link:hover');

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const url = window.location.href;

    if (url.includes("index") && windowWidth > 1024) {
        if (scrollPosition >= 100) {
            nav.style.backgroundColor = 'white';
            navLinks.forEach(link => link.style.color = '#2C3E50');
            navHover.forEach(link => link.style.color = '#1ABC9C');
        } else {
            nav.style.backgroundColor = 'transparent';
            navLinks.forEach(link => link.style.color = '#2C3E50');
            navHover.forEach(link => link.style.color = '#1ABC9C');
        }
    }
};

window.addEventListener("scroll", handleSmallScroll);
function handleSmallScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const url = window.location.href;

    if (url.includes("index") && windowWidth <= 1024) {
        if (scrollPosition >= 100) {
            nav.style.backgroundColor = 'white';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    }
};

function showMenu() {
    const menu_icon = document.getElementById('menu_icon');
    const nav_ul = document.querySelector('nav ul');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1024) {
        menu_icon.style.display = 'none';
        nav_ul.style.transform = 'translateY(-20%)'
    }
};

function closeMenu() {
    const xmark = document.getElementById('close_icon');
    const nav_ul = document.querySelector('nav ul');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1024) {
        menu_icon.style.display = 'flex';
        nav_ul.style.transform = 'translateY(-120%)'
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

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    function onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(onIntersection, observerOptions);

    const elementsToObserve = document.querySelectorAll('.index_body2');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const observerOptionsBody3 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function onIntersectionBody3(entries, observerBody3) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }

    const observerBody3 = new IntersectionObserver(onIntersectionBody3, observerOptionsBody3);

    const elementsToObserveBody3 = document.querySelectorAll('.index_body3');
    elementsToObserveBody3.forEach(element => {
        observerBody3.observe(element);
    });
});



