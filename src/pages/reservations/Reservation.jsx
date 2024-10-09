import React, { useState } from 'react';
import {useLocation} from "react-router-dom";
import Receipt from "../../components/receipt/Receipt.jsx";

function Reservation() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>

            <Receipt/>


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
