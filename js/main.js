document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Menu sluiten bij klikken op een nav-link
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks) {
        navLinks.classList.remove("show");
      }
    });
  });

  // Smooth scroll naar top
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Automatisch jaartal in footer en meta copyright
  const currentYear = new Date().getFullYear();

  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = currentYear;
  }

  const metaCopyright = document.getElementById("meta-copyright");
  if (metaCopyright) {
    metaCopyright.setAttribute("content", `© ${currentYear} Stream Slugger`);
  }
});

// Track Steam button clicks for analytics
function trackSteamClick(event) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      'event_category': 'Steam',
      'event_label': 'Steam Store Button',
      'value': 1
    });
  }
  return true; // Allow the link to proceed
}
