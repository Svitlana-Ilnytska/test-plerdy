// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       "@0.00": {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       "@0.75": {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       "@1.00": {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//       "@1.50": {
//         slidesPerView: 4,
//         spaceBetween: 50,
//       },
//     },
//   });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.65": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@0.85": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
  });

