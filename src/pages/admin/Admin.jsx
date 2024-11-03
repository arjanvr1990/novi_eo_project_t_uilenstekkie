import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext.jsx"; // Importeer AuthContext
import "./Admin.css";
import StatusForm from "../../components/statusForm/StatusForm.jsx";
import StatusDisplay from "../../components/statusDisplay/StatusDisplay.jsx";
import useCampingStatus from "../../hooks/useCampingStatus/useCampingStatus.js";
import PriceSetter from "../../components/priceSetter/PriceSetter.jsx";
import CreateUser from "../../components/createUser/CreateUser.jsx";
import ManageUsers from "../../components/manageUsers/ManageUsers.jsx";

function Admin() {
    const { jwtToken } = useContext(AuthContext); // Haal jwtToken uit de context
    const [campingStatus, updateCampingStatus] = useCampingStatus();

    const handleStatusSubmit = (status) => {
        updateCampingStatus(status);
    };

    return (
        <div>
            <h1>Beheer Camping</h1>
            <StatusForm onSubmit={handleStatusSubmit} />
            <StatusDisplay
                isFull={campingStatus.isFull}
                availableUntil={campingStatus.availableUntil}
                updateCampingStatus={updateCampingStatus}
            />
            <PriceSetter />
            <CreateUser />
            <ManageUsers jwtToken={jwtToken} />
        </div>
    );
}

export default Admin;
