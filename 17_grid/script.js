// Burger

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav-items');
const close = document.querySelector('.close');
const menuLink = document.querySelectorAll('.header__nav-link')

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
