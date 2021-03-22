function adjustSubmenuCategoryTop() {
    const navbarSubmenu = document.querySelector('#submenu');
    const navbarSubmenuCategory = document.querySelector('#submenu__category');

    navbarSubmenuCategory.style.marginTop = (navbarSubmenu.offsetHeight - 36)+ 'px';
}

// adjustSubmenuCategoryTop();
// window.addEventListener('resize', adjustSubmenuCategoryTop);
