import React from "react";
import { Link } from "react-router-dom";
import './Polaroid.css';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";
import defaultImg from "../../assets/img-default.png";

function Polaroid({ image, title, alt, link, date, name, quote }) {
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <div
                className="polaroid-container"
                style={{
                    transform: rotation,
                    transition: "transform 0.3s ease",
                    fontFamily: randomFont
                }}
            >
                <div className="polaroid-img-container">
                    <img
                        className="polaroid-img"
                        src={image}
                        alt={alt}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImg;
                        }}
                    />
                </div>
                <h3 className="polaroid-title" style={{ fontFamily: randomFont }}>{title}</h3>
                {name && <p className="polaroid-name">{name}</p>}
                {date && <p className="polaroid-date">{date}</p>}
                {quote && <p className="polaroid-quote">{quote}</p>}
            </div>
        </Link>
    );
}

export default Polaroid;

