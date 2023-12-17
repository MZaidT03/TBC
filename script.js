// Home Page
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn1 = document.querySelector(".btn__login");
const btn2 = document.querySelector(".btn__signup");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");
const btnLogin = document.querySelector(".btn--login");
const btnSignup = document.querySelector(".btn--register");
const Signup = document.querySelector(".modal__form--signup");
const Login = document.querySelector(".modal__form--login");
////////////////////////////////////////////////////////////////////////////
// Menu Page
const menuLinks = document.querySelectorAll(".menu__link");
const menuBurger = document.querySelector(".menu__link--burger");
const menuSides = document.querySelector(".menu__link--sides");
const menuBeverages = document.querySelector(".menu__link--beverages");
const menuDeals = document.querySelector(".menu__link--deals");
////////////////////////////////////////////////////////////////////////////
btn1.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
btn2.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnSignup.addEventListener("click", function (e) {
  e.preventDefault();
  Signup.classList.remove("hidden_form");
  Login.classList.add("hidden_form");
});
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  Signup.classList.add("hidden_form");
  Login.classList.remove("hidden_form");
});
///////////////////////////////////////////////////
// Menu Page
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    menuLink.classList.add("active");
  });
});
menuBurger.addEventListener("click", function (e) {
  document.querySelector(".menu__sides").classList.add("hidden__menu");
  document.querySelector(".menu__burger").classList.remove("hidden__menu");
  document.querySelector(".menu__beverages").classList.add("hidden__menu");
  document.querySelector(".menu__deals").classList.add("hidden__menu");
});
menuSides.addEventListener("click", () => {
  document.querySelector(".menu__burger").classList.add("hidden__menu");
  document.querySelector(".menu__sides").classList.remove("hidden__menu");
  document.querySelector(".menu__beverages").classList.add("hidden__menu");
  document.querySelector(".menu__deals").classList.add("hidden__menu");
});
menuBeverages.addEventListener("click", () => {
  document.querySelector(".menu__burger").classList.add("hidden__menu");
  document.querySelector(".menu__sides").classList.add("hidden__menu");
  document.querySelector(".menu__beverages").classList.remove("hidden__menu");
  document.querySelector(".menu__deals").classList.add("hidden__menu");
});
menuDeals.addEventListener("click", () => {
  document.querySelector(".menu__burger").classList.add("hidden__menu");
  document.querySelector(".menu__sides").classList.add("hidden__menu");
  document.querySelector(".menu__beverages").classList.add("hidden__menu");
  document.querySelector(".menu__deals").classList.remove("hidden__menu");
});
