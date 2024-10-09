import React from 'react';
import { useLocation } from "react-router-dom";
import './Receipt.css';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js"; // Vergeet niet de CSS te importeren

function Receipt() {
    const rotation = useRandomRotation();
    const location = useLocation();
    const { vehicle, hasCar, adults, children, electricity, totalPrice } = location.state || {};

    return (
        <div className="receipt" style={{
                transform: `rotate(${rotation}deg)`
            }}>
            <h2>Tarieven</h2>

            <ul>
                <li>Kampeermiddel: {vehicle}</li>
                <li>Auto parkeren: {hasCar ? 'Ja' : 'Nee'}</li>
                <li>Aantal volwassenen: {adults}</li>
                <li>Aantal kinderen: {children}</li>
                <li>Elektriciteit: {electricity ? 'Ja' : 'Nee'}</li>
                <li className="total">Prijs: € {totalPrice} per nacht</li>
            </ul>
        </div>
    );
}

export default Receipt;
