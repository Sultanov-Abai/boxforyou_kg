import tabs from "./modules/tabs";
import basket from "./modules/basket";
import modals from "./modules/modals";
import forms from "./modules/forms";
import pictures from "./modules/pictures";
import slider from "./modules/slider";
import header from "./modules/header";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    
    tabs('.catalog__print-tabs', '.catalog__print-tab', '.catalog__print', 'catalog__print-tab_active');
    tabs('.catalog__holiday-tabs', '.catalog__holiday-tab', '.catalog__holiday', 'catalog__holiday-tab_active');
    tabs('.catalog__sep-tabs', '.catalog__sep-tab', '.catalog__sep', 'catalog__sep-tab_active');
    tabs('.catalog__open-tabs', '.catalog__open-tab', '.catalog__open', 'catalog__open-tab_active');

    tabs('.catalog__screen-tabs', '.catalog__screen-tab', '.catalog__screen', 'catalog__screen-tab_active');
    tabs('.catalog__accessory-tabs', '.catalog__accessory-tab', '.catalog__accessory', 'catalog__accessory-tab_active');
    
    basket({
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

    modals('.overlay', '#gross', '.btn-order', '.modal', '.form__sum-num', '.basket__sum-num', '.modal__descr');
    pictures('.catalog-item', '.overlay');
    forms('form', '.form__id-num', '.form__name', '.form__phone', '.form__sum-num', '#thanks', '#gross');
    // slider('.carousel', '.carousel__inner', '.carousel__item', '.carousel__pages', '.carousel__page', '.prev', '.next', 'carousel__page-active');
    header('.menu__list', '.menu__item', '.hamburger', 'hamburger_active', 'menu__list_active');
});