const activeWindow = document.getElementById('modal_main');
activeWindow.classList.add('modal_active');
document.querySelector('.show-success').onclick = function() {
    (document.getElementById('modal_success')).classList.add('modal_active');
    activeWindow.classList.remove('modal_active');
    };
const elements = document.querySelectorAll('.modal__close_times');
for (i= 0; i < elements.length; i++) {
    let closeWindow = elements[i];
    closeWindow.onclick = function() {
        activeWindow.className = 'modal';
        document.getElementById('modal_success').className = 'modal';
   }
}
