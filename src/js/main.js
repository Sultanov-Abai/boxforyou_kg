import tabs from "./modules/tabs";
import basket from './modules/basket';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    basket('.basket__content', '.catalog-item_basket', '.btn-basket', '.basket__close');
});