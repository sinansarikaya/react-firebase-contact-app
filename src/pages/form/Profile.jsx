import { Link } from "react-router-dom";
import RegisterImg from "../../assets/register.png";
import "./Form.scss";

const Profile = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <form className="form-signin p-4 bg-light m-auto text-center shadow rounded">
        <img className="mb-4" src={RegisterImg} alt="Register" width={72} />
        <h1 className="h3 mb-3 fw-normal">Profile</h1>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Name"
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Name"
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <Link to="/login" className="mb-3 text-start text-muted">
          Already have an account?
        </Link>
        <button className="w-100 mt-3 btn btn-lg btn-login" type="submit">
          Register
        </button>
      </form>
    </main>
  );
};

export default Profile;
