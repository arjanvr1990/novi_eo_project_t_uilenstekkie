import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../../components/loginForm/LoginForm.jsx";

function LogIn() {
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

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

            const token = response.data.jwt.trim();
            localStorage.setItem('token', token);
            setLoginError("");
            navigate("/admin");
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
            <LoginForm handleLogin={handleLogin} loginError={loginError} />
        </>
    );
}

export default LogIn;
