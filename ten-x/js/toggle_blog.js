let imgOrngBoxes = document.getElementById("img-orng-boxes");
let imgBottle = document.getElementById("img-bottle");
let arrow1 = document.getElementById("arrow1");
let imgPrplBoxes = document.getElementById("img-prpl-boxes");
let imgVinyl = document.getElementById("img-vinyl");
let arrow2 = document.getElementById("arrow2");

arrow1.onclick = switch1;
arrow2.onclick = switch2;

function switch1() {
    imgOrngBoxes.classList.toggle("switched-boxes");
    imgBottle.classList.toggle("switched-img");
}

function switch2() {
    imgPrplBoxes.classList.toggle("switched-boxes");
    imgVinyl.classList.toggle("switched-img");
}