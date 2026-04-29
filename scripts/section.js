const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');

function openMobileNav() {
  hamburger?.classList.add('open');
  mobileNav?.classList.add('open');
  mobileNavOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  hamburger?.classList.remove('open');
  mobileNav?.classList.remove('open');
  mobileNavOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', openMobileNav);
mobileNavClose?.addEventListener('click', closeMobileNav);
mobileNavOverlay?.addEventListener('click', closeMobileNav);

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

document.querySelectorAll('.sw-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.35s cubic-bezier(0.16,1,0.3,1)';
  });
});

document.querySelectorAll('.project-card-new').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y*4}deg) rotateY(${x*4}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.5s cubic-bezier(0.16,1,0.3,1)';
  });
});

document.addEventListener('click', (e) => {
  const emojis = ['🌸','✿','✦','🌷','💖'];
  const spark = document.createElement('div');
  spark.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  spark.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    font-size: 1.2rem;
    pointer-events: none;
    z-index: 99998;
    animation: sparkPop 0.8s ease forwards;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 800);
});

const sparkStyle = document.createElement('style');
sparkStyle.textContent = `
  @keyframes sparkPop {
    0% { transform: translate(-50%,-50%) scale(0); opacity: 1; }
    50% { transform: translate(-50%,-120%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%,-180%) scale(0.8); opacity: 0; }
  }
`;
document.head.appendChild(sparkStyle);
