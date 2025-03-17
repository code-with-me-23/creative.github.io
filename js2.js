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

function toggleMenu(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".count-item").forEach(item => {
        let target = parseInt(item.getAttribute("data-target"));
        animateCountUp(item, target);
    });

    // WhatsApp chat support
    document.querySelector('.chat-support').addEventListener('click', () => {
        window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
    });
});

