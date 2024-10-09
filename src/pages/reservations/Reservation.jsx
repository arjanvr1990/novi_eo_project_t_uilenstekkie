import "./Reservation.css"
import Receipt from "../../components/receipt/Receipt.jsx";
import NawtData from "../../components/nawtData/NawtData.jsx";

function Reservation({ reservationDetails }) {
    return (
        <div className="reservation-container">
            <div className="receipt-container">
                 <Receipt/>
            </div>

            <NawtData reservationDetails={reservationDetails} />
        </div>
    );
}

export default Reservation
