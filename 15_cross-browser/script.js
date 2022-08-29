// Burger

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav__items');
const close = document.querySelector('.close');
const menuLink = document.querySelectorAll('.header__link')

burger.addEventListener('click', function(){
  nav.classList.add('header__nav__items-active');
});

close.addEventListener('click', function(){
  nav.classList.remove('header__nav__items-active');
});

menuLink.forEach(function(el){
  el.addEventListener('click', function(){
    nav.classList.remove('header__nav__items-active');
  })
});

// Search

const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const searchClose = document.querySelector('.search-close')

searchBtn.addEventListener('click', function(){
  search.classList.add('search-active');
});

searchClose.addEventListener('click', function(){
  search.classList.remove('search-active');
});

// Slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidePreView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Tabs

let tabsBtn = document.querySelectorAll('.tabs__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(el){
  el.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('tabs__btn--active')});
    e.currentTarget.classList.add('tabs__btn--active');

    tabsItem.forEach(function(el){el.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

// Accordion

new Accordion('.accordion', {
  // elementClass: 'question__text',
  triggerClass: 'question__text'
});
