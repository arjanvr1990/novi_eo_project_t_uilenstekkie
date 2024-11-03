import "./Reservation.css"
import Receipt from "../../components/receipt/Receipt.jsx";
import NawtDataReservation from "../../components/nawtDataReservation/NawtDataReservation.jsx";

function Reservation({ reservationDetails }) {
    return (
        <div className="reservation-container">
            <div className="receipt-container">
                 <Receipt/>
            </div>

            <NawtDataReservation reservationDetails={reservationDetails} />
        </div>
    );
}

export default Reservation
