import logo from "../../assets/logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <header className="d-flex justify-content-center my-4">
      <img src={logo} alt="Sinan Sarikaya Logo" />
    </header>
  );
};

export default Header;
