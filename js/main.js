let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
// Reviews
var swiper = new Swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Header Background Change On Scroll
  let header = document.querySelector('header')

  window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
  })