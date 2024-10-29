import axios from "axios";

export const authenticateUser = async (username, password) => {
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
        return response.data.jwt.trim();
    } catch (error) {
        console.error("Error during authentication:", error);
        throw error;
    }
};
