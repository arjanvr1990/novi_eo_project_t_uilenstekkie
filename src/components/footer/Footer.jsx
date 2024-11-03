import React from "react";
import "./Footer.css";
import footer from "../../assets/footer/footer t uilenstekkie geknipt.png"
import testMedium from "../../assets/background/cork-board2.png"



function Footer() {
    return (

        <footer className="custom-footer">
            <div className="image-container">
                <picture>
                    <source media="(max-width: 950px)" srcSet={testMedium} />
                    <img className="img-footer" src={footer} alt="Beschrijving van de afbeelding" />
                </picture>

                <div className="content-wrapper">
                    <nav className="navigation">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/omgeving">Omgeving</a></li>
                            <li><a href="/tarieven">Tarieven</a></li>
                            <li><a href="/reserveren">Reserveren</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="contact-info">
                        <ul>
                            <li><a href="https://www.google.nl/maps/place/Termietergouw+1,+1027+AD+Amsterdam,+Nederland" target="_blank" rel="noopener noreferrer">Termietergouw 1</a></li>
                            <li><a href="https://www.google.nl/maps/place/Termietergouw+1,+1027+AD+Amsterdam,+Nederland" target="_blank" rel="noopener noreferrer">1027AD </a></li>
                            <li><a href="https://www.google.nl/maps/place/Termietergouw+1,+1027+AD+Amsterdam,+Nederland" target="_blank" rel="noopener noreferrer"> Amsterdam</a></li>
                            <li><a href="#">+31 6 24226106</a></li>
                            <li><a href="#">info@example.com</a></li>

                        </ul>

                    </div>
                </div>
            </div>
        </footer>


    );
}

export default Footer;
