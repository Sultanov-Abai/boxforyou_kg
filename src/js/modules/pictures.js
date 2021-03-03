const pictures = (catalogItemsSelector, overlaySelector) => {
    const catalogItems = document.querySelectorAll(catalogItemsSelector),
          overlay = document.querySelector(overlaySelector),
          imgPopup = document.createElement('div');

    catalogItems.forEach((catalogItem, i) => {
        catalogItem.addEventListener('click', e => {
            let img = document.querySelectorAll('.catalog-item_img')[i].src;

            if (e.target.classList.contains('catalog-item_img') || 
            e.target.classList.contains('catalog-item_img-hidden')) {
                overlay.style.display = 'block';
                imgPopup.classList.add('popup');
                imgPopup.innerHTML = `
                    <img src="${img}" alt="box">
                `;
                overlay.append(imgPopup);
            }
        });
    });
};

export default pictures;