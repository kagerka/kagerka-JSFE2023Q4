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


// Menu items from json


let menuList = document.querySelector('.menu__list');
let modalWrapper = document.querySelector('.modal-wrapper');
let coffeeButton = document.querySelector('.offer__button.coffee');
let teaButton = document.querySelector('.offer__button.tea');
let dessertButton = document.querySelector('.offer__button.dessert');
let modalHeading = document.getElementById("modal__heading");

const array = products.filter(item => item);


let menuMenuItems = (array) => {
  menuList.innerHTML = '';
  array.map(i => {
    menuList.insertAdjacentHTML("beforeend", `
    <div class="menu__item" id="${i.name}">
      <div class="menu__image">
        <img src="${i.image}" alt="${i.name}">
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
};

// Modal window

modalWrapper?.addEventListener('click', e => {
  if (e.target?.classList.value.includes('active')) {
    modalWrapper?.classList.remove('active');
  }
})

let addModalHTML = (product) => {
  modalWrapper.innerHTML = '';
  modalWrapper.insertAdjacentHTML("afterbegin", `
  
  <div class="modal">
    <div class="modal__img">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal__info">

      <div class="modal__item-text">
        <h3 class="modal__heading" id="modal__heading">${product.name}</h3>
        <p class="modal__description" id="modal__description">${product.description}</p>
      </div>

      <div class="modal__item-size">
        <p>Size</p>
        <div class="modal__size-buttons">
          <div class="modal__size-button active">
            <div class="modal__size-letter">S</div>
            <div>200 ml</div>
          </div>
          <div class="modal__size-button">
            <div class="modal__size-letter">M</div>
            <div>300 ml</div>
          </div>
          <div class="modal__size-button">
            <div class="modal__size-letter">L</div>
            <div>400 ml</div>
          </div>
        </div>
      </div>

      <div class="modal__item-additives">
        <p>Additives</p>
        <div class="modal__additive-buttons">
          <div class="modal__additive-button">
            <div class="modal__additive-number">1</div>
            <div>Sugar</div>
          </div>
          <div class="modal__additive-button">
            <div class="modal__additive-number">2</div>
            <div>Cinnamon</div>
          </div>
          <div class="modal__additive-button">
            <div class="modal__additive-number">3</div>
            <div>Syrup</div>
          </div>
        </div>
      </div>

      <div class="modal__total">
        <div class="modal__total-heading">Total:</div>
        <div class="modal__total-price">$7.00</div>
      </div>
      <div class="modal__information">
        <div class="modal__information-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_268_9737)">
              <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_268_9737">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p class="modal__information-text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
      </div>

      <div class="modal__button">
        Close
      </div>
    </div>
  </div>
`);
}

let showModalWindow = () => {
  let menuItems = document.querySelectorAll('.menu__item');
  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      // if (e.currentTarget.id === array.name)
      array.forEach(product => {
        if (e.currentTarget?.id === product.name) {
          modalWrapper?.classList.add('active');
          addModalHTML(product);
        }
      })
    })
  })
};


// COFFEE window.onload
fetch('products.json')
  .then((response) => {
    teaButton?.classList.remove('active');
    coffeeButton?.classList.add('active');
    dessertButton?.classList.remove('active');
    const coffeeItems = products.filter(item => item.category === 'coffee');
    menuMenuItems(coffeeItems);
  })
  .then((response) => {
    showModalWindow();
  })
  .catch(() => console.log('some error'));


// TEA onclick
teaButton?.addEventListener('click', e => {
  teaButton?.classList.add('active');
  coffeeButton?.classList.remove('active');
  dessertButton?.classList.remove('active');

  fetch('products.json')
    .then((response) => {
      const teaItems = products.filter(item => item.category === 'tea');
      menuMenuItems(teaItems);
    })
    .then((response) => {
      showModalWindow();
    })
});

// COFFEE onclick 
coffeeButton?.addEventListener('click', e => {
  teaButton?.classList.remove('active');
  coffeeButton?.classList.add('active');
  dessertButton?.classList.remove('active');

  fetch('products.json')
    .then((response) => {
      const coffeeItems = products.filter(item => item.category === 'coffee');
      menuMenuItems(coffeeItems);
    })
    .then((response) => {
      showModalWindow();
    })
});

// DESSERT onclick 
dessertButton?.addEventListener('click', e => {
  teaButton?.classList.remove('active');
  coffeeButton?.classList.remove('active');
  dessertButton?.classList.add('active');

  fetch('products.json')
    .then((response) => {
      const dessertItems = products.filter(item => item.category === 'dessert');
      menuMenuItems(dessertItems);
    })
    .then((response) => {
      showModalWindow();
    })
});




