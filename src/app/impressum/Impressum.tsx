import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navbarItems } from "../constants";
import de from "@/locales/de.json";
import { siteConfig } from "../site";

const ImpressumPage = (): React.JSX.Element => (
  <>
    <Navbar items={navbarItems} />
    <main id="hauptinhalt">
      <section className="section-pad py-12 sm:py-16 lg:py-20">
        <div className="section-frame surface-card p-6 sm:p-8 lg:p-10">
          <div className="eyebrow">Impressum</div>
          <h1 className="mt-5 text-balance">{de.impressum.company}</h1>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-ink-100 bg-sand-50/80 p-6 text-sm text-ink-700">
              <div className="font-semibold text-ink-900">{de.impressum.responsibleTitle}</div>
              <div className="mt-4">{de.impressum.company}</div>
              <div>{de.impressum.address.line1}</div>
              <div>{de.impressum.address.line2}</div>
              <div className="mt-4">
                {de.impressum.phoneLabel}:{" "}
                <a className="font-semibold text-ink-900 no-underline" href={`tel:${siteConfig.phoneHref}`}>
                  {de.impressum.phone}
                </a>
              </div>
              <div>
                {de.impressum.emailLabel}:{" "}
                <a className="font-semibold text-copper-500 no-underline" href={`mailto:${de.impressum.email}`}>
                  {de.impressum.email}
                </a>
              </div>
              <div className="mt-4">
                <a className="font-semibold text-copper-500 no-underline" href={siteConfig.mapLink} target="_blank" rel="noreferrer">
                  OpenStreetMap öffnen
                </a>
              </div>
            </div>

            <div className="grid gap-4 text-sm text-ink-700">
              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.ownerTitle}</div>
                <div className="mt-3">{de.impressum.ownerName}</div>
                <div>{de.impressum.court}</div>
                <div>{de.impressum.vatId}</div>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.contentsTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.contentsBody}</p>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.availabilityTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.availabilityBody}</p>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.externalLinksTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.externalLinksBody}</p>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.adsTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.adsBody}</p>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.noContractTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.noContractBody}</p>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.copyrightTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.copyrightBody}</p>
              </section>

              <section className="rounded-[1.75rem] border border-ink-100 bg-white/70 p-6">
                <div className="font-semibold text-ink-900">{de.impressum.sections.lawTitle}</div>
                <p className="mt-3 text-sm">{de.impressum.sections.lawBodyLine1}</p>
                <p className="mt-2 text-sm">{de.impressum.sections.lawBodyLine2}</p>
                <p className="mt-2 text-sm">{de.impressum.sections.lawBodyLine3}</p>
                <p className="mt-2 text-sm">{de.impressum.sections.lawBodyLine4}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer links={navbarItems} />
    </main>
  </>
);

export default ImpressumPage;
