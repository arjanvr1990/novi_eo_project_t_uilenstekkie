import React, { useEffect, useState } from "react";
import "./ManagerUser.css";
import { handleError } from "../../helpers/handleError/handleError.js";
import axios from "axios";

const ManageUsers = ({ jwtToken }) => {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [showUsers, setShowUsers] = useState(false);

    useEffect(() => {
        if (jwtToken && showUsers) {
            fetchUsers(jwtToken);
        }
    }, [jwtToken, showUsers]);

    // Fetch all users
    const fetchUsers = async (token) => {
        try {
            console.log("Fetching users with token:", token);
            const response = await axios.get("https://api.datavortex.nl/uilenstekkie/users", {
                headers: {
                    "accept": "*/*",
                    "Authorization": `Bearer ${token}`,
                    "X-Api-Key": import.meta.env.VITE_NOVI_BACKEND_API_KEY
                }
            });
            console.log("Gebruikers succesvol opgehaald:", response.data);
            response.data.forEach(user => console.log("User details:", user));
            setUsers(response.data);
        } catch (error) {
            setErrorMessage(handleError(error));
        }
    };

    return (
        <div className="manager-user-box">
            <h2>Gebruikers Beheren</h2>
            {!showUsers ? (
                <button className="button" onClick={() => setShowUsers(true)}>Toon Gebruikers</button>
            ) : (
                <div>
                    {errorMessage && <div className="errorMessage">{errorMessage}</div>}
                    <ul>
                        {users.map((user) => (
                            <li className="users-info" key={user.id}>
                                {user.id} - {user.username} - {user.email}
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
};

export default ManageUsers;
