import tabs from "./modules/tabs";
import basket from "./modules/basket";
import modals from "./modules/modals";
import forms from "./modules/forms";
import pictures from "./modules/pictures";
import header from "./modules/header";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    tabs('.catalog__craft-tabs', '.catalog__craft-tab', '.catalog__craft', 'catalog__craft-tab_active');
    tabs('.catalog__holiday-tabs', '.catalog__holiday-tab', '.catalog__holiday', 'catalog__holiday-tab_active');
    tabs('.catalog__screen-tabs', '.catalog__screen-tab', '.catalog__screen', 'catalog__screen-tab_active');
    basket('.basket__content', '.btn-basket', '.basket__close', '.catalog-item', '.basket__list');
    modals('.overlay', '#gross', '.btn-order', '.modal', '.form__sum-num', '.basket__sum-num', '.modal__descr');
    pictures('.catalog-item', '.overlay');
    forms('form', '.form__id-num', '.form__name', '.form__phone', '.form__sum-num', '#thanks', '#gross');
    header();
});