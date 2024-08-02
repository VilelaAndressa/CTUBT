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

let swiperPlan = new Swiper(".plans-content", {
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 2,
    },
  },
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

function confirmarRedirecionamento() { 
  var confirmar = confirm("Você será direcionado para um site externo. Deseja continuar?");
  if (confirmar) {
      window.location.href = "https://evo-totem.w12app.com.br/evo/5989/totem/landing-page/agenda";
  } 
  return false;
}

function confirmarPlano() { 
  var confirmar = confirm("Você será direcionado para um site externo. Deseja continuar?");
  if (confirmar) {
      window.location.href = "https://evo-totem.w12app.com.br/evo/5989/site/cnD82oPxrnsNlb2m%5BPLUS%5DpchHg%5BEQUAL%5D%5BEQUAL%5D";
  } 
  return false;
}