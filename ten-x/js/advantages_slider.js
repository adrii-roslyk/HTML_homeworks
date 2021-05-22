let advSlideIndex = 1;
let advSliderWrap = document.getElementById("adv-slider-wrap");
let advSlides = document.getElementsByClassName("advantages-slider__item");
let advDots = document.getElementsByClassName("dots__item--adv");
let advDot1 = document.getElementById("adv-dot-01");
let advDot2 = document.getElementById("adv-dot-02");
let advDot3 = document.getElementById("adv-dot-03");
let advDot4 = document.getElementById("adv-dot-04");

advSliderWrap.style.transform = "none";
showAdvSlide();

advDot1.addEventListener("click", function() {currentAdvSlide(1)});
advDot2.addEventListener("click", function() {currentAdvSlide(2)});
advDot3.addEventListener("click", function() {currentAdvSlide(3)});
advDot4.addEventListener("click", function() {currentAdvSlide(4)});

function currentAdvSlide(index) {    
    clearTimeout(timeoutID_2);        
    advSlideIndex = index;
    showAdvSlide();    
}

function showAdvSlide() {     
    let clientWidth = document.documentElement.clientWidth;       
    let i;   
    for (i = 0; i < advSlides.length; i++) {
        advSlides[i].querySelector(".advantage__background").style.cssText = "animation-name: none";
    }
    for (i = 0; i < advDots.length; i++) {
        advDots[i].className = advDots[i].className.replace(" active", "");
    }    
    if (advSlideIndex > advSlides.length) {
        advSlideIndex = 1;
    }    

    if (clientWidth <= 490) {         
        if (advSlideIndex === 1) {            
            if (advSliderWrap.style.transform === "translateX(-25.812%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e3 .5s;";
                advSliderWrap.style.transform = "none";                
            } else if (advSliderWrap.style.transform === "translateX(-51.624%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e2 .5s;";
                advSliderWrap.style.transform = "none";                            
            } else if (advSliderWrap.style.transform === "translateX(-77.436%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e1 .5s;";
                advSliderWrap.style.transform = "none";                 
            }              
        } else if (advSlideIndex === 2) {
            if (advSliderWrap.style.transform === "none") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e3 .5s;";
                advSliderWrap.style.transform = "translateX(-25.812%)";
            } else if (advSliderWrap.style.transform === "translateX(-51.624%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e2-near .5s;";
                advSliderWrap.style.transform = "translateX(-25.812%)";
            } else if (advSliderWrap.style.transform === "translateX(-77.436%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e1-far .5s;"
                advSliderWrap.style.transform = "translateX(-25.812%)";
            }            
        } else if (advSlideIndex === 3) {
            if (advSliderWrap.style.transform === "none") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e2 .5s;";
                advSliderWrap.style.transform = "translateX(-51.624%)";
            } else if (advSliderWrap.style.transform === "translateX(-25.812%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e2-near .5s;";
                advSliderWrap.style.transform = "translateX(-51.624%)";
            } else if (advSliderWrap.style.transform === "translateX(-77.436%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e1-near .5s;"
                advSliderWrap.style.transform = "translateX(-51.624%)";
            }
        } else if (advSlideIndex === 4) {
            if (advSliderWrap.style.transform === "none") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e1 .5s;";
                advSliderWrap.style.transform = "translateX(-77.436%)";
            }  else if (advSliderWrap.style.transform === "translateX(-25.812%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e1-far .5s;";
                advSliderWrap.style.transform = "translateX(-77.436%)";
            } else if (advSliderWrap.style.transform === "translateX(-51.624%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e1-near .5s;";
                advSliderWrap.style.transform = "translateX(-77.436%)";
            }    
        }   
        let j;
        for (j = 1; j <= advSlides.length; j++) {
            if (advSlideIndex === j) {                
                advSlides[j - 1].style.cssText = "animation: visibility .4s; animation-fill-mode: forwards;";
                let x;
                for (x = 0; x < advSlides.length; x++) {
                    if (j - 1 === x) {
                        continue;
                    }
                    advSlides[x].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";                    
                }              
            }           
        }              
    } else if (clientWidth <= 780) {        
        if (advSlideIndex === 1 && advSliderWrap.style.transform !== "none") {                      
            if (advSliderWrap.style.transform === "translateX(-25.812%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e3 .5s;";
                advSliderWrap.style.transform = "none";                         
            } else if (advSliderWrap.style.transform === "translateX(-51.624%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-right-e2 .5s;";
                advSliderWrap.style.transform = "none";                
            }            
            let j;
            for (j = 0; j < 2; j++) {
                advSlides[j].style.cssText = "animation: visibility .4s; animation-fill-mode: forwards;"; 
            }
            for (j = 2; j < advSlides.length; j++) {
                advSlides[j].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";
            } 
        } else if (advSlideIndex === 2 && advSliderWrap.style.transform === "translateX(-51.624%)") {
            advSliderWrap.style.cssText = "animation: move-advsld-right-e2-near .5s;";
            advSliderWrap.style.transform = "translateX(-25.812%)";
            advSlides[1].style.cssText = "animation: visibility .4s; animation-fill-mode: forwards;";
            advSlides[3].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";
        } else if (advSlideIndex === 3 && advSliderWrap.style.transform === "none") {
            advSliderWrap.style.cssText = "animation: move-advsld-left-e3 .5s;";
            advSliderWrap.style.transform = "translateX(-25.812%)";
            advSlides[2].style.cssText = "animation: visibility .4s; animation-fill-mode: forwards;";
            advSlides[0].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";
        } else if (advSlideIndex === 4) {
            if (advSliderWrap.style.transform === "none") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e2 .5s;";
                advSliderWrap.style.transform = "translateX(-51.624%)";
            } else if (advSliderWrap.style.transform === "translateX(-25.812%)") {
                advSliderWrap.style.cssText = "animation: move-advsld-left-e2-near .5s;";        
                advSliderWrap.style.transform = "translateX(-51.624%)";
            }                     
            let j;
            for (j = 2; j < advSlides.length; j++) {
                advSlides[j].style.cssText = "animation: visibility .4s; animation-fill-mode: forwards;";   
            }
            for (j = 0; j < 2; j++) {
                advSlides[j].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";
            } 
        }
    } else {        
        if (advSlideIndex === 1 && advSliderWrap.style.transform !== "none") {
            advSliderWrap.style.cssText = "animation: move-advsld-right-e3 .5s;";
            advSliderWrap.style.transform = "none";  
            advSlides[3].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";     
        } else if (advSlideIndex === 1) {
            advSlides[3].style.visibility = "hidden";
        } else if (advSlideIndex === 4) {
            advSliderWrap.style.cssText = "animation: move-advsld-left-e3 .5s;";
            advSliderWrap.style.transform = "translateX(-25.812%)";            
            advSlides[0].style.cssText = "animation: hidden .4s; animation-fill-mode: forwards;";
        }
        let j;
        for (j = 1; j <= advSlides.length; j++) {
            if (advSlideIndex === j) {                
                advSlides[j - 1].style.cssText = "animation: visibility .4s; animation-fill-mode: forwards;";
            }           
        }
    }

    advSlides[advSlideIndex - 1].querySelector(".advantage__background").style.cssText = "animation: advantage-on 4.5s";
    advDots[advSlideIndex - 1].className += " active";
    advSlideIndex++;
    window.timeoutID_2 = setTimeout(showAdvSlide, 4000);
}