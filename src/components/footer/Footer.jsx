import React from "react";
import "./Footer.css";
import footer from "../../assets/footer/footer t uilenstekkie geknipt.png"


function Footer() {
    return (

        <footer className="custom-footer">
            <div className="image-container">
                <img className="img-footer" src={footer} alt="Uil en camping"/>
                <div className="content-wrapper">
                    <nav className="navigation">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#omgeving">Omgeving</a></li>
                            <li><a href="#tarieven">Tarieven</a></li>
                            <li><a href="#reserveren">Reserveren</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="contact-info">
                        <ul>
                            <li><a href="#">Termietergouw 1</a></li>
                            <li><a href="#">1027AD </a></li>
                            <li><a href="#"> Amsterdam</a></li>
                            <li><a href="#">+31 6 12345678</a></li>
                            <li><a href="#">info@example.com</a></li>

                        </ul>

                    </div>
                </div>
            </div>
        </footer>


    );
}

export default Footer;
