// =============================================
// VERONICA BACCARIN - main.js
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "p1",
      name: "L'Abete - Logo Design",
      cat: "illustration",
      catLabel: "Logo Design",
      desc: "Progetto di rebranding per un'antica ebanisteria artigianale. Il logo reinterpreta l'abete - simbolo del mestiere e del nome - attraverso linee geometriche che evocano i rami dell'albero e le venature del legno. Una palette di avorio, antracite e oro brunito restituisce l'eleganza senza tempo di una tradizione artigianale raccontata con un linguaggio visivo contemporaneo.",
      img: "mockup_1_insegna_labete-optimized.jpg",
      images: ["mockup_1_insegna_labete-optimized.jpg", "mockup_2_stationery_labete-optimized.jpg"]
    },
    {
      id: "p2",
      name: "4Zeus - Branding",
      cat: "brand",
      catLabel: "Branding",
      desc: "Progetto di rebranding per 4Zeus, hub digitale padovano attivo nella trasformazione digitale delle imprese tra formazione, sviluppo software e marketing strategico. Il logo gioca sul doppio rimando al nome: il fulmine - attributo di Zeus - diventa simbolo di energia, velocita e innovazione, racchiuso in un'icona circolare che trasmette solidita e centralita digitale. La palette bianco, blu navy e giallo elettrico amplifica il carattere dinamico e tech del brand, declinata con coerenza sulle business card.",
      img: "free-modern-business-card-optimized.jpg",
      images: ["free-modern-business-card-optimized.jpg", "free-concrete-wall-plant-office-mockup-optimized.jpg"]
    },
    {
      id: "p3",
      name: "Bar Vecia Padova - Logo Design",
      cat: "illustration",
      catLabel: "Logo Design",
      desc: "Progetto di logo design per il Bar Vecia Padova, locale nel cuore del centro storico a due passi dal Duomo, punto di riferimento per lo spritz e i cicchetti della tradizione veneta. Il simbolo e uno skyline di Padova tracciato a mano libera in stile line art, che richiama i profili delle architetture storiche della citta con un segno spontaneo e autentico. Il lettering corsivo manoscritto sotto l'illustrazione rafforza l'anima locale e informale del locale.",
      img: "free-wooden-storefront-optimized.jpg",
      images: ["free-wooden-storefront-optimized.jpg", "beer-glass-mockup-optimized.jpg"]
    },
    {
      id: "p4",
      name: "Natura Viva - Editoriale",
      cat: "editorial",
      catLabel: "Editoriale",
      desc: "Layout editoriale e visual pack per linea succhi con tono fresco e leggibile.",
      img: "mockup_succhi_1_supermercato-optimized.jpg",
      images: ["mockup_succhi_1_supermercato-optimized.jpg"]
    },
    {
      id: "p5",
      name: "Eden Studio - Logo Design",
      cat: "illustration",
      catLabel: "Logo Design",
      desc: "Progetto di logo design per Eden Studio, studio di architettura con una visione incentrata sull'integrazione tra spazio costruito e natura. Il simbolo fonde in un'unica icona una foglia disegnata con rigore geometrico e la sagoma di un arco architettonico, rendendo visibile il dialogo tra verde e progetto.",
      img: "chatgpt-image-24-feb-2026-09_58_09-optimized.jpg",
      images: ["chatgpt-image-24-feb-2026-09_58_09-optimized.jpg", "chatgpt-image-24-feb-2026-15_07_23-optimized.jpg"]
    },
    {
      id: "p6",
      name: "L'Abete - Manuale del brand",
      cat: "brand",
      catLabel: "Branding",
      desc: "Costruzione guida brand: uso logo, cromie, gerarchie e regole applicative.",
      img: "chatgpt-image-24-feb-2026-09_50_11-optimized.jpg",
      images: ["chatgpt-image-24-feb-2026-09_50_11-optimized.jpg"]
    },
    {
      id: "p7",
      name: "Morpha - Logo Design",
      cat: "illustration",
      catLabel: "Logo Design",
      desc: "Progetto di logo design per Morpha, brand di auricolari dal design ispirato alla mantide religiosa. Il simbolo reinterpreta la lettera M come testa stilizzata di una mantide, con un linguaggio visivo aggressivo e immediatamente riconoscibile.",
      img: "morpha-logo-design-optimized.jpg",
      images: ["morpha-logo-design-optimized.jpg", "chatgpt-image-24-feb-2026-15_14_06-optimized.jpg"]
    },
    {
      id: "p8",
      name: "Morpha Mantis Brochure - Editoriale",
      cat: "editorial",
      catLabel: "Editoriale",
      desc: "Progetto di brochure tri-fold per il lancio in edizione limitata degli auricolari Mantis di Morpha, DROP 2026. La struttura editoriale bilancia sezioni manifesto, scheda tecnica e call to action.",
      img: "morpha-mantis-brochure-editoriale-optimized.jpg",
      images: ["morpha-mantis-brochure-editoriale-optimized.jpg"]
    }
  ];

  const getById = (id) => document.getElementById(id);

  const cursor = getById("cursor");
  const cursorFollower = getById("cursorFollower");
  const navbar = getById("navbar");
  const hamburger = getById("hamburger");
  const navLinks = getById("navLinks");
  const grid = getById("portfolioGrid");
  const projectCount = getById("projectCount");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const lightbox = getById("lightbox");
  const lightboxClose = getById("lightboxClose");
  const lightboxPrev = getById("lightboxPrev");
  const lightboxNext = getById("lightboxNext");
  const lightboxImage = getById("lightboxImage");
  const lightboxCounter = getById("lightboxCounter");
  const lightboxCategory = getById("lightboxCategory");
  const lightboxTitle = getById("lightboxTitle");
  const lightboxDesc = getById("lightboxDesc");
  const termsModal = getById("termsModal");
  const cookiePolicyModal = getById("cookiePolicyModal");
  const privacyBanner = getById("privacyBanner");
  const cookieBanner = getById("cookieBanner");
  const contactForm = getById("contactForm");
  const submitButton = getById("submitButton");
  const submitLabel = getById("submitLabel");
  const formSuccess = getById("formSuccess");

  let activeFilter = "all";
  let lightboxProject = null;
  let lightboxImageIndex = 0;
  let revealObserver = null;

  const POLICY_KEYS = {
    privacySeen: "vb_privacy_seen_v2",
    cookieChoice: "vb_cookie_choice_v2"
  };

  // ----- CURSOR -----
  setupCursor();

  function setupCursor() {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }
    if (!cursor || !cursorFollower) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.14;
      followerY += (mouseY - followerY) * 0.14;
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    bindCursorTargets(document);
  }

  function bindCursorTargets(root) {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }
    const targets = root.querySelectorAll("a,button,.portfolio-card,input,textarea,select");
    targets.forEach((target) => {
      if (target.dataset.cursorBound === "1") {
        return;
      }
      target.dataset.cursorBound = "1";
      target.addEventListener("mouseenter", () => {
        document.body.classList.add("is-hovering-interactive");
      });
      target.addEventListener("mouseleave", () => {
        document.body.classList.remove("is-hovering-interactive");
      });
    });
  }

  // ----- NAVBAR -----
  window.addEventListener(
    "scroll",
    () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
      updateActiveNav();
    },
    { passive: true }
  );

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // ----- PORTFOLIO -----
  renderCards(activeFilter);
  bindFilterButtons();

  function bindFilterButtons() {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter || "all";
        renderCards(activeFilter);
      });
    });
  }

  function renderCards(filter) {
    if (!grid) {
      return;
    }
    const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.cat === filter);
    grid.innerHTML = "";

    if (!filteredProjects.length) {
      grid.innerHTML = '<div class="portfolio-empty">Nessun progetto disponibile per questo filtro.</div>';
      if (projectCount) {
        projectCount.textContent = "0 progetti";
      }
      return;
    }

    filteredProjects.forEach((project) => {
      const imageCount = getProjectImages(project).length;
      const galleryBadge =
        imageCount > 1
          ? `<div class="card-gallery-badge" aria-label="${imageCount} immagini disponibili"><span class="card-gallery-icon" aria-hidden="true"></span><span>${imageCount} immagini</span></div>`
          : "";
      const card = document.createElement("article");
      card.className = "portfolio-card reveal-scroll";
      card.dataset.category = project.cat;
      card.innerHTML = `
        <div class="card-bg">
          <img src="${project.img}" alt="${project.name}" loading="lazy" decoding="async" />
        </div>
        ${galleryBadge}
        <div class="card-overlay">
          <div class="card-category">${project.catLabel}</div>
          <div class="card-title">${project.name}</div>
        </div>
        <div class="card-arrow">&#8594;</div>
      `;
      card.addEventListener("click", () => {
        openLightbox(project.id, 0);
      });
      grid.appendChild(card);
    });

    if (projectCount) {
      const label = filteredProjects.length === 1 ? "progetto" : "progetti";
      projectCount.textContent = `${filteredProjects.length} ${label} mostrati`;
    }

    bindCursorTargets(grid);
    observeReveal();
  }

  function getProjectImages(project) {
    if (!project) {
      return [];
    }
    if (Array.isArray(project.images) && project.images.length) {
      return project.images.filter(Boolean);
    }
    if (project.img) {
      return [project.img];
    }
    return [];
  }

  // ----- LIGHTBOX -----
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => {
      stepLightbox(-1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", () => {
      stepLightbox(1);
    });
  }

  function openLightbox(projectId, startIndex) {
    const project = projects.find((entry) => entry.id === projectId);
    if (!project || !lightbox) {
      return;
    }
    lightboxProject = project;
    lightboxImageIndex = startIndex || 0;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    updateLightbox();
    syncBodyLock();
  }

  function closeLightbox() {
    if (!lightbox) {
      return;
    }
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxProject = null;
    syncBodyLock();
  }

  function stepLightbox(direction) {
    if (!lightboxProject) {
      return;
    }
    const images = getProjectImages(lightboxProject);
    if (images.length <= 1) {
      return;
    }
    lightboxImageIndex = (lightboxImageIndex + direction + images.length) % images.length;
    updateLightbox();
  }

  function updateLightbox() {
    if (!lightboxProject) {
      return;
    }
    const images = getProjectImages(lightboxProject);
    if (!images.length) {
      return;
    }
    lightboxImageIndex = Math.max(0, Math.min(lightboxImageIndex, images.length - 1));

    if (lightboxImage) {
      lightboxImage.src = images[lightboxImageIndex];
      lightboxImage.alt = `${lightboxProject.name} - immagine ${lightboxImageIndex + 1}`;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${lightboxImageIndex + 1}/${images.length}`;
    }
    if (lightboxCategory) {
      lightboxCategory.textContent = lightboxProject.catLabel;
    }
    if (lightboxTitle) {
      lightboxTitle.textContent = lightboxProject.name;
    }
    if (lightboxDesc) {
      lightboxDesc.textContent = lightboxProject.desc;
    }
    if (lightboxPrev) {
      lightboxPrev.style.display = images.length > 1 ? "flex" : "none";
    }
    if (lightboxNext) {
      lightboxNext.style.display = images.length > 1 ? "flex" : "none";
    }
  }

  // ----- REVEAL ANIMATIONS -----
  document.querySelectorAll(".service-card, .stat-item, .contact-grid, .site-footer").forEach((element) => {
    element.classList.add("reveal-scroll");
  });
  observeReveal();

  function observeReveal() {
    const targets = document.querySelectorAll(".reveal-scroll:not(.visible)");
    if (!targets.length) {
      return;
    }
    if (revealObserver) {
      revealObserver.disconnect();
    }
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((target) => revealObserver.observe(target));
  }

  // ----- COUNTERS -----
  const counters = document.querySelectorAll(".stat-number");
  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const target = Number(entry.target.dataset.target || "0");
          animateCounter(entry.target, target);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));
  }

  function animateCounter(element, target) {
    if (!target) {
      element.textContent = "0";
      return;
    }
    const duration = 1600;
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      element.textContent = String(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = String(target);
      }
    };
    requestAnimationFrame(step);
  }

  // ----- CONTACT FORM -----
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const service = String(formData.get("service") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!name || !email || !message) {
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
      }
      if (submitLabel) {
        submitLabel.textContent = "Invio in corso...";
      }

      const mailSubject = encodeURIComponent(`Richiesta progetto - ${service || "Nuovo progetto"}`);
      const mailBody = encodeURIComponent(
        [
          `Nome: ${name}`,
          `Email: ${email}`,
          `Servizio: ${service || "Non specificato"}`,
          "",
          message
        ].join("\n")
      );
      const mailtoUrl = `mailto:baccavero@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
        if (formSuccess) {
          formSuccess.style.display = "block";
        }
        if (submitButton) {
          submitButton.disabled = false;
        }
        if (submitLabel) {
          submitLabel.textContent = "Invia messaggio";
        }
        contactForm.reset();
        setTimeout(() => {
          if (formSuccess) {
            formSuccess.style.display = "none";
          }
        }, 4500);
      }, 400);
    });
  }

  // ----- ACTIVE NAV -----
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
  updateActiveNav();

  function updateActiveNav() {
    if (!sections.length || !navAnchors.length) {
      return;
    }
    let currentId = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) {
        currentId = section.id;
      }
    });
    navAnchors.forEach((anchor) => {
      const href = anchor.getAttribute("href") || "";
      anchor.classList.toggle("active", href === `#${currentId}`);
    });
  }

  // ----- POLICY BANNERS / LEGAL -----
  function policyGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      try {
        return sessionStorage.getItem(key);
      } catch (fallbackError) {
        return null;
      }
    }
  }

  function policySet(key, value) {
    try {
      localStorage.setItem(key, value);
      return;
    } catch (error) {
      try {
        sessionStorage.setItem(key, value);
      } catch (fallbackError) {
        // no-op
      }
    }
  }

  function syncPolicyBannerState() {
    const hasOpen =
      Boolean(privacyBanner && privacyBanner.classList.contains("open")) ||
      Boolean(cookieBanner && cookieBanner.classList.contains("open"));
    document.body.classList.toggle("has-policy-banner", hasOpen);
  }

  function openPrivacyBanner() {
    if (privacyBanner) {
      privacyBanner.classList.add("open");
    }
    syncPolicyBannerState();
  }

  function closePrivacyBanner() {
    if (privacyBanner) {
      privacyBanner.classList.remove("open");
    }
    syncPolicyBannerState();
  }

  function acceptPrivacyBanner() {
    policySet(POLICY_KEYS.privacySeen, "1");
    closePrivacyBanner();
    maybeOpenCookieBanner();
  }

  function openCookieBanner() {
    if (cookieBanner) {
      cookieBanner.classList.add("open");
    }
    syncPolicyBannerState();
  }

  function closeCookieBanner() {
    if (cookieBanner) {
      cookieBanner.classList.remove("open");
    }
    syncPolicyBannerState();
  }

  function acceptAllCookies() {
    policySet(POLICY_KEYS.cookieChoice, "all");
    closeCookieBanner();
  }

  function acceptEssentialCookies() {
    policySet(POLICY_KEYS.cookieChoice, "essential");
    closeCookieBanner();
  }

  function maybeOpenCookieBanner() {
    if (policyGet(POLICY_KEYS.cookieChoice)) {
      return;
    }
    openCookieBanner();
  }

  function initPolicyBanners() {
    const seenPrivacy = policyGet(POLICY_KEYS.privacySeen) === "1";
    if (!seenPrivacy) {
      openPrivacyBanner();
      return;
    }
    maybeOpenCookieBanner();
    syncPolicyBannerState();
  }

  function openTermsModal(event) {
    if (event) {
      event.preventDefault();
    }
    if (!termsModal) {
      return;
    }
    termsModal.classList.add("open");
    syncBodyLock();
  }

  function closeTermsModal() {
    if (!termsModal) {
      return;
    }
    termsModal.classList.remove("open");
    syncBodyLock();
  }

  function openCookiePolicyModal(event) {
    if (event) {
      event.preventDefault();
    }
    if (!cookiePolicyModal) {
      return;
    }
    cookiePolicyModal.classList.add("open");
    syncBodyLock();
  }

  function closeCookiePolicyModal() {
    if (!cookiePolicyModal) {
      return;
    }
    cookiePolicyModal.classList.remove("open");
    syncBodyLock();
  }

  function syncBodyLock() {
    const hasOpenOverlay =
      Boolean(lightbox && lightbox.classList.contains("active")) ||
      Boolean(termsModal && termsModal.classList.contains("open")) ||
      Boolean(cookiePolicyModal && cookiePolicyModal.classList.contains("open"));
    document.body.style.overflow = hasOpenOverlay ? "hidden" : "";
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (lightbox && lightbox.classList.contains("active")) {
        closeLightbox();
      }
      if (termsModal && termsModal.classList.contains("open")) {
        closeTermsModal();
      }
      if (cookiePolicyModal && cookiePolicyModal.classList.contains("open")) {
        closeCookiePolicyModal();
      }
    }
    if (event.key === "ArrowLeft" && lightbox && lightbox.classList.contains("active")) {
      stepLightbox(-1);
    }
    if (event.key === "ArrowRight" && lightbox && lightbox.classList.contains("active")) {
      stepLightbox(1);
    }
  });

  // Expose handlers for inline onclick attributes.
  window.openTermsModal = openTermsModal;
  window.closeTermsModal = closeTermsModal;
  window.openCookiePolicyModal = openCookiePolicyModal;
  window.closeCookiePolicyModal = closeCookiePolicyModal;
  window.acceptPrivacyBanner = acceptPrivacyBanner;
  window.closePrivacyBanner = closePrivacyBanner;
  window.acceptAllCookies = acceptAllCookies;
  window.acceptEssentialCookies = acceptEssentialCookies;

  initPolicyBanners();
});
