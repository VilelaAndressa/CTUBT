function clickMenu(){
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

var swiper = new Swiper(".mySwiper", {
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

  