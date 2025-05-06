/*swiper slide sidebar*/

var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,

    },
    autoplay: {
        delay: 2500,
        
      },
    loop: true,
  });


/*swiper slide sale slide*/

var swiper = new Swiper(".sale_sec", {

    slidesPerView:5,
    spaceBetween:20,
    autoplay:{
        delay: 2500,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
}
);


var swiper = new Swiper(".product_swip", {

  slidesPerView:4,
  spaceBetween:20,
  autoplay:{
      delay: 2500,
  },
  navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  loop: true,
}
);