/* Mockup 2 — Midnight Premium */
(function () {
  const S = window.Site, C = S.C, t = S.t, ui = S.ui, img = S.img, icon = S.icon;
  const LIGHT_BLUE = "#3D8BDB";
  const mk = (cls) => S.mark({ cls, blue: LIGHT_BLUE });

  const L = {
    statement: {
      id: "Kami percaya perlindungan yang baik dimulai dari pemahaman yang jelas. CPI hadir untuk menjembatani keluarga dan pelaku usaha dengan produk asuransi Zurich — secara profesional, transparan, dan responsif.",
      en: "We believe good protection begins with clear understanding. CPI bridges families and businesses with Zurich insurance products — professionally, transparently, and responsively."
    },
    since: { id: "Resmi sejak", en: "Authorized since" },
    prodTitle: { id: "Portofolio perlindungan", en: "Protection portfolio" },
    prodText: { id: "Empat lini produk Zurich untuk kebutuhan keluarga dan bisnis.", en: "Four Zurich product lines for family and business needs." },
    insTitle: { id: "Kekuatan finansial penanggung", en: "Insurer financial strength" },
    leadTitle: { id: "Kepemimpinan", en: "Leadership" },
    trusted: { id: "Dipercaya oleh", en: "Trusted by" },
    evTitle: { id: "Agenda terdekat", en: "Upcoming agenda" },
    newsTitle: { id: "Wawasan & kabar", en: "Insights & news" },
    vision: { id: "Visi", en: "Vision" },
    mission: { id: "Misi", en: "Mission" },
    values: { id: "Nilai inti", en: "Core values" },
    journey: { id: "Tonggak perjalanan", en: "Milestones" },
    legal: { id: "Identitas & Legalitas", en: "Identity & Legal" },
    commit: { id: "Komitmen layanan", en: "Service commitment" },
    orgTitle: { id: "Struktur Organisasi", en: "Organization Structure" },
    orgText: { id: "Anak perusahaan PT Multi Integrasi Bisnis (MIB), dipimpin oleh Dewan Direksi yang berpengalaman.", en: "A subsidiary of PT Multi Integrasi Bisnis (MIB), led by an experienced Board of Directors." },
    aboutHero: { id: "Perusahaan nasional dengan satu fokus: perlindungan yang dipahami.", en: "A national company with one focus: protection that is understood." },
    evHero: { id: "Bertemu, belajar, dan bertumbuh bersama.", en: "Meet, learn, and grow together." },
    prodHero: { id: "Perlindungan untuk keluarga & bisnis.", en: "Protection for families & businesses." },
    newsHero: { id: "Kabar dan wawasan terbaru.", en: "Latest news and insights." },
    doc: { id: "Selesai", en: "Completed" },
    scroll: { id: "Gulir untuk menjelajah", en: "Scroll to explore" },
    needs: [
      { id: "Perlindungan jiwa & pendidikan", en: "Life & education protection" },
      { id: "Asuransi pengangkutan barang", en: "Marine cargo insurance" },
      { id: "Asuransi aset & properti", en: "Property & asset insurance" },
      { id: "Lainnya", en: "Other" }
    ]
  };

  const btn = (href, label, cls, ic) => `<a class="btn ${cls || "btn--orange"}" href="${href}" data-magnetic=".22"><span>${label}</span>${icon(ic || "arrow-up-right")}</a>`;
  const kicker = (txt) => `<span class="kicker" data-reveal><i></i>${txt}</span>`;
  const pname = (p) => t(p.name);
  const sortedNews = () => [...C.news].sort((a, b) => b.date.localeCompare(a.date));
  const newsKey = (n) => n.cat.en.toLowerCase();

  function pageHero(navKey, title, bg) {
    return `
    <section class="phero">
      <div class="phero__bg" data-parallax="0.18"><img src="${img(bg)}" alt=""></div>
      <div class="phero__mark">${mk("draw")}</div>
      <div class="wrap phero__in">
        ${kicker(ui(navKey))}
        <h1 class="mega" data-split>${title}</h1>
      </div>
    </section>`;
  }

  /* ---------- Components ---------- */
  const glassStat = (s, i) => `
    <div class="bento__stat glass spot" data-reveal data-delay="${i * 90}">
      <span class="bento__num" data-count="${s.value}" data-suffix="${s.suffix}">0</span>
      <span class="bento__lbl">${t(s.label)}</span>
    </div>`;

  const stackCard = (p, i) => `
    <article class="stack__card" style="--i:${i}">
      <div class="stack__copy">
        <span class="stack__code">${p.code}</span>
        <h3>${pname(p)}</h3>
        <p>${t(p.text)}</p>
        <ul class="stack__list">${p.benefits.map((b) => `<li>${icon("check")}${t(b)}</li>`).join("")}</ul>
        <span class="stack__ins">${ui("issued_by")} <b>${p.insurer}</b></span>
      </div>
      <figure class="stack__img"><img src="${img(p.img)}" alt="" loading="lazy"><span class="stack__icon">${icon(p.icon)}</span></figure>
    </article>`;

  const eventRow = (e, i) => {
    const up = S.isUpcoming(e.date);
    return `
    <a href="#/events" class="erow" data-img="${img(e.img)}" data-cat="${up ? "upcoming" : "past"}" data-reveal data-delay="${i * 80}">
      <span class="erow__date"><b>${S.dayOf(e.date)}</b><small>${S.monOf(e.date)} ${e.date.slice(0, 4)}</small></span>
      <span class="erow__main"><span class="erow__type">${t(e.type)} · ${up ? ui("upcoming") : t(L.doc)}</span><h3>${t(e.title)}</h3><span class="erow__place">${icon("map-pin")}${t(e.place)} · ${e.time}</span></span>
      <span class="erow__go">${icon("arrow-up-right")}</span>
    </a>`;
  };

  const newsCard = (n, i, big) => `
    <a href="#/news/${n.slug}" class="ncard glass ${big ? "ncard--big" : ""}" data-cat="${newsKey(n)}" data-reveal data-delay="${(i || 0) * 90}">
      <figure class="ncard__img"><img src="${img(n.img)}" alt="" loading="lazy"></figure>
      <div class="ncard__body">
        <span class="ncard__meta">${t(n.cat)} — ${S.fmtDate(n.date)}</span>
        <h3>${t(n.title)}</h3>
        ${big ? `<p>${t(n.excerpt)}</p>` : ""}
        <span class="ncard__more">${ui("read_more")}${icon("arrow-right")}</span>
      </div>
    </a>`;

  const leader = (m, i) => `
    <article class="leader glass spot ${m.lead ? "leader--lead" : ""}" data-reveal data-delay="${i * 100}">
      <span class="leader__av hex">${S.avatar(m, true)}</span>
      <span class="leader__role">${t(m.role)}</span>
      <h3>${m.name}</h3>
      <p>${t(m.bio)}</p>
    </article>`;

  const insurerPanels = () => C.insurers.map((x, i) => `
    <article class="insr glass spot" data-reveal data-delay="${i * 140}">
      <div class="insr__head"><span class="insr__kind">${t(x.kind)}</span><h3>${x.name}</h3></div>
      <div class="insr__ring">
        <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" class="insr__track"/><circle cx="60" cy="60" r="52" class="insr__bar" pathLength="1"/></svg>
        <div><span data-count="${x.rbc}" data-suffix="%">0%</span><small>${ui("solvency")}</small></div>
      </div>
      <div class="insr__assets"><small>${ui("total_assets")}</small><b>Rp${S.lang === "id" ? x.assets : x.assets_en}</b> <em>${ui("million")}</em></div>
      <p>${t(x.note)}</p>
    </article>`).join("");

  const marquee = (items, rev) => {
    const h = items.map((n) => `<span class="mq">${mk("mq__mark")}${n}</span>`).join("");
    return `<div class="marquee ${rev ? "marquee--rev" : ""}"><div class="marquee__track">${h}</div><div class="marquee__track" aria-hidden="true">${h}</div></div>`;
  };

  const statement = (txt) => {
    const words = txt.split(" ");
    return `<p class="statement" data-progress style="--n:${words.length}" aria-label="${S.esc(txt)}">${words.map((w, i) => `<span aria-hidden="true" style="--i:${i}">${w}</span>`).join(" ")}</p>`;
  };

  /* ---------- Pages ---------- */
  function home() {
    const ups = C.events.filter((e) => S.isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date));
    const evs = [...ups, ...C.events.filter((e) => !S.isUpcoming(e.date))].slice(0, 4);
    return `
    <section class="hero">
      <div class="hero__bg"><img src="${img("team-boardroom.jpg")}" alt="" fetchpriority="high"></div>
      <div class="wrap hero__in">
        <div class="hero__copy">
          ${kicker(t(C.hero.eyebrow))}
          <h1 class="mega mega--hero" data-split>${t(C.hero.title_alt)}</h1>
          <p class="hero__text" data-reveal data-delay="500">${t(C.hero.text)}</p>
          <div class="hero__cta" data-reveal data-delay="650">
            ${btn("#/products", ui("explore_products"))}
            <button type="button" class="btn btn--glass" data-scrollto="contact" data-magnetic=".22"><span>${ui("consult")}</span>${icon("phone")}</button>
          </div>
        </div>
        <aside class="hero__badge glass" data-reveal="scale" data-delay="900">
          <div class="circle-text">
            <svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="ctp" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/></defs><text><textPath href="#ctp">CAKRA PROTEKSI • INDONESIA • ZURICH • </textPath></text></svg>
            ${mk("circle-text__mark")}
          </div>
          <div><small>${t(L.since)}</small><b>${S.fmtDate(C.about.authorization.date)}</b><span>${t(C.about.authorization.title)}</span></div>
        </aside>
      </div>
      <div class="hero__scroll" aria-hidden="true"><span></span>${t(L.scroll)}</div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${kicker(t(C.about.eyebrow))}
        ${statement(t(L.statement))}
      </div>
    </section>

    <section class="sec sec--tight">
      <div class="wrap bento">
        <figure class="bento__img" data-reveal="clip"><img src="${img("partnership-handshake.jpg")}" alt="" loading="lazy">
          <figcaption class="glass"><b>${C.company.name}</b><span>${C.company.address[0]}, SCBD</span></figcaption></figure>
        ${C.stats.map(glassStat).join("")}
        <a href="#/about" class="bento__cta spot" data-reveal data-delay="300"><span>${ui("nav_about")}</span><b>${ui("learn_more")}</b>${icon("arrow-up-right")}</a>
      </div>
    </section>

    <section class="sec">
      <div class="wrap stack">
        <div class="stack__head">
          ${kicker(t({ id: "Produk", en: "Products" }))}
          <h2 class="h2" data-split>${t(L.prodTitle)}</h2>
          <p class="muted" data-reveal>${t(L.prodText)}</p>
          <div data-reveal>${btn("#/products", ui("see_all"), "btn--glass")}</div>
        </div>
        <div class="stack__list-wrap">${C.products.map(stackCard).join("")}</div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head">${kicker(t({ id: "Mitra Penanggung", en: "Insurer Partners" }))}<h2 class="h2" data-split>${t(L.insTitle)}</h2></div>
        <div class="insr-grid">${insurerPanels()}</div>
        <p class="fine" data-reveal>${t(C.insurer_note)}</p>
      </div>
    </section>

    <section class="sec sec--tight trust">
      <p class="trust__label" data-reveal>${t(L.trusted)}</p>
      ${marquee(C.clients)}
      ${marquee(C.partners.concat(C.partners), true)}
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head row-head--split">
          <div>${kicker(ui("board"))}<h2 class="h2" data-split>${t(L.leadTitle)}</h2></div>
          <div data-reveal>${btn("#/structure", ui("nav_structure"), "btn--glass")}</div>
        </div>
        <div class="leaders">${C.management.map(leader).join("")}</div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head row-head--split">
          <div>${kicker(ui("nav_events"))}<h2 class="h2" data-split>${t(L.evTitle)}</h2></div>
          <div data-reveal>${btn("#/events", ui("see_all"), "btn--glass")}</div>
        </div>
        <div class="erows" data-hover-img>${evs.map(eventRow).join("")}<img class="erows__float" alt="" aria-hidden="true"></div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head row-head--split">
          <div>${kicker(ui("nav_news"))}<h2 class="h2" data-split>${t(L.newsTitle)}</h2></div>
          <div data-reveal>${btn("#/news", ui("see_all"), "btn--glass")}</div>
        </div>
        <div class="ngrid">${sortedNews().slice(0, 3).map((n, i) => newsCard(n, i)).join("")}</div>
      </div>
    </section>`;
  }

  function about() {
    return `
    ${pageHero("nav_about", t(L.aboutHero), "board-meeting.jpg")}
    <section class="sec">
      <div class="wrap duo">
        <div class="duo__sticky">
          <figure class="duo__img" data-reveal="clip"><img src="${img("board-strategy.jpg")}" alt="" loading="lazy"></figure>
        </div>
        <div class="duo__copy">
          ${kicker(t(C.about.eyebrow))}
          <h2 class="h2" data-split>${t(C.about.title)}</h2>
          <p class="big" data-reveal>${t(C.about.lead)}</p>
          <p class="muted" data-reveal>${t(C.about.body)}</p>
          <div class="authz glass" data-reveal>
            ${icon("award")}
            <div><small>${S.fmtDate(C.about.authorization.date)}</small><b>${t(C.about.authorization.title)}</b><span>${t(C.about.authorization.text)}</span></div>
          </div>
          <div class="vm">
            <div class="vm__item" data-reveal><span class="kicker"><i></i>${t(L.vision)}</span><p class="quote">“${t(C.about.vision)}”</p></div>
            <div class="vm__item" data-reveal><span class="kicker"><i></i>${t(L.mission)}</span>
              <ol class="mission">${C.about.mission.map((m, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span>${t(m)}</li>`).join("")}</ol></div>
          </div>
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head">${kicker(t(L.values))}<h2 class="h2" data-split>${t({ id: "Prinsip yang kami pegang", en: "Principles we hold" })}</h2></div>
        <div class="values" data-stagger="90">
          ${C.about.values.map((v, i) => `<article class="value glass spot" data-reveal><span class="value__n">0${i + 1}</span><span class="value__ic">${icon(v.icon)}</span><h3>${t(v.title)}</h3><p>${t(v.text)}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap duo duo--rev">
        <div class="duo__copy">
          ${kicker(t(L.journey))}
          <h2 class="h2" data-split>${t({ id: "Dari pendirian hingga otorisasi", en: "From founding to authorization" })}</h2>
        </div>
        <ol class="vtl" data-progress>
          <span class="vtl__line"><i></i></span>
          ${C.milestones.map((m, i) => `<li data-reveal data-delay="${i * 120}"><span class="vtl__dot"></span><small>${S.fmtDate(m.date)}</small><h3>${t(m.title)}</h3><p>${t(m.text)}</p></li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head">${kicker(t(L.legal))}<h2 class="h2" data-split>${C.company.name}</h2></div>
        <dl class="legal glass" data-stagger="60">${C.legal.map((l) => `<div data-reveal><dt>${t(l.label)}</dt><dd>${t(l.value)}</dd></div>`).join("")}</dl>
        <p class="fine" data-reveal>${t(C.company.disclaimer)}</p>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="row-head">${kicker(t(L.commit))}<h2 class="h2" data-split>${t({ id: "Profesional, transparan, responsif.", en: "Professional, transparent, responsive." })}</h2></div>
        <div class="svc" data-stagger="80">
          ${C.services.map((s, i) => `<article class="svc__item" data-reveal><span class="svc__n">0${i + 1}</span><div><h3>${icon(s.icon)}${t(s.title)}</h3><p>${t(s.text)}</p></div></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec sec--tight trust">
      <p class="trust__label" data-reveal>${ui("clients")} & ${ui("partners")}</p>
      ${marquee(C.clients)}
      ${marquee(C.partners.concat(C.partners), true)}
    </section>`;
  }

  function structure() {
    const [lead, ...dirs] = C.management;
    const node = (m, cls, d) => `<div class="onode glass ${cls || ""}" data-reveal="scale" data-delay="${d}"><span class="leader__av hex">${S.avatar(m, true)}</span><div><small>${t(m.role)}</small><b>${m.name}</b></div></div>`;
    return `
    ${pageHero("nav_structure", t(L.orgTitle), "real/team-office.jpg")}
    <section class="sec">
      <div class="wrap">
        <p class="big center" data-reveal>${t(L.orgText)}</p>
        <div class="otree" data-progress>
          <div class="onode glass onode--parent" data-reveal="scale"><span class="onode__ic">${icon("landmark")}</span><div><small>${ui("parent_company")}</small><b>${C.company.parent}</b></div></div>
          <span class="olink"><i></i></span>
          <div class="onode onode--co" data-reveal="scale" data-delay="150">${mk("onode__mark")}<div><small>${t({ id: "Perusahaan", en: "Company" })}</small><b>${C.company.name}</b></div></div>
          <span class="olink"><i></i></span>
          ${node(lead, "onode--lead", 300)}
          <span class="olink olink--fork"><i></i></span>
          <div class="orow">${dirs.map((d, i) => node(d, "", 450 + i * 120)).join("")}</div>
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        <figure class="cine" data-reveal="clip"><img src="${img("real/team-office.jpg")}" alt="" loading="lazy"></figure>
        <div class="leaders leaders--mt">${C.management.map(leader).join("")}</div>
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
    ${pageHero("nav_events", t(L.evHero), "team-rooftop.jpg")}
    <section class="sec">
      <div class="wrap">
        <div class="chips" data-filter-group="#evRows" role="group" data-reveal>
          <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
          <button type="button" data-filter="upcoming" aria-pressed="false">${ui("upcoming")}</button>
          <button type="button" data-filter="past" aria-pressed="false">${ui("past")}</button>
        </div>
        <div class="egrid" id="evRows">
          ${list.map((e, i) => {
            const up = S.isUpcoming(e.date);
            return `<article class="ecard glass spot" data-cat="${up ? "upcoming" : "past"}" data-reveal data-delay="${i * 80}">
              <figure><img src="${img(e.img)}" alt="" loading="lazy"><span class="ecard__badge ${up ? "is-up" : ""}">${up ? ui("upcoming") : t(L.doc)}</span></figure>
              <div class="ecard__body">
                <span class="ecard__date">${S.fmtDate(e.date)} · ${e.time}</span>
                <h3>${t(e.title)}</h3>
                <p>${t(e.text)}</p>
                <div class="ecard__foot"><span>${icon("map-pin")}${t(e.place)}</span>${up ? `<button type="button" class="btn btn--orange btn--sm" data-scrollto="contact"><span>${ui("register")}</span>${icon("arrow-right")}</button>` : ""}</div>
              </div>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>`;
  }

  function products() {
    const panel = (p, i) => `
      <article class="pp ${i % 2 ? "pp--rev" : ""}">
        <span class="pp__ghost" aria-hidden="true" data-parallax="-0.08">${p.code.split(" ")[0]}</span>
        <figure class="pp__img" data-reveal="clip"><img src="${img(p.img)}" alt="" loading="lazy"></figure>
        <div class="pp__copy">
          <span class="kicker" data-reveal><i></i>${ui(p.cat)}</span>
          <h2 class="h2" data-split>${pname(p)}</h2>
          <span class="pp__type" data-reveal>${p.code} — ${t(p.type)}</span>
          <p class="muted" data-reveal>${t(p.text)}</p>
          <ul class="stack__list" data-stagger="80">${p.benefits.map((b) => `<li data-reveal>${icon("check")}${t(b)}</li>`).join("")}</ul>
          <div class="pp__foot" data-reveal><span class="stack__ins">${ui("insurer")}: <b>${p.insurer}</b></span>
            <button type="button" class="btn btn--orange" data-scrollto="contact" data-magnetic=".22"><span>${ui("consult")}</span>${icon("arrow-up-right")}</button></div>
        </div>
      </article>`;
    return `
    ${pageHero("nav_products", t(L.prodHero), "family-sunset.jpg")}
    <section class="sec">
      <div class="wrap">${C.products.map(panel).join("")}
        <p class="fine" data-reveal>${t(C.product_note)}</p>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        <div class="row-head">${kicker(t({ id: "Mitra Penanggung", en: "Insurer Partners" }))}<h2 class="h2" data-split>${t(L.insTitle)}</h2></div>
        <div class="insr-grid">${insurerPanels()}</div>
        <p class="fine" data-reveal>${t(C.insurer_note)}</p>
      </div>
    </section>`;
  }

  function news() {
    const all = sortedNews();
    const cats = [...new Map(all.map((n) => [newsKey(n), n.cat])).entries()];
    return `
    ${pageHero("nav_news", t(L.newsHero), "partnership-meeting.jpg")}
    <section class="sec">
      <div class="wrap">
        ${newsCard(all[0], 0, true)}
        <div class="chips chips--mt" data-filter-group="#newsGrid" role="group" data-reveal>
          <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
          ${cats.map(([k, c]) => `<button type="button" data-filter="${k}" aria-pressed="false">${t(c)}</button>`).join("")}
        </div>
        <div class="ngrid" id="newsGrid">${all.slice(1).map((n, i) => newsCard(n, i)).join("")}</div>
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
      <article class="art">
        <div class="art__hero">
          <div class="art__bg" data-parallax="0.15"><img src="${img(n.img)}" alt=""></div>
          <div class="wrap wrap--narrow art__head">
            <a href="#/news" class="back" data-reveal>${icon("arrow-left")}${ui("back")}</a>
            <span class="kicker" data-reveal><i></i>${t(n.cat)} — ${S.fmtDate(n.date)} · ${n.read} ${ui("min_read")}</span>
            <h1 class="mega mega--art" data-split>${t(n.title)}</h1>
          </div>
        </div>
        <div class="wrap wrap--narrow art__body">
          <p class="big" data-reveal>${t(n.excerpt)}</p>
          ${n.body.map((p) => `<p data-reveal>${t(p)}</p>`).join("")}
        </div>
      </article>
      <section class="sec">
        <div class="wrap">
          <div class="row-head">${kicker(ui("related_news"))}</div>
          <div class="ngrid">${more.map((m, i) => newsCard(m, i)).join("")}</div>
        </div>
      </section>`
    };
  }

  /* ---------- Chrome ---------- */
  function chrome() {
    document.querySelector('[data-slot="logo"]').innerHTML = S.logo({ cls: "logo--hdr", blue: LIGHT_BLUE });
    document.querySelector('[data-slot="pre"]').innerHTML = mk("draw preloader__mark");
    document.getElementById("footer").innerHTML = `
    <section class="cta" id="contact" tabindex="-1">
      <div class="wrap cta__in">
        <div>
          ${kicker(ui("contact_us"))}
          <h2 class="mega mega--cta" data-split>${ui("cta_title")}</h2>
          <p class="muted" data-reveal>${ui("cta_text")}</p>
          <div class="cta__info" data-stagger="80">
            <a data-reveal href="mailto:${C.company.emails[0]}">${icon("mail")}${C.company.emails[0]}</a>
            <a data-reveal href="tel:1500456">${icon("phone")}${ui("claims_hotline")} · ${C.company.hotline}</a>
            <span data-reveal>${icon("map-pin")}${C.company.address.slice(0, 2).join(", ")}</span>
          </div>
        </div>
        <form class="form glass" data-mock data-reveal="scale" novalidate>
          <div class="field"><input id="m2-name" name="name" placeholder=" " autocomplete="name" required><label for="m2-name">${ui("form_name")}</label></div>
          <div class="field"><input id="m2-email" name="email" type="email" placeholder=" " autocomplete="email" required><label for="m2-email">${ui("form_email")}</label></div>
          <div class="field field--select"><select id="m2-need" name="need">${L.needs.map((n) => `<option>${t(n)}</option>`).join("")}</select><label for="m2-need">${ui("form_need")}</label></div>
          <div class="field"><textarea id="m2-msg" name="msg" rows="3" placeholder=" "></textarea><label for="m2-msg">${ui("form_msg")}</label></div>
          <button type="submit" class="btn btn--orange btn--block"><span>${ui("form_send")}</span>${icon("send")}</button>
        </form>
      </div>
    </section>
    <div class="foot">
      <div class="wrap foot__top">
        ${S.logo({ cls: "logo--foot", blue: LIGHT_BLUE })}
        <nav class="foot__nav">${S.NAV.map(([r, k]) => `<a href="#/${r === "home" ? "" : r}">${ui(k)}</a>`).join("")}</nav>
      </div>
      <div class="foot__giant" aria-hidden="true">CAKRA PROTEKSI</div>
      <div class="wrap foot__legal"><p>${t(C.company.disclaimer)}</p><p>© 2026 ${C.company.name}. ${ui("footer_rights")}</p></div>
    </div>`;
  }

  /* ---------- Premium extras: cursor + hover image ---------- */
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !document.documentElement.classList.contains("reduce-motion");
  if (fine) {
    const dot = document.createElement("div"); dot.className = "cursor"; document.body.appendChild(dot);
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; dot.classList.add("is-on"); });
    document.addEventListener("pointerover", (e) => dot.classList.toggle("is-hover", !!e.target.closest("a,button,select,input,textarea,.spot")));
    document.addEventListener("pointerleave", () => dot.classList.remove("is-on"));
    (function loop() { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; dot.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
  }
  function hoverImages() {
    if (!fine) return;
    document.querySelectorAll("[data-hover-img]").forEach((list) => {
      const im = list.querySelector(".erows__float");
      list.addEventListener("pointermove", (e) => {
        const r = list.getBoundingClientRect();
        im.style.transform = `translate(${e.clientX - r.left + 24}px, ${e.clientY - r.top - 90}px)`;
      });
      list.querySelectorAll("[data-img]").forEach((row) => {
        row.addEventListener("pointerenter", () => { im.src = row.dataset.img; list.classList.add("is-hovering"); });
        row.addEventListener("pointerleave", () => list.classList.remove("is-hovering"));
      });
    });
  }

  S.start({
    transition: 720,
    chrome,
    routes: { home, about, structure, events, products, news, "news:detail": newsDetail },
    after: hoverImages
  });
})();
