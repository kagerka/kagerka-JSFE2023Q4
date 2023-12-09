// Burger menu

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


// Slider

let favItems = document.querySelectorAll('.favorite__item');
let leftArrow = document.querySelector('.favorite__button-arrow.left');
let rightArrow = document.querySelector('.favorite__button-arrow.right');

let slideNumber = 0;

let sliderAnimation = (arrow) => {
  if (slideNumber > 2) {
    slideNumber = 0;
  }
  if (slideNumber < 0) {
    slideNumber = 2
  }
  if (arrow == 'right') {
    if (slideNumber == 0) {
      favItems[slideNumber]?.classList.remove('active');
      favItems[slideNumber]?.classList.add('hidden');
      favItems[slideNumber + 1]?.classList.remove('hidden');
      favItems[slideNumber + 1]?.classList.add('active');
    }

    if (slideNumber == 1) {
      favItems[slideNumber]?.classList.remove('active');
      favItems[slideNumber]?.classList.add('hidden');
      favItems[slideNumber + 1]?.classList.remove('hidden');
      favItems[slideNumber + 1]?.classList.add('active');
    }

    if (slideNumber == 2) {
      favItems[slideNumber]?.classList.remove('active');
      favItems[slideNumber]?.classList.add('hidden');
      favItems[0]?.classList.remove('hidden');
      favItems[0]?.classList.add('active');
    }
    slideNumber++;
  }

  if (arrow == 'left') {
    if (slideNumber == 2) {
      favItems[slideNumber]?.classList.remove('active');
      favItems[slideNumber]?.classList.add('hidden');
      favItems[slideNumber - 1]?.classList.remove('hidden');
      favItems[slideNumber - 1]?.classList.add('active');
      console.log('2');
    }

    if (slideNumber == 1) {
      favItems[slideNumber]?.classList.remove('active');
      favItems[slideNumber]?.classList.add('hidden');
      favItems[slideNumber - 1]?.classList.remove('hidden');
      favItems[slideNumber - 1]?.classList.add('active');
      console.log('1');
    }
    if (slideNumber == 0) {
      favItems[slideNumber]?.classList.remove('active');
      favItems[slideNumber]?.classList.add('hidden');
      favItems[favItems.length - 1]?.classList.remove('hidden');
      favItems[favItems.length - 1]?.classList.add('active');
      console.log('1');
    }
    slideNumber--;
  }

}

rightArrow?.addEventListener('click', e => {
  sliderAnimation('right');
})
leftArrow?.addEventListener('click', e => {
  sliderAnimation('left');
})

setInterval(() => {
  sliderAnimation('right');
}, 5000);


