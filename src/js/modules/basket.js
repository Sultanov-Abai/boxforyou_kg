function basket({basketSelector, basketBtnSelector, basketCloseSelector, catalogItemSelector, basketListSelector, basketContentActive, imgSelector, nameSelector, sizeSelector, priceSelector, inputSelector}) {
    const basket = document.querySelector(basketSelector),
          basketBtn = document.querySelector(basketBtnSelector),
          basketClose = document.querySelector(basketCloseSelector),
          catalogItems = document.querySelectorAll(catalogItemSelector),
          basketList = document.querySelector(basketListSelector);
          

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

    catalogItems.forEach((catalogItem, i) => {
        catalogItem.addEventListener('click', e => {
            if (e.target.classList.contains('catalog-item_basket')) {
                // let {img, name, size, price} = catalogItem.dataset,
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
                        }
                    });
                });
            basket.style.display = 'block';
            }
        });
    });   
}

export default basket;