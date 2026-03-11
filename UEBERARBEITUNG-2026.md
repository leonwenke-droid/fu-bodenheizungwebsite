# Überarbeitung Website W.T.M. Fußbodenheizung

Kurzdokumentation der durchgeführten Optimierungen (Februar 2026).

---

## 1. Kurzanalyse – wichtigste Schwächen (vorher)

- **Mobile:** Telefon-Button im Header war auf kleinen Screens ausgeblendet, keine Alternative im Menü. Header-Struktur auf Unterseiten uneinheitlich (teilweise ohne `header-nav-wrap`), dadurch Mobile-Menü nicht überall nutzbar.
- **SEO:** Keine Canonical-URLs, keine Open Graph-/Twitter-Card-Tags, Meta-Keywords (veraltet), keine strukturierten Daten (JSON-LD).
- **Rechtlich:** Kein verlinkbares Datenschutz-Angebot im Footer.
- **Accessibility:** Kein Skip-Link, keine expliziten Focus-States für Tastatur, Touch-Targets teils unter 44px.
- **Konsistenz:** Unterschiedliche Header-Bauweise auf Startseite/Impressum vs. Leistungen/Kontakt/Über uns/Referenzen.

---

## 2. Umgesetzte Verbesserungen

### Visuelle Qualität & Konsistenz
- Einheitlicher Header auf allen Seiten: Logo, Nav in `header-nav-wrap`, Telefon-Button, auf Mobile: Telefon im ausgeklappten Menü (`header-phone-mobile`).
- Keine optischen Änderungen an Farben oder Layout-Struktur; bestehende Optik beibehalten.

### Mobile Responsiveness
- **Container:** Zusätzlicher Breakpoint ≤430px mit angepassten Innenabständen.
- **Touch-Targets:** Buttons und Nav-Links mind. 44px Höhe; Formularfelder (Input, Select) mind. 44px; Toggle-Button vergrößert.
- **Hero:** Hero-Formular-Karte auf Mobile volle Breite, sinnvolle Abstände; CTAs untereinander, volle Breite.
- **Navigation:** Mobile Menü zeigt nun einen Telefon-CTA unter den Links („01525 6258744 anrufen“), damit die Nummer nicht verloren geht.
- **Footer:** Einspaltig auf Mobile, Abstände und Lesbarkeit verbessert.
- **System-Karten / Ablauf / Kontakt-Grid:** Wie zuvor responsiv; Abstände und Gaps angepasst.

### Conversion & Trust
- Referenzen-Link in der Hauptnavigation der Startseite ergänzt.
- Bestehende Hero-Elemente (Trust-Badge, Formular, CTAs) unverändert; Formulare mit ausreichend großen Feldern für Mobile.

### Technical SEO
- **Meta:** `keywords` auf allen Seiten entfernt. `description` und `title` beibehalten bzw. leicht angepasst.
- **Canonical:** Auf allen relevanten Seiten `rel="canonical"` gesetzt (Startseite, Leistungen, Über uns, Referenzen, Kontakt, Impressum, Datenschutz). Basis-URL aktuell: `https://wtm-fussbodenheizung.de` – bei anderer Domain anpassen.
- **Open Graph:** Auf der Startseite und den wichtigsten Unterseiten (Kontakt, Leistungen, Über uns, Referenzen) `og:title`, `og:description`, `og:url`, `og:type`; Startseite zusätzlich `og:image`, `og:site_name`, `og:locale`.
- **Twitter Card:** Startseite mit `twitter:card`, `twitter:title`, `twitter:description`.
- **Robots:** `index, follow` wo sinnvoll gesetzt.
- **Strukturierte Daten (JSON-LD):** Nur auf der Startseite:
  - `LocalBusiness` (Name, Adresse Weener, Telefon, E-Mail, Öffnungszeiten, areaServed)
  - `WebSite`
  - `WebPage`
  Keine Bewertungen oder erfundenen Daten.

### Local SEO
- LocalBusiness-Schema mit Adresse Westerstraße 25a, 26826 Weener, sowie `areaServed` (Umkreis). Region Weener bleibt in Texten und Kontakt unverändert.

### Rechtliche Vollständigkeit
- **Datenschutz:** Neue Seite `datenschutz.html` sowie `datenschutz/index.html` (Clean-URL) mit Platzhalter-Text (Verantwortlicher, Kontakt, Erhebung beim Kontakt, Logdateien, Rechte, Hinweis auf Anpassungen). Keine erfundenen Details.
- **Footer:** Auf allen Seiten Link „Datenschutz“ neben Impressum ergänzt.
- Impressum unverändert; weiterhin verlinkt.

### Accessibility
- **Skip-Link:** „Zum Inhalt springen“ auf allen Seiten, verweist auf `#main-content`.
- **Main-ID:** `<main id="main-content">` auf allen Seiten.
- **Focus:** Sichtbare Outline für Tastatur-Fokus (`:focus-visible`) für Links, Buttons, Inputs, Select, Textarea; keine störende Outline bei reiner Maus-Nutzung.
- **Navigation:** `aria-label="Hauptnavigation"` am `<nav>`, `aria-expanded` am Menü-Button (bereits vorhanden).

### Performance
- Keine zusätzlichen Skripte oder Ressourcen; bestehende Fonts und CSS unverändert. Bilder behalten `loading="lazy"` und sinnvolle `alt`-Texte.

---

## 3. Geänderte / neue Dateien

- **Neu:** `datenschutz.html`, `datenschutz/index.html`
- **Head/Footer/Header:** `index.html`, `kontakt.html`, `leistungen.html`, `ueber-uns.html`, `referenzen.html`, `impressum.html` sowie die zugehörigen `*/index.html` in den Clean-URL-Ordnern.
- **CSS:** `css/styles.css` (Skip-Link, Focus, Container, Touch-Targets, Mobile Menü mit Telefon, Hero-Formular und Footer auf Mobile, Formularfeld-Höhen).

---

## 4. Offene Punkte (optional)

1. **Domain:** Alle Canonical- und OG-URLs nutzen `https://wtm-fussbodenheizung.de`. Bei anderer Live-Domain in allen HTML-Dateien ersetzen.
2. **Datenschutz:** Platzhalter-Texte bei Bedarf mit konkreten Angaben (z. B. Hoster, keine Cookies/Tracking) ergänzen.
3. **Bilder:** Optional WebP/AVIF und Komprimierung für noch bessere Ladezeiten.
4. **Breadcrumbs:** Falls gewünscht, Breadcrumb-Navigation und BreadcrumbList-JSON-LD ergänzen.
5. **FAQ:** Wenn eine echte FAQ-Sektion kommt, FAQPage-Schema hinzufügen.

---

## 5. Getestete Breakpoints

- 375px, 390px, 430px (kleine Smartphones)
- 768px (Tablet/Mobile-Grenze)
- 1024px, 1440px (Desktop)

Mobile Menü und Telefon-CTA wurden so umgesetzt, dass dieselben Inhalte und Aktionen wie auf Desktop auch auf kleinen Bildschirmen erreichbar sind.
