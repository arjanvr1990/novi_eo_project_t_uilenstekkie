import { useState } from "react";
import { authenticateUser } from "../../helpers/authenticateUser/authenticateUser.js";

const useAuthenticate = () => {
    const [jwtToken, setJwtToken] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const authenticate = async (username, password) => {
        try {
            const token = await authenticateUser(username, password);
            setJwtToken(token);
            setErrorMessage("");
            return token;
        } catch (error) {
            setErrorMessage(error.message);
            throw error;
        }
    };

    return { jwtToken, errorMessage, authenticate };
};

export default useAuthenticate;
