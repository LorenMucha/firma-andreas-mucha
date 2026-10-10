# AGENTS.md – Firma Andreas Mucha

## Auftrag und Geltungsbereich
Diese Regeln gelten für das gesamte Repository. Entwickle die bestehende Website zu einem modernen, vertrauenswürdigen und leicht bedienbaren Auftritt für den regionalen Handwerksbetrieb weiter. Hauptziel: Besucher verstehen die Leistungen und können unkompliziert eine Beratung anfragen oder anrufen. Sprache der Website und projektbezogener Erläuterungen: Deutsch.

Bewahre fachliche Inhalte, reale Firmenidentität und vorhandene funktionierende Abläufe. Arbeite in kleinen, nachvollziehbaren Änderungen; ein Redesign ist kein Auftrag für einen vollständigen Technologiewechsel. Prüfe vor Änderungen den aktuellen Repositoryzustand und gegebenenfalls ergänzende AGENTS.md-Dateien.

## GitHub
Nutze für alle Interaktionen mit GitHub immer die GitHub CLI (`gh`), beispielsweise für Pull Requests, Issues, Actions, Releases und API-Abfragen (`gh api`).

## Bestätigte Betriebsangaben und Gestaltungsprinzip
- Andreas Mucha und ein Angestellter bilden den Betrieb. Stelle die persönliche Betriebsgröße ehrlich dar.
- Kesselwartung gehört ausdrücklich zum Angebot. Kesseltypen, Marken, Intervalle und konkrete Wartungsarbeiten sind nicht bestätigt; keine pauschalen Zusagen ergänzen. Hersteller und Modell können im Anliegen angegeben werden.
- Einfachheit ist das wichtigste Gestaltungsprinzip: kompakte Startseite, wenige Navigationseinträge, kurze eigenständige Texte und sparsame Bilder.
- Primäre Aktion „Kontakt aufnehmen“, für Kesselwartung „Wartung anfragen“; beide führen zum vorhandenen Kontaktformular.

## Hosting und Deployment
Die Website ist unter https://lorenmucha.github.io/firma-andreas-mucha/ erreichbar und wird über GitHub Pages deployed. Berücksichtige den Projektpfad `/firma-andreas-mucha/` bei internen Links, Asset-Pfaden und der Prüfung des statischen Exports.

## Verifizierte Ausgangslage
Analyse vom 10.10.2026, Repository `main` bei Commit `3d887f97a75a7a26af48854acbc8105916d76bbb`. Die folgenden Befunde sind eine Momentaufnahme, keine dauerhaft bestehenden Anforderungen:
- Live-Website: https://sanitaer-dach-mucha.de/; im Browser bei 1280 × 720 und 390 × 844 betrachtet.
- Leistungen: Heizung, Bad, Haustechnik und Dach; Kontaktformular über Formspree.
- Firma Andreas Mucha, Seitenstraße 8, 01896 Lichtenberg; E-Mail `fa.mucha@web.de`; Telefon im Impressum `0176/39735624`. Region Pulsnitz wird in den Metadaten genannt. Einsatzgebiet und Aktualität der Angaben vor Veröffentlichung bestätigen; keine weiteren Orte oder Leistungen erfinden.
- Startansicht: vier farbige SVG-Leistungskacheln, viel Leerraum, kein klarer Beratungsknopf und keine regionale Einordnung im sichtbaren Einleitungstext.
- Live-Startseite enthält keine `h1`–`h3`. Bilder tragen überwiegend `alt="image"`; mobile Menüschaltfläche ohne zugänglichen Namen und ohne `aria-expanded`; Formularlabels ohne `htmlFor`.
- Footer wird unter `md` ausgeblendet. Bei 390 px wurde kein horizontaler Überlauf festgestellt; weitere Breiten sind gesondert zu prüfen.
- Direkter Live-Aufruf von `/impressum` liefert HTTP 404, `/impressum.html` ist erreichbar. Interne Links verwenden `/impressum`. Das ist ein konkreter Prüfpunkt für den statischen Host, kein Beleg dafür, dass jede interne Navigation fehlschlägt.
- Metabeschreibung enthält den Fehler „Region fPulsnitz ür“. Eine eigene Datenschutzroute ist im untersuchten Repository nicht vorhanden.
- Bildoriginale sind teils sehr groß: `badewanne.png` ca. 9,2 MB, `therme.png` ca. 9,8 MB, `dachrinne.png` ca. 9,9 MB und `kupfer.png` ca. 13,1 MB. Das sind Dateigrößen, keine gemessenen Transfermengen oder Ladezeiten.
- Keine Lighthouse-, Core-Web-Vitals- oder vollständige Accessibility-Messung durchgeführt. Zielwerte unten sind Abnahmekriterien, keine vorhandenen Messergebnisse.

## Bestehender Tech-Stack und Projektstruktur
- Next.js `14.1.4` mit App Router, React `^18`, TypeScript `^5` mit `strict: true`.
- Tailwind CSS `^3.3.0`, PostCSS, Autoprefixer; ESLint 8 und `eslint-config-next` 14.1.4.
- `@formspree/react` `^2.5.1`, `react-icons` `^5.0.1`, `sharp` `^0.33.3`; `gh-pages` ist für das Deployment über GitHub Pages installiert.
- `yarn.lock` ist die vorhandene Lockdatei. Nutze Yarn und erhalte diese; keine zweite Lockdatei erzeugen. Die Yarn-Version ist nicht explizit festgelegt und vor Installation zu prüfen.
- `src/app/page.tsx`: Zusammenstellung der Startseite, derzeit vollständig als Client Component markiert.
- `src/app/layout.tsx`: Sprache, Schrift und globale Metadaten.
- `src/app/components/`: `Navbar`, `Intro`, `Heizung`, `Bad`, `Haustechnik`, `Dach`, `Kontakt`, `Footer`.
- `src/app/constants.tsx`: Navigation und gemeinsame Typen; `src/app/impressum/`: Impressumsroute.
- `src/app/globals.css`, `tailwind.config.ts`: globale Gestaltung; `public/images/`: vorhandene Fachbereichsbilder und SVGs.

### Architekturregeln
1. Behalte App Router, TypeScript und Tailwind. Ergänze Bibliotheken nur bei belegtem Bedarf; keine weitere UI-, CSS- oder Animationsbibliothek für einfache Layoutaufgaben.
2. Nutze Server Components für statische Inhalte. Setze `"use client"` gezielt an interaktive Grenzen wie Menü und Kontaktformular; beim Entfernen von der Startseite die bislang impliziten Client-Grenzen zuerst korrigieren.
3. Extrahiere wiederkehrende Muster wie Container, Abschnittstitel, Leistungsdarstellung und Kontaktaktionen. Vermeide übermäßige Abstraktion und duplizierte Firmendaten.
4. Nutze semantisches HTML, `next/link`, passende `next/image`-Verwendung und vorhandene Pfadaliase. Keine unbegründeten `any`-Typen.
5. `suppressHydrationWarning` nicht zum Verbergen von Fehlern verwenden; Ursachen prüfen und beheben.
6. Versionen sind Bestandsaufnahme, keine Empfehlung zum dauerhaften Festhalten. Sicherheits- und Versionsupdates getrennt vom Layout umsetzen, anhand aktueller offizieller Dokumentation prüfen und Export/Formspree erneut validieren.

### Statischer Export ist verbindlich
`next.config.mjs` verwendet `output: "export"`, `distDir: "out"` und `images.unoptimized: true`. Erhalte die statische Auslieferbarkeit.
- Keine Laufzeitabhängigkeit von SSR, Server Actions, dynamischen API-Endpunkten oder Next.js-Bildoptimierungsserver einführen.
- Formspree bleibt der vorhandene externe Versandweg. Keine Zugangsdaten in den Client schreiben; die öffentliche Formular-ID ist kein geheimer API-Schlüssel.
- `next/image` allein verkleinert bei `unoptimized: true` keine Originaldateien. Bilder vorab optimieren oder exportfähige Varianten/Loader einsetzen.
- Exportausgabe für GitHub Pages unter `/firma-andreas-mucha/` prüfen; nicht aus der README-Vercel-Vorlage auf das Hosting schließen.
- Für saubere URLs Host-Rewrites oder eine passende Exportstruktur, etwa geprüfte `trailingSlash`-Konfiguration, festlegen. Vorhandene `.html`-URLs beim Umstieg mit Weiterleitungen erhalten. Direkte Aufrufe und Reloads müssen funktionieren.

## Gestaltungsrichtung und responsive Darstellung
Entwickle einen ruhigen, hochwertigen Handwerksauftritt: helle Grundflächen, dunkle gut lesbare Schrift, ein konsistenter grüner Markenakzent und authentische Projektbilder. Die vier Leistungen bleiben klar erkennbar. Bunte Kacheln dürfen als Orientierung dienen, sollen aber die gesamte Startansicht nicht dominieren.
- Definiere gemeinsame Tokens für Farben, Abstände, Typografie, Radien, Schatten und Inhaltsbreite. Nutze bevorzugt `theme.extend`; die derzeit vollständig ersetzte Farbpalette erzeugt nicht automatisch Standardklassen wie `text-black`.
- Vereinheitliche die Schriftwahl. Aktuell wird Inter geladen, durch `!font-serif` aber überschrieben. Wähle eine bewusst eingesetzte, sparsame Schriftfamilie mit klarer Hierarchie.
- Richtwerte: Container maximal etwa 72–80 rem, Fließtext etwa 60–75 Zeichen pro Zeile, Basisschrift mindestens 16 px, Zeilenhöhe etwa 1,5–1,7. Überschriften und Abstände dürfen fluid skalieren.
- Baue mobile zuerst: einspaltige Inhalte, darüber je nach Platz zwei oder mehr Spalten. Breakpoints nach Inhalt wählen, nicht nur nach Gerätenamen.
- Keine starre Vollbildhöhe für den Hero. Text, regionale Einordnung und Kontaktaktion müssen auf kleinen Displays früh sichtbar sein; kurze Viewports und vergrößerte Schrift berücksichtigen.
- Fotos mit einheitlichen Seitenverhältnissen und bewusstem Ausschnitt einsetzen. Keine kleinen, schmalen Fotostreifen neben langen Textblöcken und keine verzerrten Bilder.
- Nutze `w-full` statt unnötigem `w-screen`. Fixierte Navigation darf weder Ankerziele noch fokussierte Elemente verdecken; Scroll-Abstand an tatsächliche Headerhöhe anpassen.
- Footer mit Kontakt, Impressum und Datenschutz auf jeder Bildschirmgröße sichtbar. Navigation und Kontaktaktionen dürfen keinen Inhalt überlagern.
- Vermeide automatische Karussells, dekorative Daueranimationen und effektreiche Hintergründe ohne Nutzen.

## Informationsarchitektur und UX
Startseite: verständlicher Hero mit Firma, Fachgebieten und bestätigter Region; danach kompakte Leistungsübersicht, lesbare Leistungsabschnitte mit passenden Bildern, belegbare Informationen zum Betrieb sowie Kontakt und Footer.
- Primäre Aktion „Kontakt aufnehmen“ führt zum Kontaktformular; „Anrufen“ als klar erkennbare zweite Kontaktmöglichkeit mit `tel:`-Link. E-Mail als `mailto:`-Link anbieten.
- Erhalte `#heizung`, `#bad`, `#haustechnik`, `#dach` und `#kontakt`. Bei neuen Leistungsseiten alte Anker weiter bedienen und Navigation konsistent aktualisieren.
- Gliedere lange Texte in kurze Absätze und sachliche Leistungslisten. Korrigiere Tippfehler und fehlende Wortabstände, ohne fachliche Bedeutung zu verändern.
- Keine erfundenen Referenzen, Kundenbewertungen, Zertifikate, Meistertitel, Öffnungszeiten, Notdienstangebote oder Garantien. Vorhandene Aussagen zu Förderungen/Kassenleistungen nicht erweitern.
- Mobiles Menü nach Linkwahl und mit Escape schließen; Zustand und Fokus nachvollziehbar halten. Für einen einfachen ausklappbaren Bereich keinen unnötigen Dialog-Fokusfang einsetzen.
- Kontaktformular: sichtbare Labels, sinnvolle Pflichtfelder, `autocomplete`, geeignete Eingabetypen, verständliche Fehlermeldungen, Versandzustand und eindeutig bestätigter Erfolg. Eingaben bei Fehlern erhalten und Doppelversand verhindern.
- Formspree-Integration und vorhandene Formular-ID nicht beiläufig ersetzen. Versandtests gegen das echte Formular nur mit ausdrücklicher Freigabe; sonst simulierte Erfolgs-/Fehlerantworten verwenden.
- Datenschutzinformationen für den tatsächlichen Formularweg sichtbar verlinken. Rechtliche Texte nicht erfinden oder bestehende Texte als geprüft darstellen; offene Inhalte für fachliche Prüfung kennzeichnen. Keine unnötigen personenbezogenen Angaben abfragen.

## Accessibility
Ziel ist WCAG 2.2 AA als technische Qualitätsorientierung; keine pauschale Konformitätsbehauptung ohne Prüfung.
- Pro Seite ein sinnvoller `h1`, hierarchische `h2`/`h3`, echte Absätze und Listen. Verwende `header`, benannte `nav`, `main` und `footer` als passende Landmarks; Seitenkopf und Footer möglichst außerhalb von `main`.
- Sichtbaren Skip-Link zum Hauptinhalt anbieten. Alle Funktionen mit Tastatur erreichbar; deutlich sichtbarer Fokus, logische Reihenfolge, keine Tastaturfallen.
- Menübutton mit zugänglichem Namen, `aria-expanded` und `aria-controls`; Icon-Links mit Namen, dekorative Icons mit `aria-hidden`.
- Verknüpfe Formularlabels über `htmlFor` und `id`. Fehler über `aria-describedby`/`aria-invalid` zuordnen; Erfolg und Status für assistive Technik ankündigen.
- Informative Bilder erhalten konkrete deutsche Alternativtexte, dekorative Bilder `alt=""`. Bei verlinkten Leistungssymbolen muss das Linkziel verständlich benannt sein.
- Textkontrast mindestens 4,5:1, große Schrift mindestens 3:1; notwendige UI-Grenzen und Zustände mindestens 3:1. Prüfe insbesondere das helle Bestandsgrün auf Weiß. Information nie allein durch Farbe vermitteln.
- Touchziele möglichst mindestens 44 × 44 CSS-Pixel. Darstellung bei 200 % Zoom und Reflow bei 320 CSS-Pixeln prüfen.
- `prefers-reduced-motion` beachten, auch bei Smooth Scrolling und Hovereffekten. Inhalte dürfen nicht nur bei Hover erreichbar sein.

## SEO und Inhalte
- Erhalte `lang="de"`. Nutze Next.js Metadata für eindeutige Seitentitel und natürliche Beschreibungen; korrigiere die fehlerhafte Regionsangabe.
- Setze Canonicals für die tatsächlichen Produktions-URLs sowie passende Open-Graph-Daten, Social-Bild und eigenes Favicon. Platzhalterassets nicht als Firmenmarke veröffentlichen.
- Erzeuge exportkompatible Sitemap und robots.txt. Produktionsseiten sollen indexierbar sein; Vorschauumgebungen müssen von der Indexierung ausgeschlossen werden.
- Nutze strukturierte Daten für einen passenden lokalen Betrieb mit ausschließlich bestätigten Angaben, identisch zu sichtbaren Kontaktdaten. Keine erfundenen Bewertungen oder Einsatzgebiete.
- Leistungen und regionale Relevanz in verständlichem sichtbarem Text beschreiben, ohne Keyword-Stuffing oder nahezu identische Ortsseiten.
- Bestehende indexierte URLs vor Strukturänderungen inventarisieren; permanente Weiterleitungen und interne Links planen. Impressum, Datenschutz und neue Leistungsseiten direkt sowie nach Reload testen.
- Rechtliche Aktualität der alten Impressumstexte separat prüfen lassen; aus der Analyse folgt keine Rechtsberatung oder bestätigte Rechtssicherheit.

## Performance
- Bildoptimierung zuerst: passende Abmessungen, WebP/AVIF wo sinnvoll, exportfähige responsive Varianten und korrektes `sizes`/gegebenenfalls `srcset`. Als Startbudget Fotos möglichst unter 200–300 KB je tatsächlich ausgelieferter Variante; Ausnahmen begründen.
- Bildabmessungen oder Seitenverhältnisse reservieren, Layoutsprünge verhindern. Inhalte unterhalb des sichtbaren Bereichs lazy laden; nur tatsächliche LCP-Bilder priorisieren.
- Reduziere Client-JavaScript, unnötige Pakete und Drittanbieterrequests. Kein Tracking, externe Karten oder weitere Widgets beiläufig ergänzen.
- Schriften sparsam und lokal ausgeliefert nutzen; bei `next/font` die Buildabhängigkeit beachten.
- Ziel für reale Nutzungsdaten am 75. Perzentil: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. Lighthouse-Labortests separat kennzeichnen; sie ersetzen keine Felddaten.
- Lighthouse Mobile möglichst mindestens 90 in Performance, Accessibility, Best Practices und SEO. Messbedingungen und verbleibende Befunde dokumentieren; Scores allein sind keine Abnahme.

## Arbeitsablauf und Abnahme
1. Lies zuerst relevante Komponenten und Konfigurationen. Halte Ausgangsbefund und konkretes Ziel kurz fest; überprüfe oben genannte Bestandsbefunde auf Aktualität.
2. Priorität 1: direkt erreichbare Impressumsroute, mobile Kontakt-/Footerzugänge, Überschriften, Menü- und Formularzugänglichkeit.
3. Priorität 2: Hero, Designsystem, einheitliche Leistungsdarstellung, Bildoptimierung, Metadaten.
4. Priorität 3: belegte Betriebs-/Projektinhalte, zusätzliche Leistungsseiten und gezielte UX-Verfeinerungen.
5. Für Codeänderungen mit passender Yarn-Version: Abhängigkeiten gemäß Lockdatei installieren (Yarn 1: `yarn install --frozen-lockfile`), dann `yarn lint`, `yarn tsc --noEmit` und `yarn build`. Es existiert derzeit kein Testskript; keine erfolgreichen Tests behaupten, die nicht ausgeführt wurden.
6. Statischen Export über einen lokalen statischen Server prüfen, zusätzlich zur Entwicklungsansicht. Ausgabeverzeichnis kontrollieren; `distDir: "out"` kann auch Buildartefakte enthalten. Keine Buildartefakte committen.
7. Visuelle Prüfung mindestens bei 320, 390, 768, 1024 und 1440 px: Header, geöffnetes Menü, Hero, alle Leistungen, Kontakt inklusive Zuständen sowie Footer und rechtliche Seiten. Screenshots vor/nach sichtbaren Änderungen erstellen und tatsächlich ansehen.
8. Prüfe Tastaturbedienung, Fokus, Kontraste, Zoom/Reflow, reduzierte Bewegung, Links, Anker und direkte Routenaufrufe. Automatische Accessibility-Prüfung durch manuelle Kontrolle ergänzen.
9. Für Webrecherche und Live-Websiteprüfung primär `playwright-cli` nutzen; Verfügbarkeit und aktuelle CLI-Hilfe prüfen. JavaScript-rendernde Seiten nicht ausschließlich anhand statisch abgerufenen HTMLs bewerten. Blockierten Zugriff oder fehlende Prüfungen offen dokumentieren.
10. Tests nur für relevante Funktionalität ergänzen, etwa Menüverhalten oder Formularzustände, sobald entsprechende Änderungen erfolgen. Für reine Dokumentationsänderungen reichen Inhalts-, Pfad- und Diffprüfung.
11. PRs beschreiben Problem, Änderung, ausgeführte Prüfungen und offene Punkte. Keine fachfremden Änderungen bündeln. Veröffentlichung und Merge sind eigenständige Schritte und gehören nicht automatisch zu einem Redesign-PR.

