import React from "react";
import { Link } from "react-router-dom";
import './Polaroid.css';

function Polaroid({ image, title, alt, link }) {
    const generateRandomRotation = () => {
        return Math.floor(Math.random() * 11) - 5;
    };

    const rotation = generateRandomRotation();

    const fonts = ['Beth Ellen', 'Crafty Girls', 'Fuzzy Bubbles'];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div
                className="polaroid-container"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.3s ease',
                }}
            >
                <div className="polaroid-img-container">
                    <img className="polaroid-img" src={image} alt={alt} />
                </div>
                <h3 className="polaroid-title" style={{ fontFamily: randomFont }}>{title}</h3>
            </div>
        </Link>
    );
}

export default Polaroid;
