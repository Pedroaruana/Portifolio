// i18n
const translations = {
  en: {
    'nav.sobre': 'About',
    'nav.experiencia': 'Experience',
    'nav.formacao': 'Education',
    'nav.certificados': 'Certificates',
    'nav.projetos': 'Projects',
    'nav.contato': 'Contact',
    'hero.badge': 'Available for projects',
    'hero.greeting': "Hi, I'm",
    'hero.role-prefix': 'Developer',
    'hero.cta-projects': 'View Projects',
    'hero.cta-contact': 'Get in touch',
    'hero.scroll': 'Scroll',
    'about.label': '/ about me',
    'about.title': 'Turning ordinary websites into <span class="accent">unique experiences</span>.',
    'about.p1': 'Hi! My name is <strong>Pedro Aruanã</strong>, I\'m <strong>22 years old</strong> and I\'m from Salvador, Bahia. I\'ve been coding for <strong>2 years</strong> and I\'m a front-end developer with full stack experience too — I like taking an ordinary site or system and turning it into an experience people remember. I\'m always learning and testing new technologies hands-on, not just in theory.',
    'about.p2': "I'm proficient in React and Angular on the interface, but I build the whole system: REST APIs with Node.js and FastAPI, JWT authentication, automated tests with Vitest and Playwright, deployment with Docker and CI/CD. I'm currently studying and testing automation with n8n.",
    'about.stat1': 'Repos live',
    'about.stat2': 'Certificates',
    'about.stat3': 'Years of exp.',
    'about.journey1': 'First line of code',
    'about.journey2': 'First job',
    'about.journey3': 'Portfolio live',
    'about.journey4-year': 'Forecast 2026',
    'about.journey4': '<span class="hourglass">⏳</span> Graduated',
    'about.location': 'Salvador, BA — Brazil',
    'about.diff-title': 'What sets me apart',
    'about.diff1-title': 'Came from support, I understand the user',
    'about.diff1-desc': 'I worked in helpdesk before becoming a dev — that changes how I build interfaces. I know where users get stuck, where they give up, and I code with that in mind.',
    'about.diff2-title': 'I test before it breaks in production',
    'about.diff2-desc': 'Vitest, Jest, Playwright, pytest — my projects have automated tests and CI/CD running on every commit. It\'s not just "works on my machine".',
    'about.diff3-title': 'I fix the bug nobody wants to touch',
    'about.diff3-desc': "An error that only shows up in production, behavior that makes no sense at all — that's the kind of problem I won't let go until I find the root cause.",
    'skills.label': '/ skills',
    'skills.title': 'Full stack: interface, data and AI in production.',
    'skills.desc': "From the interface to the database, from backend to deploy — every layer tested, versioned and in production, not just on paper. Automated CI/CD, tests with Vitest and Playwright, and AI applied in real production, not just in theory.",
    'skills.hl1-title': 'Complete system',
    'skills.hl1-desc': 'Every project leaves my hands with front, back, database and deploy ready.',
    'skills.hl2-title': 'Automated testing',
    'skills.hl2-desc': "Vitest, Jest and Playwright running on every commit, not just when I remember.",
    'skills.hl3-title': 'Frictionless deploy',
    'skills.hl3-desc': 'CI/CD and Docker take the code from commit to live without a manual step.',
    'skills.hl4-title': 'Applied AI',
    'skills.hl4-desc': "I've used Claude and RAG to solve real problems, not just test in a chat.",
    'skills.cat1-desc': 'Interfaces with React and Angular, performance and user experience first.',
    'skills.cat2-desc': 'REST APIs in Node.js and Python, authentication and integration with external services.',
    'skills.cat3-title': 'Database',
    'skills.cat3-desc': 'Relational and non-relational modeling, from quick prototype to production.',
    'skills.cat4-title': 'Tools & Deploy',
    'skills.cat4-desc': 'Automated deploy, testing, agile methodology and applied AI in production.',
    'exp.label': '/ experience',
    'exp.title': 'Professional Experience',
    'exp.role': 'Apprentice — Marketing & IT Support',
    'exp.location': 'Salvador, BA · On-site',
    'exp.bullet1': 'Technical support for internal users — remote assistance via <strong>AnyDesk</strong> and resolving hardware and software tickets',
    'exp.bullet2': 'CRM management with <strong>SAP</strong>, <strong>Salescloud</strong> and <strong>Salesforce</strong> — logging and tracking service requests',
    'exp.bullet3': 'Temporarily covered for a B.I analyst for 45 days — building <strong>management reports and spreadsheets</strong> in Excel',
    'exp.bullet4': 'Formatting, maintaining and reinstalling computer systems; setting up corporate phones and iPads',
    'exp.bullet5': 'Support with IT infrastructure — organizing, inventory and equipment support for the company',
    'exp.tag-support': 'IT Support',
    'exp.reference': 'Reference letter available',
    'edu.label': '/ education',
    'edu.title': 'Academic Background',
    'edu.role1': 'Associate Degree in Systems Analysis and Development',
    'edu.ongoing': 'Ongoing',
    'edu.bullet1': 'Program focused on <strong>software development</strong>, programming logic and systems engineering',
    'edu.bullet2': '<strong>Database</strong> courses, data modeling and systems design',
    'edu.bullet3': 'Development and hands-on application of <strong>web development</strong> and object-oriented programming knowledge',
    'edu.tag-swdev': 'Software Development',
    'edu.tag-db': 'Database',
    'edu.tag-syseng': 'Systems Engineering',
    'edu.role2': 'English Course — English Language and Literature',
    'edu.completed': 'Completed',
    'edu.bullet4': '2-year course focused on <strong>conversation</strong>, grammar and writing',
    'edu.bullet5': 'Solid foundation for everyday communication',
    'edu.bullet6': 'Reading and understanding <strong>technical content in English</strong>, essential for documentation and study materials in tech',
    'edu.tag-english': 'English',
    'edu.tag-conversation': 'Conversation',
    'edu.tag-techreading': 'Technical Reading',
    'cert.label': '/ certificates',
    'cert.title': 'Courses & Certifications',
    'cert.desc': 'Certifications issued by recognized institutions.',
    'cert.view-btn': 'View certificate ↗',
    'cert.see-all-linkedin': 'See all certificates on LinkedIn',
    'tag.fundamentals': 'Fundamentals',
    'tag.ai': 'AI',
    'tag.algorithms': 'Algorithms',
    'tag.automation': 'Automation',
    'tag.agents': 'Agents',
    'tag.applied-ai': 'Applied AI',
    'tag.genai': 'Generative AI',
    'tag.agile': 'Agile Methodology',
    'proj.label': '/ projects',
    'proj.title': "Projects that turn ideas into solutions",
    'proj.desc': "Some of the projects I've developed. Click to see more.",
    'proj.see-more-github': 'See more projects on GitHub',
    'proj.view-project': 'View Project',
    'proj.wasteland-desc': 'Gamified pixel-art task manager set in 2056, in a world without air. Each task is a seed you water and harvest to generate oxygen. Guest mode via localStorage, JWT auth and automated tests with Vitest and Playwright.',
    'proj.scannerbuild-desc': "Pick any point on the map and ScannerBuild traces the building's real outline via OpenStreetMap, estimates height, floors and entrances, and builds a navigable 3D model — with caching, rate-limiting and parallel retry to handle the external service's instability.",
    'proj.cicada-desc': 'Interactive web puzzle inspired by the Cicada 3301 enigma. Five stages, each with a different cryptography and investigation technique — including LSB steganography implemented from scratch with Pillow. At the end, a personalized PDF certificate.',
    'proj.createlanguage-desc': 'A 7-step wizard about how you imagine your programming language, with a "building" animation in a simulated IDE — and at the end you download a real interpreter (lexer, parser and interpreter), runs with node cli.js run.',
    'proj.botgram-desc': "Visual builder for Telegram sales bots. Configure products, prices and messages on the site and get the bot's code ready to run — no coding needed. Real-time preview simulating a Telegram conversation.",
    'proj.cpumaster-desc': 'PC building simulator with real-time compatibility checking — socket, memory type, GPU size, cooler radiator — and 3D case visualization. FPS estimates and ready-made builds from budget to extreme.',
    'proj.gamehub-desc': 'Digital games platform inspired by Steam. Login with 3D animation in Three.js, catalog with search, cart, favorites and checkout with multiple payment methods. Deployed across 3 different services.',
    'proj.hiremind-desc': 'Upload a resume as a PDF and get a score from 0 to 100 in seconds, automatically extracted skills and improvement tips. Backend in FastAPI with JWT auth and a real PostgreSQL database.',
    'proj.helpdesk-desc': 'Born from a real frustration: slow support systems full of useless stuff. Built from scratch with Angular + Node.js, JWT auth, real-time metrics dashboard and automatic deploy via GitHub Actions.',
    'contact.label': '/ contact',
    'contact.status': 'Available for opportunities',
    'contact.title': 'Want to turn your idea into a real product?',
    'contact.highlight': "Let's talk.",
    'contact.response-time': 'Response within 24h',
    'contact.download-cv': 'Download Resume (PDF)',
    'footer.copy': '© 2026 SALVADOR - BA. ALL RIGHTS RESERVED.',
    'footer.powered-by': 'POWERED BY',
    'modal.view-github': 'View on GitHub',
    'modal.view-demo': 'View live demo',
    'common.see-more': 'See more',
    'common.see-less': 'See less'
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function t(key) {
  if (currentLang === 'en' && translations.en[key]) return translations.en[key];
  const el = document.querySelector(`[data-i18n="${key}"], [data-i18n-html="${key}"]`);
  if (el) return el.dataset.pt || el.dataset.ptHtml || el.textContent;
  return key;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (lang === 'en') {
      if (el.dataset.pt === undefined) el.dataset.pt = el.textContent;
      el.textContent = translations.en[key] || el.dataset.pt;
    } else if (el.dataset.pt !== undefined) {
      el.textContent = el.dataset.pt;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (lang === 'en') {
      if (el.dataset.ptHtml === undefined) el.dataset.ptHtml = el.innerHTML;
      el.innerHTML = translations.en[key] || el.dataset.ptHtml;
    } else if (el.dataset.ptHtml !== undefined) {
      el.innerHTML = el.dataset.ptHtml;
    }
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  if (currentLang === 'en') applyLanguage('en');
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });
  const toggleFn = () => applyLanguage(currentLang === 'en' ? 'pt' : 'en');
  const langToggle = document.getElementById('langToggle');
  const langToggleMobile = document.getElementById('langToggleMobile');
  if (langToggle) langToggle.addEventListener('click', toggleFn);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleFn);
});

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
    ctx.fillStyle = 'rgba(13,13,15,0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.shadowBlur = 0;
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

// Nav scroll effect + back to top
const nav = document.getElementById('nav');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('visible', window.scrollY > 400);
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
const words = ['Frontend', 'React Dev', 'Angular Dev', 'UI Developer', 'JavaScript Dev'];
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

// Dev story — MacBook 3D build on scroll
(function () {
  const wrap = document.getElementById('devStory');
  if (!wrap) return;

  const lid = document.getElementById('mbLid');
  const devices = document.querySelector('.ds-devices');
  const steps = Array.from(document.querySelectorAll('#dsList li'));
  const sceneEl = document.getElementById('dsScene');
  const counterEl = document.getElementById('dsCounter');
  const finalBlock = document.getElementById('dsFinal');
  const phone = document.getElementById('iphone');
  const ipCheckout = document.getElementById('ipCheckout');
  const storeParts = Array.from(document.querySelectorAll('.store [data-el]'));
  const pipes = Array.from(document.querySelectorAll('.pp'));

  const panels = {
    api: document.getElementById('ovApi'),
    db: document.getElementById('ovDb'),
    test: document.getElementById('ovTest'),
    docker: document.getElementById('ovDocker'),
    ci: document.getElementById('ovCi'),
    n8n: document.getElementById('ovN8n'),
    live: document.getElementById('ovLive')
  };

  // scene 0 is the closed / floating intro; steps below start at scene 1
  const scenes = [
    { name: 'Abrir notebook', panel: null },
    { name: 'Tela acende', panel: null },
    { name: 'Frontend', panel: null },
    { name: 'Backend', panel: 'api' },
    { name: 'Banco de dados', panel: 'db' },
    { name: 'Testes automatizados', panel: 'test' },
    { name: 'Docker', panel: 'docker' },
    { name: 'CI/CD', panel: 'ci' },
    { name: 'Automação', panel: 'n8n' },
    { name: 'Deploy', panel: 'live' }
  ];

  const LID_CLOSED = -90;
  const LID_OPEN = -8;
  const INTRO_HOLD = 0.10;   // portion of scroll spent on the floating closed laptop
  const OPEN_SPAN = 0.11;    // portion of scroll spent opening the lid
  const INTRO_LIFT = 21;     // vh the closed rig is raised so it is not stuck at the bottom
  const total = scenes.length;

  let last = -2;
  let ticking = false;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function render() {
    const rect = wrap.getBoundingClientRect();
    const scrollable = wrap.offsetHeight - window.innerHeight;
    const p = clamp(scrollable > 0 ? -rect.top / scrollable : 0, 0, 1);

    // lid angle
    const openT = clamp((p - INTRO_HOLD) / OPEN_SPAN, 0, 1);
    const e = easeInOut(openT);
    lid.style.transform = `rotateX(${LID_CLOSED + (LID_OPEN - LID_CLOSED) * e}deg)`;

    // closed laptop sits low in its own box, so lift the whole rig while it is shut
    const rest = 1 - e;
    devices.style.transform = `translateY(${(-INTRO_LIFT * rest).toFixed(2)}vh) scale(${(1 + 0.05 * rest).toFixed(3)})`;

    const inView = rect.top <= 0 && rect.bottom > 0;
    const intro = inView && p < INTRO_HOLD;

    // scene index over the remaining scroll
    const after = clamp((p - INTRO_HOLD) / (1 - INTRO_HOLD), 0, 1);
    const scene = intro ? -1 : Math.min(total - 1, Math.floor(after * total));

    if (scene === last) return;
    last = scene;

    wrap.dataset.intro = intro ? '1' : '0';
    wrap.dataset.lit = scene >= 1 ? '1' : '0';

    if (intro) {
      steps.forEach(li => li.classList.remove('active', 'done'));
      storeParts.forEach(el => el.classList.remove('in'));
      Object.values(panels).forEach(el => el.classList.remove('in'));
      phone.classList.remove('show');
      ipCheckout.classList.remove('show');
      finalBlock.classList.remove('show');
      return;
    }

    sceneEl.textContent = scenes[scene].name;
    counterEl.textContent = `CENA ${String(scene + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

    steps.forEach((li, i) => {
      li.classList.toggle('active', i === scene);
      li.classList.toggle('done', i < scene);
    });

    // the store paints itself in during "tela acende" + "frontend"
    storeParts.forEach((el, i) => {
      el.classList.toggle('in', scene >= 2 || (scene === 1 && i === 0));
    });

    // one panel per scene keeps the screen readable
    const active = scenes[scene].panel;
    Object.entries(panels).forEach(([key, el]) => el.classList.toggle('in', key === active));

    pipes.forEach((pp, i) => {
      pp.classList.remove('done', 'run');
      if (scene === 7) pp.classList.add(i < 4 ? 'done' : 'run');
      else if (scene > 7) pp.classList.add('done');
    });

    phone.classList.toggle('show', scene >= 2);
    ipCheckout.classList.toggle('show', scene >= 8);
    finalBlock.classList.toggle('show', scene === total - 1);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { render(); ticking = false; });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  render();
})();

// Code tabs
(function () {
  const list = document.getElementById('codeTabList');
  if (!list) return;
  const filenameEl = document.getElementById('codeTabFilename');
  const contentEl = document.getElementById('codeTabContent');
  const metaEl = document.getElementById('codeTabMeta');

  const k = 'tok-kw', s = 'tok-str', t = 'tok-type', c = 'tok-com', f = 'tok-fn';

  const tabs = {
    react: {
      filename: 'useDebounce.ts',
      meta: 'Custom Hooks · useEffect · TypeScript',
      code:
`<span class="${k}">import</span> { useState, useEffect } <span class="${k}">from</span> <span class="${s}">'react'</span>;

<span class="${k}">export function</span> <span class="${f}">useDebounce</span>(value: <span class="${t}">string</span>, delay = <span class="tok-num">300</span>) {
  <span class="${k}">const</span> [debounced, setDebounced] = <span class="${f}">useState</span>(value);

  <span class="${f}">useEffect</span>(() =&gt; {
    <span class="${k}">const</span> timer = <span class="${f}">setTimeout</span>(() =&gt; {
      <span class="${f}">setDebounced</span>(value);
    }, delay);

    <span class="${k}">return</span> () =&gt; <span class="${f}">clearTimeout</span>(timer);
  }, [value, delay]);

  <span class="${k}">return</span> debounced;
}`
    },
    angular: {
      filename: 'wizard.component.ts',
      meta: 'Signals · Standalone · Angular 21',
      code:
`<span class="${k}">import</span> { Component, signal, computed } <span class="${k}">from</span> <span class="${s}">'@angular/core'</span>;

<span class="tok-dec">@Component</span>({ selector: <span class="${s}">'app-wizard'</span>, standalone: <span class="tok-num">true</span> })
<span class="${k}">export class</span> <span class="${t}">WizardComponent</span> {
  botName = <span class="${f}">signal</span>(<span class="${s}">''</span>);
  template = <span class="${f}">signal</span>&lt;<span class="${t}">Template</span> | null&gt;(null);

  preview = <span class="${f}">computed</span>(() =&gt;
    <span class="${f}">generatePreview</span>(<span class="${k}">this</span>.botName(), <span class="${k}">this</span>.template())
  );

  <span class="${f}">generateCode</span>() {
    <span class="${k}">return</span> <span class="${f}">buildBotFile</span>(<span class="${k}">this</span>.botName(), <span class="${k}">this</span>.template());
  }
}`
    },
    node: {
      filename: 'auth.middleware.ts',
      meta: 'Express · JWT · Middleware',
      code:
`<span class="${k}">import</span> jwt <span class="${k}">from</span> <span class="${s}">'jsonwebtoken'</span>;
<span class="${k}">import</span> { Request, Response, NextFunction } <span class="${k}">from</span> <span class="${s}">'express'</span>;

<span class="${k}">export function</span> <span class="${f}">authGuard</span>(req: <span class="${t}">Request</span>, res: <span class="${t}">Response</span>, next: <span class="${t}">NextFunction</span>) {
  <span class="${k}">const</span> token = req.headers.authorization?.split(<span class="${s}">' '</span>)[<span class="tok-num">1</span>];
  <span class="${k}">if</span> (!token) <span class="${k}">return</span> res.status(<span class="tok-num">401</span>).json({ error: <span class="${s}">'No token'</span> });

  <span class="${k}">try</span> {
    req.user = jwt.<span class="${f}">verify</span>(token, process.env.JWT_SECRET!);
    <span class="${f}">next</span>();
  } <span class="${k}">catch</span> {
    res.status(<span class="tok-num">401</span>).json({ error: <span class="${s}">'Invalid token'</span> });
  }
}`
    },
    python: {
      filename: 'main.py',
      meta: 'FastAPI · Pydantic · Uvicorn',
      code:
`<span class="${k}">from</span> fastapi <span class="${k}">import</span> FastAPI, UploadFile
<span class="${k}">from</span> app.services <span class="${k}">import</span> parse_resume, score_resume

app = <span class="${f}">FastAPI</span>()

<span class="tok-dec">@app.post</span>(<span class="${s}">"/analyze"</span>)
<span class="${k}">async def</span> <span class="${f}">analyze</span>(file: <span class="${t}">UploadFile</span>):
    text = <span class="${k}">await</span> <span class="${f}">parse_resume</span>(file)
    skills = <span class="${f}">extract_skills</span>(text)
    score = <span class="${f}">score_resume</span>(skills)
    <span class="${k}">return</span> {<span class="${s}">"score"</span>: score, <span class="${s}">"skills"</span>: skills}`
    },
    sql: {
      filename: 'query.sql',
      meta: 'PostgreSQL · Joins · Neon',
      code:
`<span class="${k}">SELECT</span> p.protocolo, p.status, <span class="${f}">COUNT</span>(pol.id) <span class="${k}">AS</span> policiais
<span class="${k}">FROM</span> ocorrencias p
<span class="${k}">LEFT JOIN</span> policiais pol <span class="${k}">ON</span> pol.ocorrencia_id = p.id
<span class="${k}">WHERE</span> p.status != <span class="${s}">'Concluida'</span>
<span class="${k}">GROUP BY</span> p.protocolo, p.status
<span class="${k}">ORDER BY</span> p.data_fato <span class="${k}">DESC</span>
<span class="${k}">LIMIT</span> <span class="tok-num">20</span>;`
    },
    docker: {
      filename: 'Dockerfile',
      meta: 'Multi-stage · Alpine · CI/CD',
      code:
`<span class="${k}">FROM</span> node:20-alpine

<span class="${k}">WORKDIR</span> /app
<span class="${k}">COPY</span> package*.json ./
<span class="${k}">RUN</span> npm ci --production

<span class="${k}">COPY</span> . .
<span class="${k}">EXPOSE</span> <span class="tok-num">3000</span>

<span class="${k}">CMD</span> [<span class="${s}">"node"</span>, <span class="${s}">"dist/server.js"</span>]`
    }
  };

  let typingToken = 0;

  function renderTab(id) {
    const tab = tabs[id];
    if (!tab) return;
    filenameEl.textContent = tab.filename;
    metaEl.textContent = tab.meta;

    const temp = document.createElement('div');
    temp.innerHTML = tab.code;
    const plainText = temp.textContent;

    const myToken = ++typingToken;
    contentEl.textContent = '';
    let i = 0;

    function typeChunk() {
      if (myToken !== typingToken) return;
      if (i < plainText.length) {
        i = Math.min(i + 3, plainText.length);
        contentEl.textContent = plainText.slice(0, i);
        setTimeout(typeChunk, 6);
      } else {
        contentEl.innerHTML = tab.code;
      }
    }
    typeChunk();
  }

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.code-tab');
    if (!btn) return;
    list.querySelectorAll('.code-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTab(btn.dataset.tab);
  });

  renderTab('react');
})();

// Project modal
const projectData = {
  helpdesk: {
    title: 'HelpDesk EA',
    img: 'screenshots/helpdesk.png',
    desc: 'Trabalhei em suporte de T.I e sempre reclamei dos sistemas que usávamos: lentos e cheios de coisa que ninguém usa. Construí o meu do zero — Angular no frontend, API própria em Node.js com banco PostgreSQL real, autenticação JWT e CI/CD automático via GitHub Actions. Também foi minha entrada no Angular e no desenvolvimento de APIs de verdade.',
    descEn: 'I worked in IT support and always complained about the systems we used: slow and full of stuff nobody needed. So I built my own from scratch — Angular on the frontend, my own Node.js API with a real PostgreSQL database, JWT auth and automatic CI/CD via GitHub Actions. This was also my entry point into Angular and real API development.',
    stack: ['Angular 17', 'TypeScript', 'Node.js', 'PostgreSQL', 'Angular Material', 'CI/CD'],
    github: 'https://github.com/Pedroaruana/HelpDeskEA',
    demo: 'https://pedroaruana.github.io/HelpDeskEA/dashboard'
  },
  scannerbuild: {
    title: 'ScannerBuild',
    img: 'screenshots/scannerbuild.png',
    desc: 'Sempre gostei da ideia de ver um lugar real virar um modelo 3D. Aqui você clica num prédio no mapa, o backend busca o contorno real dele no OpenStreetMap (via Overpass API), estima altura, andares e entradas, e o resultado vira um modelo 3D navegável, exportável em .glb, .png, .pdf ou .json. A parte que mais gostei de resolver foi deixar o app resiliente de verdade contra a instabilidade do Overpass: cache, timeout curto, retry em paralelo com espelho alternativo e rate-limit por IP.',
    descEn: 'I always liked the idea of turning a real place into a 3D model. Here you click a building on the map, the backend fetches its real outline from OpenStreetMap (via the Overpass API), estimates height, floors and entrances, and the result becomes a navigable 3D model, exportable as .glb, .png, .pdf or .json. The part I enjoyed solving the most was making the app genuinely resilient against Overpass instability: caching, short timeouts, parallel retry with a fallback mirror, and per-IP rate limiting.',
    stack: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Leaflet', 'Zod'],
    github: 'https://github.com/Pedroaruana/Scanner-Build',
    demo: 'https://scanner-build.vercel.app/'
  },
  hiremind: {
    title: 'HireMind AI',
    img: 'screenshots/hiremind.png',
    desc: 'Comecei querendo entender como integrar IA com uma aplicação real. Você sobe um currículo em PDF, o sistema extrai as habilidades, classifica o nível (Júnior/Pleno/Sênior) e devolve um score de 0 a 100 com dicas personalizadas. O maior desafio foi o fluxo de autenticação — no início o usuário tinha que registrar a conta direto no Swagger da API. Refiz tudo do zero no frontend e entendi na prática como JWT funciona.',
    descEn: 'I started out wanting to understand how to integrate AI into a real application. You upload a resume as a PDF, the system extracts the skills, classifies the seniority level (Junior/Mid/Senior) and returns a score from 0 to 100 with personalized tips. The biggest challenge was the auth flow — at first the user had to register the account directly through the API\'s Swagger. I rebuilt it all from scratch on the frontend and learned how JWT works in practice.',
    stack: ['Python', 'FastAPI', 'React', 'Vite', 'PostgreSQL'],
    github: 'https://github.com/Pedroaruana/hiremind-ai',
    demo: 'https://hiremind-ai-fawn.vercel.app'
  },
  createlanguage: {
    title: 'Create Your Language',
    img: 'screenshots/create-your-language.png',
    desc: 'O plano era gerar só um markdown explicando como a linguagem inventada funcionaria. No meio do caminho achei bobo: a pessoa baixa, lê, e não roda nada. Mudei pra gerar um interpretador de verdade — a pessoa responde um wizard de 7 etapas (paradigma, tipagem, sintaxe, palavras-chave) e baixa um .zip com lexer, parser e interpretador reais, roda com node cli.js run. O parser tinha que aceitar 3 jeitos diferentes de fechar bloco dependendo do que a pessoa escolhe no wizard — testei gerando o zip de cada combinação e rodando de verdade pra conferir o output.',
    descEn: 'The original plan was to generate just a markdown file explaining how the invented language would work. Halfway through I thought that was pointless: the person downloads it, reads it, and nothing actually runs. So I changed it to generate a real interpreter instead — you answer a 7-step wizard (paradigm, typing, syntax, keywords) and download a .zip with a real lexer, parser and interpreter, runnable with node cli.js run. The parser had to accept 3 different ways of closing a block depending on what the person picks in the wizard — I tested it by generating the zip for every combination and actually running it to check the output.',
    stack: ['Next.js', 'React', 'TypeScript', 'Vitest', 'Docker'],
    github: 'https://github.com/Pedroaruana/Create-Your-Language-',
    demo: 'https://create-your-language.vercel.app/'
  },
  gamehub: {
    title: 'GameHub',
    img: 'screenshots/gamehub.png',
    desc: 'Quis entender como funciona uma loja digital de verdade por dentro — autenticação, carrinho, checkout, banco de dados, tudo junto. Fiz o frontend em HTML, CSS e JS puro, sem framework, pra realmente entender o DOM. Three.js na tela de login foi meu primeiro contato com 3D no browser. Backend em FastAPI com Supabase e Row Level Security em todas as tabelas.',
    descEn: 'I wanted to understand how a real digital store works under the hood — auth, cart, checkout, database, all together. I built the frontend in plain HTML, CSS and JS, no framework, to really understand the DOM. Three.js on the login screen was my first contact with 3D in the browser. Backend in FastAPI with Supabase and Row Level Security on every table.',
    stack: ['Python', 'FastAPI', 'Supabase', 'Three.js', 'JavaScript'],
    github: 'https://github.com/Pedroaruana/gamehub',
    demo: 'https://gamehub-omega-blond.vercel.app/'
  },
  botgram: {
    title: 'BotGram',
    img: 'screenshots/botgram.png',
    desc: 'Surgiu de uma observação simples: muita gente vende pelo Telegram mas não sabe criar um bot. O usuário escolhe um template, preenche as informações do negócio e vê em tempo real como o bot vai responder — tem um preview estilo Telegram na lateral. No final, baixa um bot.js pronto pra rodar. Usei Angular 21 com signals: todos os campos são signal() e o preview e o código gerado são computed() que derivam automaticamente.',
    descEn: 'It came from a simple observation: a lot of people sell on Telegram but don\'t know how to build a bot. The user picks a template, fills in the business info and sees in real time how the bot will respond — there\'s a Telegram-style preview on the side. At the end, they download a ready-to-run bot.js. I used Angular 21 with signals: every field is a signal() and the preview plus generated code are computed() values that derive automatically.',
    stack: ['Angular 21', 'TypeScript', 'Tailwind CSS v4', 'Signals', 'Fastify', 'Vercel'],
    github: 'https://github.com/Pedroaruana/BotGram',
    demo: 'https://botgram-henna.vercel.app/'
  },
  cpumaster: {
    title: 'CPU Master',
    img: 'screenshots/cpu-master.png',
    desc: 'Sempre gostei de montar PC e quis juntar isso com programação num projeto de verdade. Aproveitei também pra aprender React Three Fiber do zero e treinar animação controlada por scroll usando só CSS puro, sem lib de animação. A montagem 3D no scroll não usa three.js nem nada pra essa parte — só perspective, preserve-3d, rotateX/rotateY, acertando a ordem das camadas pra uma peça não atravessar a outra. O motor de compatibilidade avisa gargalo de CPU x GPU, dá margem de segurança na fonte e barra radiador grande demais pro gabinete.',
    descEn: 'I\'ve always liked building PCs and wanted to combine that with a real programming project. I also used it to learn React Three Fiber from scratch and to practice scroll-driven animation using pure CSS only, no animation library. The 3D build-up on scroll doesn\'t use three.js at all for that part — just perspective, preserve-3d, rotateX/rotateY, getting the layer order right so one part doesn\'t clip through another. The compatibility engine warns about CPU x GPU bottlenecks, adds a safety margin on the PSU, and blocks a cooler radiator that\'s too big for the case.',
    stack: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    github: 'https://github.com/Pedroaruana/CPU-MASTER',
    demo: 'https://cpu-master-steel.vercel.app/'
  },
  cicada: {
    title: 'Cicada 3301',
    img: 'screenshots/cicada.png',
    desc: 'Sempre fui fascinado pelo enigma Cicada 3301 de 2012. Criei minha própria versão: um puzzle web de 5 fases, cada uma exigindo uma técnica diferente pra achar o link da próxima — de criptografia a análise de imagem. A parte mais difícil foi a esteganografia LSB, implementada do zero com Pillow, escondendo dados nos bits menos significativos de cada pixel sem alterar a imagem visivelmente. No final, o jogador recebe um certificado personalizado em PDF. 24 testes automatizados com pytest e CI/CD via GitHub Actions.',
    descEn: 'I\'ve always been fascinated by the 2012 Cicada 3301 puzzle. I built my own version: a 5-stage web puzzle, each stage requiring a different technique to find the link to the next one — from cryptography to image analysis. The hardest part was LSB steganography, implemented from scratch with Pillow, hiding data in the least significant bits of each pixel without visibly altering the image. At the end, the player gets a personalized PDF certificate. 24 automated tests with pytest and CI/CD via GitHub Actions.',
    stack: ['Python', 'Flask', 'Pillow', 'Docker', 'pytest', 'CI/CD'],
    github: 'https://github.com/Pedroaruana/Cicada-3301',
    demo: 'https://pedroaruana.pythonanywhere.com/'
  },
  wasteland: {
    title: 'Wasteland Garden',
    img: 'screenshots/wasteland-garden.png',
    desc: 'Cansei dos gerenciadores de tarefa convencionais — Trello, Todoist, Notion funcionam, mas nenhum dá vontade de abrir. Criei um gerenciador gamificado ambientado em 2056: cada tarefa é uma semente que passa por 5 estágios ao longo de 7 dias, regada a cada 12h, e ao ser colhida gera oxigênio. Tem modo visitante via localStorage (sem precisar criar conta), autenticação JWT e aproveitei pra aprender testes automatizados a sério: Vitest, Testing Library e Playwright end-to-end.',
    descEn: 'I got tired of conventional task managers — Trello, Todoist, Notion all work, but none of them make you want to open them. I built a gamified manager set in 2056: each task is a seed that goes through 5 stages over 7 days, watered every 12h, and generates oxygen when harvested. It has a guest mode via localStorage (no account needed), JWT auth, and I used it to seriously learn automated testing: Vitest, Testing Library and end-to-end Playwright.',
    stack: ['React 18', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Zustand'],
    github: 'https://github.com/Pedroaruana/Wasteland-Garden',
    demo: 'https://pipe-stonks-frontend.vercel.app/'
  }
};

function openProject(id) {
  const p = projectData[id];
  if (!p) return;
  document.getElementById('projModalImg').src = p.img;
  document.getElementById('projModalImg').alt = p.title;
  document.getElementById('projModalTitle').textContent = p.title;
  document.getElementById('projModalDesc').textContent = (currentLang === 'en' && p.descEn) ? p.descEn : p.desc;
  document.getElementById('projModalStack').innerHTML = p.stack.map(t => `<span>${t}</span>`).join('');
  document.getElementById('projBtnGithub').href = p.github;
  document.getElementById('projBtnDemo').href = p.demo;
  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Cert modal
function openCert(src) {
  document.getElementById('certModalImg').src = src;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCert() {
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCert();
    document.getElementById('projectModal').classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Certs toggle
const certsToggle = document.getElementById('certsToggle');
const extraCerts = document.querySelectorAll('.cert-card.extra');
let certsOpen = false;

certsToggle.addEventListener('click', () => {
  certsOpen = !certsOpen;
  extraCerts.forEach(card => card.classList.toggle('visible', certsOpen));
  certsToggle.classList.toggle('open', certsOpen);
  certsToggle.innerHTML = (certsOpen ? t('common.see-less') : t('common.see-more')) + ' <span class="toggle-arrow">↓</span>';
});

// Projects toggle
const projectsToggle = document.getElementById('projectsToggle');
const extraProjects = document.querySelectorAll('.project-card.extra');
let projectsOpen = false;

if (projectsToggle) {
  projectsToggle.addEventListener('click', () => {
    projectsOpen = !projectsOpen;
    extraProjects.forEach(card => card.classList.toggle('visible', projectsOpen));
    projectsToggle.classList.toggle('open', projectsOpen);
    projectsToggle.innerHTML = (projectsOpen ? t('common.see-less') : t('common.see-more')) + ' <span class="toggle-arrow">↓</span>';
  });
}

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

// Projects horizontal scroll rail — vertical wheel input scrolls the row sideways
(function () {
  const rail = document.getElementById('projRail');
  const track = document.getElementById('projTrack');
  if (!rail || !track) return;

  rail.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    const goingRight = e.deltaY > 0;
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
    const atStart = track.scrollLeft <= 0;
    if ((goingRight && atEnd) || (!goingRight && atStart)) return;
    e.preventDefault();
    track.scrollLeft += e.deltaY;
  }, { passive: false });
})();
