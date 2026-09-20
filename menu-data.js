/* ==========================================================================
   Anděl Café & Bar — data menu
   -----------------------------------------------------------------------
   Každá položka: { n: název, d: popis/ingredience nebo příchutě, s: velikost,
                    p: cena, i: soubor fotky v images/drinks/ (nebo null) }
   Skupina kategorií může mít "g" u položky = podnadpis (např. "Irská
   whisky", "Bourbon"...). Když položka nemá foto (i: null), použije se
   ikona kategorie (icon) jako připravené místo pro fotku.
   Pro doplnění foto stačí přidat soubor do images/drinks/ a vyplnit "i".

   Aktualizováno podle receptur a ceníku z uprav. Excelu (Napojak Bar) a
   pokynů vedení — září 2026. Pořadí kategorií nápojového lístku: Pivo &
   Cider → Nealko nápoje → Nealko drinky → Shoty → Drinky → Drinky 2 →
   Drinky 3 → ostatní (víno, lihoviny…), přesně dle instrukcí vedení.
   ========================================================================== */

const MENU = [

/* ---------------------------------------------------------------- KÁVA */
{
  cat: "Káva", icon: "coffee",
  items: [
    { n:"Espresso", s:"9 g", p:"60 Kč" },
    { n:"Espresso Lungo", s:"9 g", p:"60 Kč" },
    { n:"Espresso Americano", s:"9 g", p:"60 Kč" },
    { n:"Espresso Doppio", s:"18 g", p:"80 Kč" },
    { n:"Espresso Macchiato", s:"9 g", p:"70 Kč" },
    { n:"Cappuccino", s:"9 g", p:"80 Kč" },
    { n:"Flat White", s:"18 g", p:"100 Kč" },
    { n:"Latte Macchiato", s:"9 g", p:"85 Kč" },
    { n:"Vídeňská káva", s:"9 g", p:"85 Kč" },
    { n:"Alžírská káva", s:"9 g", p:"95 Kč" },
    { n:"Irská káva", s:"9 g", p:"105 Kč" },
  ],
  note: "Všechny kávy lze připravit v bezkofeinové variantě. Příchuť +10 Kč · Rostlinné mléko +10 Kč"
},

/* --------------------------------------------------------- LEDOVÁ KÁVA */
{
  cat: "Ledová káva", icon: "coffee",
  items: [
    { n:"Espresso na ledu", s:"9 g", p:"60 Kč" },
    { n:"Affogato", s:"9 g", p:"85 Kč" },
    { n:"Espresso Tonic", s:"18 g", p:"100 Kč" },
    { n:"Ledové Latte", s:"9 g", p:"85 Kč" },
    { n:"Ledové Cappuccino", s:"9 g", p:"80 Kč" },
    { n:"Frappé", s:"9 g", p:"90 Kč" },
    { n:"Ledová káva se zmrzlinou", s:"9 g", p:"105 Kč" },
  ]
},

/* ------------------------------------------------------- HORKÉ NÁPOJE */
{
  cat: "Horké nápoje", icon: "tea",
  items: [
    { n:"Horká čokoláda", d:"mléčná, bílá, hořká · šlehačka +20 Kč", s:"25 g", p:"70 Kč" },
    { n:"Holandské kakao", s:"15 g", p:"65 Kč" },
    { n:"Čaj", d:"černý, zelený, heřmánkový, ovocný", s:"1 ks", p:"55 Kč" },
    { n:"Čerstvý čaj", d:"mátový, zázvorový", s:"3 dl", p:"70 Kč" },
    { n:"Chai Latte", s:"15 g", p:"75 Kč" },
    { n:"Matcha Latte", s:"3 g", p:"75 Kč" },
    { n:"Svařené víno", s:"2 dl", p:"75 Kč" },
    { n:"Grog", s:"1 ks", p:"65 Kč" },
    { n:"Horká griotka", s:"1 ks", p:"65 Kč" },
  ]
},

/* --------------------------------------------------- ANDĚLSKÉ LIMONÁDY */
{
  cat: "Andělské limonády", icon: "soda",
  items: [
    { n:"Borůvková", d:"s rozmarýnem", s:"4 dl", p:"90 Kč" },
    { n:"Brusinková", d:"s mátou", s:"4 dl", p:"90 Kč" },
    { n:"Citronová", d:"s tymiánem", s:"4 dl", p:"90 Kč" },
    { n:"Malinová", d:"s citronem", s:"4 dl", p:"90 Kč" },
    { n:"Zázvorová", d:"s citronem", s:"4 dl", p:"90 Kč" },
    { n:"Matcha Ice Tea", s:"4 dl", p:"90 Kč" },
    { n:"Míchané ze sirupu", d:"maracuja, mango, fialka, grep, bezinka, černý rybíz, jahoda", s:"4 dl", p:"60 Kč" },
  ],
  note: "Na vyžádání obsluhy lze některé limonády připravit i v teplé variantě."
},

/* ------------------------------------------------------- PIVO & CIDER */
{
  cat: "Pivo & Cider", icon: "beer",
  items: [
    { g:"Čepované", n:"Pilsner Urquell", s:"0,28 l", p:"55 Kč" },
    { g:"Čepované", n:"Pilsner Urquell", s:"0,48 l", p:"70 Kč" },
    { g:"Čepované", n:"Gambrinus 11°", s:"0,28 l", p:"50 Kč" },
    { g:"Čepované", n:"Gambrinus 11°", s:"0,48 l", p:"65 Kč" },
    { g:"Čepované", n:"Proud", s:"0,38 l", p:"59 Kč" },

    { g:"Cider", n:"Frisco Cider", s:"0,38 l", p:"59 Kč" },

    { g:"Lahvové", n:"Pilsner Urquell", s:"0,33 l", p:"59 Kč" },
    { g:"Lahvové", n:"Heineken", s:"0,33 l", p:"59 Kč" },
    { g:"Lahvové", n:"Corona", s:"0,355 l", p:"85 Kč" },

    { g:"Nealkoholické", n:"Bernard Free", d:"světlý", s:"0,33 l", p:"59 Kč" },
    { g:"Nealkoholické", n:"Bernard Free", d:"švestka / grep", s:"0,5 l", p:"59 Kč" },
    { g:"Nealkoholické", n:"Birell", d:"světlý", s:"0,33 l", p:"55 Kč" },
    { g:"Nealkoholické", n:"Birell", d:"Pomelo-grep", s:"0,33 l", p:"55 Kč" },
  ]
},

/* ----------------------------------------------------- NEALKO NÁPOJE */
{
  cat: "Nealko nápoje", icon: "soda",
  items: [
    { g:"Čepované", n:"Kofola", s:"0,28 l", p:"45 Kč" },
    { g:"Čepované", n:"Kofola", s:"0,48 l", p:"65 Kč" },
    { g:"Čepované", n:"Birell Pomelo-grep", s:"0,28 l", p:"55 Kč" },
    { g:"Čepované", n:"Birell Pomelo-grep", s:"0,48 l", p:"65 Kč" },

    { g:"Lahvové", n:"Royale Crown Cola", d:"classic / zero", s:"0,25 l", p:"65 Kč" },
    { g:"Lahvové", n:"Targa", d:"maracuja / citron / pomeranč", s:"0,25 l", p:"65 Kč" },
    { g:"Lahvové", n:"Targa Tonic", d:"classic / růžový / zázvor", s:"0,25 l", p:"65 Kč" },
    { g:"Lahvové", n:"Thomas Henry Tonic", d:"classic / botanical / ginger beer / grepfruit", s:"0,2 l", p:"75 Kč" },
    { g:"Lahvové", n:"Curiosa Džus", d:"jablko / pomeranč / jahoda / multivitamin", s:"0,25 l", p:"75 Kč" },
    { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá / perlivá", s:"0,33 l", p:"50 Kč" },
    { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá", s:"0,75 l", p:"75 Kč" },
    { g:"Lahvové", n:"Dilmah Ice Tea", d:"broskev / jasmín / citron", s:"0,25 l", p:"65 Kč" },
    { g:"Lahvové", n:"Redbull", d:"classic / zero / white peach / pink zero / blue / sezónní", s:"0,25 l", p:"75 Kč" },
    { g:"Lahvové", n:"Vinea", s:"0,25 l", p:"65 Kč" },

    { g:"Rozlévané", n:"Soda", s:"0,1 l", p:"10 Kč" },
    { g:"Rozlévané", n:"Sirup", s:"0,04 l", p:"15 Kč" },
  ]
},

/* ------------------------------------------------------- NEALKO DRINKY */
{
  cat: "Nealko drinky", icon: "soda",
  items: [
    { n:"Captain Morgan 0% + Cola", d:"Captain Morgan 0% + Royal Crown Cola", s:"1 ks", p:"100 Kč" },
    { n:"Tanqueray 0% + Tonic", d:"Tanqueray 0% gin + Targa tonic", s:"1 ks", p:"120 Kč" },
    { n:"Virgin Mojito", d:"limetková šťáva, simple sirup, máta, soda", s:"1 ks", p:"110 Kč" },
    { n:"Virgin Sunrise", d:"pomerančový džus, grenadina, soda", s:"1 ks", p:"100 Kč" },
    { n:"Virgin Paloma", d:"limetková šťáva, Thomas Henry grep, špetka soli, soda", s:"1 ks", p:"120 Kč" },
    { n:"Elderflower Fizz 0.0", d:"bezový sirup, limetková šťáva, máta, soda", s:"1 ks", p:"100 Kč" },
    { n:"Crodino Spritz", d:"Crodino, soda, pomeranč", s:"1 ks", p:"105 Kč" },
  ]
},

/* -------------------------------------------------------------- SHOTY */
{
  cat: "Shoty", icon: "cocktail",
  items: [
    { n:"Jelen", d:"Jägermeister + Red Bull Classic", p:"60 Kč" },
    { n:"Lítačka", d:"Absolut vodka + Red Bull White Peach", p:"60 Kč" },
    { n:"Včelka", d:"Jim Beam Honey + Red Bull White Peach", p:"60 Kč" },
    { n:"Chupito", d:"bílý rum, limetkový cordial, koktejlová třešeň", p:"55 Kč" },
    { n:"B52", d:"Kahlúa + Baileys + Stroh", p:"105 Kč" },
    { n:"Svině Havana", d:"Havana Club 3yo, cola, limetková šťáva", p:"55 Kč" },
    { n:"Svině Vodka", d:"vodka, džus nebo cola dle volby", p:"55 Kč" },
    { n:"Karibská Bomba", d:"Malibu + Red Bull White Peach", p:"60 Kč" },
    { n:"Illusion", d:"Bols Peach, vodka, pomerančový džus, grenadina", p:"80 Kč" },
  ]
},

/* --------------------------------------------------------------DRINKY */
{
  cat: "Drinky", icon: "cocktail",
  items: [
    { g:"Signature", n:"Gimlet No.TEN", d:"Tanqueray No. Ten, limetková šťáva, citronová kůra", p:"155 Kč", i:"gimlet-no10.jpg" },
    { g:"Signature", n:"Whiskey Sour", d:"Johnnie Walker Black Label, citronová šťáva, cukrový sirup, vaječný bílek, bitters", p:"145 Kč", i:"whiskeySour.jpg" },

    { g:"Short", n:"Absolut Vodka + Džus", d:"Absolut vodka, pomerančový džus", p:"110 Kč" },
    { g:"Short", n:"Amarancio", d:"Campari, gin, Red Bull White Peach", p:"125 Kč", i:"amarancio.jpg" },
    { g:"Short", n:"Moscow Mule", d:"Absolut vodka, limetková šťáva, ginger beer", p:"125 Kč", i:"moscowMule.jpg" },
    { g:"Short", n:"Skinny Bitch", d:"Absolut vodka, limetková šťáva, soda", p:"95 Kč", i:"skinny-btich.jpg" },
    { g:"Short", n:"Skinny Bitch Malina", d:"Absolut vodka, limetková šťáva, malinový sirup, soda", p:"110 Kč" },
    { g:"Short", n:"Božkov + RC Cola", d:"Absolut Raspberri, limetková šťáva, malinový sirup, soda", p:"95 Kč" },
    { g:"Short", n:"Captain Morgan + RC Cola", d:"Captain Morgan Spiced Gold, Royal Crown Cola", p:"110 Kč" },
    { g:"Short", n:"Jack Daniels + RC Cola", d:"Jack Daniel's, Royal Crown Cola", p:"125 Kč" },
    { g:"Short", n:"Jameson + Ginger Beer", d:"Jameson, ginger beer, limetková šťáva", p:"110 Kč" },
    { g:"Short", n:"White Russian", d:"Absolut vodka, Kahlúa, smetana", p:"145 Kč" },
    { g:"Short", n:"Black Russian", d:"Absolut vodka, Kahlúa", p:"130 Kč" },
    { g:"Short", n:"Štrúdl", d:"Jack Daniel's Fire, jablečný džus, skořice", p:"120 Kč", i:"JackDanielsFire.jpg" },
  ]
},

/* ------------------------------------------------------------ DRINKY 2 */
{
  cat: "Drinky 2", icon: "cocktail",
  items: [
    { n:"Beton", d:"Becherovka, Targa tonic", p:"110 Kč" },
    { n:"Bavorák", d:"Fernet Stock, Targa tonic", p:"110 Kč" },
    { n:"Beefeater + Tonic", d:"Beefeater gin, Targa tonic", p:"120 Kč" },
    { n:"Tanqueray + Thomas Henry", d:"Tanqueray gin, Thomas Henry tonic", p:"170 Kč" },
    { n:"Opihr + Thomas Henry", d:"Opihr gin, Thomas Henry tonic", p:"200 Kč" },
    { n:"Bombay + Thomas Henry", d:"Bombay Sapphire, Thomas Henry tonic", p:"150 Kč" },
    { n:"Gin Mare + Thomas Henry", d:"Gin Mare, Thomas Henry tonic", p:"200 Kč" },
    { n:"Tom Collins", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"160 Kč" },
    { n:"Tom Collins Royale", d:"Tanqueray Royale gin, citronová šťáva, simple sirup, soda", p:"170 Kč" },
    { n:"Cuba Libre", d:"Havana 3yo / bílý rum, limetková šťáva, Royal Crown Cola", p:"145 Kč", i:"cubaLibre.jpg" },
    { n:"Mojito", d:"Havana 3yo / bílý rum, limetka, simple sirup, máta, soda", p:"145 Kč", i:"Mojito.jpg" },
    { n:"Malinové Mojito", d:"Havana 3yo, limetková šťáva, malinový sirup/pyré, máta, soda", p:"155 Kč" },
    { n:"Dark'n Stormy", d:"tmavý rum Bacardi, ginger beer, limetková šťáva", p:"130 Kč", i:"darkAndStormy.jpg" },
    { n:"Sex on the Beach", d:"vodka, broskvový likér, pomerančový džus, grenadina", p:"155 Kč", i:"SexOnTheBeach.jpg" },
    { n:"Metaxa Suntonic", d:"Metaxa 5*, tonic", p:"115 Kč" },
    { n:"Tequila Sunrise", d:"tequila, pomerančový džus, grenadina", p:"145 Kč" },
    { n:"Long Island Iced Tea", d:"vodka, gin, bílý rum, tequila, Cointreau, citronová šťáva, Royal Crown Cola", p:"230 Kč" },
    { n:"Paloma", d:"tequila blanco, limetková šťáva, Thomas Henry grep, špetka soli", p:"160 Kč" },
    { n:"Americano", d:"Campari, Martini Rosso, soda", p:"135 Kč", i:"martiniRosso.jpg" },
    { n:"Campari Tonic", d:"Campari, tonic", p:"125 Kč" },
    { n:"Batanga", d:"tequila, limetková šťáva, cola, špetka soli", p:"135 Kč" },
    { n:"Ranch Water", d:"tequila, limetková šťáva, soda", p:"130 Kč" },
    { n:"Gin Buck", d:"Tanqueray gin, limetková nebo citronová šťáva, ginger beer", p:"135 Kč" },
    { n:"Blue Lagoon", d:"vodka, Blue Curaçao, citronová limonáda/soda, nálev z koktejlových třešniček", p:"150 Kč" },
    { n:"Gin Sunset", d:"gin, pomerančový džus, grenadina", p:"130 Kč" },
    { n:"Pink Lady", d:"Absolut vodka, prosecco, malinový sirup/pyré, limetková šťáva, soda", p:"140 Kč" },
    { n:"Gin Fizz", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"150 Kč", i:"ginFizz.jpg" },
    { n:"Cosmopolitan", d:"citronová vodka, Triple Sec, brusinkový džus, limetková šťáva", p:"160 Kč" },
    { n:"Negroni", d:"gin, Campari, Martini Rosso", p:"170 Kč" },
    { n:"Jack Blackberry Lemonade", d:"Jack Daniel's Blackberry, citronová limonáda, citron", p:"150 Kč" },
    { n:"Jack Honey Lemonade", d:"Jack Daniel's Honey, citronová limonáda, citron", p:"150 Kč" },
    { n:"Jack Apple Lemonade", d:"Jack Daniel's Apple, citronová limonáda, citron", p:"150 Kč" },
    { n:"Zlatokopka", d:"Jägermeister Orange, tonic, pomeranč", p:"135 Kč" },
    { n:"Gin Hendrick's + Thomas Henry", d:"Gin Hendrick's, Thomas Henry tonic", p:"" },
    { n:"Gin Malfy + Thomas Henry", d:"Gin Malfy, Thomas Henry tonic", p:"" },
  ]
},

/* ------------------------------------------------------------ DRINKY 3 */
{
  cat: "Drinky 3", icon: "cocktail",
  items: [
    { n:"Aperol Spritz", d:"prosecco, Aperol, soda", p:"125 Kč" },
    { n:"Campari Spritz", d:"prosecco, Campari, soda", p:"125 Kč" },
    { n:"Sarti Spritz", d:"prosecco, Sarti Rosa, soda", p:"125 Kč", i:"SartiRosa.jpg" },
    { n:"Peach Spritz", d:"prosecco, Red Bull White Peach, limetková šťáva, máta, limetka", p:"135 Kč" },
    { n:"Mimosa", d:"prosecco, pomerančový džus", p:"105 Kč" },
    { n:"Hugo Spritz", d:"prosecco, bezový sirup, soda, máta, limetková šťáva", p:"135 Kč" },
    { n:"Limoncello Spritz", d:"prosecco, limoncello, soda", p:"125 Kč", i:"limonce.jpg" },
  ]
},

/* ---------------------------------------------------------------- VÍNO */
{
  cat: "Víno", icon: "wine",
  note: "Širší nabídka lahvových vín na našem vinném lístku.",
  items: [
    { n:"Chardonnay", d:"bílé, suché", s:"1 dcl", p:"35 Kč" },
    { n:"Primitivo", d:"červené, suché", s:"1 dcl", p:"35 Kč" },
    { n:"Prosecco", d:"šumivé, suché", s:"1 dcl", p:"45 Kč" },
  ]
},

/* ------------------------------------------------------------ VERMOUTH */
{
  cat: "Vermouth", icon: "spirit",
  items: [
    { n:"Martini", d:"blanco, rosso, extra dry", s:"10 cl", p:"70 Kč", i:"MartiniExtraDry.jpg" },
  ]
},

/* ------------------------------------------------------------- ABSINTH */
{
  cat: "Absinth", icon: "spirit",
  note: "Možnost absinthové fontány.",
  items: [
    { n:"Absinthe Egg Liquer 18%", s:"4 cl", p:"65 Kč" },
    { n:"La Clandestine", s:"4 cl", p:"145 Kč", i:"laClandestineBlanche.jpg" },
    { n:"La Corneille Verte", s:"4 cl", p:"95 Kč", i:"LaCorneille.jpg" },
    { n:"Pernod Recette Traditionnelle", s:"4 cl", p:"165 Kč", i:"perdonAbsinthe.jpg" },
    { n:"Žufánek St. Antoine", s:"4 cl", p:"120 Kč", i:"abstinthe-st-antoine.jpg" },
  ]
},

/* -------------------------------------------------------------- LIKÉRY */
{
  cat: "Likéry", icon: "spirit",
  items: [
    { n:"Baileys", s:"4 cl", p:"65 Kč" },
    { n:"Becherovka", s:"4 cl", p:"60 Kč" },
    { n:"Becherovka Lemond", s:"4 cl", p:"60 Kč" },
    { n:"Bols Peach", s:"4 cl", p:"50 Kč" },
    { n:"Cointreau", s:"4 cl", p:"65 Kč" },
    { n:"Fernet Stock", s:"4 cl", p:"60 Kč" },
    { n:"Fernet Stock Citrus", s:"4 cl", p:"60 Kč" },
    { n:"Griotka", s:"4 cl", p:"60 Kč" },
    { n:"Jägermeister", s:"4 cl", p:"70 Kč" },
    { n:"Jägermeister Orange", s:"4 cl", p:"70 Kč" },
    { n:"Bartida Zelená", s:"4 cl", p:"60 Kč" },
    { n:"Božkov Modrá", s:"4 cl", p:"60 Kč" },
    { n:"Polar Jahoda", s:"4 cl", p:"60 Kč" },
    { n:"Tatra Tea 32%", s:"4 cl", p:"65 Kč" },
    { n:"Tatra Tea 42%", s:"4 cl", p:"70 Kč" },
    { n:"Tatra Tea 52%", s:"4 cl", p:"75 Kč" },
    { n:"Tatra Tea 62%", s:"4 cl", p:"80 Kč" },
    { n:"Tatra Tea 72%", s:"4 cl", p:"90 Kč" },
  ]
},

/* ------------------------------------------------------ BRANDY/COGNAC */
{
  cat: "Brandy / Cognac", icon: "spirit",
  items: [
    { n:"Metaxa 5*", s:"4 cl", p:"65 Kč", i:"Metaxa.jpg" },
    { n:"Hennessy Cognac V.S.O.P.", s:"4 cl", p:"185 Kč" },
  ]
},

/* -------------------------------------------------------------- VODKA */
{
  cat: "Vodka", icon: "spirit",
  items: [
    { n:"Absolut", s:"4 cl", p:"75 Kč" },
    { n:"Absolut Citron", s:"4 cl", p:"75 Kč" },
    { n:"Absolut Kurant", s:"4 cl", p:"75 Kč" },
    { n:"Absolut Raspberri", d:"malina", s:"4 cl", p:"75 Kč" },
    { n:"Absolut Red Ruby", d:"grapefruit", s:"4 cl", p:"75 Kč" },
    { n:"Absolut Vanilia", s:"4 cl", p:"75 Kč" },
    { n:"Amundsen Fusion", d:"meloun", s:"4 cl", p:"65 Kč" },
    { n:"Ketel One", s:"4 cl", p:"90 Kč" },
    { n:"Pravda", s:"4 cl", p:"100 Kč" },
    { n:"Grey Goose", s:"4 cl", p:"130 Kč" },
    { n:"Smirnoff", s:"4 cl", p:"75 Kč" },
  ]
},

/* ---------------------------------------------------------------- RUM */
{
  cat: "Rum", icon: "spirit",
  items: [
    { n:"Austrian Empire Navy", s:"4 cl", p:"130 Kč" },
    { n:"Bacardi Carta Blanca", s:"4 cl", p:"70 Kč" },
    { n:"Bacardi Carta Negra", s:"4 cl", p:"70 Kč" },
    { n:"Božkov", s:"4 cl", p:"55 Kč" },
    { n:"Božkov Republika", s:"4 cl", p:"65 Kč" },
    { n:"Captain Bucanero", s:"4 cl", p:"89 Kč", i:"capitanBucanero.jpg" },
    { n:"Captain Morgan Spiced Gold", s:"4 cl", p:"70 Kč", i:"capitanMorganBlackSpiced.jpg" },
    { n:"Captain Morgan 0%", s:"4 cl", p:"50 Kč" },
    { n:"Diplomatico", s:"4 cl", p:"135 Kč", i:"diplomatico.jpg" },
    { n:"Don Papa", s:"4 cl", p:"135 Kč", i:"donPapa-rum.jpg" },
    { n:"Don Papa Baroko", s:"4 cl", p:"135 Kč", i:"donPapa-baroko.jpg" },
    { n:"Don Papa Gayuma", s:"4 cl", p:"270 Kč", i:"donPapa-gayuma.jpg" },
    { n:"Havana 3yo", s:"4 cl", p:"70 Kč", i:"HavanaClub.jpg" },
    { n:"Havana 7yo", s:"4 cl", p:"95 Kč", i:"havanaClub-7.jpg" },
    { n:"Legendario 7yo", s:"4 cl", p:"89 Kč", i:"Legendario.jpg" },
    { n:"Malibu", s:"4 cl", p:"65 Kč" },
    { n:"Ron Zacapa Centenario Solera", s:"4 cl", p:"135 Kč", i:"Zacapa.jpg" },
    { n:"Stroh", s:"4 cl", p:"99 Kč" },
    { n:"Kakadu", s:"4 cl", p:"65 Kč", i:"kakadu.jpg" },
    { n:"Abuelo Napoleon", s:"4 cl", p:"260 Kč", i:"abuelo-napoleon.jpg" },
  ]
},

/* ------------------------------------------------------------ PÁLENKY */
{
  cat: "Pálenky", icon: "spirit",
  items: [
    { n:"Bartida Hruškovice", s:"4 cl", p:"80 Kč" },
    { n:"Bartida Slivovice", s:"4 cl", p:"80 Kč" },
    { n:"Baron Hildprandt Hruškovice", s:"4 cl", p:"90 Kč" },
  ]
},

/* ------------------------------------------------------------- TEQUILA */
{
  cat: "Tequila", icon: "spirit",
  items: [
    { n:"El Jimador Blanco", s:"4 cl", p:"80 Kč" },
    { n:"El Jimador Reposado", s:"4 cl", p:"80 Kč" },
  ]
},

/* ----------------------------------------------------------------- GIN */
{
  cat: "Gin", icon: "spirit",
  note: "Možnost kombinovat se všemi toniky.",
  items: [
    { n:"Beefeater", d:"classic, pink, blood orange", s:"4 cl", p:"70 Kč", i:"beefeaterPinkStraw.jpg" },
    { n:"Bombay Sapphire", s:"4 cl", p:"75 Kč" },
    { n:"Malfy Rosa", s:"4 cl", p:"105 Kč" },
    { n:"Hendrick's", s:"4 cl", p:"95 Kč", i:"hendricksGin.jpg" },
    { n:"Opihr", s:"4 cl", p:"125 Kč" },
    { n:"Tanqueray", s:"4 cl", p:"95 Kč" },
    { n:"Tanqueray 0% Alkohol", s:"4 cl", p:"110 Kč", i:"tanquerayAlcoFree.jpg" },
    { n:"Tanqueray Blackcurrant Royale", s:"4 cl", p:"105 Kč", i:"tanquerayRoyale.jpg" },
    { n:"Tanqueray No TEN", s:"4 cl", p:"115 Kč", i:"noTen.jpg" },
    { n:"Gin Mare", s:"4 cl", p:"125 Kč" },
    { n:"Roku", s:"4 cl", p:"105 Kč" },
    { n:"Roku Sakura", s:"4 cl", p:"105 Kč" },
  ]
},

/* ------------------------------------------------------------- WHISKY */
{
  cat: "Whisky", icon: "spirit",
  items: [
    { g:"Irská whisky", n:"Jameson", s:"4 cl", p:"70 Kč", i:"Jameson.jpg" },
    { g:"Irská whisky", n:"Tullamore Dew", s:"4 cl", p:"75 Kč", i:"tullamoreDEW.jpg" },
    { g:"Irská whisky", n:"Bushmills", s:"4 cl", p:"75 Kč" },

    { g:"Skotská whisky", n:"Grants", s:"4 cl", p:"75 Kč" },
    { g:"Skotská whisky", n:"Johnnie Walker Red Label", s:"4 cl", p:"76 Kč" },
    { g:"Skotská whisky", n:"Johnnie Walker Black Label", s:"4 cl", p:"105 Kč" },
    { g:"Skotská whisky", n:"Johnnie Walker Red Rye Finish", s:"4 cl", p:"85 Kč" },

    { g:"Americká whiskey", n:"Jack Daniels", s:"4 cl", p:"85 Kč" },
    { g:"Americká whiskey", n:"Jack Daniels Honey", s:"4 cl", p:"85 Kč" },
    { g:"Americká whiskey", n:"Jack Daniels Fire", s:"4 cl", p:"85 Kč" },
    { g:"Americká whiskey", n:"Jack Daniels Blackberry", s:"4 cl", p:"85 Kč" },
    { g:"Americká whiskey", n:"Jack Daniels Apple", s:"4 cl", p:"85 Kč" },
    { g:"Americká whiskey", n:"Jack Daniels Gentleman", s:"4 cl", p:"125 Kč" },
    { g:"Americká whiskey", n:"Jack Daniels Single Barrel", s:"4 cl", p:"175 Kč" },

    { g:"Bourbon", n:"Jim Beam", s:"4 cl", p:"75 Kč" },
    { g:"Bourbon", n:"Jim Beam Honey", s:"4 cl", p:"75 Kč" },
    { g:"Bourbon", n:"Four Roses", s:"4 cl", p:"75 Kč" },
    { g:"Bourbon", n:"Wild Turkey", s:"4 cl", p:"75 Kč" },
  ]
},

/* ------------------------------------------------------- NĚCO K SNĚDKU */
{
  cat: "Něco k snědku", icon: "snack",
  items: [
    { n:"Croissant", s:"1 ks", p:"45 Kč" },
    { n:"Panini", s:"1 ks", p:"45 Kč" },
    { n:"Toust", s:"1 ks", p:"65 Kč" },
    { n:"Arašídy / chipsy / kešu / mandle", d:"druh dle nabídky obsluhy", p:"65 Kč" },
    { n:"Dezerty", d:"dle denní nabídky", p:"" },
  ]
},

];
