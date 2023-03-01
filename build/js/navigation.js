let nav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');


navToggle.addEventListener("click", function() {
  if (nav.classList.contains("main-nav--close")) {
    nav.classList.remove("main-nav--close");
    nav.classList.add("main-nav--open");
  } else {
    nav.classList.add("main-nav--close");
    nav.classList.remove("main-nav--open");
  }
}
)
