window.addEventListener('load', ()=>{
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
    
    const searchBarContainer = document.querySelector('#searchBarContainer');
    const searchButton = document.querySelector('#searchButton');
    const navbarLogo = document.querySelector('#navbarLogo');
    const searchBar = document.querySelector('#searchBar');
    const searchCancel = document.querySelector('#searchCancel');
    
    searchButton.addEventListener('click', () => {
        navbarLogo.style.display = 'none';
        searchButton.style.display = 'none';
    
        searchBar.classList.add('search-input--open');
        searchBarContainer.classList.add('navbar__mobileSearch--open');
    })
    
    searchCancel.addEventListener('click', ()=>{
        navbarLogo.style.display = 'block';
        searchButton.style.display = 'flex';
    
        searchBar.classList.remove('search-input--open');
        searchBarContainer.classList.remove('navbar__mobileSearch--open');
    })
})