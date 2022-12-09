const pictures = (catalogItemsSelector, overlaySelector) => {
    const catalogItems = document.querySelectorAll(catalogItemsSelector),
          overlay = document.querySelector(overlaySelector),
          imgPopup = document.createElement('div');

    catalogItems.forEach((catalogItem, i) => {
        catalogItem.addEventListener('click', e => {
            let img = document.querySelectorAll('.catalog-item_img')[i].src,
                popup = document.querySelector('.popup');

            if (e.target.classList.contains('catalog-item_img')) {
                overlay.style.display = 'block';
                imgPopup.classList.add('popup');               
                imgPopup.innerHTML = `
                    <img src="${img}" alt="box">
                `;
                imgPopup.style.display = 'block';
                overlay.append(imgPopup);
            }
        });
    });
};

export default pictures;