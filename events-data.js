/* ==========================================================================
   Anděl Music Bar — program
   -----------------------------------------------------------------------
   Program se aktualizuje každý měsíc: přidej nový klíč "YYYY-MM" s polem
   akcí a stránka ho zobrazí automaticky, jakmile začne daný měsíc.
   Pokud aktuální měsíc ještě není vyplněný, zobrazí se poslední připravený
   program (ať stránka nikdy není prázdná).

   Jedna akce: { date:"YYYY-MM-DD", title, time, price, place, desc }
   - price a place jsou nepovinné.
   ========================================================================== */

const EVENTS = {

  "2026-09": {
    label: "PROGRAM — ZÁŘÍ 2026",
    events: [
      {
        date: "2026-09-03", title: "Fortel", time: "19:00", price: "dobrovolné",
        place: "venkovní dvorek Anděl",
        desc: "Kapela Fortel jde za svými fanoušky stejně jako pomyslná hora za Mohamedem. Přijďte si poslechnout svou oblíbenou dávku hudebně recyklačního zážitku v podání věhlasné kapely Fortel!"
      },
      {
        date: "2026-09-07", title: "Na kvíz", time: "19:00", price: "120 Kč na místě",
        desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz."
      },
      {
        date: "2026-09-09", title: "Na kvíz speciál: Přátelé", time: "19:00", price: "120 Kč na místě",
        desc: "Kvízy v Andělu tentokrát dostávají speciální podobu! Připravili jsme večer věnovaný jednomu z nejslavnějších sitcomů všech dob – Přátelům."
      },
      {
        date: "2026-09-10", title: "Jirka Čevela s kapelou", time: "19:30", price: "220 Kč předprodej / 250 Kč na místě",
        desc: "Jirka Čevela je zakladatel a současný frontman kapely Circus Problem a od roku 2023 se zároveň vydává vlastní sólovou cestou."
      },
      {
        date: "2026-09-11", title: "Random Choices + Koby Fray + Flip Flops", time: "19:30", price: "300 Kč předprodej / 300 Kč na místě",
        desc: "Random Choices je altrockové trio kombinující rock, funk a pop, které přiváží do Anděl Music Baru nový album „Takto je to fajn“. Na plzeňském pódiu nebudou chybět Koby Fray a The Flip Flops."
      },
      {
        date: "2026-09-12", title: "DJ Mario", time: "20:00", price: "100 Kč na místě",
        desc: "Latino party pod taktovkou oblíbeného kubánského DJ Maria! Začínáme salsou a bachatou, v noci to rozjedeme ve španělském stylu – přijďte si zatančit a užít večer!"
      },
      {
        date: "2026-09-14", title: "Na kvíz", time: "19:00", price: "120 Kč na místě",
        desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz."
      },
      {
        date: "2026-09-17", title: "Slam Poetry", time: "20:00", price: "200/250 Kč předprodej / 300 Kč na místě",
        desc: "Poezie a show jde dohromady! Tentokrát vám do Anděla přivezeme parádní slamery včetně mistra Filipitche nebo Empathica. Budete se bavit."
      },
      {
        date: "2026-09-18", title: "Le Čhavendar", time: "20:00",
        desc: "Přijďte si užít pořádnou dávku živé hudby, energie a skvělé atmosféry!"
      },
      {
        date: "2026-09-18", title: "Sortiment", place: "venkovní dvorek Anděl",
        desc: "Česká hudební skupina z Rokycan a Strašic, která na hudební scéně působí od roku 1988."
      },
      {
        date: "2026-09-19", title: "Exploze jádra + cover Inci Drums", time: "19:30", price: "200 Kč předprodej / 200 Kč na místě",
        desc: "Večer plný energie, hlasité hudby a syrové atmosféry, ale především akce, která má přesah. Projekt Hardcore srdcem vzniká pod hlavičkou Harmonie pomoci – koncerty pro život, z. s."
      },
      {
        date: "2026-09-21", title: "Na kvíz", time: "19:00", price: "120 Kč na místě",
        desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz."
      },
      {
        date: "2026-09-22", title: "Čítání lidu (Divadlo MY)", time: "19:00", price: "dobrovolné",
        desc: "Čítání lidu je literárně-hudební pořad, který má na plzeňské scéně své místo již od roku 2008. Herci Divadla MY představují formou scénického čtení vybrané knihy."
      },
      {
        date: "2026-09-24", title: "Roadhouse", time: "19:30", price: "300 Kč předprodej / 350 Kč na místě",
        desc: "Po letech se Štěpán Eliáš, Míra Starý, Milda Šlesinger, Tonda Zimmel a Ondřej Rudolf dávají dohromady, protože bez skutečné muziky se nedá žít."
      },
      {
        date: "2026-09-25", title: "Neser Posse", time: "20:00", price: "250 Kč předprodej / 350 Kč na místě",
        desc: "Členové Neser Posse míří do Music Baru Anděl a tentokrát to bude pořádná jízda. Na pódiu se představí Naume a Mladej Fritzl."
      },
      {
        date: "2026-09-26", title: "Nirvana Revival", time: "19:30", price: "300 Kč na místě",
        desc: "Tříčlenná česká revivalová kapela přináší na pódiu s maximálním nasazením největší hity legendární Nirvany – autentická atmosféra, ikonické riffy a rytmika, která vás vrátí do 90. let."
      },
      {
        date: "2026-09-28", title: "Na kvíz", time: "19:00", price: "120 Kč na místě",
        desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz."
      },
      {
        date: "2026-09-29", title: "Život je lajf charita", time: "19:00",
        desc: "Koncertní happening na podporu studentských protestů v Srbsku."
      },
    ]
  }

  /* Příklad, jak přidat další měsíc:
  "2026-10": {
    label: "PROGRAM — ŘÍJEN 2026",
    events: [
      { date:"2026-10-02", title:"...", time:"19:00", price:"...", desc:"..." },
    ]
  }
  */

};
