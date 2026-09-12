/* ==========================================================================
   Anděl Café — data menu
   -----------------------------------------------------------------------
   Každá položka: { n: název, d: popis/ingredience nebo příchutě, s: velikost,
                    p: cena, i: soubor fotky v images/drinks/ (nebo null) }
   Skupina kategorií může mít "g" u položky = podnadpis (např. "irská",
   "skotská"...). Když položka nemá foto (i: null), použije se ikona
   kategorie (icon) jako připravené místo pro fotku.
   Pro doplnění foto stačí přidat soubor do images/drinks/ a vyplnit "i".
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

/* -------------------------------------------------------------- NEALKO */
{
  cat: "Nealko", icon: "soda",
  items: [
    { n:"Kofola", d:"čepovaná", s:"3 dl", p:"50 Kč" },
    { n:"Royal Crown", d:"classic, zero", s:"2,5 dl", p:"55 Kč" },
    { n:"Rajec", d:"neperlivá, jemně perlivá", s:"3,3 dl", p:"45 Kč" },
    { n:"Vinea", s:"2,5 dl", p:"55 Kč" },
    { n:"Targa Florio", d:"pomeranč, mandarinka-maracuja", s:"2,5 dl", p:"55 Kč" },
    { n:"Targa Florio Tonic", d:"classic, růžový, zázvorový", s:"2,5 dl", p:"55 Kč" },
    { n:"Thomas Henry", d:"ginger beer, mango", s:"3,3 dl", p:"65 Kč" },
    { n:"Thomas Henry Tonic", d:"dry, cherry, botanicals", s:"3,3 dl", p:"65 Kč" },
    { n:"Curiosa", d:"pomeranč, jablko, jahoda", s:"2 dl", p:"65 Kč" },
    { n:"Seicha Matcha", d:"grep, yuzu-ginger, limetka, broskev-tonka", s:"3,3 dl", p:"70 Kč" },
    { n:"Club Mate", s:"3,3 dl", p:"70 Kč" },
    { n:"Koka Mate", s:"3,3 dl", p:"80 Kč" },
    { n:"Red Bull", d:"classic, tropical", s:"2,5 dl", p:"75 Kč" },
    { n:"Karafa vody", d:"s mátou, limetkou a citronem", s:"5 dl", p:"50 Kč" },
    { n:"Karafa vody", d:"s mátou, limetkou a citronem", s:"10 dl", p:"70 Kč" },
  ]
},

/* ---------------------------------------------------------------- PIVO */
{
  cat: "Pivo", icon: "beer",
  items: [
    { n:"Pilsner Urquell", d:"čepované", s:"0,3 l", p:"50 Kč" },
    { n:"Pilsner Urquell", d:"čepované", s:"0,5 l", p:"70 Kč" },
    { n:"Bernard 11° světlý", d:"čepované", s:"0,3 l", p:"55 Kč" },
    { n:"Bernard 11° světlý", d:"čepované", s:"0,5 l", p:"65 Kč" },
    { n:"Bernard Free", d:"nealkoholické, lahvové", s:"3,3 dl", p:"55 Kč" },
  ]
},

/* ---------------------------------------------------------------- VÍNO */
{
  cat: "Víno", icon: "wine",
  note: "Vinný lístek na vyžádání u obsluhy.",
  items: [
    { g:"bílé", n:"Chardonnay", d:"stáčené, polosuché", s:"1 dl", p:"35 Kč" },
    { g:"bílé", n:"Ryzlink rýnský", d:"stáčené, suché", s:"1 dl", p:"35 Kč" },
    { g:"bílé", n:"Pálava", d:"Hajduch, polosladké", s:"1 dl", p:"45 Kč" },
    { g:"bílé", n:"Rulandské šedé", d:"Hajduch, sladké", s:"1 dl", p:"45 Kč" },
    { g:"bílé", n:"Sauvignon", d:"Šmíd, suché", s:"1 dl", p:"45 Kč" },
    { g:"bílé", n:"Vinný střik", d:"Chardonnay 1 dl, soda 1 dl", s:"2 dl", p:"55 Kč" },
    { g:"červené", n:"Merlot", d:"stáčené, suché", s:"1 dl", p:"35 Kč" },
    { g:"červené", n:"Dornfelder", d:"Šmíd, suché", s:"1 dl", p:"45 Kč" },
    { g:"červené", n:"Portské víno", s:"5 cl", p:"55 Kč" },
    { g:"růžové", n:"Svatovavřinecké rosé", d:"polosladké", s:"1 dl", p:"45 Kč" },
    { g:"šumivé", n:"Lambrusco", d:"bílé, červené, růžové", s:"1 dl", p:"35 Kč" },
    { g:"šumivé", n:"Prosecco brut", d:"bílé", s:"1 dl", p:"45 Kč" },
  ]
},

/* ---------------------------------------------------------- KOKTEJLY 1 */
{
  cat: "Koktejly — short", icon: "cocktail",
  items: [
    { n:"Daiquiri", d:"rum Havana 3yo, limetkový fresh, simple sirup, lime leaf bitters", p:"95 Kč" },
    { n:"White Russian", d:"vodka Ketel One, likér Kahlúa, smetana, muškátový oříšek", p:"115 Kč" },
    { n:"Amarancio", d:"gin Gordon's, likér Campari, Red Bull Tropical edition", p:"125 Kč", i:"amarancio.jpg" },
    { n:"Caipirinha", d:"rum Cachaça, limetky, třtinový cukr", p:"130 Kč", i:"caipirinha.jpg" },
    { n:"Whiskey Sour", d:"skotská whisky Monkey Shoulder, citronový fresh, simple sirup, pěnič", p:"130 Kč", i:"whiskeySour.jpg" },
    { n:"Aviation", d:"gin The Botanist, citronový fresh, fialkový sirup", p:"140 Kč" },
    { n:"Cosmopolitan", d:"vodka Ketel One, likér Cointreau, limetkový fresh, brusinkový džus", p:"145 Kč" },
    { n:"Espresso Martini", d:"vodka Ketel One, likér Kahlúa, espresso, simple sirup", p:"145 Kč" },
    { n:"Margarita", d:"tequila blanco El Jimador, likér Cointreau, limetkový fresh, sůl, simple sirup", p:"145 Kč" },
    { n:"Strawberry Margarita", d:"tequila blanco El Jimador, likér Cointreau, limetkový fresh, sůl, jahodové pyré", p:"145 Kč", i:"strawberryMojito.jpg" },
    { n:"Negroni", d:"gin Tanqueray, likér Campari, vermouth Martini Rosso", p:"160 Kč" },
    { n:"Bramble", d:"gin Tanqueray, likér Chambord, citronový fresh, simple sirup", p:"165 Kč" },

    { g:"spritz", n:"Mimosa", d:"prosecco, pomerančový džus", p:"105 Kč" },
    { g:"spritz", n:"Hugo Spritz", d:"house prosecco, máta, bezinkový sirup, soda", p:"110 Kč" },
    { g:"spritz", n:"Limoncello Spritz", d:"likér Limoncè, prosecco, soda", p:"125 Kč", i:"limonce.jpg" },
    { g:"spritz", n:"Sarti Spritz", d:"likér Sarti, prosecco, soda", p:"125 Kč", i:"SartiRosa.jpg" },
    { g:"spritz", n:"Aperol Spritz", d:"likér Aperol, prosecco, soda", p:"125 Kč" },

    { g:"shooters", n:"Chupito", d:"rum Havana 3yo, limetkový cordial, koktejlová třešeň", p:"60 Kč" },
    { g:"shooters", n:"Raspberry Haze", d:"vodka Absolut, likér Chambord, limetkový fresh", p:"80 Kč" },
    { g:"shooters", n:"Svině", d:"rum Havana 3yo, RC cola, limetkový fresh", p:"55 Kč" },

    { g:"nealko", n:"Spritz", p:"95 Kč" },
    { g:"nealko", n:"Mojito Soft", p:"95 Kč" },
    { g:"nealko", n:"Virgin Colada", p:"95 Kč" },
  ]
},

/* ---------------------------------------------------- KOKTEJLY signature */
{
  cat: "Koktejly — signature", icon: "cocktail",
  items: [
    { n:"Gin Sunset", d:"gin Beefeater Blood Orange, Aperol, pomerančový fresh, soda, simple sirup", p:"125 Kč" },
    { n:"Pink Lady", d:"prosecco, vodka Absolut, jahodové pyré, soda", p:"135 Kč" },
    { n:"Mango Tree", d:"rum Captain Morgan Black Spiced, citronový fresh, rozmarýnovo-medový sirup, mangová limonáda Thomas Henry", p:"145 Kč" },
  ]
},

/* --------------------------------------------------------- KOKTEJLY long */
{
  cat: "Koktejly — long", icon: "cocktail",
  items: [
    { n:"Gimlet No. 10", d:"gin Tanqueray No. 10, limetkový fresh, simple sirup", p:"155 Kč", i:"gimlet-no10.jpg" },
    { n:"Mullet", d:"whiskey Monkey Shoulder, pomerančový fresh, grapefruit bitters, ginger beer Thomas Henry", p:"165 Kč", i:"mullet.jpg" },
    { n:"Skinny Bitch", d:"vodka Absolut, limetkový fresh, soda", p:"95 Kč", i:"skinny-btich.jpg" },
    { n:"Gin Fizz", d:"gin Hendrick's, limetkový fresh, simple sirup, soda, lime leaf bitters", p:"125 Kč", i:"ginFizz.jpg" },
    { n:"Cuba Libre", d:"rum Havana 3yo, limetkový fresh, cola Royal Crown", p:"135 Kč", i:"cubaLibre.jpg" },
    { n:"Mojito", d:"rum Havana 3yo, limetky, máta, třtinový cukr, soda", p:"135 Kč", i:"Mojito.jpg" },
    { n:"Dark & Stormy", d:"rum Captain Morgan Black, limetkový fresh, ginger beer Thomas Henry", p:"140 Kč", i:"darkAndStormy.jpg" },
    { n:"Moscow Mule", d:"vodka Absolut, limetkový fresh, ginger beer Thomas Henry", p:"140 Kč", i:"moscowMule.jpg" },
    { n:"Malinové Mojito", d:"rum Havana 3yo, limetky, máta, třtinový cukr, soda, maliny", p:"145 Kč" },
    { n:"Piňa Colada", d:"rum Malibu, smetana, kokosové pyré, ananasový džus", p:"145 Kč", i:"pinaColada.jpg" },
    { n:"Sex on the Beach", d:"vodka Absolut, likér Bols Peach, pomerančový džus, brusinkový džus", p:"145 Kč", i:"SexOnTheBeach.jpg" },
    { n:"Tequila Sunrise", d:"tequila blanco El Jimador, pomerančový džus, limetkový fresh, grenadina sirup", p:"145 Kč" },
    { n:"Tom Collins", d:"gin Tanqueray, citronový fresh, simple sirup, soda", p:"145 Kč" },
    { n:"Long Island Iced Tea", d:"gin Beefeater, rum Havana 3yo, vodka Absolut, tequila blanco El Jimador, likér Cointreau, citronový fresh, cola Royal Crown", p:"230 Kč" },
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
    { n:"Amaretto", s:"4 cl", p:"75 Kč" },
    { n:"Aperol", s:"4 cl", p:"69 Kč" },
    { n:"Baileys", s:"4 cl", p:"65 Kč" },
    { n:"Becherovka", s:"4 cl", p:"60 Kč" },
    { n:"Fernet Stock", s:"4 cl", p:"60 Kč" },
    { n:"Fernet Stock Citrus", s:"4 cl", p:"60 Kč" },
    { n:"Griotka", s:"4 cl", p:"60 Kč" },
    { n:"Jägermeister", s:"4 cl", p:"65 Kč" },
    { n:"Limoncello", s:"4 cl", p:"69 Kč", i:"limonce.jpg" },
    { n:"Peprmintový likér", s:"4 cl", p:"60 Kč" },
    { n:"Vaječný likér", s:"4 cl", p:"60 Kč" },
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

/* -------------------------------------------------------------- VODKY */
{
  cat: "Vodky", icon: "spirit",
  items: [
    { n:"Absolut", s:"4 cl", p:"65 Kč" },
    { n:"Babička", s:"4 cl", p:"125 Kč", i:"babicka.jpg" },
    { n:"Ketel One", s:"4 cl", p:"90 Kč" },
  ]
},

/* ---------------------------------------------------------------- RUM */
{
  cat: "Rum", icon: "spirit",
  items: [
    { n:"Abuelo 15yo Napoleon", s:"4 cl", p:"260 Kč", i:"abuelo-napoleon.jpg" },
    { n:"Abuelo 15yo Oloroso", s:"4 cl", p:"260 Kč", i:"abuelo-oloroso.jpg" },
    { n:"Abuelo 15yo Port Case", s:"4 cl", p:"285 Kč", i:"abuelo-tawny.jpg" },
    { n:"Božkov Tuzemský", s:"4 cl", p:"50 Kč" },
    { n:"Captain Morgan Black", s:"4 cl", p:"60 Kč", i:"capitanMorganBlackSpiced.jpg" },
    { n:"Captain Morgan Spiced Gold", s:"4 cl", p:"65 Kč" },
    { n:"Captain Bucanero", s:"4 cl", p:"75 Kč", i:"capitanBucanero.jpg" },
    { n:"Diplomatico Reserva Exclusiva", s:"4 cl", p:"135 Kč", i:"diplomatico.jpg" },
    { n:"Diplomatico Mantuano", s:"4 cl", p:"85 Kč", i:"diplomatico-mantuano.jpg" },
    { n:"Don Papa", s:"4 cl", p:"135 Kč", i:"donPapa-rum.jpg" },
    { n:"Don Papa Baroko", s:"4 cl", p:"160 Kč", i:"donPapa-baroko.jpg" },
    { n:"Don Papa Gayuma", s:"4 cl", p:"270 Kč", i:"donPapa-gayuma.jpg" },
    { n:"Don Papa Masskara", s:"4 cl", p:"150 Kč", i:"donPap-masskara.jpg" },
    { n:"Espero Caribbean Orange", s:"4 cl", p:"85 Kč" },
    { n:"Havana 3yo", s:"4 cl", p:"65 Kč", i:"HavanaClub.jpg" },
    { n:"Havana 7yo", s:"4 cl", p:"85 Kč", i:"havanaClub-7.jpg" },
    { n:"Kakadu", s:"4 cl", p:"65 Kč", i:"kakadu.jpg" },
    { n:"Legendario Elixir de Cuba", s:"4 cl", p:"85 Kč", i:"Legendario.jpg" },
    { n:"Malibu", s:"4 cl", p:"65 Kč" },
    { n:"Plantation Stiggin's Fancy Pineapple", s:"4 cl", p:"95 Kč", i:"plantationPineapple.jpg" },
    { n:"Plantation XO", s:"4 cl", p:"165 Kč", i:"plantation.jpg" },
    { n:"Ron Zacapa Centenario Royal", s:"4 cl", p:"890 Kč", i:"zacapaRoyal.jpg" },
    { n:"Ron Zacapa Centenario Solera", s:"4 cl", p:"130 Kč", i:"Zacapa.jpg" },
  ]
},

/* ------------------------------------------------------------ PÁLENKY */
{
  cat: "Pálenky", icon: "spirit",
  items: [
    { n:"Borovička", s:"4 cl", p:"80 Kč" },
    { n:"Hruškovice", s:"4 cl", p:"80 Kč" },
    { n:"Slivovice", s:"4 cl", p:"80 Kč" },
    { n:"Višňovka", s:"4 cl", p:"80 Kč" },
  ]
},

/* ------------------------------------------------------------- TEQUILA */
{
  cat: "Tequila", icon: "spirit",
  items: [
    { n:"Don Julio Blanco", s:"4 cl", p:"220 Kč", i:"donJulio-blanco.jpg" },
    { n:"Don Julio Reposado", s:"4 cl", p:"235 Kč", i:"donJulio-reposado.jpg" },
    { n:"El Jimador Blanco", s:"4 cl", p:"95 Kč" },
    { n:"El Jimador Reposado", s:"4 cl", p:"95 Kč" },
  ]
},

/* ----------------------------------------------------------------- GIN */
{
  cat: "Gin", icon: "spirit",
  note: "Možnost kombinovat se všemi toniky.",
  items: [
    { n:"Beefeater", d:"classic, pink, blood orange", s:"4 cl", p:"65 Kč", i:"beefeaterPinkStraw.jpg" },
    { n:"Gin Mare", s:"4 cl", p:"115 Kč" },
    { n:"Gin Mare Capri", s:"4 cl", p:"155 Kč", i:"ginMareCapri.jpg" },
    { n:"Hendrick's", s:"4 cl", p:"95 Kč", i:"hendricksGin.jpg" },
    { n:"Hendrick's Flora Adora", s:"4 cl", p:"140 Kč" },
    { n:"Malfy Rosa", s:"4 cl", p:"105 Kč" },
    { n:"Roku", s:"4 cl", p:"105 Kč" },
    { n:"Roku Sakura Edition", s:"4 cl", p:"105 Kč" },
    { n:"Tanqueray", s:"4 cl", p:"95 Kč", i:"tanquerayAlcoFree.jpg" },
    { n:"Tanqueray Flor de Sevilla", s:"4 cl", p:"85 Kč" },
    { n:"Tanqueray No. 10", s:"4 cl", p:"115 Kč", i:"noTen.jpg" },
    { n:"Tanqueray Royale", s:"4 cl", p:"85 Kč", i:"tanquerayRoyale.jpg" },
    { n:"The Botanist Dry Gin", s:"4 cl", p:"125 Kč", i:"TheBotanist.jpg" },
  ]
},

/* ------------------------------------------------------------- WHISKEY */
{
  cat: "Whiskey", icon: "spirit",
  items: [
    { g:"irská", n:"Jameson", s:"4 cl", p:"70 Kč", i:"Jameson.jpg" },
    { g:"irská", n:"Tullamore Dew", s:"4 cl", p:"70 Kč", i:"tullamoreDEW.jpg" },

    { g:"skotská", n:"Bruichladdich", s:"4 cl", p:"185 Kč", i:"bruichladdich.jpg" },
    { g:"skotská", n:"Laphroaig 10yo", s:"4 cl", p:"185 Kč" },
    { g:"skotská", n:"Johnnie Walker Black Label", s:"4 cl", p:"105 Kč" },
    { g:"skotská", n:"Johnnie Walker Double Black", s:"4 cl", p:"150 Kč", i:"doubleBlack.jpg" },
    { g:"skotská", n:"Johnnie Walker Red Label", s:"4 cl", p:"70 Kč" },
    { g:"skotská", n:"Johnnie Walker 18yo", s:"4 cl", p:"390 Kč", i:"johnnieWalker-18years.jpg" },
    { g:"skotská", n:"Lagavulin 16yo", s:"4 cl", p:"330 Kč", i:"lagavulin.jpg" },
    { g:"skotská", n:"Monkey Shoulder", s:"4 cl", p:"95 Kč", i:"MonkeyShoulder.jpg" },
    { g:"skotská", n:"Oban 14y", s:"4 cl", p:"260 Kč", i:"Orban.jpg" },
    { g:"skotská", n:"Octomore", s:"4 cl", p:"690 Kč", i:"Octomore.jpg" },
    { g:"skotská", n:"Singleton of Dufftown 12y", s:"4 cl", p:"125 Kč" },

    { g:"bourbon", n:"Bulleit 9 Rye", s:"4 cl", p:"125 Kč", i:"bulleit95.jpg" },
    { g:"bourbon", n:"Bulleit 10y", s:"4 cl", p:"155 Kč", i:"bulleitBourbon10.jpg" },
    { g:"bourbon", n:"Jack Daniels", d:"classic, honey, fire", s:"4 cl", p:"85 Kč", i:"JackDanielsFire.jpg" },
    { g:"bourbon", n:"Jim Beam", s:"4 cl", p:"70 Kč" },

    { g:"japonská", n:"Hibiki", s:"4 cl", p:"385 Kč", i:"hibiki.jpg" },
    { g:"japonská", n:"Toki", s:"4 cl", p:"195 Kč", i:"toki.jpg" },
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
