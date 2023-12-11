document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuNavigation = document.querySelector('.menu-navigation');

    menuIcon.addEventListener('click', function () {
        menuNavigation.classList.toggle('show');
    });
});
