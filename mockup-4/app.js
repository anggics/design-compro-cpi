/* Mockup 4 — Hexa Grid
   Putih, grid Swiss, bentuk heksagon dari logo CPI, foto asli kantor. */
(function () {
  const S = window.Site, C = S.C, t = S.t, ui = S.ui, icon = S.icon;

  /* Foto asli (assets/img/real). Nama lama di content.js dipetakan ke foto asli. */
  const REAL = {
    "partnership-handshake.jpg": "handshake.jpg", "team-boardroom.jpg": "meeting-table.jpg",
    "family-future.jpg": "signing.jpg", "family-joy.jpg": "meeting-room.jpg",
    "board-strategy.jpg": "meeting-room.jpg", "partnership-meeting.jpg": "handshake-group.jpg",
    "team-rooftop.jpg": "team-portrait.jpg", "board-meeting.jpg": "lounge.jpg"
  };
  const pic = (name) => S.img("real/" + (REAL[name] || name));
  /* Foto lanskap keluarga: titik tengah keluarga (0–1) agar muat utuh di heksagon */
  const PRODUCT_FIT = { zpp: 0.48, ziap: 0.43 };
  const PRODUCT_PIC = { zpp: "../family-sunset.jpg", ziap: "../family-joy.jpg", "marine-cargo": "../products/cargo.jpg", property: "../products/property.jpg" };

  const L = {
    heroNote: { id: "Distributor Resmi Produk Asuransi Zurich", en: "Authorized Distributor of Zurich Insurance" },
    facts: [
      { big: { id: "Des 2025", en: "Dec 2025" }, small: { id: "Berdiri di Jakarta Selatan", en: "Established in South Jakarta" } },
      { big: { id: "SCBD", en: "SCBD" }, small: { id: "Revenue Tower, Lantai 11", en: "Revenue Tower, 11th Floor" } },
      { count: 315, suffix: "%", small: { id: "RBC Zurich Topas Life", en: "Zurich Topas Life RBC" } },
      { count: 7, suffix: "+", small: { id: "Klien korporasi", en: "Corporate clients" } }
    ],
    aboutLabel: { id: "Tentang CPI", en: "About CPI" },
    aboutTitle: { id: "Mitra distribusi asuransi yang mengutamakan kejelasan dan kepercayaan.", en: "An insurance distribution partner built on clarity and trust." },
    prodLabel: { id: "Produk", en: "Products" },
    prodTitle: { id: "Solusi perlindungan untuk setiap kebutuhan", en: "Protection solutions for every need" },
    prodText: { id: "Dari perencanaan pendidikan keluarga hingga perlindungan pengangkutan barang dan aset usaha.", en: "From family education planning to cargo and business asset protection." },
    insLabel: { id: "Mitra Penanggung", en: "Insurer Partners" },
    insTitle: { id: "Didukung penanggung yang berizin & diawasi OJK", en: "Backed by OJK-licensed and supervised insurers" },
    insText: { id: "Kedua perusahaan penanggung telah memperoleh izin usaha dan berada di bawah pengawasan Otoritas Jasa Keuangan (OJK). CPI menjalankan peran distribusi, bukan penerbit polis atau penanggung risiko.", en: "Both insurers hold business licenses and are supervised by the Financial Services Authority (OJK). CPI acts as a distributor, not as a policy issuer or risk bearer." },
    leadLabel: { id: "Manajemen", en: "Management" },
    leadTitle: { id: "Jajaran Direksi", en: "Board of Directors" },
    leadText: { id: "Dipimpin oleh profesional yang berkomitmen pada pelayanan dan tata kelola yang baik.", en: "Led by professionals committed to service and good governance." },
    agendaLabel: { id: "Event & Berita", en: "Events & News" },
    nextEvents: { id: "Agenda & kegiatan", en: "Agenda & activities" },
    latestNews: { id: "Kabar terbaru dari CPI", en: "Latest from CPI" },
    clientsLabel: { id: "Klien & Mitra", en: "Clients & Partners" },
    clientsTitle: { id: "Dipercaya mitra & klien korporasi", en: "Trusted by partners & corporate clients" },
    aboutPage: { id: "Mengenal PT Cakra Proteksi Indonesia lebih dekat.", en: "Get to know PT Cakra Proteksi Indonesia." },
    structPage: { id: "Tata kelola dan kepemimpinan PT Cakra Proteksi Indonesia.", en: "Governance and leadership of PT Cakra Proteksi Indonesia." },
    prodPage: { id: "Produk asuransi Zurich yang didistribusikan oleh CPI untuk individu, keluarga, dan korporasi.", en: "Zurich insurance products distributed by CPI for individuals, families, and corporations." },
    evPage: { id: "Seminar edukasi, gathering mitra, dan kegiatan perusahaan.", en: "Educational seminars, partner gatherings, and company activities." },
    newsPage: { id: "Informasi perusahaan, kemitraan, dan wawasan seputar perlindungan.", en: "Company updates, partnerships, and protection insights." },
    profile: { id: "Profil Perusahaan", en: "Company Profile" },
    vision: { id: "Visi", en: "Vision" }, mission: { id: "Misi", en: "Mission" },
    how: { id: "Nilai-nilai kami", en: "Our values" },
    timeline: { id: "Perjalanan kami", en: "Our journey" },
    legal: { id: "Identitas & Legalitas", en: "Identity & Legal" },
    services: { id: "Layanan & Kemitraan", en: "Service & Partnership" },
    servicesTitle: { id: "Komitmen Layanan", en: "Service Commitment" },
    servicesText: { id: "Membangun hubungan kerja sama melalui pelayanan profesional, transparan, dan responsif.", en: "Building partnerships through professional, transparent, and responsive service." },
    org: { id: "Tata Kelola", en: "Governance" },
    orgTitle: { id: "Struktur organisasi yang ringkas dan akuntabel", en: "A lean and accountable organization" },
    orgText: { id: "CPI merupakan anak perusahaan PT Multi Integrasi Bisnis (MIB). Pengelolaan perusahaan dipimpin oleh Dewan Direksi.", en: "CPI is a subsidiary of PT Multi Integrasi Bisnis (MIB). The company is managed by its Board of Directors." },
    board: { id: "Dewan Direksi", en: "Board of Directors" },
    photoPending: { id: "Foto menyusul", en: "Photo to follow" },
    family: { id: "Individu & Keluarga", en: "Individual & Family" }, business: { id: "Korporasi & Komersial", en: "Corporate & Commercial" },
    familyTitle: { id: "Perlindungan Keluarga", en: "Family Protection" },
    familyText: { id: "Perencanaan pendidikan dan perlindungan jiwa melalui produk asuransi Zurich.", en: "Education planning and life protection through Zurich insurance products." },
    bizTitle: { id: "Perlindungan Bisnis", en: "Business Protection" },
    bizText: { id: "Solusi untuk pengangkutan barang, aset, dan properti usaha melalui portofolio Zurich.", en: "Solutions for cargo, assets, and business property through Zurich's portfolio." },
    featured: { id: "Sorotan", en: "Featured" },
    doc: { id: "Selesai", en: "Completed" },
    needs: [
      { id: "Perlindungan jiwa & pendidikan", en: "Life & education protection" },
      { id: "Asuransi pengangkutan barang", en: "Marine cargo insurance" },
      { id: "Asuransi aset & properti", en: "Property & asset insurance" },
      { id: "Lainnya", en: "Other" }
    ]
  };

  const MENU = [["home", "nav_home"], ["about", "nav_about"], ["structure", "nav_structure"], ["products", "nav_products"], ["events", "nav_events"], ["news", "nav_news"]];
  const href = (r) => "#/" + (r === "home" ? "" : r);
  const pname = (p) => t(p.name);
  const sortedNews = () => [...C.news].sort((a, b) => b.date.localeCompare(a.date));
  const newsKey = (n) => n.cat.en.toLowerCase();
  const mono = (s) => `<span class="mono">${s}</span>`;
  const btn = (to, label, cls, ic) => `<a class="btn ${cls || "btn--blue"}" href="${to}" data-magnetic=".2"><span>${label}</span>${icon(ic || "arrow-right")}</a>`;
  const arrow = (to, label) => `<a class="alink" href="${to}"><span>${label}</span>${icon("arrow-right")}</a>`;

  const hex = (src, cls, alt, delay) => `
    <figure class="hexph ${cls || ""}" data-reveal="hex"${delay ? ` data-delay="${delay}"` : ""}>
      <img src="${src}" alt="${alt || ""}" loading="lazy">
    </figure>`;

  const row = (label, body, cls) => `
    <section class="sec ${cls || ""}">
      <div class="wrap g12">
        <div class="side"><span class="side__lbl" data-reveal="fade">${label}</span></div>
        <div class="main">${body}</div>
      </div>
    </section>`;

  function pageHero(navKey, text, image, frameCls, alt) {
    return `
    <section class="phero">
      <div class="wrap">
        <nav class="crumb mono" aria-label="Breadcrumb" data-reveal="fade"><a href="#/">${ui("nav_home")}</a><span>/</span><span>${ui(navKey)}</span></nav>
        <h1 class="phero__title" data-split>${ui(navKey)}</h1>
        <span class="rule" data-reveal="rule"></span>
        <p class="phero__text" data-reveal data-delay="120">${text}</p>
      </div>
      ${image ? `<figure class="phero__img wrap" data-progress><div class="phero__frame ${frameCls || ""}"><img src="${S.img("real/" + image)}" alt="${alt || ""}" fetchpriority="high"></div></figure>` : ""}
    </section>`;
  }

  /* ---------- Komponen ---------- */
  const ledger = () => `
    <div class="ledger" role="list">
      ${C.products.map((p, i) => `
        <a class="ledger__row spot" role="listitem" href="#/products" data-reveal data-delay="${i * 70}">
          <span class="ledger__code mono">${p.code}</span>
          <span class="ledger__name"><b>${pname(p)}</b><small>${t(p.type)}</small></span>
          <span class="ledger__seg">${p.cat === "individual" ? t(L.family) : t(L.business)}</span>
          <span class="ledger__ins">${p.insurer}</span>
          <span class="ledger__go">${icon("arrow-up-right")}</span>
        </a>`).join("")}
    </div>`;

  const insurers = () => `
    <div class="ins">
      ${C.insurers.map((x, i) => `
        <article class="ins__card spot" data-reveal data-delay="${i * 120}">
          <header><h3>${x.name}</h3><span class="mono">${t(x.kind)}</span></header>
          <dl>
            <div><dt>${ui("solvency")}</dt><dd class="ins__big"><span data-count="${x.rbc}" data-suffix="%">0%</span></dd></div>
            <div><dt>${ui("total_assets")}</dt><dd>Rp${S.lang === "id" ? x.assets : x.assets_en} <small>${ui("million")}</small></dd></div>
          </dl>
          <p>${t(x.note)}</p>
        </article>`).join("")}
    </div>
    <p class="note" data-reveal>${t(C.insurer_note)}</p>`;

  const person = (m, i, big) => `
    <article class="person ${big ? "person--big" : ""}" data-reveal data-delay="${i * 90}">
      ${m.photo
        ? `<figure class="hexph person__ph" data-reveal="hex" data-delay="${i * 90}"><img src="${S.img(m.photo)}" alt="${m.name}" loading="lazy"></figure>`
        : `<div class="person__mono" aria-hidden="true"><span>${S.initials(m.name)}</span></div>`}
      <div class="person__txt">
        <span class="mono">${t(m.role)}</span>
        <h3>${m.name}</h3>
        <p>${t(m.bio)}</p>
      </div>
    </article>`;

  const eventRow = (e, i) => {
    const up = S.isUpcoming(e.date);
    return `
    <article class="erow" data-cat="${up ? "upcoming" : "past"}" data-reveal data-delay="${(i || 0) * 70}">
      <div class="erow__date"><b>${S.dayOf(e.date)}</b><span class="mono">${S.fmtDate(e.date, { month: "short", year: "numeric" })}</span></div>
      <div class="erow__main">
        <div class="erow__meta mono"><span class="${up ? "is-up" : ""}">${up ? ui("upcoming") : t(L.doc)}</span><span>${t(e.type)}</span></div>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
        <p class="erow__where">${icon("map-pin")}${t(e.place)} · ${e.time}</p>
      </div>
      <div class="erow__act">${up ? `<button type="button" class="btn btn--line btn--sm" data-scrollto="contact"><span>${ui("register")}</span>${icon("arrow-right")}</button>` : ""}</div>
    </article>`;
  };

  const newsCard = (n, i, big) => `
    <a href="#/news/${n.slug}" class="spot ncard ${big ? "ncard--big" : ""}" data-cat="${newsKey(n)}" data-reveal data-delay="${(i || 0) * 80}">
      <figure class="ncard__img"><img src="${pic(n.img)}" alt="" loading="lazy"></figure>
      <div class="ncard__body">
        <div class="ncard__meta mono"><span>${t(n.cat)}</span><span>${S.fmtDate(n.date)}</span></div>
        <h3>${t(n.title)}</h3>
        ${big ? `<p>${t(n.excerpt)}</p>` : ""}
        <span class="alink"><span>${ui("read_more")}</span>${icon("arrow-right")}</span>
      </div>
    </a>`;

  const seg = (target, items) => `
    <div class="seg" data-filter-group="${target}" role="group" data-reveal="fade">
      ${items.map(([k, label], i) => `<button type="button" class="${i ? "" : "is-active"}" data-filter="${k}" aria-pressed="${i ? "false" : "true"}">${label}</button>`).join("")}
    </div>`;

  /* ---------- Halaman ---------- */
  function home() {
    const ups = C.events.filter((e) => S.isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
    const [lead, ...dirs] = C.management;
    return `
    <section class="hero">
      <div class="hero__grid" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="wrap g12 hero__in">
        <div class="hero__copy">
          <span class="hero__note mono" data-reveal="fade"><i></i>${t(L.heroNote)}</span>
          <h1 class="display" data-split>${t(C.hero.title)}</h1>
          <p class="lead" data-reveal data-delay="120">${t(C.hero.text)}</p>
          <div class="hero__cta" data-reveal data-delay="220">
            ${btn("#/products", ui("explore_products"))}
            <button type="button" class="btn btn--line" data-scrollto="contact" data-magnetic=".2"><span>${ui("consult")}</span>${icon("arrow-right")}</button>
          </div>
        </div>
        <div class="hero__media" data-tilt>
          ${hex(S.img("real/team-office.jpg"), "hero__hex1", t({ id: "Tim di ruang kantor", en: "The team in the office" }))}
          ${hex(S.img("real/edward-desk.jpg"), "hero__hex2", t({ id: "Edward Hutahayan, Direktur Utama", en: "Edward Hutahayan, President Director" }), 250)}
          <svg class="hero__outline" data-parallax="0.12" viewBox="0 0 87 100" aria-hidden="true"><path d="M43.5 1 86 25.5v49L43.5 99 1 74.5v-49Z"/></svg>
        </div>
      </div>
      <div class="wrap">
        <dl class="facts">
          ${L.facts.map((f, i) => `<div data-reveal data-delay="${300 + i * 80}"><dt>${f.count != null ? `<span data-count="${f.count}" data-suffix="${f.suffix || ""}">0</span>` : t(f.big)}</dt><dd>${t(f.small)}</dd></div>`).join("")}
        </dl>
      </div>
    </section>

    <section class="strip" aria-label="${t(L.clientsLabel)}">
      ${marq(C.clients, false, 46)}
      ${marq(C.partners.concat(C.partners, C.partners), true, 34)}
    </section>

    ${row(t(L.aboutLabel), `
      <h2 class="h2" data-split>${t(L.aboutTitle)}</h2>
      <p class="statement" data-reveal>${t(C.about.lead)}</p>
      <div class="cols2">
        <p class="muted" data-reveal>${t(C.about.body)}</p>
        <div class="auth" data-reveal data-delay="100">
          <span class="mono">${S.fmtDate(C.about.authorization.date)}</span>
          <b>${t(C.about.authorization.title)}</b>
        </div>
      </div>
      <figure class="wide" data-reveal="clip"><img src="${S.img("real/meeting-table.jpg")}" alt="${t({ id: "Rapat di ruang direksi", en: "A meeting in the boardroom" })}" loading="lazy"></figure>
      ${arrow("#/about", ui("learn_more"))}
    `)}

    ${row(t(L.prodLabel), `
      <h2 class="h2" data-split>${t(L.prodTitle)}</h2>
      <p class="muted narrow" data-reveal>${t(L.prodText)}</p>
      ${ledger()}
      <p class="note" data-reveal>${t(C.product_note)}</p>
    `, "sec--paper")}

    ${row(t(L.insLabel), `
      <h2 class="h2" data-split>${t(L.insTitle)}</h2>
      <p class="muted narrow" data-reveal>${t(L.insText)}</p>
      ${insurers()}
    `, "sec--blue")}

    ${row(t(L.leadLabel), `
      <div class="h2row"><h2 class="h2" data-split>${t(L.leadTitle)}</h2>${arrow("#/structure", ui("nav_structure"))}</div>
      <p class="muted narrow lead-text" data-reveal>${t(L.leadText)}</p>
      <div class="people">
        ${person(lead, 0, true)}
        <div class="people__rest">${dirs.map((d, i) => person(d, i + 1)).join("")}</div>
      </div>
    `)}

    ${row(t(L.agendaLabel), `
      <div class="split2">
        <div>
          <div class="h3row"><h3 class="h3" data-reveal>${t(L.nextEvents)}</h3>${arrow("#/events", ui("see_all"))}</div>
          <div class="elist">${ups.map(eventRow).join("")}</div>
        </div>
        <div>
          <div class="h3row"><h3 class="h3" data-reveal>${t(L.latestNews)}</h3>${arrow("#/news", ui("see_all"))}</div>
          <div class="nstack">${sortedNews().slice(0, 2).map((n, i) => newsCard(n, i)).join("")}</div>
        </div>
      </div>
    `, "sec--paper")}

    ${row(t(L.clientsLabel), `
      <h2 class="h2" data-split>${t(L.clientsTitle)}</h2>
      ${clientGrid()}
    `)}`;
  }

  const marq = (list, rev, dur) => {
    const items = list.map((n) => `<span class="mq__item">${S.mark({ cls: "mq__mark" })}${n}</span>`).join("");
    return `<div class="marquee ${rev ? "marquee--rev" : ""}" style="--mq-dur:${dur}s;--mq-gap:56px"><div class="marquee__track">${items}</div><div class="marquee__track" aria-hidden="true">${items}</div></div>`;
  };

  const clientGrid = () => `
    <div class="cgrid">
      ${C.clients.map((c, i) => `<div class="cgrid__cell spot" data-reveal data-delay="${i * 50}"><span class="mono">${String(i + 1).padStart(2, "0")}</span><b>${c}</b></div>`).join("")}
    </div>
    <div class="pgrid">
      <span class="mono pgrid__lbl" data-reveal="fade">${ui("partners")}</span>
      ${C.partners.map((c, i) => `<div class="pgrid__cell" data-reveal data-delay="${i * 70}">${S.mark({ cls: "pgrid__mark" })}<b>${c}</b></div>`).join("")}
    </div>`;

  function about() {
    return `
    ${pageHero("nav_about", t(L.aboutPage), "lounge.jpg")}
    ${row(t(L.profile), `
      <p class="statement" data-reveal>${t(C.about.lead)}</p>
      <div class="cols2">
        <p class="muted" data-reveal>${t(C.about.body)}</p>
        <div class="auth" data-reveal data-delay="100">
          <span class="mono">${S.fmtDate(C.about.authorization.date)}</span>
          <b>${t(C.about.authorization.title)}</b>
          <small>${t(C.about.authorization.text)}</small>
        </div>
      </div>
    `)}
    ${row(t(L.vision) + " / " + t(L.mission), `
      <blockquote class="vision" data-reveal>${t(C.about.vision)}</blockquote>
      <ol class="mission">${C.about.mission.map((m, i) => `<li data-reveal data-delay="${i * 70}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${t(m)}</li>`).join("")}</ol>
    `, "sec--paper")}
    ${row(t(L.how), `
      <div class="values">${C.about.values.map((v, i) => `
        <article class="spot" data-reveal data-delay="${i * 80}"><span class="values__ic">${icon(v.icon)}</span><h3>${t(v.title)}</h3><p>${t(v.text)}</p></article>`).join("")}
      </div>
    `)}
    ${row(t(L.timeline), `
      <ol class="tline" data-progress>
        <span class="tline__bar" aria-hidden="true"><i></i></span>
        ${C.milestones.map((m, i) => `<li data-reveal data-delay="${i * 110}"><span class="tline__dot"></span><span class="mono">${S.fmtDate(m.date)}</span><b>${t(m.title)}</b><small>${t(m.text)}</small></li>`).join("")}
      </ol>
    `, "sec--blue")}
    ${row(t(L.legal), `
      <dl class="legal">${C.legal.map((l, i) => `<div data-reveal data-delay="${i * 50}"><dt>${t(l.label)}</dt><dd>${t(l.value)}</dd></div>`).join("")}</dl>
      <p class="note" data-reveal>${t(C.company.disclaimer)}</p>
    `)}
    ${row(t(L.services), `
      <h2 class="h2" data-split>${t(L.servicesTitle)}</h2>
      <p class="muted narrow" data-reveal>${t(L.servicesText)}</p>
      <div class="svc">${C.services.map((s, i) => `
        <article class="spot" data-reveal data-delay="${i * 70}"><span class="mono">${String(i + 1).padStart(2, "0")}</span><h3>${t(s.title)}</h3><p>${t(s.text)}</p></article>`).join("")}
      </div>
    `, "sec--paper")}
    ${row(t(L.clientsLabel), `<h2 class="h2" data-split>${t(L.clientsTitle)}</h2>${clientGrid()}`)}`;
  }

  function structure() {
    const [lead, ...dirs] = C.management;
    const node = (small, big, extra, d) => `<div class="onode ${extra || ""}" data-reveal data-delay="${d}"><span class="mono">${small}</span><b>${big}</b></div>`;
    return `
    ${pageHero("nav_structure", t(L.structPage), "team-office.jpg")}
    ${row(t(L.org), `
      <h2 class="h2" data-split>${t(L.orgTitle)}</h2>
      <p class="muted narrow org-text" data-reveal>${t(L.orgText)}</p>
      <div class="org">
        ${node(ui("parent_company"), C.company.parent, "onode--muted", 0)}
        <span class="org__v" data-reveal="rule" data-delay="150"></span>
        <div class="onode onode--co" data-reveal data-delay="250">${S.mark({ cls: "onode__mark" })}<div><span class="mono">${t({ id: "Perseroan", en: "Company" })}</span><b>${C.company.name}</b></div></div>
        <span class="org__v" data-reveal="rule" data-delay="400"></span>
        ${node(t(lead.role), lead.name, "onode--lead", 500)}
        <span class="org__fork" data-reveal="rule" data-delay="650"></span>
        <div class="org__row">${dirs.map((d, i) => node(t(d.role), d.name, "", 750 + i * 100)).join("")}</div>
      </div>
    `)}
    ${row(t(L.board), `
      <div class="people people--page">
        ${person(lead, 0, true)}
        <div class="people__rest">${dirs.map((d, i) => person(d, i + 1)).join("")}</div>
      </div>
    `, "sec--paper")}`;
  }

  function products() {
    const panel = (p, i) => `
      <article class="prod" id="p-${p.slug}">
        <div class="prod__head" data-reveal>
          <span class="prod__n mono">${String(i + 1).padStart(2, "0")}</span>
          <span class="prod__code mono">${p.code}</span>
        </div>
        <div class="prod__body">
          <h3 class="h2" data-split>${pname(p)}</h3>
          <span class="prod__type" data-reveal>${t(p.type)}</span>
          <p class="muted" data-reveal>${t(p.text)}</p>
          <ul class="checks">${p.benefits.map((b, k) => `<li data-reveal data-delay="${k * 60}">${icon("check")}${t(b)}</li>`).join("")}</ul>
          <div class="prod__foot" data-reveal>
            <span><span class="mono">${ui("issued_by")}</span><b>${p.insurer}</b></span>
            <button type="button" class="btn btn--blue btn--sm" data-scrollto="contact" data-magnetic=".2"><span>${ui("consult")}</span>${icon("arrow-right")}</button>
          </div>
        </div>
        ${PRODUCT_FIT[p.slug] != null
          ? `<figure class="hexph prod__hex is-fit" data-reveal="hex" data-delay="120" style="--src:url(${S.img("real/" + PRODUCT_PIC[p.slug])});--fx:${PRODUCT_FIT[p.slug]}"><img src="${S.img("real/" + PRODUCT_PIC[p.slug])}" alt="" loading="lazy"></figure>`
          : hex(S.img("real/" + PRODUCT_PIC[p.slug]), "prod__hex", "", 120)}
      </article>`;
    const group = (cat) => C.products.filter((p) => p.cat === cat);
    return `
    ${pageHero("nav_products", t(L.prodPage), "zurich-group.jpg", "phero__frame--group", t({ id: "Tim CPI di kantor Zurich", en: "The CPI team at the Zurich office" }))}
    ${row(t(L.family), `
      <h2 class="h2" data-split>${t(L.familyTitle)}</h2>
      <p class="muted narrow" data-reveal>${t(L.familyText)}</p>
      ${group("individual").map(panel).join("")}
    `)}
    ${row(t(L.business), `
      <h2 class="h2" data-split>${t(L.bizTitle)}</h2>
      <p class="muted narrow" data-reveal>${t(L.bizText)}</p>
      ${group("corporate").map((p, i) => panel(p, i + 2)).join("")}
      <p class="note" data-reveal>${t(C.product_note)}</p>
    `, "sec--paper")}
    ${row(t(L.insLabel), `<h2 class="h2" data-split>${t(L.insTitle)}</h2><p class="muted narrow" data-reveal>${t(L.insText)}</p>${insurers()}`, "sec--blue")}`;
  }

  function events() {
    const list = [...C.events].sort((a, b) => {
      const ua = S.isUpcoming(a.date), ub = S.isUpcoming(b.date);
      if (ua !== ub) return ua ? -1 : 1;
      return ua ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });
    return `
    ${pageHero("nav_events", t(L.evPage), "handshake-group.jpg")}
    ${row(t({ id: "Kalender", en: "Calendar" }), `
      <div class="h2row"><p class="note note--top">${ui("sample_note")}</p>${seg("#evList", [["all", ui("all")], ["upcoming", ui("upcoming")], ["past", ui("past")]])}</div>
      <div class="elist elist--page" id="evList">${list.map(eventRow).join("")}</div>
    `)}`;
  }

  function news() {
    const all = sortedNews();
    const cats = [...new Map(all.map((n) => [newsKey(n), n.cat])).entries()];
    return `
    ${pageHero("nav_news", t(L.newsPage), "")}
    ${row(t(L.featured), `<div class="nfeat">${newsCard(all[0], 0, true)}</div>`)}
    ${row(ui("nav_news"), `
      <div class="h2row"><p class="note note--top">${ui("sample_note")}</p>${seg("#newsList", [["all", ui("all")], ...cats.map(([k, c]) => [k, t(c)])])}</div>
      <div class="ngrid" id="newsList">${all.slice(1).map((n, i) => newsCard(n, i)).join("")}</div>
    `, "sec--paper")}`;
  }

  function newsDetail(slug) {
    const n = C.news.find((x) => x.slug === slug);
    if (!n) return news();
    const more = sortedNews().filter((x) => x.slug !== slug).slice(0, 3);
    return {
      title: t(n.title),
      html: `
      <article class="article">
        <div class="wrap article__head">
          <a href="#/news" class="alink alink--back" data-reveal="fade">${icon("arrow-left")}<span>${ui("back")}</span></a>
          <div class="ncard__meta mono" data-reveal="fade"><span>${t(n.cat)}</span><span>${S.fmtDate(n.date)}</span><span>${n.read} ${ui("min_read")}</span></div>
          <h1 class="phero__title phero__title--article" data-split>${t(n.title)}</h1>
          <p class="lead" data-reveal data-delay="120">${t(n.excerpt)}</p>
        </div>
        <figure class="wrap article__img" data-reveal="clip"><img src="${pic(n.img)}" alt="" fetchpriority="high"></figure>
        <div class="wrap article__body">${n.body.map((p) => `<p data-reveal>${t(p)}</p>`).join("")}</div>
      </article>
      ${row(ui("related_news"), `<div class="ngrid">${more.map((m, i) => newsCard(m, i)).join("")}</div>`, "sec--paper")}`
    };
  }

  /* ---------- Chrome ---------- */
  function chrome() {
    document.querySelector('[data-slot="logo"]').innerHTML = S.logo({ cls: "logo--hdr" });
    document.querySelector('[data-slot="pre"]').innerHTML = `<svg class="pre__hex" viewBox="0 0 87 100" aria-hidden="true"><path pathLength="1" d="M43.5 1 86 25.5v49L43.5 99 1 74.5v-49Z"/></svg>${S.logo({ cls: "logo--pre draw" })}`;
    document.querySelector(".logo--pre .mark").classList.add("draw");
    document.getElementById("footer").innerHTML = `
    <section class="contact" id="contact" tabindex="-1">
      <div class="wrap g12">
        <div class="side"><span class="side__lbl">${ui("contact_us")}</span></div>
        <div class="main contact__in">
          <div>
            <h2 class="h2">${ui("cta_title")}</h2>
            <p class="contact__text">${ui("cta_text")}</p>
            <dl class="contact__dl">
              <div><dt class="mono">${ui("office")}</dt><dd>${C.company.address.join("<br>")}</dd></div>
              <div><dt class="mono">${ui("email")}</dt><dd>${C.company.emails.map((e) => `<a href="mailto:${e}">${e}</a>`).join("<br>")}</dd></div>
              <div><dt class="mono">${ui("claims_hotline")}</dt><dd><a href="tel:1500456">${C.company.hotline}</a></dd></div>
            </dl>
          </div>
          <form class="form" data-mock novalidate>
            <div class="field"><label for="m4-name">${ui("form_name")}</label><input id="m4-name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="m4-email">${ui("form_email")}</label><input id="m4-email" name="email" type="email" autocomplete="email" required></div>
            <div class="field"><label for="m4-need">${ui("form_need")}</label><select id="m4-need" name="need">${L.needs.map((n) => `<option>${t(n)}</option>`).join("")}</select></div>
            <div class="field"><label for="m4-msg">${ui("form_msg")}</label><textarea id="m4-msg" name="msg" rows="4"></textarea></div>
            <button class="btn btn--orange btn--block" type="submit"><span>${ui("form_send")}</span>${icon("send")}</button>
          </form>
        </div>
      </div>
    </section>
    <div class="foot">
      <div class="wrap foot__top">
        ${S.logo({ cls: "logo--foot", blue: "#6FA8DC" })}
        <nav class="foot__nav">${MENU.map(([r, k]) => `<a href="${href(r)}">${ui(k)}</a>`).join("")}</nav>
      </div>
      <div class="wrap foot__legal">
        <p>${t(C.company.disclaimer)}</p>
        <p class="mono">© 2026 ${C.company.name}</p>
      </div>
    </div>`;
  }

  /* Garis aktif menu meluncur ke item aktif */
  function moveInk() {
    const nav = document.querySelector(".nav"), ink = document.querySelector(".nav__ink");
    const a = nav && nav.querySelector("a.is-active");
    if (!ink || !a || getComputedStyle(nav).position === "fixed") { if (ink) ink.style.opacity = 0; return; }
    ink.style.opacity = 1;
    ink.style.transform = `translateX(${a.offsetLeft}px)`;
    ink.style.width = a.offsetWidth + "px";
  }
  /* Header menyembunyikan diri saat menggulir turun, muncul saat naik */
  let lastY = 0;
  addEventListener("scroll", () => {
    const y = scrollY, hdr = document.querySelector("[data-hdr]");
    if (!hdr || document.body.classList.contains("menu-open")) return;
    hdr.classList.toggle("is-hidden", y > 140 && y > lastY);
    hdr.classList.toggle("is-solid", y > 10);
    lastY = y;
  }, { passive: true });
  addEventListener("resize", moveInk);
  if (document.fonts) document.fonts.ready.then(moveInk);

  S.start({
    transition: 560,
    chrome,
    routes: { home, about, structure, events, products, news, "news:detail": newsDetail },
    after: () => requestAnimationFrame(moveInk)
  });
})();
