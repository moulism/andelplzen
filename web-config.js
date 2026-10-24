/* Společné nastavení webu pro načítání dat (týdenní menu, fotky k položkám).
   Klíč níže je veřejný ("anon") klíč — smí jen číst zveřejněná data.
   Zápis povolují pravidla v databázi pouze přihlášeným správcům webu. */
window.AndelWeb = (function () {
  const URL_BASE = "https://gemjcncoeuzhytivixix.supabase.co";
  const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlbWpjbmNvZXV6aHl0aXZpeGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NjYyODEsImV4cCI6MjA5OTQ0MjI4MX0.sTnNsNc6_k0C_2U1xF1UuC-Te8ubTlgSWXIGkNZm9-M";

  /* Dnešní datum v Praze ve tvaru RRRR-MM-DD */
  function today() {
    return new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Prague" });
  }

  /* GET na REST API; při chybě nebo výpadku vrací null (web se pak zobrazí bez dynamických dat) */
  async function rest(path, timeoutMs) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs || 4000);
    try {
      const r = await fetch(URL_BASE + "/rest/v1/" + path, {
        headers: { apikey: KEY, Authorization: "Bearer " + KEY },
        signal: ctrl.signal
      });
      if (!r.ok) return null;
      return await r.json();
    } catch (e) {
      return null;
    } finally {
      clearTimeout(t);
    }
  }

  /* Klíč položky menu: prostor::kategorie::název */
  function itemKey(venue, cat, name) {
    return venue + "::" + cat + "::" + name;
  }

  /* Fotky nahrané správci: { klíč položky: url } */
  async function photoMap() {
    const rows = await rest("web_item_photos?select=item_key,url", 2500);
    const map = {};
    (rows || []).forEach(r => { map[r.item_key] = r.url; });
    return map;
  }

  return { url: URL_BASE, key: KEY, today, rest, itemKey, photoMap };
})();
