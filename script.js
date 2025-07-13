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

  // Activate floating bubbles
  const canvas = document.getElementById("bgCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let bubbles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let b of bubbles) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fill();
        b.x += b.dx;
        b.y += b.dy;

        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});
