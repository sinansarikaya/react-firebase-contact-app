import ListIcon from "../../../assets/check-list.png";
import AddContact from "../../../assets/add.png";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sideBar d-flex flex-column flex-shrink-0">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li>
          <Link
            to="/contact-list"
            className="nav-link py-3 border-bottom rounded-0"
          >
            <img src={ListIcon} width={40} alt="Contact List Icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/add-contact"
            className="nav-link py-3 border-bottom rounded-0"
          >
            <img src={AddContact} width={40} alt="Contact List Icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
