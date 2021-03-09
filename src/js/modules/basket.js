import addBasketItem from "./addBasketItem";

function basket({basketSelector, basketBtnSelector, basketCloseSelector, catalogItemSelector, basketListSelector, itemBtnSelector, basketContentActive, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector}) {
    const basket = document.querySelector(basketSelector),
          basketBtn = document.querySelector(basketBtnSelector),
          basketClose = document.querySelector(basketCloseSelector);        

    function showBasket(item) {
        basketBtn.addEventListener('click', () => {
            item.classList.add(basketContentActive);
        });
    }

    function hideBasket(item) {
        basketClose.addEventListener('click', () => {
            item.classList.remove(basketContentActive);
        });
    }

    showBasket(basket);
    hideBasket(basket);

    addBasketItem(basketSelector, catalogItemSelector, basketListSelector, itemBtnSelector, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector);
}

export default basket;