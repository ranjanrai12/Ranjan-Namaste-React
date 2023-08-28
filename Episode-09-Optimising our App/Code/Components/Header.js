import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../images/brand-logo.jpg";
import useOnlineStatus from "../../Hooks/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      <div className="brand-logo">
        <img src={brandLogo} alt="brand" />
      </div>
      <ul className="list-items">
        <li>OnLine Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
