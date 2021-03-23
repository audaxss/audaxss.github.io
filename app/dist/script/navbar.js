function adjustSubmenuCategoryTop() {
    const topNavbar = document.querySelector('#top__navbar');
    const elementMarginTop = document.querySelector('#marginTop');

    elementMarginTop.style.marginTop = (topNavbar.offsetHeight) + 'px';
}

adjustSubmenuCategoryTop();
window.addEventListener('resize', adjustSubmenuCategoryTop);

const submenuAnchors = document.querySelectorAll('#submenu__anchors > li');
const submenuSale = document.querySelectorAll('#submenu__sale > li');
const overlay = document.querySelector('#overlay');

function backgroundOverlay(element) {
    element.addEventListener('mouseover', () => {
        overlay.style.display = 'block';
    })

    element.addEventListener('mouseout', () => {
        overlay.style.display = 'none';
        overlay.removeAttribute('style');
    })
}

submenuAnchors.forEach(anchor => {
    backgroundOverlay(anchor);
});

submenuSale.forEach(anchor => {
    backgroundOverlay(anchor);
});