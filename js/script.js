const menuOpen = document.querySelector(".header__menu--open");
const menuClose = document.querySelector(".header__menu--close");
const menu = document.querySelector(".menu");
const testimonial = document.querySelector(".testimonial");

const openMenu = function () {
  menu.style.display = "grid";
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
};

const closeMenu = function () {
  menu.style.display = "none";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
};

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
