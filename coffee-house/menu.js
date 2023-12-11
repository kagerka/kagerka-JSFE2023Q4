import products from './products.json' assert { type: "json" };

let body = document.body;


// Menu items from json


let menuList = document.querySelector('.menu__list');
let modalWrapper = document.querySelector('.modal-wrapper');
let coffeeButton = document.querySelector('.offer__button.coffee');
let teaButton = document.querySelector('.offer__button.tea');
let dessertButton = document.querySelector('.offer__button.dessert');


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
  if (e.target?.classList.value.includes('modal-wrapper active')) {
    modalWrapper?.classList.remove('active');
    body.classList.remove('modal-mode');
  }
})


modalWrapper?.addEventListener('change', e => {
  let sizeForm = document.getElementById('size');
  let additiveForm = document.getElementById('additive');
  let totalPrice = document.querySelector('.modal__total-price');
  let modalHeading = document.getElementById("modal__heading");
  const sizeData = new FormData(sizeForm);
  const additiveData = new FormData(additiveForm);
  const size = sizeData.get('sizes');
  const additive1 = additiveData.get('additive1');
  const additive2 = additiveData.get('additive2');
  const additive3 = additiveData.get('additive3');
  let itemPrice = modalHeading?.dataset.price;
  let result = (+itemPrice + +size + +additive1 + +additive2 + +additive3).toFixed(2);
  totalPrice.innerHTML = `$${result}`;
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
        <h3 class="modal__heading" id="modal__heading" data-price="${product.price}">${product.name}</h3>
        <p class="modal__description" id="modal__description">${product.description}</p>
      </div>

      <fieldset class="modal__fieldset">
        <div class="modal__item-size">
          <p>Size</p>
          <form class="modal__size-buttons" id="size">
            
            <label for="${product.sizes.s.size}" class="modal__size-button active">
              <div class="modal__size-letter">S</div>
              <input class="modal__size-input" type="radio" id="${product.sizes.s.size}" name="sizes" value="${product.sizes.s['add-price']}" checked />
              <div class="modal__size-value">${product.sizes.s.size}</div>
            </label>
            
            <label for="${product.sizes.m.size}" class="modal__size-button">
              <div class="modal__size-letter">M</div>
              <input class="modal__size-input" type="radio" id="${product.sizes.m.size}" name="sizes" value="${product.sizes.m['add-price']}" />
              <div class="modal__size-value">${product.sizes.m.size}</div>
            </label>

            <label for="${product.sizes.l.size}" class="modal__size-button">
              <div class="modal__size-letter">L</div>
              <input class="modal__size-input" type="radio" id="${product.sizes.l.size}" name="sizes" value="${product.sizes.l['add-price']}" />
              <div class="modal__size-value">${product.sizes.l.size}</div>
            </label>

          </form>
        </div>
  
        <div class="modal__item-additives">
          <p>Additives</p>
          <form class="modal__additive-buttons" id="additive">
            <label for="${product.additives[0].name}" class="modal__additive-button">
              <div class="modal__additive-number">1</div>
              <input class="modal__additive-input" type="checkbox" id="${product.additives[0].name}" name="additive1" value="${product.additives[0]['add-price']}" />
              <div class="modal__additive-value">${product.additives[0].name}</div>
            </label>
            <label for="${product.additives[1].name}" class="modal__additive-button">
              <div class="modal__additive-number">2</div>
              <input class="modal__additive-input" type="checkbox" id="${product.additives[1].name}" name="additive2" value="${product.additives[1]['add-price']}" />
              <div class="modal__additive-value">${product.additives[1].name}</div>
            </label>
            <label for="${product.additives[2].name}" class="modal__additive-button">
              <div class="modal__additive-number">3</div>
              <input class="modal__additive-input" type="checkbox" id="${product.additives[2].name}" name="additive3" value="${product.additives[2]['add-price']}" />
              <div class="modal__additive-value">${product.additives[2].name}</div>
            </label>
          </form>
        </div>
      </fieldset>

      <div class="modal__total">
        <div class="modal__total-heading">Total:</div>
        <div class="modal__total-price">$${product.price}</div>
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

  let closeButton = document.querySelector('.modal__button');
  closeButton?.addEventListener('click', e => {
    if (modalWrapper?.classList.value.includes('modal-wrapper active')) {
      modalWrapper?.classList.remove('active');
      body.classList.remove('modal-mode');
    }
  })

  let sizeButtons = document.querySelectorAll('.modal__size-input');
  sizeButtons.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelector('.modal__size-button.active')?.classList.remove('active');
      item.closest('label').classList.add('active');
    })
  })

  let additiveButtons = document.querySelectorAll('.modal__additive-input');
  additiveButtons.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      item.closest('label').classList.toggle('active');
    })
  })
}

let showModalWindow = () => {
  let menuItems = document.querySelectorAll('.menu__item');
  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      array.forEach(product => {
        if (e.currentTarget?.id === product.name) {
          modalWrapper?.classList.add('active');
          body.classList.add('modal-mode');
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
  .catch();


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



