import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import brandLogo from "../images/brand-logo.jpg";
import useOnlineStatus from "../../Hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="header flex justify-between items-center bg-slate-200">
      <div className="brand-logo">
        {/* <img className="w-28 h-16 cursor-pointer" src={brandLogo} alt="brand" /> */}
      </div>
      <ul className="flex gap-8 p-1">
        <li className="p-2">OnLine Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="hover:bg-slate-500 p-2 rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-slate-500 p-2 rounded-lg">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:bg-slate-500 p-2 rounded-lg">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:bg-slate-500 cursor-pointer p-2 rounded-lg">
          <Link to="/cart">Cart - {cartItems.length}</Link>
        </li>
        {isLogin ? (
          <button
            className="login-logout-btn rounded-lg hover:bg-slate-500 p-2"
            onClick={() => setIsLogin(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="login-logout-btn"
            onClick={() => setIsLogin(true)}
            // {onClick={() => navigate("/login")}}
          >
            Login
          </button>
        )}
      </ul>
    </header>
  );
};

export default Header;
