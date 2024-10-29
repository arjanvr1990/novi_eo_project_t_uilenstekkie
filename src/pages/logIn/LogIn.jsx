import React, { useState } from "react";
import LoginForm from "../../components/loginForm/LoginForm.jsx";
import CreateUser from "../../components/createUser/CreateUser.jsx";
import ManageUsers from "../../components/manageUsers/ManageUsers.jsx";
import useAuthenticate from "../../hooks/useAuthenticate/useAuthenticate.js";

function LogIn() {
    const { jwtToken, authenticate, errorMessage: authErrorMessage } = useAuthenticate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState("");

    const handleLogin = async (username, password) => {
        try {
            const token = await authenticate(username, password);
            if (token) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            setLoginError(authErrorMessage);
        }
    };

    return (
        <>
            <h2>Log In</h2>
            {!isAuthenticated ? (
                <LoginForm handleLogin={handleLogin} />
            ) : (
                <>
                    {loginError && <div className="login-error-message">{loginError}</div>}
                    <CreateUser />
                    <ManageUsers jwtToken={jwtToken} />
                </>
            )}
        </>
    );
}

export default LogIn;
