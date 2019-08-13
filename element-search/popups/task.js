const activeWindow = document.getElementById('modal_main');
activeWindow.className = 'modal modal_active';
const clickElement = document.getElementById('modal_success');
document.querySelector('.show-success').onclick = function() {
    (document.getElementById('modal_success')).className = 'modal modal_active';
    };
const closeWindow = document.querySelector('.modal__close');
closeWindow.onclick = function() {
    activeWindow.className = 'modal';
}
