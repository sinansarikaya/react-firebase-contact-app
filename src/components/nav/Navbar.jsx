import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { logOut } from "../../utils/authFunctions";
import "./Navbar.scss";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const items = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <>
          <Link className="navbar-brand" to="/">
            Firebase Contact App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
            {currentUser || items ? (
              <>
                <NavLink className="nav-link" to="/profile">
                  {currentUser?.displayName || items?.displayName}
                </NavLink>
                <span className="nav-link" onClick={() => logOut(navigate)}>
                  Logout
                </span>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
