/* Týdenní menu — zobrazí aktuálně platné a nadcházející týdenní menu zvoleného prostoru.
   Data zadávají správci v admin.html. */
(function () {
  const root = document.getElementById("weekly-root");
  if (!root) return;
  const VENUES = { bistro: "Bistro" };
  const venue = "bistro";

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function fmt(d) {
    const p = d.split("-");
    return parseInt(p[2], 10) + ". " + parseInt(p[1], 10) + ".";
  }
  function safeUrl(u) {
    return /^https:\/\//.test(u || "") ? u : "";
  }

  function renderMenu(m, upcoming) {
    const box = el("article", "weekly-card" + (upcoming ? " is-upcoming" : ""));
    const head = el("div", "weekly-head");
    head.appendChild(el("h3", null, m.title || "Týdenní menu"));
    head.appendChild(el("span", "weekly-dates", fmt(m.valid_from) + " – " + fmt(m.valid_to) + (upcoming ? " · připravujeme" : "")));
    box.appendChild(head);

    const items = Array.isArray(m.items) ? m.items : [];
    if (items.length) {
      const list = el("div", "menu-items is-list weekly-list");
      items.forEach(it => {
        if (!it || !it.n) return;
        const card = el("div", "menu-item" + (it.i ? "" : " menu-item--nophoto"));
        if (it.i && safeUrl(it.i)) {
          const th = el("div", "menu-item-thumb");
          const img = document.createElement("img");
          img.src = it.i; img.alt = it.n; img.loading = "lazy";
          th.appendChild(img);
          card.appendChild(th);
        }
        const info = el("div", "menu-item-info");
        const row = el("div", "menu-item-name");
        row.appendChild(el("span", null, it.n));
        if (it.p) row.appendChild(el("span", "menu-item-price", it.p));
        info.appendChild(row);
        if (it.d) info.appendChild(el("div", "menu-item-desc", it.d));
        card.appendChild(info);
        list.appendChild(card);
      });
      box.appendChild(list);
    }
    if (m.file_url && safeUrl(m.file_url)) {
      if (/\.pdf($|\?)/i.test(m.file_url)) {
        const a = el("a", "weekly-file", "Stáhnout menu (PDF) →");
        a.href = m.file_url; a.target = "_blank"; a.rel = "noopener";
        box.appendChild(a);
      } else {
        const img = document.createElement("img");
        img.className = "weekly-image"; img.src = m.file_url; img.alt = m.title || "Týdenní menu"; img.loading = "lazy";
        box.appendChild(img);
      }
    }
    if (m.note) box.appendChild(el("p", "menu-note", m.note));
    return box;
  }

  async function load() {
    root.innerHTML = "";
    root.appendChild(el("p", "weekly-empty", "Načítám týdenní menu…"));
    const t = AndelWeb.today();
    const rows = await AndelWeb.rest(
      "web_weekly_menus?select=*&published=eq.true&venue=eq." + venue +
      "&valid_to=gte." + t + "&order=valid_from.asc"
    );
    root.innerHTML = "";
    if (rows === null) {
      root.appendChild(el("p", "weekly-empty", "Týdenní menu se teď nepodařilo načíst. Zkuste to prosím za chvíli."));
    } else if (!rows.length) {
      root.appendChild(el("p", "weekly-empty", "Týdenní menu zatím není zveřejněné. Sledujte nás na sociálních sítích, ať vám nic neuteče."));
    } else {
      rows.forEach(m => root.appendChild(renderMenu(m, m.valid_from > t)));
    }
  }

  const h = document.getElementById("weekly-title");
  if (h) h.textContent = "Týdenní menu " + VENUES[venue];
  load();
})();
