// Background canvas particles
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ["#7cb7ff", "#ffffff33", "#dceeff", "#9dbbe3"];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5 + 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles(count = 80) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();

// Resize canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Scroll fade-in effect
const fadeSections = document.querySelectorAll(".fade-section, .fade-up, .fade-delay, .fade-delay-2, .fade-delay-3, .fade-delay-4, .fade-delay-5, .fade-delay-6");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

fadeSections.forEach(section => {
  observer.observe(section);
});

// Scroll indicator animation
const scrollCue = document.querySelector(".scroll-cue");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    scrollCue.classList.add("hide");
  } else {
    scrollCue.classList.remove("hide");
  }
});

// Parallax layer movement
const layers = document.querySelectorAll(".parallax-layer");
window.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.5;
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
