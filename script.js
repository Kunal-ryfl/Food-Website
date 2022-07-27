const hamburger = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const cart = document.querySelector(".cart");
const sidecart = document.querySelector(".side-cart");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-active");
  hamburger.classList.toggle("menu-active");
});

cart.addEventListener("click", () => {
  sidecart.classList.toggle("side-cart-active");
});
