// -------------------------------------------------------
// HorusTec – script.js
// Interações e efeitos dinâmicos da página
// -------------------------------------------------------

// Efeito de digitação no terminal
function typewriterEffect() {
  const lines = document.querySelectorAll('.terminal .out');
  lines.forEach((line, i) => {
    const text = line.innerHTML;
    line.innerHTML = '';
    line.style.opacity = '0';

    setTimeout(() => {
      line.style.opacity = '1';
      line.innerHTML = text;
    }, 600 + i * 120);
  });
}

// Efeito glitch aleatório no título
function glitchTitle() {
  const h1 = document.querySelector('h1');
  if (!h1) return;

  setInterval(() => {
    const chance = Math.random();
    if (chance > 0.92) {
      h1.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
      h1.style.filter = `hue-rotate(${Math.random() * 30}deg)`;
      setTimeout(() => {
        h1.style.transform = 'translateX(0)';
        h1.style.filter = 'none';
      }, 80);
    }
  }, 1500);
}

// Highlight nos cards ao passar o mouse
function initCardHover() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-3px)';
      card.style.transition = 'transform 0.2s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

// Contador regressivo até o fim das inscrições (20/03/2026)
function initCountdown() {
  const deadline = new Date('2026-03-20T23:59:59');

  const countdownEl = document.createElement('div');
  countdownEl.id = 'countdown';
  countdownEl.style.cssText = `
    font-family: 'Share Tech Mono', monospace;
    font-size: 12px;
    color: #00e5ff;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 10px;
    opacity: 0.8;
  `;

  const ctaBlock = document.querySelector('.cta-block');
  if (ctaBlock) ctaBlock.appendChild(countdownEl);

  function update() {
    const now = new Date();
    const diff = deadline - now;

    if (diff <= 0) {
      countdownEl.textContent = '[ INSCRIÇÕES ENCERRADAS ]';
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.textContent =
      `[ INSCRIÇÕES ENCERRAM EM: ${days}d ${hours}h ${minutes}m ${seconds}s ]`;
  }

  update();
  setInterval(update, 1000);
}

// Inicializa tudo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  typewriterEffect();
  glitchTitle();
  initCardHover();
  initCountdown();
});
