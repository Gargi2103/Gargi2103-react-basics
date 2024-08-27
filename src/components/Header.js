import { LOGO_URL } from "../utils/constants"; //named import for named export
import { useState } from "react";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} /> {/* LOGO_URL is just like a variable hence in {} */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="button" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
