/* Mockup 5 — Private Office
   Navigasi sidebar, gading + walnut + kuningan, serif Cormorant. */
(function () {
  const S = window.Site, C = S.C, t = S.t, ui = S.ui, icon = S.icon;

  const REAL = {
    "partnership-handshake.jpg": "handshake.jpg", "team-boardroom.jpg": "meeting-table.jpg",
    "family-future.jpg": "signing.jpg", "family-joy.jpg": "meeting-room.jpg",
    "board-strategy.jpg": "meeting-room.jpg", "partnership-meeting.jpg": "handshake-group.jpg",
    "team-rooftop.jpg": "team-portrait.jpg", "board-meeting.jpg": "lounge.jpg"
  };
  const pic = (name) => S.img("real/" + (REAL[name] || name));
  const real = (name) => S.img("real/" + name);
  const PRODUCT_PIC = { zpp: "../family-sunset.jpg", ziap: "../family-joy.jpg", "marine-cargo": "../products/cargo.jpg", property: "../products/property.jpg" };

  const L = {
    place: { id: "Revenue Tower, SCBD · Jakarta", en: "Revenue Tower, SCBD · Jakarta" },
    since: { id: "Distributor resmi Zurich sejak", en: "Authorized Zurich distributor since" },
    facts: [
      { n: "2025", l: { id: "Tahun berdiri", en: "Year founded" } },
      { c: 4, l: { id: "Produk Zurich", en: "Zurich products" } },
      { c: 2, l: { id: "Entitas penanggung", en: "Insuring entities" } },
      { c: 7, s: "+", l: { id: "Klien korporasi", en: "Corporate clients" } }
    ],
    aboutK: { id: "Tentang CPI", en: "About CPI" },
    prodK: { id: "Produk", en: "Products" },
    prodT: { id: "Solusi perlindungan untuk setiap kebutuhan", en: "Protection solutions for every need" },
    prodText: { id: "Dari perencanaan pendidikan keluarga hingga perlindungan pengangkutan barang dan aset usaha.", en: "From family education planning to cargo and business asset protection." },
    insK: { id: "Mitra Penanggung", en: "Insurer Partners" },
    insT: { id: "Didukung penanggung yang berizin & diawasi OJK", en: "Backed by OJK-licensed and supervised insurers" },
    leadK: { id: "Manajemen", en: "Management" },
    leadT: { id: "Jajaran Direksi", en: "Board of Directors" },
    leadText: { id: "Dipimpin oleh profesional yang berkomitmen pada pelayanan dan tata kelola yang baik.", en: "Led by professionals committed to service and good governance." },
    agendaK: { id: "Agenda & kegiatan", en: "Agenda & activities" },
    newsK: { id: "Kabar terbaru dari CPI", en: "Latest from CPI" },
    clientsK: { id: "Klien & Mitra", en: "Clients & Partners" },
    clientsT: { id: "Dipercaya mitra & klien korporasi", en: "Trusted by partners & corporate clients" },
    aboutH: { id: "Mengenal PT Cakra Proteksi Indonesia lebih dekat.", en: "Get to know PT Cakra Proteksi Indonesia." },
    structH: { id: "Tata kelola dan kepemimpinan PT Cakra Proteksi Indonesia.", en: "Governance and leadership of PT Cakra Proteksi Indonesia." },
    prodH: { id: "Produk asuransi Zurich yang didistribusikan oleh CPI untuk individu, keluarga, dan korporasi.", en: "Zurich insurance products distributed by CPI for individuals, families, and corporations." },
    evH: { id: "Seminar edukasi, gathering mitra, dan kegiatan perusahaan.", en: "Educational seminars, partner gatherings, and company activities." },
    newsH: { id: "Informasi perusahaan, kemitraan, dan wawasan seputar perlindungan.", en: "Company updates, partnerships, and protection insights." },
    vision: { id: "Visi", en: "Vision" }, mission: { id: "Misi", en: "Mission" },
    how: { id: "Nilai-nilai kami", en: "Our values" },
    journey: { id: "Perjalanan kami", en: "Our journey" },
    legal: { id: "Identitas & Legalitas", en: "Identity & Legal" },
    servicesK: { id: "Layanan & Kemitraan", en: "Service & Partnership" },
    services: { id: "Komitmen Layanan", en: "Service Commitment" },
    servicesText: { id: "Membangun hubungan kerja sama melalui pelayanan profesional, transparan, dan responsif.", en: "Building partnerships through professional, transparent, and responsive service." },
    org: { id: "Tata Kelola", en: "Governance" },
    orgTitle: { id: "Struktur organisasi yang ringkas dan akuntabel", en: "A lean and accountable organization" },
    orgText: { id: "CPI merupakan anak perusahaan PT Multi Integrasi Bisnis (MIB). Pengelolaan perusahaan dipimpin oleh Dewan Direksi.", en: "CPI is a subsidiary of PT Multi Integrasi Bisnis (MIB). The company is managed by its Board of Directors." },
    family: { id: "Individu & Keluarga", en: "Individual & Family" }, business: { id: "Korporasi & Komersial", en: "Corporate & Commercial" },
    familyT: { id: "Perlindungan Keluarga", en: "Family Protection" },
    familyText: { id: "Perencanaan pendidikan dan perlindungan jiwa melalui produk asuransi Zurich.", en: "Education planning and life protection through Zurich insurance products." },
    bizT: { id: "Perlindungan Bisnis", en: "Business Protection" },
    bizText: { id: "Solusi untuk pengangkutan barang, aset, dan properti usaha melalui portofolio Zurich.", en: "Solutions for cargo, assets, and business property through Zurich's portfolio." },
    doc: { id: "Selesai", en: "Completed" },
    featured: { id: "Sorotan", en: "Featured" },
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
  const kicker = (txt) => `<span class="kick" data-reveal="fade">${txt}</span>`;
  const btn = (to, label, cls) => `<a class="btn ${cls || "btn--ink"}" href="${to}" data-magnetic=".2"><span>${label}</span>${icon("arrow-right")}</a>`;
  const ulink = (to, label) => `<a class="ulink" href="${to}"><span>${label}</span>${icon("arrow-right")}</a>`;
  const frame = (src, cls, alt, d) => `<figure class="frame ${cls || ""}" data-reveal="frame"${d ? ` data-delay="${d}"` : ""}><img src="${src}" alt="${alt || ""}" loading="lazy"></figure>`;

  function pageHero(navKey, text, image) {
    return `
    <section class="phero">
      <div class="pad">
        <nav class="crumb" aria-label="Breadcrumb" data-reveal="fade"><a href="#/">${ui("nav_home")}</a><span aria-hidden="true">—</span><span>${ui(navKey)}</span></nav>
        <h1 class="phero__t" data-split>${ui(navKey)}</h1>
        <p class="phero__p" data-reveal data-delay="120">${text}</p>
      </div>
      ${image ? `<figure class="phero__img" data-progress><img src="${real(image)}" alt="" fetchpriority="high"></figure>` : ""}
    </section>`;
  }

  /* ---------- Komponen ---------- */
  const showcase = (list) => `
    <div class="show" data-show>
      <div class="show__list" role="tablist">
        ${list.map((p, i) => `
          <button type="button" class="spot show__tab ${i ? "" : "is-active"}" role="tab" aria-selected="${i ? "false" : "true"}" data-show-tab="${i}">
            <span class="show__code">${p.code}</span>
            <span class="show__name">${pname(p)}</span>
            <span class="show__seg">${p.cat === "individual" ? t(L.family) : t(L.business)}</span>
          </button>`).join("")}
      </div>
      <div class="show__stage">
        <div class="show__imgs">${list.map((p, i) => `<img class="${i ? "" : "is-active"}" src="${real(PRODUCT_PIC[p.slug])}" alt="" loading="lazy">`).join("")}</div>
        ${list.map((p, i) => `
          <article class="show__panel ${i ? "" : "is-active"}" role="tabpanel" ${i ? "hidden" : ""}>
            <span class="show__type">${t(p.type)}</span>
            <h3>${pname(p)}</h3>
            <p>${t(p.text)}</p>
            <ul>${p.benefits.map((b) => `<li>${t(b)}</li>`).join("")}</ul>
            <div class="show__foot"><span>${ui("issued_by")} <b>${p.insurer}</b></span><button type="button" class="ulink" data-scrollto="contact"><span>${ui("consult")}</span>${icon("arrow-right")}</button></div>
          </article>`).join("")}
      </div>
    </div>`;

  const insurers = () => `
    <div class="ins">
      ${C.insurers.map((x, i) => `
        <article class="ins__c spot" data-reveal data-delay="${i * 120}">
          <span class="ins__k">${t(x.kind)}</span>
          <h3>${x.name}</h3>
          <div class="ins__n"><b data-count="${x.rbc}" data-suffix="%">0%</b><small>${ui("solvency")}</small></div>
          <div class="ins__a"><small>${ui("total_assets")}</small><span>Rp${S.lang === "id" ? x.assets : x.assets_en} ${ui("million")}</span></div>
          <p>${t(x.note)}</p>
        </article>`).join("")}
    </div>
    <p class="note note--dark" data-reveal>${t(C.insurer_note)}</p>`;

  const board = () => {
    const [lead, ...dirs] = C.management;
    return `
    <div class="board">
      <article class="board__lead">
        ${frame(S.img(lead.photo), "board__ph", lead.name)}
        <div data-reveal>
          <span class="board__role">${t(lead.role)}</span>
          <h3>${lead.name}</h3>
          <p>${t(lead.bio)}</p>
        </div>
      </article>
      <ol class="board__list">
        ${dirs.map((d, i) => `
          <li data-reveal data-delay="${i * 90}">
            ${d.photo ? `<img class="board__av" src="${S.img(d.photo)}" alt="${d.name}" loading="lazy">` : `<span class="board__mono" aria-hidden="true">${S.initials(d.name)}</span>`}
            <div><span class="board__role">${t(d.role)}</span><h3>${d.name}</h3><p>${t(d.bio)}</p></div>
          </li>`).join("")}
      </ol>
    </div>`;
  };

  const eventItem = (e, i) => {
    const up = S.isUpcoming(e.date);
    return `
    <article class="ev" data-cat="${up ? "upcoming" : "past"}" data-reveal data-delay="${(i || 0) * 70}">
      <time class="ev__d" datetime="${e.date}"><b>${S.dayOf(e.date)}</b><span>${S.fmtDate(e.date, { month: "long", year: "numeric" })}</span></time>
      <div class="ev__m">
        <span class="ev__t">${up ? `<i class="ev__up">${ui("upcoming")}</i>` : t(L.doc)} · ${t(e.type)}</span>
        <h3>${t(e.title)}</h3>
        <p>${t(e.text)}</p>
        <span class="ev__w">${t(e.place)} · ${e.time}</span>
      </div>
      ${up ? `<button type="button" class="ulink ev__r" data-scrollto="contact"><span>${ui("register")}</span>${icon("arrow-right")}</button>` : `<span></span>`}
    </article>`;
  };

  const newsItem = (n, i, big) => `
    <a href="#/news/${n.slug}" class="nw ${big ? "nw--big" : ""}" data-cat="${newsKey(n)}" data-reveal data-delay="${(i || 0) * 80}">
      <figure class="nw__img"><img src="${pic(n.img)}" alt="" loading="lazy"></figure>
      <div class="nw__b">
        <span class="nw__m">${t(n.cat)} · ${S.fmtDate(n.date)}</span>
        <h3>${t(n.title)}</h3>
        ${big ? `<p>${t(n.excerpt)}</p>` : ""}
        <span class="ulink"><span>${ui("read_more")}</span>${icon("arrow-right")}</span>
      </div>
    </a>`;

  const tabs = (target, items) => `
    <div class="tabs" data-filter-group="${target}" role="group" data-reveal="fade">
      ${items.map(([k, label], i) => `<button type="button" class="${i ? "" : "is-active"}" data-filter="${k}" aria-pressed="${i ? "false" : "true"}">${label}</button>`).join("")}
    </div>`;

  const clients = () => `
    <div class="cl">
      <ol class="cl__list">${C.clients.map((c, i) => `<li data-reveal data-delay="${i * 50}"><span>${String(i + 1).padStart(2, "0")}</span>${c}</li>`).join("")}</ol>
      <div class="cl__partners" data-reveal>
        <span class="kick">${ui("partners")}</span>
        <ul>${C.partners.map((c) => `<li>${S.mark({ cls: "cl__mark" })}${c}</li>`).join("")}</ul>
      </div>
    </div>`;

  /* ---------- Halaman ---------- */
  function home() {
    const ups = C.events.filter((e) => S.isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
    return `
    <section class="hero">
      <div class="hero__copy pad">
        <span class="hero__place" data-reveal="fade">${t(L.place)}</span>
        <h1 class="hero__t" data-split>${t(C.hero.title)}</h1>
        <p class="hero__p" data-reveal data-delay="140">${t(C.hero.text)}</p>
        <div class="hero__cta" data-reveal data-delay="240">
          ${btn("#/products", ui("explore_products"))}
          <button type="button" class="ulink" data-scrollto="contact"><span>${ui("consult")}</span>${icon("arrow-right")}</button>
        </div>
      </div>
      <figure class="hero__img" data-progress>
        <img src="${real("team-office.jpg")}" alt="${t({ id: "Tim di ruang kantor", en: "The team in the office" })}" fetchpriority="high">
        <figcaption class="hero__plate">${S.mark({ cls: "hero__mark" })}<span>${t(L.since)}<b>${S.fmtDate(C.about.authorization.date)}</b></span></figcaption>
      </figure>
    </section>

    <section class="facts pad">
      ${L.facts.map((f, i) => `<div data-reveal data-delay="${i * 80}"><b>${f.c != null ? `<span data-count="${f.c}" data-suffix="${f.s || ""}">0</span>` : f.n}</b><span>${t(f.l)}</span></div>`).join("")}
    </section>

    <section class="ribbon" aria-label="${t(L.clientsK)}">
      <div class="marquee" style="--mq-dur:52s;--mq-gap:48px">${[0, 1].map((k) => `<div class="marquee__track"${k ? ' aria-hidden="true"' : ""}>${C.clients.concat(C.partners).map((c) => `<span>${c}</span><i>✦</i>`).join("")}</div>`).join("")}</div>
    </section>

    <section class="sec pad">
      <div class="intro">
        <div>
          ${kicker(t(L.aboutK))}
          <blockquote class="quote" data-reveal>${t(C.about.vision)}</blockquote>
        </div>
        <div class="intro__r">
          <p class="lead" data-reveal>${t(C.about.lead)}</p>
          <p class="muted" data-reveal data-delay="80">${t(C.about.body)}</p>
          <div data-reveal data-delay="140">${ulink("#/about", ui("learn_more"))}</div>
        </div>
      </div>
      <div class="pair">
        ${frame(real("signing.jpg"), "pair__a", t({ id: "Penandatanganan dokumen", en: "Signing documents" }))}
        ${frame(real("meeting-table.jpg"), "pair__b", t({ id: "Rapat di ruang direksi", en: "A meeting in the boardroom" }), 150)}
      </div>
    </section>

    <section class="sec sec--stone pad">
      <div class="shead">${kicker(t(L.prodK))}<h2 class="h2" data-split>${t(L.prodT)}</h2><p class="shead__p" data-reveal>${t(L.prodText)}</p></div>
      <div data-reveal>${showcase(C.products)}</div>
      <p class="note" data-reveal>${t(C.product_note)}</p>
    </section>

    <section class="sec sec--walnut pad">
      <div class="shead">${kicker(t(L.insK))}<h2 class="h2" data-split>${t(L.insT)}</h2></div>
      ${insurers()}
    </section>

    <section class="sec pad">
      <div class="shead shead--row"><div>${kicker(t(L.leadK))}<h2 class="h2" data-split>${t(L.leadT)}</h2><p class="shead__p" data-reveal>${t(L.leadText)}</p></div>${ulink("#/structure", ui("nav_structure"))}</div>
      ${board()}
    </section>

    <section class="sec sec--stone pad">
      <div class="duo">
        <div>
          <div class="shead shead--row">${kicker(t(L.agendaK))}${ulink("#/events", ui("see_all"))}</div>
          <div class="evs">${ups.map(eventItem).join("")}</div>
        </div>
        <div>
          <div class="shead shead--row">${kicker(t(L.newsK))}${ulink("#/news", ui("see_all"))}</div>
          <div class="nws">${sortedNews().slice(0, 3).map((n, i) => newsItem(n, i)).join("")}</div>
        </div>
      </div>
    </section>

    <section class="sec pad">
      <div class="shead">${kicker(t(L.clientsK))}<h2 class="h2" data-split>${t(L.clientsT)}</h2></div>
      ${clients()}
    </section>`;
  }

  function about() {
    return `
    ${pageHero("nav_about", t(L.aboutH), "lounge.jpg")}
    <section class="sec pad">
      <div class="intro">
        <div>${kicker(t(C.about.title))}<p class="quote quote--sm" data-reveal>${t(C.about.lead)}</p></div>
        <div class="intro__r">
          <p class="muted" data-reveal>${t(C.about.body)}</p>
          <div class="auth" data-reveal><span>${S.fmtDate(C.about.authorization.date)}</span><b>${t(C.about.authorization.title)}</b><small>${t(C.about.authorization.text)}</small></div>
        </div>
      </div>
    </section>
    <section class="sec sec--stone pad">
      <div class="vm">
        <div>${kicker(t(L.vision))}<blockquote class="quote" data-reveal>${t(C.about.vision)}</blockquote></div>
        <div>${kicker(t(L.mission))}<ol class="mis">${C.about.mission.map((m, i) => `<li data-reveal data-delay="${i * 70}"><span>${i + 1}</span>${t(m)}</li>`).join("")}</ol></div>
      </div>
    </section>
    <section class="sec pad">
      <div class="shead">${kicker(t(L.how))}</div>
      <div class="vals">${C.about.values.map((v, i) => `<article class="spot" data-reveal data-delay="${i * 80}"><span class="vals__ic">${icon(v.icon)}</span><h3>${t(v.title)}</h3><p>${t(v.text)}</p></article>`).join("")}</div>
    </section>
    <section class="sec sec--walnut pad">
      <div class="shead">${kicker(t(L.journey))}</div>
      <ol class="tl" data-progress>
        <span class="tl__line" aria-hidden="true"><i></i></span>
        ${C.milestones.map((m, i) => `<li data-reveal data-delay="${i * 110}"><time>${S.fmtDate(m.date)}</time><h3>${t(m.title)}</h3><p>${t(m.text)}</p></li>`).join("")}
      </ol>
    </section>
    <section class="sec pad">
      <div class="duo duo--legal">
        <div>${kicker(t(L.legal))}<p class="muted" data-reveal>${t(C.company.disclaimer)}</p></div>
        <dl class="legal">${C.legal.map((l, i) => `<div data-reveal data-delay="${i * 50}"><dt>${t(l.label)}</dt><dd>${t(l.value)}</dd></div>`).join("")}</dl>
      </div>
    </section>
    <section class="sec sec--stone pad">
      <div class="shead">${kicker(t(L.servicesK))}<h2 class="h2" data-split>${t(L.services)}</h2><p class="shead__p" data-reveal>${t(L.servicesText)}</p></div>
      <div class="svc">${C.services.map((s, i) => `<article class="spot" data-reveal data-delay="${i * 70}"><span class="svc__n">${String(i + 1).padStart(2, "0")}</span><h3>${t(s.title)}</h3><p>${t(s.text)}</p></article>`).join("")}</div>
    </section>
    <section class="sec pad">
      <div class="shead">${kicker(t(L.clientsK))}<h2 class="h2" data-split>${t(L.clientsT)}</h2></div>
      ${clients()}
    </section>`;
  }

  function structure() {
    const [lead, ...dirs] = C.management;
    return `
    ${pageHero("nav_structure", t(L.structH), "team-office.jpg")}
    <section class="sec pad">
      <div class="shead">${kicker(t(L.org))}<h2 class="h2" data-split>${t(L.orgTitle)}</h2><p class="shead__p" data-reveal>${t(L.orgText)}</p></div>
      <div class="tree">
        <div class="tree__n tree__n--parent" data-reveal><small>${ui("parent_company")}</small><b>${C.company.parent}</b></div>
        <span class="tree__v" data-reveal="line" data-delay="150"></span>
        <div class="tree__n tree__n--co" data-reveal data-delay="250">${S.mark({ cls: "tree__mark" })}<b>${C.company.name}</b></div>
        <span class="tree__v" data-reveal="line" data-delay="400"></span>
        <div class="tree__n tree__n--lead" data-reveal data-delay="500"><small>${t(lead.role)}</small><b>${lead.name}</b></div>
        <span class="tree__fork" data-reveal="line" data-delay="650"></span>
        <div class="tree__row">${dirs.map((d, i) => `<div class="tree__n" data-reveal data-delay="${750 + i * 100}"><small>${t(d.role)}</small><b>${d.name}</b></div>`).join("")}</div>
      </div>
    </section>
    <section class="sec sec--stone pad">
      <div class="shead">${kicker(t(L.leadK))}<h2 class="h2" data-split>${t(L.leadT)}</h2><p class="shead__p" data-reveal>${t(L.leadText)}</p></div>
      ${board()}
    </section>`;
  }

  function products() {
    const group = (cat) => C.products.filter((p) => p.cat === cat);
    const block = (p, i) => `
      <article class="pr ${i % 2 ? "pr--rev" : ""}" id="p-${p.slug}">
        ${frame(real(PRODUCT_PIC[p.slug]), "pr__img")}
        <div class="pr__c">
          <span class="pr__code" data-reveal="fade">${p.code}</span>
          <h3 class="h2" data-split>${pname(p)}</h3>
          <span class="pr__type" data-reveal>${t(p.type)}</span>
          <p class="muted" data-reveal>${t(p.text)}</p>
          <ul class="pr__b">${p.benefits.map((b, k) => `<li data-reveal data-delay="${k * 60}">${t(b)}</li>`).join("")}</ul>
          <div class="pr__f" data-reveal><span>${ui("issued_by")} <b>${p.insurer}</b></span><button type="button" class="btn btn--ink" data-scrollto="contact" data-magnetic=".2"><span>${ui("consult")}</span>${icon("arrow-right")}</button></div>
        </div>
      </article>`;
    return `
    ${pageHero("nav_products", t(L.prodH), "handshake.jpg")}
    <section class="sec pad">
      <div class="shead">${kicker(t(L.family))}<h2 class="h2" data-split>${t(L.familyT)}</h2><p class="shead__p" data-reveal>${t(L.familyText)}</p></div>
      ${group("individual").map(block).join("")}
    </section>
    <section class="sec sec--stone pad">
      <div class="shead">${kicker(t(L.business))}<h2 class="h2" data-split>${t(L.bizT)}</h2><p class="shead__p" data-reveal>${t(L.bizText)}</p></div>
      ${group("corporate").map(block).join("")}
      <p class="note" data-reveal>${t(C.product_note)}</p>
    </section>
    <section class="sec sec--walnut pad">
      <div class="shead">${kicker(t(L.insK))}<h2 class="h2" data-split>${t(L.insT)}</h2></div>
      ${insurers()}
    </section>`;
  }

  function events() {
    const list = [...C.events].sort((a, b) => {
      const ua = S.isUpcoming(a.date), ub = S.isUpcoming(b.date);
      if (ua !== ub) return ua ? -1 : 1;
      return ua ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });
    return `
    ${pageHero("nav_events", t(L.evH), "handshake-group.jpg")}
    <section class="sec pad">
      <div class="shead shead--row"><p class="note note--top">${ui("sample_note")}</p>${tabs("#evList", [["all", ui("all")], ["upcoming", ui("upcoming")], ["past", ui("past")]])}</div>
      <div class="evs evs--page" id="evList">${list.map(eventItem).join("")}</div>
    </section>`;
  }

  function news() {
    const all = sortedNews();
    const cats = [...new Map(all.map((n) => [newsKey(n), n.cat])).entries()];
    return `
    ${pageHero("nav_news", t(L.newsH), "")}
    <section class="sec sec--flush pad">${newsItem(all[0], 0, true)}</section>
    <section class="sec pad">
      <div class="shead shead--row"><p class="note note--top">${ui("sample_note")}</p>${tabs("#newsList", [["all", ui("all")], ...cats.map(([k, c]) => [k, t(c)])])}</div>
      <div class="ngrid" id="newsList">${all.slice(1).map((n, i) => newsItem(n, i)).join("")}</div>
    </section>`;
  }

  function newsDetail(slug) {
    const n = C.news.find((x) => x.slug === slug);
    if (!n) return news();
    const more = sortedNews().filter((x) => x.slug !== slug).slice(0, 3);
    return {
      title: t(n.title),
      html: `
      <article class="art pad">
        <a href="#/news" class="ulink ulink--back" data-reveal="fade">${icon("arrow-left")}<span>${ui("back")}</span></a>
        <span class="nw__m" data-reveal="fade">${t(n.cat)} · ${S.fmtDate(n.date)} · ${n.read} ${ui("min_read")}</span>
        <h1 class="phero__t phero__t--art" data-split>${t(n.title)}</h1>
        <p class="lead" data-reveal data-delay="120">${t(n.excerpt)}</p>
        ${frame(pic(n.img), "art__img")}
        <div class="art__b">${n.body.map((p) => `<p data-reveal>${t(p)}</p>`).join("")}</div>
      </article>
      <section class="sec sec--stone pad">
        <div class="shead">${kicker(ui("related_news"))}</div>
        <div class="ngrid">${more.map((m, i) => newsItem(m, i)).join("")}</div>
      </section>`
    };
  }

  /* ---------- Chrome ---------- */
  function chrome() {
    document.querySelector('[data-slot="logo"]').innerHTML = S.logo({ cls: "logo--rail" });
    document.querySelector('[data-slot="mlogo"]').innerHTML = S.logo({ cls: "logo--rail" });
    document.querySelector('[data-slot="pre"]').innerHTML = `${S.mark({ cls: "draw pre__mark" })}<span class="pre__name">PT Cakra Proteksi Indonesia</span><span class="pre__line"><i></i></span>`;
    document.querySelector('[data-slot="railfoot"]').innerHTML = `
      <a href="tel:1500456"><small>${ui("claims_hotline")}</small>${C.company.hotline}</a>
      <a href="mailto:${C.company.emails[0]}"><small>${ui("email")}</small>${C.company.emails[0]}</a>`;
    document.getElementById("footer").innerHTML = `
    <section class="contact pad" id="contact" tabindex="-1">
      <div class="contact__in">
        <div>
          ${kicker(ui("contact_us"))}
          <h2 class="h2 h2--light">${ui("cta_title")}</h2>
          <p class="contact__p">${ui("cta_text")}</p>
          <dl class="contact__dl">
            <div><dt>${ui("office")}</dt><dd>${C.company.address.join("<br>")}</dd></div>
            <div><dt>${ui("email")}</dt><dd>${C.company.emails.map((e) => `<a href="mailto:${e}">${e}</a>`).join("<br>")}</dd></div>
            <div><dt>${ui("claims_hotline")}</dt><dd><a href="tel:1500456">${C.company.hotline}</a></dd></div>
          </dl>
        </div>
        <form class="form" data-mock novalidate>
          <div class="field"><label for="m5-name">${ui("form_name")}</label><input id="m5-name" name="name" autocomplete="name" required></div>
          <div class="field"><label for="m5-email">${ui("form_email")}</label><input id="m5-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="m5-need">${ui("form_need")}</label><select id="m5-need" name="need">${L.needs.map((n) => `<option>${t(n)}</option>`).join("")}</select></div>
          <div class="field"><label for="m5-msg">${ui("form_msg")}</label><textarea id="m5-msg" name="msg" rows="4"></textarea></div>
          <button class="btn btn--brass btn--block" type="submit"><span>${ui("form_send")}</span>${icon("send")}</button>
        </form>
      </div>
    </section>
    <div class="foot pad">
      <nav class="foot__nav">${MENU.map(([r, k]) => `<a href="${href(r)}">${ui(k)}</a>`).join("")}</nav>
      <p>${t(C.company.disclaimer)}</p>
      <p>© 2026 ${C.company.name}. ${ui("footer_rights")}</p>
    </div>`;
  }

  /* Penanda menu aktif meluncur di sidebar */
  function moveMark() {
    const nav = document.querySelector(".rail__nav"), mk = document.querySelector(".rail__mark");
    const a = nav && nav.querySelector("a.is-active");
    if (!mk || !a) return;
    mk.style.transform = `translateY(${a.offsetTop}px)`;
    mk.style.height = a.offsetHeight + "px";
  }
  /* Showcase produk: ganti tab dengan crossfade */
  function bindShow() {
    document.querySelectorAll("[data-show]").forEach((root) => {
      const tabsEl = root.querySelectorAll("[data-show-tab]");
      const imgs = root.querySelectorAll(".show__imgs img");
      const panels = root.querySelectorAll(".show__panel");
      tabsEl.forEach((b) => b.addEventListener("click", () => {
        const k = +b.dataset.showTab;
        tabsEl.forEach((x, i) => { x.classList.toggle("is-active", i === k); x.setAttribute("aria-selected", i === k ? "true" : "false"); });
        imgs.forEach((x, i) => x.classList.toggle("is-active", i === k));
        panels.forEach((x, i) => {
          if (i === k) { x.hidden = false; requestAnimationFrame(() => x.classList.add("is-active")); }
          else { x.classList.remove("is-active"); x.hidden = true; }
        });
      }));
    });
  }
  /* Kursor kuningan */
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches && !document.documentElement.classList.contains("reduce-motion");
  if (fine) {
    const ring = document.createElement("div"); ring.className = "cursor"; document.body.appendChild(ring);
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; ring.classList.add("is-on"); });
    document.addEventListener("pointerover", (e) => ring.classList.toggle("is-hover", !!e.target.closest("a,button,select,input,textarea,.spot")));
    document.addEventListener("pointerleave", () => ring.classList.remove("is-on"));
    (function loop() { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; ring.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
  }
  addEventListener("resize", moveMark);
  if (document.fonts) document.fonts.ready.then(moveMark);

  S.start({
    transition: 700,
    chrome,
    routes: { home, about, structure, events, products, news, "news:detail": newsDetail },
    after: () => { requestAnimationFrame(moveMark); bindShow(); }
  });
})();
