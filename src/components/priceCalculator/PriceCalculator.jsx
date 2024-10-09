import "./PriceCalculator.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";

function PriceCalculator() {
    const navigate = useNavigate();
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();
    const [vehicle, setVehicle] = useState('');
    const [hasCar, setHasCar] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [electricity, setElectricity] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const prices = {
        adult: 7.00,
        child: 3.00,
        smallTent: 2.50,
        largeTent: 5.00,
        caravan: 7.50,
        smallCamper: 5.00,
        largeCamper: 7.50,
        electricity: 3.50,
        car: 1.00,
    };

    const calculatePrice = () => {
        let totalPrice = 0;

        switch (vehicle) {
            case 'Camper tot 5m':
                totalPrice += prices.smallCamper;
                break;
            case 'Camper tot 6m':
                totalPrice += prices.largeCamper;
                break;
            case 'Caravan tot 6m':
                totalPrice += prices.caravan;
                break;
            case 'Tent Groot':
                totalPrice += prices.largeTent;
                break;
            case 'Tent Klein':
                totalPrice += prices.smallTent;
                break;
            default:
                break;
        }

        totalPrice += adults * prices.adult;
        totalPrice += children * prices.child;

        if (electricity) {
            totalPrice += prices.electricity;
        }

        if (hasCar) {
            totalPrice += prices.car;
        }

        return totalPrice.toFixed(2);
    };

    const handleReserve = () => {
        if (!vehicle || adults < 1) {
            setErrorMessage('Je moet een kampeermiddel selecteren en minstens 1 volwassene invoeren.');
            return;
        }

        setErrorMessage('');

        const reservationData = {
            vehicle,
            hasCar,
            adults,
            children,
            electricity,
            totalPrice: calculatePrice(),
        };


        navigate('/reserveren', { state: { reservationDetails: reservationData } });


        setVehicle('');
        setHasCar(false);
        setAdults(1);
        setChildren(0);
        setElectricity(false);
    };


    return (
        <div className="price-calculator" style={{
            transform: `rotate(${rotation}deg)`,
            fontFamily: randomFont,
        }}>
            <h1>Kamp Prijs Calculator</h1>
            <form>
                <h2>Tarieven:</h2>
                <ul>
                    {['Camper tot 5m', 'Camper tot 6m', 'Caravan tot 6m', 'Tent Groot', 'Tent Klein'].map(item => (
                        <li key={item}>
                            <label>
                                <input
                                    type="radio"
                                    value={item}
                                    checked={vehicle === item}
                                    onChange={(e) => setVehicle(e.target.value)}
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>

                <label>
                    <input
                        type="checkbox"
                        checked={hasCar}
                        onChange={() => setHasCar(!hasCar)}
                    />
                    Wel of geen auto (parkeren)
                </label>

                <div className="person-calculator">
                    <label>
                        Aantal volwassenen:
                        <input
                            type="number"
                            min="1"
                            value={adults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                        />
                    </label>
                </div>

                <div className="person-calculator">
                    <label>
                        Aantal kinderen (t/m 16 jaar):
                        <input
                            type="number"
                            min="0"
                            value={children}
                            onChange={(e) => setChildren(Number(e.target.value))}
                        />
                    </label>
                </div>

                <label>
                    <input
                        type="checkbox"
                        checked={electricity}
                        onChange={() => setElectricity(!electricity)}
                    />
                    Gebruik maken van elektriciteit
                </label>
            </form>

            <h2>Totaal Prijs: € {calculatePrice()} per nacht</h2>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button type="button" onClick={handleReserve}>Reserveren</button>
        </div>
    );
}

export default PriceCalculator;
