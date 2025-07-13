// ===== Parallax & Entry Animation =====
const container = document.querySelector('.intro');
let lastMove = 0;

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  const now = Date.now();
  if (now - lastMove > 16) {
    container.style.transform = `translate(${x}px, ${y}px)`;
    lastMove = now;
  }
});

// ===== Scroll Indicator & Fade-In Activation =====
const fadeElements = document.querySelectorAll('.fade-section, .fade-delay, .fade-delay-2, .fade-delay-3, .fade-delay-4, .fade-delay-5, .fade-delay-6');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));

// ===== Canvas Particle Background =====
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const maxParticles = 80;

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.8 + 0.7;
    this.dx = (Math.random() - 0.5) * 0.3;
    this.dy = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
    this.draw();
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animateParticles);
}

for (let i = 0; i < maxParticles; i++) {
  particles.push(new Particle());
}

animateParticles();

// ===== Responsive Canvas Resize =====
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== Entry Wave Animation =====
const monogram = document.querySelector('.monogram');
monogram.classList.add('wave-animate');
