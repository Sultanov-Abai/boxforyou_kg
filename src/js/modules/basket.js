import addBasketItem from "./addBasketItem";

function basket({basketSelector, basketContentSelector, basketBtnSelector, basketCloseSelector, catalogItemSelector, basketListSelector, itemBtnSelector, basketContentActive, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector}) {
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

    addBasketItem(basketContentSelector, catalogItemSelector, basketListSelector, itemBtnSelector, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector);
}

export default basket;