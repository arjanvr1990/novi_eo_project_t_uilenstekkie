import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../../components/loginForm/LoginForm.jsx";
import CreateUser from "../../components/createUser/CreateUser.jsx";
import ManageUsers from "../../components/manageUsers/ManageUsers.jsx";

function LogIn() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [jwtToken, setJwtToken] = useState(null);
    const [loginError, setLoginError] = useState("");

    const handleLogin = async (username, password) => {
        try {

            const response = await axios.post("https://api.datavortex.nl/uilenstekkie/users/authenticate", {
                username,
                password
            }, {
                headers: {
                    "accept": "*/*",
                    "Content-Type": "application/json"
                }
            });


            setJwtToken(response.data.jwt.trim());
            setIsAuthenticated(true);
            setLoginError("");
        } catch (error) {
            if (error.response && (error.response.status === 401 || error.response.status === 400)) {

                setLoginError("Ongeldige gebruikersnaam of wachtwoord. Controleer uw gegevens en probeer het opnieuw.");
            } else {

                setLoginError("Er is een fout opgetreden bij de authenticatie. Probeer het later opnieuw.");
            }
        }
    };


    return (
        <>
            <h2>Log In</h2>
            {!isAuthenticated ? (
                <>
                    <LoginForm handleLogin={handleLogin} loginError={loginError} />
                </>
            ) : (
                <>
                    <CreateUser />
                    <ManageUsers jwtToken={jwtToken} />
                </>
            )}
        </>
    );
}

export default LogIn;
