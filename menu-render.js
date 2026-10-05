/* Renders the menu of one venue (MENUS[<body data-menu>] from menu-data.js)
   into #menu-dynamic as a tabbed interface — one category visible at a time,
   switched via the tab bar in #menu-tabs, so the page never turns into one
   giant scroll.

   Items with a photo (i) are shown as cards with the photo; items without a
   photo have no placeholder image at all — they are shown as a compact
   two-column price list below the photo cards (within the same group). */
(function () {
  const root = document.getElementById("menu-dynamic");
  const tabsRoot = document.getElementById("menu-tabs");
  if (!root || typeof MENUS === "undefined") return;

  const venue = (document.body.dataset.menu || "cafe");
  const data = MENUS[venue];
  if (!data) return;

  const IMG_BASE = "images/drinks/";

  function slug(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  const sections = [];

  data.menu.forEach(section => {
    const id = slug(section.cat);

    const sec = document.createElement("section");
    sec.className = "menu-category";
    sec.id = id;

    const h3 = document.createElement("h3");
    h3.textContent = section.cat;
    sec.appendChild(h3);

    /* rozdělení do skupin (podnadpisů) */
    const groups = [];
    section.items.forEach(item => {
      const label = item.g || null;
      let gr = groups[groups.length - 1];
      if (!gr || gr.label !== label) {
        gr = { label, items: [] };
        groups.push(gr);
      }
      gr.items.push(item);
    });

    function buildCard(item) {
      const card = document.createElement("div");
      card.className = "menu-item" + (item.i ? "" : " menu-item--nophoto");

      if (item.i) {
        const thumb = document.createElement("div");
        thumb.className = "menu-item-thumb";
        const img = document.createElement("img");
        img.src = IMG_BASE + item.i;
        img.alt = item.n;
        img.loading = "lazy";
        thumb.appendChild(img);
        card.appendChild(thumb);
      }

      const info = document.createElement("div");
      info.className = "menu-item-info";

      const nameRow = document.createElement("div");
      nameRow.className = "menu-item-name";
      const nameSpan = document.createElement("span");
      nameSpan.textContent = item.n + (item.s ? ` (${item.s})` : "");
      nameRow.appendChild(nameSpan);
      if (item.p) {
        const priceSpan = document.createElement("span");
        priceSpan.className = "menu-item-price";
        priceSpan.textContent = item.p;
        nameRow.appendChild(priceSpan);
      }
      info.appendChild(nameRow);

      if (item.d) {
        const desc = document.createElement("div");
        desc.className = "menu-item-desc";
        desc.textContent = item.d;
        info.appendChild(desc);
      }

      card.appendChild(info);
      return card;
    }

    function buildLabel(text) {
      const gh = document.createElement("div");
      gh.className = "menu-group-label";
      gh.textContent = text;
      return gh;
    }

    groups.forEach(gr => {
      const withPhoto = gr.items.filter(i => i.i);
      const noPhoto = gr.items.filter(i => !i.i);

      if (withPhoto.length) {
        const grid = document.createElement("div");
        grid.className = "menu-items";
        if (gr.label) grid.appendChild(buildLabel(gr.label));
        withPhoto.forEach(i => grid.appendChild(buildCard(i)));
        sec.appendChild(grid);
      }
      if (noPhoto.length) {
        const list = document.createElement("div");
        list.className = "menu-items is-list";
        if (gr.label && !withPhoto.length) list.appendChild(buildLabel(gr.label));
        noPhoto.forEach(i => list.appendChild(buildCard(i)));
        sec.appendChild(list);
      }
    });

    if (section.note) {
      const p = document.createElement("p");
      p.className = "menu-note";
      p.textContent = section.note;
      sec.appendChild(p);
    }

    root.appendChild(sec);
    sections.push({ id, cat: section.cat, el: sec });
  });

  /* ---- tabs ---- */
  function setActive(id) {
    sections.forEach(s => {
      const isActive = s.id === id;
      s.el.classList.toggle("is-active", isActive);
    });
    if (tabsRoot) {
      tabsRoot.querySelectorAll("button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.target === id);
      });
    }
  }

  if (tabsRoot) {
    sections.forEach(s => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = s.cat;
      btn.dataset.target = s.id;
      btn.addEventListener("click", () => {
        setActive(s.id);
        history.replaceState(null, "", "#" + s.id);
        root.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      tabsRoot.appendChild(btn);
    });
  }

  const initial = sections.find(s => s.id === location.hash.slice(1));
  setActive(initial ? initial.id : sections[0].id);
})();
