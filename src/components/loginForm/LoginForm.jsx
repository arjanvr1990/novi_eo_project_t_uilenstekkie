import "./LoginForm.css";
import { useState } from "react";
import PropTypes from "prop-types";


const LoginForm = ({ handleLogin, loginError }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className="log-in-form">
            <form className="inlog-form" onSubmit={handleSubmit}>
                <div className="log-in-field">
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="inputField"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="inputField"
                    />
                </div>
                <button className="button" type="submit">Login</button>
            </form>
            {loginError && (
                <div className="login-error-message">{loginError}</div>
            )}
        </div>
    );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    loginError: PropTypes.string,
};

export default LoginForm;

