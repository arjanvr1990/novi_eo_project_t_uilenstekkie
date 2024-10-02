import React from 'react';
import './Navigator.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                {/*<h4>🏕️ Mini Camping 't Uilenstekkie</h4>*/}

                <ul className="nav-items">
                    <li>
                        <NavLink
                            className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink
                        className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                        to="/omgeving">
                        Omgeving
                    </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                        to="/tarieven">
                        Tarieven
                    </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                            to="/reserveren">
                            Reserveren
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                        to="/contact">
                        Contact
                    </NavLink>
                    </li>
                </ul>

            </div>
            <ul className="nav-items-log-in">
                <li><a href="#">🔑</a></li> {/* Voeg hier de emoji toe */}
            </ul>
        </nav>
    );
}

export default Navigation;