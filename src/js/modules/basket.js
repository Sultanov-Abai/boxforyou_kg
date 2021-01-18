const basket = (basketSelector, cardBtnSelector, basketBtnSelector, basketCloseSelector) => {
    const basket = document.querySelector(basketSelector),
          cardBtn = document.querySelectorAll(cardBtnSelector),
          basketBtn = document.querySelector(basketBtnSelector),
          basketClose = document.querySelector(basketCloseSelector);

    function showBasket(item) {
        basketBtn.addEventListener('click', () => {
            item.style.display = 'block';
        });
    }

    function hideBasket(item) {
        basketClose.addEventListener('click', () => {
            item.style.display = 'none';
        });
    }

    showBasket(basket);
    hideBasket(basket);

    const catalogItems = document.querySelectorAll('.catalog-item');
    const basketList = document.querySelector('.basket__list');
    catalogItems.forEach((catalogItem, i) => {
        catalogItem.addEventListener('click', (e) => {
            if (e.target.classList.contains('catalog-item_image')) {
                const {img, name, size, price} = catalogItem.dataset,
                      basketItem = document.createElement('div');
                let number = document.querySelectorAll('.catalog-item_input')[i].value;

                const itemTotal = price * number;

                basketItem.innerHTML = `
                    <div class="basket__item">
                        <img src="${img}" alt="box" class="basket__item-image">
                        <div class="basket__item_wrapper">
                            <div class="basket__item-name">${name}</div>
                            <div class="basket__item-size">${size}мм</div>
                            <div class="basket__item-footer">
                                <div class="basket__item-price">Цена: ${price}сом</div>
                                <div class="basket__item-number">Кол-во: ${number}</div>
                            </div>
                            <hr>
                            <div class="basket__item-total_wrapper">
                                <div class="basket__item-total">Итого:</div>
                                <div class="basket__item-total_num">${itemTotal}</div>
                            </div>
                        </div>
                        <div class="basket__item-close">&times;</div>
                    </div>
                `;
                basketList.append(basketItem);

                const items = document.querySelectorAll('.basket__item-total_num');
                const sum = [...items].reduce((count, item) => {
                count += parseFloat(item.textContent.replace(/(\..*)\./g, ""));
                return count;
                }, 0);
                document.querySelector('.basket__sum-num').innerHTML = sum;

            basket.style.display = 'block';
            }
        });

    });

    // document.querySelector('.button').addEventListener('click', () => {
    //     let a = document.querySelector('.input').value;
    //     document.querySelector('.text').innerHTML = a;
    // });
};

export default basket;