/* Scroll-in animation for elements marked [data-animate] */
const items = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));

/* Mobile nav toggle */
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".header nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => mainNav.classList.remove("open"));
    });
}
