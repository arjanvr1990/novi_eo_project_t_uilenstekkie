import React, { useState } from 'react';
import {useLocation} from "react-router-dom";

function Reservation() {
    const location = useLocation();
    const { vehicle, hasCar, adults, children, electricity, totalPrice } = location.state || {};

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kun je de gegevens verzenden of verwerken
    };

    return (
        <div>
            <h1>Tarieven</h1>
            <h2>Gekozen opties:</h2>
            <ul>
                <li>Kampeermiddel: {vehicle}</li>
                <li>Auto parkeren: {hasCar ? 'Ja' : 'Nee'}</li>
                <li>Aantal volwassenen: {adults}</li>
                <li>Aantal kinderen: {children}</li>
                <li>Elektriciteit: {electricity ? 'Ja' : 'Nee'}</li>
                <li>Prijs: € {totalPrice} per nacht</li>
            </ul>

            <h2>NAWT Gegevens</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Naam:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Datum van aankomst:
                    <input
                        type="date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                    />
                </label>

                <label>
                    Datum van vertrek:
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                </label>

                <button type="submit">Verstuur</button>
            </form>
        </div>
    );
}

export default Reservation
