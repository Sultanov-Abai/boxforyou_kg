const header = (menuSelector, menuitemSelector, hamburgerSelector, hamburgerActive, menulistActive) => {
    const menu = document.querySelector(menuSelector),
          menuItem = document.querySelectorAll(menuitemSelector),
          hamburger = document.querySelector(hamburgerSelector);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle(hamburgerActive);
        menu.classList.toggle(menulistActive);
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle(hamburgerActive);
            menu.classList.toggle(menulistActive);
        });
    });
};

export default header;