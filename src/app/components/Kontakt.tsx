"use client";
import { useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import Link from "next/link";
import { company, LeistungProps } from "../constants";
export default function Kontakt({ id }: LeistungProps) {
  const [state, submit] = useForm("mvoelkjb");
  const success = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state.succeeded) success.current?.focus();
  }, [state.succeeded]);
  return (
    <section id={id} className="contact section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Sprechen wir über Ihr Vorhaben</p>
          <h2>Kontakt aufnehmen.</h2>
          <p>
            Rufen Sie uns an oder schreiben Sie uns. Für eine Kesselwartung
            nennen Sie bitte, soweit bekannt, Hersteller und Modell im Anliegen.
          </p>
          <address>
            <a className="contact-phone" href={company.tel}>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>
              {company.name}
              <br />
              {company.street}
              <br />
              {company.city}
            </span>
          </address>
        </div>
        <div>
          {state.succeeded ? (
            <div ref={success} className="success" role="status" tabIndex={-1}>
              <h3>Vielen Dank für Ihre Nachricht.</h3>
              <p>Ihre Anfrage wurde erfolgreich übermittelt.</p>
            </div>
          ) : (
            <form onSubmit={submit} aria-busy={state.submitting}>
              <p className="form-intro">Alle drei Felder sind erforderlich.</p>
              <label htmlFor="name">Ihr Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={200}
              />
              <label htmlFor="email">Ihre E-Mail-Adresse</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={
                  state.errors?.getFieldErrors("email").length
                    ? true
                    : undefined
                }
                aria-describedby={
                  state.errors?.getFieldErrors("email").length
                    ? "email-error"
                    : undefined
                }
              />
              {state.errors?.getFieldErrors("email").length ? (
                <p id="email-error" className="error">
                  Bitte prüfen Sie Ihre E-Mail-Adresse.
                </p>
              ) : null}
              <label htmlFor="message">Ihr Anliegen</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={5000}
              />
              <p className="form-note">
                Zum Versand verwenden wir Formspree.{" "}
                <Link href="/datenschutz/">Hinweise zum Datenschutz</Link>
              </p>
              {state.errors && (
                <p className="error" role="alert">
                  Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie
                  Ihre Angaben und versuchen Sie es erneut. Sie erreichen uns
                  auch telefonisch oder per E-Mail.
                </p>
              )}
              <button
                type="submit"
                className="button"
                disabled={state.submitting}
              >
                {state.submitting ? "Wird gesendet …" : "Nachricht senden"}
              </button>
              <span className="sr-only" role="status">
                {state.submitting ? "Ihre Nachricht wird gesendet." : ""}
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
