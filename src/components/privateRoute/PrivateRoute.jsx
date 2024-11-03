import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext.jsx';  // Zorg ervoor dat het pad correct is

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext);


    return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
