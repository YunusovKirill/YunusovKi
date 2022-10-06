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

// Map

type="text/javascript">
  ymaps.ready(init);
  function init(){
    var myMap2 = new ymaps.Map("map2", {
        center: [56.849940, 53.231905],
        zoom: 12
    });

    myMap2.controls.remove('searchControl');
    myMap2.controls.remove('zoomControl');
    myMap2.controls.remove('trafficControl');
    myMap2.controls.remove('geolocationControl');
    myMap2.controls.remove('fullscreenControl');
    myMap2.controls.remove('rulerControl');

    // 9 Января
    var myGeoObject2 = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.878374, 53.255642]
        }
      });      
    var myPlacemark2 = new ymaps.Placemark([56.878374, 53.255642], {
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
      myMap2.geoObjects.add(myPlacemark2);

    // Азбука Ремонта
    var myGeoObject2 = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.854064, 53.293992]
      }
    });
    var myPlacemark2 = new ymaps.Placemark([56.854064, 53.293992], {
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
      myMap2.geoObjects.add(myPlacemark2);

    // Хозяйственная база
    var myGeoObject2 = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.811602, 53.196311]
      }
    });
    var myPlacemark2 = new ymaps.Placemark([56.811602, 53.196311], {
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
      myMap2.geoObjects.add(myPlacemark2);

    // Гвоздь
    var myGeoObject2 = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [56.861249, 53.221767]
      }
    });
    var myPlacemark2 = new ymaps.Placemark([56.861249, 53.221767], {
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
      myMap2.geoObjects.add(myPlacemark2);
}
