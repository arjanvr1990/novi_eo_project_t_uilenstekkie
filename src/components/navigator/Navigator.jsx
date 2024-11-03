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
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                    <li><NavLink
                        className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                        to="/omgeving">
                        <h3>Omgeving</h3>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                            to="/tarieven">
                            <h3>Tarieven</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                            to="/contact">
                            <h3>Tarieven</h3>
                        </NavLink>
                    </li>
                </ul>

            </div>
            <ul className="nav-items-log-in">
                <li>
                    <NavLink
                        className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                        to="/login">
                        🔑
                    </NavLink>
                </li>
            </ul>


        </nav>
    );
}

export default Navigation;