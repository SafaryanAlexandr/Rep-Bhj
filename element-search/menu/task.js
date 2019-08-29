const menuElements = document.querySelectorAll('.menu_sub');
for( i = 0; i <  menuElements.length; i++) {
    let menuActive = menuElements[i].closest('li').querySelector('.menu__link');
    let menuElement = menuElements[i];
    menuActive.onclick = function(event) {
        event.preventDefault();
    }
    menuActive.addEventListener( 'click' , function() {
        menuElement.className = 'menu menu_sub menu_active';
        });

}