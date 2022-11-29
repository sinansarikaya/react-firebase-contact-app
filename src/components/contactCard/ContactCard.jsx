import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./ContactCard.scss";

const ContactCard = () => {
  return (
    <div className="card d-flex flex-row bg-light">
      <Sidebar />
      <div className="w-100 contactList">
        <Outlet />
      </div>
    </div>
  );
};

export default ContactCard;
