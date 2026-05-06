"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { HiMiniMapPin, HiMiniPhone, HiOutlineEnvelope, HiOutlineMap } from "react-icons/hi2";
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";
import { siteConfig } from "../site";

const Kontakt = (props: LeistungProps): React.JSX.Element => {
  const [name, setName] = useState("");

  const [state, handleSubmit] = useForm("mvoelkjb", {
    data: {
      subject: `${de.sections.kontakt.subjectPrefix} ${name}`,
      pageTitle() {
        return document.title;
      },
    },
  });

  if (state.succeeded) {
    return (
      <section id={props.id} className="section-pad pb-20 pt-10 sm:pb-24">
        <div className="section-frame surface-card p-6 sm:p-8 lg:p-10">
          <div className="eyebrow">Kontakt</div>
          <h2 className="mt-5 text-balance">{de.sections.kontakt.title}</h2>
          <div className="mt-6 rounded-[1.75rem] border border-moss-300/40 bg-moss-600 px-6 py-8 text-white">
            <div className="font-display text-3xl">{de.sections.kontakt.successTitle}</div>
            <p className="mt-3 max-w-2xl text-base text-white/90">{de.sections.kontakt.successBody}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={props.id} className="section-pad pb-20 pt-10 sm:pb-24">
      <div className="section-frame surface-card overflow-hidden">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div className="space-y-6">
            <div className="eyebrow">Kontakt</div>
            <div>
              <h2 className="text-balance">{de.sections.kontakt.title}</h2>
              <p className="mt-4 max-w-2xl">{de.sections.kontakt.prompt}</p>
              <p className="input-help">{de.sections.kontakt.responseHint}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={`tel:${siteConfig.phoneHref}`} className="stat-chip block no-underline">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                    <HiMiniPhone size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{de.sections.kontakt.phoneLabel}</div>
                    <div className="mt-1 font-semibold text-ink-900">{de.impressum.phone}</div>
                  </div>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="stat-chip block no-underline">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                    <HiOutlineEnvelope size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{de.sections.kontakt.emailLabel}</div>
                    <div className="mt-1 font-semibold text-ink-900">{de.impressum.email}</div>
                  </div>
                </div>
              </a>

              <div className="stat-chip">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                    <HiMiniMapPin size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{de.sections.kontakt.addressLabel}</div>
                    <div className="mt-1 font-semibold text-ink-900">{de.impressum.address.line1}</div>
                    <div className="text-sm text-ink-700">{de.impressum.address.line2}</div>
                  </div>
                </div>
              </div>

              <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="stat-chip block no-underline">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                    <HiOutlineMap size={18} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{de.sections.kontakt.routeLabel}</div>
                    <div className="mt-1 font-semibold text-ink-900">OpenStreetMap</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.75rem] bg-white/72 p-5 sm:p-6" aria-describedby="kontakt-hinweis">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="text-sm font-semibold text-ink-700">
                  {de.sections.kontakt.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={de.sections.kontakt.form.namePlaceholder}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="input mt-2"
                />
                <div className="mt-2 text-sm text-copper-600">
                  <ValidationError prefix={de.sections.kontakt.validation.name} field="name" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-ink-700">
                  {de.sections.kontakt.form.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={de.sections.kontakt.form.emailPlaceholder}
                  className="input mt-2"
                />
                <div className="mt-2 text-sm text-copper-600">
                  <ValidationError prefix={de.sections.kontakt.validation.email} field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-ink-700">
                  {de.sections.kontakt.form.phoneLabel}
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder={de.sections.kontakt.form.phonePlaceholder}
                  className="input mt-2"
                />
              </div>

              <div>
                <label htmlFor="location" className="text-sm font-semibold text-ink-700">
                  {de.sections.kontakt.form.locationLabel}
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  autoComplete="address-level2"
                  placeholder={de.sections.kontakt.form.locationPlaceholder}
                  className="input mt-2"
                />
              </div>

              <div>
                <label htmlFor="service" className="text-sm font-semibold text-ink-700">
                  {de.sections.kontakt.form.serviceLabel}
                </label>
                <select id="service" name="service" className="input mt-2">
                  {de.sections.kontakt.form.services.map((service) => (
                    <option key={service} value={service === "Bitte wählen" ? "" : service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-ink-700">
                  {de.sections.kontakt.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={de.sections.kontakt.form.messagePlaceholder}
                  className="input mt-2 resize-y"
                />
                <div className="mt-2 text-sm text-copper-600">
                  <ValidationError prefix={de.sections.kontakt.validation.message} field="message" errors={state.errors} />
                </div>
              </div>
            </div>

            <p id="kontakt-hinweis" className="input-help">
              Pflichtfelder sind mit einem Stern markiert.
            </p>

            <button type="submit" className="btn-primary mt-6 w-full" disabled={state.submitting}>
              {de.sections.kontakt.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
