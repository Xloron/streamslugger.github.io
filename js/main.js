document.addEventListener("DOMContentLoaded", function () {
  // Click op header <h1> stuurt naar index.html
  const h1 = document.getElementById("stream-slugger");
  if (h1) {
    h1.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

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

  // Automatisch jaartal in footer
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
