const settings = {
    loop: true,
  
    speed: 700,
    autoplay: {
        delay: 5000,
      },
  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  
  const swiper = new Swiper(".mySwiper", settings);
