import "./CreateUser.css";
import { useState } from "react";
import useAuthenticate from "../../hooks/useAuthenticate/useAuthenticate.js"
import { handleError } from "../../helpers/handleError/handleError.js";
import UserForm from "../../components/userForm/UserForm.jsx"
import axios from "axios";
import PropTypes from "prop-types";

const CreateUser = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "USER",
        authorities: [
            {
                authority: "USER"
            }
        ]
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const { jwtToken, authenticate } = useAuthenticate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Wachtwoorden komen niet overeen. Probeer het opnieuw.");
            return;
        }
        if (formData.password.length < 8) {
            setErrorMessage("Wachtwoord moet minstens 8 tekens lang zijn.");
            return;
        }

        try {
            const authority = formData.role;
            const { confirmPassword, role, ...userData } = formData;
            userData.authorities = [{ authority }];

            const response = await axios.post("https://api.datavortex.nl/uilenstekkie/users", userData, {
                headers: {
                    "accept": "*/*",
                    "Content-Type": "application/json",
                    "X-Api-Key": import.meta.env.VITE_NOVI_BACKEND_API_KEY
                }
            });
            console.log("Response data:", response.data);
            setSuccessMessage("Gebruiker succesvol aangemaakt!");
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: "USER",
                authorities: [
                    {
                        authority: "USER"
                    }
                ]
            });
        } catch (error) {
            setErrorMessage(handleError(error));
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="create-user-box">
            <h3>Maak een nieuwe gebruiker aan</h3>
            <UserForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText="Create User"
            />
            {errorMessage && (
                <div className="create-user-error-message">{errorMessage}</div>
            )}
            {successMessage && (
                <div className="create-user-success-message">{successMessage}</div>
            )}
        </div>
    );
};

CreateUser.propTypes = {
    jwtToken: PropTypes.string,
    authenticate: PropTypes.func,
};


UserForm.propTypes = {
    formData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        confirmPassword: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default CreateUser;
