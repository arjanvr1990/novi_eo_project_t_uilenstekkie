import React from "react";

const UserForm = ({ formData, handleChange, handleSubmit, buttonText }) => {


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
            />
            <label>
                Rol van Gebruiker:
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="USER">Gebruiker</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </label>
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default UserForm;
