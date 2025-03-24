'use strict';

// DOM Elements
const navbar = document.querySelector('.navbar');

// Utility Functions
const debounce = (func, wait = 20) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Scroll Handler for Navbar
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Event Listeners
window.addEventListener('scroll', debounce(handleScroll));

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Initial animations will go here
    gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });
}); 