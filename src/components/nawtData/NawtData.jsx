import "./NawtData.css";
import React, { useState } from "react";
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";
import useFormField from "../../hooks/useFormField/useFormField.jsx";
import emailjs from "emailjs-com";
import {useLocation} from "react-router-dom";


function NawtData() {
    const location = useLocation();
    const reservationDetails = location.state.reservationDetails;
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

    const firstName = useFormField("text", "", "Voornaam", "medium");
    const middleName = useFormField("text", "", "Tussenvoegsel", "short");
    const lastName = useFormField("text", "", "Achternaam", "long");
    const street = useFormField("text", "", "Straatnaam", "long");
    const houseNumber = useFormField("text", "", "Huisnr", "house-number");
    const houseNumberAdd = useFormField("text", "", "Toevoeging", "house-number");
    const zipCode = useFormField("text", "", "Postcode", "zip-code");
    const city = useFormField("text", "", "Plaatsnaam", "long");
    const country = useFormField("text", "", "Land", "long");
    const email = useFormField("email", "", "E-mail", "long");
    const phone = useFormField("tel", "", "Telefoonnummer", "long");
    const arrivalDate = useFormField("date", "", "Aankomst", "medium");
    const departureDate = useFormField("date", "", "Vertrek", "medium");

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const sendEmail = (reservationData) => {
        return emailjs.send("service_28tjxuw", "template_65l432s", reservationData, "Q2f_Z-nFSmyEkxdT1");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName.value || !lastName.value || !street.value || !houseNumber.value || !city.value || !country.value || !email.value || !phone.value || !arrivalDate.value || !departureDate.value) {
            setErrorMessage("Vul alstublieft alle verplichte velden in.");
            return;
        }

        setErrorMessage("");

        const reservationData = {
            firstName: firstName.value,
            middleName: middleName.value,
            lastName: lastName.value,
            street: street.value,
            houseNumber: houseNumber.value,
            houseNumberAdd: houseNumberAdd.value,
            zipCode: zipCode.value,
            city: city.value,
            country: country.value,
            email: email.value,
            phone: phone.value,
            arrivalDate: arrivalDate.value,
            departureDate: departureDate.value,

            vehicle: reservationDetails.vehicle,
            hasCar: reservationDetails.hasCar,
            adults: reservationDetails.adults,
            children: reservationDetails.children,
            electricity: reservationDetails.electricity,
            totalPrice: reservationDetails.totalPrice,
        };

        sendEmail(reservationData)
            .then(() => {

                firstName.setValue("");
                middleName.setValue("");
                lastName.setValue("");
                street.setValue("");
                houseNumber.setValue("");
                houseNumberAdd.setValue("");
                zipCode.setValue("");
                city.setValue("");
                country.setValue("");
                email.setValue("");
                phone.setValue("");
                arrivalDate.setValue("");
                departureDate.setValue("");
                setSuccessMessage("E-mail succesvol verzonden!");
            })
            .catch((err) => {
                console.error("E-mail verzenden mislukt", err);
                setErrorMessage("Er is een fout opgetreden bij het verzenden van de e-mail.");
            });
    };


    return (
        <div className="nawt-data-container" style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.3s ease",
            fontFamily: randomFont,
        }}>
            <h3>Reserveer</h3>
            <form className="nawt-data-form" onSubmit={handleSubmit}>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                <div className="nawt-data-name-container">
                    {firstName.inputField}
                    {middleName.inputField}
                    {lastName.inputField}
                </div>
                <div className="nawt-data-address-container">
                    {street.inputField}
                    {houseNumber.inputField}
                    {houseNumberAdd.inputField}
                </div>
                <div className="nawt-data-location-container">
                    {zipCode.inputField}
                    {city.inputField}
                    {country.inputField}
                </div>
                <div className="nawt-data-contact-container">
                    {email.inputField}
                    {phone.inputField}
                </div>
                <div className="nawt-data-date-container">
                    {arrivalDate.inputField}
                    {departureDate.inputField}
                </div>
                <p className="disclaimer">*de reservering is actief wanneer u een bevestigingsmail krijgt van uw reservering</p>
                <button className="nawt-data-button" type="submit">Reserveer</button>
            </form>
        </div>
    );
}

export default NawtData;

