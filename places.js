const places = [{
    placesToVisit: [
        {
            "name": "Darjeeling",
            "images": "https://www.holidify.com/images/bgImages/MUSSOORIE.jpg",
            "location": "https://www.google.co.in/maps/place/Mussoorie,+Uttarakhand/@30.4547186,78.0414204,13z/data=!3m1!4b1!4m5!3m4!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!8m2!3d30.4597892!4d78.0643723"
        },
        {
            "name": "Gorumara National Park",
            "images": "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
            "location": "https://goo.gl/maps/BgHbkbMuY9KFn19Z6"
        },
        {
            "name": "Kalimpong",
            "images": "https://www.holidify.com/images/bgImages/BADRINATH%20.jpg",
            "location": "https://www.google.co.in/maps/place/Badrinath,+Uttarakhand+246422/@30.7417338,79.4852149,15z/data=!3m1!4b1!4m5!3m4!1s0x39a78e9f973108e7:0xf05a8b5e0c71473!8m2!3d30.7433085!4d79.4937634"
        },
        {
            "name": "Mirik",
            "images": "https://www.holidify.com/images/bgImages/HARIDWAR.jpg",
            "location": "https://www.google.co.in/maps/place/Haridwar,+Uttarakhand/@29.9526313,78.0458849,12z/data=!3m1!4b1!4m5!3m4!1s0x3909470eb8ee57c9:0x4e449176a640f5f3!8m2!3d29.9456906!4d78.1642478"
        }]
}]

const showLocationInfo = (info) => {
    const container = document.getElementById('place_container');
    var containerContent = ''
    for(let i=0;i<places[0].placesToVisit.length;i++){
        containerContent += `
    
            <div class="swiper-slide slide">
                <div class="image">
                    <img src="${info[0].placesToVisit[i].images}" alt="">
                </div>
                <div class="content">
                    <h3>${info[0].placesToVisit[i].name}</h3>
                    <div class="button-container">
                        <a href="${info[0].placesToVisit[i].location}" target="_blank" class="btn">Get location</a>
                    </div>
                </div>
            </div>
            `;

    }
    console.log(containerContent)
    content = `<div class="swiper place-slider">
    <div class="swiper-wrapper">` + containerContent + `</div>
    <div class="swiper-pagination-1"></div>
    <div class="swiper-button-prev-1"></div>
    <div class="swiper-button-next-1"></div>
    </div>`
    container.innerHTML = content;

};
showLocationInfo(places);
const settings1 = {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination-1',
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
    // loop: true,
  
    // speed: 700,
    // autoplay: {
    //     delay: 50000,
    //   },
  
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
  
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // }
  };
  
  const swiper1 = new Swiper(".place-slider", settings1);
  

