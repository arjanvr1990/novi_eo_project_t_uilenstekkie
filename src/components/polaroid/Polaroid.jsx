// import React from "react";
// import { Link } from "react-router-dom";
// import './Polaroid.css';
// import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
// import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";
//
// function Polaroid({ image, title, alt, link, date, name }) {
//     const rotation = useRandomRotation();
//     const randomFont = useRandomFont();
//
//     return (
//         <Link to={link} style={{ textDecoration: 'none' }}>
//             <div
//                 className="polaroid-container"
//                 style={{
//                     transform: `rotate(${rotation}deg)`,
//                     transition: 'transform 0.3s ease',
//                     fontFamily: randomFont
//                 }}
//             >
//                 <div className="polaroid-img-container">
//                     <img className="polaroid-img" src={image} alt={alt} />
//                 </div>
//                 <h3 className="polaroid-title" style={{ fontFamily: randomFont }}>{title}</h3>
//                 {name && <p className="polaroid-name">{name}</p>} {/* New Name Display */}
//                 {date && <p className="polaroid-date">{date}</p>} {/* New Date Display */}
//             </div>
//         </Link>
//     );
// }
//
// export default Polaroid;


import React from "react";
import { Link } from "react-router-dom";
import './Polaroid.css';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";

function Polaroid({ image, title, alt, link, date, name }) {
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div
                className="polaroid-container"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.3s ease',
                    fontFamily: randomFont
                }}
            >
                <div className="polaroid-img-container">
                    <img className="polaroid-img" src={image} alt={alt} />
                </div>
                <h3 className="polaroid-title" style={{ fontFamily: randomFont }}>{title}</h3>
                {name && <p className="polaroid-name">{name}</p>} {/* New Name Display */}
                {date && <p className="polaroid-date">{date}</p>} {/* New Date Display */}
            </div>
        </Link>
    );
}

export default Polaroid;
