/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/addBasketItem.js":
/*!*****************************************!*\
  !*** ./src/js/modules/addBasketItem.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const addBasketItem = (basketSelector, catalogItemSelector, basketListSelector, itemBtnSelector, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector) => {
  const basket = document.querySelector(basketSelector),
        catalogItems = document.querySelectorAll(catalogItemSelector),
        basketList = document.querySelector(basketListSelector);
  catalogItems.forEach((catalogItem, i) => {
    catalogItem.addEventListener('click', e => {
      if (e.target.classList.contains(itemBtnSelector)) {
        const img = document.querySelectorAll(imgSelector)[i].src,
              name = document.querySelectorAll(nameSelector)[i].innerHTML,
              size = document.querySelectorAll(sizeSelector)[i].innerHTML,
              price = document.querySelectorAll(priceSelector)[i].innerHTML;
        let number = document.querySelectorAll(inputSelector)[i].value,
            count = +price.slice(0, price.length - 3),
            basketItem = document.createElement('div');
        let itemTotal = count * number;

        if (number > 9) {
          itemTotal = itemTotal - itemTotal * 0.1;
        }

        basketItem.classList.add('basket__item');
        basketItem.innerHTML = `
                    <img src="${img}" alt="box" class="basket__item-image">
                    <div class="basket__item_wrapper">
                        <div class="basket__item-name">${name}</div>
                        <div class="basket__item-size">${size}</div>
                        <div class="basket__item-footer">
                            <div class="basket__item-price">Цена: ${count}сом</div>
                            <div class="basket__item-number">кол-во: ${number}</div>
                        </div>
                        <hr>
                        <div class="basket__item-total_wrapper">
                            <div class="basket__item-total">Итого:</div>
                            <div class="basket__item-total_num">${itemTotal}</div>
                        </div>
                    </div>
                    <div class="basket__item-close">&times;</div>
                `;
        basketList.append(basketItem);
        const basketItems = document.querySelectorAll('.basket__item-total_num'),
              finalSum = document.querySelector('.basket__sum-num');
        const sum = [...basketItems].reduce((count, item) => {
          count += parseFloat(item.textContent.replace(/(\..*)\./g, ""));
          return count;
        }, 0);
        finalSum.innerHTML = sum;
        const basketElems = document.querySelectorAll('.basket__item');
        basketElems.forEach((basketEl, i) => {
          basketEl.addEventListener('click', e => {
            if (e.target.classList.contains('basket__item-close')) {
              basketEl.remove();
              document.querySelector('.basket__sum-num').innerHTML = sum - basketItems[i].innerHTML;
              document.querySelector('.basket__length').innerHTML = basketElems.length - 1;
            }
          });
        });
        document.querySelector('.basket__length').innerHTML = basketElems.length;
        basket.style.display = 'block';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addBasketItem);

/***/ }),

/***/ "./src/js/modules/basket.js":
/*!**********************************!*\
  !*** ./src/js/modules/basket.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addBasketItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBasketItem */ "./src/js/modules/addBasketItem.js");


function basket(_ref) {
  let {
    basketSelector,
    basketContentSelector,
    basketBtnSelector,
    basketCloseSelector,
    catalogItemSelector,
    basketListSelector,
    itemBtnSelector,
    basketContentActive,
    imgSelector,
    nameSelector,
    sizeSelector,
    priceSelector,
    inputSelector
  } = _ref;
  const basket = document.querySelector(basketSelector),
        basketContent = document.querySelector(basketContentSelector),
        basketBtn = document.querySelector(basketBtnSelector),
        basketClose = document.querySelector(basketCloseSelector);

  function showBasket(item) {
    basketBtn.addEventListener('click', () => {
      basket.style.display = 'block';
      document.body.style.overflow = 'hidden';
      item.classList.add(basketContentActive);
    });
  }

  function hideBasket(item) {
    basketClose.addEventListener('click', () => {
      item.classList.remove(basketContentActive);
      document.body.style.overflow = '';
    });
    basket.addEventListener('click', () => {
      basketContent.classList.remove(basketContentActive);
      basket.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  showBasket(basketContent);
  hideBasket(basketContent);
  (0,_addBasketItem__WEBPACK_IMPORTED_MODULE_0__["default"])(basketContentSelector, catalogItemSelector, basketListSelector, itemBtnSelector, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector);
}

/* harmony default export */ __webpack_exports__["default"] = (basket);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const forms = (formSelector, formIdSelector, formNameSelector, formPhoneSelector, formSumSelector, thanksFormSelector, grossSelector) => {
  const form = document.querySelector(formSelector),
        formId = document.querySelector(formIdSelector),
        formName = document.querySelector(formNameSelector),
        formPhone = document.querySelector(formPhoneSelector),
        formSum = document.querySelector(formSumSelector),
        thanksForm = document.querySelector(thanksFormSelector),
        gross = document.querySelector(grossSelector);
  form.addEventListener('submit', e => {
    e.preventDefault();
    let formData = new FormData(form),
        request = new XMLHttpRequest(),
        idNum = localStorage.getItem('orderId');
    request.open('POST', 'mailer/smart.php', true);
    request.send(formData);
    formName.value = '';
    formPhone.value = '';
    formSum.value = '';
    idNum = localStorage.setItem('orderId', +idNum + 1);
    formId.value = +localStorage.getItem('orderId'); // console.log(localStorage.setItem('orderId', +idNum + 1));
    // console.log(idNum);

    gross.style.display = 'none';
    thanksForm.style.display = 'block';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const header = (menuSelector, menuitemSelector, hamburgerSelector, hamburgerActive, menulistActive) => {
  const menu = document.querySelector(menuSelector),
        menuItem = document.querySelectorAll(menuitemSelector),
        hamburger = document.querySelector(hamburgerSelector);
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle(hamburgerActive);
    menu.classList.toggle(menulistActive);
  });
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle(hamburgerActive);
      menu.classList.toggle(menulistActive);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = (overlaySelector, grossSelector, btnOrderSelector, modalsSelector, modalSumSelector, basketSumSelector, modalListSelector) => {
  const overlay = document.querySelector(overlaySelector),
        gross = document.querySelector(grossSelector),
        btnOrder = document.querySelector(btnOrderSelector),
        modals = document.querySelectorAll(modalsSelector),
        modalSum = document.querySelector(modalSumSelector),
        basketSum = document.querySelector(basketSumSelector),
        modalList = document.querySelector(modalListSelector);
  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target.classList.contains('modal__close')) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
    overlay.addEventListener('click', e => {
      if (e.target.classList.contains('overlay')) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        document.querySelector('.popup').style.display = 'none';
      }
    });
  });
  btnOrder.addEventListener('click', () => {
    gross.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const names = document.querySelectorAll('.basket__item-name'),
          sizes = document.querySelectorAll('.basket__item-size'),
          numbers = document.querySelectorAll('.basket__item-number'),
          sums = document.querySelectorAll('.basket__item-total_num');
    const quantity = sums.length;
    let i = 0;

    for (i = 0; i < quantity; i++) {
      modalList.innerHTML = modalList.innerHTML + names[i].innerHTML + " " + sizes[i].innerHTML + ", " + numbers[i].innerHTML + " - " + sums[i].innerHTML + `сом;
            <br> `;
    }

    modalSum.value = basketSum.innerHTML;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictures.js":
/*!************************************!*\
  !*** ./src/js/modules/pictures.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const pictures = (catalogItemsSelector, overlaySelector) => {
  const catalogItems = document.querySelectorAll(catalogItemsSelector),
        overlay = document.querySelector(overlaySelector),
        imgPopup = document.createElement('div');
  catalogItems.forEach((catalogItem, i) => {
    catalogItem.addEventListener('click', e => {
      let img = document.querySelectorAll('.catalog-item_img')[i].src,
          popup = document.querySelector('.popup');

      if (e.target.classList.contains('catalog-item_img')) {
        overlay.style.display = 'block';
        imgPopup.classList.add('popup');
        imgPopup.innerHTML = `
                    <img src="${img}" alt="box">
                `;
        imgPopup.style.display = 'block';
        overlay.append(imgPopup);
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pictures);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addBasketItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBasketItem */ "./src/js/modules/addBasketItem.js");


const slider = (wrapperSelector, innerSelector, slidesSelector, btnsListSelector, btnsSelector, prevSelector, nextSelector, activeClass) => {
  const wrapper = document.querySelector(wrapperSelector),
        inner = document.querySelector(innerSelector),
        slides = document.querySelectorAll(slidesSelector),
        btnsList = document.querySelector(btnsListSelector),
        btns = document.querySelectorAll(btnsSelector),
        prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector),
        width = window.getComputedStyle(wrapper).width;
  let offset = 0;
  slides.forEach(slide => {
    slide.style.width = width;
  });
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      let math = i * +width.slice(0, width.length - 2);
      inner.style.transform = `translateX(-${math}px)`;
    });
  });
  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    let newWidth = +width.slice(0, width.length - 2);

    function nextArrow() {
      let i = offset / newWidth;
      hideActive();
      showActive(i);
    }

    nextArrow();
    inner.style.transform = `translateX(-${offset}px)`;
  });
  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    let newWidth = +width.slice(0, width.length - 2);

    function prevArrow() {
      let i = offset / newWidth;
      hideActive();
      showActive(i);
    }

    prevArrow();
    inner.style.transform = `translateX(-${offset}px)`;
  });

  function hideActive() {
    btns.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showActive() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    btns[i].classList.add(activeClass);
  }

  hideActive();
  showActive();
  btnsList.addEventListener('click', e => {
    const target = e.target;

    if (target && (target.classList.contains(btnsSelector.replace(/\./, '')) || target.parentNode.classList.contains(btnsSelector.replace(/\./, '')))) {
      btns.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideActive();
          showActive(i);
        }
      });
    }
  });
  (0,_addBasketItem__WEBPACK_IMPORTED_MODULE_0__["default"])('.basket__content', slidesSelector, '.basket__list', 'carousel__order-btn', '.carousel__item-img img', '.carousel__info-title', '.carousel__info-size', '.carousel__info-new', '.carousel__order-input');
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = function (headerSelector, tabSelector, contentSelector, activeClass) {
  let display = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "flex";
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener('click', e => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/basket */ "./src/js/modules/basket.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_pictures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pictures */ "./src/js/modules/pictures.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");







window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__christmas-tabs', '.catalog__christmas-tab', '.catalog__christmas', 'catalog__christmas-tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__print-tabs', '.catalog__print-tab', '.catalog__print', 'catalog__print-tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__holiday-tabs', '.catalog__holiday-tab', '.catalog__holiday', 'catalog__holiday-tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__sep-tabs', '.catalog__sep-tab', '.catalog__sep', 'catalog__sep-tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__open-tabs', '.catalog__open-tab', '.catalog__open', 'catalog__open-tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__screen-tabs', '.catalog__screen-tab', '.catalog__screen', 'catalog__screen-tab_active');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.catalog__accessory-tabs', '.catalog__accessory-tab', '.catalog__accessory', 'catalog__accessory-tab_active');
  (0,_modules_basket__WEBPACK_IMPORTED_MODULE_1__["default"])({
    basketSelector: '.basket',
    basketContentSelector: '.basket__content',
    basketBtnSelector: '.btn-basket',
    basketCloseSelector: '.basket__close',
    catalogItemSelector: '.catalog-item',
    basketListSelector: '.basket__list',
    itemBtnSelector: 'catalog-item_basket',
    basketContentActive: 'basket__content_active',
    imgSelector: '.catalog-item_img',
    nameSelector: '.catalog-item_name',
    sizeSelector: '.catalog-item_size',
    priceSelector: '.catalog-item_price',
    inputSelector: '.catalog-item_input'
  });
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])('.overlay', '#gross', '.btn-order', '.modal', '.form__sum-num', '.basket__sum-num', '.modal__descr');
  (0,_modules_pictures__WEBPACK_IMPORTED_MODULE_4__["default"])('.catalog-item', '.overlay');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('form', '.form__id-num', '.form__name', '.form__phone', '.form__sum-num', '#thanks', '#gross'); // slider('.carousel', '.carousel__inner', '.carousel__item', '.carousel__pages', '.carousel__page', '.prev', '.next', 'carousel__page-active');

  (0,_modules_header__WEBPACK_IMPORTED_MODULE_6__["default"])('.menu__list', '.menu__item', '.hamburger', 'hamburger_active', 'menu__list_active');
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map