"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const mapLat = 51.17506;
const mapLon = 13.96436;
const mapBbox = "13.96136%2C51.17306%2C13.96736%2C51.17706";

const Kontakt = (props: LeistungProps): React.JSX.Element => {
  const [name, setName] = useState("");

  const [state, handleSubmit] = useForm("mvoelkjb", {
    data: {
      subject: `${de.sections.kontakt.subjectPrefix} ${name}`,
      pageTitle: function () {
        return document.title;
      },
    },
  });

  if (state.succeeded) {
    return (
      <section id={props.id} className="section-pad py-16 sm:py-20">
        <div className="card p-8 sm:p-12">
          <div className="tag">Kontakt</div>
          <h2 className="mt-4">{de.sections.kontakt.title}</h2>
          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6">
            <div className="text-2xl font-semibold text-ink-900">{de.sections.kontakt.successTitle}</div>
            <p className="mt-3 text-base text-ink-700">{de.sections.kontakt.successBody}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={props.id} className="section-pad py-16 sm:py-20">
      <div className="card grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="tag">Kontakt</div>
          <h2 className="mt-4">{de.sections.kontakt.title}</h2>
          <p className="mt-4 text-ink-700">
            {de.sections.kontakt.prompt}
            <a className="font-semibold text-copper-500 underline" href={`mailto:${de.impressum.email}`}>
              {de.sections.kontakt.emailLabel}
            </a>
          </p>
          <div className="mt-6 rounded-2xl border border-ink-100 bg-sand-50 p-6">
            <div className="text-sm uppercase tracking-wide text-ink-500">Direkt erreichbar</div>
            <div className="mt-3 text-lg font-semibold text-ink-900">{de.impressum.phone}</div>
            <div className="text-sm text-ink-700">{de.sections.kontakt.phoneLabel}</div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <iframe
              title="Standort auf OpenStreetMap"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&layer=mapnik&marker=${mapLat}%2C${mapLon}`}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-ink-100 bg-sand-50 px-4 py-3 text-xs text-ink-500">
              <a
                href={`https://www.openstreetmap.org/?mlat=${mapLat}&mlon=${mapLon}#map=18/${mapLat}/${mapLon}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-copper-500"
              >
                Grosse Karte oeffnen
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-ink-700">{de.sections.kontakt.form.nameLabel}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={de.sections.kontakt.form.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input mt-2"
            />
            <ValidationError prefix={de.sections.kontakt.validation.name} field="name" errors={state.errors} />
          </div>
          <div>
            <label className="text-sm font-semibold text-ink-700">{de.sections.kontakt.form.emailLabel}</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={de.sections.kontakt.form.emailPlaceholder}
              className="input mt-2"
            />
            <ValidationError prefix={de.sections.kontakt.validation.email} field="email" errors={state.errors} />
          </div>
          <div>
            <label className="text-sm font-semibold text-ink-700">{de.sections.kontakt.form.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={de.sections.kontakt.form.messagePlaceholder}
              className="input mt-2"
            />
            <ValidationError prefix={de.sections.kontakt.validation.message} field="message" errors={state.errors} />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={state.submitting}>
            {de.sections.kontakt.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
