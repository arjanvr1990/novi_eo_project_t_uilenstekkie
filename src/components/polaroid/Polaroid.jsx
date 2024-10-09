import React from "react";
import { Link } from "react-router-dom";
import './Polaroid.css';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";

function Polaroid({ image, title, alt, link }) {
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

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
