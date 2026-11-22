/* Mockup 3 — Editorial Warm */
(function () {
  const S = window.Site, C = S.C, t = S.t, ui = S.ui, img = S.img, icon = S.icon;

  const L = {
    heroTitle: { id: "Perlindungan yang <em>tepat</em> untuk keluarga & bisnis Anda.", en: "The <em>right</em> protection for your family & business." },
    issue: { id: "Edisi Jakarta", en: "Jakarta Edition" },
    words: [{ id: "Profesional", en: "Professional" }, { id: "Transparan", en: "Transparent" }, { id: "Responsif", en: "Responsive" }, { id: "Kemitraan", en: "Partnership" }, { id: "Terpercaya", en: "Trusted" }],
    aboutT: { id: "Distribusi asuransi dengan <em>kejelasan</em> sebagai fondasi.", en: "Insurance distribution with <em>clarity</em> as its foundation." },
    prodT: { id: "Empat lini <em>perlindungan</em>.", en: "Four lines of <em>protection</em>." },
    svcT: { id: "Komitmen <em>layanan</em> kami.", en: "Our service <em>commitment</em>." },
    insT: { id: "Didukung <em>kekuatan</em> Zurich.", en: "Backed by Zurich's <em>strength</em>." },
    leadT: { id: "Dewan <em>Direksi</em>.", en: "Board of <em>Directors</em>." },
    evT: { id: "Agenda & <em>kegiatan</em>.", en: "Agenda & <em>activities</em>." },
    newsT: { id: "Catatan & <em>kabar</em>.", en: "Notes & <em>news</em>." },
    ctaT: { id: "Mari <em>berbicara</em>.", en: "Let's <em>talk</em>." },
    aboutH: { id: "Tentang <em>kami</em>.", en: "About <em>us</em>." },
    structH: { id: "Struktur <em>organisasi</em>.", en: "Organization <em>structure</em>." },
    evH: { id: "Event & <em>agenda</em>.", en: "Events & <em>agenda</em>." },
    prodH: { id: "Produk <em>perlindungan</em>.", en: "Protection <em>products</em>." },
    newsH: { id: "Berita & <em>wawasan</em>.", en: "News & <em>insights</em>." },
    vision: { id: "Visi", en: "Vision" }, mission: { id: "Misi", en: "Mission" },
    values: { id: "Nilai", en: "Values" }, journey: { id: "Perjalanan", en: "Journey" }, legal: { id: "Legalitas", en: "Legal" },
    tiers: [{ id: "Induk", en: "Parent" }, { id: "Perseroan", en: "Company" }, { id: "Pimpinan", en: "Leadership" }, { id: "Direksi", en: "Directors" }],
    est: { id: "Berdiri Desember 2025", en: "Established December 2025" },
    doc: { id: "Selesai", en: "Completed" },
    prev: { id: "Sebelumnya", en: "Previous" }, next: { id: "Berikutnya", en: "Next" },
    needs: [
      { id: "Perlindungan jiwa & pendidikan", en: "Life & education protection" },
      { id: "Asuransi pengangkutan barang", en: "Marine cargo insurance" },
      { id: "Asuransi aset & properti", en: "Property & asset insurance" },
      { id: "Lainnya", en: "Other" }
    ]
  };

  /* Split rich text (supports <em>) into masked words */
  function rich(str, cls, tag) {
    tag = tag || "h2";
    let i = 0;
    // keep original whitespace so punctuation right after <em> stays attached
    const out = str.split(/(<em>.*?<\/em>)/).map((chunk) => {
      const em = chunk.startsWith("<em>");
      return chunk.replace(/<\/?em>/g, "").split(/(\s+)/).map((tok) =>
        !tok ? "" : /^\s+$/.test(tok) ? " " : `<span class="sw"><span style="--i:${i++}"${em ? ' class="it"' : ""}>${tok}</span></span>`
      ).join("");
    }).join("");
    return `<${tag} class="${cls}" data-reveal="split" aria-label="${S.esc(str.replace(/<\/?em>/g, ""))}">${out}</${tag}>`;
  }
  const num = (n, label) => `<span class="num" data-reveal><b>(${String(n).padStart(2, "0")})</b>${label}</span>`;
  const arrowLink = (href, label) => `<a class="ulink" href="${href}"><span>${label}</span>${icon("arrow-right")}</a>`;
  const pname = (p) => t(p.name);
  const sortedNews = () => [...C.news].sort((a, b) => b.date.localeCompare(a.date));
  const newsKey = (n) => n.cat.en.toLowerCase();

  function pageHero(n, titleObj, navKey, image) {
    return `
    <section class="phero">
      <div class="wrap">
        <div class="phero__meta" data-reveal><span>${num(n, ui(navKey))}</span><span>PT Cakra Proteksi Indonesia</span></div>
        ${rich(t(titleObj), "display", "h1")}
      </div>
      <figure class="phero__img" data-progress><img src="${img(image)}" alt="" fetchpriority="high"></figure>
    </section>`;
  }

  const eventCard = (e) => {
    const up = S.isUpcoming(e.date);
    return `
    <article class="ev" data-cat="${up ? "upcoming" : "past"}">
      <figure class="ev__img"><img src="${img(e.img)}" alt="" loading="lazy"><span class="ev__stamp ${up ? "is-up" : ""}">${up ? ui("upcoming") : t(L.doc)}</span></figure>
      <div class="ev__date"><b>${S.dayOf(e.date)}</b><span>${S.fmtDate(e.date, { month: "long", year: "numeric" })}</span></div>
      <span class="ev__type">${t(e.type)}</span>
      <h3>${t(e.title)}</h3>
      <p class="ev__meta">${t(e.place)} · ${e.time}</p>
      ${up ? `<button type="button" class="ulink" data-scrollto="contact"><span>${ui("register")}</span>${icon("arrow-right")}</button>` : ""}
    </article>`;
  };

  const newsItem = (n, i, variant) => `
    <a href="#/news/${n.slug}" class="nw nw--${variant || "card"}" data-cat="${newsKey(n)}" data-reveal data-delay="${(i || 0) * 90}">
      <figure class="nw__img"><img src="${img(n.img)}" alt="" loading="lazy"></figure>
      <div class="nw__body">
        <span class="nw__meta">${t(n.cat)} — ${S.fmtDate(n.date)}</span>
        <h3>${t(n.title)}</h3>
        ${variant === "lead" ? `<p>${t(n.excerpt)}</p>` : ""}
      </div>
    </a>`;

  const accordion = () => `
    <div class="acc">
      ${C.services.map((s, i) => `
        <div class="acc__item ${i === 0 ? "is-open" : ""}" data-reveal data-delay="${i * 80}">
          <button type="button" class="acc__btn" aria-expanded="${i === 0}">
            <span class="acc__n">0${i + 1}</span><span class="acc__t">${t(s.title)}</span><span class="acc__pm" aria-hidden="true"></span>
          </button>
          <div class="acc__panel"><div><p>${t(s.text)}</p></div></div>
        </div>`).join("")}
    </div>`;

  const insurerBlock = () => `
    <div class="insg">
      ${C.insurers.map((x, i) => `
        <article class="insg__item" data-reveal data-delay="${i * 120}">
          <span class="insg__kind">${t(x.kind)}</span>
          <h3>${x.name}</h3>
          <div class="insg__row"><span class="insg__big" data-count="${x.rbc}" data-suffix="%">0%</span><small>${ui("solvency")}</small></div>
          <div class="insg__row"><span class="insg__mid">Rp${S.lang === "id" ? x.assets : x.assets_en}</span><small>${ui("total_assets")} (${ui("million")})</small></div>
          <p>${t(x.note)}</p>
        </article>`).join("")}
    </div>
    <p class="fine" data-reveal>${t(C.insurer_note)}</p>`;

  const people = () => `
    <ol class="people">
      ${C.management.map((m, i) => `
        <li class="person" data-reveal data-delay="${i * 90}">
          <span class="person__n">0${i + 1}</span>
          <span class="person__av hex">${S.avatar(m)}</span>
          <h3>${m.name}</h3>
          <span class="person__role">${t(m.role)}</span>
          <p>${t(m.bio)}</p>
        </li>`).join("")}
    </ol>`;

  /* ---------- Pages ---------- */
  function home() {
    const ups = C.events.filter((e) => S.isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date));
    const evs = [...ups, ...C.events.filter((e) => !S.isUpcoming(e.date))];
    const ns = sortedNews();
    return `
    <section class="hero">
      <div class="wrap">
        <div class="hero__meta" data-reveal>
          <span>${t(L.issue)} — ${S.fmtDate("2026-11-20", { month: "long", year: "numeric" })}</span>
          <span class="hero__eyebrow">${t(C.hero.eyebrow)}</span>
          <span>${t(L.est)}</span>
        </div>
        ${rich(t(L.heroTitle), "display display--hero", "h1")}
        <div class="hero__row">
          <p class="hero__lead" data-reveal data-delay="400">${t(C.hero.text)}</p>
          <div class="hero__cta" data-reveal data-delay="500">
            <a class="btn btn--ink" href="#/products" data-magnetic=".2"><span>${ui("explore_products")}</span>${icon("arrow-right")}</a>
            <button type="button" class="ulink" data-scrollto="contact"><span>${ui("consult")}</span>${icon("arrow-right")}</button>
          </div>
        </div>
      </div>
      <figure class="hero__img" data-progress>
        <img src="${img("family-sunset.jpg")}" alt="${t({ id: "Keluarga menikmati matahari terbenam di pantai", en: "A family enjoying a beach sunset" })}" fetchpriority="high">
        <figcaption class="hero__cap">
          <span class="hero__seal">${S.mark({ cls: "hero__mark" })}</span>
          <span><b>${t(C.about.authorization.title)}</b>${S.fmtDate(C.about.authorization.date)}</span>
        </figcaption>
      </figure>
    </section>

    <section class="ribbon" aria-hidden="true">
      <div class="marquee"><div class="marquee__track">${L.words.map((w) => `<span>${t(w)}</span><i>✦</i>`).join("")}</div><div class="marquee__track">${L.words.map((w) => `<span>${t(w)}</span><i>✦</i>`).join("")}</div></div>
    </section>

    <section class="sec">
      <div class="wrap ed">
        <aside class="ed__side">
          ${num(1, ui("nav_about"))}
          <figure class="ed__img" data-reveal="clip"><img src="${img("team-boardroom.jpg")}" alt="" loading="lazy"></figure>
        </aside>
        <div class="ed__main">
          ${rich(t(L.aboutT), "h2")}
          <p class="dropcap" data-reveal>${t(C.about.lead)}</p>
          <p class="muted" data-reveal>${t(C.about.body)}</p>
          <div class="facts" data-stagger="80">
            ${C.stats.map((s) => `<div class="fact" data-reveal><span data-count="${s.value}" data-suffix="${s.suffix}">0</span><small>${t(s.label)}</small></div>`).join("")}
          </div>
          ${arrowLink("#/about", ui("learn_more"))}
        </div>
      </div>
    </section>

    <section class="sec sec--paper2">
      <div class="wrap">
        <div class="head">${num(2, ui("nav_products"))}${rich(t(L.prodT), "h2")}</div>
        <div class="bento">
          ${C.products.map((p, i) => `
            <a href="#/products" class="tile tile--${i + 1}" data-reveal data-delay="${i * 100}">
              <img src="${img(p.img)}" alt="" loading="lazy">
              <span class="tile__code">${p.code}</span>
              <div class="tile__body">
                <span class="tile__cat">${ui(p.cat)}</span>
                <h3>${pname(p)}</h3>
                <p>${t(p.text)}</p>
              </div>
              <span class="tile__go">${icon("arrow-up-right")}</span>
            </a>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap split">
        <div>${num(3, t({ id: "Layanan", en: "Service" }))}${rich(t(L.svcT), "h2")}
          <p class="muted" data-reveal>${t({ id: "Membangun hubungan kerja sama melalui pelayanan profesional, transparan, dan responsif.", en: "Building partnerships through professional, transparent, and responsive service." })}</p></div>
        ${accordion()}
      </div>
    </section>

    <section class="sec sec--ink">
      <div class="wrap">
        <div class="head">${num(4, t({ id: "Penanggung", en: "Insurers" }))}${rich(t(L.insT), "h2")}</div>
        ${insurerBlock()}
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="head head--row"><div>${num(5, ui("board"))}${rich(t(L.leadT), "h2")}</div>${arrowLink("#/structure", ui("nav_structure"))}</div>
        ${people()}
      </div>
    </section>

    <section class="sec sec--paper2">
      <div class="wrap">
        <div class="head head--row"><div>${num(6, ui("nav_events"))}${rich(t(L.evT), "h2")}</div>
          <div class="car-nav"><button type="button" class="circ" data-car="-1" aria-label="${t(L.prev)}">${icon("arrow-left")}</button><button type="button" class="circ" data-car="1" aria-label="${t(L.next)}">${icon("arrow-right")}</button></div></div>
      </div>
      <div class="car" data-carousel tabindex="0">${evs.map(eventCard).join("")}</div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="head head--row"><div>${num(7, ui("nav_news"))}${rich(t(L.newsT), "h2")}</div>${arrowLink("#/news", ui("see_all"))}</div>
        <div class="mag">
          ${newsItem(ns[0], 0, "lead")}
          <div class="mag__list">${ns.slice(1, 4).map((n, i) => newsItem(n, i + 1, "row")).join("")}</div>
        </div>
      </div>
    </section>

    <section class="clients">
      <div class="wrap"><p class="clients__label" data-reveal>${ui("clients")}</p></div>
      <div class="marquee">${[0, 1].map((k) => `<div class="marquee__track"${k ? ' aria-hidden="true"' : ""}>${C.clients.map((c) => `<span>${c}</span><i>${S.mark({ cls: "cl-mark" })}</i>`).join("")}</div>`).join("")}</div>
    </section>`;
  }

  function about() {
    return `
    ${pageHero(1, L.aboutH, "nav_about", "board-meeting.jpg")}
    <section class="sec">
      <div class="wrap ed">
        <aside class="ed__side">${num(1, t(C.about.title))}</aside>
        <div class="ed__main">
          <p class="lead-serif" data-reveal>${t(C.about.lead)}</p>
          <p class="muted" data-reveal>${t(C.about.body)}</p>
          <div class="stamp" data-reveal>
            <span class="stamp__date">${S.fmtDate(C.about.authorization.date)}</span>
            <b>${t(C.about.authorization.title)}</b>
            <span>${t(C.about.authorization.text)}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="sec sec--ink">
      <div class="wrap">
        ${num(2, t(L.vision))}
        <blockquote class="pull" data-reveal>“${t(C.about.vision)}”</blockquote>
      </div>
    </section>

    <section class="sec">
      <div class="wrap split">
        <div>${num(3, t(L.mission))}${rich(t({ id: "Empat <em>misi</em> kami.", en: "Our four <em>missions</em>." }), "h2")}</div>
        <ol class="mlist">${C.about.mission.map((m, i) => `<li data-reveal data-delay="${i * 80}"><span>${String(i + 1).padStart(2, "0")}</span><p>${t(m)}</p></li>`).join("")}</ol>
      </div>
    </section>

    <section class="sec sec--paper2">
      <div class="wrap">
        <div class="head">${num(4, t(L.values))}${rich(t({ id: "Nilai yang <em>menuntun</em>.", en: "Values that <em>guide</em> us." }), "h2")}</div>
        <div class="vals">${C.about.values.map((v, i) => `<article class="val" data-reveal data-delay="${i * 90}"><span class="val__n">${["I", "II", "III", "IV"][i]}</span><span class="val__ic">${icon(v.icon)}</span><h3>${t(v.title)}</h3><p>${t(v.text)}</p></article>`).join("")}</div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="head">${num(5, t(L.journey))}${rich(t({ id: "Tonggak <em>perjalanan</em>.", en: "Our <em>milestones</em>." }), "h2")}</div>
        <div class="htl" data-progress>
          <span class="htl__bar"><i></i></span>
          ${C.milestones.map((m, i) => `<div class="htl__item" data-reveal data-delay="${i * 120}"><span class="htl__yr">${S.fmtDate(m.date, { day: "2-digit", month: "short", year: "numeric" })}</span><h3>${t(m.title)}</h3><p>${t(m.text)}</p></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="sec sec--paper2">
      <div class="wrap split">
        <div>${num(6, t(L.legal))}${rich(t({ id: "Identitas & <em>legalitas</em>.", en: "Identity & <em>legal</em>." }), "h2")}<p class="fine" data-reveal>${t(C.company.disclaimer)}</p></div>
        <dl class="dots">${C.legal.map((l, i) => `<div data-reveal data-delay="${i * 60}"><dt>${t(l.label)}</dt><dd>${t(l.value)}</dd></div>`).join("")}</dl>
      </div>
    </section>

    <section class="sec">
      <div class="wrap split">
        <div>${num(7, ui("partners"))}${rich(t({ id: "Klien & <em>mitra</em>.", en: "Clients & <em>partners</em>." }), "h2")}
          <ul class="partners">${C.partners.map((p) => `<li data-reveal>${S.mark({ cls: "cl-mark" })}${p}</li>`).join("")}</ul></div>
        <ol class="clist">${C.clients.map((c, i) => `<li data-reveal data-delay="${i * 50}"><span>${String(i + 1).padStart(2, "0")}</span>${c}</li>`).join("")}</ol>
      </div>
    </section>`;
  }

  function structure() {
    const [lead, ...dirs] = C.management;
    const card = (m, d) => `<div class="onode" data-reveal data-delay="${d}"><span class="person__av hex">${S.avatar(m)}</span><div><b>${m.name}</b><small>${t(m.role)}</small></div></div>`;
    return `
    ${pageHero(2, L.structH, "nav_structure", "real/team-office.jpg")}
    <section class="sec">
      <div class="wrap">
        <p class="lead-serif center" data-reveal>${t({ id: "CPI merupakan anak perusahaan PT Multi Integrasi Bisnis (MIB). Pengelolaan perusahaan dijalankan oleh Dewan Direksi.", en: "CPI is a subsidiary of PT Multi Integrasi Bisnis (MIB). The company is run by its Board of Directors." })}</p>
        <div class="tiers" data-progress>
          <span class="tiers__spine"><i></i></span>
          <div class="tier"><span class="tier__lbl" data-reveal>I — ${t(L.tiers[0])}</span><div class="tier__nodes"><div class="onode onode--soft" data-reveal><span class="onode__ic">${icon("landmark")}</span><div><b>${C.company.parent}</b><small>${ui("parent_company")}</small></div></div></div></div>
          <div class="tier"><span class="tier__lbl" data-reveal>II — ${t(L.tiers[1])}</span><div class="tier__nodes"><div class="onode onode--ink" data-reveal data-delay="100">${S.mark({ cls: "onode__mark", blue: "#5AA3E6" })}<div><b>${C.company.name}</b><small>${C.company.short}</small></div></div></div></div>
          <div class="tier"><span class="tier__lbl" data-reveal>III — ${t(L.tiers[2])}</span><div class="tier__nodes">${card(lead, 200).replace('class="onode"', 'class="onode onode--lead"')}</div></div>
          <div class="tier"><span class="tier__lbl" data-reveal>IV — ${t(L.tiers[3])}</span><div class="tier__nodes tier__nodes--3">${dirs.map((d, i) => card(d, 300 + i * 100)).join("")}</div></div>
        </div>
      </div>
    </section>
    <section class="sec sec--paper2">
      <div class="wrap">
        <div class="head">${num(2, ui("board"))}${rich(t(L.leadT), "h2")}</div>
        <figure class="wide" data-reveal="clip"><img src="${img("real/team-office.jpg")}" alt="" loading="lazy"></figure>
        ${people()}
      </div>
    </section>`;
  }

  function events() {
    const list = [...C.events].sort((a, b) => b.date.localeCompare(a.date));
    const groups = {};
    list.forEach((e) => { const k = e.date.slice(0, 7); (groups[k] = groups[k] || []).push(e); });
    return `
    ${pageHero(3, L.evH, "nav_events", "team-rooftop.jpg")}
    <section class="sec">
      <div class="wrap">
        <div class="tabs" data-filter-group="#evCal" role="group" data-reveal>
          <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
          <button type="button" data-filter="upcoming" aria-pressed="false">${ui("upcoming")}</button>
          <button type="button" data-filter="past" aria-pressed="false">${ui("past")}</button>
        </div>
        <div class="cal" id="evCal">
          ${list.map((e, i) => {
            const up = S.isUpcoming(e.date);
            return `<article class="cal__row" data-cat="${up ? "upcoming" : "past"}" data-reveal data-delay="${(i % 4) * 70}">
              <div class="cal__date"><b>${S.dayOf(e.date)}</b><span>${S.fmtDate(e.date, { month: "long", year: "numeric" })}</span></div>
              <figure class="cal__img"><img src="${img(e.img)}" alt="" loading="lazy"></figure>
              <div class="cal__body"><span class="ev__type">${t(e.type)} · ${up ? ui("upcoming") : t(L.doc)}</span><h3>${t(e.title)}</h3><p>${t(e.text)}</p><p class="ev__meta">${icon("map-pin")}${t(e.place)} · ${icon("clock")}${e.time}</p></div>
              <div class="cal__act">${up ? `<button type="button" class="btn btn--ink btn--sm" data-scrollto="contact"><span>${ui("register")}</span>${icon("arrow-right")}</button>` : `<span class="cal__done">${icon("check")}${t(L.doc)}</span>`}</div>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>`;
  }

  function products() {
    return `
    ${pageHero(4, L.prodH, "nav_products", "family-joy.jpg")}
    <section class="sec">
      <div class="wrap catalog">
        <aside class="catalog__nav">
          <span class="num">${t({ id: "Daftar produk", en: "Product index" })}</span>
          <ol>${C.products.map((p, i) => `<li><a href="#/products" data-jump="p-${p.slug}"><span>0${i + 1}</span>${pname(p)}</a></li>`).join("")}</ol>
          <button type="button" class="btn btn--ink btn--block" data-scrollto="contact"><span>${ui("consult")}</span>${icon("arrow-right")}</button>
        </aside>
        <div class="catalog__main">
          ${C.products.map((p, i) => `
            <article class="spec" id="p-${p.slug}">
              <div class="spec__top" data-reveal><span class="spec__n">0${i + 1}</span><span class="spec__cat">${ui(p.cat)}</span><span class="spec__code">${p.code}</span></div>
              ${rich(pname(p), "h2")}
              <figure class="spec__img" data-reveal="clip"><img src="${img(p.img)}" alt="" loading="lazy"></figure>
              <div class="spec__cols">
                <p class="lead-serif lead-serif--sm" data-reveal>${t(p.text)}</p>
                <dl class="spec__dl" data-reveal>
                  <div><dt>${t({ id: "Jenis", en: "Type" })}</dt><dd>${t(p.type)}</dd></div>
                  <div><dt>${ui("insurer")}</dt><dd>${p.insurer}</dd></div>
                  <div><dt>${ui("key_benefits")}</dt><dd><ul>${p.benefits.map((b) => `<li>${icon("check")}${t(b)}</li>`).join("")}</ul></dd></div>
                </dl>
              </div>
            </article>`).join("")}
          <p class="fine" data-reveal>${t(C.product_note)}</p>
        </div>
      </div>
    </section>
    <section class="sec sec--ink">
      <div class="wrap">
        <div class="head">${num(5, t({ id: "Penanggung", en: "Insurers" }))}${rich(t(L.insT), "h2")}</div>
        ${insurerBlock()}
      </div>
    </section>`;
  }

  function news() {
    const all = sortedNews();
    const cats = [...new Map(all.map((n) => [newsKey(n), n.cat])).entries()];
    return `
    ${pageHero(5, L.newsH, "nav_news", "partnership-handshake.jpg")}
    <section class="sec">
      <div class="wrap">
        <div class="mag mag--page">${newsItem(all[0], 0, "lead")}<div class="mag__list">${all.slice(1, 3).map((n, i) => newsItem(n, i + 1, "row")).join("")}</div></div>
        <div class="tabs tabs--mt" data-filter-group="#nwGrid" role="group" data-reveal>
          <button type="button" class="is-active" data-filter="all" aria-pressed="true">${ui("all")}</button>
          ${cats.map(([k, c]) => `<button type="button" data-filter="${k}" aria-pressed="false">${t(c)}</button>`).join("")}
        </div>
        <div class="ngrid" id="nwGrid">${all.map((n, i) => newsItem(n, i % 3, "card")).join("")}</div>
      </div>
    </section>`;
  }

  function newsDetail(slug) {
    const n = C.news.find((x) => x.slug === slug);
    if (!n) return news();
    const more = sortedNews().filter((x) => x.slug !== slug).slice(0, 3);
    const [first, ...rest] = n.body;
    return {
      title: t(n.title),
      html: `
      <article class="article">
        <div class="wrap wrap--narrow">
          <a href="#/news" class="ulink ulink--back" data-reveal>${icon("arrow-left")}<span>${ui("back")}</span></a>
          <p class="nw__meta article__meta" data-reveal>${t(n.cat)} — ${S.fmtDate(n.date)} · ${n.read} ${ui("min_read")}</p>
          ${rich(t(n.title), "display display--art", "h1")}
          <p class="lead-serif" data-reveal>${t(n.excerpt)}</p>
        </div>
        <figure class="article__img" data-progress><img src="${img(n.img)}" alt=""></figure>
        <div class="wrap wrap--narrow article__body">
          <p class="dropcap" data-reveal>${t(first)}</p>
          ${rest.length ? `<blockquote class="pull pull--sm" data-reveal>“${t(n.excerpt)}”</blockquote>` : ""}
          ${rest.map((p) => `<p data-reveal>${t(p)}</p>`).join("")}
        </div>
      </article>
      <section class="sec sec--paper2">
        <div class="wrap">
          <div class="head">${num(0, ui("related_news"))}</div>
          <div class="ngrid">${more.map((m, i) => newsItem(m, i, "card")).join("")}</div>
        </div>
      </section>`
    };
  }

  /* ---------- Chrome ---------- */
  function chrome() {
    document.querySelector('[data-slot="logo"]').innerHTML = S.logo({ cls: "logo--hdr" });
    document.querySelector('[data-slot="mmenu"]').innerHTML = `
      <nav aria-label="Mobile">${S.NAV.map(([r, k], i) => `<a href="#/${r === "home" ? "" : r}" data-route="${r}"><span>0${i + 1}</span>${ui(k)}</a>`).join("")}</nav>
      <div class="mmenu__foot"><div class="lang" role="group" aria-label="Language"><button type="button" data-lang="id" class="${S.lang === "id" ? "is-active" : ""}">Indonesia</button><span>/</span><button type="button" data-lang="en" class="${S.lang === "en" ? "is-active" : ""}">English</button></div><a href="mailto:${C.company.emails[0]}">${C.company.emails[0]}</a></div>`;
    document.getElementById("footer").innerHTML = `
    <section class="cta" id="contact" tabindex="-1">
      <div class="wrap">
        <div class="cta__top">
          ${num(8, ui("contact_us"))}
          ${rich(t(L.ctaT), "display display--cta")}
          <a class="cta__mail" href="mailto:${C.company.emails[0]}" data-reveal>${C.company.emails[0]}${icon("arrow-up-right")}</a>
        </div>
        <div class="cta__grid">
          <div class="cta__info" data-stagger="80">
            <p data-reveal>${ui("cta_text")}</p>
            <div data-reveal><small>${ui("office")}</small>${C.company.address.join("<br>")}</div>
            <div data-reveal><small>${ui("claims_hotline")}</small><a href="tel:1500456">${C.company.hotline}</a></div>
          </div>
          <form class="form" data-mock data-reveal novalidate>
            <div class="field"><label for="m3-name">${ui("form_name")}</label><input id="m3-name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="m3-email">${ui("form_email")}</label><input id="m3-email" name="email" type="email" autocomplete="email" required></div>
            <div class="field field--full"><label for="m3-need">${ui("form_need")}</label><select id="m3-need" name="need">${L.needs.map((n) => `<option>${t(n)}</option>`).join("")}</select></div>
            <div class="field field--full"><label for="m3-msg">${ui("form_msg")}</label><textarea id="m3-msg" name="msg" rows="3"></textarea></div>
            <button type="submit" class="btn btn--orange"><span>${ui("form_send")}</span>${icon("send")}</button>
          </form>
        </div>
      </div>
    </section>
    <div class="foot">
      <div class="wrap foot__grid">
        <div>${S.logo({ cls: "logo--foot" })}<p>${t(C.company.tagline)}</p></div>
        <nav>${S.NAV.map(([r, k], i) => `<a href="#/${r === "home" ? "" : r}"><span>0${i + 1}</span>${ui(k)}</a>`).join("")}</nav>
        <div><small>${ui("email")}</small>${C.company.emails.map((e) => `<a href="mailto:${e}">${e}</a>`).join("")}</div>
      </div>
      <div class="wrap foot__legal"><p>${t(C.company.disclaimer)}</p><p>© 2026 ${C.company.name}. ${ui("footer_rights")}</p></div>
    </div>`;
  }

  /* ---------- Page behaviours ---------- */
  function after() {
    const app = document.getElementById("app");
    // accordion
    app.querySelectorAll(".acc__btn").forEach((b) => b.addEventListener("click", () => {
      const item = b.closest(".acc__item");
      const open = !item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".acc__item").forEach((x) => { x.classList.remove("is-open"); x.querySelector(".acc__btn").setAttribute("aria-expanded", "false"); });
      if (open) { item.classList.add("is-open"); b.setAttribute("aria-expanded", "true"); }
    }));
    // carousel
    const car = app.querySelector("[data-carousel]");
    if (car) app.querySelectorAll("[data-car]").forEach((b) => b.addEventListener("click", () => {
      const card = car.querySelector(".ev");
      car.scrollBy({ left: (card ? card.offsetWidth + 24 : 320) * +b.dataset.car, behavior: "smooth" });
    }));
    // product index jump
    app.querySelectorAll("[data-jump]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const el = document.getElementById(a.dataset.jump);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 110, behavior: "smooth" });
    }));
  }

  S.start({
    transition: 460,
    chrome,
    routes: { home, about, structure, events, products, news, "news:detail": newsDetail },
    after
  });
})();
