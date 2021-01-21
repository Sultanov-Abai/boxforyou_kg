import tabs from "./modules/tabs";
import basket from "./modules/basket";
import modals from "./modules/modals";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    basket('.basket__content', '.btn-basket', '.basket__close', '.catalog-item', '.basket__list');
    modals('.overlay', '#gross', '.btn-order', '.modal', '.form__sum-num', '.basket__sum-num', '.modal__descr');
    forms();
});