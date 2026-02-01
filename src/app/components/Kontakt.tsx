import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const Kontakt = (props: LeistungProps): React.JSX.Element => {

    const [name, setName] = useState('')

    const [state, handleSubmit] = useForm("mvoelkjb", {
        data: {
            subject: `${de.sections.kontakt.subjectPrefix} ${name}`,
            pageTitle: function () { return document.title; }
        }
    });

    if (state.succeeded) {
        return <section id={props.id} className="bg-grey-100">
            <div className="leistung">
                <div className="header">{de.sections.kontakt.title}</div>
                <div className="my-5 w-full">
                    <div className=" w-1/2 text-center hover:animate-pulse text-4xl text-green-100 mx-auto">{de.sections.kontakt.successTitle}</div>
                    <div className="w-1/2 mt-2 text-left mx-auto">{de.sections.kontakt.successBody}</div>
                </div>
            </div>
        </section>
    }

    return (
        <section id={props.id} className="bg-grey-100">
            <div className="leistung mt-2">
                <div className="header">{de.sections.kontakt.title}</div>
                <div className="mt-3">{de.sections.kontakt.prompt}<a className="hover:text-green-200 underline" href={`mailto:${de.impressum.email}`}>{de.sections.kontakt.emailLabel}</a> </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label>{de.sections.kontakt.form.nameLabel}</label>
                        <input id="name" name="name" type="text" placeholder={de.sections.kontakt.form.namePlaceholder} value={name} onChange={e => setName(e.target.value)} />
                        <ValidationError
                            prefix={de.sections.kontakt.validation.name}
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="input-row">
                        <label>{de.sections.kontakt.form.emailLabel}</label>
                        <input id="email" type="email" name="email" placeholder={de.sections.kontakt.form.emailPlaceholder} />
                        <ValidationError
                            prefix={de.sections.kontakt.validation.email}
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="input-row">
                        <label>{de.sections.kontakt.form.messageLabel}</label>
                        <textarea id="message" name="message" rows={5} placeholder={de.sections.kontakt.form.messagePlaceholder} />
                        <ValidationError
                            prefix={de.sections.kontakt.validation.message}
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className="w-full mb-16">
                        <button type="submit" className="bg-green-200 float-right h-[44px] w-[121px] text-white hover:bg-green-100" disabled={state.submitting}>{de.sections.kontakt.form.submit}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Kontakt
