document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("startBtn").style.display = "none";
});

document.getElementById("confettiBtn").addEventListener("click", startConfetti);

function startConfetti() {
  const duration = 4 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0, 1),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
}

// Confetti library loader (no install needed)
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
document.head.appendChild(script);
