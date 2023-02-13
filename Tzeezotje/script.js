// Slider

const slider = document.querySelector('.swiper');
let swiper = new Swiper(slider, {
  slidePreView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slider2 = document.querySelector('.swiper__photo');
let swiper2 = new Swiper(slider2, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  initialSlide: 1,
  slideToClickedSlide: true,
  centeredSlides: true,
// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next__photo',
    prevEl: '.swiper-button-prev__photo',
  },
});

// Validation

new JustValidate('.form', {
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
      required: 'U heeft geen naam ingevoerd',
      minLength: 'Voer meer dan 2 tekens in',
      maxLength: 'Voer minder dan 30 tekens in',
    },
    tel: {
      required: 'U heeft uw telefoonnummer niet ingevoerd',
      function: 'Voer het juiste telefoonnummer in'
    },
    mail: {
      required: 'U heeft geen e-mail ingevoerd',
      email: 'Voer de juiste e-mail in',
    },
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);
  
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }
  
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
  
    thisForm.reset();
  }
});

// Modal

const btnModal = document.querySelectorAll('.form__btn');
const modals = document.querySelector('.modals');
const modal = document.querySelectorAll('.modal')

btnModal.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modal.forEach((el) => {
			el.classList.remove('modal-visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
		modals.classList.add('modals-visible');
	});
});

modals.addEventListener('click', (e) => {
	if (e.target == modals) {
		modals.classList.remove('modals-visible');
		modal.forEach((el) => {
			el.classList.remove('modal-visible');
		});
	}
});

// Map

function initMap () {
  let tzeezotje = { lat: 51.008226458606565, lng: 3.628124366974068 };
  let opt = {
    center: tzeezotje,
    zoom: 12,
    disableDefaultUI: true,
  };
  
  let map = new google.maps.Map(document.getElementById("map"), opt);
  
  const marker = new google.maps.Marker({
    position: tzeezotje,
    map: map,
    title: "Hooglatemweg 2, 9830",
  });
}

// Burger

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const close = document.querySelector('.close');
const menuLink = document.querySelectorAll('.header__link')

burger.addEventListener('click', function(){
  nav.classList.add('header__nav-active');
});

close.addEventListener('click', function(){
  nav.classList.remove('header__nav-active');
});

menuLink.forEach(function(el){
  el.addEventListener('click', function(){
    nav.classList.remove('header__nav-active');
  })
});