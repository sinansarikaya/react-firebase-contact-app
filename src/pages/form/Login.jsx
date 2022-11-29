import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/login.png";
import { loginWithEmail, loginWithGoogle } from "../../utils/authFunctions";
import "./Form.scss";

const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = login;

    loginWithEmail(email, password, navigate);
  };

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleLogin}
        className="col-12 form-signin p-4 bg-light m-auto text-center shadow rounded"
      >
        <img
          className="mb-4"
          src={LoginImg}
          alt="Login Logo"
          width={72}
          height={57}
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <Link to="/password-reset" className="mb-3 text-start text-muted">
          Forgot Password?
        </Link>
        <button className="mb-3 mt-3 w-100 btn btn-lg btn-login" type="submit">
          Sign in
        </button>
        <button
          onClick={() => loginWithGoogle(navigate)}
          className="w-100 btn btn-lg btn-login"
        >
          Sign in with Google
        </button>
      </form>
    </main>
  );
};

export default Login;
