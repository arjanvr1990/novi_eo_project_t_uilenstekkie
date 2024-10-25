import './App.css'
import React from "react";
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



function App() {
    return (
        <>
            <div className="app-container">
            <Navigation />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/omgeving" element={<Surroundings />}/>
                <Route path="/activities/:id" element={<ActivitiesPage />} />

                <Route path="/tarieven" element={<Prices />}/>
                <Route path="/Reserveren" element={<Reservation />}/>
                <Route path="/contact" element={<Contact />}/>

                <Route path="/events" element={<EventOverview/>}/>
                <Route path="/weer" element={<Weather/>}/>

                <Route path="/admin" element={<Admin/>}/>
                <Route path="/login" element={<LogIn/>}/>
            </Routes>
            <Footer />
            </div>
        </>
    );
}

export default App
