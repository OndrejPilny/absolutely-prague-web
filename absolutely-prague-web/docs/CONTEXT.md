# PROJECT CONTEXT: Absolutely Prague

Tento soubor slouží jako primární instrukce pro GitHub Copilot a další AI agenty pracující na tomto projektu. Web je postaven na principu maximální jednoduchosti a čistoty.

## 🎯 Hlavní vize
*   **Název:** Absolutely Prague
*   **Produkční URL:** https://absolutelyprague.com/
*   **Filozofie:** KISS (Keep It Simple, Stupid). Žádná zbytečná abstrakce, žádné složité závislosti.

## 🛠 Technický Stack & Omezení
*   **Typ webu:** Statický web (bez kompilace, bez buildu).
*   **Technologie:** Čisté HTML5, CSS3 a Vanilla JavaScript.
*   **ZÁKAZ:** Nepoužívat žádné JS frameworky (React, Vue, atd.) ani CSS utility frameworky (Tailwind, Bootstrap). 
*   **Formátování:** Kód musí být sémanticky správný, přístupný a čistě formátovaný.

## 📁 Adresářová Struktura
Při vytváření souborů a odkazování na cesty striktně dodržuj toto schéma:
*   `/index.html` - Hlavní vstupní bod v kořenovém adresáři.
*   `/css/style.css` - Veškeré styly.
*   `/js/script.js` - Logika v čistém JS (pouze pokud je nezbytně nutná).
*   `/img/` - Složka pro veškeré obrázky a ikony.
*   `/docs/` - Složka obsahující zadání v .txt souborech s instrukcemi pro vývoj.

## 🚀 Deployment & Workflow
*   **Hosting:** Cloudflare Pages (napojeno na GitHub).
*   **Větve (Branches):**
    *   `main`: Produkční prostředí (PROD). Každý push do této větve mění web na https://absolutelyprague.com/.
    *   `feature/*` nebo `dev`: Preview prostředí (STAGE). Cloudflare automaticky generuje unikátní URL pro každý Pull Request.
*   **Postup práce:** Vždy nejprve konzultuj soubory ve složce `/zadani/`. Při generování kódu se ujisti, že cesty k assetům jsou relativní a funkční přímo v prohlížeči.

## 🤖 Instrukce pro Agenta
1.  Vždy upřednostňuj nativní webová řešení před knihovnami.
2.  Při editaci HTML používej moderní sémantické značky (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`).
3.  Pokud navrhuješ řešení, které vyžaduje externí závislost (např. fonty, ikony), použij standardní CDN linky v HTML, nikdy `npm install`.
4.  Předpokládej, že uživatel chce kód, který je okamžitě spustitelný pouhým otevřením `index.html` v prohlížeči (nebo přes Live Server).