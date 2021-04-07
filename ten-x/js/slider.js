let slideIndex = 1;
let slides = document.getElementsByClassName("main-slider__item");
let dots = document.getElementsByClassName("dots__item");
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");

showSlides();
dot1.addEventListener("click", function() {currentSlide(1)});
dot2.addEventListener("click", function() {currentSlide(2)});
dot3.addEventListener("click", function() {currentSlide(3)});
dot4.addEventListener("click", function() {currentSlide(4)});

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
    if (direction == "back") {
        slides[slideIndex - 1].style.cssText = "animation: arrive-inv .5s, leave .5s 3.5s;";
    } else {
        slides[slideIndex - 1].style.cssText = "animation: arrive .5s, leave .5s 3.5s;";
    }
    dots[slideIndex - 1].className += " active";
    //slideIndex++;
    window.timeoutID = setTimeout(showSlides, 4000);
}


