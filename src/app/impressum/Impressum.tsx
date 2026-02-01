import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navbarItems } from "../constants";
import de from "@/locales/de.json";

const ImpressumPage = (): React.JSX.Element => (
  <main className="bg-sand-50">
    <Navbar items={navbarItems} />
    <section className="section-pad pt-28 pb-16">
      <div className="card p-8 sm:p-12">
        <div className="tag">Impressum</div>
        <h1 className="mt-4 text-3xl sm:text-4xl">{de.impressum.company}</h1>
        <div className="mt-6 space-y-4 text-sm text-ink-700">
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.responsibleTitle}</div>
            <div>{de.impressum.company}</div>
            <div>{de.impressum.address.line1}</div>
            <div>{de.impressum.address.line2}</div>
            <div>
              {de.impressum.phoneLabel}: {de.impressum.phone}
            </div>
            <div>
              {de.impressum.emailLabel}: <a className="underline text-copper-500" href={`mailto:${de.impressum.email}`}>{de.impressum.email}</a>
            </div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.ownerTitle}</div>
            <div>{de.impressum.ownerName}</div>
            <div>{de.impressum.court}</div>
            <div>{de.impressum.vatId}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.contentsTitle}</div>
            <div>{de.impressum.sections.contentsBody}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.availabilityTitle}</div>
            <div>{de.impressum.sections.availabilityBody}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.externalLinksTitle}</div>
            <div>{de.impressum.sections.externalLinksBody}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.adsTitle}</div>
            <div>{de.impressum.sections.adsBody}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.noContractTitle}</div>
            <div>{de.impressum.sections.noContractBody}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.copyrightTitle}</div>
            <div>{de.impressum.sections.copyrightBody}</div>
          </div>
          <div>
            <div className="font-semibold text-ink-900">{de.impressum.sections.lawTitle}</div>
            <div>{de.impressum.sections.lawBodyLine1}</div>
            <div>{de.impressum.sections.lawBodyLine2}</div>
            <div>{de.impressum.sections.lawBodyLine3}</div>
            <div>{de.impressum.sections.lawBodyLine4}</div>
          </div>
        </div>
      </div>
    </section>
    <Footer links={navbarItems} />
  </main>
);

export default ImpressumPage;
