let siteNav = document.querySelector(".site-nav");
let navToggle = document.querySelector(".site-nav__toggle");

let form = document.querySelector(".form");


//* Menu mobile

siteNav.classList.remove("site-nav--nojs");

navToggle.addEventListener("click", function() {
  if (siteNav.classList.contains("site-nav--closed")) {
    siteNav.classList.remove("site-nav--closed");
    siteNav.classList.add("site-nav--opened");
  } else {
      siteNav.classList.add("site-nav--closed");
      siteNav.classList.remove("site-nav--opened");
  }
});

//* Form validation

if (form) {
  let inputs = form.querySelectorAll(".form__input");
  let submit = form.querySelector(".button");

  submit.addEventListener("click", function(evt) {
    for (let input of inputs) {
      if (input.checkValidity() == false) {
        input.classList.add("form__input--error");
      } else {
        input.classList.remove("form__input--error");
      }

      input.addEventListener("input", function() {
        if (input.checkValidity()) {
          input.classList.remove("form__input--error");
        }
      })
    }
  })
}
