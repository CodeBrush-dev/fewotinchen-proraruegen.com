// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.fewotinchen-proraruegen.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.fewotinchen-proraruegen.com/","title_tag":"Ferienwohnung Prora FeWo Tinchen | fewo-tinchen-prora","meta_description":"FeWo Tinchen: moderne Ferienwohnung Prora für Ihren Urlaub Prora. Kinderfreundliche Unterkunft Prora für Familienurlaub in Binz OT Prora auf Rügen."},{"page_url":"https://www.fewotinchen-proraruegen.com/ueber-uns","title_tag":"Familienurlaub Prora in der FeWo Tinchen | fewo-tinchen-prora","meta_description":"Lernen Sie FeWo Tinchen kennen: kinderfreundliche, moderne Ferienwohnung Prora. Ideal für Familienurlaub Prora und erholsamen Urlaub auf Rügen."},{"page_url":"https://www.fewotinchen-proraruegen.com/so-wohnen-sie-bei-uns","title_tag":"Moderne Ferienwohnung Prora FeWo Tinchen | fewo-tinchen-prora","meta_description":"Ihre Unterkunft Prora: moderne, kinderfreundliche Ferienwohnung FeWo Tinchen mit Terrasse, Grillabende Prora und Fahrräder Prora für Ihren Urlaub."},{"page_url":"https://www.fewotinchen-proraruegen.com/prora","title_tag":"Urlaub Prora in der FeWo Tinchen | fewo-tinchen-prora","meta_description":"Entdecken Sie Prora und Umgebung: Strand, Naturerbezentrum und Ausflüge auf Rügen. Perfekt für Ihren Urlaub Prora in der Ferienwohnung FeWo Tinchen."},{"page_url":"https://www.fewotinchen-proraruegen.com/unsere-preise","title_tag":"Preiswerte Unterkunft Prora FeWo Tinchen | fewo-tinchen-prora","meta_description":"Unsere Preise für FeWo Tinchen: preiswerte Unterkunft Prora, moderne Ferienwohnung mit Fahrräder Prora, Wäschepaket inkl. Ideal für Familienurlaub Prora."},{"page_url":"https://www.fewotinchen-proraruegen.com/anreise","title_tag":"Anreise zur Ferienwohnung Prora FeWo Tinchen | fewo-tinchen-prora","meta_description":"Anreise zur FeWo Tinchen: Ihre Ferienwohnung Prora in Binz OT Prora. Nutzen Sie die angegebenen GPS-Daten für einen entspannten Start in Ihren Urlaub Prora."},{"page_url":"https://www.fewotinchen-proraruegen.com/kontakt","title_tag":"Kontakt FeWo Tinchen Ferienwohnung Prora | fewo-tinchen-prora","meta_description":"Kontakt zur FeWo Tinchen: Ihre moderne, kinderfreundliche Ferienwohnung Prora. Fragen zu Familienurlaub Prora, Grillabende Prora oder Buchung stellen."}],"keywords":["ferienwohnung prora","unterkunft prora","urlaub prora","fewo tinchen","familienurlaub prora","grillabende prora","moderne ferienwohnung","preiswerte unterkunft prora","kinderfreundliche ferienwohnung","fahrräder prora"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.fewotinchen-proraruegen.com/#lodgingbusiness",
  "name": "Ferienwohnung Tinchen Prora",
  "url": "https://www.fewotinchen-proraruegen.com/",
  "description": "Ferienwohnung Tinchen ist eine separate, im Dachgeschoss liegende, liebevoll und modern eingerichtete Ferienwohnung in Prora, Ostseebad Binz auf Rügen. Voll ausgestattete Unterkunft mit Doppelbett, Wohnzimmer, Küchenbereich, Badewanne, Terrasse, Carport-Parkplatz, WLAN und weiteren Ausstattungsmerkmalen.",
  "image": [
    "https://static.wixstatic.com/media/3ba4c6_9bb14581de7f450eac921bb792f71af7~mv2_d_3648_2736_s_4_2.jpg/v1/fill/w_288,h_216,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/3ba4c6_9bb14581de7f450eac921bb792f71af7~mv2_d_3648_2736_s_4_2.jpg",
    "https://static.wixstatic.com/media/3ba4c6_6859a5fb1a9f438b81fdd5640cc6310c~mv2.png/v1/fill/w_338,h_100,al_c,q_85,enc_avif,quality_auto/Klassifizierung_3Sterne_edited.png"
  ],
  "logo": "https://static.wixstatic.com/media/3ba4c6_6859a5fb1a9f438b81fdd5640cc6310c%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/3ba4c6_6859a5fb1a9f438b81fdd5640cc6310c%7Emv2.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Alte Post 5a",
    "postalCode": "18609",
    "addressLocality": "Ostseebad Binz OT Prora",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 54.4359,
    "longitude": 13.5729
  },
  "telephone": [
    "+49-172-9150012",
    "+49-152-56474679",
    "+49-38393-589940"
  ],
  "email": "infofewo.tinchen@gmail.com",
  "priceRange": "47-95 EUR",
  "currenciesAccepted": "EUR",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "WLAN",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parkplatz im Carport (5,00 €/Tag)",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Terrasse mit Sitzgruppe",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Holzkohlegrill",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Kinderreisebett (kostenlos)",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Fahrradverleih (5,00 €/Tag und Fahrrad)",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Küche mit Kochmöglichkeit",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Badewanne",
      "value": true
    }
  ],
  "containsPlace": {
    "@type": "Accommodation",
    "name": "Ferienwohnung Tinchen",
    "description": "Separate Ferienwohnung im Dachgeschoss mit Schlafzimmer (Doppelbett 160 cm), großem Wohnzimmer mit Küchenbereich, Bad mit Badewanne, Terrasse, Kinderreisebett und moderner Ausstattung inklusive TV, WLAN, Kaffeemaschine, Mikrowelle mit Back- und Grillfunktion sowie kleinem Geschirrspüler.",
    "numberOfRooms": 2,
    "occupancy": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 3
    }
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Nebensaison",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 47,
        "priceCurrency": "EUR"
      },
      "description": "Nebensaisonpreis ab 47,00 € pro Nacht."
    },
    {
      "@type": "Offer",
      "name": "Vorsaison",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 75,
        "priceCurrency": "EUR"
      },
      "description": "Vorsaisonpreis ab 75,00 € pro Nacht."
    },
    {
      "@type": "Offer",
      "name": "Hauptsaison",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 95,
        "priceCurrency": "EUR"
      },
      "description": "Hauptsaisonpreis ab 95,00 € pro Nacht."
    },
    {
      "@type": "Offer",
      "name": "Nachsaison",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 75,
        "priceCurrency": "EUR"
      },
      "description": "Nachsaisonpreis ab 75,00 € pro Nacht."
    },
    {
      "@type": "Offer",
      "name": "Ostern/Weihnachten/Jahreswechsel",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": 95,
        "priceCurrency": "EUR"
      },
      "description": "Feiertagspreis ab 95,00 € pro Nacht (Ostern, Weihnachten, Jahreswechsel)."
    }
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Christina Schulz"
    },
    {
      "@type": "Person",
      "name": "Rainer Lohmer"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "reservations",
      "telephone": "+49-172-9150012",
      "areaServed": "DE"
    },
    {
      "@type": "ContactPoint",
      "contactType": "reservations",
      "telephone": "+49-152-56474679",
      "areaServed": "DE"
    },
    {
      "@type": "ContactPoint",
      "contactType": "reservations",
      "telephone": "+49-38393-589940",
      "areaServed": "DE"
    }
  ],
  "hasMap": "https://www.google.com/maps/search/?api=1&query=54.4359,13.5729"
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
