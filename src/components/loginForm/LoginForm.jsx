import "./LoginForm.css";
import React, { useState } from "react";
import sharedStyles from "../../sharedStyles/sharedStyles.module.css";

const LoginForm = ({ handleLogin, loginError }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className={sharedStyles.box}>
            <form className="inlog-form" onSubmit={handleSubmit}>
                <div className="log-in-field">
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className={sharedStyles.inputField}
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className={sharedStyles.inputField}
                    />
                </div>
                <button className={sharedStyles.button} type="submit">Login</button>
            </form>
            {loginError && (
                <div className="login-error-message">{loginError}</div>
            )}
        </div>
    );
};

export default LoginForm;

