const modals = (overlaySelector, grossSelector, btnOrderSelector, modalsSelector, modalSumSelector, basketSumSelector, modalListSelector) => {
    const overlay = document.querySelector(overlaySelector),
          gross = document.querySelector(grossSelector),
          btnOrder = document.querySelector(btnOrderSelector),
          modals = document.querySelectorAll(modalsSelector),
          modalSum = document.querySelector(modalSumSelector),
          basketSum = document.querySelector(basketSumSelector),
          modalList = document.querySelector(modalListSelector);

    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__close')) {
                modal.style.display = 'none';
                overlay.style.display = 'none';
            }
        });
    });

    btnOrder.addEventListener('click', () => {
        gross.style.display = 'block';
        overlay.style.display = 'block';

        const names = document.querySelectorAll('.basket__item-name'),
              sizes = document.querySelectorAll('.basket__item-size'),
              numbers = document.querySelectorAll('.basket__item-number'),
              sums = document.querySelectorAll('.basket__item-total_num');

        const quantity = sums.length;
        
        let i = 0;
        for (i = 0; i < quantity; i++) {
            modalList.innerHTML = modalList.innerHTML + names[i].innerHTML + " " + sizes[i].innerHTML + ", " + numbers[i].innerHTML + " - " + sums[i].innerHTML + `сом;
            `;
        }

        modalSum.innerHTML = basketSum.innerHTML;
    });
};

export default modals;