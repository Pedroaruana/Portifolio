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
    stack: ['Angular 17', 'TypeScript', 'Node.js', 'PostgreSQL', 'Angular Material', 'CI/CD'],
    github: 'https://github.com/Pedroaruana/HelpDeskEA',
    demo: 'https://pedroaruana.github.io/HelpDeskEA/dashboard'
  },
  scannerbuild: {
    title: 'ScannerBuild',
    img: 'screenshots/scannerbuild.png',
    desc: 'Sempre gostei da ideia de ver um lugar real virar um modelo 3D. Aqui você clica num prédio no mapa, o backend busca o contorno real dele no OpenStreetMap (via Overpass API), estima altura, andares e entradas, e o resultado vira um modelo 3D navegável, exportável em .glb, .png, .pdf ou .json. A parte que mais gostei de resolver foi deixar o app resiliente de verdade contra a instabilidade do Overpass: cache, timeout curto, retry em paralelo com espelho alternativo e rate-limit por IP.',
    stack: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Leaflet', 'Zod'],
    github: 'https://github.com/Pedroaruana/Scanner-Build',
    demo: 'https://scanner-build.vercel.app/'
  },
  hiremind: {
    title: 'HireMind AI',
    img: 'screenshots/hiremind.png',
    desc: 'Comecei querendo entender como integrar IA com uma aplicação real. Você sobe um currículo em PDF, o sistema extrai as habilidades, classifica o nível (Júnior/Pleno/Sênior) e devolve um score de 0 a 100 com dicas personalizadas. O maior desafio foi o fluxo de autenticação — no início o usuário tinha que registrar a conta direto no Swagger da API. Refiz tudo do zero no frontend e entendi na prática como JWT funciona.',
    stack: ['Python', 'FastAPI', 'React', 'Vite', 'PostgreSQL'],
    github: 'https://github.com/Pedroaruana/hiremind-ai',
    demo: 'https://hiremind-ai-fawn.vercel.app'
  },
  createlanguage: {
    title: 'Create Your Language',
    img: 'screenshots/create-your-language.png',
    desc: 'O plano era gerar só um markdown explicando como a linguagem inventada funcionaria. No meio do caminho achei bobo: a pessoa baixa, lê, e não roda nada. Mudei pra gerar um interpretador de verdade — a pessoa responde um wizard de 7 etapas (paradigma, tipagem, sintaxe, palavras-chave) e baixa um .zip com lexer, parser e interpretador reais, roda com node cli.js run. O parser tinha que aceitar 3 jeitos diferentes de fechar bloco dependendo do que a pessoa escolhe no wizard — testei gerando o zip de cada combinação e rodando de verdade pra conferir o output.',
    stack: ['Next.js', 'React', 'TypeScript', 'Vitest', 'Docker'],
    github: 'https://github.com/Pedroaruana/Create-Your-Language-',
    demo: 'https://create-your-language.vercel.app/'
  },
  gamehub: {
    title: 'GameHub',
    img: 'screenshots/gamehub.png',
    desc: 'Quis entender como funciona uma loja digital de verdade por dentro — autenticação, carrinho, checkout, banco de dados, tudo junto. Fiz o frontend em HTML, CSS e JS puro, sem framework, pra realmente entender o DOM. Three.js na tela de login foi meu primeiro contato com 3D no browser. Backend em FastAPI com Supabase e Row Level Security em todas as tabelas.',
    stack: ['Python', 'FastAPI', 'Supabase', 'Three.js', 'JavaScript'],
    github: 'https://github.com/Pedroaruana/gamehub',
    demo: 'https://gamehub-omega-blond.vercel.app/'
  },
  botgram: {
    title: 'BotGram',
    img: 'screenshots/botgram.png',
    desc: 'Surgiu de uma observação simples: muita gente vende pelo Telegram mas não sabe criar um bot. O usuário escolhe um template, preenche as informações do negócio e vê em tempo real como o bot vai responder — tem um preview estilo Telegram na lateral. No final, baixa um bot.js pronto pra rodar. Usei Angular 21 com signals: todos os campos são signal() e o preview e o código gerado são computed() que derivam automaticamente.',
    stack: ['Angular 21', 'TypeScript', 'Tailwind CSS v4', 'Signals', 'Fastify', 'Vercel'],
    github: 'https://github.com/Pedroaruana/BotGram',
    demo: 'https://botgram-henna.vercel.app/'
  },
  corregedoria: {
    title: 'Corregedoria PMBA',
    img: 'screenshots/corregedoria.png',
    desc: 'Sistema fullstack que simula a plataforma interna da Corregedoria da PM da Bahia pra gerenciar Autos de Resistência — do registro da ocorrência até a assinatura digital do termo e geração do PDF pra arquivamento. Tem wizard de registro em 4 etapas com patentes e BPMs reais da PMBA, dashboard com gráficos (Recharts), e simulações de ferramentas forenses reais: PATHFINDER com mapa geoespacial (Leaflet) e Mindspace com grafo de vínculos. Backend Express com Prisma e PostgreSQL na Neon, autenticação JWT e testes automatizados com Vitest e Playwright.',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/Pedroaruana/Corregedoria-PMBA',
    demo: 'https://corregedoria-pmba.vercel.app'
  },
  cicada: {
    title: 'Cicada 3301',
    img: 'screenshots/cicada.png',
    desc: 'Sempre fui fascinado pelo enigma Cicada 3301 de 2012. Criei minha própria versão: um puzzle web de 5 fases, cada uma exigindo uma técnica diferente pra achar o link da próxima — de criptografia a análise de imagem. A parte mais difícil foi a esteganografia LSB, implementada do zero com Pillow, escondendo dados nos bits menos significativos de cada pixel sem alterar a imagem visivelmente. No final, o jogador recebe um certificado personalizado em PDF. 24 testes automatizados com pytest e CI/CD via GitHub Actions.',
    stack: ['Python', 'Flask', 'Pillow', 'Docker', 'pytest', 'CI/CD'],
    github: 'https://github.com/Pedroaruana/Cicada-3301',
    demo: 'https://pedroaruana.pythonanywhere.com/'
  },
  wasteland: {
    title: 'Wasteland Garden',
    img: 'screenshots/wasteland-garden.png',
    desc: 'Cansei dos gerenciadores de tarefa convencionais — Trello, Todoist, Notion funcionam, mas nenhum dá vontade de abrir. Criei um gerenciador gamificado ambientado em 2056: cada tarefa é uma semente que passa por 5 estágios ao longo de 7 dias, regada a cada 12h, e ao ser colhida gera oxigênio. Tem modo visitante via localStorage (sem precisar criar conta), autenticação JWT e aproveitei pra aprender testes automatizados a sério: Vitest, Testing Library e Playwright end-to-end.',
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
  document.getElementById('projModalDesc').textContent = p.desc;
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
  certsToggle.innerHTML = certsOpen
    ? 'Ver menos <span class="toggle-arrow">↓</span>'
    : 'Ver mais <span class="toggle-arrow">↓</span>';
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
    projectsToggle.innerHTML = projectsOpen
      ? 'Ver menos <span class="toggle-arrow">↓</span>'
      : 'Ver mais <span class="toggle-arrow">↓</span>';
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
