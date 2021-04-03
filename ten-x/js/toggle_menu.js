let iconOpen = document.getElementById("icon-open");
let iconClose = document.getElementById("icon-close");

iconOpen.onclick = toggle;
iconClose.onclick = toggle;

function toggle() {
    let btnOpen = document.getElementById("open");
    let btnClose = document.getElementById("close");
    let menuFallsOut = document.getElementById("falls-out");
    if (btnClose.style.display !== "block") {
        btnOpen.style.display = "none";
        btnClose.style.display = "block";
        menuFallsOut.style.cssText = "display:block; opacity: 1; transform: translateY(0)";
    } else {
        btnClose.style.display = "none";
        btnOpen.style.display = "block";
        menuFallsOut.style.display = "none";
    }
}


