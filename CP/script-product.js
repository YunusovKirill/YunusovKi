//----------------------------------------- Burger -----------------------------------------

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.close');
const menuLink = document.querySelectorAll('.header__link');

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

//----------------------------------------- Select -----------------------------------------

const element = document.querySelector('.js-choice');
const choices = new Choices(element,{
  allowHTML: true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  placeholder: true,
  placeholderValue: "Размеры / Цены",
});

const multiSelect = () => {
  const elements = document.querySelectorAll('.multi-select');
  elements.forEach(el => {
    const choices = new Choices(el,{
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  })
}

multiSelect();

// ----------------------------------------- Modul images -----------------------------------------

const img = document.querySelectorAll('.product__item-img');
const modalOverlay = document.querySelectorAll('.modal__overlay');
const modals = document.querySelectorAll('.modal');

img.forEach((el) => {
	el.addEventListener('click', (e) => {
		let pathImg = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal-visible');
		});

    modalOverlay.forEach((overlay) => {
      let dataPath = overlay.dataset.target;

      if (pathImg === dataPath) {
        overlay.classList.add('modal__overlay-visible');
      }
    })

		document.querySelector(`[data-target="${pathImg}"]`).classList.add('modal-visible');
	});
});

modalOverlay.forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    overlay.classList.remove('modal__overlay-visible');
    modals.forEach((el) => {
      el.classList.remove('modal-visible');
    })
    });
});

// ----------------------------------------- FORM -----------------------------------------

// Modal SUCCESS
const modalSuccess = document.querySelector('.modals__form-success');
modalSuccess.addEventListener('click', () => {
  modalSuccess.classList.remove('modal-visible')
})



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
      email:true
    },
    collection: {
      required:true,
      minLength: 2,
      maxLength: 30,
    },
    design: {
      required:true,
      minLength: 2,
      maxLength: 30,
    },
    size: {
      required:true,
      minLength: 2,
      maxLength: 10,
    },
    color: {
      required:true,
      minLength: 2,
      maxLength: 30,
    },
    adress: {
      required:true,
      minLength: 2,
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
      email: 'Введите корректный e-mail',
    },
    collection: {
      required: 'Вы не ввели название коллекции',
      minLength: 'Введите больше 2 символов',
      maxLength: 'Введите менее 30 символов',
    },
    design: {
      required: 'Вы не ввели дизайн ковра',
      minLength: 'Введите больше 2 символов',
      maxLength: 'Введите менее 30 символов',
    },
    size: {
      required: 'Вы не ввели размер ковра',
      minLength: 'Введите больше 2 символов',
      maxLength: 'Введите менее 10 символов',
    },
    color: {
      required: 'Вы не ввели цвет ковра',
      minLength: 'Введите больше 2 символов',
      maxLength: 'Введите менее 30 символов',
    },
    adress: {
      required: 'Вы не ввели адрес',
      minLength: 'Введите больше 2 символов',
    },    
  },
  
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);
    let xhr = new XMLHttpRequest();
    
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          
          const hiddenModalForm = () => {
            modalsForm.classList.remove('modals-visible');
            modalForm.forEach((el) => {
              el.classList.remove('modal-visible');
            });
          }
          
          modalsForm.addEventListener('click', (e) => {
            if (e.target == modalsForm) {
                hiddenModalForm()
            }
          });

          hiddenModalForm()
          modalSuccess.classList.add('modal-visible')
        }
      }
    }
  
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
  
    thisForm.reset();
  }
});

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

// Modal

const btnModal = document.querySelectorAll('.product__btn');
const modalsForm = document.querySelector('.modals__form');
const modalForm = document.querySelectorAll('.modal__form');
const closeForm = document.querySelector('.form__close');
const btnFormSuccess = document.querySelector('.btn__form-success');

btnModal.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalForm.forEach((el) => {
			el.classList.remove('modal-visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
		modalsForm.classList.add('modals-visible');
	});
});

modalsForm.addEventListener('click', (e) => {
	if (e.target == modalsForm) {
		modalsForm.classList.remove('modals-visible');
		modalForm.forEach((el) => {
			el.classList.remove('modal-visible');
		});
	}
});

closeForm.addEventListener('click', function() {
  modalsForm.classList.remove('modals-visible');
});

btnFormSuccess.addEventListener('click', function() {
  modalSuccess.classList.remove('modal-visible')
});