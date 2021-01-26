import tabs from "./modules/tabs";
import basket from "./modules/basket";
import modals from "./modules/modals";
import forms from "./modules/forms";
import pictures from "./modules/pictures";
import header from "./modules/header";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    tabs('.catalog__pag-tabs', '.catalog__pag-tab', '.catalog__pag', 'catalog__pag-tab_active');
    basket('.basket__content', '.btn-basket', '.basket__close', '.catalog-item', '.basket__list');
    modals('.overlay', '#gross', '.btn-order', '.modal', '.form__sum-num', '.basket__sum-num', '.modal__descr', '.basket__item-name');
    pictures('.catalog-item', '.catalog-item_img', '.catalog-item_img-hidden');
    forms('form', '.form__id-num', '.form__name', '.form__phone', '.form__sum-num', '#thanks', '#gross');
    header();
});