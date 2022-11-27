import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  addNewContact,
  readOneData,
  updateContact,
} from "../../../utils/firebaseFunctions";
import "./AddContact.scss";

const AddContact = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    readOneData(id, setContacts);
  }, [id, setContacts]);

  const addSubmit = (e) => {
    e.preventDefault();
    setContacts({ name: "", surname: "", tel: "", gender: "" });
    addNewContact(contacts);
    navigate("/");
  };

  const editSubmit = (e) => {
    e.preventDefault();
    updateContact(id, contacts);
    setContacts({ name: "", surname: "", tel: "", gender: "" });
    navigate("/");
  };

  return (
    <div className="addContainer w-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={id ? editSubmit : addSubmit}
        className="form-signin p-4 bg-light m-auto text-center shadow rounded"
      >
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="name"
            value={contacts?.name || ""}
            placeholder="First Name"
            onChange={(e) => setContacts({ ...contacts, name: e.target.value })}
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="surname"
            value={contacts?.surname || ""}
            placeholder="Last Name"
            onChange={(e) =>
              setContacts({ ...contacts, surname: e.target.value })
            }
            required
          />
          <label htmlFor="surname">Last Name</label>
        </div>

        <div className="form-floating mb-3 ">
          <input
            type="number"
            className="form-control"
            id="tel"
            value={contacts?.tel || ""}
            placeholder="Phone Number"
            onChange={(e) => setContacts({ ...contacts, tel: e.target.value })}
            required
          />
          <label htmlFor="tel">Phone Number</label>
        </div>

        <div className="form-floating mb-3 ">
          <select
            className="form-select"
            aria-label="Default select example"
            value={contacts?.gender || ""}
            onChange={(e) =>
              setContacts({ ...contacts, gender: e.target.value })
            }
            required
          >
            <option defaultValue>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          className="mb-3 mt-3 w-100 btn btn-lg btn-success btn-login"
          type="submit"
        >
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddContact;
