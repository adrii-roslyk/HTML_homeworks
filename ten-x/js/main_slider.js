let slideIndex = 1;
let slides = document.getElementsByClassName("main-slider__item");
let dots = document.getElementsByClassName("dots__item--main-sl");
let dot1 = document.getElementById("main-sl-dot-01");
let dot2 = document.getElementById("main-sl-dot-02");
let dot3 = document.getElementById("main-sl-dot-03");
let dot4 = document.getElementById("main-sl-dot-04");
let btn1 = document.getElementById("btn1");

let firstIteration = true;
showSlides();
dot1.addEventListener("click", function() {currentSlide(1)});
dot2.addEventListener("click", function() {currentSlide(2)});
dot3.addEventListener("click", function() {currentSlide(3)});
dot4.addEventListener("click", function() {currentSlide(4)});
btn1.addEventListener("click", function() {forward()});

function currentSlide(index) {
    clearTimeout(timeoutID);
    if (index < slideIndex) {
        let direction = "back";
        slideIndex = index;
        showSlides(direction);
    } else {
        let direction = "forward";
        slideIndex = index;
        showSlides(direction);
    }
}

function forward() {
    clearTimeout(timeoutID);
    showSlides();
}

function showSlides(direction) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";      
    if (firstIteration) {
        slides[slideIndex - 1].style.cssText = "animation: leave .5s 3.5s;";
        firstIteration = false;
    } else if (direction == "back") {
        slides[slideIndex - 1].style.cssText = "animation: arrive-inv .5s, leave .5s 3.5s;";
    } else {
        slides[slideIndex - 1].style.cssText = "animation: arrive .5s, leave .5s 3.5s;";
    }    
    dots[slideIndex - 1].className += " active";
    slideIndex++;
    window.timeoutID = setTimeout(showSlides, 4000);
}


