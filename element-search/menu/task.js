const menuElements = document.querySelectorAll('.menu_sub');

for( i = 0; i <  menuElements.length; i++) {
    let menuActive = menuElements[i].closest('li').querySelector('.menu__link');
    let menuElement = menuElements[i];
    
    menuActive.onclick = function(event) {
        event.preventDefault();
    }
    //menuActive.addEventListener( 'mousemove' , function() {//
       // menuElement.classList.add('menu_active');//
      //  });//
   
        menuActive.addEventListener( 'click' , function() {
        menuElement.classList.toggle('menu_active');
         });
    
    
}