// script.js

// Light/Dark mode detection
window.addEventListener("DOMContentLoaded", () => {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  if (prefersLight) {
    document.body.classList.add("light");
  }
});

// Cursor parallax movement
const parallax = document.getElementById("parallax");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  parallax.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    const x = (e.touches[0].clientX / window.innerWidth - 0.5) * 30;
    const y = (e.touches[0].clientY / window.innerHeight - 0.5) * 30;
    parallax.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Smooth intro animations when DOM is ready
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up, .fade-delay, .fade-delay-2").forEach(el => {
    el.style.willChange = "opacity, transform";
  });
});
