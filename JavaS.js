const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav_link');
const imgElement = document.getElementById('iconLogo');

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const url = window.location.href;

    if (windowWidth > 1024) {
        if (scrollPosition >= 100) {
            nav.style.backgroundColor = 'white';
            imgElement.src = 'ECT_LOGO_NOBG.png';  // Update the image source here
        } else {
            nav.style.backgroundColor = 'transparent';
            imgElement.src = 'ECT_LOGO_WHITE-NOBG.png';  // Update the image source here
        }
        if (url.includes('index') && scrollPosition >= 100) {
            navLinks.forEach(link => link.style.color = '#2C3E50');
        } else {
            navLinks.forEach(link => link.style.color = 'white');
        }
    }
}


window.addEventListener("scroll", handleSmallScroll);
function handleSmallScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const url = window.location.href;

    if (windowWidth <= 1024) {
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
            }
        });
    }

    const observer = new IntersectionObserver(onIntersection, observerOptions);

    const elementsToObserve = document.querySelectorAll('.index_body3');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for .index_body2
    const observerOptionsBody3 = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    function onIntersectionBody3(entries, observerBody3) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1');
            }
        });
    }

    const observerBody3 = new IntersectionObserver(onIntersectionBody3, observerOptionsBody3);

    const elementsToObserveBody3 = document.querySelectorAll('.index_body2');
    elementsToObserveBody3.forEach(element => {
        observerBody3.observe(element);
    });
});




