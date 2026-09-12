/* Renders MENU (see menu-data.js) into #menu-dynamic on menu.html as a
   tabbed interface — one category visible at a time, switched via the
   tab bar in #menu-tabs, so the page never turns into one giant scroll. */
(function () {
  const root = document.getElementById("menu-dynamic");
  const tabsRoot = document.getElementById("menu-tabs");
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

  const sections = [];

  MENU.forEach(section => {
    const id = slug(section.cat);

    const sec = document.createElement("section");
    sec.className = "menu-category";
    sec.id = id;

    const h3 = document.createElement("h3");
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
        gh.textContent = currentGroup;
        grid.appendChild(gh);
      }

      const card = document.createElement("div");
      card.className = "menu-item";

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
        img.loading = "lazy";
      }
      thumb.appendChild(img);
      card.appendChild(thumb);

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
      grid.appendChild(card);
    });

    sec.appendChild(grid);

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
