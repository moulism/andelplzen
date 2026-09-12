/* Renders MENU (see menu-data.js) into #menu-dynamic on menu.html */
(function () {
  const root = document.getElementById("menu-dynamic");
  const jumpRoot = document.getElementById("menu-jump");
  if (!root || typeof MENU === "undefined") return;

  const IMG_BASE = "images/drinks/";
  const ICON_BASE = "images/placeholders/";

  function slug(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  MENU.forEach(section => {
    const id = slug(section.cat);

    if (jumpRoot) {
      const a = document.createElement("a");
      a.href = "#" + id;
      a.textContent = section.cat;
      jumpRoot.appendChild(a);
    }

    const sec = document.createElement("section");
    sec.className = "section-tight menu-category";
    sec.id = id;

    const h3 = document.createElement("h3");
    h3.setAttribute("data-animate", "");
    h3.textContent = section.cat;
    sec.appendChild(h3);

    const grid = document.createElement("div");
    grid.className = "menu-items";

    let currentGroup = null;

    section.items.forEach(item => {
      if (item.g && item.g !== currentGroup) {
        currentGroup = item.g;
        const gh = document.createElement("div");
        gh.className = "menu-group-label";
        gh.setAttribute("data-animate", "");
        gh.textContent = currentGroup;
        grid.appendChild(gh);
      }

      const row = document.createElement("div");
      row.className = "menu-item";
      row.setAttribute("data-animate", "");

      const thumb = document.createElement("div");
      thumb.className = "menu-item-thumb";
      const img = document.createElement("img");
      if (item.i) {
        img.src = IMG_BASE + item.i;
        img.alt = item.n;
        img.loading = "lazy";
      } else {
        img.src = ICON_BASE + (section.icon || "spirit") + ".svg";
        img.alt = "";
        img.className = "placeholder-icon";
      }
      thumb.appendChild(img);
      row.appendChild(thumb);

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

      row.appendChild(info);
      grid.appendChild(row);
    });

    sec.appendChild(grid);

    if (section.note) {
      const p = document.createElement("p");
      p.className = "menu-note";
      p.setAttribute("data-animate", "");
      p.textContent = section.note;
      sec.appendChild(p);
    }

    root.appendChild(sec);
  });

  /* These elements were added after animations.js already set up its
     IntersectionObserver, so give them their own. */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  root.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
})();
