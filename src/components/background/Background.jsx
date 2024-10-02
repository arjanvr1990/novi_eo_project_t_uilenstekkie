import './Background.css'
import React from "react";
import background from "../../assets/background/cork-board2.png"

function Background() {
    return (
        <>

            <div className="background-container">
                <img className="background-component" src={background} alt="Cork Board Background" />
            </div>


        </>
    );
}

export default Background