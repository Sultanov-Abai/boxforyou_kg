const pictures = (catalogItemsSelector, showedImagesSelector, hiddenImagesSelector) => {
    const catalogItems = document.querySelectorAll(catalogItemsSelector),
          showedImages = document.querySelectorAll(showedImagesSelector),
          hiddenImages = document.querySelectorAll(hiddenImagesSelector);

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
            if (e.target.classList.contains('catalog-item_img') || 
            e.target.classList.contains('catalog-item_img-hidden')) {
                showedImages[i].style.transform = 'scale(1.4)';
                hiddenImages[i].style.transform = 'scale(1.4)';
            }
        });
    });
};

export default pictures;