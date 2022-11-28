import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/register.png";
import { AuthContext } from "../../context/AuthContextProvider";
import { toastErrorNotify } from "../../helpers/ToastNotify";
import { userProfileUpdate } from "../../utils/authFunctions";
import "./Form.scss";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const fullName = currentUser?.displayName?.split(" ");
  const [userUpdate, setUserUpdate] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, surname, email, password, confirmPassword } = userUpdate;

    if (password === confirmPassword) {
      userProfileUpdate(name, surname, email, password, navigate);
    } else {
      toastErrorNotify("Passwords do not match");
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="form-signin p-4 bg-light m-auto text-center shadow rounded"
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
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            name="email"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="email">{currentUser?.email}</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>

        <button className="w-100 mt-3 btn btn-lg btn-login" type="submit">
          Update
        </button>
      </form>
    </main>
  );
};

export default Profile;
