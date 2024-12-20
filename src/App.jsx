import './App.css'
import Home from "./pages/home/Home.jsx";
import Surroundings from "./pages/surroundings/Surroundings.jsx";
import Prices from "./pages/prices/Prices.jsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigator/Navigator.jsx";
import Reservation from "./pages/reservations/Reservation.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Weather from "./pages/weather/Weather.jsx";
import Admin from "./pages/admin/Admin.jsx";
import EventOverview from "./pages/eventOverview/EventOverview.jsx";
import ActivitiesPage from "./pages/activitiesPage/ActivitiesPage.jsx";
import LogIn from "./pages/logIn/LogIn.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import AuthProvider from "./context/authContext/AuthContext.jsx";
import Pictures from "./pages/pictures/Pictures.jsx";



function App() {
    return (
        <>
            <div className="app-container">
            <Navigation />
            <Header />
            <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/omgeving" element={<Surroundings />}/>
                <Route path="/activities/:id" element={<ActivitiesPage />} />

                <Route path="/tarieven" element={<Prices />}/>
                <Route path="/Reserveren" element={<Reservation />}/>
                <Route path="/fotos" element={<Pictures />}/>
                <Route path="/contact" element={<Contact />}/>

                <Route path="/events" element={<EventOverview/>}/>
                <Route path="/weer" element={<Weather/>}/>

                <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
                <Route path="/login" element={<LogIn/>}/>
            </Routes>
            </AuthProvider>
            <Footer />
            </div>
        </>
    );
}

export default App
