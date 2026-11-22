/* Mockup 1 — Corporate Clarity */
(function () {
  const S = window.Site, C = S.C, t = S.t, ui = S.ui, img = S.img, icon = S.icon;

  const L = {
    trust: [
      { id: "Produk diterbitkan entitas Zurich berizin & diawasi OJK", en: "Products issued by OJK-licensed Zurich entities" },
      { id: "Berkantor di SCBD, Jakarta Selatan", en: "Headquartered in SCBD, South Jakarta" },
      { id: "Melayani individu, keluarga & korporasi", en: "Serving individuals, families & corporations" }
    ],
    strip: { id: "Dipercaya mitra & klien korporasi", en: "Trusted by partners & corporate clients" },
    aboutTitle: { id: "Mitra distribusi asuransi yang mengutamakan kejelasan dan kepercayaan.", en: "An insurance distribution partner built on clarity and trust." },
    est: { id: "Berdiri", en: "Established" },
    prodTitle: { id: "Solusi perlindungan untuk setiap kebutuhan", en: "Protection solutions for every need" },
    prodText: { id: "Dari perencanaan pendidikan keluarga hingga perlindungan pengangkutan barang dan aset usaha.", en: "From family education planning to cargo and business asset protection." },
    statsTitle: { id: "Kekuatan mitra penanggung kami", en: "The strength of our insurer partners" },
    insTitle: { id: "Didukung penanggung yang berizin & diawasi OJK", en: "Backed by OJK-licensed and supervised insurers" },
    leadTitle: { id: "Jajaran Direksi", en: "Board of Directors" },
    leadText: { id: "Dipimpin oleh profesional yang berkomitmen pada pelayanan dan tata kelola yang baik.", en: "Led by professionals committed to service and good governance." },
    evTitle: { id: "Agenda & kegiatan", en: "Agenda & activities" },
    newsTitle: { id: "Kabar terbaru dari CPI", en: "Latest from CPI" },
    vision: { id: "Visi", en: "Vision" },
    mission: { id: "Misi", en: "Mission" },
    values: { id: "Nilai-nilai kami", en: "Our values" },
    journey: { id: "Perjalanan kami", en: "Our journey" },
    legal: { id: "Identitas & Legalitas", en: "Identity & Legal" },
    commit: { id: "Komitmen Layanan", en: "Service Commitment" },
    commitText: { id: "Membangun hubungan kerja sama melalui pelayanan profesional, transparan, dan responsif.", en: "Building partnerships through professional, transparent, and responsive service." },
    orgTitle: { id: "Struktur organisasi yang ringkas dan akuntabel", en: "A lean and accountable organization" },
    orgText: { id: "CPI merupakan anak perusahaan PT Multi Integrasi Bisnis (MIB). Pengelolaan perusahaan dipimpin oleh Dewan Direksi.", en: "CPI is a subsidiary of PT Multi Integrasi Bisnis (MIB). The company is managed by its Board of Directors." },
    evPage: { id: "Seminar edukasi, gathering mitra, dan kegiatan perusahaan.", en: "Educational seminars, partner gatherings, and company activities." },
    prodPage: { id: "Produk asuransi Zurich yang didistribusikan oleh CPI untuk individu, keluarga, dan korporasi.", en: "Zurich insurance products distributed by CPI for individuals, families, and corporations." },
    newsPage: { id: "Informasi perusahaan, kemitraan, dan wawasan seputar perlindungan.", en: "Company updates, partnerships, and protection insights." },
    aboutPage: { id: "Mengenal PT Cakra Proteksi Indonesia lebih dekat.", en: "Get to know PT Cakra Proteksi Indonesia." },
    structPage: { id: "Tata kelola dan kepemimpinan PT Cakra Proteksi Indonesia.", en: "Governance and leadership of PT Cakra Proteksi Indonesia." },
    doc: { id: "Dokumentasi", en: "Highlights" },
    featured: { id: "Sorotan", en: "Featured" },
    needs: [
      { id: "Perlindungan jiwa & pendidikan", en: "Life & education protection" },
      { id: "Asuransi pengangkutan barang", en: "Marine cargo insurance" },
      { id: "Asuransi aset & properti", en: "Property & asset insurance" },
      { id: "Lainnya", en: "Other" }
    ]
  };

  const btn = (href, label, cls, ic) =>
    `<a class="btn ${cls || "btn--primary"}" href="${href}" data-magnetic=".18"><span>${label}</span>${icon(ic || "arrow-right")}</a>`;
  const head = (eyebrow, title, text, center) => `
    <div class="shead ${center ? "shead--center" : ""}">
      ${eyebrow ? `<span class="eyebrow" data-reveal>${String(eyebrow).replace(/^\d+\s*\/\s*/, "")}</span>` : ""}
      <h2 class="h2" data-split>${title}</h2>
      ${text ? `<p class="muted" data-reveal data-delay="200">${text}</p>` : ""}
    </div>`;
  const pname = (p) => t(p.name);
  const sortedNews = () => [...C.news].sort((a, b) => b.date.localeCompare(a.date));
  const newsKey = (n) => n.cat.en.toLowerCase();

  function pageHero(navKey, text, image) {
    return `
    <section class="phero">
      <div class="phero__bg" data-parallax="0.12"><img src="${img(image)}" alt="" fetchpriority="high"></div>
      <div class="container phero__in">
        <nav class="crumb" aria-label="Breadcrumb" data-reveal><a href="#/">${ui("nav_home")}</a>${icon("chevron-right")}<span>${ui(navKey)}</span></nav>
        <h1 class="display display--sm" data-split>${ui(navKey)}</h1>
        <p class="phero__text" data-reveal data-delay="250">${text}</p>
      </div>
      <svg class="phero__hex" viewBox="0 0 100 115" aria-hidden="true"><path d="M50 2 98 30v55L50 113 2 85V30Z"/></svg>
    </section>`;
  }

  /* ---------- Cards ---------- */
  const productCard = (p, i) => `
    <a href="#/products" class="pcard spot" data-cat="${p.cat}" data-reveal data-delay="${i * 90}">
      <span class="pcard__icon">${icon(p.icon)}</span>
      <span class="pcard__code">${p.code}</span>
      <h3>${pname(p)}</h3>
      <p>${t(p.text)}</p>
      <span class="pcard__foot">${ui(p.cat)}<span class="pcard__go">${icon("arrow-up-right")}</span></span>
    </a>`;

  const eventCard = (e, i) => {
    const up = S.isUpcoming(e.date);
    return `
    <article class="ecard" data-cat="${up ? "upcoming" : "past"}" data-reveal data-delay="${i * 90}">
      <figure class="ecard__img"><img src="${img(e.img)}" alt="" loading="lazy"><span class="ecard__date"><b>${S.dayOf(e.date)}</b>${S.monOf(e.date)}</span></figure>
      <div class="ecard__body">
        <div class="ecard__meta"><span class="tag ${up ? "tag--orange" : ""}">${up ? ui("upcoming") : ui("past")}</span><span class="tag tag--line">${t(e.type)}</span></div>
        <h3>${t(e.title)}</h3>
        <ul class="ecard__info">
          <li>${icon("calendar")}${S.fmtDate(e.date)}</li>
          <li>${icon("clock")}${e.time}</li>
          <li>${icon("map-pin")}${t(e.place)}</li>
        </ul>
        <p>${t(e.text)}</p>
        ${up ? `<button type="button" class="link" data-scrollto="contact">${ui("register")}${icon("arrow-right")}</button>` : `<span class="link link--muted">${t(L.doc)}${icon("check")}</span>`}
      </div>
    </article>`;
  };

  const newsCard = (n, i, big) => `
    <a href="#/news/${n.slug}" class="ncard ${big ? "ncard--big" : ""}" data-cat="${newsKey(n)}" data-reveal data-delay="${(i || 0) * 90}">
      <figure class="ncard__img"><img src="${img(n.img)}" alt="" loading="lazy"></figure>
      <div class="ncard__body">
        <div class="ncard__meta"><span class="tag tag--blue">${t(n.cat)}</span><span>${S.fmtDate(n.date)}</span></div>
        <h3>${t(n.title)}</h3>
        ${big ? `<p>${t(n.excerpt)}</p>` : ""}
        <span class="link">${ui("read_more")}${icon("arrow-right")}</span>
      </div>
    </a>`;

  const leaderCard = (m, i) => `
    <article class="lcard ${m.lead ? "lcard--lead" : ""}" data-reveal data-delay="${i * 100}">
      <div class="lcard__av"><span class="hex">${S.avatar(m)}</span></div>
      <h3>${m.name}</h3>
      <span class="lcard__role">${t(m.role)}</span>
      <p>${t(m.bio)}</p>
    </article>`;

  const mono = (n) => n.replace(/\(.*?\)|\bPT\b|\bTbk\b/g, "").split(/[\s-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const chip = (n, kind) => `<span class="chip chip--${kind}"><span class="chip__mono">${mono(n)}</span><span class="chip__name">${n}</span></span>`;
  const row = (list, kind, label, rev, dur) => {
    let seq = [...list]; while (seq.length < 7) seq = seq.concat(list);
    const items = seq.map((n) => chip(n, kind)).join("");
    return `
      <div class="strip__row" data-reveal="fade" data-delay="${rev ? 260 : 120}">
        <span class="strip__tag strip__tag--${kind}">${label}</span>
        <div class="marquee ${rev ? "marquee--rev" : ""}" style="--mq-dur:${dur}s;--mq-gap:14px">
          <div class="marquee__track">${items}</div><div class="marquee__track" aria-hidden="true">${items}</div>
        </div>
      </div>`;
  };
  const marqueeNames = () => `
    <div class="container strip__in">
      <div class="strip__intro" data-reveal="left">
        <span class="strip__kicker">${t(L.strip)}</span>
        <p class="strip__count"><b data-count="${C.partners.length + C.clients.length}" data-suffix="+">0</b></p>
        <small>${t({ id: "Perusahaan mempercayakan perlindungannya bersama CPI", en: "Companies trust CPI with their protection" })}</small>
      </div>
      <div class="strip__rows">
        ${row(C.partners, "p", t({ id: "Mitra", en: "Partners" }), false, 30)}
        ${row(C.clients, "c", t({ id: "Klien", en: "Clients" }), true, 42)}
      </div>
    </div>`;

  /* ---------- Pages ---------- */
  function home() {
    const ups = C.events.filter((e) => S.isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date));
    const evs = [...ups, ...C.events.filter((e) => !S.isUpcoming(e.date))].slice(0, 3);
    return `
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <span class="pill" data-reveal><span class="pill__dot"></span>${t(C.hero.eyebrow)}</span>
          <h1 class="display" data-split>${t(C.hero.title)}</h1>
          <p class="lead" data-reveal data-delay="350">${t(C.hero.text)}</p>
          <div class="hero__cta" data-reveal data-delay="480">
            ${btn("#/products", ui("explore_products"))}
            <button type="button" class="btn btn--ghost" data-scrollto="contact"><span>${ui("consult")}</span>${icon("phone")}</button>
          </div>
          <ul class="hero__trust" data-stagger="90">
            ${L.trust.map((x) => `<li data-reveal data-delay="600">${icon("check")}${t(x)}</li>`).join("")}
          </ul>
        </div>
        <div class="hero__visual">
          <svg class="hero__hex" viewBox="0 0 100 115" aria-hidden="true"><path d="M50 2 98 30v55L50 113 2 85V30Z"/></svg>
          <div class="hero__dots" aria-hidden="true"></div>
          <div class="hero__frame" data-parallax="0.06">
            <figure class="hero__img" data-reveal="clip"><img src="${img("board-discussion.jpg")}" alt="${t({ id: "Direksi CPI dalam rapat di kantor", en: "CPI directors in a meeting at the office" })}" fetchpriority="high"></figure>
          </div>
          <div class="fcard fcard--1" data-reveal="scale" data-delay="800">
            <span class="fcard__ic">${icon("shield")}</span>
            <div><b>${t(C.about.authorization.title)}</b><small>${S.fmtDate(C.about.authorization.date)}</small></div>
          </div>
          <div class="fcard fcard--2" data-reveal="scale" data-delay="1000">
            <span class="fcard__num" data-count="317" data-suffix="%">0%</span>
            <small>${t(C.stats[1].label)}</small>
          </div>
        </div>
      </div>
    </section>

    <section class="strip" aria-label="${t(L.strip)}">
      ${marqueeNames()}
    </section>

    <section class="sec">
      <div class="container about-t">
        <div class="about-t__media">
          <figure class="about-t__a" data-reveal="clip"><img src="${img("team-boardroom.jpg")}" alt="" loading="lazy"></figure>
          <figure class="about-t__b" data-reveal="clip" data-delay="250"><img src="${img("real/zurich-group-sq.jpg")}" alt="${t({ id: "Tim CPI di kantor Zurich", en: "The CPI team at the Zurich office" })}" loading="lazy"></figure>
          <div class="about-t__badge" data-reveal="scale" data-delay="500"><small>${t(L.est)}</small><b>2025</b><small>Jakarta</small></div>
        </div>
        <div class="about-t__copy">
          ${head(t(C.about.eyebrow), t(L.aboutTitle))}
          <p class="lead lead--sm" data-reveal>${t(C.about.lead)}</p>
          <div class="values-mini" data-stagger="80">
            ${C.about.values.map((v) => `<div class="vmini" data-reveal><span>${icon(v.icon)}</span><div><b>${t(v.title)}</b><small>${t(v.text)}</small></div></div>`).join("")}
          </div>
          <div data-reveal>${btn("#/about", ui("learn_more"), "btn--outline")}</div>
        </div>
      </div>
    </section>

    <section class="sec sec--soft">
      <div class="container">
        <div class="shead-row">
          ${head(t({ id: "Produk", en: "Products" }), t(L.prodTitle), t(L.prodText))}
          <div class="seg" data-filter-group="#homeProducts" role="group" data-reveal>
            <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
            <button type="button" data-filter="individual" aria-pressed="false">${ui("individual")}</button>
            <button type="button" data-filter="corporate" aria-pressed="false">${ui("corporate")}</button>
          </div>
        </div>
        <div class="pgrid" id="homeProducts">${C.products.map(productCard).join("")}</div>
      </div>
    </section>

    <section class="band">
      <div class="container">
        <h2 class="band__title" data-reveal>${t(L.statsTitle)}</h2>
        <div class="band__grid" data-stagger="100">
          ${C.stats.map((s) => `<div class="band__item" data-reveal><span class="band__num" data-count="${s.value}" data-suffix="${s.suffix}">0</span><span class="band__lbl">${t(s.label)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="container">
        ${head(t({ id: "Mitra Penanggung", en: "Insurer Partners" }), t(L.insTitle), "", true)}
        <div class="ins-grid">${insurerCards()}</div>
        <p class="note" data-reveal>${t(C.insurer_note)}</p>
      </div>
    </section>

    <section class="sec sec--soft">
      <div class="container">
        <div class="shead-row">
          ${head(t({ id: "Manajemen", en: "Management" }), t(L.leadTitle), t(L.leadText))}
          <div data-reveal>${btn("#/structure", ui("nav_structure"), "btn--outline")}</div>
        </div>
        <div class="lgrid">${C.management.map(leaderCard).join("")}</div>
      </div>
    </section>

    <section class="sec">
      <div class="container">
        <div class="shead-row">
          ${head(t({ id: "Event", en: "Events" }), t(L.evTitle))}
          <div data-reveal>${btn("#/events", ui("see_all"), "btn--outline")}</div>
        </div>
        <div class="egrid">${evs.map(eventCard).join("")}</div>
      </div>
    </section>

    <section class="sec sec--soft">
      <div class="container">
        <div class="shead-row">
          ${head(t({ id: "Berita", en: "News" }), t(L.newsTitle))}
          <div data-reveal>${btn("#/news", ui("see_all"), "btn--outline")}</div>
        </div>
        <div class="ngrid">${sortedNews().slice(0, 3).map((n, i) => newsCard(n, i)).join("")}</div>
      </div>
    </section>`;
  }

  function insurerCards() {
    return C.insurers.map((x, i) => `
      <article class="ins spot" data-reveal data-delay="${i * 120}">
        <div class="ins__top"><span class="ins__ic">${icon(i ? "building" : "heart")}</span><div><h3>${x.name}</h3><span class="tag tag--line">${t(x.kind)}</span></div></div>
        <div class="ins__stats">
          <div><small>${ui("solvency")}</small><b data-count="${x.rbc}" data-suffix="%">0%</b></div>
          <div><small>${ui("total_assets")}</small><b>Rp${S.lang === "id" ? x.assets : x.assets_en} <em>${ui("million")}</em></b></div>
        </div>
        <p>${t(x.note)}</p>
      </article>`).join("");
  }

  function about() {
    return `
    ${pageHero("nav_about", t(L.aboutPage), "team-boardroom.jpg")}
    <section class="sec">
      <div class="container split">
        <div>
          ${head(t(C.about.eyebrow), t(C.about.title))}
          <p class="lead lead--sm" data-reveal>${t(C.about.lead)}</p>
          <p class="muted" data-reveal data-delay="100">${t(C.about.body)}</p>
          <div class="auth" data-reveal data-delay="200">
            <span class="auth__ic">${icon("award")}</span>
            <div><small>${S.fmtDate(C.about.authorization.date)}</small><b>${t(C.about.authorization.title)}</b><span>${t(C.about.authorization.text)}</span></div>
          </div>
        </div>
        <figure class="split__img" data-reveal="clip"><img src="${img("board-meeting.jpg")}" alt="" loading="lazy"></figure>
      </div>
    </section>

    <section class="sec sec--soft">
      <div class="container vm">
        <article class="vm__vision" data-reveal="left">
          <span class="eyebrow">${t(L.vision)}</span>
          ${icon("quote", "vm__q")}
          <p>${t(C.about.vision)}</p>
        </article>
        <article class="vm__mission" data-reveal="right">
          <span class="eyebrow">${t(L.mission)}</span>
          <ol>${C.about.mission.map((m, i) => `<li><span>0${i + 1}</span>${t(m)}</li>`).join("")}</ol>
        </article>
      </div>
    </section>

    <section class="sec">
      <div class="container">
        ${head("", t(L.values), "", true)}
        <div class="vgrid" data-stagger="90">
          ${C.about.values.map((v) => `<div class="vcard spot" data-reveal><span class="vcard__ic">${icon(v.icon)}</span><h3>${t(v.title)}</h3><p>${t(v.text)}</p></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec sec--navy">
      <div class="container">
        ${head("", t(L.journey), "", true)}
        <div class="tl" data-progress>
          <div class="tl__line"><span></span></div>
          ${C.milestones.map((m, i) => `
            <div class="tl__item" data-reveal data-delay="${i * 140}">
              <span class="tl__dot"></span>
              <small>${S.fmtDate(m.date)}</small>
              <h3>${t(m.title)}</h3>
              <p>${t(m.text)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="container split split--top">
        <div>
          ${head("", t(L.legal))}
          <p class="muted" data-reveal>${t(C.company.disclaimer)}</p>
        </div>
        <dl class="legal" data-stagger="70">
          ${C.legal.map((l) => `<div data-reveal><dt>${t(l.label)}</dt><dd>${t(l.value)}</dd></div>`).join("")}
        </dl>
      </div>
    </section>

    <section class="sec sec--soft">
      <div class="container">
        ${head(t({ id: "Layanan & Kemitraan", en: "Service & Partnership" }), t(L.commit), t(L.commitText), true)}
        <div class="svc-grid" data-stagger="90">
          ${C.services.map((s, i) => `<article class="svc spot" data-reveal><span class="svc__n">0${i + 1}</span><span class="svc__ic">${icon(s.icon)}</span><h3>${t(s.title)}</h3><p>${t(s.text)}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="container cp">
        <div>
          ${head("", ui("clients"))}
          <ul class="cp__list" data-stagger="60">${C.clients.map((c, i) => `<li data-reveal><span>${String(i + 1).padStart(2, "0")}</span>${c}</li>`).join("")}</ul>
        </div>
        <div>
          ${head("", ui("partners"))}
          <ul class="cp__partners" data-stagger="90">${C.partners.map((c, i) => `<li data-reveal><small>${t({ id: "Mitra", en: "Partner" })} 0${i + 1}</small><b>${c}</b></li>`).join("")}</ul>
        </div>
      </div>
    </section>`;
  }

  function structure() {
    const [lead, ...dirs] = C.management;
    return `
    ${pageHero("nav_structure", t(L.structPage), "real/team-office.jpg")}
    <section class="sec">
      <div class="container">
        ${head(t({ id: "Tata Kelola", en: "Governance" }), t(L.orgTitle), t(L.orgText), true)}
        <div class="org">
          <div class="org__node org__node--parent" data-reveal>
            <span class="org__ic">${icon("landmark")}</span>
            <div><small>${ui("parent_company")}</small><b>${C.company.parent}</b></div>
          </div>
          <span class="org__v" data-reveal="fade" data-delay="200"></span>
          <div class="org__node org__node--company" data-reveal data-delay="300">
            ${S.mark({ cls: "org__mark" })}
            <div><small>${t({ id: "Perusahaan", en: "Company" })}</small><b>${C.company.name}</b></div>
          </div>
          <span class="org__v" data-reveal="fade" data-delay="450"></span>
          <div class="org__node org__node--lead" data-reveal data-delay="550">
            <span class="org__av hex">${S.avatar(lead)}</span>
            <div><small>${t(lead.role)}</small><b>${lead.name}</b></div>
          </div>
          <div class="org__branch" data-reveal="fade" data-delay="700"><span></span></div>
          <div class="org__row">
            ${dirs.map((d, i) => `
              <div class="org__node" data-reveal data-delay="${800 + i * 120}">
                <span class="org__av hex">${S.avatar(d)}</span>
                <div><small>${t(d.role)}</small><b>${d.name}</b></div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="sec sec--soft">
      <div class="container">
        ${head(ui("board"), t(L.leadTitle), t(L.leadText))}
        <figure class="wide-img" data-reveal="clip"><img src="${img("real/team-office.jpg")}" alt="" loading="lazy"></figure>
        <div class="lgrid lgrid--page">${C.management.map(leaderCard).join("")}</div>
      </div>
    </section>`;
  }

  function events() {
    const list = [...C.events].sort((a, b) => {
      const ua = S.isUpcoming(a.date), ub = S.isUpcoming(b.date);
      if (ua !== ub) return ua ? -1 : 1;
      return ua ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });
    return `
    ${pageHero("nav_events", t(L.evPage), "team-rooftop.jpg")}
    <section class="sec">
      <div class="container">
        <div class="shead-row">
          ${head(t({ id: "Kalender", en: "Calendar" }), t(L.evTitle))}
          <div class="seg" data-filter-group="#evList" role="group" data-reveal>
            <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
            <button type="button" data-filter="upcoming" aria-pressed="false">${ui("upcoming")}</button>
            <button type="button" data-filter="past" aria-pressed="false">${ui("past")}</button>
          </div>
        </div>
        <div class="egrid egrid--page" id="evList">${list.map(eventCard).join("")}</div>
      </div>
    </section>`;
  }

  function products() {
    const block = (cat, i0) => C.products.filter((p) => p.cat === cat).map((p, i) => `
      <article class="prow ${(i + i0) % 2 ? "prow--rev" : ""}" id="p-${p.slug}">
        <figure class="prow__img" data-reveal="clip"><img src="${img(p.img)}" alt="" loading="lazy"><span class="prow__code">${p.code}</span></figure>
        <div class="prow__copy">
          <span class="eyebrow" data-reveal>${ui(p.cat)}</span>
          <h3 class="h2" data-split>${pname(p)}</h3>
          <span class="prow__type" data-reveal>${t(p.type)}</span>
          <p class="muted" data-reveal data-delay="100">${t(p.text)}</p>
          <ul class="checks" data-stagger="80">${p.benefits.map((b) => `<li data-reveal>${icon("check")}${t(b)}</li>`).join("")}</ul>
          <div class="prow__ins" data-reveal><small>${ui("issued_by")}</small><b>${p.insurer}</b></div>
          <div data-reveal><button type="button" class="btn btn--primary" data-scrollto="contact" data-magnetic=".18"><span>${ui("consult")}</span>${icon("arrow-right")}</button></div>
        </div>
      </article>`).join("");
    return `
    ${pageHero("nav_products", t(L.prodPage), "family-sunset.jpg")}
    <section class="sec">
      <div class="container">
        ${head(t({ id: "Solusi Individu & Keluarga", en: "Individual & Family Solutions" }), t({ id: "Perlindungan Keluarga", en: "Family Protection" }), t({ id: "Perencanaan pendidikan dan perlindungan jiwa melalui produk asuransi Zurich.", en: "Education planning and life protection through Zurich insurance products." }))}
        ${block("individual", 0)}
      </div>
    </section>
    <section class="sec sec--soft">
      <div class="container">
        ${head(t({ id: "Solusi Korporasi & Komersial", en: "Corporate & Commercial Solutions" }), t({ id: "Perlindungan Bisnis", en: "Business Protection" }), t({ id: "Solusi untuk pengangkutan barang, aset, dan properti usaha melalui portofolio Zurich.", en: "Solutions for cargo, assets, and business property through Zurich's portfolio." }))}
        ${block("corporate", 0)}
        <p class="note" data-reveal>${t(C.product_note)}</p>
      </div>
    </section>
    <section class="sec">
      <div class="container">
        ${head(t({ id: "Mitra Penanggung", en: "Insurer Partners" }), t(L.insTitle), "", true)}
        <div class="ins-grid">${insurerCards()}</div>
        <p class="note" data-reveal>${t(C.insurer_note)}</p>
      </div>
    </section>`;
  }

  function news() {
    const all = sortedNews();
    const cats = [...new Map(all.map((n) => [newsKey(n), n.cat])).entries()];
    return `
    ${pageHero("nav_news", t(L.newsPage), "partnership-meeting.jpg")}
    <section class="sec">
      <div class="container">
        <span class="eyebrow" data-reveal>${t(L.featured)}</span>
        <div class="nfeat">${newsCard(all[0], 0, true)}</div>
        <div class="shead-row shead-row--mt">
          ${head("", t(L.newsTitle))}
          <div class="seg" data-filter-group="#newsList" role="group" data-reveal>
            <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
            ${cats.map(([k, c]) => `<button type="button" data-filter="${k}" aria-pressed="false">${t(c)}</button>`).join("")}
          </div>
        </div>
        <div class="ngrid" id="newsList">${all.slice(1).map((n, i) => newsCard(n, i)).join("")}</div>
      </div>
    </section>`;
  }

  function newsDetail(slug) {
    const n = C.news.find((x) => x.slug === slug);
    if (!n) return news();
    const more = sortedNews().filter((x) => x.slug !== slug).slice(0, 3);
    return {
      title: t(n.title),
      html: `
      <article class="article">
        <header class="article__head container container--narrow">
          <a href="#/news" class="link link--back" data-reveal>${icon("arrow-left")}${ui("back")}</a>
          <div class="ncard__meta" data-reveal><span class="tag tag--blue">${t(n.cat)}</span><span>${S.fmtDate(n.date)}</span><span>· ${n.read} ${ui("min_read")}</span></div>
          <h1 class="display display--sm" data-split>${t(n.title)}</h1>
          <p class="lead lead--sm" data-reveal data-delay="250">${t(n.excerpt)}</p>
        </header>
        <figure class="article__img container" data-reveal="clip"><img src="${img(n.img)}" alt="" fetchpriority="high"></figure>
        <div class="article__body container container--narrow">
          ${n.body.map((p) => `<p data-reveal>${t(p)}</p>`).join("")}
        </div>
      </article>
      <section class="sec sec--soft">
        <div class="container">
          ${head("", ui("related_news"))}
          <div class="ngrid">${more.map((m, i) => newsCard(m, i)).join("")}</div>
        </div>
      </section>`
    };
  }

  /* ---------- Chrome (logo, top bar, footer) ---------- */
  function chrome() {
    document.querySelector('[data-slot="logo"]').innerHTML = S.logo({ cls: "logo--hdr" });
    document.querySelector('[data-slot="topinfo"]').innerHTML = `
      <a href="mailto:${C.company.emails[0]}">${icon("mail")}${C.company.emails[0]}</a>
      <span>${icon("phone")}${ui("claims_hotline")}: ${C.company.hotline}</span>
      <span class="hide-md">${icon("map-pin")}Revenue Tower, SCBD Jakarta</span>`;
    const f = document.getElementById("footer");
    f.innerHTML = `
    <section class="contact" id="contact" tabindex="-1">
      <div class="container contact__in">
        <div class="contact__copy">
          <span class="eyebrow eyebrow--light" data-reveal>${ui("contact_us")}</span>
          <h2 class="h2" data-split>${ui("cta_title")}</h2>
          <p data-reveal>${ui("cta_text")}</p>
          <ul class="contact__list" data-stagger="80">
            <li data-reveal><span>${icon("map-pin")}</span><div><small>${ui("office")}</small>${C.company.address.join("<br>")}</div></li>
            <li data-reveal><span>${icon("mail")}</span><div><small>${ui("email")}</small>${C.company.emails.map((e) => `<a href="mailto:${e}">${e}</a>`).join("<br>")}</div></li>
            <li data-reveal><span>${icon("phone")}</span><div><small>${ui("claims_hotline")}</small><a href="tel:1500456">${C.company.hotline}</a></div></li>
          </ul>
        </div>
        <form class="form" data-mock data-reveal="scale" novalidate>
          <div class="field"><label for="f-name">${ui("form_name")}</label><input id="f-name" name="name" autocomplete="name" required></div>
          <div class="field"><label for="f-email">${ui("form_email")}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="f-need">${ui("form_need")}</label><select id="f-need" name="need">${L.needs.map((n) => `<option>${t(n)}</option>`).join("")}</select></div>
          <div class="field"><label for="f-msg">${ui("form_msg")}</label><textarea id="f-msg" name="msg" rows="4"></textarea></div>
          <button class="btn btn--primary btn--block" type="submit"><span>${ui("form_send")}</span>${icon("send")}</button>
        </form>
      </div>
    </section>
    <div class="foot">
      <div class="container foot__grid">
        <div class="foot__brand">
          ${S.logo({ cls: "logo--foot", blue: "#5AA3E6" })}
          <p>${t(C.company.tagline)}</p>
        </div>
        <div><h4>${ui("quick_links")}</h4><ul>${S.NAV.map(([r, k]) => `<li><a href="#/${r === "home" ? "" : r}">${ui(k)}</a></li>`).join("")}</ul></div>
        <div><h4>${ui("nav_products")}</h4><ul>${C.products.map((p) => `<li><a href="#/products">${pname(p)}</a></li>`).join("")}</ul></div>
        <div><h4>${ui("office")}</h4><p>${C.company.address.join("<br>")}</p></div>
      </div>
      <div class="container foot__legal">
        <p>${t(C.company.disclaimer)}</p>
        <p>© 2026 ${C.company.name}. ${ui("footer_rights")}</p>
      </div>
    </div>`;
  }

  S.start({
    transition: 380,
    chrome,
    routes: { home, about, structure, events, products, news, "news:detail": newsDetail }
  });
})();
