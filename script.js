// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Optional: Button ripple animation on click
  document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", e => {
      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 300);
    });
  });
  