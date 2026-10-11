/* ==========================================================================
   Anděl Music Bar — program
   -----------------------------------------------------------------------
   Program se aktualizuje každý měsíc: přidej nový klíč "YYYY-MM" s polem
   akcí a stránka ho zobrazí automaticky, jakmile začne daný měsíc.
   Pokud aktuální měsíc ještě není vyplněný, zobrazí se poslední připravený
   program (ať stránka nikdy není prázdná).

   Jedna akce: { date:"YYYY-MM-DD", title, time, price, place, desc }
   - price, place a tickets jsou nepovinné.
   - tickets:true = u akce se zobrazí tlačítko „Koupit vstupenku“ (vede na widget SMS Ticket).
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
  },

  "2026-10": {
    label: "PROGRAM — ŘÍJEN 2026",
    events: [
      { date: "2026-10-01", title: "Petr Soukup Podcast" },
      { date: "2026-10-02", title: "Open karaoke", price: "vstupné dobrovolné" },
      { date: "2026-10-03", title: "DJ Mario", time: "20:00", price: "50 Kč na místě", desc: "Latino party pod taktovkou oblíbeného kubánského DJ Maria! Začínáme salsou a bachatou, v noci to rozjedeme ve španělském stylu – přijďte si zatančit a užít večer!" },
      { date: "2026-10-05", title: "Na kvíz", time: "19:00", price: "120 Kč na místě", desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz." },
      { date: "2026-10-06", title: "Talkshow Vítka Martince", time: "19:00", price: "250 Kč předprodej / 300 Kč na místě", tickets: true, desc: "Přijďte si užít večer, kdy bude hlavní hvězdou humor. Do Plzně míří stand-up komik Vítek Martinec, který vás provede světem každodenních situací, vztahů i drobných absurdit života s nadhledem, pohotovostí a pořádnou dávkou vtipu." },
      { date: "2026-10-07", title: "Čítání lidu", time: "19:00", price: "vstupné dobrovolné", desc: "Čítání lidu je literárně-hudební pořad, který má na plzeňské scéně své místo již od roku 2008. Herci Divadla MY představují formou scénického čtení vybrané knihy." },
      { date: "2026-10-08", title: "Festival Můj život s tělem – Autorské čtení Ridiny Ahmed", time: "19:00", price: "150 Kč na místě", desc: "Ridina Ahmedová, letošní umělecká garantka festivalu, nás pozve k otázkám, které se týkají každého z nás: Jaký příběh vypráví naše tělo? A dokážeme mu opravdu naslouchat?" },
      { date: "2026-10-10", title: "Open Mic", price: "200 Kč na místě" },
      { date: "2026-10-12", title: "Na kvíz", time: "19:00", price: "120 Kč na místě", desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz." },
      { date: "2026-10-13", title: "Festival Můj život s tělem – Debata s doktorkou Pavlou Koželuhovou", time: "19:00", desc: "MUDr. Pavla Koželuhová je praktickou lékařkou pro děti a dorost. Léčba pro ni znamená doprovázení a navedení pacienta na jeho správnou cestu, aby mohl žít spokojený a šťastný život." },
      { date: "2026-10-14", title: "Slam Poetry" },
      { date: "2026-10-15", title: "Princ Karming – Listening party", time: "20:00", price: "100 Kč na místě", desc: "Princ Karming zve na listening party do Music Baru Anděl! Nový materiál poprvé naplno z reprobeden, přímo v Plzni a mezi svými. Nejen listening party, ale večer plnej freshest DJ setů, drinků a dobré nálady. Doraž si zatančit, ukojit žízeň a strávit čas s přáteli." },
      { date: "2026-10-16", title: "J.A.R. Revival", time: "20:00", desc: "Jediný živý revival legendární české funkové kapely opět přistane v plzeňském Andělu! Přijďte zapařit na hity Bulháři, Pap muziek, Ještě se připlazíš, J. CH. neexistus a další groovy od králů českého funku!" },
      { date: "2026-10-17", title: "Samosběr | Sebevrány | Cold Meat Party", time: "19:00", price: "250 Kč na místě" },
      { date: "2026-10-19", title: "Na kvíz", time: "19:00", price: "120 Kč na místě", desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz." },
      { date: "2026-10-21", title: "Hudební kvíz", time: "19:00", price: "120 Kč na místě", desc: "Posloucháš hudbu? Tak slyš! Hudební kvíz v Anděl Music Bar je tady! Čekej 50 otázek ze světa hudby rozdělených do 5 kol a 10 témat – napříč všemi žánry, od pravěku až do současnosti." },
      { date: "2026-10-22", title: "Máňas Night", time: "19:00", price: "250 Kč předprodej / 300 Kč na místě", tickets: true, desc: "Zveme vás na poctivý hraní s velkým srdcem, které otevřeme pro našeho spoluhráče a kamaráda Martina Švehlu. Přijďte, oslavíme to skvělou hudbou, tak jak to měl rád!" },
      { date: "2026-10-23", title: "DJ Coffi", time: "20:00", price: "50 Kč na místě", desc: "Dejte si pauzu od všedních dní! V pátek 23. 10. se Anděl mění v pořádnou diskotéku a za pulty stojí DJ Coffi." },
      { date: "2026-10-24", title: "Černý Tesák + Lishkee + Taliraw", time: "19:00", price: "210 Kč předprodej / 250 Kč na místě", tickets: true, desc: "V temné instrumentální hudbě Miloše Dolinského, postavené na looperech a sekvencérech, se spojuje špinavý mix ambientních smyček, elektronických beatů a post-rocku." },
      { date: "2026-10-26", title: "Na kvíz", time: "19:00", price: "120 Kč na místě", desc: "Hospodský kvíz – poměřte své znalosti s ostatními! Sestavte tým až o 8 hráčích a rezervujte si stůl na www.nakviz.cz." },
      { date: "2026-10-27", title: "Anymen", time: "20:00", price: "200–250 Kč předprodej / 300 Kč na místě", tickets: true, desc: "Připravte se na nálož tvrdých songů v live podání finského pětičlenného dívčího tria ze Švédska # ANYMEN." },
      { date: "2026-10-28", title: "Halloween karaoke party", price: "vstupné dobrovolné" },
      { date: "2026-10-29", title: "The Flip Flops & Malý věci", time: "20:00", price: "student 200 Kč / dospělý 250 Kč", desc: "Čeká vás večer plný živé hudby, energie, dobrých drinků a atmosféry, kterou si nejlíp užijete přímo pod pódiem. Tak vezměte partu a dorazte!" },
      { date: "2026-10-30", title: "Maniac", time: "20:00", desc: "Tři kapely, super večer. MANIAC & RED HOT CHILI BUDWEIS (RHCP REVIVAL) & STAV BEZTÍŽE" },
      { date: "2026-10-31", title: "Lords", time: "20:00", desc: "Když zazní „Smoke on the Water“, víte, že je večer v tom správném stavu. Do Anděla přijedou Lords, kapela z Plzeňska, která už přes 15 let hraje to nejlepší z rockové klasiky 70. a 80. let." },
    ]
  }

  /* Příklad, jak přidat další měsíc:
  "2026-11": {
    label: "PROGRAM — LISTOPAD 2026",
    events: [
      { date:"2026-11-02", title:"...", time:"19:00", price:"...", tickets:true, desc:"..." },
    ]
  }
  */

};
