import React, { useState } from "react";
import "./ContactForm.css";
import useFormField from "../../hooks/useFormField/useFormField.jsx"
import emailjs from "emailjs-com";
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";



function ContactForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

    const firstName = useFormField("text", "", "Voornaam", "medium");
    const middleName = useFormField("text", "", "Tussenvoegsel", "short");
    const lastName = useFormField("text", "", "Achternaam", "long");
    const email = useFormField("email", "", "E-mail", "long");
    const phone = useFormField("tel", "", "Telefoonnummer", "long");
    const message = useFormField("textarea", "", "Bericht", "message");

    const sendEmail = (contactData) => {
        return emailjs.send("service_28tjxuw", "template_xotfyik", contactData, "Q2f_Z-nFSmyEkxdT1");
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!firstName.value || !lastName.value || !email.value || !phone.value || !message.value) {
            setErrorMessage("Vul alstublieft alle verplichte velden in.");
            return;
        }

        setErrorMessage("");

        const contactData = {
            firstName: firstName.value,
            middleName: middleName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        };

        sendEmail(contactData)
            .then(() => {
                firstName.setValue("");
                middleName.setValue("");
                lastName.setValue("");
                email.setValue("");
                phone.setValue("");
                message.setValue("");
                setSuccessMessage("E-mail succesvol verzonden!");
            })
            .catch((err) => {
                console.error("E-mail verzenden mislukt", err);
                setErrorMessage("Er is een fout opgetreden bij het verzenden van de e-mail.");
            });
    };

    return (
        <div className="contact-form-container" style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.3s ease",
            fontFamily: randomFont,
        }}>
            <h2>Contactformulier</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                {successMessage && <p className="succesMessage">{successMessage}</p>}
                <div className="contact-form-input-container">
                    {firstName.inputField}
                    {middleName.inputField}
                    {lastName.inputField}
                </div>
                <div className="contact-form-input-container">
                    {email.inputField}
                    {phone.inputField}
                </div>
                <div className="contact-form-input-container">
                    {message.inputField}
                </div>
                <button className="button" type="submit">Verstuur</button>
            </form>
        </div>
    );
}

export default ContactForm;

