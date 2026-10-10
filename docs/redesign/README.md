# Redesign – Prüfung vom 10.10.2026

Umgesetzt: kompakter Hero ohne Vollbildhöhe, drei Navigationseinträge, vier erhaltene Leistungsanker, drei authentische Projektfotos, eigener Kesselwartungsabschnitt und ein ehrlicher Abschnitt über Andreas Mucha und einen Mitarbeiter. Eigenständige Sie-Texte; keine zusätzlichen Leistungsseiten. Name, E-Mail und Anliegen bilden das Formular. Formspree-ID `mvoelkjb` bleibt erhalten. Nur Menü und Formular sind Client Components. Systemschrift, sichtbarer Fokus, Skip-Link, mobile rechtliche Links, lokale Metadaten und strukturierte Daten.

## Bestand und Quellen

AGENTS.md lag bereits vor; die uncommittierte Hostingergänzung aus dem vorherigen Auftrag wurde erhalten und ergänzt. Yarn 1.22.22; bestehende Next.js-Version 14.1.4 und Lockdatei unverändert. Keine Versionsupdates im Redesign.

Gerenderte Prüfung mit playwright-cli 0.1.18 und vorhandenem Chromium. `https://sanitaer-dach-mucha.de/impressum` lieferte erneut 404; `/impressum.html` war erreichbar. Die bisherigen Originalbilder werden bei deaktiviertem Cache tatsächlich vollständig geladen.

Recherche: [Birka + Mayer](https://www.birkaundmayer.de/) für verständlich benannte Leistungen, sichtbaren Service und direkte Kontaktwege; [Viessmann](https://www.viessmann.de/de/kontakt/fachberatung/angebot-heizungswartung.html) für eine klar erkennbare Wartungsanfrage und die Angabe des vorhandenen Systems. Nur allgemeine Prinzipien übernommen; keine Texte, Betriebsangaben oder Gestaltung kopiert.

## Bildoptimierung

Reproduzierbar: `yarn images:optimize`. Sharp erzeugt für drei Fotos WebP in 480 und 960 px Breite mit 4:3-Ausschnitt und Qualität 78. Statisches `srcset` und `sizes` liefern passende Varianten; alle Fotos unterhalb des Hero sind lazy. Originale bleiben als Quelle im Repository, werden durch `scripts/post-export.mjs` aus `out/images` entfernt.

| Foto | Originalbytes | WebP 480 px | WebP 960 px |
| --- | ---: | ---: | ---: |
| Heizung | 9.759.804 | 16.236 | 48.268 |
| Bad | 9.205.289 | 18.872 | 47.122 |
| Kupferdach | 13.100.939 | 55.470 | 187.892 |

Gemessener Vergleich: Chromium, jeweils neuer Browserkontext, 390 × 844 CSS-Pixel, DPR 1, Cache via CDP deaktiviert, ganze Seite in 500-px-Schritten gescrollt, anschließend 5 s gewartet. `performance.getEntriesByType("resource")`, Filter `initiatorType === "img"`, Summe `transferSize` (inklusive vom Browser angesetztem Headeranteil): **68.444.361 → 91.478 Bytes**, **99,87 % weniger**. Vorher 17 Bilder inklusive SVGs, nachher drei WebP. Vergleich alte Livewebsite gegen lokalen Export; identische Browserbedingungen, unterschiedliche Hosts. Keine Aussage über Ladezeitverbesserung. Bei DPR > 1 kann der Browser die 960-px-Varianten wählen.

## Prüfungen

- `yarn install --frozen-lockfile --force`: erfolgreich. Fehlende optionale Linux-sharp-Binaries wurden aus dem vorhandenen Yarn-Cache in node_modules ergänzt; keine Lockdateiänderung.
- `yarn lint`, `yarn tsc --noEmit`, `yarn build`: erfolgreich.
- Statischer Export unter `/firma-andreas-mucha/`: 320, 390, 768, 1024 und 1440 px ohne horizontalen Überlauf. Bilder nach Scrollen vollständig geladen. Screenshots erstellt und tatsächlich angesehen; Desktop und Mobil hier beigefügt.
- Menüname/-zustand, Escape mit Fokusrückgabe, Schließen nach Linkwahl, Skip-Link, Anker, tel/mailto, sichtbarer Fokus und reduzierte Bewegung geprüft. 200 % Wurzelschriftgröße bei 390 px ohne Überlauf. Keine vollständige Screenreaderprüfung oder pauschale WCAG-Konformitätsbehauptung.
- Formspree-422 simuliert: Fehler sichtbar, E-Mail mit aria-invalid/aria-describedby, Anliegen erhalten. Erfolg simuliert; Bestätigung fokussiert. Verzögerte browserseitige Fetch-Simulation: Versandbutton deaktiviert. **Keine echte Nachricht versendet.**
- Impressum/Datenschutz direkt und nach Reload: 200. Alte `.html`-Adressen bleiben als statische Kopien direkt erreichbar; es gibt keinen permanenten HTTP-Redirect. Canonicals zeigen auf die Verzeichnisrouten.
- Mobiler Lighthouse-Labortest 13.5.0, Standardmobilprofil/simulierte Drosselung, lokaler Python-Server ohne Textkompression/Cacheheader: final **97 Performance, 100 Accessibility, 100 Best Practices, 100 SEO**. LCP 2,6 s, TBT 10 ms, CLS 0. Erster Lauf vor Abschluss: 89/100/100/100, LCP 3,8 s. Laufstreuung berücksichtigen; keine Felddaten/INP-Messung. Verbleibende Hinweise betreffen unter anderem Cacheheader, Bildauflösung bei hohem DPR und ungenutztes/Legacy-JavaScript.

Lighthouse-Reproduktion nach `yarn build`: Export als `/firma-andreas-mucha/` unter einem lokalen statischen Server einhängen. `CHROME_PATH=/pfad/zu/chromium lighthouse http://localhost:4173/firma-andreas-mucha/ --chrome-flags="--headless --no-sandbox" --output=json --output=html`. CLI wurde temporär außerhalb der Projektabhängigkeiten installiert. Zusammenfassung mit Messumgebung in `lighthouse-summary.json`.

## Offene Punkte vor Veröffentlichung

Vollständige Datenschutzerklärung für GitHub Pages und Formspree fachlich erstellen lassen (unter anderem Verantwortlichkeit, Rechtsgrundlagen, Aufbewahrung, Empfänger/Transfers und Betroffenenrechte). Datenschutzseite enthält nur transparente technische Hinweise und einen offenen Prüfhinweis. Bestehendes Impressum mit alten Rechtsverweisen und Registerangaben unverändert inhaltlich erhalten; fachlich prüfen lassen. Keine rechtliche Freigabe behauptet. GitHub-Pages-Hosting nach einem separat freigegebenen Deployment erneut prüfen, einschließlich alter indexierter URLs. Das Redesign wurde weder veröffentlicht noch gemergt.
