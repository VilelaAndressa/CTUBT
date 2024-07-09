function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }

}

const viewMoreButtons = document.querySelectorAll('.view-more-expand, .view-more-collapse');

viewMoreButtons.forEach(button => {
  button.onclick = (event) => {
    const holder = button.parentElement.parentElement;
    holder.classList.toggle('view-more--expand');
  }
});

var swiper = new Swiper(".home-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

let swiperCards = new Swiper(".testimonial-content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

let swiperPlan = new Swiper(".plan-content", {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  grabCursor: true,

});

let swiperTeacher = new Swiper(".teacher-content", {
  watchSlidesProgress: true,
  spaceBetween: 32,
  grabCursor: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

let swiperClothes = new Swiper(".card-content", {
  watchSlidesProgress: true,
  spaceBetween: 32,
  grabCursor: true,
  
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


