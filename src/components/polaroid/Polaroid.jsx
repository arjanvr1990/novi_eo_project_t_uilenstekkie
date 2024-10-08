import React from "react";
import { Link } from "react-router-dom";
import './Polaroid.css';

function Polaroid({ image, title, alt, link }) {
    const generateRandomRotation = () => {
        return Math.floor(Math.random() * 11) - 5; // Willekeurige waarde tussen -5 en 5 graden
    };

    const rotation = generateRandomRotation(); // Genereer een willekeurige rotatie

    return (
        <Link to={link} style={{ textDecoration: 'none' }}> {/* Link rond de polaroid */}
            <div
                className="polaroid-container"
                style={{
                    transform: `rotate(${rotation}deg)`, // Rotatie op de container
                    transition: 'transform 0.3s ease', // Zorg ervoor dat de hover transitie soepel is
                }}
            >
                <div className="polaroid-img-container">
                    <img className="polaroid-img" src={image} alt={alt} />
                </div>
                <h3 className="polaroid-title">{title}</h3>
            </div>
        </Link>
    );
}

export default Polaroid;
