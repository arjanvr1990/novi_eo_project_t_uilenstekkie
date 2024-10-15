import "./Surroundings.css"
import React from "react";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import defaultImg from "../../assets/img-default.png";

function Surroundings() {
    return (
        <div>
            <div className="polaroid-wrapper"> {/* Wrapper voor centreren */}
                <div className="container-polaroids">
                    <Polaroid image={defaultImg} title="activiteit 1" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 2" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 3" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 4" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 5" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 6" alt="default img" link="#" />
                </div>
            </div>
        </div>
    );
}

export default Surroundings