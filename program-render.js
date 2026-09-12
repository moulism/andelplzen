/* Renders the current month's program (see events-data.js) into
   #program-dynamic on music-club.html. Picks the EVENTS key matching
   today's month; if that month isn't filled in yet, falls back to the
   most recently prepared month so the section is never empty. */
(function () {
  const root = document.getElementById("program-dynamic");
  if (!root || typeof EVENTS === "undefined") return;

  const monthNames = ["leden","únor","březen","duben","květen","červen",
    "červenec","srpen","září","říjen","listopad","prosinec"];

  const now = new Date();
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const keys = Object.keys(EVENTS).sort();
  const monthData = EVENTS[key] || EVENTS[keys[keys.length - 1]];

  if (!monthData || !monthData.events || !monthData.events.length) {
    root.innerHTML = '<p class="menu-note" data-animate>Program se právě připravuje — sledujte nás na Facebooku „Anděl Music Bar Plzeň“.</p>';
    return;
  }

  const heading = document.createElement("h3");
  heading.setAttribute("data-animate", "");
  heading.textContent = monthData.label;
  root.appendChild(heading);

  const list = document.createElement("div");
  list.className = "program-list";

  monthData.events.forEach(ev => {
    const d = new Date(ev.date + "T00:00:00");
    const dayNum = d.getDate();
    const monthLabel = monthNames[d.getMonth()];

    const card = document.createElement("div");
    card.className = "program-card";
    card.setAttribute("data-animate", "");

    const dateBox = document.createElement("div");
    dateBox.className = "program-date";
    dateBox.innerHTML = `<span class="program-day">${dayNum}</span><span class="program-month">${monthLabel}</span>`;
    card.appendChild(dateBox);

    const body = document.createElement("div");
    body.className = "program-body";

    const titleRow = document.createElement("div");
    titleRow.className = "program-title-row";
    const title = document.createElement("h4");
    title.textContent = ev.title;
    titleRow.appendChild(title);
    if (ev.time) {
      const time = document.createElement("span");
      time.className = "program-time";
      time.textContent = ev.time;
      titleRow.appendChild(time);
    }
    body.appendChild(titleRow);

    const meta = [];
    if (ev.place) meta.push(ev.place);
    if (ev.price) meta.push(ev.price);
    if (meta.length) {
      const metaP = document.createElement("p");
      metaP.className = "program-meta";
      metaP.textContent = meta.join(" · ");
      body.appendChild(metaP);
    }

    if (ev.desc) {
      const desc = document.createElement("p");
      desc.className = "program-desc";
      desc.textContent = ev.desc;
      body.appendChild(desc);
    }

    card.appendChild(body);
    list.appendChild(card);
  });

  root.appendChild(list);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.08 });

  root.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
})();
