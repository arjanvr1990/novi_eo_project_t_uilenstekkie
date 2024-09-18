import React from "react";
import "./Footer.css";



function Footer() {
    return (



        <footer className="footer">
            <div className="footer-banner">
                <div className="footer-container">
                    <div className="footer-items">
                        <ul className="footer-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Omgeving</a></li>
                            <li><a href="#">Prijzen</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="footer-adres">
                            <li><a href="#">adres regel 1</a></li>
                            <li><a href="#">adres regel 2</a></li>
                            <li><a href="#">telefoonnummer</a></li>
                            <li><a href="#">emailadres</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
