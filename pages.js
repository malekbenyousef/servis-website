// Add this function to your existing scripts.js file
window.onscroll = function () {
    var navigationMenu = document.getElementById('navigationMenu');
    if (window.scrollY > 0) {
        navigationMenu.classList.add('fixed');
    } else {
        navigationMenu.classList.remove('fixed');
    }
};
