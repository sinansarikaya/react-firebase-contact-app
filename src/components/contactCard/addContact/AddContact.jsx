import { addNewContact } from "../../../utils/firebaseFunctions";

const AddContact = ({ contacts, setContacts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    addNewContact(contacts);
  };

  return (
    <div className="addContainer w-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="form-signin p-4 bg-light m-auto text-center shadow rounded"
      >
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="name"
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
