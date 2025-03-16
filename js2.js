// navigation- toggal-start 

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
// navigation-toggal-end 

// count-section 

AOS.init({
    duration: 1000,
    once: true,
});

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

    // WhatsApp chat support
    document.querySelector('.chat-support').addEventListener('click', () => {
        window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
    });

    // Handle responsive menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const navLinks = document.getElementById("navLinks");
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // Handle navigation animation on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});

// GSAP Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".banner-content", {
    scrollTrigger: {
      trigger: ".banner",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    x: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".courses-container", {
    scrollTrigger: {
      trigger: ".courses-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".facility-section", {
    scrollTrigger: {
      trigger: ".facility-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".resources-section", {
    scrollTrigger: {
      trigger: ".resources-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".climate-content", {
    scrollTrigger: {
      trigger: ".climate-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".result-card", {
    scrollTrigger: {
      trigger: ".result-body",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
});

// count-end 

// facilities 

// facility end 

// feedback 
function submitFeedback(studentId) {
    const feedbackInput = document.getElementById(`feedback-input-${studentId}`).value;
    const nameInput = document.getElementById(`name-input-${studentId}`).value;
    const selectedRating = document.querySelector(`input[name="rating-${studentId}"]:checked`);

    if (feedbackInput && selectedRating && nameInput) {
        const feedbackContainer = document.getElementById('feedback-container');

        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
  <div class="inner-card">
    <div class="front">
      <h3>Feedback</h3>
      <p>${feedbackInput}</p>
      <p>Rating: ${selectedRating.value} stars</p>
      <p>By: ${nameInput}</p>
    </div>
  </div>
`;

        feedbackContainer.appendChild(newCard);
        feedbackContainer.scrollLeft = feedbackContainer.scrollWidth;

        document.getElementById(`feedback-input-${studentId}`).value = "";
        document.getElementById(`name-input-${studentId}`).value = "";
        document.querySelectorAll(`input[name="rating-${studentId}"]`).forEach(radio => radio.checked = false);
    } else {
        alert("Please provide your name, feedback, and rating!");
    }
}

// feedback end
