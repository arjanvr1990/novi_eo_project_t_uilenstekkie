import React from "react";
import "./UserForm.css"

const UserForm = ({ formData, handleChange, handleSubmit, buttonText }) => {


    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <div className="user-form-input">
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="inputField"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="inputField"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="inputField"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="inputField"
                />
            </div>
            <label>
                Rol:
                <select
                    className="inputField"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}>

                        <option value="USER">Gebruiker</option>
                        <option value="ADMIN">Admin</option>
                </select>
            </label>
            <button className="button" type="submit">{buttonText}</button>
        </form>
    );
};

export default UserForm;
