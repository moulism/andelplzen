/* ==========================================================================
   Anděl Plzeň — menu jednotlivých prostor
   -----------------------------------------------------------------------
   MENUS.cafe / MENUS.klub / MENUS.dvorek / MENUS.bistro — každý prostor má
   vlastní menu. Zdroj cen i přiřazení produktů k prostorům: Centrální pokladna
   (sloupce Kavárna / KLUB / Dvorek / BISTRO, říjen 2026).

   Položka: { g: podnadpis ve skupině, n: název, d: popis/ingredience,
              s: velikost, p: cena, i: foto v images/drinks/ }
   Když položka nemá foto (i chybí), zobrazí se bez obrázku.
   Pro doplnění foto stačí přidat soubor do images/drinks/ a vyplnit "i".
   ========================================================================== */

const MENUS = {

/* ======================================================= ANDĚL CAFÉ */
cafe: {
  title: "Anděl Café",
  subtitle: "Výběrová káva • Prémiový bar • Signature drinky",
  menu: [
    {
      cat: "Káva", icon: "coffee",
      note: "Všechny kávy lze připravit v bezkofeinové variantě. Příchuť +10 Kč · Rostlinné mléko +10 Kč",
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
      ]
    },
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
    {
      cat: "Horké nápoje", icon: "tea",
      items: [
        { n:"Horká čokoláda", d:"mléčná, bílá, hořká · šlehačka +20 Kč", s:"25 g", p:"70 Kč" },
        { n:"Holandské kakao", s:"15 g", p:"65 Kč" },
        { n:"Čaj", d:"černý, zelený, heřmánkový, ovocný", s:"1 ks", p:"55 Kč" },
        { n:"Chai Latte", s:"15 g", p:"75 Kč" },
        { n:"Matcha Latte", s:"3 g", p:"75 Kč" },
        { n:"Grog", s:"1 ks", p:"65 Kč" },
        { n:"Horká griotka", s:"1 ks", p:"65 Kč" },
        { n:"Bombardino", p:"99 Kč" },
        { n:"Čerstvý čaj mátový", s:"3 dl", p:"70 Kč" },
        { n:"Čerstvý čaj zázvorový", s:"3 dl", p:"70 Kč" },
        { n:"Sklenice mléka (teplé/studené)", s:"0,2 l", p:"25 Kč" },
        { n:"Svařené víno", d:"bílé / červené", s:"2 dl", p:"75 Kč" },
        { n:"Malinová s citrusy", p:"89 Kč" },
      ]
    },
    {
      cat: "Andělské limonády", icon: "soda",
      note: "Na vyžádání obsluhy lze některé limonády připravit i v teplé variantě.",
      items: [
        { n:"Borůvková", d:"s rozmarýnem", s:"0,4 l", p:"90 Kč" },
        { n:"Brusinková", d:"s mátou", s:"0,4 l", p:"90 Kč" },
        { n:"Citronová", d:"s tymiánem", s:"0,4 l", p:"90 Kč" },
        { n:"Malinová", d:"s citronem", s:"0,4 l", p:"90 Kč" },
        { n:"Zázvorová", d:"s citronem", s:"0,4 l", p:"90 Kč" },
        { n:"Matcha Ice Tea", s:"0,4 l", p:"90 Kč" },
        { n:"Míchané ze sirupu", d:"maracuja, mango, fialka, grep, bezinka, černý rybíz, jahoda", s:"0,4 l", p:"65 Kč" },
        { n:"Míchaná limonáda", s:"0,3 l", p:"65 Kč" },
      ]
    },
    {
      cat: "Pivo & Cider", icon: "beer",
      items: [
        { g:"Čepované", n:"Pilsner Urquell", s:"0,28 l", p:"55 Kč" },
        { g:"Čepované", n:"Pilsner Urquell", s:"0,48 l", p:"70 Kč" },
        { g:"Čepované", n:"Bernard 11°", s:"0,28 l", p:"55 Kč" },
        { g:"Čepované", n:"Bernard 11°", s:"0,48 l", p:"65 Kč" },
        { g:"Nealkoholické", n:"Bernard Free", d:"světlý", s:"0,33 l", p:"59 Kč" },
      ]
    },
    {
      cat: "Nealko nápoje", icon: "soda",
      items: [
        { g:"Čepované", n:"Kofola", s:"0,28 l", p:"50 Kč" },
        { g:"Lahvové", n:"Royal Crown Cola", d:"classic", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Targa", d:"maracuja / citron / pomeranč", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Targa Tonic", d:"classic / růžový / zázvor", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Thomas Henry Tonic", d:"classic / botanical / ginger beer / grepfruit", s:"0,2 l", p:"75 Kč" },
        { g:"Lahvové", n:"Curiosa Džus", d:"jablko / pomeranč / jahoda / multivitamin", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá / perlivá", s:"0,33 l", p:"50 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá", s:"0,75 l", p:"75 Kč" },
        { g:"Lahvové", n:"Red Bull", d:"classic / zero / white peach / pink zero / blue / sezónní", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Vinea", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Seicha Matcha", s:"0,33 l", p:"90 Kč" },
        { g:"Lahvové", n:"Royal Crown Zero", s:"0,25 l", p:"55 Kč" },
        { g:"Lahvové", n:"Club-Mate", s:"0,33 l", p:"70 Kč" },
        { g:"Lahvové", n:"Koka-Mate", s:"0,33 l", p:"80 Kč" },
        { g:"Rozlévané", n:"Soda", s:"0,1 l", p:"10 Kč" },
        { g:"Rozlévané", n:"Sirup", s:"0,04 l", p:"15 Kč" },
        { g:"Rozlévané", n:"Karafa vody", s:"0,5 l", p:"50 Kč" },
        { g:"Rozlévané", n:"Džus", s:"0,1 l", p:"20 Kč" },
        { g:"Rozlévané", n:"Karafa vody", s:"1 l", p:"70 Kč" },
      ]
    },
    {
      cat: "Nealko drinky", icon: "soda",
      items: [
        { n:"Captain Morgan 0% + Cola", d:"Captain Morgan 0% + Royal Crown Cola", s:"1 ks", p:"100 Kč" },
        { n:"Tanqueray 0% + Tonic", d:"Tanqueray 0% gin + Targa tonic", s:"1 ks", p:"120 Kč" },
        { n:"Virgin Mojito", d:"limetková šťáva, simple sirup, máta, soda", s:"1 ks", p:"110 Kč" },
        { n:"Elderflower Fizz 0.0", d:"bezový sirup, limetková šťáva, máta, soda", s:"1 ks", p:"100 Kč" },
        { n:"Crodino Spritz", d:"Crodino, soda, pomeranč", s:"1 ks", p:"105 Kč" },
        { n:"Virgin Colada", d:"nealkoholická verze Piña Colady", p:"110 Kč" },
      ]
    },
    {
      cat: "Shoty", icon: "cocktail",
      items: [
        { n:"Chupito", d:"bílý rum, limetkový cordial, koktejlová třešeň", p:"60 Kč" },
        { n:"Svině Havana", d:"Havana Club 3yo, cola, limetková šťáva", p:"55 Kč" },
      ]
    },
    {
      cat: "Drinky", icon: "cocktail",
      items: [
        { g:"Signature", n:"Gimlet No.TEN", d:"Tanqueray No. Ten, limetková šťáva, citronová kůra", p:"155 Kč", i:"gimlet-no10.jpg" },
        { g:"Signature", n:"Whiskey Sour", d:"Johnnie Walker Black Label, citronová šťáva, cukrový sirup, vaječný bílek, bitters", p:"130 Kč", i:"whiskeySour.jpg" },
        { g:"Signature", n:"Espresso Martini", d:"vodka Ketel One, likér Kahlúa, espresso, simple sirup", p:"145 Kč" },
        { g:"Signature", n:"Mango Tree", d:"rum Captain Morgan Black Spiced, citronový fresh, rozmarýnovo-medový sirup, mangová limonáda Thomas Henry", p:"145 Kč" },
        { g:"Signature", n:"Mullet", d:"whiskey Monkey Shoulder, pomerančový fresh, grapefruit bitters, ginger beer Thomas Henry", p:"165 Kč", i:"mullet.jpg" },
        { g:"Signature", n:"Aviation", d:"gin The Botanist, citronový fresh, fialkový sirup", p:"140 Kč" },
        { g:"Signature", n:"Bramble", d:"gin Tanqueray, likér Chambord, citronový fresh, simple sirup", p:"165 Kč" },
        { g:"Short", n:"Amarancio", d:"Campari, gin, Red Bull White Peach", p:"135 Kč", i:"amarancio.jpg" },
        { g:"Short", n:"Moscow Mule", d:"Absolut vodka, limetková šťáva, ginger beer", p:"140 Kč", i:"moscowMule.jpg" },
        { g:"Short", n:"Skinny Bitch", d:"Absolut vodka, limetková šťáva, soda", p:"105 Kč", i:"skinny-btich.jpg" },
        { g:"Short", n:"White Russian", d:"Absolut vodka, Kahlúa, smetana", p:"145 Kč" },
        { g:"Short", n:"Caipirinha", d:"rum Cachaça, limetky, třtinový cukr", p:"130 Kč", i:"caipirinha.jpg" },
        { g:"Short", n:"Strawberry Margarita", d:"tequila blanco El Jimador, likér Cointreau, limetkový fresh, sůl, jahodové pyré", p:"145 Kč" },
        { g:"Short", n:"Margarita", d:"tequila blanco El Jimador, likér Cointreau, limetkový fresh, sůl, simple sirup", p:"145 Kč" },
        { g:"Short", n:"Daiquiri", d:"rum Havana 3yo, limetkový fresh, simple sirup, lime leaf bitters", p:"95 Kč" },
        { g:"Short", n:"Raspberry Haze", d:"vodka Absolut, likér Chambord, limetkový fresh", p:"80 Kč" },
      ]
    },
    {
      cat: "Drinky 2", icon: "cocktail",
      items: [
        { n:"Beefeater + Tonic", d:"Beefeater gin, Targa tonic", p:"135 Kč" },
        { n:"Tom Collins", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"160 Kč" },
        { n:"Cuba Libre", d:"Havana 3yo / bílý rum, limetková šťáva, Royal Crown Cola", p:"145 Kč", i:"cubaLibre.jpg" },
        { n:"Mojito", d:"Havana 3yo / bílý rum, limetka, simple sirup, máta, soda", p:"145 Kč", i:"Mojito.jpg" },
        { n:"Malinové Mojito", d:"Havana 3yo, limetková šťáva, malinový sirup/pyré, máta, soda", p:"155 Kč" },
        { n:"Dark 'n' Stormy", d:"tmavý rum Bacardi, ginger beer, limetková šťáva", p:"140 Kč", i:"darkAndStormy.jpg" },
        { n:"Sex on the Beach", d:"vodka, broskvový likér, pomerančový džus, grenadina", p:"155 Kč", i:"SexOnTheBeach.jpg" },
        { n:"Tequila Sunrise", d:"tequila, pomerančový džus, grenadina", p:"145 Kč" },
        { n:"Long Island Iced Tea", d:"vodka, gin, bílý rum, tequila, Cointreau, citronová šťáva, Royal Crown Cola", p:"230 Kč" },
        { n:"Gin Sunset", d:"gin, pomerančový džus, grenadina", p:"130 Kč" },
        { n:"Pink Lady", d:"Absolut vodka, prosecco, malinový sirup/pyré, limetková šťáva, soda", p:"140 Kč" },
        { n:"Gin Fizz", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"150 Kč", i:"ginFizz.jpg" },
        { n:"Cosmopolitan", d:"citronová vodka, Triple Sec, brusinkový džus, limetková šťáva", p:"160 Kč" },
        { n:"Negroni", d:"gin, Campari, Martini Rosso", p:"170 Kč" },
        { n:"Alon Colada", p:"195 Kč" },
        { n:"Ginger Papa", d:"Don Papa Masskara, limeta, Thomas Henry ginger", p:"195 Kč" },
        { n:"Piña Colada", d:"rum Malibu, smetana, kokosové pyré, ananasový džus", p:"145 Kč", i:"pinaColada.jpg" },
      ]
    },
    {
      cat: "Drinky 3", icon: "cocktail",
      items: [
        { n:"Aperol Spritz", d:"prosecco, Aperol, soda", p:"135 Kč" },
        { n:"Campari Spritz", d:"prosecco, Campari, soda", p:"135 Kč" },
        { n:"Sarti Spritz", d:"prosecco, Sarti Rosa, soda", p:"135 Kč", i:"SartiRosa.jpg" },
        { n:"Peach Spritz", d:"prosecco, Red Bull White Peach, limetková šťáva, máta, limetka", p:"135 Kč" },
        { n:"Mimosa", d:"prosecco, pomerančový džus", p:"105 Kč" },
        { n:"Hugo Spritz", d:"prosecco, bezový sirup, soda, máta, limetková šťáva", p:"135 Kč" },
        { n:"Limoncello Spritz", d:"prosecco, limoncello, soda", p:"135 Kč", i:"limonce.jpg" },
      ]
    },
    {
      cat: "Víno", icon: "wine",
      items: [
        { g:"Bílé", n:"Chardonnay", d:"bílé, suché", s:"1 dcl", p:"45 Kč" },
        { g:"Bílé", n:"Chardonnay", d:"bílé, suché", s:"2 dcl", p:"70 Kč" },
        { g:"Bílé", n:"Pálava", s:"1 dcl", p:"45 Kč" },
        { g:"Bílé", n:"Rulandské šedé", s:"1 dcl", p:"45 Kč" },
        { g:"Bílé", n:"Ryzlink", s:"1 dcl", p:"35 Kč" },
        { g:"Bílé", n:"Ryzlink", s:"2 dcl", p:"70 Kč" },
        { g:"Bílé", n:"Sauvignon", s:"1 dcl", p:"45 Kč" },
        { g:"Červené", n:"Dornfelder", s:"1 dcl", p:"45 Kč" },
        { g:"Červené", n:"Merlot", s:"1 dcl", p:"35 Kč" },
        { g:"Červené", n:"Merlot", s:"2 dcl", p:"70 Kč" },
        { g:"Růžové", n:"Svatovavřinecké rosé", s:"1 dcl", p:"45 Kč" },
        { g:"Šumivé", n:"Astoria Fano Asolo", s:"1 dcl", p:"85 Kč" },
        { g:"Šumivé", n:"Lambrusco Bianco", s:"1 dcl", p:"35 Kč" },
        { g:"Šumivé", n:"Lambrusco Rossato", s:"1 dcl", p:"35 Kč" },
        { g:"Šumivé", n:"Lambrusco Rosso", s:"1 dcl", p:"35 Kč" },
        { g:"Šumivé", n:"Prosecco", d:"šumivé, suché", s:"1 dcl", p:"50 Kč" },
        { g:"Šumivé", n:"Prosecco", s:"2 dcl", p:"100 Kč" },
        { g:"Šumivé", n:"Veneto frizzante IGP O", s:"1 dcl", p:"47 Kč" },
        { g:"Ostatní", n:"Fojtík (výběr dle nabídky)", s:"1 dcl", p:"50 Kč" },
        { g:"Ostatní", n:"Fojtík (výběr dle nabídky)", s:"2 dcl", p:"100 Kč" },
        { g:"Ostatní", n:"Portské Tawny", s:"5 cl", p:"55 Kč" },
        { g:"Ostatní", n:"Šmíd (výběr dle nabídky)", s:"1 dcl", p:"45 Kč" },
        { g:"Ostatní", n:"Šmíd (výběr dle nabídky)", s:"2 dcl", p:"90 Kč" },
        { g:"Ostatní", n:"Vinný střik", d:"víno se sodou", s:"2 dcl", p:"60 Kč" },
      ]
    },
    {
      cat: "Šumivá vína", icon: "wine",
      items: [
        { n:"Bohemia Sekt nealkoholický", p:"290 Kč" },
        { n:"Bohemia Sekt Brut", p:"350 Kč" },
        { n:"Bohemia Sekt Demi", p:"350 Kč" },
        { n:"i heart Prosecco Frizzante", s:"0,75 l", p:"390 Kč" },
        { n:"Mionetto Prosecco Rosé", s:"0,75 l", p:"390 Kč" },
        { n:"Mionetto Treviso Frizzante0", s:"0,75 l", p:"390 Kč" },
        { n:"Bohemia Sekt ICE", s:"1,5 l", p:"390 Kč" },
        { n:"FILI prosecco Frizzante DOP", p:"480 Kč" },
        { n:"Bohemia Sekt Prestige brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige Chardonnay brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige demi sec", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige rosé brut", s:"0,75 l", p:"490 Kč" },
        { n:"Monteverdi Prosecco", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Fanó Asolo", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Giro D'Italia", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Lounge Moscato", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Millesimato Rosé V8", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Spumante Brut", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Treviso Extra Dry Galie", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Valdobbiadene S.", s:"0,75 l", p:"890 Kč" },
        { n:"Bouvet crémant de loire Excellence brut", p:"1040 Kč" },
        { n:"Ca del Bosco Prestige", s:"0,75 l", p:"1950 Kč" },
        { n:"Mumm Cordon Rouge", s:"0,75 l", p:"1990 Kč" },
        { n:"Ca'del Bosco Cuveé Rosé", s:"0,75 l", p:"1990 Kč" },
        { n:"Moët & Chandon Brut Imperial", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Ice Impérial", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Ice Impérial Rosé", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Rosé Impérial", s:"0,75 l", p:"2190 Kč" },
        { n:"Taittinger Brut Prestige", s:"0,75 l", p:"2190 Kč" },
        { n:"Taittinger Brut Réserve", s:"0,75 l", p:"2190 Kč" },
        { n:"Ruinart R de Ruinart Brut", s:"0,75 l", p:"2490 Kč" },
        { n:"Veuve Clicquot Brut Yellow Label", s:"0,75 l", p:"2490 Kč" },
        { n:"Moët & Chandon Brut Impérial Giftbox", s:"0,75 l", p:"2590 Kč" },
        { n:"Moët & Chandon Brut Impérial Holiday", s:"0,75 l", p:"2590 Kč" },
        { n:"Ca'del Bosco Vintage Satén", s:"0,75 l", p:"2590 Kč" },
        { n:"Veuve Clicquot Brut Rosé", s:"0,75 l", p:"3490 Kč" },
        { n:"Moët & Chandon Brut Imperial", s:"1,5 l", p:"4380 Kč" },
        { n:"Dom Pérignon Vintage 2015", s:"0,75 l", p:"6490 Kč" },
      ]
    },
    {
      cat: "Lahvová vína", icon: "wine",
      note: "Ceny jsou za celou láhev.",
      items: [
        { g:"Bílkovi", n:"Cuvée Muškát & Muller T.", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"MV Cuvée", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay Pinot Berry", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Rulandské šedé MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Veltlínské zelené MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"I love Pinot MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Creative wine 2023", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Creative wine 2024", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Neuburg blanc", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Nina Da Vinci - Müllerka", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Pikasso Max - Müllerka", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Tramín", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sylvánské zelené 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sauvignon blanc 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sauvignon blanc 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Ryzlink vlašský 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Riesling Berry 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Veltlín Berry 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Cuvée 1966", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Tramín červený 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sylvánské zelené 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sylvánské zelené 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Hibernal 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Ryzlink rýnský 2024", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Pálava 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Velká Červená Slípka 22", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Veltlín Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Tramín orange 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Riesling Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Riesling Berry 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Pinot Blanc Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay Pinot Berry 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay Pinot Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Markéta cuevée 23", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Elegant cuvée 23", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Compliment cuevée 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Dornfelder 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Neronet 23", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Velká Bílá slípka 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Veltlín Berry 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Velká Červená Slípka 21", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Nina cuvée 21", s:"0,75 l", p:"620 Kč" },
        { g:"Fojtík", n:"Tramín červený", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Výběr dle nabídky", s:"0,75 l", p:"370 Kč" },
        { g:"Fojtík", n:"Hibernal", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Rulandské šedé", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Pálava", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"V. zelené", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Cab. Sauvignon", s:"0,75 l", p:"390 Kč" },
        { g:"Hajduch", n:"Syl. zelené", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Ryzlink rýnský", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Tramín", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Hibernal", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Rulandské šedé", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Solaris", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Dornfelder", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Bambule", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Pálava", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Merlot", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Rulandské modré", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Sauvignon", s:"0,7 l", p:"390 Kč" },
        { g:"Šmíd", n:"Výběr dle nabídky", s:"0,75 l", p:"350 Kč" },
        { g:"Šmíd", n:"Tramín červený", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Ryzlink vlašský", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Neuberské", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Neronet", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Dornfelder", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Sauvignon", s:"0,75 l", p:"390 Kč" },
      ]
    },
    {
      cat: "Vermouth", icon: "spirit",
      items: [
        { n:"Martini Bianco", s:"10 cl", p:"70 Kč" },
        { n:"Martini Extra Dry", s:"10 cl", p:"70 Kč", i:"MartiniExtraDry.jpg" },
        { n:"Martini Rosso", s:"10 cl", p:"70 Kč" },
      ]
    },
    {
      cat: "Absinth", icon: "spirit",
      note: "Možnost absinthové fontány.",
      items: [
        { n:"Absinth", s:"4 cl", p:"75 Kč" },
        { n:"Absinthový vaječňák", s:"4 cl", p:"65 Kč" },
        { n:"La Clandestine Marienne", s:"4 cl", p:"145 Kč", i:"laClandestineBlanche.jpg" },
        { n:"La Corneille Verte", s:"4 cl", p:"95 Kč", i:"LaCorneille.jpg" },
        { n:"Pernod Recette Traditionnelle", s:"4 cl", p:"165 Kč", i:"perdonAbsinthe.jpg" },
        { n:"St. Antoine", s:"4 cl", p:"120 Kč", i:"abstinthe-st-antoine.jpg" },
      ]
    },
    {
      cat: "Likéry", icon: "spirit",
      items: [
        { n:"Amaretto", s:"4 cl", p:"75 Kč" },
        { n:"Aperol", s:"4 cl", p:"69 Kč" },
        { n:"Baileys", s:"4 cl", p:"65 Kč" },
        { n:"Becherovka", s:"4 cl", p:"60 Kč" },
        { n:"Campari", s:"4 cl", p:"65 Kč" },
        { n:"Fernet Stock", s:"4 cl", p:"60 Kč" },
        { n:"Fernet Stock Citrus", s:"4 cl", p:"60 Kč" },
        { n:"Griotka", s:"4 cl", p:"60 Kč" },
        { n:"Jägermeister", s:"4 cl", p:"70 Kč" },
        { n:"Limoncello", s:"4 cl", p:"69 Kč" },
        { n:"Peprmintový likér", s:"4 cl", p:"60 Kč" },
        { n:"Polar Jahoda", s:"4 cl", p:"60 Kč" },
        { n:"Vaječný likér Bartida", s:"4 cl", p:"60 Kč" },
      ]
    },
    {
      cat: "Brandy / Cognac", icon: "spirit",
      items: [
        { n:"Hennessy V.S.O.P.", s:"4 cl", p:"185 Kč" },
        { n:"Metaxa 5*", s:"4 cl", p:"65 Kč", i:"Metaxa.jpg" },
        { n:"Metaxa 7*", s:"4 cl", p:"85 Kč" },
      ]
    },
    {
      cat: "Vodka", icon: "spirit",
      items: [
        { n:"Absolut", s:"4 cl", p:"75 Kč" },
        { n:"Babička", s:"4 cl", p:"125 Kč", i:"babicka.jpg" },
        { n:"Grey Goose", s:"4 cl", p:"130 Kč" },
        { n:"Ketel One", s:"4 cl", p:"90 Kč" },
      ]
    },
    {
      cat: "Rum", icon: "spirit",
      items: [
        { n:"Abuelo 15 yo Napoleon", s:"4 cl", p:"260 Kč", i:"abuelo-napoleon.jpg" },
        { n:"Abuelo 15 yo Oloroso", s:"4 cl", p:"260 Kč", i:"abuelo-oloroso.jpg" },
        { n:"Abuelo 15 yo Port Cask", s:"4 cl", p:"285 Kč", i:"abuelo-tawny.jpg" },
        { n:"Božkov", s:"4 cl", p:"60 Kč" },
        { n:"Captain Bucanero", s:"4 cl", p:"89 Kč", i:"capitanBucanero.jpg" },
        { n:"Captain Morgan 0%", s:"4 cl", p:"50 Kč" },
        { n:"Captain Morgan Black", s:"4 cl", p:"60 Kč" },
        { n:"Captain Morgan Spiced Gold", s:"4 cl", p:"70 Kč", i:"capitanMorganBlackSpiced.jpg" },
        { n:"Diplomatico", s:"4 cl", p:"135 Kč", i:"diplomatico.jpg" },
        { n:"Diplomatico Mantuano", s:"4 cl", p:"85 Kč", i:"diplomatico-mantuano.jpg" },
        { n:"Don Papa", s:"4 cl", p:"135 Kč", i:"donPapa-rum.jpg" },
        { n:"Don Papa Alon", s:"4 cl", p:"135 Kč" },
        { n:"Don Papa Baroko", s:"4 cl", p:"160 Kč", i:"donPapa-baroko.jpg" },
        { n:"Don Papa Gayuma", s:"4 cl", p:"270 Kč", i:"donPapa-gayuma.jpg" },
        { n:"Don Papa Masskara", s:"4 cl", p:"150 Kč", i:"donPap-masskara.jpg" },
        { n:"Espero Caribbean Orange", s:"4 cl", p:"85 Kč" },
        { n:"Havana 3yo", s:"4 cl", p:"70 Kč", i:"HavanaClub.jpg" },
        { n:"Havana 7yo", s:"4 cl", p:"95 Kč", i:"havanaClub-7.jpg" },
        { n:"Kakadu", s:"4 cl", p:"75 Kč", i:"kakadu.jpg" },
        { n:"Legendario 7yo", s:"4 cl", p:"90 Kč", i:"Legendario.jpg" },
        { n:"Malibu", s:"4 cl", p:"65 Kč" },
        { n:"Plantation Pineapple", s:"4 cl", p:"95 Kč", i:"plantationPineapple.jpg" },
        { n:"Plantation XO", s:"4 cl", p:"165 Kč", i:"plantation.jpg" },
        { n:"Ron Zacapa Centenario 23", s:"4 cl", p:"135 Kč", i:"Zacapa.jpg" },
        { n:"Zacapa Centenario Royal", s:"4 cl", p:"890 Kč", i:"zacapaRoyal.jpg" },
      ]
    },
    {
      cat: "Pálenky", icon: "spirit",
      items: [
        { n:"Baron Hildprandt Hruškovice", s:"4 cl", p:"90 Kč" },
        { n:"Borovička Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Hruškovice Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Slivovice Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Višňovka Žufánek", s:"4 cl", p:"80 Kč" },
      ]
    },
    {
      cat: "Tequila", icon: "spirit",
      items: [
        { n:"Don Julio Blanco", s:"4 cl", p:"220 Kč", i:"donJulio-blanco.jpg" },
        { n:"Don Julio Reposado", s:"4 cl", p:"235 Kč", i:"donJulio-reposado.jpg" },
        { n:"El Jimador Blanco", s:"4 cl", p:"95 Kč" },
        { n:"El Jimador Reposado", s:"4 cl", p:"95 Kč" },
      ]
    },
    {
      cat: "Gin", icon: "spirit",
      note: "Možnost kombinovat se všemi toniky.",
      items: [
        { n:"Beefeater", s:"4 cl", p:"75 Kč" },
        { n:"Beefeater Blood Orange", s:"4 cl", p:"75 Kč" },
        { n:"Beefeater Pink", s:"4 cl", p:"75 Kč", i:"beefeaterPinkStraw.jpg" },
        { n:"Gin Mare", s:"4 cl", p:"125 Kč" },
        { n:"Gin Mare Capri", s:"4 cl", p:"155 Kč", i:"ginMareCapri.jpg" },
        { n:"Hendrick's", s:"4 cl", p:"95 Kč", i:"hendricksGin.jpg" },
        { n:"Hendrick's Flora Adora", s:"4 cl", p:"140 Kč" },
        { n:"Malfy Rosa", s:"4 cl", p:"105 Kč" },
        { n:"Roku", s:"4 cl", p:"105 Kč" },
        { n:"Roku Sakura", s:"4 cl", p:"105 Kč" },
        { n:"Tanqueray", s:"4 cl", p:"95 Kč" },
        { n:"Tanqueray 0%", s:"4 cl", p:"110 Kč", i:"tanquerayAlcoFree.jpg" },
        { n:"Tanqueray Flor de Sevilla", s:"4 cl", p:"85 Kč" },
        { n:"Tanqueray No. TEN", s:"4 cl", p:"115 Kč", i:"noTen.jpg" },
        { n:"Tanqueray Royale", s:"4 cl", p:"105 Kč", i:"tanquerayRoyale.jpg" },
        { n:"The Botanist", s:"4 cl", p:"125 Kč", i:"TheBotanist.jpg" },
      ]
    },
    {
      cat: "Whisky", icon: "spirit",
      items: [
        { g:"Irská whisky", n:"Jameson", s:"4 cl", p:"75 Kč", i:"Jameson.jpg" },
        { g:"Irská whisky", n:"Tullamore Dew", s:"4 cl", p:"75 Kč", i:"tullamoreDEW.jpg" },
        { g:"Skotská whisky", n:"Bruichladdich", s:"4 cl", p:"185 Kč", i:"bruichladdich.jpg" },
        { g:"Skotská whisky", n:"Johnnie Walker 18 yo", s:"4 cl", p:"390 Kč", i:"johnnieWalker-18years.jpg" },
        { g:"Skotská whisky", n:"Johnnie Walker Black Label", s:"4 cl", p:"110 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Double Black", s:"4 cl", p:"150 Kč", i:"doubleBlack.jpg" },
        { g:"Skotská whisky", n:"Johnnie Walker Red Label", s:"4 cl", p:"75 Kč" },
        { g:"Skotská whisky", n:"Lagavulin 16 yo", s:"4 cl", p:"330 Kč", i:"lagavulin.jpg" },
        { g:"Skotská whisky", n:"Laphroaig 10 yo", s:"4 cl", p:"185 Kč" },
        { g:"Skotská whisky", n:"Monkey Shoulder", s:"4 cl", p:"95 Kč", i:"MonkeyShoulder.jpg" },
        { g:"Skotská whisky", n:"Oban 14 yo", s:"4 cl", p:"260 Kč", i:"Orban.jpg" },
        { g:"Skotská whisky", n:"Octomore", s:"4 cl", p:"690 Kč", i:"Octomore.jpg" },
        { g:"Skotská whisky", n:"Singleton of Dufftown 12 yo", s:"4 cl", p:"125 Kč" },
        { g:"Japonská whisky", n:"Hibiki", s:"4 cl", p:"385 Kč", i:"hibiki.jpg" },
        { g:"Japonská whisky", n:"Suntory Toki", s:"4 cl", p:"195 Kč", i:"toki.jpg" },
        { g:"Americká whiskey", n:"Jack Daniel's", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Fire", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Honey", s:"4 cl", p:"85 Kč" },
        { g:"Bourbon", n:"Bulleit Bourbon 10 yo", s:"4 cl", p:"155 Kč", i:"bulleitBourbon10.jpg" },
        { g:"Bourbon", n:"Bulleit Rye", s:"4 cl", p:"125 Kč", i:"bulleit95.jpg" },
        { g:"Bourbon", n:"Jim Beam", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Pochutiny", icon: "snack",
      items: [
        { n:"Arašídy", p:"45 Kč" },
        { n:"Chipsy", p:"45 Kč" },
        { n:"Mandle", p:"65 Kč" },
        { n:"Kešu", p:"65 Kč" },
      ]
    },
    {
      cat: "Něco k snědku", icon: "snack",
      items: [
        { n:"Croissant", s:"1 ks", p:"85 Kč" },
        { n:"Toust", s:"1 ks", p:"65 Kč" },
        { n:"Obložený chlebíček", p:"45 Kč" },
        { n:"Panino", p:"95 Kč" },
        { n:"Wrap", p:"95 Kč" },
      ]
    },
    {
      cat: "Dezerty", icon: "snack",
      items: [
        { n:"Dezerty", d:"dle denní nabídky", p:"55–115 Kč" },
      ]
    },
  ]
},

/* ======================================================= ANDĚL MUSIC CLUB */
klub: {
  title: "Anděl Music Club",
  subtitle: "Pivo • Drinky • Shoty • Lihoviny",
  menu: [
    {
      cat: "Andělské limonády", icon: "soda",
      items: [
        { n:"Míchaná limonáda", s:"0,3 l", p:"65 Kč" },
      ]
    },
    {
      cat: "Pivo & Cider", icon: "beer",
      items: [
        { g:"Čepované", n:"Pilsner Urquell", s:"0,28 l", p:"55 Kč" },
        { g:"Čepované", n:"Pilsner Urquell", s:"0,48 l", p:"70 Kč" },
        { g:"Čepované", n:"Gambrinus 11°", s:"0,28 l", p:"52 Kč" },
        { g:"Čepované", n:"Gambrinus 11°", s:"0,48 l", p:"65 Kč" },
        { g:"Čepované", n:"Proud", s:"0,38 l", p:"59 Kč" },
        { g:"Lahvové", n:"Pilsner Urquell", s:"0,33 l", p:"59 Kč" },
        { g:"Lahvové", n:"Heineken", s:"0,33 l", p:"59 Kč" },
        { g:"Lahvové", n:"Corona", s:"0,355 l", p:"85 Kč" },
        { g:"Nealkoholické", n:"Bernard Free", d:"světlý", s:"0,33 l", p:"59 Kč" },
        { g:"Nealkoholické", n:"Bernard Free", d:"švestka / grep", s:"0,5 l", p:"59 Kč" },
        { g:"Nealkoholické", n:"Birell", d:"světlý", s:"0,33 l", p:"55 Kč" },
        { g:"Cider", n:"Frisco Cider", s:"0,33 l", p:"59 Kč" },
      ]
    },
    {
      cat: "Nealko nápoje", icon: "soda",
      items: [
        { g:"Čepované", n:"Kofola", s:"0,28 l", p:"50 Kč" },
        { g:"Čepované", n:"Kofola", s:"0,48 l", p:"65 Kč" },
        { g:"Čepované", n:"Birell Pomelo-grep", s:"0,28 l", p:"55 Kč" },
        { g:"Čepované", n:"Birell Pomelo-grep", s:"0,48 l", p:"65 Kč" },
        { g:"Lahvové", n:"Royal Crown Cola", d:"classic / zero", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Targa", d:"maracuja / citron / pomeranč", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Targa Tonic", d:"classic / růžový / zázvor", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Thomas Henry Tonic", d:"classic / botanical / ginger beer / grepfruit", s:"0,2 l", p:"75 Kč" },
        { g:"Lahvové", n:"Curiosa Džus", d:"jablko / pomeranč / jahoda / multivitamin", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá / perlivá", s:"0,33 l", p:"50 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá", s:"0,75 l", p:"75 Kč" },
        { g:"Lahvové", n:"Dilmah Ice Tea", d:"broskev / jasmín / citron", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Red Bull", d:"classic / zero / white peach / pink zero / blue / sezónní", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Vinea", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Club-Mate", s:"0,33 l", p:"70 Kč" },
        { g:"Lahvové", n:"Koka-Mate", s:"0,33 l", p:"80 Kč" },
        { g:"Rozlévané", n:"Soda", s:"0,1 l", p:"10 Kč" },
        { g:"Rozlévané", n:"Sirup", s:"0,04 l", p:"15 Kč" },
        { g:"Rozlévané", n:"Džus", s:"0,1 l", p:"20 Kč" },
      ]
    },
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
    {
      cat: "Shoty", icon: "cocktail",
      items: [
        { n:"Jelen", d:"Jägermeister + Red Bull Classic", p:"60 Kč" },
        { n:"Lítačka", d:"Absolut vodka + Red Bull White Peach", p:"60 Kč" },
        { n:"Včelka", d:"Jim Beam Honey + Red Bull White Peach", p:"60 Kč" },
        { n:"Chupito", d:"bílý rum, limetkový cordial, koktejlová třešeň", p:"60 Kč" },
        { n:"B52", d:"Kahlúa + Baileys + Stroh", p:"105 Kč" },
        { n:"Svině Havana", d:"Havana Club 3yo, cola, limetková šťáva", p:"55 Kč" },
        { n:"Svině Vodka", d:"vodka, džus nebo cola dle volby", p:"55 Kč" },
        { n:"Karibská Bomba", d:"Malibu + Red Bull White Peach", p:"60 Kč" },
        { n:"Illusion", d:"Bols Peach, vodka, pomerančový džus, grenadina", p:"80 Kč" },
      ]
    },
    {
      cat: "Drinky", icon: "cocktail",
      items: [
        { g:"Signature", n:"Gimlet No.TEN", d:"Tanqueray No. Ten, limetková šťáva, citronová kůra", p:"155 Kč", i:"gimlet-no10.jpg" },
        { g:"Short", n:"Absolut + džus", d:"Absolut vodka, pomerančový džus", p:"110 Kč" },
        { g:"Short", n:"Amarancio", d:"Campari, gin, Red Bull White Peach", p:"135 Kč", i:"amarancio.jpg" },
        { g:"Short", n:"Moscow Mule", d:"Absolut vodka, limetková šťáva, ginger beer", p:"140 Kč", i:"moscowMule.jpg" },
        { g:"Short", n:"Skinny Bitch", d:"Absolut vodka, limetková šťáva, soda", p:"105 Kč", i:"skinny-btich.jpg" },
        { g:"Short", n:"Skinny Bitch Malina", d:"Absolut vodka, limetková šťáva, malinový sirup, soda", p:"115 Kč" },
        { g:"Short", n:"Božkov + RC Cola", d:"Božkov, Royal Crown Cola", p:"95 Kč" },
        { g:"Short", n:"Captain Morgan + RC Cola", d:"Captain Morgan Spiced Gold, Royal Crown Cola", p:"110 Kč" },
        { g:"Short", n:"Jack Daniels + RC Cola", d:"Jack Daniel's, Royal Crown Cola", p:"125 Kč" },
        { g:"Short", n:"Jameson + Ginger Beer", d:"Jameson, ginger beer, limetková šťáva", p:"115 Kč" },
        { g:"Short", n:"White Russian", d:"Absolut vodka, Kahlúa, smetana", p:"145 Kč" },
        { g:"Short", n:"Black Russian", d:"Absolut vodka, Kahlúa", p:"130 Kč" },
        { g:"Short", n:"Štrúdl", d:"Jack Daniel's Fire, jablečný džus, skořice", p:"150 Kč", i:"JackDanielsFire.jpg" },
      ]
    },
    {
      cat: "Drinky 2", icon: "cocktail",
      items: [
        { n:"Beton", d:"Becherovka, Targa tonic", p:"110 Kč" },
        { n:"Bavorák", d:"Fernet Stock, Targa tonic", p:"110 Kč" },
        { n:"Beefeater + Tonic", d:"Beefeater gin, Targa tonic", p:"135 Kč" },
        { n:"Tanqueray + Thomas Henry", d:"Tanqueray gin, Thomas Henry tonic", p:"170 Kč" },
        { n:"Opihr + Thomas Henry", d:"Opihr gin, Thomas Henry tonic", p:"200 Kč" },
        { n:"Bombay + Thomas Henry", d:"Bombay Sapphire, Thomas Henry tonic", p:"150 Kč" },
        { n:"Gin Mare + Thomas Henry", d:"Gin Mare, Thomas Henry tonic", p:"200 Kč" },
        { n:"Tom Collins", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"160 Kč" },
        { n:"Tom Collins Royale", d:"Tanqueray Royale gin, citronová šťáva, simple sirup, soda", p:"170 Kč" },
        { n:"Cuba Libre", d:"Havana 3yo / bílý rum, limetková šťáva, Royal Crown Cola", p:"145 Kč", i:"cubaLibre.jpg" },
        { n:"Mojito", d:"Havana 3yo / bílý rum, limetka, simple sirup, máta, soda", p:"145 Kč", i:"Mojito.jpg" },
        { n:"Malinové Mojito", d:"Havana 3yo, limetková šťáva, malinový sirup/pyré, máta, soda", p:"155 Kč" },
        { n:"Dark 'n' Stormy", d:"tmavý rum Bacardi, ginger beer, limetková šťáva", p:"140 Kč", i:"darkAndStormy.jpg" },
        { n:"Sex on the Beach", d:"vodka, broskvový likér, pomerančový džus, grenadina", p:"155 Kč", i:"SexOnTheBeach.jpg" },
        { n:"Sun Tonic", d:"Metaxa 5*, tonic", p:"125 Kč" },
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
        { n:"Hendrick's + Thomas Henry", d:"Gin Hendrick's, Thomas Henry tonic", p:"150 Kč" },
        { n:"Malfy + Thomas Henry", d:"Gin Malfy, Thomas Henry tonic", p:"150 Kč" },
        { n:"Alon Colada", p:"195 Kč" },
        { n:"Ginger Papa", d:"Don Papa Masskara, limeta, Thomas Henry ginger", p:"195 Kč" },
        { n:"Piña Colada", d:"rum Malibu, smetana, kokosové pyré, ananasový džus", p:"145 Kč", i:"pinaColada.jpg" },
      ]
    },
    {
      cat: "Drinky 3", icon: "cocktail",
      items: [
        { n:"Aperol Spritz", d:"prosecco, Aperol, soda", p:"135 Kč" },
        { n:"Campari Spritz", d:"prosecco, Campari, soda", p:"135 Kč" },
        { n:"Sarti Spritz", d:"prosecco, Sarti Rosa, soda", p:"135 Kč", i:"SartiRosa.jpg" },
        { n:"Peach Spritz", d:"prosecco, Red Bull White Peach, limetková šťáva, máta, limetka", p:"135 Kč" },
        { n:"Mimosa", d:"prosecco, pomerančový džus", p:"105 Kč" },
        { n:"Hugo Spritz", d:"prosecco, bezový sirup, soda, máta, limetková šťáva", p:"135 Kč" },
        { n:"Limoncello Spritz", d:"prosecco, limoncello, soda", p:"135 Kč", i:"limonce.jpg" },
      ]
    },
    {
      cat: "Víno", icon: "wine",
      items: [
        { g:"Šumivé", n:"Astoria Fano Asolo", s:"1 dcl", p:"85 Kč" },
        { g:"Šumivé", n:"Prosecco", d:"šumivé, suché", s:"1 dcl", p:"50 Kč" },
        { g:"Šumivé", n:"Prosecco", s:"2 dcl", p:"100 Kč" },
        { g:"Ostatní", n:"Fojtík (výběr dle nabídky)", s:"1 dcl", p:"50 Kč" },
        { g:"Ostatní", n:"Fojtík (výběr dle nabídky)", s:"2 dcl", p:"100 Kč" },
        { g:"Ostatní", n:"Šmíd (výběr dle nabídky)", s:"1 dcl", p:"45 Kč" },
        { g:"Ostatní", n:"Šmíd (výběr dle nabídky)", s:"2 dcl", p:"90 Kč" },
        { g:"Ostatní", n:"Vinný střik", d:"víno se sodou", s:"2 dcl", p:"60 Kč" },
        { g:"Ostatní", n:"Víno", d:"bílé / červené", s:"1 dcl", p:"40 Kč" },
        { g:"Ostatní", n:"Víno", d:"bílé / červené", s:"2 dcl", p:"80 Kč" },
      ]
    },
    {
      cat: "Šumivá vína", icon: "wine",
      items: [
        { n:"Bohemia Sekt nealkoholický", p:"290 Kč" },
        { n:"Bohemia Sekt Brut", p:"350 Kč" },
        { n:"Bohemia Sekt Demi", p:"350 Kč" },
        { n:"Bohemia Sekt ICE", s:"1,5 l", p:"390 Kč" },
        { n:"Bohemia Sekt Prestige brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige Chardonnay brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige demi sec", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige rosé brut", s:"0,75 l", p:"490 Kč" },
        { n:"Astoria Fanó Asolo", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Giro D'Italia", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Lounge Moscato", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Millesimato Rosé V8", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Spumante Brut", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Treviso Extra Dry Galie", s:"0,75 l", p:"590 Kč" },
        { n:"Astoria Valdobbiadene S.", s:"0,75 l", p:"890 Kč" },
        { n:"Bouvet crémant de loire Excellence brut", p:"1040 Kč" },
        { n:"Ca del Bosco Prestige", s:"0,75 l", p:"1950 Kč" },
        { n:"Mumm Cordon Rouge", s:"0,75 l", p:"1990 Kč" },
        { n:"Ca'del Bosco Cuveé Rosé", s:"0,75 l", p:"1990 Kč" },
        { n:"Moët & Chandon Brut Imperial", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Ice Impérial", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Ice Impérial Rosé", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Rosé Impérial", s:"0,75 l", p:"2190 Kč" },
        { n:"Taittinger Brut Prestige", s:"0,75 l", p:"2190 Kč" },
        { n:"Taittinger Brut Réserve", s:"0,75 l", p:"2190 Kč" },
        { n:"Ruinart R de Ruinart Brut", s:"0,75 l", p:"2490 Kč" },
        { n:"Veuve Clicquot Brut Yellow Label", s:"0,75 l", p:"2490 Kč" },
        { n:"Moët & Chandon Brut Impérial Giftbox", s:"0,75 l", p:"2590 Kč" },
        { n:"Moët & Chandon Brut Impérial Holiday", s:"0,75 l", p:"2590 Kč" },
        { n:"Ca'del Bosco Vintage Satén", s:"0,75 l", p:"2590 Kč" },
        { n:"Veuve Clicquot Brut Rosé", s:"0,75 l", p:"3490 Kč" },
        { n:"Moët & Chandon Brut Imperial", s:"1,5 l", p:"4380 Kč" },
      ]
    },
    {
      cat: "Lahvová vína", icon: "wine",
      note: "Ceny jsou za celou láhev.",
      items: [
        { g:"Bílkovi", n:"Cuvée Muškát & Muller T.", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"MV Cuvée", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay Pinot Berry", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Rulandské šedé MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Veltlínské zelené MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"I love Pinot MZV", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Creative wine 2023", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Creative wine 2024", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Neuburg blanc", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Nina Da Vinci - Müllerka", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Pikasso Max - Müllerka", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Tramín", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sylvánské zelené 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sauvignon blanc 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sauvignon blanc 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Ryzlink vlašský 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Riesling Berry 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Veltlín Berry 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Cuvée 1966", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Tramín červený 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sylvánské zelené 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Sylvánské zelené 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Hibernal 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Ryzlink rýnský 2024", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Pálava 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Velká Červená Slípka 22", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Veltlín Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Tramín orange 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Riesling Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Riesling Berry 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Pinot Blanc Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay Pinot Berry 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Chardonnay Pinot Berry 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Markéta cuevée 23", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Elegant cuvée 23", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Compliment cuevée 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Dornfelder 23", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Neronet 23", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Velká Bílá slípka 22", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Veltlín Berry 24", s:"0,75 l", p:"490 Kč" },
        { g:"Bílkovi", n:"Velká Červená Slípka 21", s:"0,75 l", p:"620 Kč" },
        { g:"Bílkovi", n:"Nina cuvée 21", s:"0,75 l", p:"620 Kč" },
        { g:"Fojtík", n:"Tramín červený", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Výběr dle nabídky", s:"0,75 l", p:"370 Kč" },
        { g:"Fojtík", n:"Hibernal", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Rulandské šedé", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Pálava", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"V. zelené", s:"0,75 l", p:"390 Kč" },
        { g:"Fojtík", n:"Cab. Sauvignon", s:"0,75 l", p:"390 Kč" },
        { g:"Hajduch", n:"Syl. zelené", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Ryzlink rýnský", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Tramín", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Hibernal", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Rulandské šedé", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Solaris", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Dornfelder", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Bambule", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Pálava", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Merlot", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Rulandské modré", s:"0,7 l", p:"390 Kč" },
        { g:"Hajduch", n:"Sauvignon", s:"0,7 l", p:"390 Kč" },
        { g:"Šmíd", n:"Výběr dle nabídky", s:"0,75 l", p:"350 Kč" },
        { g:"Šmíd", n:"Tramín červený", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Ryzlink vlašský", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Neuberské", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Neronet", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Dornfelder", s:"0,75 l", p:"390 Kč" },
        { g:"Šmíd", n:"Sauvignon", s:"0,75 l", p:"390 Kč" },
      ]
    },
    {
      cat: "Absinth", icon: "spirit",
      items: [
        { n:"Absinth", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Likéry", icon: "spirit",
      items: [
        { n:"Aperol", s:"4 cl", p:"69 Kč" },
        { n:"Baileys", s:"4 cl", p:"65 Kč" },
        { n:"Becherovka", s:"4 cl", p:"60 Kč" },
        { n:"Becherovka Lemond", s:"4 cl", p:"60 Kč" },
        { n:"Bols Peach", s:"4 cl", p:"60 Kč" },
        { n:"Božkov Modrá", s:"4 cl", p:"60 Kč" },
        { n:"Campari", s:"4 cl", p:"65 Kč" },
        { n:"Cointreau", s:"4 cl", p:"75 Kč" },
        { n:"Fernet Stock", s:"4 cl", p:"60 Kč" },
        { n:"Fernet Stock Citrus", s:"4 cl", p:"60 Kč" },
        { n:"Griotka", s:"4 cl", p:"60 Kč" },
        { n:"Jägermeister", s:"4 cl", p:"70 Kč" },
        { n:"Jägermeister Orange", s:"4 cl", p:"70 Kč" },
        { n:"Limoncello", s:"4 cl", p:"69 Kč" },
        { n:"Peprmintový likér", s:"4 cl", p:"60 Kč" },
        { n:"Polar Jahoda", s:"4 cl", p:"60 Kč" },
        { n:"Tatra Tea 32%", s:"4 cl", p:"65 Kč" },
        { n:"Tatra Tea 42%", s:"4 cl", p:"70 Kč" },
        { n:"Tatra Tea 52%", s:"4 cl", p:"75 Kč" },
        { n:"Tatra Tea 62%", s:"4 cl", p:"80 Kč" },
        { n:"Tatra Tea 72%", s:"4 cl", p:"90 Kč" },
      ]
    },
    {
      cat: "Brandy / Cognac", icon: "spirit",
      items: [
        { n:"Metaxa 5*", s:"4 cl", p:"65 Kč", i:"Metaxa.jpg" },
        { n:"Metaxa 7*", s:"4 cl", p:"85 Kč" },
      ]
    },
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
        { n:"Grey Goose", s:"4 cl", p:"130 Kč" },
        { n:"Ketel One", s:"4 cl", p:"90 Kč" },
        { n:"Pravda", s:"4 cl", p:"100 Kč" },
        { n:"Smirnoff", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Rum", icon: "spirit",
      items: [
        { n:"Abuelo 15 yo Napoleon", s:"4 cl", p:"260 Kč", i:"abuelo-napoleon.jpg" },
        { n:"Austrian Empire Navy", s:"4 cl", p:"130 Kč" },
        { n:"Bacardi", s:"4 cl", p:"70 Kč" },
        { n:"Božkov", s:"4 cl", p:"60 Kč" },
        { n:"Božkov Republika", s:"4 cl", p:"70 Kč" },
        { n:"Captain Bucanero", s:"4 cl", p:"89 Kč", i:"capitanBucanero.jpg" },
        { n:"Captain Morgan 0%", s:"4 cl", p:"50 Kč" },
        { n:"Captain Morgan Spiced Gold", s:"4 cl", p:"70 Kč", i:"capitanMorganBlackSpiced.jpg" },
        { n:"Diplomatico", s:"4 cl", p:"135 Kč", i:"diplomatico.jpg" },
        { n:"Don Papa", s:"4 cl", p:"135 Kč", i:"donPapa-rum.jpg" },
        { n:"Don Papa Alon", s:"4 cl", p:"135 Kč" },
        { n:"Don Papa Baroko", s:"4 cl", p:"160 Kč", i:"donPapa-baroko.jpg" },
        { n:"Don Papa Gayuma", s:"4 cl", p:"270 Kč", i:"donPapa-gayuma.jpg" },
        { n:"Don Papa Masskara", s:"4 cl", p:"150 Kč", i:"donPap-masskara.jpg" },
        { n:"Havana 3yo", s:"4 cl", p:"70 Kč", i:"HavanaClub.jpg" },
        { n:"Havana 7yo", s:"4 cl", p:"95 Kč", i:"havanaClub-7.jpg" },
        { n:"Kakadu", s:"4 cl", p:"75 Kč", i:"kakadu.jpg" },
        { n:"Legendario 7yo", s:"4 cl", p:"90 Kč", i:"Legendario.jpg" },
        { n:"Malibu", s:"4 cl", p:"65 Kč" },
        { n:"Ron Zacapa Centenario 23", s:"4 cl", p:"135 Kč", i:"Zacapa.jpg" },
        { n:"Stroh", s:"4 cl", p:"100 Kč" },
      ]
    },
    {
      cat: "Pálenky", icon: "spirit",
      items: [
        { n:"Baron Hildprandt Hruškovice", s:"4 cl", p:"90 Kč" },
        { n:"Hruškovice Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Slivovice Žufánek", s:"4 cl", p:"80 Kč" },
      ]
    },
    {
      cat: "Tequila", icon: "spirit",
      items: [
        { n:"El Jimador Blanco", s:"4 cl", p:"95 Kč" },
        { n:"El Jimador Reposado", s:"4 cl", p:"95 Kč" },
      ]
    },
    {
      cat: "Gin", icon: "spirit",
      note: "Možnost kombinovat se všemi toniky.",
      items: [
        { n:"Beefeater", s:"4 cl", p:"75 Kč" },
        { n:"Beefeater Blood Orange", s:"4 cl", p:"75 Kč" },
        { n:"Beefeater Pink", s:"4 cl", p:"75 Kč", i:"beefeaterPinkStraw.jpg" },
        { n:"Bombay Sapphire", s:"4 cl", p:"75 Kč" },
        { n:"Gin Mare", s:"4 cl", p:"125 Kč" },
        { n:"Hendrick's", s:"4 cl", p:"95 Kč", i:"hendricksGin.jpg" },
        { n:"Malfy Rosa", s:"4 cl", p:"105 Kč" },
        { n:"Opihr", s:"4 cl", p:"125 Kč" },
        { n:"Roku", s:"4 cl", p:"105 Kč" },
        { n:"Roku Sakura", s:"4 cl", p:"105 Kč" },
        { n:"Tanqueray", s:"4 cl", p:"95 Kč" },
        { n:"Tanqueray 0%", s:"4 cl", p:"110 Kč", i:"tanquerayAlcoFree.jpg" },
        { n:"Tanqueray No. TEN", s:"4 cl", p:"115 Kč", i:"noTen.jpg" },
        { n:"Tanqueray Royale", s:"4 cl", p:"105 Kč", i:"tanquerayRoyale.jpg" },
      ]
    },
    {
      cat: "Whisky", icon: "spirit",
      items: [
        { g:"Irská whisky", n:"Bushmills", s:"4 cl", p:"75 Kč" },
        { g:"Irská whisky", n:"Jameson", s:"4 cl", p:"75 Kč", i:"Jameson.jpg" },
        { g:"Irská whisky", n:"Tullamore Dew", s:"4 cl", p:"75 Kč", i:"tullamoreDEW.jpg" },
        { g:"Skotská whisky", n:"Grant's", s:"4 cl", p:"75 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Black Label", s:"4 cl", p:"110 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Gold Label", s:"4 cl", p:"135 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Red Label", s:"4 cl", p:"75 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Rye Finish", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Apple", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Blackberry", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Fire", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Gentleman Jack", s:"4 cl", p:"125 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Honey", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Single Barrel", s:"4 cl", p:"175 Kč" },
        { g:"Bourbon", n:"Four Roses", s:"4 cl", p:"75 Kč" },
        { g:"Bourbon", n:"Jim Beam", s:"4 cl", p:"75 Kč" },
        { g:"Bourbon", n:"Jim Beam Honey", s:"4 cl", p:"75 Kč" },
        { g:"Bourbon", n:"Wild Turkey", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Pochutiny", icon: "snack",
      items: [
        { n:"Arašídy", p:"45 Kč" },
        { n:"Chipsy", p:"45 Kč" },
        { n:"Tyčinky", p:"45 Kč" },
      ]
    },
  ]
},

/* ======================================================= ANDĚL DVOREK */
dvorek: {
  title: "Anděl Dvorek",
  subtitle: "Káva • Drinky • Pivo • Lihoviny",
  menu: [
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
      ]
    },
    {
      cat: "Ledová káva", icon: "coffee",
      items: [
        { n:"Espresso na ledu", s:"9 g", p:"60 Kč" },
        { n:"Espresso Tonic", s:"18 g", p:"100 Kč" },
        { n:"Ledové Latte", s:"9 g", p:"85 Kč" },
        { n:"Ledové Cappuccino", s:"9 g", p:"80 Kč" },
      ]
    },
    {
      cat: "Horké nápoje", icon: "tea",
      items: [
        { n:"Horká čokoláda", d:"mléčná, bílá, hořká", s:"25 g", p:"70 Kč" },
        { n:"Holandské kakao", s:"15 g", p:"65 Kč" },
        { n:"Čaj", d:"černý, zelený, heřmánkový, ovocný", s:"1 ks", p:"55 Kč" },
        { n:"Horká griotka", s:"1 ks", p:"65 Kč" },
        { n:"Sklenice mléka (teplé/studené)", s:"0,2 l", p:"25 Kč" },
      ]
    },
    {
      cat: "Andělské limonády", icon: "soda",
      items: [
        { n:"Míchaná limonáda", s:"0,3 l", p:"65 Kč" },
      ]
    },
    {
      cat: "Pivo & Cider", icon: "beer",
      items: [
        { n:"Pilsner Urquell", s:"0,28 l", p:"55 Kč" },
        { n:"Pilsner Urquell", s:"0,48 l", p:"70 Kč" },
        { n:"Proud", s:"0,38 l", p:"59 Kč" },
      ]
    },
    {
      cat: "Nealko nápoje", icon: "soda",
      items: [
        { g:"Čepované", n:"Birell Pomelo-grep", s:"0,28 l", p:"55 Kč" },
        { g:"Čepované", n:"Birell Pomelo-grep", s:"0,48 l", p:"65 Kč" },
        { g:"Lahvové", n:"Royal Crown Cola", d:"classic / zero", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Targa", d:"maracuja / citron / pomeranč", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Targa Tonic", d:"classic / růžový / zázvor", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Thomas Henry Tonic", d:"classic / botanical / ginger beer / grepfruit", s:"0,2 l", p:"75 Kč" },
        { g:"Lahvové", n:"Curiosa Džus", d:"jablko / pomeranč / jahoda / multivitamin", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá / perlivá", s:"0,33 l", p:"50 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá", s:"0,75 l", p:"75 Kč" },
        { g:"Lahvové", n:"Dilmah Ice Tea", d:"broskev / jasmín / citron", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Red Bull", d:"classic / zero / white peach / pink zero / blue / sezónní", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Vinea", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Seicha Matcha", s:"0,33 l", p:"90 Kč" },
        { g:"Lahvové", n:"Club-Mate", s:"0,33 l", p:"70 Kč" },
        { g:"Lahvové", n:"Koka-Mate", s:"0,33 l", p:"80 Kč" },
        { g:"Rozlévané", n:"Soda", s:"0,1 l", p:"10 Kč" },
        { g:"Rozlévané", n:"Sirup", s:"0,04 l", p:"15 Kč" },
        { g:"Rozlévané", n:"Karafa vody", s:"0,5 l", p:"50 Kč" },
        { g:"Rozlévané", n:"Džus", s:"0,1 l", p:"20 Kč" },
      ]
    },
    {
      cat: "Nealko drinky", icon: "soda",
      items: [
        { n:"Captain Morgan 0% + Cola", d:"Captain Morgan 0% + Royal Crown Cola", s:"1 ks", p:"100 Kč" },
        { n:"Tanqueray 0% + Tonic", d:"Tanqueray 0% gin + Targa tonic", s:"1 ks", p:"120 Kč" },
        { n:"Virgin Sunrise", d:"pomerančový džus, grenadina, soda", s:"1 ks", p:"100 Kč" },
        { n:"Virgin Paloma", d:"limetková šťáva, Thomas Henry grep, špetka soli, soda", s:"1 ks", p:"120 Kč" },
        { n:"Elderflower Fizz 0.0", d:"bezový sirup, limetková šťáva, máta, soda", s:"1 ks", p:"100 Kč" },
        { n:"Crodino Spritz", d:"Crodino, soda, pomeranč", s:"1 ks", p:"105 Kč" },
      ]
    },
    {
      cat: "Shoty", icon: "cocktail",
      items: [
        { n:"Jelen", d:"Jägermeister + Red Bull Classic", p:"60 Kč" },
        { n:"Lítačka", d:"Absolut vodka + Red Bull White Peach", p:"60 Kč" },
        { n:"Včelka", d:"Jim Beam Honey + Red Bull White Peach", p:"60 Kč" },
        { n:"Chupito", d:"bílý rum, limetkový cordial, koktejlová třešeň", p:"60 Kč" },
        { n:"B52", d:"Kahlúa + Baileys + Stroh", p:"105 Kč" },
        { n:"Svině Havana", d:"Havana Club 3yo, cola, limetková šťáva", p:"55 Kč" },
        { n:"Svině Vodka", d:"vodka, džus nebo cola dle volby", p:"55 Kč" },
        { n:"Karibská Bomba", d:"Malibu + Red Bull White Peach", p:"60 Kč" },
        { n:"Illusion", d:"Bols Peach, vodka, pomerančový džus, grenadina", p:"80 Kč" },
      ]
    },
    {
      cat: "Drinky", icon: "cocktail",
      items: [
        { g:"Signature", n:"Gimlet No.TEN", d:"Tanqueray No. Ten, limetková šťáva, citronová kůra", p:"155 Kč", i:"gimlet-no10.jpg" },
        { g:"Short", n:"Absolut + džus", d:"Absolut vodka, pomerančový džus", p:"110 Kč" },
        { g:"Short", n:"Amarancio", d:"Campari, gin, Red Bull White Peach", p:"135 Kč", i:"amarancio.jpg" },
        { g:"Short", n:"Moscow Mule", d:"Absolut vodka, limetková šťáva, ginger beer", p:"140 Kč", i:"moscowMule.jpg" },
        { g:"Short", n:"Skinny Bitch", d:"Absolut vodka, limetková šťáva, soda", p:"105 Kč", i:"skinny-btich.jpg" },
        { g:"Short", n:"Skinny Bitch Malina", d:"Absolut vodka, limetková šťáva, malinový sirup, soda", p:"115 Kč" },
        { g:"Short", n:"Božkov + RC Cola", d:"Božkov, Royal Crown Cola", p:"95 Kč" },
        { g:"Short", n:"Captain Morgan + RC Cola", d:"Captain Morgan Spiced Gold, Royal Crown Cola", p:"110 Kč" },
        { g:"Short", n:"Jack Daniels + RC Cola", d:"Jack Daniel's, Royal Crown Cola", p:"125 Kč" },
        { g:"Short", n:"Jameson + Ginger Beer", d:"Jameson, ginger beer, limetková šťáva", p:"115 Kč" },
        { g:"Short", n:"Black Russian", d:"Absolut vodka, Kahlúa", p:"130 Kč" },
        { g:"Short", n:"Štrúdl", d:"Jack Daniel's Fire, jablečný džus, skořice", p:"150 Kč", i:"JackDanielsFire.jpg" },
      ]
    },
    {
      cat: "Drinky 2", icon: "cocktail",
      items: [
        { n:"Beton", d:"Becherovka, Targa tonic", p:"110 Kč" },
        { n:"Bavorák", d:"Fernet Stock, Targa tonic", p:"110 Kč" },
        { n:"Beefeater + Tonic", d:"Beefeater gin, Targa tonic", p:"135 Kč" },
        { n:"Tanqueray + Thomas Henry", d:"Tanqueray gin, Thomas Henry tonic", p:"170 Kč" },
        { n:"Opihr + Thomas Henry", d:"Opihr gin, Thomas Henry tonic", p:"200 Kč" },
        { n:"Bombay + Thomas Henry", d:"Bombay Sapphire, Thomas Henry tonic", p:"150 Kč" },
        { n:"Gin Mare + Thomas Henry", d:"Gin Mare, Thomas Henry tonic", p:"200 Kč" },
        { n:"Tom Collins", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"160 Kč" },
        { n:"Tom Collins Royale", d:"Tanqueray Royale gin, citronová šťáva, simple sirup, soda", p:"170 Kč" },
        { n:"Cuba Libre", d:"Havana 3yo / bílý rum, limetková šťáva, Royal Crown Cola", p:"145 Kč", i:"cubaLibre.jpg" },
        { n:"Mojito", d:"Havana 3yo / bílý rum, limetka, simple sirup, máta, soda", p:"145 Kč", i:"Mojito.jpg" },
        { n:"Malinové Mojito", d:"Havana 3yo, limetková šťáva, malinový sirup/pyré, máta, soda", p:"155 Kč" },
        { n:"Dark 'n' Stormy", d:"tmavý rum Bacardi, ginger beer, limetková šťáva", p:"140 Kč", i:"darkAndStormy.jpg" },
        { n:"Sex on the Beach", d:"vodka, broskvový likér, pomerančový džus, grenadina", p:"155 Kč", i:"SexOnTheBeach.jpg" },
        { n:"Sun Tonic", d:"Metaxa 5*, tonic", p:"125 Kč" },
        { n:"Long Island Iced Tea", d:"vodka, gin, bílý rum, tequila, Cointreau, citronová šťáva, Royal Crown Cola", p:"230 Kč" },
        { n:"Paloma", d:"tequila blanco, limetková šťáva, Thomas Henry grep, špetka soli", p:"160 Kč" },
        { n:"Americano", d:"Campari, Martini Rosso, soda", p:"135 Kč", i:"martiniRosso.jpg" },
        { n:"Campari Tonic", d:"Campari, tonic", p:"125 Kč" },
        { n:"Batanga", d:"tequila, limetková šťáva, cola, špetka soli", p:"135 Kč" },
        { n:"Gin Buck", d:"Tanqueray gin, limetková nebo citronová šťáva, ginger beer", p:"135 Kč" },
        { n:"Blue Lagoon", d:"vodka, Blue Curaçao, citronová limonáda/soda, nálev z koktejlových třešniček", p:"150 Kč" },
        { n:"Gin Sunset", d:"gin, pomerančový džus, grenadina", p:"130 Kč" },
        { n:"Gin Fizz", d:"Tanqueray gin, citronová šťáva, simple sirup, soda", p:"150 Kč", i:"ginFizz.jpg" },
        { n:"Cosmopolitan", d:"citronová vodka, Triple Sec, brusinkový džus, limetková šťáva", p:"160 Kč" },
        { n:"Negroni", d:"gin, Campari, Martini Rosso", p:"170 Kč" },
        { n:"Jack Blackberry Lemonade", d:"Jack Daniel's Blackberry, citronová limonáda, citron", p:"150 Kč" },
        { n:"Jack Honey Lemonade", d:"Jack Daniel's Honey, citronová limonáda, citron", p:"150 Kč" },
        { n:"Jack Apple Lemonade", d:"Jack Daniel's Apple, citronová limonáda, citron", p:"150 Kč" },
        { n:"Zlatokopka", d:"Jägermeister Orange, tonic, pomeranč", p:"135 Kč" },
        { n:"Hendrick's + Thomas Henry", d:"Gin Hendrick's, Thomas Henry tonic", p:"150 Kč" },
        { n:"Malfy + Thomas Henry", d:"Gin Malfy, Thomas Henry tonic", p:"150 Kč" },
        { n:"Jack Daniel's Limonade", d:"Jack Daniel's, citronová limonáda", p:"150 Kč" },
        { n:"Ginger Papa", d:"Don Papa Masskara, limeta, Thomas Henry ginger", p:"195 Kč" },
        { n:"Piña Colada", d:"rum Malibu, smetana, kokosové pyré, ananasový džus", p:"145 Kč", i:"pinaColada.jpg" },
      ]
    },
    {
      cat: "Drinky 3", icon: "cocktail",
      items: [
        { n:"Aperol Spritz", d:"prosecco, Aperol, soda", p:"135 Kč" },
        { n:"Campari Spritz", d:"prosecco, Campari, soda", p:"135 Kč" },
        { n:"Sarti Spritz", d:"prosecco, Sarti Rosa, soda", p:"135 Kč", i:"SartiRosa.jpg" },
        { n:"Peach Spritz", d:"prosecco, Red Bull White Peach, limetková šťáva, máta, limetka", p:"135 Kč" },
        { n:"Mimosa", d:"prosecco, pomerančový džus", p:"105 Kč" },
        { n:"Hugo Spritz", d:"prosecco, bezový sirup, soda, máta, limetková šťáva", p:"135 Kč" },
        { n:"Limoncello Spritz", d:"prosecco, limoncello, soda", p:"135 Kč", i:"limonce.jpg" },
      ]
    },
    {
      cat: "Víno", icon: "wine",
      items: [
        { n:"Vinný střik", d:"víno se sodou", s:"2 dcl", p:"60 Kč" },
        { n:"Víno", d:"bílé / červené", s:"1 dcl", p:"40 Kč" },
        { n:"Víno", d:"bílé / červené", s:"2 dcl", p:"80 Kč" },
      ]
    },
    {
      cat: "Absinth", icon: "spirit",
      items: [
        { n:"Absinth", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Likéry", icon: "spirit",
      items: [
        { n:"Aperol", s:"4 cl", p:"69 Kč" },
        { n:"Baileys", s:"4 cl", p:"65 Kč" },
        { n:"Becherovka", s:"4 cl", p:"60 Kč" },
        { n:"Becherovka Lemond", s:"4 cl", p:"60 Kč" },
        { n:"Bols Peach", s:"4 cl", p:"60 Kč" },
        { n:"Božkov Modrá", s:"4 cl", p:"60 Kč" },
        { n:"Campari", s:"4 cl", p:"65 Kč" },
        { n:"Cointreau", s:"4 cl", p:"75 Kč" },
        { n:"Fernet Stock", s:"4 cl", p:"60 Kč" },
        { n:"Fernet Stock Citrus", s:"4 cl", p:"60 Kč" },
        { n:"Griotka", s:"4 cl", p:"60 Kč" },
        { n:"Jägermeister", s:"4 cl", p:"70 Kč" },
        { n:"Jägermeister Orange", s:"4 cl", p:"70 Kč" },
        { n:"Limoncello", s:"4 cl", p:"69 Kč" },
        { n:"Peprmintový likér", s:"4 cl", p:"60 Kč" },
        { n:"Polar Jahoda", s:"4 cl", p:"60 Kč" },
        { n:"Tatra Tea 32%", s:"4 cl", p:"65 Kč" },
        { n:"Tatra Tea 42%", s:"4 cl", p:"70 Kč" },
        { n:"Tatra Tea 52%", s:"4 cl", p:"75 Kč" },
        { n:"Tatra Tea 62%", s:"4 cl", p:"80 Kč" },
        { n:"Tatra Tea 72%", s:"4 cl", p:"90 Kč" },
      ]
    },
    {
      cat: "Brandy / Cognac", icon: "spirit",
      items: [
        { n:"Metaxa 5*", s:"4 cl", p:"65 Kč", i:"Metaxa.jpg" },
        { n:"Metaxa 7*", s:"4 cl", p:"85 Kč" },
      ]
    },
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
        { n:"Babička", s:"4 cl", p:"125 Kč", i:"babicka.jpg" },
        { n:"Grey Goose", s:"4 cl", p:"130 Kč" },
        { n:"Ketel One", s:"4 cl", p:"90 Kč" },
        { n:"Pravda", s:"4 cl", p:"100 Kč" },
        { n:"Smirnoff", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Rum", icon: "spirit",
      items: [
        { n:"Abuelo 15 yo Napoleon", s:"4 cl", p:"260 Kč", i:"abuelo-napoleon.jpg" },
        { n:"Austrian Empire Navy", s:"4 cl", p:"130 Kč" },
        { n:"Bacardi", s:"4 cl", p:"70 Kč" },
        { n:"Božkov", s:"4 cl", p:"60 Kč" },
        { n:"Božkov Republika", s:"4 cl", p:"70 Kč" },
        { n:"Captain Bucanero", s:"4 cl", p:"89 Kč", i:"capitanBucanero.jpg" },
        { n:"Captain Morgan 0%", s:"4 cl", p:"50 Kč" },
        { n:"Captain Morgan Spiced Gold", s:"4 cl", p:"70 Kč", i:"capitanMorganBlackSpiced.jpg" },
        { n:"Diplomatico", s:"4 cl", p:"135 Kč", i:"diplomatico.jpg" },
        { n:"Don Papa", s:"4 cl", p:"135 Kč", i:"donPapa-rum.jpg" },
        { n:"Don Papa Alon", s:"4 cl", p:"135 Kč" },
        { n:"Don Papa Baroko", s:"4 cl", p:"160 Kč", i:"donPapa-baroko.jpg" },
        { n:"Don Papa Gayuma", s:"4 cl", p:"270 Kč", i:"donPapa-gayuma.jpg" },
        { n:"Don Papa Masskara", s:"4 cl", p:"150 Kč", i:"donPap-masskara.jpg" },
        { n:"Havana 3yo", s:"4 cl", p:"70 Kč", i:"HavanaClub.jpg" },
        { n:"Havana 7yo", s:"4 cl", p:"95 Kč", i:"havanaClub-7.jpg" },
        { n:"Kakadu", s:"4 cl", p:"75 Kč", i:"kakadu.jpg" },
        { n:"Legendario 7yo", s:"4 cl", p:"90 Kč", i:"Legendario.jpg" },
        { n:"Malibu", s:"4 cl", p:"65 Kč" },
        { n:"Ron Zacapa Centenario 23", s:"4 cl", p:"135 Kč", i:"Zacapa.jpg" },
        { n:"Stroh", s:"4 cl", p:"100 Kč" },
      ]
    },
    {
      cat: "Pálenky", icon: "spirit",
      items: [
        { n:"Baron Hildprandt Hruškovice", s:"4 cl", p:"90 Kč" },
        { n:"Borovička Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Hruškovice Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Slivovice Žufánek", s:"4 cl", p:"80 Kč" },
      ]
    },
    {
      cat: "Tequila", icon: "spirit",
      items: [
        { n:"El Jimador Blanco", s:"4 cl", p:"95 Kč" },
        { n:"El Jimador Reposado", s:"4 cl", p:"95 Kč" },
      ]
    },
    {
      cat: "Gin", icon: "spirit",
      note: "Možnost kombinovat se všemi toniky.",
      items: [
        { n:"Beefeater", s:"4 cl", p:"75 Kč" },
        { n:"Beefeater Pink", s:"4 cl", p:"75 Kč", i:"beefeaterPinkStraw.jpg" },
        { n:"Hendrick's", s:"4 cl", p:"95 Kč", i:"hendricksGin.jpg" },
        { n:"Hendrick's Flora Adora", s:"4 cl", p:"140 Kč" },
        { n:"Malfy Rosa", s:"4 cl", p:"105 Kč" },
        { n:"Roku", s:"4 cl", p:"105 Kč" },
        { n:"Roku Sakura", s:"4 cl", p:"105 Kč" },
        { n:"Tanqueray", s:"4 cl", p:"95 Kč" },
        { n:"Tanqueray 0%", s:"4 cl", p:"110 Kč", i:"tanquerayAlcoFree.jpg" },
        { n:"Tanqueray Flor de Sevilla", s:"4 cl", p:"85 Kč" },
        { n:"Tanqueray No. TEN", s:"4 cl", p:"115 Kč", i:"noTen.jpg" },
        { n:"Tanqueray Royale", s:"4 cl", p:"105 Kč", i:"tanquerayRoyale.jpg" },
      ]
    },
    {
      cat: "Whisky", icon: "spirit",
      items: [
        { g:"Irská whisky", n:"Bushmills", s:"4 cl", p:"75 Kč" },
        { g:"Irská whisky", n:"Jameson", s:"4 cl", p:"75 Kč", i:"Jameson.jpg" },
        { g:"Irská whisky", n:"Tullamore Dew", s:"4 cl", p:"75 Kč", i:"tullamoreDEW.jpg" },
        { g:"Skotská whisky", n:"Grant's", s:"4 cl", p:"75 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Black Label", s:"4 cl", p:"110 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Gold Label", s:"4 cl", p:"135 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Red Label", s:"4 cl", p:"75 Kč" },
        { g:"Skotská whisky", n:"Monkey Shoulder", s:"4 cl", p:"95 Kč", i:"MonkeyShoulder.jpg" },
        { g:"Americká whiskey", n:"Jack Daniel's", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Apple", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Blackberry", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Fire", s:"4 cl", p:"85 Kč" },
        { g:"Americká whiskey", n:"Jack Daniel's Honey", s:"4 cl", p:"85 Kč" },
        { g:"Bourbon", n:"Four Roses", s:"4 cl", p:"75 Kč" },
        { g:"Bourbon", n:"Jim Beam", s:"4 cl", p:"75 Kč" },
        { g:"Bourbon", n:"Jim Beam Honey", s:"4 cl", p:"75 Kč" },
        { g:"Bourbon", n:"Wild Turkey", s:"4 cl", p:"75 Kč" },
      ]
    },
    {
      cat: "Pochutiny", icon: "snack",
      items: [
        { n:"Arašídy", p:"45 Kč" },
        { n:"Chipsy", p:"45 Kč" },
        { n:"Tyčinky", p:"45 Kč" },
      ]
    },
  ]
},

/* ======================================================= ANDĚL BISTRO */
bistro: {
  title: "Anděl Bistro",
  subtitle: "Pizza • Pasta • Tapas • Káva & drinky",
  menu: [
    {
      cat: "Předkrmy", icon: "snack",
      items: [
        { n:"Carpaccio", d:"tenké plátky hovězí svíčkové s rukolou, olivovým olejem a hoblinkami parmezánu, smažené kapary", s:"80 g", p:"255 Kč" },
        { n:"Bruschetta di pomodoro", d:"směs rajčat, oliv Leccino a bazalky na grilovaném chlebu, hoblinky parmezánu", s:"180 g", p:"159 Kč" },
        { n:"Zuppa di pomodori", d:"tomatová polévka z rajčat San Marzano D.O.P.", s:"0,33 l", p:"89 Kč" },
        { n:"Antipasti", d:"výběr italských uzenin a sýrů, sušená rajčata, marinované olivy", s:"150 g", p:"179 Kč" },
      ]
    },
    {
      cat: "Pizza (32 cm)", icon: "snack",
      items: [
        { n:"Margherita", d:"rajčata San Marzano, mozzarella fior di latte, parmigiano, bazalka, olivový olej extra vergine", p:"239 Kč" },
        { n:"Salami", d:"rajčata San Marzano, mozzarella fior di latte, milánský salám, Grana Padano, bazalka, olivový olej extra vergine", p:"269 Kč" },
        { n:"Prosciutto cotto", d:"rajčata San Marzano, mozzarella fior di latte, prosciutto cotto, Grana Padano, bazalka, olivový olej extra vergine", p:"289 Kč" },
        { n:"Burrata e pomodoro", d:"rajčata San Marzano, burrata, rukola, bazalka, Grana Padano, olivový olej extra vergine", p:"289 Kč" },
        { n:"Mortadella e pistacchio", d:"mozzarella fior di latte, mortadella, burrata, pistáciové pesto, drcené pistácie, olivový olej extra vergine", p:"279 Kč" },
        { n:"Diavola", d:"rajčata San Marzano D.O.P., mozzarella fior di latte, pikantní salám Spianata Calabra, Grana Padano, bazalka, olivový olej extra vergine", p:"289 Kč" },
        { n:"Quattro formaggi", d:"mozzarella fior di latte, gorgonzola, taleggio, Parmigiano Reggiano, olivový olej extra vergine", p:"289 Kč" },
        { n:"Funghi", d:"rajčata San Marzano D.O.P., mozzarella fior di latte, žampiony", p:"289 Kč" },
        { n:"Pollo e spinachi", d:"smetana, mozzarella fior di latte, špenát, kuřecí maso, česnek", p:"269 Kč" },
        { n:"Ventricino", d:"rajčata San Marzano D.O.P., mozzarella fior di latte, italský pikantní salám, jalapeños, vajíčko, česnek", p:"279 Kč" },
        { n:"Frutti di mare", d:"rajčata San Marzano D.O.P., mozzarella fior di latte, směs mořských plodů (krevety, slávky, kalamáry, losos)", p:"299 Kč" },
      ]
    },
    {
      cat: "Pasta / Gnocchi / Risotto", icon: "snack",
      items: [
        { n:"Gnocchi al salmone e pistacchio", d:"bramborové gnocchi, jemný pistáciový krém, losos, Parmigiano Reggiano, citronová kůra, drcené pistácie", s:"300 g", p:"329 Kč" },
        { n:"Spaghetti aglio olio", d:"česnek, chilli, petržel, olivový olej, Parmigiano Reggiano", s:"300 g", p:"245 Kč" },
        { n:"Spaghetti al pomodoro e burrata", d:"špagety, rajčata San Marzano D.O.P., česnek, bazalka, burrata, pesto, olivový olej extra vergine", s:"300 g", p:"279 Kč" },
        { n:"Spaghetti carbonara", d:"špagety, guanciale, Pecorino Romano, vaječný žloutek, černý pepř", s:"300 g", p:"265 Kč" },
        { n:"Tagliatelle al ragù", d:"tagliatelle, pomalu tažené hovězí ragú, rajčata San Marzano D.O.P., pesto, Parmigiano Reggiano", s:"300 g", p:"325 Kč" },
        { n:"Gnocchi al gorgonzola e noci", d:"bramborové gnocchi, krém z gorgonzoly, Parmigiano Reggiano, vlašské ořechy, rukola", s:"300 g", p:"299 Kč" },
        { n:"Risotto frutti di mare", d:"krémové šafránové risotto, směs mořských plodů (krevety, slávky, kalamáry, losos)", s:"300 g", p:"325 Kč" },
      ]
    },
    {
      cat: "Saláty", icon: "snack",
      items: [
        { n:"Insalata con prosciutto e stracciatella", d:"burrata, prosciutto crudo, cherry rajčata, rukola, olivy Leccino, bazalka, strouhaný žloutek, olivový olej extra vergine, grilovaný chléb", s:"350 g", p:"225 Kč" },
        { n:"Insalata pollo e parmigiano", d:"grilované kuřecí prso, mix listových salátů, cherry rajčata, Parmigiano Reggiano, sušená rajčata, citronový dresink, grilovaný chléb", s:"350 g", p:"245 Kč" },
        { n:"Caesar con salmone", d:"římský salát, Caesar dresink, krutony, grilovaný losos, hoblinky parmazánu", s:"350 g", p:"255 Kč" },
      ]
    },
    {
      cat: "Dezerty", icon: "snack",
      items: [
        { n:"Tiramisù classico", d:"tradiční italské tiramisù, mascarpone, savoiardi, espresso, kakao", p:"139 Kč" },
        { n:"Panna cotta ai frutti di bosco", d:"vanilková panna cotta, omáčka z lesního ovoce, čerstvé ovoce", p:"129 Kč" },
        { n:"Tiramisù al pistacchio", d:"pistáciové tiramisù, mascarpone, savoiardi, pistáciový krém, drcené pistácie", p:"159 Kč" },
        { n:"Cannoli siciliani", d:"křupavé cannoli, sladká ricotta, pistácie, čokoláda" },
        { n:"Fragole e mascarpone", d:"jahody, mascarpone krém, pistácie, bazalka" },
      ]
    },
    {
      cat: "Tapas", icon: "snack",
      note: "Tapas Italiani: středa, čtvrtek a pátek 15:00–18:00.",
      items: [
        { g:"Freddi / studené", n:"Mortadella e pistacchio", d:"focaccia, mortadella, pistáciový krém, burrata, drcené pistácie" },
        { g:"Freddi / studené", n:"Bresaola e parmigiano", d:"focaccia, bresaola, rukola, Parmigiano Reggiano, citron, olivový olej extra vergine" },
        { g:"Freddi / studené", n:"Caprese", d:"mozzarella, cherry rajčata, bazalka, bazalkové pesto, olivový olej extra vergine" },
        { g:"Freddi / studené", n:"Salame Milano", d:"focaccia, milánský salám, mozzarella fior di latte, sušená rajčata, olivová tapenáda" },
        { g:"Freddi / studené", n:"Prosciutto e mozzarella", d:"focaccia, prosciutto crudo, mozzarella fior di latte, rukola, Parmigiano Reggiano" },
        { g:"Freddi / studené", n:"Gorgonzola e pera", d:"crostino, gorgonzola, hruška, vlašské ořechy, med" },
        { g:"Freddi / studené", n:"Pomodori secchi e ricotta", d:"crostino, ricotta, sušená rajčata, bazalkové pesto, Parmigiano Reggiano" },
        { g:"Freddi / studené", n:"Olive marinate", d:"marinované olivy Leccino, česnek, bylinky, citronová kůra, olivový olej extra vergine" },
        { g:"Caldi / teplé", n:"Polpette al pomodoro", d:"italské hovězí masové kuličky, omáčka z rajčat San Marzano D.O.P., Parmigiano Reggiano, bazalka" },
        { g:"Caldi / teplé", n:"Arancini al formaggio", d:"smažená rýžová kulička, mozzarella, Parmigiano Reggiano, bazalkové pesto" },
        { g:"Caldi / teplé", n:"Gamberi all'aglio", d:"krevety, česnek, chilli, petržel, olivový olej extra vergine, citron" },
        { g:"Caldi / teplé", n:"Gnocchi al salmone e pistacchio", d:"opečené bramborové gnocchi, losos, pistáciový krém, drcené pistácie, citronová kůra" },
        { g:"Caldi / teplé", n:"Pollo alla parmigiana", d:"křupavé kuřecí, rajčatová salsa, mozzarella, Parmigiano Reggiano, bazalka" },
        { g:"Caldi / teplé", n:"Patate al parmigiano", d:"pečené grenaille, Parmigiano Reggiano, česnek, rozmarýn, bylinková majonéza" },
        { g:"Caldi / teplé", n:"Calamari fritti", d:"smažené kalamáry, citron, česneková majonéza, petržel" },
        { g:"Caldi / teplé", n:"Focaccia all'aglio", d:"pečená focaccia, česnek, rozmarýn, Parmigiano Reggiano, olivový olej extra vergine" },
      ]
    },
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
      ]
    },
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
    {
      cat: "Horké nápoje", icon: "tea",
      items: [
        { n:"Čaj", d:"černý, zelený, heřmánkový, ovocný", s:"1 ks", p:"55 Kč" },
        { n:"Čerstvý čaj mátový", s:"3 dl", p:"70 Kč" },
        { n:"Čerstvý čaj zázvorový", s:"3 dl", p:"70 Kč" },
        { n:"Svařené víno", d:"bílé / červené", s:"2 dl", p:"75 Kč" },
      ]
    },
    {
      cat: "Pivo & Cider", icon: "beer",
      items: [
        { n:"Pilsner Urquell", s:"0,28 l", p:"55 Kč" },
        { n:"Pilsner Urquell", s:"0,48 l", p:"70 Kč" },
      ]
    },
    {
      cat: "Nealko nápoje", icon: "soda",
      items: [
        { g:"Čepované", n:"Kofola", s:"0,28 l", p:"50 Kč" },
        { g:"Čepované", n:"Kofola", s:"0,48 l", p:"65 Kč" },
        { g:"Lahvové", n:"Royal Crown Cola", d:"classic", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Thomas Henry Tonic", d:"classic / botanical / ginger beer / grepfruit", s:"0,2 l", p:"75 Kč" },
        { g:"Lahvové", n:"Curiosa Džus", d:"jablko / pomeranč / jahoda / multivitamin", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá / perlivá", s:"0,33 l", p:"50 Kč" },
        { g:"Lahvové", n:"Rajec", d:"neperlivá / jemně perlivá", s:"0,75 l", p:"75 Kč" },
        { g:"Lahvové", n:"Red Bull", d:"classic / zero / white peach / pink zero / blue / sezónní", s:"0,25 l", p:"75 Kč" },
        { g:"Lahvové", n:"Vinea", s:"0,25 l", p:"65 Kč" },
        { g:"Lahvové", n:"Royal Crown Zero", s:"0,25 l", p:"55 Kč" },
        { g:"Rozlévané", n:"Karafa vody", s:"0,5 l", p:"50 Kč" },
        { g:"Rozlévané", n:"Karafa vody", s:"1 l", p:"70 Kč" },
      ]
    },
    {
      cat: "Nealko drinky", icon: "soda",
      items: [
        { n:"Tanqueray 0% + Tonic", d:"Tanqueray 0% gin + Targa tonic", s:"1 ks", p:"120 Kč" },
        { n:"Crodino Spritz", d:"Crodino, soda, pomeranč", s:"1 ks", p:"105 Kč" },
      ]
    },
    {
      cat: "Drinky", icon: "cocktail",
      items: [
        { n:"Moscow Mule", d:"Absolut vodka, limetková šťáva, ginger beer", p:"140 Kč", i:"moscowMule.jpg" },
        { n:"Skinny Bitch", d:"Absolut vodka, limetková šťáva, soda", p:"105 Kč", i:"skinny-btich.jpg" },
      ]
    },
    {
      cat: "Drinky 2", icon: "cocktail",
      items: [
        { n:"Beefeater + Tonic", d:"Beefeater gin, Targa tonic", p:"135 Kč" },
        { n:"Mojito", d:"Havana 3yo / bílý rum, limetka, simple sirup, máta, soda", p:"145 Kč", i:"Mojito.jpg" },
        { n:"Sex on the Beach", d:"vodka, broskvový likér, pomerančový džus, grenadina", p:"155 Kč", i:"SexOnTheBeach.jpg" },
        { n:"Long Island Iced Tea", d:"vodka, gin, bílý rum, tequila, Cointreau, citronová šťáva, Royal Crown Cola", p:"230 Kč" },
        { n:"Negroni", d:"gin, Campari, Martini Rosso", p:"170 Kč" },
        { n:"Alon Colada", p:"195 Kč" },
        { n:"Ginger Papa", d:"Don Papa Masskara, limeta, Thomas Henry ginger", p:"195 Kč" },
        { n:"Piña Colada", d:"rum Malibu, smetana, kokosové pyré, ananasový džus", p:"145 Kč", i:"pinaColada.jpg" },
      ]
    },
    {
      cat: "Drinky 3", icon: "cocktail",
      items: [
        { n:"Aperol Spritz", d:"prosecco, Aperol, soda", p:"135 Kč" },
        { n:"Campari Spritz", d:"prosecco, Campari, soda", p:"135 Kč" },
        { n:"Sarti Spritz", d:"prosecco, Sarti Rosa, soda", p:"135 Kč", i:"SartiRosa.jpg" },
        { n:"Peach Spritz", d:"prosecco, Red Bull White Peach, limetková šťáva, máta, limetka", p:"135 Kč" },
        { n:"Mimosa", d:"prosecco, pomerančový džus", p:"105 Kč" },
        { n:"Hugo Spritz", d:"prosecco, bezový sirup, soda, máta, limetková šťáva", p:"135 Kč" },
        { n:"Limoncello Spritz", d:"prosecco, limoncello, soda", p:"135 Kč", i:"limonce.jpg" },
      ]
    },
    {
      cat: "Šumivá vína", icon: "wine",
      items: [
        { n:"Bohemia Sekt nealkoholický", p:"290 Kč" },
        { n:"Bohemia Sekt Brut", p:"350 Kč" },
        { n:"Bohemia Sekt Demi", p:"350 Kč" },
        { n:"Bohemia Sekt ICE", s:"1,5 l", p:"390 Kč" },
        { n:"Bohemia Sekt Prestige brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige Chardonnay brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige demi sec", s:"0,75 l", p:"490 Kč" },
        { n:"Bohemia Sekt Prestige rosé brut", s:"0,75 l", p:"490 Kč" },
        { n:"Bouvet crémant de loire Excellence brut", p:"1040 Kč" },
        { n:"Ca del Bosco Prestige", s:"0,75 l", p:"1950 Kč" },
        { n:"Mumm Cordon Rouge", s:"0,75 l", p:"1990 Kč" },
        { n:"Ca'del Bosco Cuveé Rosé", s:"0,75 l", p:"1990 Kč" },
        { n:"Moët & Chandon Brut Imperial", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Ice Impérial", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Ice Impérial Rosé", s:"0,75 l", p:"2190 Kč" },
        { n:"Moët & Chandon Rosé Impérial", s:"0,75 l", p:"2190 Kč" },
        { n:"Taittinger Brut Prestige", s:"0,75 l", p:"2190 Kč" },
        { n:"Taittinger Brut Réserve", s:"0,75 l", p:"2190 Kč" },
        { n:"Ruinart R de Ruinart Brut", s:"0,75 l", p:"2490 Kč" },
        { n:"Veuve Clicquot Brut Yellow Label", s:"0,75 l", p:"2490 Kč" },
        { n:"Moët & Chandon Brut Impérial Giftbox", s:"0,75 l", p:"2590 Kč" },
        { n:"Moët & Chandon Brut Impérial Holiday", s:"0,75 l", p:"2590 Kč" },
        { n:"Ca'del Bosco Vintage Satén", s:"0,75 l", p:"2590 Kč" },
        { n:"Veuve Clicquot Brut Rosé", s:"0,75 l", p:"3490 Kč" },
        { n:"Moët & Chandon Brut Imperial", s:"1,5 l", p:"4380 Kč" },
        { n:"Dom Pérignon Vintage 2015", s:"0,75 l", p:"6490 Kč" },
      ]
    },
    {
      cat: "Vermouth", icon: "spirit",
      items: [
        { n:"Martini Bianco", s:"10 cl", p:"70 Kč" },
        { n:"Martini Extra Dry", s:"10 cl", p:"70 Kč", i:"MartiniExtraDry.jpg" },
        { n:"Martini Rosso", s:"10 cl", p:"70 Kč" },
      ]
    },
    {
      cat: "Likéry", icon: "spirit",
      items: [
        { n:"Aperol", s:"4 cl", p:"69 Kč" },
        { n:"Baileys", s:"4 cl", p:"65 Kč" },
        { n:"Campari", s:"4 cl", p:"65 Kč" },
        { n:"Jägermeister", s:"4 cl", p:"70 Kč" },
        { n:"Limoncello", s:"4 cl", p:"69 Kč" },
        { n:"Peprmintový likér", s:"4 cl", p:"60 Kč" },
        { n:"Vaječný likér Bartida", s:"4 cl", p:"60 Kč" },
      ]
    },
    {
      cat: "Brandy / Cognac", icon: "spirit",
      items: [
        { n:"Metaxa 5*", s:"4 cl", p:"65 Kč", i:"Metaxa.jpg" },
        { n:"Metaxa 7*", s:"4 cl", p:"85 Kč" },
      ]
    },
    {
      cat: "Vodka", icon: "spirit",
      items: [
        { n:"Absolut", s:"4 cl", p:"75 Kč" },
        { n:"Babička", s:"4 cl", p:"125 Kč", i:"babicka.jpg" },
        { n:"Ketel One", s:"4 cl", p:"90 Kč" },
      ]
    },
    {
      cat: "Rum", icon: "spirit",
      items: [
        { n:"Božkov Republika", s:"4 cl", p:"70 Kč" },
        { n:"Diplomatico", s:"4 cl", p:"135 Kč", i:"diplomatico.jpg" },
        { n:"Don Papa", s:"4 cl", p:"135 Kč", i:"donPapa-rum.jpg" },
        { n:"Don Papa Alon", s:"4 cl", p:"135 Kč" },
        { n:"Don Papa Baroko", s:"4 cl", p:"160 Kč", i:"donPapa-baroko.jpg" },
        { n:"Don Papa Gayuma", s:"4 cl", p:"270 Kč", i:"donPapa-gayuma.jpg" },
        { n:"Don Papa Masskara", s:"4 cl", p:"150 Kč", i:"donPap-masskara.jpg" },
        { n:"Havana 3yo", s:"4 cl", p:"70 Kč", i:"HavanaClub.jpg" },
        { n:"Havana 7yo", s:"4 cl", p:"95 Kč", i:"havanaClub-7.jpg" },
        { n:"Kakadu", s:"4 cl", p:"75 Kč", i:"kakadu.jpg" },
        { n:"Legendario 7yo", s:"4 cl", p:"90 Kč", i:"Legendario.jpg" },
        { n:"Malibu", s:"4 cl", p:"65 Kč" },
      ]
    },
    {
      cat: "Pálenky", icon: "spirit",
      items: [
        { n:"Borovička Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Hruškovice Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Slivovice Žufánek", s:"4 cl", p:"80 Kč" },
        { n:"Višňovka Žufánek", s:"4 cl", p:"80 Kč" },
      ]
    },
    {
      cat: "Tequila", icon: "spirit",
      items: [
        { n:"El Jimador Blanco", s:"4 cl", p:"95 Kč" },
        { n:"El Jimador Reposado", s:"4 cl", p:"95 Kč" },
      ]
    },
    {
      cat: "Gin", icon: "spirit",
      note: "Možnost kombinovat se všemi toniky.",
      items: [
        { n:"Beefeater", s:"4 cl", p:"75 Kč" },
        { n:"Beefeater Pink", s:"4 cl", p:"75 Kč", i:"beefeaterPinkStraw.jpg" },
        { n:"Hendrick's", s:"4 cl", p:"95 Kč", i:"hendricksGin.jpg" },
        { n:"Hendrick's Flora Adora", s:"4 cl", p:"140 Kč" },
      ]
    },
    {
      cat: "Whisky", icon: "spirit",
      items: [
        { g:"Skotská whisky", n:"Johnnie Walker Black Label", s:"4 cl", p:"110 Kč" },
        { g:"Skotská whisky", n:"Johnnie Walker Red Label", s:"4 cl", p:"75 Kč" },
        { g:"Skotská whisky", n:"Monkey Shoulder", s:"4 cl", p:"95 Kč", i:"MonkeyShoulder.jpg" },
        { g:"Americká whiskey", n:"Jack Daniel's", s:"4 cl", p:"85 Kč" },
        { g:"Bourbon", n:"Jim Beam", s:"4 cl", p:"75 Kč" },
      ]
    },
  ]
},
};
