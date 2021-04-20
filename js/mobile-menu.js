var mainMenu = document.querySelector('.main-menu');
var showMenu = document.querySelector('.main-nav__logo-mobile-menu');
var closeMenu = document.querySelector('.main-nav__m-close');


closeMenu.classList.add("hidden-menu");


if (window.innerWidth >= 768) {
  mainMenu.classList.remove("hidden-menu");
} else {
  mainMenu.classList.add("hidden-menu");
}

window.onresize = function (event) {
  if (window.innerWidth >= 768) {
    mainMenu.classList.remove("hidden-menu");
  } else {
    mainMenu.classList.add("hidden-menu");
  }
}

showMenu.addEventListener("click", function (evt) {
  closeMenu.classList.remove("hidden-menu");
  mainMenu.classList.remove("hidden-menu");
  showMenu.classList.add("hidden-menu");
})

closeMenu.addEventListener("click", function (evt) {
  showMenu.classList.remove("hidden-menu");
  mainMenu.classList.add("hidden-menu");
  closeMenu.classList.add("hidden-menu");
})
