
// FXM DIGITAL - WEBSITE FUNCTIONALITY

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// WhatsApp contact button
const whatsappButton = document.getElementById("whatsapp-link");

// IMPORTANT: Replace this with your official WhatsApp number.
// Use international format without + or spaces.
const whatsappNumber = "2347065500711";

const whatsappMessage = encodeURIComponent(
    "Hello FXM Digital, I would like to enquire about your digital services."
);

if (whatsappButton) {
    whatsappButton.href =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";
}

// FXM DIGITAL — SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    "section, .service-card, .project-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ANIMATED NUMBER COUNTERS

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";
            const duration = 1800;
            const startTime = performance.now();

            function updateCounter(currentTime) {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const currentNumber = Math.floor(
                    easedProgress * target
                );

                counter.textContent = currentNumber + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            }

            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);
        }

    });

}, {
    threshold: 0.5
});

counters.forEach((counter) => {
    counterObserver.observe(counter);
});

/* MOBILE NAVIGATION FUNCTIONALITY */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    mainNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });

    });

}

// FXM DIGITAL PAGE LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("page-loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hidden");

            setTimeout(() => {
                loader.remove();
            }, 900);
        }, 800);
    }

});
