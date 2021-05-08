let background1 = document.getElementById("background-01");
let project1 = document.getElementById("project-01");
let triangleBtn1 = document.getElementById("triangle-btn-01");
let orangeBtn1 = document.getElementById("orange-btn-01");

let background2 = document.getElementById("background-02");
let project2 = document.getElementById("project-02");
let triangleBtn2 = document.getElementById("triangle-btn-02");
let orangeBtn2 = document.getElementById("orange-btn-02");

let background3 = document.getElementById("background-03");
let project3 = document.getElementById("project-03");
let triangleBtn3 = document.getElementById("triangle-btn-03");
let orangeBtn3 = document.getElementById("orange-btn-03");

let background4 = document.getElementById("background-04");
let project4 = document.getElementById("project-04");
let triangleBtn4 = document.getElementById("triangle-btn-04");
let orangeBtn4 = document.getElementById("orange-btn-04");

let background5 = document.getElementById("background-05");
let project5 = document.getElementById("project-05");
let triangleBtn5 = document.getElementById("triangle-btn-05");
let orangeBtn5 = document.getElementById("orange-btn-05");

let background6 = document.getElementById("background-06");
let project6 = document.getElementById("project-06");
let triangleBtn6 = document.getElementById("triangle-btn-06");
let orangeBtn6 = document.getElementById("orange-btn-06");

project1.onmouseenter = changeOn1;
project1.onmouseleave = changeOff1;

project2.onmouseenter = changeOn2;
project2.onmouseleave = changeOff2;

project3.onmouseenter = changeOn3;
project3.onmouseleave = changeOff3;

project4.onmouseenter = changeOn4;
project4.onmouseleave = changeOff4;

project5.onmouseenter = changeOn5;
project5.onmouseleave = changeOff5;

project6.onmouseenter = changeOn6;
project6.onmouseleave = changeOff6;

function changeOn1() {    
    background1.style.visibility = "visible";
    triangleBtn1.style.visibility = "visible";
    orangeBtn1.style.display = "none";
}

function changeOff1() {
    background1.style.visibility = "hidden";
    triangleBtn1.style.visibility = "hidden";
    orangeBtn1.style.display = "block";
}

function changeOn2() {    
    background2.style.visibility = "visible";
    triangleBtn2.style.visibility = "visible";
    orangeBtn2.style.display = "none";
}

function changeOff2() {
    background2.style.visibility = "hidden";
    triangleBtn2.style.visibility = "hidden";
    orangeBtn2.style.display = "block";
}

function changeOn3() {    
    background3.style.visibility = "visible";
    triangleBtn3.style.visibility = "visible";
    orangeBtn3.style.display = "none";
}

function changeOff3() {
    background3.style.visibility = "hidden";
    triangleBtn3.style.visibility = "hidden";
    orangeBtn3.style.display = "block";
}

function changeOn4() {    
    background4.style.visibility = "visible";
    triangleBtn4.style.visibility = "visible";
    orangeBtn4.style.display = "none";
}

function changeOff4() {
    background4.style.visibility = "hidden";
    triangleBtn4.style.visibility = "hidden";
    orangeBtn4.style.display = "block";
}

function changeOn5() {    
    background5.style.visibility = "visible";
    triangleBtn5.style.visibility = "visible";
    orangeBtn5.style.display = "none";
}

function changeOff5() {
    background5.style.visibility = "hidden";
    triangleBtn5.style.visibility = "hidden";
    orangeBtn5.style.display = "block";
}

function changeOn6() {    
    background6.style.visibility = "visible";
    triangleBtn6.style.visibility = "visible";
    orangeBtn6.style.display = "none";
}

function changeOff6() {
    background6.style.visibility = "hidden";
    triangleBtn6.style.visibility = "hidden";
    orangeBtn6.style.display = "block";
}