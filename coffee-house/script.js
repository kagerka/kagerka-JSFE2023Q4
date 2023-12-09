import products from './products.json' assert { type: "json" };

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


// Modal
// fetch("products.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

let menuList = document.querySelector('.menu__list');
let menuItem = document.querySelectorAll('.menu__item');
let modalWrapper = document.querySelector('.modal-wrapper');

menuItem.forEach(i => i.addEventListener('click', function () {
  i.classList.contains('menu__item') ? modalWrapper?.classList.add('active') : null;
  const id = this.id;
  console.log(id);
}))

modalWrapper?.addEventListener('click', e => {
  if (e.target?.classList.value.includes('active')) {
    modalWrapper?.classList.remove('active');
  }
})


// json

console.log(products);
const array = products.filter(item => item.category === 'coffee');
console.log(array[0].description);

let modalHeading = document.getElementById("modal__heading");
modalHeading?.addEventListener('click', function () {
  const id = this.id;
  console.log(id);
});


let func = (array) => {
  menuList.innerHTML = '';
  array.map(i => {
    menuList.insertAdjacentHTML("beforeend", `
    <div class="menu__item" id="Irish coffee">
      <div class="menu__image">
        <img src="${i.image}" alt="Irish coffee">
      </div>
      <div class="menu__info">
        <div class="menu__text">
          <h2 class="menu__name">${i.name}</h2>
          <p class="menu__description">${i.description}</p>
        </div>
        <p class="menu__price">$${i.price}</p>
      </div>
    </div>
  `);
  })

}

let coffeeButton = document.querySelector('.offer__button.coffee');
let teaButton = document.querySelector('.offer__button.tea');
let dessertButton = document.querySelector('.offer__button.dessert');
coffeeButton?.addEventListener('click', e => {
  teaButton?.classList.remove('active');
  coffeeButton?.classList.add('active');
  dessertButton?.classList.remove('active');
  const coffeeItems = products.filter(item => item.category === 'coffee');
  func(coffeeItems);
})

teaButton?.addEventListener('click', e => {
  teaButton?.classList.add('active');
  coffeeButton?.classList.remove('active');
  dessertButton?.classList.remove('active');
  const teaItems = products.filter(item => item.category === 'tea');
  func(teaItems);
})

dessertButton?.addEventListener('click', e => {
  teaButton?.classList.remove('active');
  coffeeButton?.classList.remove('active');
  dessertButton?.classList.add('active');
  const dessertItems = products.filter(item => item.category === 'dessert');
  func(dessertItems);
})
