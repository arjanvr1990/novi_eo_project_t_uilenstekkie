import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext.jsx';  // Zorg ervoor dat het pad correct is

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext);

    // Als isAuth niet waar is, wordt de gebruiker doorgestuurd naar de login-pagina
    return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
