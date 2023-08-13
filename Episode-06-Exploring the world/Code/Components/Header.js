import { useState } from "react";
import brandLogo from "../images/brand-logo.jpg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="header">
      <div className="brand-logo">
        <img src={brandLogo} alt="brand" />
      </div>
      <ul className="list-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          className="login-logout-btn"
          onClick={() =>
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }
        >
          {btnName}
        </button>
      </ul>
    </header>
  );
};

export default Header;
