import "./Header.css";
import header from "../../assets/banner/banner header t uilenstekkie geknipt.png";
import logo from "../../assets/banner/t uillenstekkie logo.png";

function Header() {
    return (
        <>
            <header className="custom-header">
                <img className="header-image" src={header} alt="camping tavereel"  />
                <div className="header-content">
                    <div className="logo-circle">
                        <h4 className="text-top">Altijd een lekker plekkie...</h4>
                        <div className="logo">
                            <img src={logo} alt="Tent en uilen tekening" />
                        </div>
                        <h4 className="text-bottom">... op camping 't Uilenstekkie</h4>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
