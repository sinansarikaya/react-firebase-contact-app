import { Link } from "react-router-dom";
import Reset from "../../assets/passwordReset.png";
import "./Form.scss";

const PasswordReset = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <form className="form-signin p-4 bg-light m-auto text-center shadow rounded">
        <img className="mb-4" src={Reset} alt="Password Reset" width={72} />
        <h1 className="h3 mb-3 fw-normal">Password Reset</h1>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <Link to="/login" className="mb-3 text-start text-muted">
          Login
        </Link>
        <button className="w-100 mt-3 btn btn-lg btn-login" type="submit">
          Send
        </button>
      </form>
    </main>
  );
};

export default PasswordReset;
