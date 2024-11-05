import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext.jsx';
import PropTypes from "prop-types";

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext);


    return isAuth ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};


export default PrivateRoute;
