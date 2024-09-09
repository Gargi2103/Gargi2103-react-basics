import { LOGO_URL } from "../utils/constants"; //named import for named export
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    
    useEffect(() => {
        console.log("useEffect is being called from header component");
    }, [btnName]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} /> {/* LOGO_URL is just like a variable hence in {} */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="button" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
