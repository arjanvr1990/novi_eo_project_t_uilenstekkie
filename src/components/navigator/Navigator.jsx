import React from 'react';
import './Navigator.css';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>🏕️ Mini Camping 't Uilenstekkie</h4>

                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Omgeving</a></li>
                    <li><a href="#">Tarieven</a></li>
                    <li><a href="#">Reserveren</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>
            <ul className="nav-items-log-in">
                <li><a href="#">🔑</a></li> {/* Voeg hier de emoji toe */}
            </ul>
        </nav>
    );
}

export default Navigation;