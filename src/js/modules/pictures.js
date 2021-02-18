const pictures = (catalogItemsSelector, showedImagesSelector, hiddenImagesSelector, overlaySelector) => {
    const catalogItems = document.querySelectorAll(catalogItemsSelector),
          showedImages = document.querySelectorAll(showedImagesSelector),
          hiddenImages = document.querySelectorAll(hiddenImagesSelector),
          overlay = document.querySelector(overlaySelector),
          imgPopup = document.createElement('div');

    catalogItems.forEach((catalogItem, i) => {
        catalogItem.addEventListener('mouseover', e => {          
            if (e.target.classList.contains('catalog-item_img')) {
                showedImages[i].style.display = 'none';
                hiddenImages[i].style.display = 'block';
            } 
        });
        catalogItem.addEventListener('mouseout', e => {
            if (!e.target.classList.contains('catalog-item_img')) {
                hiddenImages[i].style.display = 'none';
                showedImages[i].style.display = 'block';
                showedImages[i].style.transform = 'scale(1)';
                hiddenImages[i].style.transform = 'scale(1)';
            }
        });
        catalogItem.addEventListener('click', e => {
            let {img, name, size, price} = catalogItem.dataset;

            if (e.target.classList.contains('catalog-item_img') || 
            e.target.classList.contains('catalog-item_img-hidden')) {
                overlay.style.display = 'block';
                imgPopup.innerHTML = `
                    <div class="popup">
                        <img src="${img}" alt="box">
                    </div>
                `;
                overlay.append(imgPopup);
            }
        });
    });
};

export default pictures;