import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reset from "../../assets/passwordReset.png";
import { passwordReset } from "../../utils/authFunctions";
import "./Form.scss";

const PasswordReset = () => {
  const [reset, setReset] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordReset(navigate, reset);
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="form-signin p-4 bg-light m-auto text-center shadow rounded"
      >
        <img className="mb-4" src={Reset} alt="Password Reset" width={72} />
        <h1 className="h3 mb-3 fw-normal">Password Reset</h1>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setReset(e.target.value)}
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
