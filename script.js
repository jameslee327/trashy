// Parallax glow effect
const parallax = document.getElementById('parallax');

function updateParallax(x, y) {
  const px = (x / window.innerWidth) * 100;
  const py = (y / window.innerHeight) * 100;
  parallax.style.setProperty('--x', `${px}%`);
  parallax.style.setProperty('--y', `${py}%`);
}

document.addEventListener('mousemove', e => {
  updateParallax(e.clientX, e.clientY);
});

document.addEventListener('touchmove', e => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    updateParallax(touch.clientX, touch.clientY);
  }
});
