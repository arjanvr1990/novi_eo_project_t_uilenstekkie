import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authState, setAuthState] = useState({
        isAuth: false,
        user: null,
        jwtToken: null,
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp > Date.now() / 1000) {
                setAuthState({
                    isAuth: true,
                    user: decoded,
                    jwtToken: token,
                });
            } else {
                localStorage.removeItem("token");
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setAuthState({
            isAuth: true,
            user: decoded,
            jwtToken: token,
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState({
            isAuth: false,
            user: null,
            jwtToken: null,
        });
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
