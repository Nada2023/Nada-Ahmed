// جافاسكريبت ملهاش كبير

// ---------- clickable menu ---------


let nevMenu = document.querySelector( ".nevMenu" );
let navLinks = document.querySelector(".navLinks");
nevMenu.addEventListener( "click", () => {
  navLinks.classList.toggle( "active" );
} )


// ---------- Slider ---------

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  centerSlider: "true",
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
} );

