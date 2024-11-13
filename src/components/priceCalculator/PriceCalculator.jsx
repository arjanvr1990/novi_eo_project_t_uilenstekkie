import "./PriceCalculator.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";
import pricesData from "../../data/prices.json";


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
    const [totalPrice, setTotalPrice] = useState(0);


    const prices = pricesData;

    const calculatePrice = () => {
        let price = 0;

        switch (vehicle) {
            case "Camper tot 5m":
                price += prices.smallCamper || 0;
                break;
            case "Camper tot 6m":
                price += prices.largeCamper || 0;
                break;
            case "Caravan tot 6m":
                price += prices.caravan || 0;
                break;
            case "Tent Groot":
                price += prices.largeTent || 0;
                break;
            case "Tent Klein":
                price += prices.smallTent || 0;
                break;
            default:
                break;
        }

        price += adults * (prices.adult || 0);
        price += children * (prices.child || 0);

        if (electricity) {
            price += prices.electricity || 0;
        }

        if (hasCar) {
            price += prices.car || 0;
        }

        return price.toFixed(2);
    };

    useEffect(() => {
        setTotalPrice(calculatePrice());
    }, [vehicle, hasCar, adults, children, electricity, prices]);

    const handleReserve = () => {
        if (!vehicle || adults < 1) {
            setErrorMessage("Je moet een kampeermiddel selecteren en minstens 1 volwassene invoeren.");
            return;
        }

        setErrorMessage("");

        const reservationData = {
            vehicle,
            hasCar,
            adults,
            children,
            electricity,
            totalPrice,
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
            <form>
                <h2>Tarieven:</h2>
                <ul>
                    {["Camper tot 5m", "Camper tot 6m", "Caravan tot 6m", "Tent Groot", "Tent Klein"].map(item => (
                        <li key={item}>
                            <label>
                                <input
                                    type="radio"
                                    value={item}
                                    checked={vehicle === item}
                                    onChange={(e) => setVehicle(e.target.value)}
                                    className="inputField"
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
                        className="inputField"
                    />
                    Auto (parkeren)
                </label>

                <div className="person-calculator">
                    <label>
                        Aantal volwassenen:
                        <input
                            type="number"
                            min="1"
                            value={adults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            className="inputField"
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
                            className="inputField"
                        />
                    </label>
                </div>

                <label>
                    <input
                        type="checkbox"
                        checked={electricity}
                        onChange={() => setElectricity(!electricity)}
                        className="inputField"
                    />
                    Gebruik maken van elektriciteit
                </label>
            </form>

            <h2>Totaal Prijs: € {totalPrice} per nacht</h2>

            {errorMessage && <p className="errorMessage">{errorMessage}</p>}

            <button className="button" type="button" onClick={handleReserve}>Reserveren</button>
        </div>
    );
}

export default PriceCalculator;
