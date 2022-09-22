// Burger

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

// Select

const element = document.querySelector('.js-choice');
const choices = new Choices(element,{
  allowHTML: true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
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