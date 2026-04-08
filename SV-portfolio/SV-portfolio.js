AOS.init({ duration: 1000, once: true });

const menuBtn = document.getElementById('menu-btn');
const navOverlay = document.getElementById('nav-overlay');
const navLinks = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    navOverlay.classList.toggle('open');
    menuBtn.classList.toggle('open-menu');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('open');
        menuBtn.classList.remove('open-menu');
    });
});