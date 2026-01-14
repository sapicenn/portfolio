const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

document.querySelectorAll('.menu-item-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });
});

