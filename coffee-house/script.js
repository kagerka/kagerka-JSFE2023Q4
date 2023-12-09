let burger = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.burger__menu');
let headerNavLinks = document.querySelector('.header__nav');
let headerNavMenuLink = document.querySelector('.header__nav.menu-link');
let body = document.body;
let link = document.querySelectorAll('.header__link');
let header = document.querySelector('.header');


burger?.addEventListener('click', e => {
  link.forEach(a => a.addEventListener('click', e => {
    burger?.classList.remove('active');
    burgerMenu?.classList.remove('active');
    headerNavLinks?.classList.remove('active');
    headerNavMenuLink?.classList.remove('active');
    body.classList.remove('active');
    header?.classList.remove('active');
  }))
  burger?.classList.toggle('active');
  burgerMenu?.classList.toggle('active');
  headerNavLinks?.classList.toggle('active');
  headerNavMenuLink?.classList.toggle('active');
  body.classList.toggle('active');
  header?.classList.toggle('active');
})

