// GitHub Heatmap — dados reais
(function () {
  const grid = document.getElementById('heatmapGrid');
  const tooltip = document.getElementById('hmTooltip');
  const monthsEl = document.getElementById('heatmapMonths');
  const countEl = document.getElementById('heatmapCount');
  if (!grid) return;

  const WEEKS = 32;
  const colors = ['var(--hm0)', 'var(--hm1)', 'var(--hm2)', 'var(--hm3)', 'var(--hm4)'];
  const monthNames = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

  function renderGrid(contributions) {
    grid.innerHTML = '';
    monthsEl.innerHTML = '';

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - WEEKS * 7 + 1);

    const map = {};
    let total = 0;
    contributions.forEach(c => { map[c.date] = c; total += c.count; });
    countEl.textContent = total + ' contribuições (real)';

    const seenMonths = new Set();
    for (let w = 0; w < WEEKS; w++) {
      const weekDate = new Date(startDate);
      weekDate.setDate(startDate.getDate() + w * 7);
      const m = weekDate.getMonth();
      const span = document.createElement('span');
      span.textContent = (!seenMonths.has(m)) ? monthNames[m] : '';
      seenMonths.add(m);
      monthsEl.appendChild(span);
    }

    for (let w = 0; w < WEEKS; w++) {
      for (let d = 0; d < 7; d++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + w * 7 + d);
        const cell = document.createElement('div');
        cell.className = 'hm-cell';
        if (date > today) {
          cell.style.background = 'transparent';
        } else {
          const key = date.toISOString().split('T')[0];
          const entry = map[key];
          const count = entry ? entry.count : 0;
          const level = entry ? entry.level : 0;
          cell.style.background = colors[level];
          cell.addEventListener('mouseenter', () => {
            const rect = cell.getBoundingClientRect();
            const cardRect = grid.closest('.heatmap-card').getBoundingClientRect();
            const dateStr = date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
            tooltip.textContent = count === 0 ? `Sem contribuições — ${dateStr}` : `${count} contribuições — ${dateStr}`;
            tooltip.style.top = (rect.top - cardRect.top - 36) + 'px';
            tooltip.style.left = Math.max(0, rect.left - cardRect.left - 40) + 'px';
            tooltip.classList.add('show');
          });
          cell.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
        }
        grid.appendChild(cell);
      }
    }
  }

  fetch('https://github-contributions-api.jogruber.de/v4/Pedroaruana?y=last')
    .then(r => r.json())
    .then(data => renderGrid(data.contributions))
    .catch(() => {
      countEl.textContent = 'github.com/Pedroaruana';
      renderGrid([]);
    });
})();

// Matrix background
(function () {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコ';
  const fontSize = 13;
  let cols, drops;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols = Math.floor(canvas.width / fontSize);
    drops = Array(cols).fill(1);
  }

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(13,13,15,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Fira Code, monospace';
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(draw, 45);
})();

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');

function closeMenu() {
  navMobile.classList.remove('open');
  menuToggle.classList.remove('open');
  nav.classList.remove('menu-open');
}

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navMobile.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  nav.classList.toggle('menu-open', isOpen);
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) closeMenu();
});

// Typed text
const words = ['Fullstack', 'Frontend', 'Backend', 'React Dev', 'Node Dev'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const word = words[wordIndex];
  if (!deleting) {
    typedEl.textContent = word.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = word.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}

type();

// Scroll reveal
const reveals = document.querySelectorAll(
  '.about-grid, .skills-categories, .project-card, .contact-card, .skill-category, .about-stats'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Hero terminal animation
(function () {
  const body = document.getElementById('htBody');
  if (!body) return;

  const sequence = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', html: '<span class="hl">Pedro Aruana</span> — Fullstack Developer' },
    { type: 'cmd', text: 'cat skills.txt' },
    { type: 'out', html: 'React · Angular · Node.js · Python · Spring Boot' },
    { type: 'cmd', text: 'git log --oneline' },
    { type: 'out', html: '<span class="ok">✓</span> HelpDeskEA · NukeMap · HireMind AI · GameHub' },
    { type: 'cmd', text: 'echo $STATUS' },
    { type: 'out', html: '<span class="ok">●</span> Disponível para projetos' },
  ];

  let si = 0, ci = 0;
  let cursor = document.createElement('span');
  cursor.className = 'ht-cursor';

  function nextStep() {
    if (si >= sequence.length) {
      body.appendChild(cursor);
      return;
    }
    const step = sequence[si];
    if (step.type === 'cmd') {
      const line = document.createElement('div');
      line.className = 'ht-line';
      const prompt = document.createElement('span');
      prompt.className = 'ht-prompt';
      prompt.textContent = '$';
      const cmd = document.createElement('span');
      cmd.className = 'ht-cmd';
      line.append(prompt, cmd, cursor);
      body.appendChild(line);
      const chars = step.text.split('');
      ci = 0;
      function typeChar() {
        if (ci < chars.length) {
          cmd.textContent += chars[ci++];
          setTimeout(typeChar, 55);
        } else {
          si++;
          setTimeout(nextStep, 300);
        }
      }
      typeChar();
    } else {
      cursor.remove();
      const out = document.createElement('div');
      out.className = 'ht-out';
      out.innerHTML = step.html;
      body.appendChild(out);
      si++;
      setTimeout(nextStep, 200);
    }
  }

  setTimeout(nextStep, 600);
})();

// Hourglass animation
const hourglass = document.querySelector('.hourglass');
if (hourglass) {
  const frames = ['⏳', '⌛'];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % frames.length;
    hourglass.textContent = frames[i];
  }, 700);
}

// Certs toggle
const certsToggle = document.getElementById('certsToggle');
const extraCerts = document.querySelectorAll('.cert-card.extra');
let certsOpen = false;

certsToggle.addEventListener('click', () => {
  certsOpen = !certsOpen;
  extraCerts.forEach(card => card.classList.toggle('visible', certsOpen));
  certsToggle.classList.toggle('open', certsOpen);
  certsToggle.innerHTML = certsOpen
    ? 'Ver menos <span class="toggle-arrow">↓</span>'
    : 'Ver mais <span class="toggle-arrow">↓</span>';
});

// Smooth active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${section.id}`) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
});
