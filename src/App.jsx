import './App.css'
import React from "react";
import Navigator from "./components/navigator/Navigator.jsx";
import Header from  "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {


    return (
        <div className="app-container">
            <Navigator/>
            <Header/>
            <Footer/>

        </div>
    )
}
export default App
