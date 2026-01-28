// ===============================
// CONFIGURAÇÃO INICIAL
// ===============================
const button = document.getElementById("updateBtn");
const message = document.getElementById("finalMessage");

// ===============================
// EVENTO DO BOTÃO
// ===============================
button.addEventListener("click", () => {
  button.style.display = "none";
  message.classList.remove("hidden");
  startConfetti();
});

// ===============================
// CONFETTI ENGINE (PURO JS)
// ===============================
function startConfetti() {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 9999;

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const confettiCount = 180;
  const confetti = [];

  const colors = [
    "#ff6b6b",
    "#feca57",
    "#48dbfb",
    "#1dd1a1",
    "#f368e0"
  ];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push(createParticle());
  }

  let startTime = Date.now();
  const duration = 3500;

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 4 + 2,
      speedX: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 6 - 3
    };
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (Date.now() - startTime < duration) {
      requestAnimationFrame(update);
    } else {
      canvas.remove();
      window.removeEventListener("resize", resizeCanvas);
    }
  }

  update();
}
