import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/register.png";
import { AuthContext } from "../../context/AuthContextProvider";
import { userProfileUpdate } from "../../utils/authFunctions";
import "./Form.scss";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const fullName = currentUser?.displayName?.split(" ");
  const [userUpdate, setUserUpdate] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname } = userUpdate;
    const { email, photoURL } = currentUser;

    const capitalizeText = (text) => {
      return (
        text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      );
    };

    const displayName = `${capitalizeText(name)} ${capitalizeText(surname)}`;
    userProfileUpdate(displayName, email, photoURL, setCurrentUser, navigate);
  };

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="col-12 form-signin p-4 bg-light m-auto text-center shadow rounded"
      >
        <img className="mb-4" src={RegisterImg} alt="Register" width={72} />
        <h1 className="h3 mb-3 fw-normal">Profile</h1>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control capitalizeLetter"
            id="firstName"
            placeholder="Name"
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="firstName">{fullName && fullName[0]}</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control capitalizeLetter"
            id="lastName"
            placeholder="Last Name"
            name="surname"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="lastName">{fullName && fullName[1]}</label>
        </div>
        <button className="w-100 mt-3 btn btn-lg btn-login" type="submit">
          Update
        </button>
      </form>
    </main>
  );
};

export default Profile;
