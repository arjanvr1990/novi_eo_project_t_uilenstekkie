import { useState } from "react";
import { authenticateUser } from "../../helpers/authenticateUser/authenticateUser.js";

const useAuthenticate = () => {
    const [jwtToken, setJwtToken] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const authenticate = async (username, password) => {
        try {
            const token = await authenticateUser(username, password);
            setJwtToken(token);
            return token;
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setErrorMessage("Authenticatie mislukt: Onjuiste gebruikersnaam of wachtwoord.");
            } else {
                setErrorMessage("Er is een fout opgetreden bij de authenticatie. Probeer het later opnieuw.");
            }
            throw error;
        }
    };

    return { jwtToken, errorMessage, authenticate };
};

export default useAuthenticate;
