document.querySelector('.slider__arrow_next').onclick = function() {
    nextSlider();
};
document.querySelector('.slider__arrow_prev').onclick = function(){
    prevSlider();
};
const slides = document.querySelectorAll('.slider__item');// все слайды
function activeSlide(n) {
    for (i= 1; i < slides.length; i++) {
        slides[i].className = 'slider__item';
    }
    slides[n].className = 'slider__item slider__item_active';
}
let number = 1;
function nextSlider() {
    if(number != slides.length){
        number++;  
    } else {
        number = 1;
    }
    activeSlide(number);
}
function prevSlider() {
    if(number <= 1){
        number =  slides.length;
    } else {
       number--;
    } 
    activeSlide(number);
    console.log(number);
}
