import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./ContactCard.scss";

const ContactCard = () => {
  return (
    <div className="card d-flex flex-row bg-light">
      <Sidebar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ContactCard;
