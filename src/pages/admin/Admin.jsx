import "./Admin.css";
import StatusForm from "../../components/statusForm/StatusForm.jsx";
import StatusDisplay from "../../components/statusDisplay/StatusDisplay.jsx";
import useCampingStatus from "../../hooks/useCampingStatus/useCampingStatus.js";
import PriceSetter from "../../components/priceSetter/PriceSetter.jsx";

function Admin() {
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
            <PriceSetter/>
        </div>
    );
}



export default Admin;