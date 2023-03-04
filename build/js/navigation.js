let nav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let mainNav = document.querySelector(".main-nav__list");

mainNav.classList.remove("main-nav__list--no-js")

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("main-nav--close")) {
    nav.classList.remove("main-nav--close");
    nav.classList.add("main-nav--open");
  } else {
    nav.classList.add("main-nav--close");
    nav.classList.remove("main-nav--open");
  }
}
)
