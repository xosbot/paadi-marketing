/* ============================================
   PAADI VILLAGE — INTERACTIVE FEATURES
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // THEME TOGGLE
  // ============================================
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('paadi-theme') || 'light';
  if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  updateThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('paadi-theme', next);
      updateThemeIcon();
    });
  }
  function updateThemeIcon() {
    if (!themeBtn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    themeBtn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  // ============================================
  // NAVBAR SCROLL
  // ============================================
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    updateActiveDot();
  });

  // ============================================
  // COUNTER ANIMATION
  // ============================================
  const animatedCounters = new Set();
  function animateCounter(el) {
    if (animatedCounters.has(el)) return;
    animatedCounters.add(el);
    const target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    const isRupee = el.textContent.includes('₹');
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      let display;
      if (target >= 1000 && !isDecimal) {
        display = Math.floor(current).toLocaleString('en-IN');
      } else if (isDecimal) {
        display = current.toFixed(1);
      } else {
        display = Math.floor(current);
      }
      if (isRupee) {
        el.textContent = '₹' + (target >= 1000 ? Math.floor(current).toLocaleString('en-IN') : Math.floor(current));
      } else {
        el.textContent = display;
      }
      if (progress < 1) requestAnimationFrame(update);
      else {
        if (isRupee) el.textContent = '₹' + Math.floor(target).toLocaleString('en-IN');
        else if (isDecimal) el.textContent = target.toFixed(1);
        else if (target >= 1000) el.textContent = target.toLocaleString('en-IN');
        else el.textContent = Math.floor(target);
      }
    }
    requestAnimationFrame(update);
  }

  // ============================================
  // INTERSECTION OBSERVER
  // ============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => observer.observe(el));

  // ============================================
  // PROGRESS RAIL (right side dots)
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const rail = document.getElementById('progress-rail');
  if (rail) {
    sections.forEach(s => {
      const dot = document.createElement('div');
      dot.className = 'progress-dot';
      dot.setAttribute('data-label', s.getAttribute('data-section-label') || s.id);
      dot.setAttribute('data-target', '#' + s.id);
      dot.addEventListener('click', () => {
        const t = document.querySelector('#' + s.id);
        if (t) {
          const top = t.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
      rail.appendChild(dot);
    });
  }

  function updateActiveDot() {
    const dots = document.querySelectorAll('.progress-dot');
    if (!dots.length) return;
    const scrollY = window.scrollY + 200;
    let activeIdx = 0;
    sections.forEach((s, i) => {
      if (s.offsetTop <= scrollY) activeIdx = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        // Close mobile menu
        document.querySelector('.nav-links')?.classList.remove('show');
      }
    });
  });

  // ============================================
  // MOBILE TOGGLE
  // ============================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.toggle('show');
    });
  }

  // ============================================
  // PHASE FILTER (timeline)
  // ============================================
  const phaseBtns = document.querySelectorAll('.phase-btn');
  phaseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      phaseBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const phase = btn.getAttribute('data-phase');
      document.querySelectorAll('.timeline-item').forEach(item => {
        if (phase === 'all' || item.getAttribute('data-phase') === phase) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ============================================
  // PERSONA TABS
  // ============================================
  const personaTabs = document.querySelectorAll('.persona-tab');
  personaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      personaTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const seg = tab.getAttribute('data-segment');
      document.querySelectorAll('.persona').forEach(p => {
        if (seg === 'all' || p.getAttribute('data-segment') === seg) {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // BUDGET CALCULATOR
  // ============================================
  const sliders = document.querySelectorAll('.budget-slider input[type="range"]');
  const totalEl = document.getElementById('budget-total');
  const projConservative = document.getElementById('proj-conservative');
  const projModerate = document.getElementById('proj-moderate');
  const projAggressive = document.getElementById('proj-aggressive');

  // Conversion rate: roughly ₹1000 budget = 1 visitor (conservative), 2.5 (moderate), 5 (aggressive)
  // Based on plan targets: ₹2.75L → 1,000 visitors (moderate ratio ~3.6)
  const RATES = { conservative: 1.0, moderate: 3.6, aggressive: 7.2 };

  function updateBudget() {
    let total = 0;
    const values = {};
    sliders.forEach(s => {
      const v = parseInt(s.value, 10);
      values[s.name] = v;
      total += v;
      const label = s.parentElement.querySelector('.budget-slider-value');
      const pct = Math.round((v / total) * 100) || 0;
      if (label) {
        const name = s.getAttribute('data-display');
        label.textContent = `${name} • ₹${(v / 1000).toFixed(0)}K (${pct}%)`;
      }
    });
    if (totalEl) {
      totalEl.textContent = '₹' + (total / 1000).toFixed(0) + 'K';
    }
    // Projections
    const conservative = Math.round(total * RATES.conservative / 1000);
    const moderate = Math.round(total * RATES.moderate / 1000);
    const aggressive = Math.round(total * RATES.aggressive / 1000);
    if (projConservative) projConservative.textContent = conservative.toLocaleString('en-IN') + ' visitors';
    if (projModerate) projModerate.textContent = moderate.toLocaleString('en-IN') + ' visitors';
    if (projAggressive) projAggressive.textContent = aggressive.toLocaleString('en-IN') + ' visitors';
    // Highlight closest scenario
    const all = document.querySelectorAll('.projection-scenario');
    all.forEach(s => s.classList.remove('active'));
    if (total < 200000) all[0]?.classList.add('active');
    else if (total < 350000) all[1]?.classList.add('active');
    else all[2]?.classList.add('active');
  }
  sliders.forEach(s => s.addEventListener('input', updateBudget));
  if (sliders.length) updateBudget();

  // ============================================
  // CHECKLIST (with localStorage)
  // ============================================
  const STORAGE_KEY = 'paadi-checklist';
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const checks = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  checks.forEach(c => {
    const id = c.getAttribute('data-id');
    if (saved[id]) c.checked = true;
    c.addEventListener('change', () => {
      saved[id] = c.checked;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      updateChecklistProgress();
    });
  });

  function updateChecklistProgress() {
    document.querySelectorAll('.checklist-month').forEach(month => {
      const items = month.querySelectorAll('.checklist-item input[type="checkbox"]');
      const done = month.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
      const pct = items.length ? Math.round((done.length / items.length) * 100) : 0;
      const prog = month.querySelector('.checklist-progress');
      if (prog) prog.textContent = `${done.length}/${items.length} (${pct}%)`;
    });
  }
  updateChecklistProgress();

  // Reset button
  const resetBtn = document.querySelector('.checklist-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset all checklist progress?')) {
        localStorage.removeItem(STORAGE_KEY);
        checks.forEach(c => c.checked = false);
        updateChecklistProgress();
      }
    });
  }

  // ============================================
  // PRINT
  // ============================================
  const printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // ============================================
  // HERO STATS IMMEDIATE
  // ============================================
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero-stat-num').forEach((el, i) => {
      setTimeout(() => animateCounter(el), 300 + i * 200);
    });
  });

  // Initial active dot
  updateActiveDot();
})();
