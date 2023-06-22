const places = [{
    placesToVisit: [
        {
            "name": "Darjeeling",
            "images": "images/background/Darjeeling.jpg",
            "location": "https://goo.gl/maps/BBJUgSgZsUGYoBmi8"
        },
        {
            "name": "Gorumara National Park",
            "images": "images/background/Gorumara.jpg",
            "location": "https://goo.gl/maps/BgHbkbMuY9KFn19Z6"
        },
        {
            "name": "Kalimpong",
            "images": "images/background/Kalimpong.jpg",
            "location": "https://goo.gl/maps/bs8HTUu581W5xXBg7"
        },
        {
            "name": "Mirik",
            "images": "images/background/Mirik.jpeg",
            "location": "https://goo.gl/maps/VznfwYUNsyV9urEw7"
        },
        {
            "name": "Kurseong",
            "images": "https://upload.wikimedia.org/wikipedia/commons/4/42/Kurseong_panorama_by_Mayukh_Ghose.jpg",
            "location": "https://goo.gl/maps/ehj67QFLvWCFi1RJ8"
        },
        {
            "name": "Lava",
            "images": "images/background/Lava.jpg",
            "location": "https://goo.gl/maps/X9GoVXJPbG4otYYX8"
        },
        {
            "name": "Ghum",
            "images": "images/background/Ghum.jpg",
            "location": "https://goo.gl/maps/6uKdxcbp7A42dmw86"
        },
        {
            "name": "Jaldapara National Park",
            "images": "images/background/Jaldapara.jpg",
            "location": "https://goo.gl/maps/iXPss2D6spnz2ebZ8"
        },
        {
            "name": "Sikkim",
            "images": "images/background/Sikkim.jpg",
            "location": "https://goo.gl/maps/D3UxTBgc8Qu1RAVf6"
        },
        {
            "name": "Cooch Behar",
            "images": "images/background/Cooch_Behar.jpg",
            "location": "https://goo.gl/maps/sntshZ69QXYmVgjh9"
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
  };
  
  const swiper1 = new Swiper(".place-slider", settings1);
  

