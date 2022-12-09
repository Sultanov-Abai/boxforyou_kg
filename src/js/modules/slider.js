import addBasketItem from "./addBasketItem";

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

    function showActive(i = 0) {
        btns[i].classList.add(activeClass);
    }

    hideActive();
    showActive();

    btnsList.addEventListener('click', (e) => {
        const target = e.target;
        if (target && 
            (target.classList.contains(btnsSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(btnsSelector.replace(/\./, '')))) {
            btns.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideActive();
                    showActive(i);
                }
            });
        }
    });

    addBasketItem('.basket__content', slidesSelector, '.basket__list', 'carousel__order-btn', '.carousel__item-img img', '.carousel__info-title', '.carousel__info-size', '.carousel__info-new', '.carousel__order-input');
};

export default slider;