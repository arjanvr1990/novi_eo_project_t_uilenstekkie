import "./Reservation.css"
import Receipt from "../../components/receipt/Receipt.jsx";
import NawtDataReservation from "../../components/nawtDataReservation/NawtDataReservation.jsx";
import PropTypes from "prop-types";

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

Reservation.propTypes = {
    reservationDetails: PropTypes.shape({
        vehicle: PropTypes.string,
        hasCar: PropTypes.bool,
        adults: PropTypes.number,
        children: PropTypes.number,
        electricity: PropTypes.bool,
        totalPrice: PropTypes.number,
    }).isRequired,
};


export default Reservation
