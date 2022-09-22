// Burger

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.close');
const menuLink = document.querySelectorAll('.header__link')

burger.addEventListener('click', function(){
  menu.classList.add('header__menu-active');
});

close.addEventListener('click', function(){
  menu.classList.remove('header__menu-active');
});

menuLink.forEach(function(el){
  el.addEventListener('click', function(){
    menu.classList.remove('header__menu-active');
  })
});

// Swiper

const swiper = new Swiper('.swiper', {
  slidePreView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  
  autoplay: {
    delay: 5000,
  },
});

// Map

type="text/javascript">
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
        center: [56.849940, 53.231905],
        zoom: 12
    });

    myMap.controls.remove('searchControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');

    // 9 Января
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.878374, 53.255642]
        }
      });      
    var myPlacemark = new ymaps.Placemark([56.878374, 53.255642], {
      hintContent: 'ул. 9 Января, 219А',
      balloonContentHeader: 'ул. 9 Января, 219А',
      balloonContentBody: 
        '<div class="balloon__title">График работы</div>' +
        '<div>Понедельник-суббота: с 10:00 до 20:00</div>' + 
        '<div>Воскресенье: с 10:00 до 19:00</div>', 
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location.png',
      iconImageSize: [80, 80],
      iconOffset: [-25, -45],
      });
      myMap.geoObjects.add(myPlacemark);

    // Азбука Ремонта
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.854064, 53.293992]
      }
    });
    var myPlacemark = new ymaps.Placemark([56.854064, 53.293992], {
      hintContent: 'СЦ "Азбука Ремонта"',
      balloonContentHeader: 'СЦ "Азбука Ремонта"',
      balloonContentBody: 
        '<div class="balloon__title">График работы</div>' +
        '<div>Понедельник-суббота: с 10:00 до 20:00</div>' + 
        '<div>Воскресенье: с 10:00 до 19:00</div>', 
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location.png',
      iconImageSize: [80, 80],
      iconOffset: [-25, -45],
      });
      myMap.geoObjects.add(myPlacemark);

    // Хозяйственная база
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.811602, 53.196311]
      }
    });
    var myPlacemark = new ymaps.Placemark([56.811602, 53.196311], {
      hintContent: 'СГ "Хозяйственная база"',
      balloonContentHeader: 'СГ "Хозяйственная база"',
      balloonContentBody: 
        '<div class="balloon__title">График работы</div>' +
        '<div>Понедельник-суббота: с 10:00 до 20:00</div>' + 
        '<div>Воскресенье: с 10:00 до 19:00</div>', 
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location.png',
      iconImageSize: [80, 80],
      iconOffset: [-25, -45],
      });
      myMap.geoObjects.add(myPlacemark);

    // Гвоздь
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.861249, 53.221767]
      }
    });
    var myPlacemark = new ymaps.Placemark([56.861249, 53.221767], {
      hintContent: 'СГ "Гвоздь"',
      balloonContentHeader: 'СГ "Гвоздь"',
      balloonContentBody: 
        '<div class="balloon__title">График работы</div>' +
        '<div>Понедельник-суббота: с 10:00 до 20:00</div>' + 
        '<div>Воскресенье: с 10:00 до 18:00</div>', 
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location.png',
      iconImageSize: [80, 80],
      iconOffset: [-25, -45],
      });
      myMap.geoObjects.add(myPlacemark);
}
