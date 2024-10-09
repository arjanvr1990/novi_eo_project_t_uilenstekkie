// import "./PriceCalculator.css";
// import React, { useState, useEffect } from 'react';
//
// function PriceCalculator() {
//     const [vehicle, setVehicle] = useState('');
//     const [hasCar, setHasCar] = useState(false);
//     const [adults, setAdults] = useState(0);
//     const [children, setChildren] = useState(0);
//     const [electricity, setElectricity] = useState(false);
//     const [rotation, setRotation] = useState(0); // State voor rotatie
//     const [randomFont, setRandomFont] = useState(''); // State voor lettertype
//
//     const prices = {
//         adult: 7.00,
//         child: 3.00,
//         smallTent: 2.50,
//         largeTent: 5.00,
//         caravan: 7.50,
//         smallCamper: 5.00,
//         largeCamper: 7.50,
//         electricity: 3.50,
//         car: 1.00,
//     };
//
//
//     useEffect(() => {
//         const generateRandomRotation = () => {
//             return Math.floor(Math.random() * 11) - 5;
//         };
//
//         const fonts = ['Beth Ellen', 'Crafty Girls', 'Fuzzy Bubbles'];
//         const randomFontChoice = fonts[Math.floor(Math.random() * fonts.length)];
//
//         setRotation(generateRandomRotation());
//         setRandomFont(randomFontChoice);
//     }, []);
//
//     const calculatePrice = () => {
//         let totalPrice = 0;
//
//         switch (vehicle) {
//             case 'Camper tot 5m':
//                 totalPrice += prices.smallCamper;
//                 break;
//             case 'Camper tot 6m':
//                 totalPrice += prices.largeCamper;
//                 break;
//             case 'Caravan tot 6m':
//                 totalPrice += prices.caravan;
//                 break;
//             case 'Tent Groot':
//                 totalPrice += prices.largeTent;
//                 break;
//             case 'Tent Klein':
//                 totalPrice += prices.smallTent;
//                 break;
//             default:
//                 break;
//         }
//
//         totalPrice += adults * prices.adult;
//         totalPrice += children * prices.child;
//
//         if (electricity) {
//             totalPrice += prices.electricity;
//         }
//
//         if (hasCar) {
//             totalPrice += prices.car;
//         }
//
//         return totalPrice.toFixed(2);
//     };
//
//     return (
//         <div className="price-calculator" style={{
//             transform: `rotate(${rotation}deg)`,
//             transition: 'transform 0.3s ease',
//             fontFamily: randomFont,
//         }}>
//
//             <form>
//                 <h2>Tarieven:</h2>
//                 <ul>
//                     {['Camper tot 5m', 'Camper tot 6m', 'Caravan tot 6m', 'Tent Groot', 'Tent Klein'].map(item => (
//                         <li key={item}>
//                             <label>
//                                 <input
//                                     type="radio"
//                                     value={item}
//                                     checked={vehicle === item}
//                                     onChange={(e) => setVehicle(e.target.value)}
//                                 />
//                                 {item}
//                             </label>
//                         </li>
//                     ))}
//                 </ul>
//
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={hasCar}
//                         onChange={() => setHasCar(!hasCar)}
//                     />
//                     Wel of geen auto (parkeren)
//                 </label>
//
//                 <div className="person-calculator">
//                     <label>
//                         Aantal volwassenen:
//                         <input
//                             type="number"
//                             min="1"
//                             value={adults}
//                             onChange={(e) => setAdults(e.target.value)}
//                         />
//                     </label>
//                 </div>
//
//                 <div className="person-calculator">
//                     <label>
//                         Aantal kinderen (t/m 16 jaar):
//                         <input
//                             type="number"
//                             min="0"
//                             value={children}
//                             onChange={(e) => setChildren(e.target.value)}
//                         />
//                     </label>
//                 </div>
//
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={electricity}
//                         onChange={() => setElectricity(!electricity)}
//                     />
//                     Gebruik maken van elektriciteit
//                 </label>
//             </form>
//
//             <h2>Totaal Prijs: € {calculatePrice()}</h2>
//         </div>
//     );
// }
//
// export default PriceCalculator;



import "./PriceCalculator.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PriceCalculator() {
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState('');
    const [hasCar, setHasCar] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [electricity, setElectricity] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [randomFont, setRandomFont] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State voor foutmelding

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

    useEffect(() => {
        const generateRandomRotation = () => {
            return Math.floor(Math.random() * 11) - 5;
        };

        const fonts = ['Beth Ellen', 'Crafty Girls', 'Fuzzy Bubbles'];
        const randomFontChoice = fonts[Math.floor(Math.random() * fonts.length)];

        setRotation(generateRandomRotation());
        setRandomFont(randomFontChoice);
    }, []);

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
        // Validatie: controleer of er een voertuig en minstens 1 volwassene is
        if (!vehicle || adults < 1) {
            setErrorMessage('Je moet een kampeermiddel selecteren en minstens 1 volwassene invoeren.');
            return;
        }

        // Reset foutmelding als validatie slaagt
        setErrorMessage('');

        const reservationData = {
            vehicle,
            hasCar,
            adults,
            children,
            electricity,
            totalPrice: calculatePrice(),
        };

        navigate('/reserveren', { state: reservationData });
    };

    return (
        <div className="price-calculator" style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.3s ease',
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
                            onChange={(e) => setAdults(e.target.value)}
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
                            onChange={(e) => setChildren(e.target.value)}
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

            {/* Foutmelding weergeven als de invoer niet geldig is */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Reserveren knop */}
            <button type="button" onClick={handleReserve}>Reserveren</button>
        </div>
    );
}

export default PriceCalculator;
