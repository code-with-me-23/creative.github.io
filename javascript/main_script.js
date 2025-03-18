var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}

// document.addEventListener('contextmenu', event => event.preventDefault());

function animateCountUp(element, target) {
    let count = 0;
    let increment = target / 100;
    let interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(count);
    }, 20);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".count-item").forEach(item => {
        let target = parseInt(item.getAttribute("data-target"));
        animateCountUp(item, target);
    });
});