let navToggle = document.querySelector('.navTuggle');
let nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})

const swiper = new Swiper('.swiper', {

    pagination: {
      el: '.swiper-pagination',
    },

    loop: true,

    autoplay: {
      delay: 4000,
    },
   
  });

 
