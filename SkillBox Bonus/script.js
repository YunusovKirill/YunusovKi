// Select

const element = document.querySelector('.js-choice');
const choices = new Choices(element,{
  allowHTML: true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});

// Map

type="text/javascript">
  ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [48.872185, 2.354224],
        zoom: 17
      });
      myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
        },
      });
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Работаем каждый день!'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-30, -40]
      }),

    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
    }

// Mask

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

// Validation

new JustValidate('.form__validatoin', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required:true,
      email:true
    },
  },
  colorWrong: '#FF5C00',
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Введите больше 2 символов',
      maxLength: 'Введите менее 30 символов',
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Введите корректный номер телефон без +7'
    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Введите корректный e-mail',
    },
  },
});
