<<<<<<< HEAD
(function () {
  const screen = document.getElementById('loading-screen');
  const canvas = document.getElementById('loading-canvas');
  if (canvas) canvas.style.display = 'none';
  setTimeout(() => {
    if (screen) screen.classList.add('hide');
    document.body.style.overflow = '';
  }, 2800);
  document.body.style.overflow = 'hidden';
})();

const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('jb-theme', theme);
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}

const savedTheme = localStorage.getItem('jb-theme') || 'light';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');
const bgAudio = document.getElementById('bgAudio');
let audioPlaying = false;

if (audioToggle && bgAudio) {
  bgAudio.volume = 0.4;
  audioToggle.addEventListener('click', () => {
    if (audioPlaying) {
      bgAudio.pause();
      audioIcon.className = 'fa-solid fa-volume-xmark';
      audioToggle.classList.add('muted');
      audioPlaying = false;
    } else {
      bgAudio.play().catch(() => {});
      audioIcon.className = 'fa-solid fa-music';
      audioToggle.classList.remove('muted');
      audioPlaying = true;
    }
  });
}

const sakuraCanvas = document.getElementById('sakuraCanvas');
const hero = document.querySelector('.hero');

if (sakuraCanvas && hero) {
  const sCtx = sakuraCanvas.getContext('2d');
  let sPetals = [];

  function resizeSakura() {
    sakuraCanvas.width = hero.offsetWidth;
    sakuraCanvas.height = hero.offsetHeight;
  }

  class SakuraPetal {
    constructor() {
      this.x = Math.random() * sakuraCanvas.width;
      this.y = Math.random() * sakuraCanvas.height - sakuraCanvas.height;
      this.size = Math.random() * 4 + 2;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.angle = Math.random() * 360;
      this.spin = (Math.random() - 0.5) * 0.05;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = ['#ffb7c5','#f8c8dc','#e896bb','#c3638d','#fce8f3'][Math.floor(Math.random()*5)];
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(Date.now() * 0.001 + this.size) * 0.3;
      this.angle += this.spin;
      if (this.y > sakuraCanvas.height) {
        this.y = -10;
        this.x = Math.random() * sakuraCanvas.width;
      }
    }
    draw() {
      sCtx.save();
      sCtx.translate(this.x, this.y);
      sCtx.rotate(this.angle);
      sCtx.globalAlpha = this.alpha;
      sCtx.fillStyle = this.color;
      sCtx.beginPath();
      sCtx.ellipse(0, 0, this.size * 0.5, this.size, 0.4, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.rotate(Math.PI * 0.5);
      sCtx.beginPath();
      sCtx.ellipse(0, 0, this.size * 0.5, this.size * 0.8, 0, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.restore();
    }
  }

  function initSakura() {
    sPetals = [];
    for (let i = 0; i < 40; i++) {
      const p = new SakuraPetal();
      p.y = Math.random() * sakuraCanvas.height;
      sPetals.push(p);
    }
  }

  function animateSakura() {
    sCtx.clearRect(0, 0, sakuraCanvas.width, sakuraCanvas.height);
    sPetals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateSakura);
  }

  resizeSakura(); initSakura(); animateSakura();
  window.addEventListener('resize', () => { resizeSakura(); initSakura(); });
}

const typingEl = document.getElementById('typing-hero-text');
if (typingEl) {
  const text = 'JAYSHIFA';
  let idx = 0, deleting = false, speed = 350;
  function type() {
    const cur = text.substring(0, idx);
    typingEl.textContent = cur;
    if (!deleting && idx < text.length) { idx++; speed = 350; }
    else if (deleting && idx > 0) { idx--; speed = 120; }
    else if (!deleting && idx === text.length) { deleting = true; speed = 3500; }
    else { deleting = false; speed = 800; }
    setTimeout(type, speed);
  }
  setTimeout(type, 3200);
}

function runCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      counter.textContent = Math.ceil(count);
      if (count >= target) clearInterval(timer);
    }, 30);
  });
}

const ioOptions = { threshold: 0.05, rootMargin: '0px 0px 0px 0px' };
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, ioOptions);

document.querySelectorAll('[data-aos], .section-header').forEach(el => io.observe(el));

const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.ring-fill');
      fills.forEach(fill => {
        const pct = +fill.getAttribute('data-pct');
        const circumference = 251.2;
        const offset = circumference - (pct / 100) * circumference;
        setTimeout(() => { fill.style.strokeDashoffset = offset; }, 200);
      });
      ringObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-cards-grid').forEach(el => ringObserver.observe(el));

document.querySelectorAll('.sw-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.sw-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sw-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});

function initSlider(sliderEl, prevBtn, nextBtn, dotsEl, visibleCount = 1) {
  if (!sliderEl) return;
  const slides = sliderEl.querySelectorAll('.project-slide, .cert-slide');
  let current = 0;
  let autoTimer = null;
  let isDragging = false;
  let startX = 0;
  let totalSlides = slides.length;
  let maxIdx = Math.max(0, totalSlides - visibleCount);

  if (dotsEl) {
    dotsEl.innerHTML = '';
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('span');
      dot.className = 'sdot' + (i === 0 ? ' active' : '');
      dot.dataset.i = i;
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    }
  }

  function goTo(i) {
    current = Math.max(0, Math.min(i, maxIdx));
    const slideWidth = 100 / visibleCount;
    sliderEl.style.transform = `translateX(-${current * slideWidth}%)`;
    updateDots();
  }

  function updateDots() {
    if (!dotsEl) return;
    dotsEl.querySelectorAll('.sdot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function next() { goTo(current + 1 > maxIdx ? 0 : current + 1); }
  function prev() { goTo(current - 1 < 0 ? maxIdx : current - 1); }

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  function startAuto() { autoTimer = setInterval(next, 4000); }
  function stopAuto() { clearInterval(autoTimer); }
  startAuto();
  sliderEl.parentElement?.addEventListener('mouseenter', stopAuto);
  sliderEl.parentElement?.addEventListener('mouseleave', startAuto);

 sliderEl.addEventListener('pointerdown', e => {
  if (e.target.closest('a')) return;
  isDragging = true;
  startX = e.clientX;
  sliderEl.setPointerCapture(e.pointerId);
});

  sliderEl.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.clientX - startX;
    if (dx < -50) next();
    else if (dx > 50) prev();
  });
}

function getCertVisible() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

initSlider(
  document.getElementById('projectSlider'),
  document.getElementById('projPrev'),
  document.getElementById('projNext'),
  document.getElementById('projDots'),
  1
);

function initCertSlider() {
  const certSlider = document.getElementById('certSlider');
  if (!certSlider) return;
  const vis = getCertVisible();
  const slides = certSlider.querySelectorAll('.cert-slide');
  slides.forEach(s => { s.style.minWidth = `${100 / vis}%`; });
  initSlider(certSlider, document.getElementById('certPrev'), document.getElementById('certNext'), document.getElementById('certDots'), vis);
}
initCertSlider();
window.addEventListener('resize', () => {
  const certSlider = document.getElementById('certSlider');
  if (!certSlider) return;
  const vis = getCertVisible();
  const slides = certSlider.querySelectorAll('.cert-slide');
  slides.forEach(s => { s.style.minWidth = `${100 / vis}%`; });
});

if (typeof VanillaTilt !== 'undefined') {
  VanillaTilt.init(document.querySelectorAll('.image-container'), {
    max: 15, speed: 400, glare: true, 'max-glare': 0.2, perspective: 800, scale: 1.04
  });
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

['cvBtn','cvDownload'].forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = btn.getAttribute('href');
    const fileIdMatch = url.match(/\/d\/([^/]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(url, '_blank');
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'CV_Jayshifa_Banyuwana.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 500);
    } else {
      window.open(url, '_blank');
    }
  });
});

window.addEventListener('load', () => {
  setTimeout(runCounters, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  function revealVisible() {
    document.querySelectorAll('[data-aos], .section-header').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) el.classList.add('visible');
    });
  }
  revealVisible();
  setTimeout(revealVisible, 3200);
  window.addEventListener('scroll', revealVisible, { passive: true });
=======
(function () {
  const screen = document.getElementById('loading-screen');
  const canvas = document.getElementById('loading-canvas');
  if (canvas) canvas.style.display = 'none';
  setTimeout(() => {
    if (screen) screen.classList.add('hide');
    document.body.style.overflow = '';
  }, 2800);
  document.body.style.overflow = 'hidden';
})();

const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('jb-theme', theme);
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}

const savedTheme = localStorage.getItem('jb-theme') || 'light';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');
const bgAudio = document.getElementById('bgAudio');
let audioPlaying = false;

if (audioToggle && bgAudio) {
  bgAudio.volume = 0.4;
  audioToggle.addEventListener('click', () => {
    if (audioPlaying) {
      bgAudio.pause();
      audioIcon.className = 'fa-solid fa-volume-xmark';
      audioToggle.classList.add('muted');
      audioPlaying = false;
    } else {
      bgAudio.play().catch(() => {});
      audioIcon.className = 'fa-solid fa-music';
      audioToggle.classList.remove('muted');
      audioPlaying = true;
    }
  });
}

const sakuraCanvas = document.getElementById('sakuraCanvas');
const hero = document.querySelector('.hero');

if (sakuraCanvas && hero) {
  const sCtx = sakuraCanvas.getContext('2d');
  let sPetals = [];

  function resizeSakura() {
    sakuraCanvas.width = hero.offsetWidth;
    sakuraCanvas.height = hero.offsetHeight;
  }

  class SakuraPetal {
    constructor() {
      this.x = Math.random() * sakuraCanvas.width;
      this.y = Math.random() * sakuraCanvas.height - sakuraCanvas.height;
      this.size = Math.random() * 4 + 2;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.angle = Math.random() * 360;
      this.spin = (Math.random() - 0.5) * 0.05;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = ['#ffb7c5','#f8c8dc','#e896bb','#c3638d','#fce8f3'][Math.floor(Math.random()*5)];
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(Date.now() * 0.001 + this.size) * 0.3;
      this.angle += this.spin;
      if (this.y > sakuraCanvas.height) {
        this.y = -10;
        this.x = Math.random() * sakuraCanvas.width;
      }
    }
    draw() {
      sCtx.save();
      sCtx.translate(this.x, this.y);
      sCtx.rotate(this.angle);
      sCtx.globalAlpha = this.alpha;
      sCtx.fillStyle = this.color;
      sCtx.beginPath();
      sCtx.ellipse(0, 0, this.size * 0.5, this.size, 0.4, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.rotate(Math.PI * 0.5);
      sCtx.beginPath();
      sCtx.ellipse(0, 0, this.size * 0.5, this.size * 0.8, 0, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.restore();
    }
  }

  function initSakura() {
    sPetals = [];
    for (let i = 0; i < 40; i++) {
      const p = new SakuraPetal();
      p.y = Math.random() * sakuraCanvas.height;
      sPetals.push(p);
    }
  }

  function animateSakura() {
    sCtx.clearRect(0, 0, sakuraCanvas.width, sakuraCanvas.height);
    sPetals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateSakura);
  }

  resizeSakura(); initSakura(); animateSakura();
  window.addEventListener('resize', () => { resizeSakura(); initSakura(); });
}

const typingEl = document.getElementById('typing-hero-text');
if (typingEl) {
  const text = 'JAYSHIFA';
  let idx = 0, deleting = false, speed = 350;
  function type() {
    const cur = text.substring(0, idx);
    typingEl.textContent = cur;
    if (!deleting && idx < text.length) { idx++; speed = 350; }
    else if (deleting && idx > 0) { idx--; speed = 120; }
    else if (!deleting && idx === text.length) { deleting = true; speed = 3500; }
    else { deleting = false; speed = 800; }
    setTimeout(type, speed);
  }
  setTimeout(type, 3200);
}

function runCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      counter.textContent = Math.ceil(count);
      if (count >= target) clearInterval(timer);
    }, 30);
  });
}

const ioOptions = { threshold: 0.05, rootMargin: '0px 0px 0px 0px' };
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, ioOptions);

document.querySelectorAll('[data-aos], .section-header').forEach(el => io.observe(el));

const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.ring-fill');
      fills.forEach(fill => {
        const pct = +fill.getAttribute('data-pct');
        const circumference = 251.2;
        const offset = circumference - (pct / 100) * circumference;
        setTimeout(() => { fill.style.strokeDashoffset = offset; }, 200);
      });
      ringObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-cards-grid').forEach(el => ringObserver.observe(el));

document.querySelectorAll('.sw-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.sw-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sw-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});

function initSlider(sliderEl, prevBtn, nextBtn, dotsEl, visibleCount = 1) {
  if (!sliderEl) return;
  const slides = sliderEl.querySelectorAll('.project-slide, .cert-slide');
  let current = 0;
  let autoTimer = null;
  let isDragging = false;
  let startX = 0;
  let totalSlides = slides.length;
  let maxIdx = Math.max(0, totalSlides - visibleCount);

  if (dotsEl) {
    dotsEl.innerHTML = '';
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('span');
      dot.className = 'sdot' + (i === 0 ? ' active' : '');
      dot.dataset.i = i;
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    }
  }

  function goTo(i) {
    current = Math.max(0, Math.min(i, maxIdx));
    const slideWidth = 100 / visibleCount;
    sliderEl.style.transform = `translateX(-${current * slideWidth}%)`;
    updateDots();
  }

  function updateDots() {
    if (!dotsEl) return;
    dotsEl.querySelectorAll('.sdot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function next() { goTo(current + 1 > maxIdx ? 0 : current + 1); }
  function prev() { goTo(current - 1 < 0 ? maxIdx : current - 1); }

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  function startAuto() { autoTimer = setInterval(next, 4000); }
  function stopAuto() { clearInterval(autoTimer); }
  startAuto();
  sliderEl.parentElement?.addEventListener('mouseenter', stopAuto);
  sliderEl.parentElement?.addEventListener('mouseleave', startAuto);

 sliderEl.addEventListener('pointerdown', e => {
  if (e.target.closest('a')) return;
  isDragging = true;
  startX = e.clientX;
  sliderEl.setPointerCapture(e.pointerId);
});

  sliderEl.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.clientX - startX;
    if (dx < -50) next();
    else if (dx > 50) prev();
  });
}

function getCertVisible() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

initSlider(
  document.getElementById('projectSlider'),
  document.getElementById('projPrev'),
  document.getElementById('projNext'),
  document.getElementById('projDots'),
  1
);

function initCertSlider() {
  const certSlider = document.getElementById('certSlider');
  if (!certSlider) return;
  const vis = getCertVisible();
  const slides = certSlider.querySelectorAll('.cert-slide');
  slides.forEach(s => { s.style.minWidth = `${100 / vis}%`; });
  initSlider(certSlider, document.getElementById('certPrev'), document.getElementById('certNext'), document.getElementById('certDots'), vis);
}
initCertSlider();
window.addEventListener('resize', () => {
  const certSlider = document.getElementById('certSlider');
  if (!certSlider) return;
  const vis = getCertVisible();
  const slides = certSlider.querySelectorAll('.cert-slide');
  slides.forEach(s => { s.style.minWidth = `${100 / vis}%`; });
});

if (typeof VanillaTilt !== 'undefined') {
  VanillaTilt.init(document.querySelectorAll('.image-container'), {
    max: 15, speed: 400, glare: true, 'max-glare': 0.2, perspective: 800, scale: 1.04
  });
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

['cvBtn','cvDownload'].forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = btn.getAttribute('href');
    const fileIdMatch = url.match(/\/d\/([^/]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(url, '_blank');
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'CV_Jayshifa_Banyuwana.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 500);
    } else {
      window.open(url, '_blank');
    }
  });
});

window.addEventListener('load', () => {
  setTimeout(runCounters, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  function revealVisible() {
    document.querySelectorAll('[data-aos], .section-header').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) el.classList.add('visible');
    });
  }
  revealVisible();
  setTimeout(revealVisible, 3200);
  window.addEventListener('scroll', revealVisible, { passive: true });
>>>>>>> 72ad4a0cc8d3ec1f97d6fe8fd3dc5ac635638a60
});