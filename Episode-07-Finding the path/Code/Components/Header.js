import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../images/brand-logo.jpg";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="brand-logo">
        <img src={brandLogo} alt="brand" />
      </div>
      <ul className="list-items">
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
        {isLogin ? (
          <button
            className="login-logout-btn"
            onClick={() => setIsLogin(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="login-logout-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </ul>
    </header>
  );
};

export default Header;
