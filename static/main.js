const openmenu = document.querySelector('.openmenu')
const vissocials = document.querySelector('.social-menu')
const nav = document.querySelector('.nav')
const visitems = document.querySelector('.nav-items')

openmenu.addEventListener("click", () => {
    visitems.classList.toggle("vis-items");
    vissocials.classList.toggle("vis-socials");
    nav.classList.toggle("vis-nav");
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

AOS.init({
    duration: 800
});