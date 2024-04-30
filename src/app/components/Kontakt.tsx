import { useState } from "react";
import { LeistungProps } from "../page";
import { useForm, ValidationError } from '@formspree/react';

const Kontakt = (props: LeistungProps): React.JSX.Element => {

    const [name, setName] = useState('')

    const [state, handleSubmit] = useForm("mvoelkjb", {
        data: {
            subject: `Neue Nachricht von ${name}`,
            pageTitle: function () { return document.title; }
        }
    });

    if (state.succeeded) {
        return <section id={props.id} className="bg-grey-100">
            <div className="leistung">
                <div className="header">Kontakt</div>
                <div className="my-5 w-full">
                    <div className=" w-1/2 text-center hover:animate-pulse text-4xl text-green-100 mx-auto">Vielen Dank für Ihre Nachricht !</div>
                    <div className="w-1/2 mt-2 text-left mx-auto">Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.</div>
                </div>
            </div>
        </section>
    }

    return (
        <section id={props.id} className="bg-grey-100">
            <div className="leistung">
                <div className="header">Kontakt</div>
                <div className="mt-3">Bei Anfragen nutzen Sie bitte das Kontaktformular oder schreiben uns mir per Email: </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <div>Name:</div>
                        <input id="name" name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="input-row">
                        <div>Email:</div>
                        <input id="email" type="email" name="email" placeholder="Email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="input-row">
                        <div>Anliegen:</div>
                        <textarea id="message" name="message" rows={5} placeholder="Ihr Anliegen..." />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className="w-full mb-16">
                        <button type="submit" className="bg-green-200 float-right h-[44px] w-[121px] text-white hover:bg-green-100" disabled={state.submitting}>Absenden</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Kontakt

