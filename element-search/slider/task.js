document.querySelector('.slider__arrow_next').onclick = function() {
    nextSlider();
};
document.querySelector('.slider__arrow_prev').onclick = function(){
    prevSlider();
};
const slides = document.querySelectorAll('.slider__item');// все слайды
function activeSlide(n) {
    for (i= 0; i < slides.length; i++) {
        slides[i].className = 'slider__item';
        dots[i].className = 'slider__dot';
    }
    slides[n].className = 'slider__item slider__item_active';
    dots[n].className = 'slider__dot slider__dot_active';
}
let number = 0;
function nextSlider() {
    if(number < (slides.length -1)){
        number++;  
    } else {
        number = 0;
    }
    activeSlide(number);
}
function prevSlider() {
    if(number === 0){
        number =  slides.length - 1;
    } else {
       number--;
    } 
    activeSlide(number);
}
const dots = document.querySelectorAll('.slider__dot');// все точки 
function activeDot() {
    for (i= 0; i < dots.length; i++) {
    let openSlide = dots[i];
    let slideNumber = i;
    openSlide.addEventListener( "click" , function() {
        activeSlide(slideNumber);
        number = slideNumber;
    });
    }
}
activeSlide(number);
activeDot();

