import React from "react";
import "./Header.css";
import header from "../../assets/banner header t uilenstekkie geknipt.png";
import logo from "../../assets/t uillenstekkie logo.png";

function Header() {
    return (
        <>
            <header className="custom-header">
                <img className="header-image" src={header} alt="Beschrijving van de afbeelding"  />
                <div className="header-content">
                    <div className="logo-circle">
                        <div className="text-top">Altijd een lekker plekkie...</div>
                        <div className="logo">
                            <img src={logo} alt="Tent en uilen tekening" />
                        </div>
                        <div className="text-bottom">... op camping 't Uilenstekkie</div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
