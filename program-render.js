/* Program Music Clubu na music-club.html (#program-dynamic).
   Data zadávají správci v admin.html (záložka Program) — tabulka web_program_months.
   Na webu se ukazují jen zveřejněné měsíce, a to aktuální a budoucí; pokud je jich víc,
   nad programem se zobrazí přepínač měsíců.
   Když databáze neodpoví, použije se záloha z events-data.js. */
(function () {
  const root = document.getElementById("program-dynamic");
  if (!root) return;

  const monthNames = ["leden","únor","březen","duben","květen","červen",
    "červenec","srpen","září","říjen","listopad","prosinec"];
  const monthTitles = ["Leden","Únor","Březen","Duben","Květen","Červen",
    "Červenec","Srpen","Září","Říjen","Listopad","Prosinec"];

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function todayStr() {
    return (window.AndelWeb ? AndelWeb.today() : new Date().toISOString().slice(0, 10));
  }
  function monthLabel(key) {
    const p = key.split("-");
    return monthTitles[parseInt(p[1], 10) - 1] + " " + p[0];
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
  }, { threshold: 0.08 });

  function eventCard(ev, today) {
    const d = new Date(ev.date + "T00:00:00");
    const card = el("div", "program-card");
    if (ev.date < today) card.classList.add("is-past");
    card.setAttribute("data-animate", "");

    const dateBox = el("div", "program-date");
    dateBox.appendChild(el("span", "program-day", String(d.getDate())));
    dateBox.appendChild(el("span", "program-month", monthNames[d.getMonth()]));
    card.appendChild(dateBox);

    const body = el("div", "program-body");
    const titleRow = el("div", "program-title-row");
    titleRow.appendChild(el("h4", null, ev.title));
    if (ev.time) titleRow.appendChild(el("span", "program-time", ev.time));
    body.appendChild(titleRow);

    const meta = [];
    if (ev.place) meta.push(ev.place);
    if (ev.price) meta.push(ev.price);
    if (meta.length) body.appendChild(el("p", "program-meta", meta.join(" · ")));
    if (ev.desc) body.appendChild(el("p", "program-desc", ev.desc));
    if (ev.tickets) {
      const a = el("a", "program-btn", "Koupit vstupenku");
      a.href = "#vstupenky";
      body.appendChild(a);
    }
    card.appendChild(body);
    return card;
  }

  let months = [];   // [{ month, label, events }]
  let current = null;

  function renderMonth(key) {
    current = key;
    const m = months.find(x => x.month === key);
    const today = todayStr();
    const box = document.getElementById("program-month-box");
    box.innerHTML = "";
    document.querySelectorAll("#program-switch button").forEach(b => b.classList.toggle("active", b.dataset.m === key));

    const heading = el("h3", null, m.label || ("PROGRAM — " + monthLabel(key).toUpperCase()));
    heading.setAttribute("data-animate", "");
    box.appendChild(heading);

    const evs = (m.events || []).filter(e => e && e.date && e.title).slice().sort((a, b) => (a.date + (a.time || "")).localeCompare(b.date + (b.time || "")));
    if (!evs.length) {
      const p = el("p", "menu-note", "Program na tento měsíc se právě připravuje.");
      p.setAttribute("data-animate", "");
      box.appendChild(p);
    } else {
      const list = el("div", "program-list");
      evs.forEach(ev => list.appendChild(eventCard(ev, today)));
      box.appendChild(list);
    }
    box.querySelectorAll("[data-animate]").forEach(x => observer.observe(x));
  }

  function render() {
    root.innerHTML = "";
    if (!months.length) {
      const p = el("p", "menu-note", "Program se právě připravuje — sledujte nás na Facebooku „Anděl Music Bar Plzeň“.");
      root.appendChild(p);
      return;
    }
    if (months.length > 1) {
      const sw = el("div", "menu-switch program-switch");
      sw.id = "program-switch";
      sw.setAttribute("aria-label", "Program podle měsíců");
      sw.appendChild(el("span", null, "Měsíc:"));
      months.forEach(m => {
        const b = el("button", null, monthLabel(m.month));
        b.type = "button";
        b.dataset.m = m.month;
        b.addEventListener("click", () => renderMonth(m.month));
        sw.appendChild(b);
      });
      root.appendChild(sw);
    }
    root.appendChild(Object.assign(el("div"), { id: "program-month-box" }));
    const thisMonth = todayStr().slice(0, 7);
    renderMonth((months.find(m => m.month === thisMonth) || months[0]).month);
  }

  /* záloha ze souboru events-data.js */
  function fallback() {
    if (typeof EVENTS === "undefined") return [];
    const thisMonth = todayStr().slice(0, 7);
    const keys = Object.keys(EVENTS).sort();
    let use = keys.filter(k => k >= thisMonth);
    if (!use.length && keys.length) use = [keys[keys.length - 1]];
    return use.map(k => ({ month: k, label: EVENTS[k].label, events: EVENTS[k].events }));
  }

  async function load() {
    root.innerHTML = "";
    root.appendChild(el("p", "menu-note", "Načítám program…"));
    const thisMonth = todayStr().slice(0, 7);
    let rows = null;
    if (window.AndelWeb) {
      rows = await AndelWeb.rest("web_program_months?select=month,label,events&published=eq.true&month=gte." + thisMonth + "&order=month.asc");
    }
    months = rows === null ? fallback() : rows;
    render();
  }

  load();
})();
