/* =========================================================
   CPI Site Core — router, i18n, icons, motion system
   Vanilla JS, tanpa dependensi. Bekerja di Vercel, hosting
   biasa (cPanel/Apache/Nginx), bahkan dibuka langsung dari file.
   ========================================================= */
(function () {
  "use strict";
  const C = window.CPI_CONTENT;
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) root.classList.add("reduce-motion");

  /* ---------------- Language ---------------- */
  const LS_KEY = "cpi-lang";
  function readLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "id" || q === "en") return q;
    try { const s = localStorage.getItem(LS_KEY); if (s === "id" || s === "en") return s; } catch (e) {}
    return (navigator.language || "id").toLowerCase().startsWith("id") ? "id" : "id";
  }
  let lang = readLang();

  const t = (x) => {
    if (x == null) return "";
    if (typeof x === "string" || typeof x === "number") return String(x);
    return x[lang] != null ? x[lang] : x.id;
  };
  const ui = (k) => t(C.ui[k]) || k;

  /* ---------------- Helpers ---------------- */
  const base = () => document.body.dataset.base || "../";
  const img = (name) => base() + "assets/img/" + name;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmtDate = (iso, opt) =>
    new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-GB", opt || { day: "numeric", month: "long", year: "numeric" })
      .format(new Date(iso + "T00:00:00"));
  const dayOf = (iso) => new Date(iso + "T00:00:00").getDate().toString().padStart(2, "0");
  const monOf = (iso) => fmtDate(iso, { month: "short" }).replace(".", "");
  const isUpcoming = (iso) => new Date(iso + "T23:59:59") >= new Date();
  const avatar = (m, wrap) => m.photo
    ? `<img class="av-img" src="${img(m.photo)}" alt="${esc(m.name)}" loading="lazy">`
    : (wrap ? `<span>${initials(m.name)}</span>` : initials(m.name));
  const initials = (n) => n.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  /* ---------------- Icons (Lucide-style, stroke) ---------------- */
  const P = {
    "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    plus: '<path d="M5 12h14M12 5v14"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
    graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    ship: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    headset: '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
    "phone-app": '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
    trending: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>'
  };
  const icon = (n, cls) =>
    `<svg class="ic ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.shield}</svg>`;

  /* ---------------- Logo (vector of the supplied logo) ---------------- */
  function mark(opt) {
    opt = opt || {};
    const o = opt.orange || "#FF7A00", b = opt.blue || "#054D8A";
    return `<svg class="mark ${opt.cls || ""}" viewBox="455 112 770 482" fill="none" stroke-width="70" stroke-linejoin="miter" aria-hidden="true">
      <path class="mk-o" pathLength="1" stroke="${o}" d="M793.6 229.3 L665 155 L493.5 254 L493.5 452 L665 551 L836.5 452"/>
      <path class="mk-b" pathLength="1" stroke="${b}" d="M843.5 591 L843.5 254 L1015 155 L1186.5 254 L1186.5 452 L1015 551 L925 499"/></svg>`;
  }
  function logo(opt) {
    opt = opt || {};
    return `<span class="logo ${opt.cls || ""}">${mark(opt)}<span class="logo-text"><b>PT CAKRA PROTEKSI</b><small>INDONESIA</small></span></span>`;
  }

  /* ---------------- Motion system ---------------- */
  let io;
  function splitText(scope) {
    scope.querySelectorAll("[data-split]:not([data-split-done])").forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.setAttribute("aria-label", el.textContent.trim());
      el.innerHTML = words
        .map((w, i) => `<span class="sw" aria-hidden="true"><span style="--i:${i}">${esc(w)}</span></span>`)
        .join(" ");
      el.setAttribute("data-split-done", "");
      if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "split");
    });
  }
  function countUp(el) {
    const end = parseFloat(el.dataset.count);
    const dur = reduce ? 0 : parseInt(el.dataset.dur || 1600, 10);
    const suf = el.dataset.suffix || "";
    const loc = lang === "id" ? "id-ID" : "en-US";
    const t0 = performance.now();
    const step = (now) => {
      const p = dur ? Math.min(1, (now - t0) / dur) : 1;
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(end * e).toLocaleString(loc) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function observe(scope) {
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target;
            el.classList.add("is-in");
            if (el.dataset.count != null) countUp(el);
            io.unobserve(el);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
      );
    }
    scope.querySelectorAll("[data-reveal],[data-count]").forEach((el) => {
      if (el.dataset.delay) el.style.setProperty("--d", el.dataset.delay + "ms");
      if (reduce) { el.classList.add("is-in"); if (el.dataset.count != null) countUp(el); return; }
      io.observe(el);
    });
    // Pengaman: elemen yang sudah terlihat di layar pertama tetap muncul
    // walau IntersectionObserver tertunda (tab di latar belakang, pratinjau, dsb.)
    setTimeout(() => {
      scope.querySelectorAll("[data-reveal]:not(.is-in),[data-count]:not(.is-in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight && (r.width || r.height)) {
          el.classList.add("is-in");
          if (el.dataset.count != null) countUp(el);
          io.unobserve(el);
        }
      });
    }, 60);
    // stagger children
    scope.querySelectorAll("[data-stagger]").forEach((wrap) => {
      const gap = parseInt(wrap.dataset.stagger || 90, 10);
      [...wrap.children].forEach((c, i) => c.style.setProperty("--d", i * gap + "ms"));
    });
  }

  // Parallax + scroll progress (single rAF loop)
  let parallaxEls = [], progressEls = [];
  function collectParallax() {
    parallaxEls = [...document.querySelectorAll("[data-parallax]")];
    progressEls = [...document.querySelectorAll("[data-progress]")];
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY, vh = window.innerHeight;
      document.body.classList.toggle("is-scrolled", y > 12);
      const h = document.documentElement.scrollHeight - vh;
      root.style.setProperty("--scroll", h > 0 ? (y / h).toFixed(4) : 0);
      progressEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -50 || r.top > vh + 50) return;
        const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
        el.style.setProperty("--p", reduce ? 1 : p.toFixed(4));
      });
      if (!reduce) {
        parallaxEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          const off = (r.top + r.height / 2 - vh / 2) * -speed;
          el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
        });
      }
      ticking = false;
    });
  }

  // Pointer effects: spotlight cards + magnetic buttons
  function pointerFx(scope) {
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    scope.querySelectorAll(".spot").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", e.clientX - r.left + "px");
        el.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
    scope.querySelectorAll("[data-magnetic]").forEach((el) => {
      const s = parseFloat(el.dataset.magnetic) || 0.25;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px, ${(e.clientY - r.top - r.height / 2) * s}px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
    scope.querySelectorAll("[data-tilt]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  // Filters: <div data-filter-group> buttons[data-filter] + items[data-cat]
  function filters(scope) {
    scope.querySelectorAll("[data-filter-group]").forEach((g) => {
      const target = scope.querySelector(g.dataset.filterGroup);
      if (!target) return;
      g.querySelectorAll("[data-filter]").forEach((btn) => {
        btn.addEventListener("click", () => {
          g.querySelectorAll("[data-filter]").forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
          btn.classList.add("is-active"); btn.setAttribute("aria-pressed", "true");
          const f = btn.dataset.filter;
          [...target.children].forEach((item, i) => {
            const show = f === "all" || (item.dataset.cat || "").split(" ").includes(f);
            if (show) {
              item.hidden = false;
              item.classList.remove("is-in");
              item.style.setProperty("--d", i * 60 + "ms");
              requestAnimationFrame(() => requestAnimationFrame(() => item.classList.add("is-in")));
            } else item.hidden = true;
          });
        });
      });
    });
  }

  // Mock forms
  function forms(scope) {
    scope.querySelectorAll("form[data-mock]").forEach((f) => {
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!f.reportValidity()) return;
        toast(ui("form_ok"));
        f.reset();
      });
    });
  }
  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.innerHTML = icon("check") + "<span>" + esc(msg) + "</span>";
    el.classList.add("is-show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("is-show"), 3800);
  }

  function enhance(scope) {
    splitText(scope);
    observe(scope);
    pointerFx(scope);
    filters(scope);
    forms(scope);
    collectParallax();
    onScroll();
  }

  /* ---------------- Static i18n ---------------- */
  function applyStatic() {
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", ui(el.dataset.i18nAria)));
    document.querySelectorAll("[data-lang]").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  /* ---------------- Router ---------------- */
  const NAV = [
    ["home", "nav_home"], ["about", "nav_about"], ["structure", "nav_structure"],
    ["events", "nav_events"], ["products", "nav_products"], ["news", "nav_news"]
  ];
  let cfg = { routes: {}, transition: 420 };
  let first = true, busy = false;

  function parse() {
    const h = location.hash.replace(/^#\/?/, "");
    const [name, param] = h.split("/");
    return { name: name || "home", param: param ? decodeURIComponent(param) : null };
  }
  function renderRoute(r) {
    const app = document.getElementById("app");
    let fn = cfg.routes[r.name];
    if (r.param && cfg.routes[r.name + ":detail"]) fn = cfg.routes[r.name + ":detail"];
    if (!fn) { r = { name: "home" }; fn = cfg.routes.home; }
    const out = fn(r.param) || "";
    app.innerHTML = typeof out === "string" ? out : out.html;
    const navKey = (NAV.find((n) => n[0] === r.name) || NAV[0])[1];
    const pageTitle = (typeof out === "object" && out.title) || ui(navKey);
    document.title = (r.name === "home" ? "" : pageTitle + " — ") + "PT Cakra Proteksi Indonesia";
    document.querySelectorAll("[data-route]").forEach((a) => {
      const on = a.dataset.route === r.name;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.body.dataset.page = r.name;
    enhance(app);
    if (cfg.after) cfg.after(r);
  }
  async function go(soft) {
    if (busy) return;
    busy = true;
    const r = parse();
    const app = document.getElementById("app");
    document.body.classList.remove("menu-open");
    if (first || soft || reduce) {
      renderRoute(r);
      if (!soft) window.scrollTo(0, 0);
      first = false; busy = false;
      return;
    }
    document.body.classList.add("is-leaving");
    await wait(cfg.transition);
    window.scrollTo(0, 0);
    renderRoute(r);
    document.body.classList.remove("is-leaving");
    document.body.classList.add("is-entering");
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove("is-entering")));
    busy = false;
  }

  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem(LS_KEY, l); } catch (e) {}
    applyStatic();
    renderChrome();
    go(true);
  }

  function renderChrome() {
    if (cfg.chrome) cfg.chrome();
    document.querySelectorAll("[data-chrome]").forEach(enhance);
  }

  function start(options) {
    cfg = Object.assign(cfg, options);
    applyStatic();
    renderChrome();
    document.addEventListener("click", (e) => {
      const lb = e.target.closest("[data-lang]");
      if (lb) { e.preventDefault(); setLang(lb.dataset.lang); return; }
      const st = e.target.closest("[data-scrollto]");
      if (st) {
        e.preventDefault();
        document.body.classList.remove("menu-open");
        const el = document.getElementById(st.dataset.scrollto);
        if (el) { el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); el.focus && el.focus({ preventScroll: true }); }
        return;
      }
      const mt = e.target.closest("[data-menu-toggle]");
      if (mt) {
        const open = document.body.classList.toggle("menu-open");
        mt.setAttribute("aria-expanded", open ? "true" : "false");
      }
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.body.classList.remove("menu-open"); });
    window.addEventListener("hashchange", () => go());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    go();
    requestAnimationFrame(() => document.body.classList.add("is-ready"));
  }

  window.Site = {
    C, t, ui, img, esc, icon, mark, logo, fmtDate, dayOf, monOf, isUpcoming, initials, avatar, NAV, start, toast,
    get lang() { return lang; }
  };
})();
