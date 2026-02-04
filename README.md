# Fußbodenheizung – Unternehmenswebsite

Moderne, responsive Unternehmenswebsite in deutscher Sprache für einen Handwerksbetrieb mit Schwerpunkt **Fußbodenheizung** (Installation & Wartung) in **Bellingwolde** / Norddeutschland.

## Zielgruppe
- Privatkunden
- Gewerbekunden

## Seitenstruktur
| Seite | Datei | Inhalt |
|-------|--------|--------|
| Startseite | `index.html` | Firmenbeschreibung, USP, Kontakt-CTA |
| Leistungen | `leistungen.html` | Installation, Wartung & Service, Sanierung |
| Über uns | `ueber-uns.html` | Team, Erfahrung, Standort |
| Referenzen | `referenzen.html` | Projektgalerie mit Beschreibungen |
| Kontakt | `kontakt.html` | Formular, Adresse, Telefon, E-Mail |

## Technik
- Reines **HTML5** und **CSS3**, kein Framework
- **Responsive** (Mobile-First-freundlich, Breakpoint 768px)
- **Kontaktformular** mit einfacher Client-Validierung (Name, E-Mail Pflicht)
- **Platzhalter-Bilder**: Graue Blöcke mit Beschriftung – durch echte Bilder ersetzen (z. B. in `images/`)

## Was Sie anpassen sollten
1. **Kontaktdaten** in allen HTML-Dateien und im Footer:
   - Telefon: `+49 (0) XXX XXXXXXX` → echte Nummer
   - E-Mail: `info@beispiel.de` → echte Adresse
   - Adresse: `Musterstraße 1, 9695 Bellingwolde` → echte Adresse
2. **Bilder**: Alle Bereiche mit „Platzhalter: …“ durch echte Bilder ersetzen (z. B. `<img src="images/hero.jpg" alt="...">`).
3. **Kontaktformular**: `action="#"` und `method="post"` durch Ihren Backend-Dienst ersetzen (z. B. Formspree, eigenes Script oder CMS).

## SEO
- Meta-Description und Keywords auf jeder Seite
- Begriffe u. a.: Fußbodenheizung, Vloerverwarming, Installation, Wartung, energieeffizient, Handwerk, Bellingwolde, Deutschland

## Lokal testen
Dateien direkt im Browser öffnen (z. B. `index.html`) oder einen lokalen Server starten:

```bash
# Mit Python 3
python3 -m http.server 8000
# Dann im Browser: http://localhost:8000
```

---

© 2025 – Vorlage für FußbodenWärme / Bellingwolde
