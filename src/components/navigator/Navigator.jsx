import React from 'react';
import './Navigator.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">


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
                        to="/contact">
                        Contact
                    </NavLink>
                    </li>
                </ul>

            </div>
            <ul className="nav-items-log-in">
                <li>
                <NavLink
                    className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                    to="/admin">
                    🔑
            </NavLink>
            </li>
            </ul>


        </nav>
    );
}

export default Navigation;