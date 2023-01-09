const menuListItems = document.querySelectorAll('.nav-list__link');

menuListItems.forEach((menuListItem) => {
    menuListItem.addEventListener('click', () => {
        let currentActive = document.querySelector('.nav-list__link.active');
        currentActive?.classList.remove('active');
        menuListItem.classList.add('active');
    })
})