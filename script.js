/* ============================================================
                Alessandro's Portfolio 
   * Author : Luis Paolo Alessandro Paiz Cabrera
   * COPYRIGHT    : Copyright (c) 2026 Luis Paolo Alessandro Paiz Cabrera
   ============================================================ */

"use strict";

const translations = {
  es: {
    "nav.inicio":        "Inicio",
    "nav.sobre":         "Sobre mí",
    "nav.skills":        "Habilidades",
    "nav.proyectos":     "Proyectos",
    "nav.certs":         "Certificaciones",
    "nav.contacto":      "Contacto",
    "hero.badge":        "Disponible para colaborar",
    "hero.titleStatic":  "Student",
    "hero.desc":         "Soy un desarrollador de 17 años apasionado por la programación y la creación de soluciones digitales. Me enfoco en construir aplicaciones y sitios web modernos, aprendiendo constantemente nuevas tecnologías para convertir ideas en proyectos reales.",
    "hero.cta1":         "Ver proyectos",
    "hero.cta2":         "Contactar",
    "hero.photoHint":    "Tu foto aquí",
    "stats.age":         "años",
    "stats.projects":    "proyectos",
    "stats.tech":        "tecnologías",
    "about.eyebrow":     "Sobre mí",
    "about.title":       "Quién soy",
    "about.p1":          "Actualmente me encuentro desarrollando proyectos personales mientras continúo fortaleciendo mis habilidades en desarrollo web y programación. Me interesa crear software útil, interfaces limpias y experiencias digitales que aporten valor a los usuarios.",
    "about.p2":          "Creo que la tecnología tiene el poder de transformar ideas en realidades concretas. Cada línea de código es una oportunidad para aprender algo nuevo y construir algo que importe.",
    "tag.selfTaught":    "Autodidacta",
    "tag.creative":      "Creativo",
    "tag.motivated":     "Motivado",
    "tag.teamwork":      "Trabajo en equipo",
    "info.age":          "Edad",
    "info.status":       "Estado",
    "info.statusVal":    "Aprendiendo",
    "info.lang":         "Idiomas",
    "skills.eyebrow":    "Habilidades",
    "skills.title":      "Tecnologías",
    "skills.tools":      "Herramientas",
    "level.intermediate":"Intermedio",
    "level.learning":    "Aprendiendo",
    "level.basic":       "Básico",
    "projects.eyebrow":  "Proyectos",
    "projects.title":    "Lo que construí",
    "proj.bot":          "Bot",
    "proj.botDesc":      "Bot personalizado para servidores privados con comandos personalizados, moderación y funciones automáticas.",
    "proj.portfolio":    "Portfolio",
    "proj.portfolioTitle":"Portafolio Personal",
    "proj.portfolioDesc":"Sitio web moderno y responsivo para mostrar habilidades y proyectos. Diseño minimalista con animaciones fluidas.",
    "proj.experimental": "Experimental",
    "proj.expTitle":     "Proyectos Experimentales",
    "proj.expDesc":      "Colección de pequeños proyectos para aprender y practicar programación. Desde scripts de automatización hasta mini-juegos.",
    "certs.eyebrow":     "Certificaciones",
    "certs.title":       "Formación",
    "cert.soon":         "Próximamente",
    "certs.addMore":     "Más certificaciones próximamente...",
    "contact.eyebrow":   "Contacto",
    "contact.title":     "Hablemos",
    "contact.subtitle":  "¿Tienes algún proyecto en mente o simplemente quieres conectar?",
    "contact.email":     "Correo electrónico",
    "footer.copy":       "Diseñado y construido con ♥ por Alessandro · 2025",
  },
  en: {
    "nav.inicio":        "Home",
    "nav.sobre":         "About",
    "nav.skills":        "Skills",
    "nav.proyectos":     "Projects",
    "nav.certs":         "Certifications",
    "nav.contacto":      "Contact",
    "hero.badge":        "Open to collaborate",
    "hero.titleStatic":  "Student",
    "hero.desc":         "I'm a 17-year-old developer passionate about programming and building digital solutions. I focus on creating modern web apps, constantly learning new technologies to turn ideas into real projects.",
    "hero.cta1":         "View projects",
    "hero.cta2":         "Get in touch",
    "hero.photoHint":    "Your photo here",
    "stats.age":         "years old",
    "stats.projects":    "projects",
    "stats.tech":        "technologies",
    "about.eyebrow":     "About me",
    "about.title":       "Who I am",
    "about.p1":          "I'm currently building personal projects while continuing to sharpen my skills in web development and programming. I'm interested in creating useful software, clean interfaces, and digital experiences that bring value to users.",
    "about.p2":          "I believe technology has the power to transform ideas into tangible realities. Every line of code is a chance to learn something new and build something that matters.",
    "tag.selfTaught":    "Self-taught",
    "tag.creative":      "Creative",
    "tag.motivated":     "Motivated",
    "tag.teamwork":      "Team player",
    "info.age":          "Age",
    "info.focus":        "Focus",
    "info.focusVal":     "Full Stack",
    "info.status":       "Status",
    "info.statusVal":    "Learning",
    "info.lang":         "Languages",
    "skills.eyebrow":    "Skills",
    "skills.title":      "Technologies",
    "skills.tools":      "Tools",
    "level.intermediate":"Intermediate",
    "level.learning":    "Learning",
    "level.basic":       "Basic",
    "projects.eyebrow":  "Projects",
    "projects.title":    "What I built",
    "proj.bot":          "Bot",
    "proj.botDesc":      "Custom bot for private servers with personalized commands, moderation, and automated features.",
    "proj.portfolio":    "Portfolio",
    "proj.portfolioTitle":"Personal Portfolio",
    "proj.portfolioDesc":"Modern, responsive website to showcase skills and projects. Minimalist design with fluid animations.",
    "proj.experimental": "Experimental",
    "proj.expTitle":     "Experimental Projects",
    "proj.expDesc":      "Collection of small projects to learn and practice programming — from automation scripts to mini-games.",
    "certs.eyebrow":     "Certifications",
    "certs.title":       "Education",
    "cert.soon":         "Coming soon",
    "certs.addMore":     "More certifications coming soon...",
    "contact.eyebrow":   "Contact",
    "contact.title":     "Let's talk",
    "contact.subtitle":  "Have a project in mind or just want to connect?",
    "contact.email":     "Email",
    "footer.copy":       "Designed & built with ♥ by Alessandro · 2025",
  }
};


const typewriterWords = {
  es: ["Developer", "Front-End", "Creador", "Programador"],
  en: ["Developer", "Front-End",    "Creator",  "Programmer"]
};


let currentLang = localStorage.getItem("portfolio-lang") || "es";


document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initCursorGlow();
  initScrollReveal();
  initTypewriter();
  initHamburger();
  initSmoothAnchors();
  initLangToggle();
  applyLang(currentLang, false);
});

/* ── NAVBAR ──────────────────────────────────────────────── */
function initNavbar() {
  const navbar  = document.getElementById("navbar");
  const links   = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
 
    navbar.classList.toggle("scrolled", window.scrollY > 20);

  
    const scrollY = window.scrollY + 120;
    let current = "";
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop) current = sec.id;
    });
    links.forEach(l => {
      const href = l.getAttribute("href").replace("#", "");
      l.classList.toggle("active", href === current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;
  let raf;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + "px";
    glow.style.top  = glowY + "px";
    raf = requestAnimationFrame(animate);
  }
  animate();


  document.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });
  document.addEventListener("mouseenter", () => { glow.style.opacity = "1"; });
}

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  els.forEach(el => observer.observe(el));
}


let typewriterTimer = null;

function initTypewriter() {
  startTypewriter(currentLang);
}

function startTypewriter(lang) {
  if (typewriterTimer) clearTimeout(typewriterTimer);
  const el = document.getElementById("typewriter");
  if (!el) return;

  const words = typewriterWords[lang] || typewriterWords.es;
  let wordIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIdx];

    if (!deleting) {
      
      el.textContent = word.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === word.length) {
        deleting = true;
        typewriterTimer = setTimeout(tick, 1800);
        return;
      }
      typewriterTimer = setTimeout(tick, 90);
    } else {
  
      el.textContent = word.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typewriterTimer = setTimeout(tick, 400);
        return;
      }
      typewriterTimer = setTimeout(tick, 50);
    }
  }
  tick();
}

function initHamburger() {
  const btn   = document.getElementById("hamburger");
  const menu  = document.getElementById("navLinks");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
  });


  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.classList.remove("open");
    });
  });


  document.addEventListener("click", e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
      btn.classList.remove("open");
    }
  });
}


function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 68;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ── LANGUAGE TOGGLE ─────────────────────────────────────── */
function initLangToggle() {
  const btn   = document.getElementById("langToggle");
  const label = document.getElementById("langLabel");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = currentLang === "es" ? "en" : "es";
    applyLang(next, true);
  });
}

function applyLang(lang, animate) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);

  const label = document.getElementById("langLabel");
  if (label) label.textContent = lang === "es" ? "EN" : "ES";

  document.documentElement.lang = lang;

  // Translate all [data-i18n] elements
  const t = translations[lang] || translations.es;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  startTypewriter(lang);

  if (animate) {
    document.body.style.opacity = "0.85";
    setTimeout(() => { document.body.style.opacity = "1"; }, 120);
    document.body.style.transition = "opacity 0.12s";
  }
}

document.querySelectorAll(".skill-card").forEach(card => {
  const glow = card.getAttribute("data-glow");
  if (glow) {
    card.style.setProperty("--glow-color", glow);
  }
});

function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);

  function update() {
    start = Math.min(start + step, target);
    el.textContent = Math.round(start);
    if (start < target) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsSection = document.querySelector(".hero-stats");
if (statsSection) {
  const statNums = statsSection.querySelectorAll(".stat-number");
  const targets  = [17, 3, 5];

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      statNums.forEach((el, i) => {
        const plus = el.querySelector(".stat-plus");
        const baseText = plus ? el.textContent.replace("+", "") : el.textContent;
        animateCounter(el, targets[i], 1200);
        if (plus) {
          el.appendChild(plus);
        }
      });
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(statsSection);
}


document.querySelectorAll(".contact-card").forEach(card => {
  const color = card.getAttribute("data-color");
  if (color) card.style.setProperty("--card-color", color);
});
