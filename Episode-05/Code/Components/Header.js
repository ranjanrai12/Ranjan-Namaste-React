import brandLogo from "../images/brand-logo.jpg";

const Header = () => {
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
      </ul>
    </header>
  );
};

export default Header;
