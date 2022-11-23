import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/register.png";
import { createUser, loginWithGoogle } from "../../utils/authFunctions";
import { toastErrorNotify } from "../../helpers/ToastNotify";
import "./Form.scss";

const Register = () => {
  const [register, setRegister] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, surname, email, password, confirmPassword } = register;

    if (password === confirmPassword) {
      createUser(name, surname, email, password, navigate);
    } else {
      toastErrorNotify("Passwords do not match");
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleRegister}
        className="form-signin p-4 bg-light m-auto text-center shadow rounded"
      >
        <img className="mb-4" src={RegisterImg} alt="Register" width={72} />
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Name"
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Name"
            onChange={(e) =>
              setRegister({ ...register, surname: e.target.value })
            }
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
            onChange={(e) =>
              setRegister({ ...register, confirmPassword: e.target.value })
            }
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <Link to="/login" className="mb-3 text-start text-muted">
          Already have an account?
        </Link>
        <button className="w-100 mt-3 mb-3 btn btn-lg btn-login" type="submit">
          Register
        </button>
        <button
          onClick={() => loginWithGoogle(navigate)}
          className="w-100 btn btn-lg btn-login"
        >
          Register in with Google
        </button>
      </form>
    </main>
  );
};

export default Register;
